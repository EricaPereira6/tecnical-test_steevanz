import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericbuttonComponent } from './genericbutton.component';

describe('GenericbuttonComponent', () => {
  let component: GenericbuttonComponent;
  let fixture: ComponentFixture<GenericbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
