import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isLoggedin:boolean = false
  logInUSername:string = ""
  router = inject(Router)
  ngOnInit(){
   if( sessionStorage.getItem("token") && sessionStorage.getItem("user")){
    this.isLoggedin = true
    this.logInUSername = JSON.parse(sessionStorage.getItem("user") || "")?.username?.split(" ")[0];

   }
  }


  logout() {
  sessionStorage.clear();
  this.isLoggedin = false;
  this.logInUSername = "";
  this.router.navigateByUrl('/');
}


}
