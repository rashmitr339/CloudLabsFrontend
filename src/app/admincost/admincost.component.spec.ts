import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincostComponent } from './admincost.component';

describe('AdmincostComponent', () => {
  let component: AdmincostComponent;
  let fixture: ComponentFixture<AdmincostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmincostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
