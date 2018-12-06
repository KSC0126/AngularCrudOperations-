import { Component, OnInit, Input,Output,OnChanges, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';
import { employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit { //, OnChanges
 
  private selectedEmployeeId: number;
  @Input() employee : employee;

 
    constructor( private _route : ActivatedRoute) { } // this code is whe we are using onchanges below is for if we use getter and setter to log changes

  

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  

}
