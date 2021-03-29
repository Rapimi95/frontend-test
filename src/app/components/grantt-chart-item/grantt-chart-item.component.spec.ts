import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranttChartItemComponent } from './grantt-chart-item.component';

describe('GranttChartItemComponent', () => {
  let component: GranttChartItemComponent;
  let fixture: ComponentFixture<GranttChartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranttChartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranttChartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
