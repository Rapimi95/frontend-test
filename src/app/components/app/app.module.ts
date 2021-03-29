import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { InstructorsComponent } from '../instructors/instructors.component';
import { CheckboxListComponent } from '../checkbox-list/checkbox-list.component';
import { InstructorCardComponent } from '../instructor-card/instructor-card.component';
import { InstructorDetailsComponent } from '../instructor-details/instructor-details.component';
import { SubjectsComponent } from '../subjects/subjects.component';
import { SubjectCardComponent } from '../subject-card/subject-card.component';
import { SubjectDetailsComponent } from '../subject-details/subject-details.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { GanttChartComponent } from '../gantt-chart/gantt-chart.component';
import { GranttChartItemComponent } from '../grantt-chart-item/grantt-chart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InstructorsComponent,
    CheckboxListComponent,
    InstructorCardComponent,
    InstructorDetailsComponent,
    SubjectsComponent,
    SubjectCardComponent,
    SubjectDetailsComponent,
    CalendarComponent,
    SearchInputComponent,
    GanttChartComponent,
    GranttChartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
