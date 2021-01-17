import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComComponent } from './new-com/new-com.component';
import { NewCom2Component } from './new-com2/new-com2.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComComponent,
    NewCom2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
