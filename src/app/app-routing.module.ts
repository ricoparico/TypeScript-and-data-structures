import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { FruitlistComponent } from './components/fruitlist/fruitlist.component';

const routes: Routes = [
  {path: "", component: LandingpageComponent},
  {path: "studentlist", component: StudentlistComponent},
  {path: "employeelist", component: EmployeelistComponent},
  {path: "fruitlist", component: FruitlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
