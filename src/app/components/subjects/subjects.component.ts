import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[] = [];

  filters: { title: string, options: string[] }[] = [
    {
      title: 'Subject',
      options: ['Mathematics', 'Biology', 'Art Theory', 'Another 1', 'Another 2']
    },
    {
      title: 'Status',
      options: ['Available seats', 'Fully booked', 'On holiday', 'Another 1', 'Another 2']
    },
    {
      title: 'Location',
      options: ['Kiel, SH', 'Stuttgart, BW', 'Munich, BY', 'Another 1', 'Another 2']
    },
  ];

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
    this.subjects = this.subjectsService.getAll();
  }

}
