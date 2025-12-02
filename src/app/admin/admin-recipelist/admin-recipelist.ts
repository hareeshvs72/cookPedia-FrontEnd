import { Component, inject } from '@angular/core';
import { Apiservices } from '../../services/apiservices';

@Component({
  selector: 'app-admin-recipelist',
  standalone: false,
  templateUrl: './admin-recipelist.html',
  styleUrl: './admin-recipelist.css',
})
export class AdminRecipelist {
  api = inject(Apiservices)
  allRecipies:any = []
  searchKey:string = ""
 
  
 
  ngOnInit(){
    this.getAllrecipies()
  }
 
  getAllrecipies (){
    this.api.getallrecipesAPI().subscribe((res:any)=>{
      this.allRecipies = res
      console.log(this.allRecipies);
      
    })
  }
  removeRecipelIst(id:string){
    console.log(id);
    
    this.api.deleteRecipeApi(id).subscribe((res:any)=>{
      alert("remove recipe successfully")
      this.getAllrecipies()
    })
  }

}
