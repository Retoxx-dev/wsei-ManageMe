export class Init {
  load() {
    if(localStorage.getItem('functionalities') === null || localStorage.getItem('functionalities') == undefined) {
      console.log('No Functionalities Found... Creating...');
      let functionalities = [
        {
          id: "1686497103739",
          title: 'Functionality1',
          description: 'Functionality1',
          priority: 'high',
          project_id: '1686497103732',
          status: 'done',
          assigned_to: '1686497103710'
        }, 
        {
          id: "1686497103712",
          title: 'Functionality2',
          description: 'Functionality2',
          priority: 'high',
          project_id: '1686497103732',
          status: 'todo',
          assigned_to: '1686497103710'
        }, 
        {
          id: "1686497103756",
          title: 'Functionality3',
          description: 'Functionality3',
          priority: 'high',
          project_id: '1686497103732',
          status: 'doing',
          assigned_to: '1686497103710'
        },
      ];
      
      localStorage.setItem('functionalities', JSON.stringify(functionalities));
      return 
    } else {
      console.log('Found Functionalities...');
    }
  }
}