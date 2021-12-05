import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoomModel } from '../rooms/rooms.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  listarRooms(): Observable<any>{
    return this.http.get(environment.api + "rooms/list");
  }

  adicionarRooms(room: RoomModel): Observable<any>{
    return this.http.post(environment.api + "rooms/add", room);
  }

  editarRooms(room: RoomModel): Observable<any>{
    return this.http.put(environment.api + "rooms/edit".concat(room.id), room);
  }

  deletarRooms(id:any): Observable<any>{
    return this.http.delete(environment.api + "rooms/delete/".concat(id));
  }
}
