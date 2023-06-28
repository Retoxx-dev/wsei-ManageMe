import { Injectable } from '@angular/core';
import { Init } from '../../Inits/init-functionalities';

@Injectable({
  providedIn: 'root'
})

export class FunctionalitiesService extends Init{
  functionalities;

  constructor() { 
    super();
    this.load();
  }

  getFunctionalities() {
    let functionalities = JSON.parse(localStorage.getItem('functionalities'));
    return functionalities;
  }

  getFunctionality(functionalityId: string) {
    let functionalities = JSON.parse(localStorage.getItem('functionalities'));
    return functionalities.find(functionality => functionality.id === functionalityId);
  }

  getFunctionalityTitle(functionalityId: string): string {
    const functionalities = JSON.parse(localStorage.getItem('functionalities'));
    if (functionalities && functionalities.length > 0) {
      const functionality = functionalities.find((f) => f.id === functionalityId);
      if (functionality) {
        return functionality.title;
      }
    }
    return '';
  }

  deleteFunctionality(functionalityId: string) {
    let functionalities = JSON.parse(localStorage.getItem('functionalities'));
    for(let i = 0; i < functionalities.length; i++) {
      if(functionalities[i].id == functionalityId) {
        functionalities.splice(i, 1);
      }
    }
    localStorage.setItem('functionalities', JSON.stringify(functionalities));
  }
  
  addFunctionality(newFunctionality) {
    let functionalities = JSON.parse(localStorage.getItem('functionalities'));
    functionalities.push(newFunctionality);
    localStorage.setItem('functionalities', JSON.stringify(functionalities));
  }

  updateFunctionality(updatedFunctionality) {
    let functionalities = JSON.parse(localStorage.getItem('functionalities'));
    for (let i = 0; i < functionalities.length; i++) {
      if (functionalities[i].id == updatedFunctionality.id) {
        functionalities[i] = updatedFunctionality;
      }
    }
    localStorage.setItem('functionalities', JSON.stringify(functionalities));
  }

  updateFunctionalityStatus(functionalityId: string, status: string) {
    let functionalities = JSON.parse(localStorage.getItem('functionalities'));
    for (let i = 0; i < functionalities.length; i++) {
      if (functionalities[i].id == functionalityId) {
        functionalities[i].status = status;
      }
    }
    localStorage.setItem('functionalities', JSON.stringify(functionalities));
  }

  getFunctionalityById(functionalityId: string) {
    let functionalities = JSON.parse(localStorage.getItem('functionalities'));
    return functionalities.find(functionality => functionality.id === functionalityId);
  }
}
