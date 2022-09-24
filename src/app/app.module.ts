import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideDatabase, getDatabase} from '@angular/fire/database';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {AuthenticationService} from "./services/authentication.service";
import {SETTINGS as AUTH_SETTINGS} from '@angular/fire/compat/auth';
import {AngularFireModule} from "@angular/fire/compat";
import {WordGridComponent} from "./components/word-grid/word-grid.component";

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), AngularFireModule.initializeApp(environment.firebase), provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideFirestore(() => getFirestore()), WordGridComponent],
  providers: [
    {provide: AUTH_SETTINGS, useValue: {appVerificationDisabledForTesting: true}},
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
