import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EateTemplatesComponent } from './eate-templates.component';

describe('EateTemplatesComponent', () => {
  let component: EateTemplatesComponent;
  let fixture: ComponentFixture<EateTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EateTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EateTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
