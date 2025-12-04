import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Recipes } from './recipes/recipes';
import { Register } from './register/register';
import { SaveRecipes } from './save-recipes/save-recipes';
import { ViewRecipe } from './view-recipe/view-recipe';
import { Pnf } from './pnf/pnf';
import { routeGuard } from './guards/route-guard';
import { adminGuardGuard } from './guards/admin-guard-guard';
export const routes: Routes = [

     // lazy loaded module path
     {
          path:'admin', canActivate:[adminGuardGuard] ,loadChildren:()=>import('./admin/admin-module').then(module=>module.AdminModule)
     },
     // http://localhost:4200/
    {
         path:"" , component:Home ,title:"Home"
    },
     // http://localhost:4200/about
    {
         path:"about" , component:About ,title:"About"
    },
     // http://localhost:4200/contact
    {
         path:"contact" , component:Contact ,title:"Contact"
    }
    ,
     // http://localhost:4200/login
    {
         path:"login" , component:Login ,title:"Login"
    }
    ,
     // http://localhost:4200/profile
    {
         path:"profile",canActivate:[routeGuard] , component:Profile ,title:"Profile"
    }
    ,
     // http://localhost:4200/recipies
    {
         path:"recipes" , component:Recipes ,title:"Recipes"
    }
    ,
     // http://localhost:4200/register
    {
         path:"register" , component:Register ,title:"Register"
    }
    ,
     // http://localhost:4200/recipe/save
    {
         path:"recipe/save",canActivate:[routeGuard] , component:SaveRecipes ,title:"Save-Recipes"
    }
    ,
     // http://localhost:4200/recipe/id/view
    {
         path:"recipe/:id/view",canActivate:[routeGuard] , component:ViewRecipe ,title:"View"
    }
    ,
     // http://localhost:4200/ -page not found
    {
         path:"**" , component:Pnf ,title:"Pnf"
    }
];
