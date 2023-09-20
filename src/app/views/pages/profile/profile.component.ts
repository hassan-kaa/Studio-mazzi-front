import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/core/models/user';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any = {};
  constructor(private cognitoService: CognitoService) {}

  ngOnInit(): void {
    this.cognitoService
      .getUser()
      .then((cognitoUser) => (this.user = cognitoUser))
      .catch((err) => alert(err));
  }
  update() {
    this.cognitoService.updateUser(this.user);
  }
}
