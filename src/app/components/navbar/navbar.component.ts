import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routes = [
    {
      path: '/instructors',
      label: 'Instructors'
    },
    {
      path: '/subjects',
      label: 'Subjects'
    },
    {
      path: '/calendar',
      label: 'Calendar'
    },
    {
      path: '/students',
      label: 'Students'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
