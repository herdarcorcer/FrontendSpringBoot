import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';

import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
