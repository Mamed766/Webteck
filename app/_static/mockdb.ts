import {
  Slide,
  ISlideLatestData,
  ICountersData,
  IProcessStep,
  Testimonial,
  BlogPost,
} from "../_types/type";

export const pagesItems = [
  "Shop Page",
  "Team",
  "Team Details",
  "Projects",
  "Projects Details",
  "Gallery",
  "Pricing",
  "Faq",
  "Error Page",
];

export const homeItems = [
  "Muti Page",
  "Multi Page New",
  "One Page",
  "Onepage New",
];

export const serviceItems = ["Services", "Service Details"];

export const blogItems = ["Blog", "Blog Details"];

export const slidesData: Slide[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    imageSrc:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/service_card_5.svg",
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    imageSrc:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/service_card_6.svg",
  },
  {
    id: 3,
    title: "Business Analysis",
    description:
      "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    imageSrc:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/service_card_3.svg",
  },
  {
    id: 4,
    title: "Software Services",
    description:
      "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    imageSrc:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/service_card_2.svg",
  },
  {
    id: 5,
    title: "UI/UX design",
    description:
      "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    imageSrc:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/service_card_1.svg",
  },
];

export const slidesLatestData: ISlideLatestData[] = [
  {
    title: "IT Consultency",
    description:
      "Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/project_2_1.jpg",
  },
  {
    title: "Web Development",
    description:
      "Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.",

    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/project_2_3.jpg",
  },
  {
    title: "App Development",
    description:
      "Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.",

    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/project_2_2.jpg",
  },
  {
    title: "App Development",
    description:
      "Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.",

    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/project_2_4.jpg",
  },
];

export const countersData: ICountersData[] = [
  {
    iconUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/counter_1_1.svg",
    count: "986+",
    description: "Finished Project",
  },
  {
    iconUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/counter_1_2.svg",
    count: "896+",
    description: "Happy Clients",
  },
  {
    iconUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/counter_1_3.svg",
    count: "396+",
    description: "Skilled Experts",
  },
  {
    iconUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/counter_1_4.svg",
    count: "496+",
    description: "Honorable Awards",
  },
];

export const stepsData: IProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Select a project",
    description:
      "Continua scale empowered metrics with cost effective innovation.",
    icon: "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/process_card_1.svg",
  },
  {
    id: 2,
    number: "02",
    title: "Project analysis",
    description:
      "Continua scale empowered metrics with cost effective innovation.",
    icon: "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/process_card_2.svg",
  },
  {
    id: 3,
    number: "03",
    title: "Plan Execute",
    description:
      "Continua scale empowered metrics with cost effective innovation.",
    icon: "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/process_card_3.svg",
  },
  {
    id: 4,
    number: "04",
    title: "Deliver result",
    description:
      "Continua scale empowered metrics with cost effective innovation.",
    icon: "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/process_card_4.svg",
  },
];

export const teamMembers = [
  {
    name: "Alex Furnandes",
    role: "Project Manager",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/team_3_2.jpg",
  },
  {
    name: "Maria Garcia",
    role: "UI/UX Designer",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/team_3_1.jpg",
  },
  {
    name: "John Doe",
    role: "Backend Developer",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/team_3_3.jpg",
  },
  {
    name: "John Doe",
    role: "Backend Developer",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/team_3_4.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "David Farnandes",
    role: "CEO at Anaton",
    testimonial:
      "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/testi_3_4.jpg",
    rating: 5,
  },
  {
    name: "Jackline Techie",
    role: "CTO at Kormala",
    testimonial:
      "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/testi_3_2.jpg",
    rating: 5,
  },
  {
    name: "Abraham Khalil",
    role: "CEO at Anatora",
    testimonial:
      "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/testi_3_1.jpg",
    rating: 5,
  },
  {
    name: "Md Sumon Mia",
    role: "CEO at Rimasu",
    testimonial:
      "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/testi_3_3.jpg",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    imageUrl:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2023/02/blog-s-1-4-391x250.jpg",
    date: "13,Feb2023",
    comments: "3 Comments",
    titleLine1: "Regional Manager limited",
    titleLine2: "time management.",
    description:
      "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate.",
    authorImage:
      "https://secure.gravatar.com/avatar/86d033e2d42a0631cc4f58b82dd01de9?s=96&d=mm&r=g",
    authorName: "By Webteck",
  },
  {
    id: 2,
    imageUrl:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2023/02/blog-s-1-3-391x250.jpg",
    date: "14,Mar2023",
    comments: "5 Comments",
    titleLine1: "What’s the Holding Back It ",
    titleLine2: "Solution Industry?",
    description:
      "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate.",
    authorImage:
      "https://secure.gravatar.com/avatar/86d033e2d42a0631cc4f58b82dd01de9?s=96&d=mm&r=g",
    authorName: "By Admin",
  },
  {
    id: 3,
    imageUrl:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2023/02/blog-s-1-1-391x250.jpg",
    date: "14,Mar2023",
    comments: "5 Comments",
    titleLine1: "What’s the Holding Back It ",
    titleLine2: "Solution Industry?",
    description:
      "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate.",
    authorImage:
      "https://secure.gravatar.com/avatar/86d033e2d42a0631cc4f58b82dd01de9?s=96&d=mm&r=g",
    authorName: "By Admin",
  },
  {
    id: 4,
    imageUrl:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2023/02/blog-s-1-1-391x250.jpg",
    date: "14,Mar2023",
    comments: "5 Comments",
    titleLine1: "Unsatiable entreaties may  ",
    titleLine2: "collecting Power.",
    description:
      "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate.",
    authorImage:
      "https://secure.gravatar.com/avatar/86d033e2d42a0631cc4f58b82dd01de9?s=96&d=mm&r=g",
    authorName: "By Admin",
  },
];
