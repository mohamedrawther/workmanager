import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/shared/guard/auth.guard';

const homeRoutes: Routes = [  
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  declarations: []
})
export class HomeRoutingModule { }
