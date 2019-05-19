import { Component, OnInit, Input} from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Ingredient } from 'src/app/shared/ingredients.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {

  @Input() element: {name: string, description: string, imagePath: string, ingredients: []};


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit( this.element );
  }

}
