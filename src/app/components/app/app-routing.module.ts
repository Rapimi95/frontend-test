import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstructorsComponent } from '../instructors/instructors.component';
import { InstructorDetailsComponent } from '../instructor-details/instructor-details.component';
import { SubjectsComponent } from '../subjects/subjects.component';
import { SubjectDetailsComponent } from '../subject-details/subject-details.component';
import { CalendarComponent } from '../calendar/calendar.component';

const routes: Routes = [
  { path: 'instructors', component: InstructorsComponent },
  { path: 'instructors/:slug', component: InstructorDetailsComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subjects/:slug', component: SubjectDetailsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '', redirectTo: '/instructors', pathMatch: 'full' },
  { path: '**', redirectTo: '/instructors' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
