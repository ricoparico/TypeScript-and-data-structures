import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';

const routes: Routes = [
  {path: "", component: LandingpageComponent},
  {path: "studentlist", component: StudentlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
