export default interface RecipeData {
  recipe: {
    ingredientLines: string[];
    label: string;
    calories: string;
    image: string;
    url: string;
  }
  _links: {};
}