import { HttpClient } from '@angular/common/http';
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
}
