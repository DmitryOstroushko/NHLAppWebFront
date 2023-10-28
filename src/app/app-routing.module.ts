import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonListComponent } from './component/season-list/season-list.component';
import { PageAboutComponent } from './component/page-about/page-about.component';
import { CheckNullCaphitBySeasonComponent } from './component/check-null-caphit-by-season/check-null-caphit-by-season.component';

const routes: Routes = [
  {path: 'season', component: SeasonListComponent},
  {path: '', component: PageAboutComponent},
  {path: 'check-null-caphit-by-season', component: CheckNullCaphitBySeasonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
