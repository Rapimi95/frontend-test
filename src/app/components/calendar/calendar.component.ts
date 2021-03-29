import { Component, OnInit } from '@angular/core';
import { faBook, faClock, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Instructor } from 'src/app/models/instructor.model';
import { Lesson } from 'src/app/models/lesson.model';
import { Subject } from 'src/app/models/subject.model';
import { InstructorsService } from 'src/app/services/instructors/instructors.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  instructorField: number = 0;
  subjectField: number = 0;
  beginningField: number = 8;
  finishField: number = 8;

  isCreatingEvent: boolean = false;  
  instructors: Instructor[] = [];
  subjects: Subject[] = [];
  
  faBook = faBook;
  faUser = faUser;
  faClock = faClock;
  faMapMarkerAlt = faMapMarkerAlt;

  filters: { title: string, options: string[] }[] = [
    {
      title: 'Subject',
      options: ['Mathematics', 'Biology', 'Art Theory', 'Another 1', 'Another 2']
    },
    {
      title: 'Time',
      options: ['Morning', 'After noon', 'Evening', 'Another 1', 'Another 2']
    },
    {
      title: 'Location',
      options: ['Kiel, SH', 'Stuttgart, BW', 'Munich, BY', 'Another 1', 'Another 2']
    },
  ];

  constructor(
    private subjectsService: SubjectsService,
    private instructorsService: InstructorsService,
    private scheduleService: ScheduleService,
  ) { }

  ngOnInit(): void {
    this.instructors = this.instructorsService.getAll();
  }

  onNewEventClick(): void {
    this.isCreatingEvent = !this.isCreatingEvent;
  }
  
  onSaveClick(): void {
    
    if (this.instructorField === 0, this.subjectField === 0, this.beginningField >= this.finishField) {
      alert('Los datos ingresados son invalidos.');
      return;
    }
    
    this.onNewEventClick();
    this.scheduleService.addLesson(new Lesson(0, this.instructorField, this.subjectField, this.beginningField, this.finishField));
  }

  onInstructorChange(): void {
    this.subjects = this.subjectsService.getByInstructors(this.instructorField);
  }

  getValidTimes(): {label: string, value: number}[] {
    const times: {label: string, value: number}[] = [];    

    for (let i: number = 8; i <= 19; i++) {
      for (let j: number = 0; j <= 45; j += 15) {
        const translations: {[key: number]: number} = { 0: 0, 15: .25, 30: .5, 45: .75 };
        times.push({
          label: `${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`,
          value: i + translations[j],
        });
      }
    }

    return times;
  } 

}
