import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekeinkrolComponent } from './termekeinkrol.component';

describe('TermekeinkrolComponent', () => {
  let component: TermekeinkrolComponent;
  let fixture: ComponentFixture<TermekeinkrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermekeinkrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermekeinkrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
