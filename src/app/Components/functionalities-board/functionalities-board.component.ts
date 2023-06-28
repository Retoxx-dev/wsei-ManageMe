import { Component } from '@angular/core';
import { CurrentStaticDataService } from 'src/app/Services/CurrentStaticData/current-static-data.service';
import { FunctionalitiesService } from 'src/app/Services/Functionalities/functionalities.service';

@Component({
  selector: 'app-functionalities-board',
  templateUrl: './functionalities-board.component.html',
  styleUrls: ['./functionalities-board.component.scss']
})
export class FunctionalitiesBoardComponent {
  constructor(private funcService: FunctionalitiesService, private currentStaticDataService: CurrentStaticDataService) { }
  
  functionalities;
  selectedFunctionality;
  currentUser;
  
  ngOnInit() {
    this.functionalities = this.funcService.getFunctionalities();
    this.currentUser = this.currentStaticDataService.getCurrentUser();
  }
  
  checkUser(functionalityId: string) {
    let functionality = this.funcService.getFunctionality(functionalityId);
    if (functionality.assigned_to == this.currentUser.id) {
      return this.currentUser.FirstName + " " + this.currentUser.LastName;
    } else {
      return "";
    }
  }
  
  deleteFunctionality(functionalityId: string) {
    this.funcService.deleteFunctionality(functionalityId);
    this.functionalities = this.funcService.getFunctionalities();
  }
  
  onSaveFunctionality(updatedFunctionality: any) {
    this.funcService.updateFunctionality(updatedFunctionality);
    this.functionalities = this.funcService.getFunctionalities();
  }
  
  onAddFunctionality(newFunctionality: any) {
    this.funcService.addFunctionality(newFunctionality);
    this.functionalities = this.funcService.getFunctionalities();
  }
  
  openFunctionalityModal(functionality) {
    this.selectedFunctionality = functionality;
  }
  
  closeFunctionalityModal() {
    this.selectedFunctionality = null;
  }
}
