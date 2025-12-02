import { Component, inject } from '@angular/core';
import { RecipeModel } from '../Model/recipeModel';
import { Apiservices } from '../../services/apiservices';
import { ActivatedRoute, Router } from '@angular/router';

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
  router = inject(Router)
  route = inject(ActivatedRoute)
 recipeId:string = ""

  constructor(){
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      this.recipeId = res.id
      
    })
  }

  ngOnInit(){
    this.getAllRecipies()
  } 

  getAllRecipies(){
    this.api.getallrecipesAPI().subscribe((res:any)=>{
      if(this.recipeId){
        this.recipeDetails = res.find((item:any)=>item._id== this.recipeId)
        this.instructionArray = this.recipeDetails.instructions
        this.ingridentsArray = this.recipeDetails.ingredients
        this.selectMealTypeArray =  this.recipeDetails.mealType
      }
      console.log("api cal");
      const dummyMeal =  res.map((items:any)=>items.mealType)
      console.log(dummyMeal.flat(Infinity));
      dummyMeal.flat(Infinity).forEach((item:any) => {
        !this.mealArray.includes(item) && this.mealArray.push(item)
      });
      // console.log(this.mealArray);
      
    })
  }

  addIngredients(ingridinetInput:any){
    if(ingridinetInput.value){
     this.ingridentsArray.push(ingridinetInput.value)
     ingridinetInput.value = ""
    }
  }
  removeIngridents(value:string){
    this.ingridentsArray = this.ingridentsArray.filter((item:any)=>item!= value)
  }

  addInstructions(instructionInput:any){
    if(instructionInput.value){
     this.instructionArray.push(instructionInput.value)
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
else{
  this.selectMealTypeArray = this.selectMealTypeArray.filter((item:string)=>item !=mealCheckEvent.target.name)
}
}

// add recipe

addRecipe(){
  this.recipeDetails.ingredients = this.ingridentsArray
  this.recipeDetails.instructions = this.instructionArray
  this.recipeDetails.mealType = this.selectMealTypeArray
  const {name,ingredients,instructions,image,prepTimeMinutes,cookTimeMinutes,servings,difficulty,mealType,cuisine,caloriesPerServing} = this.recipeDetails
 console.log(name,ingredients,instructions,image,prepTimeMinutes,cookTimeMinutes,servings,difficulty,mealType,cuisine,caloriesPerServing);
 
  if(name &&  prepTimeMinutes && cookTimeMinutes && servings && difficulty && cuisine && image && caloriesPerServing){
      this.api.addRecipiApi(this.recipeDetails).subscribe((res:any)=>{
        alert("Recipe Added Successfully")
       
         this.recipeDetails = {}
         this.instructionArray = []
         this.ingridentsArray = []
         this.selectMealTypeArray = []
          this.router.navigateByUrl('/admin/recipe-list')
      })
  }else{
    alert("please fill the form completedly!!!")
  }
}

removeMealType(meal:string){
   this.selectMealTypeArray = this.selectMealTypeArray.filter((item:string)=>item !=meal)
}

// update recipe 
 
updateRecipe(){
  this.recipeDetails.ingredients = this.ingridentsArray
  this.recipeDetails.instructions = this.instructionArray
  this.recipeDetails.mealType = this.selectMealTypeArray
  const {name,ingredients,instructions,image,prepTimeMinutes,cookTimeMinutes,servings,difficulty,mealType,cuisine,caloriesPerServing} = this.recipeDetails
 console.log(name,ingredients,instructions,image,prepTimeMinutes,cookTimeMinutes,servings,difficulty,mealType,cuisine,caloriesPerServing);
 
  if(name &&  prepTimeMinutes && cookTimeMinutes && servings && difficulty && cuisine && image && caloriesPerServing){
      this.api.updateRecipeApi(this.recipeId,this.recipeDetails).subscribe((res:any)=>{
        alert("Recipe Updated Successfully")
       
         this.recipeDetails = {}
         this.instructionArray = []
         this.ingridentsArray = []
         this.selectMealTypeArray = []
          this.router.navigateByUrl('/admin/recipe-list')
      })
  }else{
    alert("please fill the form completedly!!!")
  }
}


}
