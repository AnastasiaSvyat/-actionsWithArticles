import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFilterComponent } from './body-filter.component';

describe('BodyFilterComponent', () => {
  let component: BodyFilterComponent;
  let fixture: ComponentFixture<BodyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
