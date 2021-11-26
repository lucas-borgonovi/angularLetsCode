import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';

import { MaterialModule } from './material/material.module';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { LoginComponent } from './pages/login/login.component';
import { CorDirective } from './shared/cor.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    ListItemComponent,
    LoginComponent,
    CorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
