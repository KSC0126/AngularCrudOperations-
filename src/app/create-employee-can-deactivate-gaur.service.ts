import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {CreateEmployeeComponent}  from '../app/create-employee/create-employee.component'


export class CreateEmployeeCanDeactiveGaurdGuardService implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent ):boolean{
    if(component.createEmployeeForm.dirty){
      return confirm('are sure you want to leave this page');
    }
 return true;

  }

}
