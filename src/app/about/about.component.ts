import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public aboutForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit() {
    this.aboutForm = this.formBuilder.group({
      fullname : [''],
      email : [''],
      mobile : [''],
      textabout : ['']
    }) 
  } 
  postAbout() {
    this.http.post<any>('http://localhost:3000/about',this.aboutForm.value)
    .subscribe(res=>{
      alert("your demande dent successfully");
      this.aboutForm.reset();
    },err=>{
      alert("Something Wrong !")
    })
    }
  

}
