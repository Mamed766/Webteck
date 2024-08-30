export type DropdownProps = {
  items: string[];
};

export interface Slide {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export interface ITiltOptions {
  reverse: boolean;
  max: number;
  perspective: number;
  speed: number;
  transition: boolean;
  axis: "x" | "y" | null;
  reset: boolean;
  easing: string;
  scale: number;
}

export interface ISlideLatestData {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ICountersData {
  iconUrl: string;
  count: string;
  description: string;
}

export interface IProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export type Testimonial = {
  name: string;
  role: string;
  testimonial: string;
  imageUrl: string;
  rating: number;
};

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};
