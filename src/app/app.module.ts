import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeddingsComponent } from './weddings/weddings.component';
import { WeddingGuestMessagesComponent } from './weddings/wedding-guest-messages/wedding-guest-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    WeddingsComponent,
    WeddingGuestMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
