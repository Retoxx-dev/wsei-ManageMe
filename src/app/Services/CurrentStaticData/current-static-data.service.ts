import { Injectable } from '@angular/core';
import { Init } from '../../Inits/init-current-static-data';

@Injectable({
  providedIn: 'root'
})

export class CurrentStaticDataService extends Init {

  constructor() { 
    super();
    this.load();
  }

  getCurrentUser() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser;
  }

  getCurrentProject() {
    let currentProject = JSON.parse(localStorage.getItem('currentProject'));
    return currentProject;
  }
}
