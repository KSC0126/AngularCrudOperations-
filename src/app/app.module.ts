import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule}  from 'ngx-bootstrap/datepicker';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
