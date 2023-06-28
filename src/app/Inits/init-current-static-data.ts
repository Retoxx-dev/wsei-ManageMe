export class Init {
  load() {
    if(localStorage.getItem('currentProject') === null || localStorage.getItem('currentProject') == undefined 
    || localStorage.getItem('currentUser') === null || localStorage.getItem('currentUser') == undefined) {
      console.log('No current context found... Creating...');
      let currentProject = 
      {
        id: 1686497103732,
        name: "Project 1"
      };
      
      let currentUser = 
      {
        id: 1686497103710,
        FirstName: "John",
        LastName: "Doe",
        Email: "john.doe@example.com"
      };
      
      localStorage.setItem('currentProject', JSON.stringify(currentProject));
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      return 
    } else {
      console.log('Current context already created...');
    }
  }
}