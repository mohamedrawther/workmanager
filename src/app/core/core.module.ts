import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CoreRoutingModule} from './core-routing.module';

import { LoginComponent } from './login/login.component';
import { DomainComponent } from '@app/core/domain/domain.component';



@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,    
    CoreRoutingModule
  ],
  providers: [],
  declarations: [LoginComponent, DomainComponent],
  exports: [DomainComponent]
})
export class CoreModule { 
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    if(parentModule){
      throw new Error('CoreModule is already loaded. Import only in AppModule');      
    }
  }
}
