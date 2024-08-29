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
