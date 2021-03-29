import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Instructor } from 'src/app/models/instructor.model';
import { Subject } from 'src/app/models/subject.model';
import { InstructorsService } from 'src/app/services/instructors/instructors.service';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {

  subject: Subject = new Subject(0, '', '', '', '', 0)
  instructor: Instructor = new Instructor(0, '', '', '', [''])

  faFilePdf = faFilePdf

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SubjectsService,
    private instructorsService: InstructorsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.subject = this.subjectsService.findBySlug(params.slug)
      this.instructor = this.instructorsService.find(this.subject.instructor)
    })
  }

}
