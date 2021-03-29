import { Component, Input, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { Instructor } from 'src/app/models/instructor.model';
import { Subject } from 'src/app/models/subject.model';
import { InstructorsService } from 'src/app/services/instructors/instructors.service';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.scss']
})
export class SubjectCardComponent implements OnInit {

  @Input() subject: Subject = new Subject(0, '', '', '', '', 0)

  instructor: Instructor = new Instructor(0, '', '', '', [''])

  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faGlobeAmericas = faGlobeAmericas;

  constructor(
    private instructorService: InstructorsService
  ) { }

  ngOnInit(): void {
    this.instructor = this.instructorService.find(this.subject.instructor)
  }

}
