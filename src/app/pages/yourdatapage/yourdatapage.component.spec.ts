import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourdatapageComponent } from './yourdatapage.component';

describe('YourdatapageComponent', () => {
  let component: YourdatapageComponent;
  let fixture: ComponentFixture<YourdatapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourdatapageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourdatapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
