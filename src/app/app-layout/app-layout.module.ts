import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FooterEndComponent } from './components/footer-end/footer-end.component';
import { MyProfileDetailsLayoutComponent } from './components/my-profile-details-layout/my-profile-details-layout.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';



@NgModule({
  declarations: [NavbarComponent, AppLayoutComponent, HomeComponent, FooterEndComponent, MyProfileDetailsLayoutComponent, ProfileFormComponent, UserOrdersComponent, ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    ReactiveFormsModule
  ],
  exports:[NavbarComponent, AppLayoutComponent,HomeComponent,FooterEndComponent],
  providers: [],
  
})
export class AppLayoutModule { }
