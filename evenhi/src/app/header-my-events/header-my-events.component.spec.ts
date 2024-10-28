import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMyEventsComponent } from './header-my-events.component';

describe('HeaderMyEventsComponent', () => {
  let component: HeaderMyEventsComponent;
  let fixture: ComponentFixture<HeaderMyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMyEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
