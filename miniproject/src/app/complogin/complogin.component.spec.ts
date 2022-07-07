import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComploginComponent } from './complogin.component';

describe('ComploginComponent', () => {
  let component: ComploginComponent;
  let fixture: ComponentFixture<ComploginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComploginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
