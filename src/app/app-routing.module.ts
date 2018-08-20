import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const rootRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [    
    RouterModule.forRoot(rootRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
