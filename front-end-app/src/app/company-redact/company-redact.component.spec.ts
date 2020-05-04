import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRedactComponent } from './company-redact.component';

describe('CompanyRedactComponent', () => {
  let component: CompanyRedactComponent;
  let fixture: ComponentFixture<CompanyRedactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRedactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRedactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
