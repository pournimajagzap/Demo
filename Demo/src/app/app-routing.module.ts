import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CompanyComponent } from './company/company.component';
import { Demo2Component } from './demo2/demo2.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  {path:"dashboard",component:Demo2Component,
  children:[
    {path:"product",component:ProductComponent},
  {path:'company',component:CompanyComponent},
  {path:"category",component:CategoryComponent},
  ]
},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
