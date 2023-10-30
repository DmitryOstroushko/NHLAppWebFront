import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonListComponent } from './component/season-list/season-list.component';
import { PageAboutComponent } from './component/page-about/page-about.component';
import { CheckNullCaphitBySeasonComponent } from './component/check-null-caphit-by-season/check-null-caphit-by-season.component';
import { CheckNullCaphitByDateComponent } from './component/check-null-caphit-by-date/check-null-caphit-by-date.component';

const routes: Routes = [
  {path: '', component: PageAboutComponent},
  {path: 'season', component: SeasonListComponent},
  {path: 'check-null-caphit-by-season', component: CheckNullCaphitBySeasonComponent},
  {path: 'check-null-caphit-by-date', component: CheckNullCaphitByDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
