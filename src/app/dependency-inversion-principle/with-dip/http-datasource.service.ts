import { Injectable } from '@angular/core';
import { UserDataSource } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpDatasourceService implements UserDataSource {

  private apiUrl: string = 'https://reqres.in/api/users?page=1';

  constructor(
    private http: HttpClient
  ) { }
  
  fetchUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
