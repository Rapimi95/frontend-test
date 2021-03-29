import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 6, 7, 8, ]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 3, 4, 5, 6, 7, 8, 9, 10]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 6, 7, 8, 9]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 5, 6, 7, 8, 9, 10]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 4, 5, 6, 7, 8, 9, 10]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 7, 8, 9, 10]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 6, 7, 8, ]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 3, 4, 6, 7, 8, 9]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 4, 5, 6, 7, 8, 9, 10]),
    new Project(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 7, 8, 9, 10]),
  ]

  constructor() { }

  getByInstructors(id: number): Project[] {
    return this.projects.filter( student => student.instructors.includes(id) );
  }

}
