import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEmployeesComponent } from './employee/list-employees.component'
import { CreateEmployeeComponent } from './create-employee/create-employee.component'
import { CreateEmployeeCanDeactiveGaurdGuardService } from '../app/create-employee-can-deactivate-gaur.service'





const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'list',
    component: ListEmployeesComponent
  },
  {
    path: 'create',
    component: CreateEmployeeComponent,
    canDeactivate:[CreateEmployeeCanDeactiveGaurdGuardService]
  },

  {
    path: '',
    redirectTo: '\list',
    pathMatch: 'full'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
