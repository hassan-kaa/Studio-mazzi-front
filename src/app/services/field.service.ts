import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstant } from '../core/constants/api';
import { Field } from "../core/models/field";


@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http: HttpClient) { }

  create(field: any) {
    return this.http.post(`${ApiConstant.FIELDS}`, field);
  }

  listAllWithParams(params: any) {
    return this.http.get<any>(`${ApiConstant.FIELDS}/all?queryLimit=${params?.limit}&page=${params?.page}&search=${params?.search}`);
  }

  listAll() {
    return this.http.get<Field[]>(`${ApiConstant.FIELDS}/all`);
  }


  listSingle(id: string) {
    return this.http.get(`${ApiConstant.FIELDS}/${id}`);
  }

  listSingleByType(type: string) {
    return this.http.get<Field[]>(`${ApiConstant.FIELDS}/type/${type}`);
  }


  update(id: string, user: any) {
    return this.http.put(`${ApiConstant.FIELDS}/${id}`, user);
  }

  remove(id: string) {
    return this.http.delete(`${ApiConstant.FIELDS}/${id}`);
  }

  softDelete(id: string) {
    return this.http.delete(`${ApiConstant.FIELDS}/softDelete/${id}`);
  }

}
