import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);

    if (this.loginService.login(this.username, this.password)) {
      this.router.navigate(['/kanban']);
    } else {
      console.log('Wrong username or password');
    }
  }
}
