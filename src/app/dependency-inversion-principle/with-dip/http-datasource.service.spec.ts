import { TestBed } from '@angular/core/testing';

import { HttpDatasourceService } from './http-datasource.service';

describe('HttpDatasourceService', () => {
  let service: HttpDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
