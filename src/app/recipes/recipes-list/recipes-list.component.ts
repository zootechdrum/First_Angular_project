import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe  ('A recipe', 'This is going to have eggs', 'http://www.newdesignfile.com/postpic/2013/12/food-photography_377871.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
