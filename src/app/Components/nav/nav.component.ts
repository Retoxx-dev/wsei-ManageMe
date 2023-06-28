import { Component, Input } from '@angular/core';
import { CurrentStaticDataService } from '../../Services/CurrentStaticData/current-static-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private currentStaticDataService: CurrentStaticDataService) { }

  user;
  project;

  ngOnInit() {
    this.user = this.currentStaticDataService.getCurrentUser();
    this.project = this.currentStaticDataService.getCurrentProject();
  }
}
