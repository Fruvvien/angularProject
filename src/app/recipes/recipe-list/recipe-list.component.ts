import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://ketkes.com/wp-content/uploads/2015/06/929289492.jpg')
  ];
  constructor() {
    
  }
  ngOnInit(){

  }
}
