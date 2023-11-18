import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeasonListComponent } from './component/season-list/season-list.component';
import { PageAboutComponent } from './component/page-about/page-about.component';
import { CheckNullCaphitBySeasonComponent } from './component/check-null-caphit-by-season/check-null-caphit-by-season.component';
import { CheckNullCaphitByDateComponent } from './component/check-null-caphit-by-date/check-null-caphit-by-date.component';
import { CaphitValidationService } from './service/caphit-validation.service';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { QueryFormComponent } from './component/query-form/query-form.component';
import { CheckNullPersonalDataComponent } from './component/check-null-personal-data/check-null-personal-data.component';
import { StatSkaterComponent } from './component/stat-skater/stat-skater.component';

const routes: Routes = [
  { path: '', component: PageAboutComponent },
  { path: 'season', component: SeasonListComponent },
  { path: 'check-null-caphit-by-season', component: CheckNullCaphitBySeasonComponent },
  { path: 'check-null-caphit-by-date', component: CheckNullCaphitByDateComponent },
  { path: 'check-null-personal-data', component: CheckNullPersonalDataComponent },
  { path: 'stat-skater', component: StatSkaterComponent },

  // Routing components below are unused
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'caphit-validation/:kind', component: CaphitValidationService },
  { path: 'query-form/:composition', component: QueryFormComponent },
  { path: 'query-form', component: QueryFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
