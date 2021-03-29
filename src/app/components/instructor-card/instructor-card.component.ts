import { Component, Input, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor.model';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students/students.service';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { Project } from 'src/app/models/project.model';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';
import { Subject } from 'src/app/models/subject.model';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.scss']
})
export class InstructorCardComponent implements OnInit {

  @Input() showDetails: boolean = true;
  @Input() instructor: Instructor = new Instructor(0, '', '', '', ['']);
  
  students: Student[] = [];
  projects: Project[] = [];
  subjects: Subject[] = [];

  constructor(
    private studentsService: StudentsService,
    private projectsService: ProjectsService,
    private subjectsService: SubjectsService,
  ) { }

  ngOnInit(): void {
    this.students = this.studentsService.getByInstructors(this.instructor.id);
    this.projects = this.projectsService.getByInstructors(this.instructor.id);
    this.subjects = this.subjectsService.getByInstructors(this.instructor.id);
  }

  printSubjects(): string {
    return this.subjects.map( subject => subject.name ).join(', ');
  }

}
