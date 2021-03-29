import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor.model';
import { InstructorsService } from 'src/app/services/instructors/instructors.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  gridView: boolean = false;
  viewIcon: string = 'view_agenda';
  
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
      title: 'Experience',
      options: ['0 - 5 years', '5 - 10 years', '10 - 15 years', 'Another 1', 'Another 2']
    },
    {
      title: 'Location',
      options: ['Kiel, SH', 'Stuttgart, BW', 'Munich, BY', 'Another 1', 'Another 2']
    },
  ];

  instructors: Instructor[] = [];

  constructor( 
    private instructorsService: InstructorsService 
  ) { }

  ngOnInit(): void {
    this.instructors = this.instructorsService.getAll();
  }

  onChangeView(): void {
    this.gridView = !this.gridView;
    this.viewIcon = this.gridView ? 'grid_view' : 'view_agenda';
  }

}
