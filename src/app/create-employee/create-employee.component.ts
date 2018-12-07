import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { employee } from '../models/employee.model';
import { EmployeeService } from '../employee/employee.service';
import { Router, ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  photoPreview: boolean = false;
  employee: employee ;
  panelHeading: string;

  colorTheme = 'theme-dark-blue';

  datePickerConfig: Partial<BsDatepickerConfig>;

  departments: department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "Management" },
    { id: 4, name: "Pay Roll" }
  ]


  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: this.colorTheme,
        showWeekNumbers: false,
        // minDate: new Date( 2018, 0 , 1),
        // maxDate: new Date(2018, 11, 31)
      });
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    })
  }
  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
            id: null,
              name: null,
                gender: null,
                  email: '',
                    phoneNumber: null,
                      contactPrefrence: null,
                        dateOfBirth: null,
                          department: 'select',
                            isActive: null,
                              photoPath: null,

      };
      this.panelHeading = 'Create Employee';
      this.createEmployeeForm.reset();

    }// line 46 to 69 to get enmployee on whom we need to edit 

    else{
      this.panelHeading = 'Edit Employee';
      this.employee = this._employeeService.getEmployee(id);
    }

  }
  saveEmployee(): void {

    const newEmployee: employee = Object.assign({}, this.employee);
    // we need to assign a object to variable so that the reset method in the below will not reset the object which is need to be saved
    this._employeeService.save(newEmployee);
    this.createEmployeeForm.reset();
    this._router.navigate(['list']);

  }
  togglePhotoPreview() {
    console.log("show preview clicked");
    this.photoPreview = !this.photoPreview;


  }
}
