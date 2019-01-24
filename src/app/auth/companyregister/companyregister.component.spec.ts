import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyregisterComponent } from './companyregister.component';

describe('CompanyregisterComponent', () => {
  let component: CompanyregisterComponent;
  let fixture: ComponentFixture<CompanyregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
