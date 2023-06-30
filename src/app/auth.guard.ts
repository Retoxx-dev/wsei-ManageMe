import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Services/Login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
