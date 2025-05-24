import api from "./api";
import { authService } from "./authService";

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: BlogAuthor;
  category: BlogCategory;
  date: string;
  status: string;
  views: number;
  content?: string;
  coverImage?: string;
  createdAt?: string;
  updatedAt?: string;
  featured?: boolean;
}

export interface BlogResponse {
  success: boolean;
  message: string;
  data: {
    blogs: BlogPost[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  };
}

export interface BlogDetailResponse {
  success: boolean;
  message: string;
  data: {
    blog: BlogPost;
  };
}

export interface BlogFilters {
  page?: number;
  limit?: number;
  sortBy?: string;
  orderBy?: string;
  search?: string;
  categoryId?: string;
  status?: string;
}

// Optimized function to clean up blog content
const cleanBlogContent = (content?: string): string => {
  if (!content) return "";

  // Clean up content in one pass
  return content
    .replace(/&nbsp;<pre/g, "<pre")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
};

// Cache for blog data to prevent redundant requests
const blogCache = new Map<string, { data: BlogPost; timestamp: number }>();
const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes

export const blogService = {
  async getBlogs(filters: BlogFilters = {}): Promise<BlogResponse> {
    try {
      // Set default status to "published" if not specified
      const filtersWithDefaults = {
        ...filters,
        status: filters.status || "published",
      };

      // Build query params in a single step
      const params = new URLSearchParams(
        Object.entries(filtersWithDefaults)
          .filter(([_, value]) => value !== undefined && value !== "")
          .map(([key, value]) => [key, String(value)])
      );

      const response = await api.get(`/blogs?${params.toString()}`);
      const formattedResponse = response.data;

      // Process all blogs in one pass if data exists
      if (formattedResponse.success && formattedResponse.data.blogs) {
        formattedResponse.data.blogs = formattedResponse.data.blogs.map(
          (blog: Partial<BlogPost>) => ({
            ...blog,
            date: blog.createdAt || blog.date || new Date().toISOString(),
          })
        );
      }

      return formattedResponse;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  },

  async getBlogById(
    id: string,
    requirePublished: boolean = true
  ): Promise<BlogDetailResponse> {
    try {
      // Check cache first
      const cachedBlog = blogCache.get(id);
      const now = Date.now();

      if (cachedBlog && now - cachedBlog.timestamp < CACHE_EXPIRY) {
        // If requiring published blogs, check status before returning cache result
        if (requirePublished && cachedBlog.data.status !== "published") {
          const error = new Error("Blog post not found or not published");
          (error as any).response = { status: 404 };
          throw error;
        }

        return {
          success: true,
          message: "Blog retrieved from cache",
          data: { blog: cachedBlog.data },
        };
      }

      // No cache hit, fetch from API
      const token = authService.getAccessToken();

      const response = await api.get(`/blogs/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token || ""}`,
        },
      });

      const data = response.data;

      // Process blog data when available
      if (data.success && data.data.blog) {
        const blog = data.data.blog;

        // If requiring published blogs, check status
        if (requirePublished && blog.status !== "published") {
          const error = new Error("Blog post not found or not published");
          (error as any).response = { status: 404 };
          throw error;
        }

        // Ensure date field exists
        if (!blog.date && blog.createdAt) {
          blog.date = blog.createdAt;
        }

        // Clean up HTML content
        if (blog.content) {
          blog.content = cleanBlogContent(blog.content);
        }

        // Store in cache
        blogCache.set(id, {
          data: blog,
          timestamp: now,
        });
      }

      return data;
    } catch (error: any) {
      console.error(`Error fetching blog by id ${id}:`, error);
      const errorResponse: BlogDetailResponse = {
        success: false,
        message: error.response?.data?.message || "Failed to fetch blog",
        data: { blog: {} as BlogPost },
      };
      throw error;
    }
  },

  // Clear the cache for testing or when needed
  clearCache() {
    blogCache.clear();
  },
};
