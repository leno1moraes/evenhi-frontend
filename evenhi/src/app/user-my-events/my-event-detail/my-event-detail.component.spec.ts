import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEventDetailComponent } from './my-event-detail.component';

describe('MyEventDetailComponent', () => {
  let component: MyEventDetailComponent;
  let fixture: ComponentFixture<MyEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEventDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
