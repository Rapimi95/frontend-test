import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Instructor } from 'src/app/models/instructor.model';
import { InstructorsService } from 'src/app/services/instructors/instructors.service';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.scss']
})
export class InstructorDetailsComponent implements OnInit {

  instructor: Instructor = new Instructor(0, '', '', '', [''])

  constructor(
    private route: ActivatedRoute,
    private instructorsService: InstructorsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.instructor = this.instructorsService.findBySlug(params.slug)
    })
  }

}
