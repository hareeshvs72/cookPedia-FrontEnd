import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
 let router = inject(Router)
 const user = JSON.parse(sessionStorage.getItem("user")|| "")
  if(user.role == "admin"){
        return true;
  }
  else{
    alert("UnAuthorised Access... Place Login !!!")
    setTimeout(()=>{
      router.navigateByUrl('/login')
    },100);
    return false;
  }
};
