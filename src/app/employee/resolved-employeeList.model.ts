import { employee } from '../models/employee.model';


export class ResolvedEmployeeList {
    constructor( public employeelist: employee[],
                 public error: any = null){

    }
}