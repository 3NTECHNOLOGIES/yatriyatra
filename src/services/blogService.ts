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

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.yatriyatra.com/api/v1";

export const blogService = {
  async getBlogs(filters: BlogFilters = {}) {
    try {
      // Build query string from filters
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, String(value));
      });

      // Add default status if not provided
      if (!filters.status) {
        queryParams.append("status", "published");
      }

      const response = await fetch(
        `${API_BASE_URL}/blogs?${queryParams.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      return {
        success: true,
        data: {
          blogs: data.blogs.map((blog: BlogPost) => ({
            ...blog,
            date: blog.createdAt || blog.date || new Date().toISOString(),
            title: blog.title || "Untitled Blog",
            author: blog.author || { id: "", name: "Anonymous", email: "" },
            category: blog.category || {
              id: "",
              name: "Uncategorized",
              slug: "uncategorized",
            },
            status: blog.status || "published",
            views: blog.views || 0,
            coverImage: blog.coverImage || "",
          })),
          totalPages: data.totalPages,
          page: data.page,
          limit: data.limit,
          totalResults: data.totalResults,
        },
      };
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to fetch blogs",
        data: {
          blogs: [],
          page: filters.page || 1,
          limit: filters.limit || 10,
          totalPages: 0,
          totalResults: 0,
        },
      };
    }
  },

  async getBlogById(id: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Blog post not found");
      }

      const data = await response.json();
      return {
        success: true,
        data: {
          blog: {
            ...data.blog,
            date:
              data.blog.createdAt || data.blog.date || new Date().toISOString(),
            content: data.blog.content || "",
          },
        },
      };
    } catch (error) {
      console.error("Error fetching blog by id:", error);
      return {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to fetch blog",
        data: { blog: {} as BlogPost },
      };
    }
  },
};
