import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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
}
