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
import { CarmodellistComponent } from './components/carmodellist/carmodellist.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SubjectlistComponent } from './components/subjectlist/subjectlist.component';
import { CountrylistComponent } from './components/countrylist/countrylist.component';
import { SportslistComponent } from './components/sportslist/sportslist.component';
import { VegetablelistComponent } from './components/vegetablelist/vegetablelist.component';
import { AnimallistComponent } from './components/animallist/animallist.component';
import { ToollistComponent } from './components/toollist/toollist.component';
import { LanguagelistComponent } from './components/languagelist/languagelist.component';

const routes: Routes = [
  {path: "", component: LandingpageComponent},
  {path: "studentlist", component: StudentlistComponent},
  {path: "employeelist", component: EmployeelistComponent},
  {path: "fruitlist", component: FruitlistComponent},
  {path: "courselist", component: CourselistComponent},
  {path: "booklist", component: BooklistComponent},
  {path: "citylist", component: CitylistComponent},
  {path: "movielist", component: MovielistComponent},
  {path: "carmodellist", component: CarmodellistComponent},
  {path: "productlist", component: ProductlistComponent},
  {path: "subjectlist", component: SubjectlistComponent},
  {path: "countrylist", component: CountrylistComponent},
  {path: "sportslist", component: SportslistComponent},
  {path: "vegetablelist", component: VegetablelistComponent},
  {path: "animallist", component: AnimallistComponent},
  {path: "toollist", component: ToollistComponent},
  {path: "languagelist", component: LanguagelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
