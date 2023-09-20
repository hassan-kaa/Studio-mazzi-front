import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstant } from '../core/constants/api';
import { Template } from '../core/models/template';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  constructor(private http: HttpClient) {}

  create(user: any) {
    return this.http.post(`${ApiConstant.TEMPLATES}`, user);
  }

  listAll(params: any) {
    return this.http.get<Template[]>(
      `${ApiConstant.TEMPLATES}?queryLimit=${params?.limit}&page=${params?.page}&search=${params?.search}`
    );
  }

  listSingle(id: string) {
    return this.http.get(`${ApiConstant.TEMPLATES}/${id}`);
  }

  listAllByType(type: string) {
    return this.http.get<Template[]>(`${ApiConstant.TEMPLATES}/type/${type}`);
  }

  update(id: string, template: Template) {
    return this.http.put(`${ApiConstant.TEMPLATES}/${id}`, template);
  }

  remove(id: string) {
    return this.http.delete(`${ApiConstant.TEMPLATES}/${id}`);
  }

  softDelete(id: string) {
    return this.http.delete(`${ApiConstant.TEMPLATES}/softDelete/${id}`);
  }

  addFieldToTemplate(formTemplateId: string, fieldId: string) {
    return this.http.get(
      `${ApiConstant.TEMPLATES}/${formTemplateId}/fields/${fieldId}`
    );
  }
  removeFieldFromTemplate(formTemplateId: string, fieldId: string) {
    return this.http.delete(
      `${ApiConstant.TEMPLATES}/${formTemplateId}/fields/${fieldId}`
    );
  }
}
