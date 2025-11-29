import { Component, inject } from '@angular/core';
import { Apiservices } from '../../services/apiservices';

@Component({
  selector: 'app-admin-userlist',
  standalone: false,
  templateUrl: './admin-userlist.html',
  styleUrl: './admin-userlist.css',
})
export class AdminUserlist {
 allUser:any = []
 api= inject(Apiservices)

 ngOnInit(){
this.getallUser()
 }
 getallUser(){
  this.api.getAllUserApi().subscribe((res:any)=>{
    this.allUser = res
    console.log(this.allUser);
    
  })
 }
}
