import { Component } from '@angular/core';
import { CurrentStaticDataService } from '../../Services/CurrentStaticData/current-static-data.service';
import { LoginService } from 'src/app/Services/Login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private currentStaticDataService: CurrentStaticDataService, private loginService: LoginService,  private router: Router) { }

  user;
  project;

  ngOnInit() {
    this.user = this.currentStaticDataService.getCurrentUser();
    this.project = this.currentStaticDataService.getCurrentProject();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
