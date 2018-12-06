import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from './employee.service';
import { employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: employee;
  private _id: number;


  constructor(private _route: ActivatedRoute,
    private _EmployeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit() {
    // this._id = +this._route.snapshot.paramMap.get('id'); this is used for snapshot not for subscribe 
    // this.employee=this._EmployeeService.getEmployee(this._id);
    this._route.paramMap.subscribe(parmas => {
      this._id = +parmas.get('id');
      this.employee = this._EmployeeService.getEmployee(this._id);

    })
  }
  viewNextEmployee() {
    if (this._id < 3) {
      this._id = this._id + 1;

    }
    else {
      this._id = 1;
    }
    
    this._router.navigate(['/employee', this._id])
  }

}
