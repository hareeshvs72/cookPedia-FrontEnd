import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Apiservices } from '../services/apiservices';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [Header,Footer,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  

  api = inject(Apiservices)
  name:string = ""
  email:string = ""
  message:string = ""

 addFeedback(){
  if(this.name !="" || this.email!="" || this.message!=""){
      this.api.addFeeedbacksAPi({name:this.name,email:this.email,message:this.message}).subscribe((res:any)=>{
    alert(res)
    this.name=""
    this.email = ""
    this.message =  ""
  })
  }else{
    alert("fil the form Completedly")
  }
 }

}
