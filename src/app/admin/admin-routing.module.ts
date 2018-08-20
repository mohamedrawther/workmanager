import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '@app/admin/admin.component';

const adminRoutes: Routes = [  
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [    
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
