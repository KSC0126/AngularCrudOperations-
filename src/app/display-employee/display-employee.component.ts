import { Component, OnInit, Input,Output,OnChanges, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';
import { employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit { //, OnChanges
  // @Input() employeeId : number;
  @Input() employee : employee;

  @Output() 
  notify: EventEmitter<employee> = new EventEmitter<employee>();
  //  @Input() 
  // employee: employee;
  //   constructor() { } // this code is whe we are using onchanges below is for if we use getter and setter to log changes

  // private _employee: employee;
  // @Input()
  // set employee(val: employee) {
  //   // console.log('previous employee:' + (this._employee ? this._employee.name :'null'));
  //   // console.log('current employee:' + val.name);
  //   this._employee = val;


  // }

  // get employee(): employee {
  //   return this._employee


  // }


  ngOnInit() {
  }

  handleClick(){
    this.notify.emit(this.employee);
    

  }

  // ngOnChanges(changes:SimpleChanges){

  //   const previousEMployee = <employee> changes.employee.previousValue;
  //   const currentEmployee = <employee> changes.employee.currentValue;
  //   console.log('previous employee:' + (previousEMployee ? previousEMployee.name :'null'));
  //   console.log('current employee:' + currentEmployee.name);

  // }

}
