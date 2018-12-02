import { Component, OnInit } from '@angular/core';
import { employee } from '../models/employee.model';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: employee[] = [
    {
      id: 1,
      name: 'Tom',
      gender: 'Male',
      email: 'xxx@yyy.com',
      dateOfBirth: new Date('6/25/1988'),
      phoneNumber: '1234567890', 
      contactPrefrence:'C2C',
      department:'CSe',
      isActive:true,
      photoPath:'assets/images/male3.png',

  },
    {
      id: 2,
      name: 'theja',
      gender: 'female',
      email: '123@yyy.com',
      dateOfBirth: new Date('6/15/1988'),
      phoneNumber: '1234512345', 
      contactPrefrence:'fte',
      department:'ece',
      isActive:true,
      photoPath:'assets/images/female.png',

  },
    {
      id: 3,
      name: 'bathi',
      gender: 'shemale',
      email: '999@yyy.com',
      dateOfBirth: new Date('6/31/1988'),
      phoneNumber: '1234512312', 
      contactPrefrence:'C2C',
      department:'CSe',
      isActive:true,
      photoPath:'assets/images/male.png',

  }

  ];


  constructor() { }

  ngOnInit() {
  }

}
