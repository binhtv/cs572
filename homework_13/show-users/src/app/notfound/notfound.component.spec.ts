import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UidnotfoundComponent } from './uidnotfound.component';

describe('UidnotfoundComponent', () => {
  let component: UidnotfoundComponent;
  let fixture: ComponentFixture<UidnotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UidnotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UidnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
