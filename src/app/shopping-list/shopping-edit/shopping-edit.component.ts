import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild(Input) nameInput: Input;
  nameOfIngredient: string;

  constructor() {
    console.log(this.nameOfIngredient);
  }

  ngOnInit() {
  }
  addIngredient(nameOfIng: HTMLInputElement) {
    console.log(nameOfIng.value);

  }

}
