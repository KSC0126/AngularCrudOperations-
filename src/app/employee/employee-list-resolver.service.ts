import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/router';
import { employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from './employee.service';
import { map, catchError } from 'rxjs/operators';
import { ResolvedEmployeeList } from './resolved-employeeList.model';

@Injectable()

export class EmployeeListServiceResolverService implements Resolve<ResolvedEmployeeList> {

  constructor(private _employeeService: EmployeeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedEmployeeList> {
    return this._employeeService.getEmployees()
      .pipe(
        map((employeeList) => new ResolvedEmployeeList(employeeList)),
        catchError((err: any) => Observable.of(new ResolvedEmployeeList(null, err)))
      )
  }

}
