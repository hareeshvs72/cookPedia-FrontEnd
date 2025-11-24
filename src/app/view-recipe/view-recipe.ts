import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Apiservices } from '../services/apiservices';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  imports: [Header, Footer, RouterLink],
  templateUrl: './view-recipe.html',
  styleUrl: './view-recipe.css',
})
export class ViewRecipe {

  recipeId:any = ""
 recipe:any = {}
 relatedRecipes:any = []
 api = inject(Apiservices)
  router = inject(ActivatedRoute)

 ngOnInit(){
//  get dinamic id from url
 
 this.router.params.subscribe((res:any)=>{
  this.recipeId = res.id
  console.log(this.recipeId);
  this.getRecipeDetails(this.recipeId)
 })
 }

 getRecipeDetails(id:any){
  this.api.viewRecipeApi(id).subscribe({
    next:(res:any)=>{
      this.recipe = res
      console.log(this.recipe);
     this.getRelatedRecipie(res.cuisine)
    },
    error:(reason:any)=>{
      console.log(reason.error);
      
    }
  })
 }

//  get related recipes

getRelatedRecipie(cuisine:any){
 this.api.relatedRecipesAPI(cuisine).subscribe((res:any)=>{
  if(res.length>1){
     this.relatedRecipes = res.filter((item:any)=>item.name != this.recipe.name)
     console.log(this.relatedRecipes);
     
  }else{
    this.relatedRecipes = []
  }
 })
}
  
}
