export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  imageUrl: string;
  category: string;
  readTime: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Destinations for Summer 2024",
    excerpt:
      "Discover the most exciting destinations for your summer vacation this year. From stunning beaches to mountain retreats, we've curated the perfect list for your next adventure.",
    content: `
      <p>Summer 2024 is just around the corner, and with travel restrictions easing globally, it's the perfect time to plan your dream vacation. Here are our top 10 destinations that promise unforgettable experiences:</p>
      
      <h3>1. Bali, Indonesia</h3>
      <p>With its stunning beaches, lush rice terraces, and vibrant cultural scene, Bali continues to be a favorite for travelers seeking a perfect blend of relaxation and adventure.</p>
      
      <h3>2. Santorini, Greece</h3>
      <p>Famous for its white-washed buildings with blue domes, stunning sunsets, and crystal-clear waters, Santorini offers a magical Mediterranean escape.</p>
      
      <h3>3. Kyoto, Japan</h3>
      <p>Experience the perfect harmony of ancient traditions and modern innovations in Kyoto, especially beautiful during the summer months when gardens are in full bloom.</p>
      
      <h3>4. Costa Rica</h3>
      <p>For nature lovers and adventure seekers, Costa Rica's biodiversity, rainforests, and beautiful beaches make it an ideal eco-friendly destination.</p>
      
      <h3>5. Amalfi Coast, Italy</h3>
      <p>The dramatic coastline, colorful fishing villages, and exquisite Italian cuisine make the Amalfi Coast a timeless summer destination.</p>
      
      <h3>6. Queenstown, New Zealand</h3>
      <p>Known as the adventure capital of the world, Queenstown offers breathtaking landscapes and countless outdoor activities.</p>
      
      <h3>7. Marrakech, Morocco</h3>
      <p>Immerse yourself in the vibrant colors, exotic scents, and rich history of Marrakech, a city that stimulates all your senses.</p>
      
      <h3>8. Reykjavik, Iceland</h3>
      <p>Experience the midnight sun and explore Iceland's otherworldly landscapes, from geothermal spas to stunning waterfalls.</p>
      
      <h3>9. Vancouver, Canada</h3>
      <p>With its perfect blend of urban sophistication and natural beauty, Vancouver is ideal for those who don't want to choose between city life and outdoor adventures.</p>
      
      <h3>10. Cape Town, South Africa</h3>
      <p>From Table Mountain to vibrant markets and exceptional wildlife, Cape Town offers a diverse range of experiences for every type of traveler.</p>
      
      <p>Start planning your summer adventure now to secure the best deals and avoid the rush. Happy travels!</p>
    `,
    date: "May 15, 2024",
    author: "Sarah Johnson",
    authorRole: "Travel Expert",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Travel Tips",
    readTime: "6 min read",
    tags: ["summer", "beaches", "vacation"],
  },
  {
    id: 2,
    title: "Budget Travel: How to Explore Europe for Less",
    excerpt:
      "Expert tips on how to make your European dream vacation affordable and enjoyable. Learn how to save on accommodations, transportation, and still experience the best of European culture and cuisine.",
    content: `
      <p>Europe has long been a dream destination for many travelers, but it's often associated with high costs. The good news is that with smart planning and insider knowledge, you can experience the best of Europe without breaking the bank. Here are our expert tips for budget-friendly European travel:</p>
      
      <h3>Travel During Off-Peak Seasons</h3>
      <p>Consider visiting Europe during the shoulder seasons (April-May or September-October) when prices are lower, weather is still pleasant, and tourist crowds are thinner. Winter travel (except during holidays) can offer even better deals, especially for city breaks.</p>
      
      <h3>Choose Budget-Friendly Destinations</h3>
      <p>While cities like Paris, London, and Amsterdam are must-sees, consider spending more time in Eastern and Southern European countries like Portugal, Greece, Poland, Hungary, and the Czech Republic, where your money goes further.</p>
      
      <h3>Use Public Transportation</h3>
      <p>Europe's excellent public transportation network makes it easy to get around without renting a car. Consider regional trains, buses, and metro systems for affordable travel between and within cities.</p>
      
      <h3>Stay in Alternative Accommodations</h3>
      <p>Look beyond traditional hotels to save money. Hostels, guesthouses, vacation rentals, and home exchanges can offer significant savings. Many budget-friendly accommodations now offer private rooms alongside dormitory options.</p>
      
      <h3>Take Advantage of Free Attractions</h3>
      <p>Many European cities offer free walking tours, museums with free admission days, and beautiful public spaces that cost nothing to enjoy. Research these opportunities before your trip.</p>
      
      <h3>Eat Like a Local</h3>
      <p>Avoid tourist trap restaurants and instead eat where the locals do. Visit local markets, try street food, and consider picnicking in parks. Many European restaurants offer affordable fixed-price lunch menus that are much cheaper than dinner.</p>
      
      <h3>Plan Your Splurges</h3>
      <p>Decide in advance which experiences are worth splurging on and save in other areas. Perhaps a special meal in Italy or a guided tour of a specific historical site is worth the extra expense.</p>
      
      <p>With these strategies, you can make your European dream vacation a reality without returning home to a mountain of debt. The memories you'll create will be priceless, regardless of how much you spend.</p>
    `,
    date: "May 8, 2024",
    author: "Michael Chen",
    authorRole: "Budget Travel Specialist",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Budget Travel",
    readTime: "8 min read",
    tags: ["europe", "budget", "tips"],
  },
  {
    id: 3,
    title: "Must-Visit Cultural Festivals Around the World",
    excerpt:
      "Experience the vibrant cultural diversity through these amazing festivals. From colorful celebrations to ancient traditions, these festivals offer a unique glimpse into different cultures around the globe.",
    content: `
      <p>Cultural festivals provide a unique window into the traditions, values, and vibrant expressions of communities around the world. Here's a guide to some of the most spectacular and meaningful celebrations worth planning your travels around.</p>
      
      <h3>Carnival, Rio de Janeiro, Brazil</h3>
      <p>This famous pre-Lenten celebration features elaborate costumes, pulsating samba music, and spectacular parades. The energy and exuberance of Rio's Carnival make it a bucket-list event for many travelers.</p>
      
      <h3>Holi, India</h3>
      <p>Known as the "Festival of Colors," this Hindu spring celebration involves people throwing colored powder and water at each other, creating an atmosphere of joy and unity that transcends social boundaries.</p>
      
      <h3>Día de los Muertos, Mexico</h3>
      <p>This "Day of the Dead" celebration honors departed loved ones with beautiful altars, marigold flowers, sugar skulls, and vibrant processions that blend pre-Hispanic and Catholic traditions.</p>
      
      <h3>Songkran, Thailand</h3>
      <p>Thailand's New Year water festival features water fights and cleansing rituals symbolizing purification and the washing away of sins and bad luck from the previous year.</p>
      
      <h3>Oktoberfest, Munich, Germany</h3>
      <p>The world's largest beer festival combines traditional Bavarian culture with modern celebrations, featuring beer tents, folk music, traditional costumes, and hearty German cuisine.</p>
    `,
    date: "April 30, 2024",
    author: "Priya Sharma",
    authorRole: "Cultural Expert",
    authorImage:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1604611057361-74054a97cf4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Culture",
    readTime: "7 min read",
    tags: ["festivals", "culture", "traditions"],
  },
  {
    id: 4,
    title: "Family-Friendly Holiday Packages for 2024",
    excerpt:
      "Plan the perfect family vacation with these specially designed holiday packages. These all-inclusive options offer something for everyone, ensuring a stress-free and memorable trip for the whole family.",
    content: `
      <p>Planning a family vacation that keeps everyone happy can be challenging. These family-friendly holiday packages for 2024 take the stress out of planning while ensuring fun for all ages.</p>
      
      <h3>Disney World Resort Package, Orlando</h3>
      <p>The ultimate family destination with accommodations at Disney resorts, park hopper passes, character dining experiences, and convenient transportation between parks.</p>
      
      <h3>All-Inclusive Beach Resorts, Caribbean</h3>
      <p>Resorts in Jamaica, Dominican Republic, and Bahamas offering kids' clubs, family-friendly activities, multiple dining options, and beautiful beaches with water sports for all ages.</p>
      
      <h3>European Family Adventure, Italy and France</h3>
      <p>A balanced itinerary combining educational experiences at historical sites with fun activities like cooking classes, bike tours, and outdoor adventures, all with family-friendly accommodations.</p>
    `,
    date: "April 22, 2024",
    author: "David Wilson",
    authorRole: "Family Travel Specialist",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Family Travel",
    readTime: "5 min read",
    tags: ["family", "packages", "vacation"],
  },
  {
    id: 5,
    title: "Adventure Travel: Exploring the Unknown",
    excerpt:
      "Step off the beaten path and discover exciting adventures waiting for you. From thrilling hikes to adrenaline-pumping activities, these destinations offer the perfect escape for adventure seekers.",
    content: `
      <p>For those who seek thrills and new experiences, adventure travel offers the perfect combination of excitement, challenge, and discovery. Here are some of the most compelling adventure destinations and activities for 2024.</p>
      
      <h3>Trekking in Patagonia, Chile/Argentina</h3>
      <p>Hike through some of the world's most dramatic landscapes, featuring towering peaks, massive glaciers, and pristine alpine lakes in Torres del Paine and Los Glaciares National Parks.</p>
      
      <h3>Safari in Botswana</h3>
      <p>Experience a different kind of adventure with guided safaris in the Okavango Delta, where you can observe elephants, lions, and countless other wildlife in their natural habitat.</p>
      
      <h3>Mountaineering in the Himalayas, Nepal</h3>
      <p>Challenge yourself with guided treks to Everest Base Camp or around the Annapurna Circuit, experiencing the majesty of the world's highest mountains and rich Sherpa culture.</p>
    `,
    date: "April 15, 2024",
    author: "Alex Rodriguez",
    authorRole: "Adventure Guide",
    authorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1496687651452-843776ca0562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    readTime: "9 min read",
    tags: ["adventure", "hiking", "outdoor"],
  },
  {
    id: 6,
    title: "Eco-Tourism: Sustainable Travel Options",
    excerpt:
      "Learn how to minimize your environmental impact while exploring the world. Discover eco-friendly accommodations, transportation methods, and activities that help preserve the natural beauty of our planet.",
    content: `
      <p>Sustainable travel is no longer just a trend but a necessary approach to preserving the natural and cultural treasures we visit. Here's how to make your travels more environmentally responsible and socially conscious.</p>
      
      <h3>Eco-Friendly Accommodations</h3>
      <p>Stay at certified green hotels, eco-lodges, and properties that implement water and energy conservation, waste reduction, and support local communities through employment and sourcing.</p>
      
      <h3>Responsible Wildlife Tourism</h3>
      <p>Choose wildlife experiences that prioritize animal welfare and conservation. Avoid attractions that exploit animals and instead support sanctuaries and protected areas that focus on rehabilitation and natural behaviors.</p>
      
      <h3>Carbon-Conscious Transportation</h3>
      <p>Reduce your carbon footprint by taking direct flights when possible, using public transportation, renting electric vehicles, or exploring destinations by bicycle or on foot.</p>
    `,
    date: "April 8, 2024",
    author: "Emma Green",
    authorRole: "Sustainability Expert",
    authorImage:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Eco-Tourism",
    readTime: "7 min read",
    tags: ["eco-friendly", "sustainable", "green travel"],
  },
];
