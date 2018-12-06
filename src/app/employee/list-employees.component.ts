import { Component, OnInit } from '@angular/core';
import { employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import {Router} from '@angular/router';
@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: employee[];
  searchTerm: string;
  // dataFromChild: employee;
  // employeeToDisplay:employee;
  // private arrayIndex = 1;
  constructor(private _employeeService: EmployeeService,
              private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    // this.employeeToDisplay = this.employees[0];
  }
  // handleNotify(eventData: employee){
  //   this.dataFromChild = eventData;
  // }
  // nextEmployee():void{
  //   console.log("clicked display next employee button");
  //   if (this.arrayIndex <= 2){
  //   this.employeeToDisplay = this.employees[this.arrayIndex];
  //   this.arrayIndex++}
  //   else{
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }
  // }

  onClick(employeeId:number){
    this._router.navigate(['/employee', employeeId]);
  }
}
