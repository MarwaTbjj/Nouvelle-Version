import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjContactComponent } from './msj-contact.component';

describe('MsjContactComponent', () => {
  let component: MsjContactComponent;
  let fixture: ComponentFixture<MsjContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsjContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsjContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
