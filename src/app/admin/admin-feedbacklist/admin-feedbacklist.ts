import { Component, inject } from '@angular/core';
import { Apiservices } from '../../services/apiservices';

@Component({
  selector: 'app-admin-feedbacklist',
  standalone: false,
  templateUrl: './admin-feedbacklist.html',
  styleUrl: './admin-feedbacklist.css',
})
export class AdminFeedbacklist {
 feedbackList:any = []
 api= inject(Apiservices)

 ngOnInit(){
this.getAllFeedBacks()
 }
//  all feedback list
 getAllFeedBacks(){
  this.api.getAdminAllFeedbacksApi().subscribe((res:any)=>{
    this.feedbackList = res
    console.log(this.feedbackList);
    
  })
 }
//  update feedback status

updateFeedBackStatus(id:string,status:string){
  this.api.updateFeedBackStatusApi(id,status).subscribe((res:any)=>{
        alert("status updated SuccessFully")

    this.getAllFeedBacks()
  })
}
 
}
