import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '@app/core/login/login.component';
import { AuthGuard } from '@app/shared/guard/auth.guard';

const coreRoutes: Routes = [  
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [    
    RouterModule.forChild(coreRoutes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
