import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}

// recipeSelected = new EventEmitter<Recipe>();

// private recipes: Recipe[] = [
//    new Recipe  ('A recipe', 'This is going to have eggs', 'http://www.newdesignfile.com/postpic/2013/12/food-photography_377871.jpg')
//  ];
//  getRecipe() {
//    return this.recipes.slice();
//  }
