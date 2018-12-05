import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
import { SelectRequiredValidatorDirective } from '../shared/select-required-validator.directive';
import { EmployeeService } from '../app/employee/employee.service';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { CreateEmployeeCanDeactiveGaurdGuardService } from '../app/create-employee-can-deactivate-gaur.service';
import { EmployeeDetailsComponent } from './employee/employee-details.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    ConfirmEqualValidatorDirective,
    SelectRequiredValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactiveGaurdGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
