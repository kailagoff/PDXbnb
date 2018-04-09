import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FormComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
