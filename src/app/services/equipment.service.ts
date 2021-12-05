import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EquipmentModel } from '../equipments/equipments.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }

  listarEquipments(): Observable<any>{
    return this.http.get(environment.api + "equipments/list");
  }

  adicionarEquipments(equipments: EquipmentModel): Observable<any>{
    return this.http.post(environment.api + "equipments/add", equipments);
  }

  editarEquipments(equipments: EquipmentModel): Observable<any>{
    return this.http.put(environment.api + "equipments/edit".concat(equipments.id), equipments);
  }

  deletarEquipments(id:any): Observable<any>{
    return this.http.delete(environment.api + "equipments/delete/".concat(id));
  }
}
