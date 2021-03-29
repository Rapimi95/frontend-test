import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson.model';
import { Instructor } from 'src/app/models/instructor.model';
import { Subject } from 'src/app/models/subject.model';
import { InstructorsService } from 'src/app/services/instructors/instructors.service';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';

@Component({
  selector: 'app-grantt-chart-item',
  templateUrl: './grantt-chart-item.component.html',
  styleUrls: ['./grantt-chart-item.component.scss']
})
export class GranttChartItemComponent implements OnInit {

  @Input() lesson: Lesson = new Lesson(0, 0, 0, 0, 0);

  subject: Subject = new Subject(0, '', '', '', '', 0)
  instructor: Instructor = new Instructor(0, '', '', '', [''])

  constructor(
    private subjectsService: SubjectsService,
    private instructorsService: InstructorsService,
  ) { }

  ngOnInit(): void {
    this.subject = this.subjectsService.find(this.lesson.subject)
    this.instructor = this.instructorsService.find(this.subject.instructor)
  }

}
