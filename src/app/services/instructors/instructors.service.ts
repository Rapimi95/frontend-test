import { Injectable } from '@angular/core';
import { Instructor } from '../../models/instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorsService {

  instructors: Instructor[] = [
    new Instructor(
      1,
      'Maria Schumm',
      'maria-schumm',
      '/assets/images/profile_picture.jpeg',
      ['7 years', 'Energetic', 'Lots of homework'],
      '#556fb5',
    ),
    new Instructor(
      2,
      'Lupe Reynolds',
      'lupe-reynolds',
      '/assets/images/profile_picture.jpeg',
      ['3 years', 'Friendly', 'Story teller'],
      '#b59b55',
    ),
    new Instructor(
      3,
      'Bianca Upton',
      'bianca-upton',
      '/assets/images/profile_picture.jpeg',
      ['3 years', 'Friendly', 'Story teller'],
      '#e4508f',
    ),
    new Instructor(
      4,
      'Nettie Gleichner',
      'nattie-gleichner',
      '/assets/images/profile_picture.jpeg',
      ['3 years', 'Friendly', 'Story teller'],
      '#9b55b5',
    ),
    new Instructor(
      5,
      'Javon Considine',
      'javon-considine',
      '/assets/images/profile_picture.jpeg',
      ['3 years', 'Energetic'],
      '#4698a7',
    ),
    new Instructor(
      6,
      'Laura Harnandez',
      'laura-hernandez',
      '/assets/images/profile_picture.jpeg',
      ['7 years', 'Energetic', 'Lots of homework'],
    ),
    new Instructor(
      7,
      'Luis Cardenas',
      'Luis-cardenas',
      '/assets/images/profile_picture.jpeg',
      ['3 years', 'Friendly', 'Story teller'],
    ),
    new Instructor(
      8,
      'Ana Osorio',
      'ana-osorio',
      '/assets/images/profile_picture.jpeg',
      ['3 years', 'Friendly', 'Story teller'],
    ),
    new Instructor(
      9,
      'Daniel Rodriguez',
      'daniel-rodriguez',
      '/assets/images/profile_picture.jpeg',
      ['3 years', 'Friendly', 'Story teller'],
    ),
    new Instructor(
      10,
      'Camila Sanchez',
      'camila-sanchez',
      '/assets/images/profile_picture.jpeg',
      ['3 years', 'Friendly', 'Story teller'],
    ),
  ];

  constructor() { }
  
  find(id: number): Instructor {
    return this.instructors.filter( instructor => instructor.id === id )[0];
  }

  findBySlug(slug: string): Instructor {
    return this.instructors.filter( instructor => instructor.slug === slug )[0];
  }

  getAll(): Instructor[] {
    return this.instructors;
  }

}
