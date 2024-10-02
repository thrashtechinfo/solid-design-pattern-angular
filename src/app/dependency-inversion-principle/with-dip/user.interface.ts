import { Observable } from "rxjs";

export interface UserDataSource {
  fetchUsers(): Observable<any[]>;
}