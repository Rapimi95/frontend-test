import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson.model';
import { Instructor } from 'src/app/models/instructor.model';
import { InstructorsService } from 'src/app/services/instructors/instructors.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.scss']
})
export class GanttChartComponent implements OnInit {

  FIRST_HOUR: number = 8;
  TOTAL_HOURS: number = 9;
  COLS_PER_HOUR: number = 4;
  NUMBER_OF_DAYS: number = 31;
  DAYS_OF_THE_WEEK: string[] = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];

  activeDay: number = 4;
  schedule: Lesson[] = [];
  instructors: Instructor[] = [];

  constructor(
    private scheduleService: ScheduleService,
    private instructorsService: InstructorsService
  ) { }

  ngOnInit(): void {
    this.schedule = this.scheduleService.getAll();
    this.instructors = this.instructorsService.getAll();
  }

  getInstructorsWithLessons(): Instructor[] {
    return this.instructors.filter( instructor => this.getInstructorSchedule(instructor.id).length > 0);
  }

  getInstructorSchedule(id: number): Lesson[] {
    return this.schedule.filter( lesson => lesson.instructor === id )
  }

  getNumberOfCols(): null[] {
    return Array(this.TOTAL_HOURS * 4 + 1);
  }
  
  getNumberOfDays(): null[] {
    return Array(this.NUMBER_OF_DAYS);
  }

  getDayName(day: number): number {
    return day % 7;
  }
 
  getDayNumber(day: number): number {
    return day + 1;
  }

  getGridColumnStyle(beginnig: number, finish: number): string {
    const a: number = beginnig*this.COLS_PER_HOUR - this.FIRST_HOUR*this.COLS_PER_HOUR + 1;
    const b: number = finish*this.COLS_PER_HOUR - this.FIRST_HOUR*this.COLS_PER_HOUR + 1;
    return `${a}/${b}`;
  }

  getColLabel(col: number): string {
    const hour: string = col/this.COLS_PER_HOUR + this.FIRST_HOUR + '';
    return hour.padStart(2, '0') + ':00';
  }

  isAnHourCol(col: number): boolean {
    return col % 4 === 0;
  }

  isTheActiveDay(day: number): boolean {
    return day + 1 === this.activeDay;
  }

  onDayClick(day: number ): void {
    this.activeDay = day + 1;
  }

}
