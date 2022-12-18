import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedelivbarComponent } from './freedelivbar.component';

describe('FreedelivbarComponent', () => {
  let component: FreedelivbarComponent;
  let fixture: ComponentFixture<FreedelivbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreedelivbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreedelivbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
