import { Component, inject, signal } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Apiservices } from '../services/apiservices';
import { Router } from '@angular/router';
import { SearchPipe } from '../pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  imports: [Header,Footer,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
  p:number = 1
allRecipes:any = []
cuisineArray:any = []
mealTypeArray:any = []
dummyAllRecipes:any = []
searchKey:string = ''

http = inject(Apiservices)
router = inject(Router)



 ngOnInit(){
  this.getAllRecipies()
  }

// get all recipies
getAllRecipies(){
  this.http.getallrecipesAPI().subscribe({
    next:((res:any)=>{
      console.log(res);
      this.allRecipes = res
      this.dummyAllRecipes = res

      this.allRecipes.forEach( (item:any) => {
        !this.cuisineArray.includes(item.cuisine) && this.cuisineArray.push(item.cuisine)
       
      });
       console.log(this.cuisineArray);


      const dummyArray = this.allRecipes.map((item:any)=>(item.mealType)).flat(Infinity)
          // console.log(dummyArray);
          
        dummyArray.forEach((item:any)=>{
          !this.mealTypeArray.includes(item) && this.mealTypeArray.push(item)
        })
      console.log(this.mealTypeArray);
      
    })
  })



}
// navigate view

navigateView(recipeId:string){
  if(sessionStorage.getItem("token")){
    this.router.navigateByUrl(`/recipe/${recipeId}/view`)

  }
  else{
    alert("Please Login To GEt access to Our Recipe Collections !!!")
  }
}
// fillter recipes

fillterRecipe(key:string,value:string){
  this.allRecipes =  this.dummyAllRecipes.filter((item:any)=>item[key] == value )
  console.log(this.allRecipes);
  
}

}
