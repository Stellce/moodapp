import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickMoodComponent } from './pick-mood.component';

describe('PickMoodComponent', () => {
  let component: PickMoodComponent;
  let fixture: ComponentFixture<PickMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickMoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
