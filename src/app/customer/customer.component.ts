import { Component, Inject, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Customer} from "./Customer.model"
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseLogger, LOGGER_TOKEN } from '../utility/customerlogger';

@Component({
  
 
  
  templateUrl: './customer.view.html'
  
})
export class CustomerComponent {
  title = 'customerer';
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();
  Logobj : BaseLogger;
  constructor(@Inject(LOGGER_TOKEN) private logger: BaseLogger){
    this.Logobj = logger;
    this.Logobj.Log();
  }
  Add(){
this.CustomerModels.push(this.CustomerModel);
this.CustomerModel=new Customer(); //clearui
  }
}
