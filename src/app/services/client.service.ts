import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstant } from '../core/constants/api';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  create(user: any) {
    return this.http.post(`${ApiConstant.CLIENTS}`, user);
  }


  listAll(params: any) {
    return this.http.get(`${ApiConstant.CLIENTS}?queryLimit=${params?.limit}&page=${params?.page}&search=${params?.search}`);
  }


  listSingle(id: string) {
    return this.http.get(`${ApiConstant.CLIENTS}/${id}`);
  }


  update(id: string, user: any) {
    return this.http.put(`${ApiConstant.CLIENTS}/${id}`, user);
  }

  remove(id: string) {
    return this.http.delete(`${ApiConstant.CLIENTS}/${id}`);
  }

  softDelete(id: string) {
    return this.http.delete(`${ApiConstant.CLIENTS}/softDelete/${id}`);
  }

  createClientSubmission(clientId: string, templateId: string, submission : any) {
    return this.http.post(`${ApiConstant.CLIENTS}/${clientId}/submit-form/${templateId}`,submission);
  }

  getClientSubmission(id: string) {
    return this.http.get(`${ApiConstant.CLIENTS}/${id}/submissions`);
  }

}
