import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MaterialModel } from '../materials/materials.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) { }

  listarMaterials(): Observable<any>{
    return this.http.get(environment.api + "materials/list");
  }

  adicionarMaterials(material: MaterialModel): Observable<any>{
    return this.http.post(environment.api + "materials/add", material);
  }

  editarMaterials(material: MaterialModel): Observable<any>{
    return this.http.put(environment.api + "materials/edit".concat(material.id), material);
  }

  deletarMaterials(id:any): Observable<any>{
    return this.http.delete(environment.api + "materials/delete/".concat(id));
  }
}
