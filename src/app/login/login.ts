import { Component, inject } from '@angular/core';
import { Footer } from '../footer/footer';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apiservices } from '../services/apiservices';

@Component({
  selector: 'app-login',
  imports: [Footer,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginform: FormGroup
    router = inject(Router)
    api = inject(Apiservices)

  constructor(private fb: FormBuilder) {
    this.loginform = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }
  
  login(){
      if(this.loginform.valid){
        const email = this.loginform.value.email
        const password = this.loginform.value.password
        this.api.loginApi({email,password}).subscribe({
          next:(res:any)=>{
          
            sessionStorage.setItem("token",res.token)
            sessionStorage.setItem("user",JSON.stringify(res.user))
            alert('login successFully!!!')
            res.user.role=="user" ? this.router.navigateByUrl('/') : this.router.navigateByUrl('/admin/home')
            this.loginform.reset()
            
          },
          error:(response:any)=>{
            alert(response.error)
            this.loginform.reset()
          }
        })
      }else{
        alert("invalid form")
      }
  }
}
