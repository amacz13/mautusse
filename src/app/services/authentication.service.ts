import {Injectable} from "@angular/core";
import { GoogleAuthProvider } from "@angular/fire/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AuthenticationService {

  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(public auth: AngularFireAuth) {
  }
  login() {
    this.auth.signInWithPopup(new GoogleAuthProvider()).then(response => {
      this.loggedIn.next(true);
    });
  }
  logout() {
    this.auth.signOut();
  }

}
