import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentLibraryAngularLibraryModule } from 'component-library-angular-library';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentLibraryAngularLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
