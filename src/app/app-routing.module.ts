import { EmplacementComponent } from './emplacement/emplacement.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path :'',redirectTo:'login',pathMatch : 'full'},
  {path : 'register-employee',component : RegisterEmployeeComponent},
  {path : 'login',component : LoginComponent},
  {path : 'dashboard',component : EmployeeComponent},
  {path : 'about',component : AboutComponent},
  {path : 'emplacement', component : EmplacementComponent}

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
