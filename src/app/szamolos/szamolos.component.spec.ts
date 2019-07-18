import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzamolosComponent } from './szamolos.component';

describe('SzamolosComponent', () => {
  let component: SzamolosComponent;
  let fixture: ComponentFixture<SzamolosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzamolosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzamolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
