import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'mautusse-login-with-google-button',
  templateUrl: './login-with-google-button.component.html',
  styleUrls: ['./login-with-google-button.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LoginWithGoogleButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
