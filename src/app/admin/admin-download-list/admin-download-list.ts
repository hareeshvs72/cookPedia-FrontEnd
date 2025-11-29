import { Component, inject } from '@angular/core';
import { Apiservices } from '../../services/apiservices';

@Component({
  selector: 'app-admin-download-list',
  standalone: false,
  templateUrl: './admin-download-list.html',
  styleUrl: './admin-download-list.css',
})
export class AdminDownloadList {
 downloadList:any = []
 api= inject(Apiservices)

 ngOnInit(){
this.getAllDownload()
 }
 getAllDownload(){
  this.api.getAdminAllDownloadApi().subscribe((res:any)=>{
    this.downloadList = res
    console.log(this.downloadList);
    
  })
 }
}
