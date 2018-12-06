import { Pipe, PipeTransform } from '@angular/core';
import { employee } from './models/employee.model';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: employee[], searchTerm: string): employee[] {
    if(!employees || !searchTerm){
      return employees;

    }
    return employees.filter(employee => 
      employee.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1); // search pipes
  }

}
