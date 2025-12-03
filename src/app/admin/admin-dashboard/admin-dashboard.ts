import { Component, inject } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Apiservices } from '../../services/apiservices';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
api = inject(Apiservices)
selected = new Date()
 isSideBArOpen:boolean = true

chartOptions: Highcharts.Options = {}; // Required
userCount:number = 0
recipeCount:number = 0
downloadCount:number = 0
notification:number = 0
router = inject(Router)
constructor(){
  this.chartOptions = {
    chart:{
      type:'bar'
    },
    title:{
      text:"Analysis Of Download Recipe Based On Cuisine"
    },
    xAxis:{
      type:'category'
    },
    yAxis:{
       title:{
      text:"Total Download Recipe Count"
    }
    },
    legend:{
      enabled:false
    },
    credits:{
      enabled:false
    },
    series:[
      {
        name:'Cuisine',
        colorByPoint:true,
        type:'bar',
        data:[
          {
            name:'Italian',
            y:30
          }
        ]


      }
    ]
  }
}

ngOnInit(){
  this.getUser()
  this.getRecipe()
  this.download()
  this.getNotification()
}

toggleSideBar(){
this.isSideBArOpen = !this.isSideBArOpen
}
getUser(){
this.api.getAllUserApi().subscribe((res:any)=>{
  this.userCount = res.length
})
}
getRecipe(){
  this.api.getallrecipesAPI().subscribe((res:any)=>{
  this.recipeCount = res.length
  })
}
download(){
  this.api.getAdminAllDownloadApi().subscribe((res:any)=>{
  this.downloadCount = res.map((item:any)=>item.count).reduce((acu:any,curr:any)=>acu+curr)
  console.log(this.downloadCount);
  
  })
}

getNotification(){
  this.api.getAdminAllFeedbacksApi().subscribe((res:any)=>{
    // console.log(res);
    
  this.notification = res.filter((item:any)=>item.status == "pending").length
  // console.log(this.notification);
  
  })
}

logOut(){
  sessionStorage.clear()
  this.router.navigateByUrl('/login')
}

}


