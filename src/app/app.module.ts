import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor, NgIf, JsonPipe } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAboutComponent } from './component/page-about/page-about.component';
import { SeasonListComponent } from './component/season-list/season-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CheckNullCaphitBySeasonComponent } from './component/check-null-caphit-by-season/check-null-caphit-by-season.component';
import { CheckNullCaphitByDateComponent } from './component/check-null-caphit-by-date/check-null-caphit-by-date.component';


@NgModule({
  declarations: [
    AppComponent,
    PageAboutComponent,
    SeasonListComponent,
    ToolbarComponent,
    CheckNullCaphitBySeasonComponent,
    CheckNullCaphitByDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatTableModule,
    //FormGroup, FormControl, FormsModule, ReactiveFormsModule,
    FormsModule, ReactiveFormsModule,
    MatMenuModule,
    NgFor, NgIf, JsonPipe,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
