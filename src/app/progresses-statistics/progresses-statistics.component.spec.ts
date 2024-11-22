import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressesStatisticsComponent } from './progresses-statistics.component';

describe('ProgressesStatisticsComponent', () => {
  let component: ProgressesStatisticsComponent;
  let fixture: ComponentFixture<ProgressesStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressesStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
