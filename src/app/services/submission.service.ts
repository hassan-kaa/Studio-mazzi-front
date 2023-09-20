import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstant } from '../core/constants/api';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  constructor(private http: HttpClient) {}

  getAllSubmissions(userid: string) {
    return this.http.get(`${ApiConstant.SUBMISSIONS}/${userid}/submissions`);
  }
  listSingle(id: string) {
    return this.http.get(`${ApiConstant.SUBMISSIONS}/${id}`);
  }

  update(id: string, user: any) {
    return this.http.put(`${ApiConstant.SUBMISSIONS}/${id}`, user);
  }

  remove(id: string) {
    return this.http.delete(`${ApiConstant.SUBMISSIONS}/${id}`);
  }

  softDelete(id: string) {
    return this.http.delete(`${ApiConstant.SUBMISSIONS}/softDelete/${id}`);
  }
}
