import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http'
import {RouterModule,Routes} from '@angular/router'
import {AuthService} from './services/auth.service'

import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpecificComponent } from './components/specific/specific.component';

const appRoutes:Routes = [
{path:'register',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'listhospitals',component:HospitalsComponent},
{path:'showone/:spec',component:SpecificComponent}
]

@NgModule({
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZnIvO9YN-f-L4Y9rPS7FCjQOC6WDoYOw'
    })
  ],
  providers: [AuthService],
  declarations: [ AppComponent, LoginComponent, SignupComponent, HospitalsComponent, NavbarComponent, SpecificComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}