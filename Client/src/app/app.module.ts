import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import{HttpModule} from '@angular/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AuthUserService} from './services/authUser.service';
import {AppRoutingModule} from './app.routing';
import {AuthGuardService} from './authguard/auth-guard.service';
import {ProductComponent} from './product/product.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [AuthUserService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
