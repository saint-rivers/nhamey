import { TestBed } from '@angular/core/testing';

import { MenuTemplateService } from './menu-template.service';

describe('MenuTemplateService', () => {
  let service: MenuTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
