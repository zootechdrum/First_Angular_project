import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe (' A test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2017/05/11/19/44/fruit-2305192_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
