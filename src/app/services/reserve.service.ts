import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReserveModel } from '../reserves/reserves.model';
import { TimeModel } from '../reserves/time.model';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor(private http: HttpClient) { }

  listarReserves(): Observable<any>{
    return this.http.get(environment.api + "reserves/list");
  }

  adicionarReservesToEquipment(reserve: ReserveModel, time: TimeModel): Observable<any>{
    return this.http.put(environment.api + "equipments/"+ reserve.equipment +"/user/" + reserve.user, time);
  }

  editarReserves(reserve: ReserveModel): Observable<any>{
    return this.http.put(environment.api + "reserves/edit".concat(reserve.id), reserve);
  }

  deletarReserves(id:any): Observable<any>{
    return this.http.delete(environment.api + "reserves/delete/".concat(id));
  }
}
