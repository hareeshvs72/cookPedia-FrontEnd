import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
selected = new Date()
 isSideBArOpen:boolean = true

chartOptions: Highcharts.Options = {}; // Required
constructor(){
  
}

toggleSideBar(){
this.isSideBArOpen = !this.isSideBArOpen
}

}


