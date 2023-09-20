import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleType, User } from 'src/app/core/models/user';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: User = {} as User;
  email: string;
  password: string;
  confirmation: boolean = false;
  code: string;
  constructor(private router: Router, private cognitoService: CognitoService) {}

  ngOnInit(): void {}

  onRegister(e: Event) {
    e.preventDefault();
    this.signUp();
  }
  onConfirm(e: Event) {
    e.preventDefault();
    this.cognitoService
      .confirmSignUp(this.user, this.code)
      .then(() => {
        localStorage.setItem('isLoggedin', 'true');
        if (localStorage.getItem('isLoggedin')) {
          this.router.navigate(['/']);
        }
      })
      .catch((err) => alert(err));
  }
  signUp() {
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.active = true;
    this.user.role = RoleType.Client;
    this.cognitoService
      .signUp(this.user)
      .then(() => {
        this.confirmation = true;
      })
      .catch((err) => alert(err));
  }
}
