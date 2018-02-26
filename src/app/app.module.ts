import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {NotesComponent} from './components/notes/notes.component';
import {DetailComponent} from './components/detail/detail.component';
import {HeaderComponent} from './components/header/header.component';
import {SharedService} from "./config/noteData.service";

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
