import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiConstant {
  private static BASE_URL = environment.API_URL;

  public static get TEMPLATES(): string {
    return this.BASE_URL + '/templates';
  }

  public static get FIELDS(): string {
    return this.BASE_URL + '/templates/fields';
  }

  public static get CLIENTS(): string {
    return this.BASE_URL + '/clients';
  }

  public static get SUBMISSIONS(): string {
    return this.BASE_URL + '/users';
  }
}
