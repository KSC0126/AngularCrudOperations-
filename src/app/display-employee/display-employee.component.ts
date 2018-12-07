import { Component, OnInit, Input,Output,OnChanges, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';
import { employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit { //, OnChanges
 
  private selectedEmployeeId: number;
  @Input() employee : employee;

 
    constructor( private _route : ActivatedRoute,
    private _router: Router) { } // this code is whe we are using onchanges below is for if we use getter and setter to log changes

  

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }
  viewEmployee(){
    this._router.navigate(['/employee',this.employee.id]);// route to a perticular employee using id.
  }
  editEmployee(){
    this._router.navigate(['/edit',this.employee.id]);// route to a perticular employee edit page using id.
  }
  
  
  
}
