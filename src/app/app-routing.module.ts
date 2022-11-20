import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { DeleteUserComponent } from './pages/admin/delete-user/delete-user.component';
import { DeleteBookComponent } from './pages/admin/delete-book/delete-book.component';
import { ViewBookComponent } from './pages/admin/view-book/view-book.component';
import { UpdateBookComponent } from './pages/admin/update-book/update-book.component';
import { AddBookComponent } from './pages/admin/add-book/add-book.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path : '',
        component : WelcomeComponent
      },
      {
        path:'books',
        component:ViewBookComponent
      },
      {
        path:'add-books',
        component:AddBookComponent
      },
      {
        path:'update-book',
        component:UpdateBookComponent
      },
      {
        path:'delete-book',
        component:DeleteBookComponent
      },

      {
        path:'update-user',
        component:UpdateUserComponent
      },

      {
        path:'delete-user',
        component:DeleteUserComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
