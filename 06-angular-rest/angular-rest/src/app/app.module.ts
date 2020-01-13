import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {ButtonModule} from 'primeng/button';
import {InputTextModule, TableModule} from "primeng";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // -> Directivas
    // ngFor ngIf
    AppRoutingModule,
    FormsModule, // -> Formularios
    HttpClientModule, // -> HTTP
    ButtonModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [
    UsuarioRestService
  ], // Servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
