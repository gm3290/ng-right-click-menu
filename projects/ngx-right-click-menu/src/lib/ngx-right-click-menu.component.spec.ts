import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRightClickMenuComponent } from './ngx-right-click-menu.component';

describe('NgxRightClickMenuComponent', () => {
  let component: NgxRightClickMenuComponent;
  let fixture: ComponentFixture<NgxRightClickMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRightClickMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRightClickMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
