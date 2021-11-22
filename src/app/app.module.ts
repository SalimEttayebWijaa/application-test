import { EmployeeComponent } from './employee/employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RegisterEmployeeComponent,
    LoginComponent,
    AboutComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,  
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
