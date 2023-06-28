import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFunctionalityModalComponent } from './add-functionality-modal.component';

describe('AddFunctionalityModalComponent', () => {
  let component: AddFunctionalityModalComponent;
  let fixture: ComponentFixture<AddFunctionalityModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFunctionalityModalComponent]
    });
    fixture = TestBed.createComponent(AddFunctionalityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
