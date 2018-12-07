import { Component, OnInit, Input,Output,OnChanges, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';
import { employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit { //, OnChanges
 
  private selectedEmployeeId: number;
  confirmDelete : false;
  @Input() employee : employee;
  @Output() notifyDelete : EventEmitter<number> = new EventEmitter<number>();

 
    constructor( private _route : ActivatedRoute,
    private _router: Router,
  private _employeeService : EmployeeService) { } 
  

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }
  viewEmployee(){
    this._router.navigate(['/employee',this.employee.id]);// route to a perticular employee using id.
  }
  editEmployee(){
    this._router.navigate(['/edit',this.employee.id]);// route to a perticular employee edit page using id.
  }
  deleteEmployee(){
    this._employeeService.deleteEmployee(this.employee.id);
    this.notifyDelete.emit(this.employee.id);
  }
  
  
}
