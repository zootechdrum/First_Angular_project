import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {
  @Input() recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {
    console.log(this.recipeSelected);
   }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.recipeSelected = recipe;
      }
    );
  }

}
