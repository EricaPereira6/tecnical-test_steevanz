import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutnavComponent } from './checkoutnav.component';

describe('CheckoutnavComponent', () => {
  let component: CheckoutnavComponent;
  let fixture: ComponentFixture<CheckoutnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
