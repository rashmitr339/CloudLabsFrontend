import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlabComponent } from './adminlab.component';

describe('AdminlabComponent', () => {
  let component: AdminlabComponent;
  let fixture: ComponentFixture<AdminlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminlabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
