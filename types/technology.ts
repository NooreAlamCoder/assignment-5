export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-friendly" | "Intermediate" | "Advanced" | string;
  badge?: "Popular" | "Fast" | "Essential" | "Containers" | string;
}