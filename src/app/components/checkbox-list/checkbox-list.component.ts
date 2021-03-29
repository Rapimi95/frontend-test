import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})
export class CheckboxListComponent implements OnInit {

  @Input() title: string = '';
  @Input() options: string[] = [];

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  getOptions() {
    return this.isExpanded ? this.options : this.options.slice(0, 3);
  }

}
