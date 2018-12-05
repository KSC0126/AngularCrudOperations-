import { Injectable } from '@angular/core';
import { employee } from '../../app/models/employee.model';


@Injectable()
export class EmployeeService {
  private listEmployee: employee[] = [
    {
      id: 1,
      name: 'Tom',
      gender: 'Male',
      email: 'xxx@yyy.com',
      dateOfBirth: new Date('6/25/1988'),
      phoneNumber: '1234567890',
      contactPrefrence: 'C2C',
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
      contactPrefrence: 'fte',
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
      contactPrefrence: 'C2C',
      department: '2',
      isActive: true,
      photoPath: 'assets/images/male.png',

    }

  ];

  getEmployees(): employee[] {
    return this.listEmployee;
  }
  getEmployee(id:number): employee {
    return this.listEmployee.find(employee => employee.id === id);
  }
  save(employee: employee) {
    this.listEmployee.push(employee);

  }

  constructor() { }
}
