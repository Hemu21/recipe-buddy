export interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  tags?: string[];
}
