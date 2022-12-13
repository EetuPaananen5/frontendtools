import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LippuComponent } from './lippu.component';

describe('LippuComponent', () => {
  let component: LippuComponent;
  let fixture: ComponentFixture<LippuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LippuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LippuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
