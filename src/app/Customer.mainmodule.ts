import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/customer.homecomponent';
import { SupplierComponent } from './supplier/customer.suppliercomponent';
import { MasterPageComponent } from './home/customer.masterpagecomponent';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './routing/customer.mainrouting';
import { BaseLogger, ConsoleLogger, DbLogger, LOGGER_TOKEN } from './utility/customerlogger';


@NgModule({
  declarations: [
    CustomerComponent,
    HomeComponent,
    SupplierComponent,
    MasterPageComponent
   
  ],
  imports: [
    BrowserModule,FormsModule,CommonModule,RouterModule.forRoot(MainRoutes),ReactiveFormsModule
  ],
  providers: [
    { provide: LOGGER_TOKEN, useClass: ConsoleLogger },
  ],
  bootstrap: [MasterPageComponent]
  
})
export class CustomerModule { }
