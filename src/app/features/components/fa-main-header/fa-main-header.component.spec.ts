import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaMainHeaderComponent } from './fa-main-header.component';

describe('FaMainHeaderComponent', () => {
  let component: FaMainHeaderComponent;
  let fixture: ComponentFixture<FaMainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaMainHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
