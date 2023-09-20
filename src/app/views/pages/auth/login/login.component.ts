import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  returnUrl: any = 'profile';
  email: string;
  password: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cognitoService: CognitoService
  ) {}

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/profile';
  }

  onLoggedin(e: Event) {
    e.preventDefault();
    this.cognitoService
      .login(this.email, this.password)
      .then(() => {
        localStorage.setItem('isLoggedin', 'true');
        if (localStorage.getItem('isLoggedin')) {
          this.router.navigate([this.returnUrl]);
        }
      })
      .catch((err) => alert(err));
  }
}
