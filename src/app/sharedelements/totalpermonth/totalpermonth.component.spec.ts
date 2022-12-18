import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpermonthComponent } from './totalpermonth.component';

describe('TotalpermonthComponent', () => {
  let component: TotalpermonthComponent;
  let fixture: ComponentFixture<TotalpermonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalpermonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalpermonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
