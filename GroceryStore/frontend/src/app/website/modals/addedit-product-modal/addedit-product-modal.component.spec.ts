import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditProductModalComponent } from './addedit-product-modal.component';

describe('AddeditProductModalComponent', () => {
  let component: AddeditProductModalComponent;
  let fixture: ComponentFixture<AddeditProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditProductModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
