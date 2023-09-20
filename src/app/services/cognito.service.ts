import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { User } from '../core/models/user';

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  constructor() {
    Amplify.configure({
      Auth: environment.cognito,
    });
  }

  signUp(user: User): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }
  login(email: string, password: string): Promise<any> {
    return Auth.signIn({
      username: email,
      password: password,
    });
  }
  signOut(): Promise<any> {
    return Auth.signOut();
  }
  confirmSignUp(user: User, code: string): Promise<any> {
    return Auth.confirmSignUp(user.email, code);
  }
  getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }
  updateUser(user: User): Promise<any> {
    return Auth.currentUserPoolUser().then((cognitoUser: any) => {
      return Auth.updateUserAttributes(cognitoUser, user);
    });
  }
}
