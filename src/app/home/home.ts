import { Component, inject } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { RouterLink } from "@angular/router";
import { Apiservices } from '../services/apiservices';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [Footer, Header, RouterLink, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // property
  allRecipes:any = []
  api = inject(Apiservices)

  // constructor

  // life cycle
  ngOnInit(){
     this.getallRecipes()
  }
 
  // userdefinde function
  getallRecipes(){
    this.api.getallrecipesAPI().subscribe((res:any)=>{
      this.allRecipes = res.slice(0,6)
      console.log(this.allRecipes);
      
    })
  }
}
