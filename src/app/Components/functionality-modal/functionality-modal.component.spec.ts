import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityModalComponent } from './functionality-modal.component';

describe('FunctionalityModalComponent', () => {
  let component: FunctionalityModalComponent;
  let fixture: ComponentFixture<FunctionalityModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalityModalComponent]
    });
    fixture = TestBed.createComponent(FunctionalityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
