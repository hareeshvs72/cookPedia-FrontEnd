import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-save-recipes',
  imports: [Header,Footer],
  templateUrl: './save-recipes.html',
  styleUrl: './save-recipes.css',
})
export class SaveRecipes {

}
