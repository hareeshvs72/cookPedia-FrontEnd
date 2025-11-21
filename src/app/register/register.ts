import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [Footer,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
 
  registerForm:FormGroup

  constructor(private fb:FormBuilder){
        this.registerForm =  this.fb.group({
           username:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]]
        })
  }


}
