import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
  public Signupform !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit() {
    this.Signupform = this.formBuilder.group({
      fullname : [''],
      email :[''],
      password : [''],
      mobile : ['']
    })
  }

  signUp() {
    console.log(this.Signupform.value)
    this.http.post<any>('http://localhost:3000/signupUsers',this.Signupform.value)
    .subscribe(res=>{
      alert("Sign Up successfully !");
      this.Signupform.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something Wrong !")
    })
  }

}
