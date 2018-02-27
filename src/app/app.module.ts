import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {NotesComponent} from './components/notes/notes.component';
import {DetailComponent} from './components/detail/detail.component';
import {HeaderComponent} from './components/header/header.component';
import {SharedService} from "./config/noteData.service";
import {InfoComponent} from './components/info/info.component';

const appRoutes: Routes = [
  {path: 'info', component: InfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DetailComponent,
    HeaderComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
