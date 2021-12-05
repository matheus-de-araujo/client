import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../categories/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  listarCategories(): Observable<any>{
    return this.http.get(environment.api + "categories/list");
  }

  adicionarCategories(category: CategoryModel): Observable<any>{
    return this.http.post(environment.api + "categories/add", category);
  }

  editarCategories(category: CategoryModel): Observable<any>{
    return this.http.put(environment.api + "categories/edit".concat(category.id), category);
  }

  deletarCategories(id:any): Observable<any>{
    return this.http.delete(environment.api + "categories/delete/".concat(id));
  }
}
