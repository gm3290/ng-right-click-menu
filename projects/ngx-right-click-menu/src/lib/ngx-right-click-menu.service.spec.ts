import { TestBed } from '@angular/core/testing';

import { NgxRightClickMenuService } from './ngx-right-click-menu.service';

describe('NgxRightClickMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRightClickMenuService = TestBed.get(NgxRightClickMenuService);
    expect(service).toBeTruthy();
  });
});
