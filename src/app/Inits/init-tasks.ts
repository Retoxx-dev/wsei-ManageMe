export class Init {
  load() {
    if(localStorage.getItem('tasks') === null || localStorage.getItem('tasks') == undefined) {
      console.log('No Tasks Found... Creating...');
      let tasks = [
        {
          id: "1686497103732",
          title: 'Pickup kids from school',
          description: 'They must be done with school by 2pm',
          priority: 'high',
          functionality_id: '1686497103739',
          estimated_time: '2 hours',
          status: 'done',
          created_at: '6/28/2023, 10:00:00 PM',
          start_date: '6/28/2023, 11:00:00 PM',
          end_date: '6/29/2023, 02:00:00 AM',
          assigned_to: '1686497103710',
          project_id: '1686497103732'
        }, 
        {
          id: "1686497103733",
          title: 'Meeting with boss',
          description: 'They must be done with school by 2pm',
          priority: 'medium',
          functionality_id: '1686497103712',
          estimated_time: '2 hours',
          status: 'todo',
          created_at: '6/28/2023, 10:00:00 PM',
          start_date: '',
          end_date: '',
          assigned_to: '1686497103710',
          project_id: '1686497103732'
        }, 
        {
          id: "1686497103734",
          title: 'Dinner with wife',
          description: 'They must be done with school by 2pm',
          priority: 'low',
          functionality_id: '1686497103712',
          estimated_time: '2 hours',
          status: 'todo',
          created_at: '6/28/2023, 10:00:00 PM',
          start_date: '',
          end_date: '',
          assigned_to: '1686497103710',
          project_id: '1686497103732'
        },
        {
          id: "1686497103735",
          title: 'Do laundry',
          description: 'They must be done with school by 2pm',
          priority: 'high',
          functionality_id: '1686497103756',
          estimated_time: '2 hours',
          status: 'doing',
          created_at: '6/28/2023, 10:00:00 PM',
          start_date: '6/28/2023, 11:00:00 PM',
          end_date: '',
          assigned_to: '1686497103710',
          project_id: '1686497103732'
        },
        {
          id: "1686497103736",
          title: 'Clean the house',
          description: 'They must be done with school by 2pm',
          priority: 'medium',
          functionality_id: '1686497103756',
          estimated_time: '2 hours',
          status: 'doing',
          created_at: '6/28/2023, 10:00:00 PM',
          start_date: '6/28/2023, 11:00:00 PM',
          end_date: '6/29/2023, 02:00:00 AM',
          assigned_to: '1686497103710',
          project_id: '1686497103732'
        }
      ];
      
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return 
    } else {
      console.log('Found Tasks...');
    }
  }
}