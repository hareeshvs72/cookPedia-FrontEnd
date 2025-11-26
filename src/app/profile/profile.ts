import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-profile',
  imports: [Header,Footer,FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
username:string = ""
password:string = ""
confirmassword:string = ""
 
constructor(){
  if(sessionStorage.getItem("user")){
    const user = JSON.parse(sessionStorage.getItem("user") || "") 
    this.username = user.username
  }
}
 
} 
