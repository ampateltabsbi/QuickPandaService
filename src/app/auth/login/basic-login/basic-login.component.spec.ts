import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLoginComponent } from './basic-login.component';
import { ActivatedRoute } from '@angular/router';
describe('BasicLoginComponent', () => {
  debugger;
  let component: BasicLoginComponent;
  let fixture: ComponentFixture<BasicLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
