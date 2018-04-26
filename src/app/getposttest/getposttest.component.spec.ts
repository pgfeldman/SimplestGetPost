import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetposttestComponent } from './getposttest.component';

describe('GetposttestComponent', () => {
  let component: GetposttestComponent;
  let fixture: ComponentFixture<GetposttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetposttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetposttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
