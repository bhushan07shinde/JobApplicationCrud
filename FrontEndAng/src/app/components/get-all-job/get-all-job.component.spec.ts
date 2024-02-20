import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllJobComponent } from './get-all-job.component';

describe('GetAllJobComponent', () => {
  let component: GetAllJobComponent;
  let fixture: ComponentFixture<GetAllJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
