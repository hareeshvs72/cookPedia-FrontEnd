import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Apiservices } from '../services/apiservices';

@Component({
  selector: 'app-save-recipes',
  imports: [Header,Footer],
  templateUrl: './save-recipes.html',
  styleUrl: './save-recipes.css',
})
export class SaveRecipes {
  allRecipes:any = {}
 api = inject(Apiservices)
 
 ngOnInit(){
  this.getallRecipes()
 }

 getallRecipes(){
  this.api.getAllSaveRecipeAPi().subscribe((res:any)=>{
    this.allRecipes = res
    console.log(this.allRecipes);
    
  })
 }
 removeSaveRecipe(recipeId:any){
  this.api.deleteRecipeApi(recipeId).subscribe((res:any)=>{
    alert("delete recipe Successfully!!")
    this.getallRecipes()
  })
 }
}
