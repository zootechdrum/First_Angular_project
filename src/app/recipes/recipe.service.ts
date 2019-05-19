import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe  ('A recipe' , 'This is going to have eggs' , 'http://www.newdesignfile.com/postpic/2013/12/food-photography_377871.jpg',
     [new Ingredient('eggs', 3)]),
    new Recipe ('Burger', 'A Royal with cheese', 'https://photos.metrotimes.com/wp-content/uploads/2017/04/Royale_2.jpg',
      [new Ingredient('meat', 1), new Ingredient('cheese', 1)])
  ];
  getRecipe() {
    return this.recipes.slice();
  }
  constructor() {
  }

}
