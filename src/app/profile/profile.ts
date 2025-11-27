import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms';
import { Apiservices } from '../services/apiservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [Header, Footer, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  username: string = ""
  password: string = ""
  confirmassword: string = ""
  userId:string = ""
  profile = signal("https://tse2.mm.bing.net/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?pid=Api&P=0&h=180")
  api = inject(Apiservices)
  downloadList: any = []
  router = inject(Router)

  constructor() {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user") || "")
      this.username = user.username
      this.userId = user._id
      if (user.profile) {
        this.profile.set(user.profile)
      }
    }
  }
  ngOnInit() {
    this.getDownloadList()
  }
  getDownloadList() {
    this.api.getUserDownloadrecipi().subscribe((res) => {
      this.downloadList = res
      console.log(this.downloadList);

    })
  }
  getFile(event: any) {
    let uploadfile = event.target.files[0]
    // console.log(uploadfile);

    // convert to img url
    let fr = new FileReader()
    fr.readAsDataURL(uploadfile)
    fr.onload = (event: any) => {
      this.profile.set(event.target.result)
      // console.log(this.profile);

    }
  }

  editProfile() {
    if (this.username) {
      if (this.password != this.confirmassword) {
        alert("password and confirm password must be same!!!")
      
      } 
        this.api.updateUserApi({ username: this.username, password: this.password, profile: this.profile(),id:this.userId }).subscribe((res: any) => {
          sessionStorage.setItem("user", JSON.stringify(res))
          alert("profile updated successfully!!")
          if(this.password !=""){
           this.router.navigateByUrl('/profile')

          }
        })
    } else {
      alert("fill the Form Completedly");

    }
  }

} 
