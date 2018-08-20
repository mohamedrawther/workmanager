import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/home/home.component';
import { HomeRoutingModule } from '@app/home/home-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
