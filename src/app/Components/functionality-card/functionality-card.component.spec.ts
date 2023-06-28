import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityCardComponent } from './functionality-card.component';

describe('FunctionalityCardComponent', () => {
  let component: FunctionalityCardComponent;
  let fixture: ComponentFixture<FunctionalityCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalityCardComponent]
    });
    fixture = TestBed.createComponent(FunctionalityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
