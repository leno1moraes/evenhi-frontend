import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMyaccountComponent } from './admin-myaccount.component';

describe('AdminMyaccountComponent', () => {
  let component: AdminMyaccountComponent;
  let fixture: ComponentFixture<AdminMyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMyaccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
