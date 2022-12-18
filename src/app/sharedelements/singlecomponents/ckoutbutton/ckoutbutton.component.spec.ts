import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkoutbuttonComponent } from './ckoutbutton.component';

describe('CkoutbuttonComponent', () => {
  let component: CkoutbuttonComponent;
  let fixture: ComponentFixture<CkoutbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkoutbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CkoutbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
