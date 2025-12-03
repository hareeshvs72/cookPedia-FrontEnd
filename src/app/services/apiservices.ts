import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RecipeModel } from '../admin/Model/recipeModel';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {
  http = inject(HttpClient)
  serverURl = "http://localhost:3000"
   
 
  // get all recipes
  getallrecipesAPI (){
   return this.http.get(`${this.serverURl}/all-recipes`)
  }
  // register api
  registerApi(reqBody:any){
   return this.http.post(`${this.serverURl}/register`,reqBody)
  }
  // login user

  loginApi(reqBody:any){
    return this.http.post(`${this.serverURl}/login`,reqBody)
  }
  // add feed back

 addFeeedbacksAPi(feedback:any){
    return this.http.post(`${this.serverURl}/user/feedback`,feedback)
  }

  // get all feedbacks 
 
  
  getAllFeedbackApi(){
    return this.http.get(`${this.serverURl}/get/feedback`)
  }
   
  // append token

  appendToken(){
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if(token){
       headers = headers.append('Authorization',`Bearer ${token}`)
    }
    return {headers}
  }

  // view recipe

  viewRecipeApi(recipeId:string){
    return this.http.get(`${this.serverURl}/recipes/${recipeId}/view`,this.appendToken())
  }
  // related recipie
   relatedRecipesAPI(cuisine:string){
    return this.http.get(`${this.serverURl}/related-recipes?cuisine=${cuisine}`,this.appendToken())
  }
  // add to download 
  addToDownloadrecipeAPI(recipe:any){
    ///recipes/:id/download
    return this.http.put(`${this.serverURl}/recipes/${recipe._id}/download`,recipe,this.appendToken())
  }
  // save recipie
  saveRecipeApi(recipe:any){
       return this.http.post(`${this.serverURl}/recipes/${recipe._id}/save`,recipe,this.appendToken())

  }
  // get save recipes

 getAllSaveRecipeAPi(){
         return this.http.get(`${this.serverURl}/recipes/save`,this.appendToken())

 }
//  delete recipe

 deleteRecipeApi(recipeId:any){
         return this.http.delete(`${this.serverURl}/recipes/${recipeId}/remove`,this.appendToken())

 }
//  get user recipie download list api
 getUserDownloadrecipi(){
         return this.http.get(`${this.serverURl}/recipe/download`,this.appendToken())

 }

//  update user api
// 
 updateUserApi(user:any){
         return this.http.put(`${this.serverURl}/user/${user.id}/edit`,user,this.appendToken())
 }

//  get all user 

 getAllUserApi(){
         return this.http.get(`${this.serverURl}/users`,this.appendToken())

 }
//  all download
 getAdminAllDownloadApi(){
          return this.http.get(`${this.serverURl}/download`,this.appendToken())

 }
//  all feedback
  getAdminAllFeedbacksApi(){
          return this.http.get(`${this.serverURl}/feedback`,this.appendToken())

 }
//  update feedback status 
  updateFeedBackStatusApi(id:string,status:string){
          return this.http.get(`${this.serverURl}/feedback/${id}/edit?status=${status}`,this.appendToken())

 }

//  add recipe 
 addRecipiApi(recipe:RecipeModel){
     return this.http.post(`${this.serverURl}/add/recipe`,recipe,this.appendToken())
 }

//  remove recipe
// deletRecipeApi(recipeId:string){
//      return this.http.delete(`${this.serverURl}/recipe/${recipeId}`,this.appendToken())
// }

deleteRecipeAdminApi(recipeId:string){
     return this.http.delete(`${this.serverURl}/recipe/${recipeId}`,this.appendToken())
 }

 

// update recipe

 updateRecipeApi(recipeId:string,recipe:RecipeModel){
     return this.http.put(`${this.serverURl}/recipe/${recipeId}/update`,recipe,this.appendToken())
 }

}
