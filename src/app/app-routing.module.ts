import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ProductComponent } from "./components/product/product.component";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';
import { AuthloginGuard } from './authlogin.guard';
const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path:'login',canActivate: [AuthloginGuard],component:LoginComponent},
  {path:'user',canActivate: [AuthGuard],component:UsersComponent},
  {path:'product',canActivate: [AuthGuard],component:ProductComponent},
  {path:'home',component:HomeComponent},
  {path:'register',canActivate: [AuthGuard],component:RegisterComponent},
  {path:'**',redirectTo: '/home',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
