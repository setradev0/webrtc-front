import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoitDialogComponent } from './boit-dialog.component';

describe('BoitDialogComponent', () => {
  let component: BoitDialogComponent;
  let fixture: ComponentFixture<BoitDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoitDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
