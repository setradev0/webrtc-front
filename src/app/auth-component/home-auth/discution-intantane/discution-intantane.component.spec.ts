import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscutionIntantaneComponent } from './discution-intantane.component';

describe('DiscutionIntantaneComponent', () => {
  let component: DiscutionIntantaneComponent;
  let fixture: ComponentFixture<DiscutionIntantaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscutionIntantaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscutionIntantaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
