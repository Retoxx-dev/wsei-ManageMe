import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesBoardComponent } from './functionalities-board.component';

describe('FunctionalitiesBoardComponent', () => {
  let component: FunctionalitiesBoardComponent;
  let fixture: ComponentFixture<FunctionalitiesBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalitiesBoardComponent]
    });
    fixture = TestBed.createComponent(FunctionalitiesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
