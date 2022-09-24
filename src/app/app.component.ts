import { Component } from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mautusse';

  loggedIn = false;

  constructor(private authService: AuthenticationService) {
    this.authService.loggedIn.subscribe(val => {
      this.loggedIn = val;
    })
  }

  doLogin() {
    this.authService.login();
  }
}
