import { Recipe } from './recipe.model';


export class RecipeService {
 private recipes: Recipe[] = [
    new Recipe  ('A recipe', 'This is going to have eggs', 'http://www.newdesignfile.com/postpic/2013/12/food-photography_377871.jpg')
  ];
  getRecipe() {
    return this.recipes.slice();
  }

}
