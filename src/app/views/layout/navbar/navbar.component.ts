import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Inject,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  notifications = [
    {
      content:
        'first notification test test lorem ipsum dolor sit amet whatever ',
      id: 1,
    },
    { content: 'second', id: 2 },
    { content: 'third', id: 3 },
  ];
  user: any = {};
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private cognitoService: CognitoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cognitoService.getUser().then((user) => {
      this.user = user.attributes;
    });
  }

  /**
   * Sidebar toggle on hamburger button click
   */
  toggleSidebar(e: Event) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }

  /**
   * Logout
   */
  onLogout(e: Event) {
    e.preventDefault();
    this.cognitoService
      .signOut()
      .then(() => {
        localStorage.removeItem('isLoggedin');
        if (!localStorage.getItem('isLoggedin')) {
          this.router.navigate(['/auth']);
        }
      })
      .catch((err) => console.log(err));

    // localStorage.removeItem('isLoggedin');

    // if (!localStorage.getItem('isLoggedin')) {
    //   this.router.navigate(['/auth/login']);
    // }
  }
  update() {
    this.cognitoService.updateUser(this.user);
  }
}
