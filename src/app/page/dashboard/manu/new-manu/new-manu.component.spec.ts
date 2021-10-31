import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewManuComponent } from './new-manu.component';

describe('NewManuComponent', () => {
  let component: NewManuComponent;
  let fixture: ComponentFixture<NewManuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewManuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
