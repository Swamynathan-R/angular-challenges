import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyProfileDetailsLayoutComponent } from './components/my-profile-details-layout/my-profile-details-layout.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';

const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'user',
        component:MyProfileDetailsLayoutComponent,
        children:[
            {
                path:'my-profile',
                component:ProfileFormComponent
            },
            {
                path:'orders',
                component:UserOrdersComponent
            }
        ]
    },
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
