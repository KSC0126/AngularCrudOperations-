import { Injectable } from '@angular/core';
import { employee } from '../../app/models/employee.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
@Injectable()
export class EmployeeService {
  constructor(private httpClient:HttpClient){
    

  }
  private listEmployee: employee[];
  //  = [
  //   {
  //     id: 1,
  //     name: 'Tom',
  //     gender: 'male',
  //     email: 'xxx@yyy.com',
  //     dateOfBirth: new Date('6/25/1988'),
  //     phoneNumber: '1234567890',
  //     contactPrefrence: 'email',
  //     department: '2',
  //     isActive: true,
  //     photoPath: 'assets/images/male3.png',

  //   },
  //   {
  //     id: 2,
  //     name: 'theja',
  //     gender: 'female',
  //     email: '123@yyy.com',
  //     dateOfBirth: new Date('6/15/1988'),
  //     phoneNumber: '1234512345',
  //     contactPrefrence: 'phone',
  //     department: '3',
  //     isActive: true,
  //     photoPath: 'assets/images/female.png',

  //   },
  //   {
  //     id: 3,
  //     name: 'bathi',
  //     gender: 'shemale',
  //     email: '999@yyy.com',
  //     dateOfBirth: new Date('6/31/1988'),
  //     phoneNumber: '1234512312',
  //     contactPrefrence: 'email',
  //     department: '2',
  //     isActive: true,
  //     photoPath: 'assets/images/male.png',

  //   }

  // ];
  //

  getEmployees(): Observable<employee[]> {
    return this.httpClient.get<employee[]>('http://localhost:3000/employees1')
    // return Observable.of(this.listEmployee).delay(2000); // to call it from local service
        //  .catch(this.errorHandle); // handling the error with catch operator
        .pipe(catchError(this.errorHandle));
  }
  private errorHandle(errorResponse : HttpErrorResponse){
    if( errorResponse.error instanceof ErrorEvent){
      console.error('client side error :' ,errorResponse.error.message );
    }
    else {
      console.error( 'server side error :' ,errorResponse)
    }
    return new ErrorObservable('this the error to notify that we are working on it  try later');

  }
  getEmployee(id: number): employee {
    return this.listEmployee.find(employee => employee.id === id);
  }
  save(employee: employee) {
    if (employee.id === null) {
      const maxId = this.listEmployee.reduce(function (e1, e2) {
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      employee.id = maxId + 1;
      this.listEmployee.push(employee);// used to save new employee  details
    }
    else {
      const foundIndex = this.listEmployee.findIndex(e => e.id === employee.id);
      this.listEmployee[foundIndex] = employee;// find the index of the employee and adding edited changes to only that particural employee
    }
  }
deleteEmployee(id: number){
  const i = this.listEmployee.findIndex(e => e.id === id);
  if( i !== -1) {
    this.listEmployee.splice( i , 1);
  }
}
 
}
