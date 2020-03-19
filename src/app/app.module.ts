import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AgenciasListComponent } from './agencias-list/agencias-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { FormAgenciaComponent } from './form-agencia/form-agencia.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    AgenciasListComponent,
    FormAgenciaComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule, 
    MatInputModule,
    ReactiveFormsModule,    
    MatCardModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
