import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinsModalComponent } from './coins-modal/coins-modal.component';
import { HeaderComponent } from './header/header.component';
import {RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { FilterPipe } from './filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinsModalComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide :LOCALE_ID, useValue : 'en_US' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
