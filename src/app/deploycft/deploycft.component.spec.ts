import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploycftComponent } from './deploycft.component';

describe('DeploycftComponent', () => {
  let component: DeploycftComponent;
  let fixture: ComponentFixture<DeploycftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeploycftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeploycftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
