import { Component, inject } from '@angular/core';
import { RecipeModel } from '../Model/recipeModel';
import { Apiservices } from '../../services/apiservices';

@Component({
  selector: 'app-admin-add-recipe',
  standalone: false,
  templateUrl: './admin-add-recipe.html',
  styleUrl: './admin-add-recipe.css',
})
export class AdminAddRecipe {
   
  recipeDetails:RecipeModel={}
  ingridentsArray:any = []
  instructionArray:any = []
  mealArray:any = []
  selectMealTypeArray:any = []  
  api= inject(Apiservices)

  ngOnInit(){
    this.getAllRecipies()
  } 

  getAllRecipies(){
    this.api.getallrecipesAPI().subscribe((res:any)=>{
      console.log("api cal");
      const dummyMeal =  res.map((items:any)=>items.mealType)
      console.log(dummyMeal.flat(Infinity));
      dummyMeal.flat(Infinity).forEach((item:any) => {
        !this.mealArray.includes(item) && this.mealArray.push(item)
      });
      console.log(this.mealArray);
      
    })
  }

  addIngredients(ingridinetInput:any){
    if(ingridinetInput.value){
     this.ingridentsArray.push(ingridinetInput.value)
     ingridinetInput.value = ""
    }
  }
  removeIngridents(value:string){
    this.ingridentsArray = this.ingridentsArray.filter((item:any)=>{
      item!= value
    })
  }

  addInstructions(instructionInput:any){
    if(instructionInput.value){
     this.ingridentsArray.push(instructionInput.value)
     instructionInput.value = ""
    }
  }

removeInstruction(value:string){
  this.instructionArray = this.instructionArray.filter((items:any)=>items!=value)
}

chooseMeal(mealCheckEvent:any){
if(mealCheckEvent.target.checked){
  !this.selectMealTypeArray.includes(mealCheckEvent.target.name) && this.selectMealTypeArray.push(mealCheckEvent.target.name)
}
}

}
