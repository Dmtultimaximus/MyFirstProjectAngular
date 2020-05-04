import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactNewsComponent } from './redact-news.component';

describe('RedactNewsComponent', () => {
  let component: RedactNewsComponent;
  let fixture: ComponentFixture<RedactNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedactNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
