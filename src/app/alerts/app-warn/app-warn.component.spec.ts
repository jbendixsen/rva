import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWarnComponent } from './app-warn.component';

describe('AppWarnComponent', () => {
  let component: AppWarnComponent;
  let fixture: ComponentFixture<AppWarnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWarnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
