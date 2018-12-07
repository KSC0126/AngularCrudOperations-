import { Injectable } from '@angular/core';
import { employee } from '../../app/models/employee.model';


@Injectable()
export class EmployeeService {
  private listEmployee: employee[] = [
    {
      id: 1,
      name: 'Tom',
      gender: 'male',
      email: 'xxx@yyy.com',
      dateOfBirth: new Date('6/25/1988'),
      phoneNumber: '1234567890',
      contactPrefrence: 'email',
      department: '2',
      isActive: true,
      photoPath: 'assets/images/male3.png',

    },
    {
      id: 2,
      name: 'theja',
      gender: 'female',
      email: '123@yyy.com',
      dateOfBirth: new Date('6/15/1988'),
      phoneNumber: '1234512345',
      contactPrefrence: 'phone',
      department: '3',
      isActive: true,
      photoPath: 'assets/images/female.png',

    },
    {
      id: 3,
      name: 'bathi',
      gender: 'shemale',
      email: '999@yyy.com',
      dateOfBirth: new Date('6/31/1988'),
      phoneNumber: '1234512312',
      contactPrefrence: 'email',
      department: '2',
      isActive: true,
      photoPath: 'assets/images/male.png',

    }

  ];

  getEmployees(): employee[] {
    return this.listEmployee;
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

  constructor() { }
}
