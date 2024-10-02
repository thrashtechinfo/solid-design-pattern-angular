import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'https://reqres.in/api/users?page=1';

  constructor(
    private http: HttpClient
  ) { }
  
  fetchUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
