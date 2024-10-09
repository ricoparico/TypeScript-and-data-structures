import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { FruitlistComponent } from './components/fruitlist/fruitlist.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { CitylistComponent } from './components/citylist/citylist.component';
import { MovielistComponent } from './components/movielist/movielist.component';

const routes: Routes = [
  {path: "", component: LandingpageComponent},
  {path: "studentlist", component: StudentlistComponent},
  {path: "employeelist", component: EmployeelistComponent},
  {path: "fruitlist", component: FruitlistComponent},
  {path: "courselist", component: CourselistComponent},
  {path: "booklist", component: BooklistComponent},
  {path: "citylist", component: CitylistComponent},
  {path: "movielist", component: MovielistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
