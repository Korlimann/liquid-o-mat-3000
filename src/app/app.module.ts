import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MixingComponent } from './mixing/mixing.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, MatTabsModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,
    RouterModule.forRoot([
      { path: '', component: MixingComponent },
      { path: 'mix', component: MixingComponent },
      { path: 'status', component: StatusComponent },
      { path: 'statistics', component: StatisticsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MixingComponent,
    StatisticsComponent,
    StatusComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/