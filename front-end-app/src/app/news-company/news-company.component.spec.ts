import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCompanyComponent } from './news-company.component';

describe('NewsCompanyComponent', () => {
  let component: NewsCompanyComponent;
  let fixture: ComponentFixture<NewsCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
