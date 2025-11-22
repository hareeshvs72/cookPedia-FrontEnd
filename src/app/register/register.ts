import { Component, inject } from '@angular/core';
import { Footer } from '../footer/footer';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservices } from '../services/apiservices';
import { subscribe } from 'diagnostics_channel';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [Footer,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
 
  registerForm:FormGroup
  api=inject(Apiservices)
  router = inject(Router)


  constructor(private fb:FormBuilder){
        this.registerForm =  this.fb.group({
           username:["demo",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
            email:["demo",[Validators.required,Validators.email]],
             password:["demo",[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
        })
  }

  regisiter(){
    // this.registerForm.get('username')?.errors
    if(this.registerForm.valid){
      const username = this.registerForm.value.username
      const email = this.registerForm.value.email
      const password = this.registerForm.value.password
       
       this.api.registerApi({username,email,password}).subscribe({
        next:(res:any)=>{
          alert("register sucess fully")
          this.router.navigateByUrl('/login')
          this.registerForm.reset()

        },
        error:(reason:any)=>{
          alert(reason.error)
          this.registerForm.reset()
        }
       })

        
    }
    else{
      alert("invalid form")
    }
  }


}
