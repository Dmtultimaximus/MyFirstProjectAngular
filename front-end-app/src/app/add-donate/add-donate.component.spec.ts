import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonateComponent } from './add-donate.component';

describe('AddDonateComponent', () => {
  let component: AddDonateComponent;
  let fixture: ComponentFixture<AddDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
