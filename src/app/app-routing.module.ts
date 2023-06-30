import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardComponent } from './Components/kanban-board/kanban-board.component';
import { TaskBoardComponent } from './Components/task-board/task-board.component';
import { FunctionalitiesBoardComponent } from './Components/functionalities-board/functionalities-board.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LoginComponent},
  { path: 'kanban', component: KanbanBoardComponent, canActivate: [AuthGuard]},
  { path: 'tasks', component: TaskBoardComponent, canActivate: [AuthGuard]},
  { path: 'functionalities', component: FunctionalitiesBoardComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
