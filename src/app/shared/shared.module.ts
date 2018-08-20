import { BrowserModule }    from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@app/shared/service/auth.service';
import { AuthGuard } from '@app/shared/guard/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import { DomainService } from '@app/shared/service/domain/domain.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[AuthService, AuthGuard, DomainService]
})
export class SharedModule { }
