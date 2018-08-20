import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from '@app/admin/admin-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '@app/core/core.module';
import { DuplicateidDirective } from './directive/duplicateid.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,        
    ReactiveFormsModule,    
    CoreModule,
    NgbModule.forRoot(),
    AdminRoutingModule
  ],
  declarations: [AdminComponent, DuplicateidDirective]
})
export class AdminModule { }
