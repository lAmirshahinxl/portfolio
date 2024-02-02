import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaIndexComponent } from './fa-index.component';

describe('FaIndexComponent', () => {
  let component: FaIndexComponent;
  let fixture: ComponentFixture<FaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
