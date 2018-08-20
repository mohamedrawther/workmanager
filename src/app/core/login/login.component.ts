import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService, private routes: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }

  login(){    
    console.log("login action");
    this.authService.sendToken(this.username);
    this.routes.navigate(['home']);
  }
}
