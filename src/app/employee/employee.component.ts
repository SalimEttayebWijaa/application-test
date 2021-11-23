import { ApiService } from './../shared/api.service';
import { EmployeeModel } from './emplyee-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  firstname : any;
  formValue !: FormGroup;
  showAdd !: boolean;
  showUpdate !: boolean;
  employeeData !: any;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  EmployeeModel: EmployeeModel[] = [];
  firstName : any;


  constructor(private formBuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      Phone: [''],
      salary: ['']

    })
    this.getAllEmployee();

  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.phone = this.formValue.value.phone;
    this.employeeModelObj.salary = this.formValue.value.salary;
    this.api.postEmployee(this.employeeModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Employee Added Successfully")
        let ref = document.getElementById('cancel')
        ref.click();
        this.formValue.reset();
        this.getAllEmployee();
      
      },
        err => {
          alert("something Wrong check it !")
        }
      )
  }
getAllEmployee() {
  this.api.getEmployee()
  .subscribe(res=>{
    this.employeeData =res;
  })
}

deleteEmployee(row : any){

  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employed Deleted");
    this.getAllEmployee();
  })
}
onEdit(row : any) {
  this.showAdd = false;
  this.showUpdate = true;
  this.employeeModelObj.id =row.id;
  this.formValue.controls['firstName'].setValue(row.firstName)
  this.formValue.controls['lastName'].setValue(row.lastName)
  this.formValue.controls['email'].setValue(row.email)
  this.formValue.controls['phone'].setValue(row.phone)
  this.formValue.controls['salary'].setValue(row.salary)
}
updateEmployeeDetails() {
  this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.phone = this.formValue.value.phone;
    this.employeeModelObj.salary = this.formValue.value.salary;
    this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      alert("updated successfully")
      let ref = document.getElementById('cancel')
      ref.click();
      this.formValue.reset();
      this.getAllEmployee();
    })

}
//Search () {
  //this.EmployeeModel = this.EmployeeModel.filter(res => {
    //return res.firstName.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
  //}) ;
//}
}
