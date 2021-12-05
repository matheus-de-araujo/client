import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { UserModel } from '../users/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listarUsers(): Observable<any>{
    return this.http.get(environment.api + "users");
  }

  adicionarUsers(user: UserModel): Observable<any>{
    return this.http.post(environment.api + "users/add", user);
  }

  editarUsers(user: UserModel): Observable<any>{
    return this.http.put(environment.api + "users/edit".concat(user.id), user);
  }

  deletarUsers(id:any): Observable<any>{
    return this.http.delete(environment.api + "users/delete/".concat(id));
  }
}
