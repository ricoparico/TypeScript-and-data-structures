import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { GamelistComponent } from './components/gamelist/gamelist.component';
import { SoftwarelistComponent } from './components/softwarelist/softwarelist.component';
import { PhonecontactlistComponent } from './components/phonecontactlist/phonecontactlist.component';
import { MusicplaylistComponent } from './components/musicplaylist/musicplaylist.component';
import { FoodmenuComponent } from './components/foodmenu/foodmenu.component';
import { GrocerylistComponent } from './components/grocerylist/grocerylist.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    StudentlistComponent,
    EmployeelistComponent,
    FruitlistComponent,
    CourselistComponent,
    BooklistComponent,
    CitylistComponent,
    MovielistComponent,
    CarmodellistComponent,
    ProductlistComponent,
    SubjectlistComponent,
    CountrylistComponent,
    SportslistComponent,
    VegetablelistComponent,
    AnimallistComponent,
    ToollistComponent,
    LanguagelistComponent,
    GamelistComponent,
    SoftwarelistComponent,
    PhonecontactlistComponent,
    MusicplaylistComponent,
    FoodmenuComponent,
    GrocerylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
