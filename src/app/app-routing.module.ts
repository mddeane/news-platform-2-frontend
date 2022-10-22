import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRundownComponent } from './create-rundown/create-rundown.component';
import { RundownComponent } from './rundown/rundown.component';
import { StoryComponent } from './story/story.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'rundown', component: RundownComponent },
  { path: 'create', component: CreateRundownComponent },
  { path: 'story', component: StoryComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
