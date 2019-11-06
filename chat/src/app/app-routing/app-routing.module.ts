import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ChatPageComponent } from '../chat-page/chat-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent }, 
  {
    path:'chatPage', component:ChatPageComponent,
    canActivate:[AuthGuard]
},
  { path: '',
    redirectTo: '/chatPage',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
