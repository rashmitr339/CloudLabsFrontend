import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquestion2Component } from './addquestion2.component';

describe('Addquestion2Component', () => {
  let component: Addquestion2Component;
  let fixture: ComponentFixture<Addquestion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addquestion2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Addquestion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
