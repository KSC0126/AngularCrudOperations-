import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {department } from '../models/department.model';
import {BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { employee } from '../models/employee.model';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  photoPreview:boolean=false;
  employee:employee={id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPrefrence: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null,

  }
  
  colorTheme='theme-dark-blue';

  datePickerConfig:Partial<BsDatepickerConfig>;

  departments: department[]=[
    {id:1,name:"Help Desk"},
    {id:2,name:"HR"},
    {id:3,name:"Management"},
    {id:4,name:"Pay Roll"}
  ]
  

    constructor() {
      this.datePickerConfig= Object.assign({},
        {containerClass:this.colorTheme,
          showWeekNumbers: false,
          // minDate: new Date( 2018, 0 , 1),
          // maxDate: new Date(2018, 11, 31)
        });
    }

  ngOnInit() {
  }
  saveEmployee(newEmployee=employee ):void{
  
    console.log(newEmployee);

  }
  togglePhotoPreview(){
    console.log("show preview clicked");
    this.photoPreview = !this.photoPreview;
   
  }
}
