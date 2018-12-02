import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {department } from '../models/department.model';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  departments: department[]=[
    {id:1,name:"Help Desk"},
    {id:2,name:"HR"},
    {id:3,name:"Management"},
    {id:4,name:"Pay Roll"}
  ]
  

  constructor() {
    
   }

  ngOnInit() {
  }
  saveEmployee(empForm:NgForm):void{
    console.log(empForm);

  }
}
