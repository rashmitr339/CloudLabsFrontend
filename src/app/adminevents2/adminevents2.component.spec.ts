import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminevents2Component } from './adminevents2.component';

describe('Adminevents2Component', () => {
  let component: Adminevents2Component;
  let fixture: ComponentFixture<Adminevents2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adminevents2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Adminevents2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
