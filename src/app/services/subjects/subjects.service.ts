import { Injectable } from '@angular/core';
import { Subject } from '../../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  subjects: Subject[] = [
    new Subject(
      1,
      'Mathematics',
      'mathematics',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      1,
    ),
    new Subject(
      2,
      'History',
      'history',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      2,
    ),
    new Subject(
      3,
      'Geography',
      'geography',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      2,
    ),
    new Subject(
      4,
      'Law',
      'law',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      3,
    ),
    new Subject(
      5,
      'International Studies',
      'international-studies',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      3,
    ),
    new Subject(
      6,
      'Micro-Biology',
      'micro-biology',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      4,
    ),
    new Subject(
      7,
      'Chemistry',
      'chemistry',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      4,
    ),
    new Subject(
      8,
      'Sport and Fitness',
      'sport and fitness',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      5,
    ),
    new Subject(
      9,
      'Random Subject 1',
      'random-subject-1',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      6,
    ),
    new Subject(
      10,
      'Random Subject 2',
      'random-subject-2',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      7,
    ),
    new Subject(
      11,
      'Random Subject 3',
      'random-subject-3',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      8,
    ),
    new Subject(
      12,
      'Random Subject 4',
      'random-subject-4',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      9,
    ),
    new Subject(
      13,
      'Random Subject 5',
      'random-subject-5',
      '',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, laboriosam enim! Suscipit, molestias eligendi laborum maxime repellendus, accusamus numquam ad optio reprehenderit tempora est assumenda doloremque sunt pariatur, unde sit?',
      10,
    ),
  ]

  constructor() { }

  find(id: number): Subject {
    return this.subjects.filter( subject => subject.id === id )[0];
  }

  findBySlug(slug: string): Subject {
    return this.subjects.filter( subject => subject.slug === slug )[0];
  }

  getByInstructors(id: number): Subject[] {
    return this.subjects.filter( subject => subject.instructor === id );
  }

  getAll(): Subject[] {
    return this.subjects
  }

}
