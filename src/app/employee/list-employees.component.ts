import { Component, OnInit } from '@angular/core';
import { employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import {Router, ActivatedRoute} from '@angular/router';
import { ResolvedEmployeeList } from './resolved-employeeList.model';
@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  error: string;
  employees: employee[];
  filteredEmployees: employee[];
  private _searchTerm: string;
   
  get searchTerm(): string {
   return this._searchTerm;
  }

  set searchTerm(value:string){
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);

  }

  filterEmployees(searchString: string){
    return this.employees.filter(employee => 
      employee.name.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1);

  }
  

  // dataFromChild: employee;
  // employeeToDisplay:employee;
  // private arrayIndex = 1;
  constructor(private _employeeService: EmployeeService,
              private _router: Router,
            private _route: ActivatedRoute) {
            const resolvedEmployeeList: ResolvedEmployeeList=  this._route.snapshot.data['employeeList'];
            if( resolvedEmployeeList.error == null){
              this.employees = resolvedEmployeeList.employeelist;

            }
            else{
               this.error = resolvedEmployeeList.error
            }
            this.filteredEmployees = this.employees;
             }

  ngOnInit() {
    // this._employeeService.getEmployees().subscribe((empList) => { 
    //   this.employees = empList; 
     
    // }  
    // );
    
    //this.employees = this._employeeService.getEmployees();// used to get employees array from employee service 
  
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

  onClick(){
    this._router.navigate(['/employee', this.employees]);
  }
  onDeleteNotification(id: number){
    const i = this.filteredEmployees.findIndex(e => e.id === id);
    if( i !== -1) {
      this.filteredEmployees.splice( i , 1);
    }
  }
    
}

