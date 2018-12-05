import { Component, OnInit,Input } from '@angular/core';
import { employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
@Input() employee: employee;
  constructor() { }

  ngOnInit() {
  }

}
