import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactBonusComponent } from './redact-bonus.component';

describe('RedactBonusComponent', () => {
  let component: RedactBonusComponent;
  let fixture: ComponentFixture<RedactBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedactBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
