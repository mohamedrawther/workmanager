import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  sendToken(authToken: string){
    localStorage.setItem('LoggedInToken', authToken);
  }

  isLoggedIn(): boolean{
    console.log('AuthService isLoggedIn');
    
    return localStorage.getItem('LoggedInToken') !== null;
  }

  logout(): boolean{
    localStorage.removeItem('LoggedInToken');
    this.router.navigate(['login']);
    return true;
  }

}