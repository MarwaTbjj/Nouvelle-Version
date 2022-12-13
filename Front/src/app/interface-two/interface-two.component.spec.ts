import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceTwoComponent } from './interface-two.component';

describe('InterfaceTwoComponent', () => {
  let component: InterfaceTwoComponent;
  let fixture: ComponentFixture<InterfaceTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
