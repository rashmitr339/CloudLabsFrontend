import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editquestion2Component } from './editquestion2.component';

describe('Editquestion2Component', () => {
  let component: Editquestion2Component;
  let fixture: ComponentFixture<Editquestion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Editquestion2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Editquestion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
