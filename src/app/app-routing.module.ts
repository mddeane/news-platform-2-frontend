import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRundownComponent } from './create-rundown/create-rundown.component';
import { RundownComponent } from './rundown/rundown.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path: '', redirectTo: '/rundown', pathMatch: 'full' },
  { path: 'rundown', component: RundownComponent },
  { path: 'create', component: CreateRundownComponent },
  { path: 'story', component: StoryComponent },
  { path: '**', component: RundownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
