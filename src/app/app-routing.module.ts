import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// components 
import { MembersComponent } from './features/members/members.component';
import { ScoreboardComponent } from './features/scoreboard/scoreboard.component';
import { CategoryComponent } from './features/category/category.component';



const routes: Routes = [
  { path: '', component: MembersComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'category', component: CategoryComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
