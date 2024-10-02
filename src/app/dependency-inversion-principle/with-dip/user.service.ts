import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpDatasourceService } from './http-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private dataSource: HttpDatasourceService
  ) {}
  
  fetchUsers(): Observable<any[]> {
    return this.dataSource.fetchUsers();
  }
}
