import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './view/nav/nav.component';
import { SignupComponent } from './view/signup/signup.component';
import { SigninComponent } from './view/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './common/alert/alert.component';
import {ProductListResolver} from './resolver/product-list-resolver';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProductDetailResolver } from './resolver/product-detail-resolver';
import { UserProfileComponent } from './view/user/user-profile/user-profile.component';
import { UserPurchaseComponent } from './view/user/user-purchase/user-purchase.component';
import { UserCardComponent } from './view/user/user-card/user-card.component';
import { UserProfileResolver } from './resolver/user-profile-resolver';
import { UserCardDetailsResolver } from './resolver/user-card-details-resolver';
import { UserPurchaseDetailsResolver } from './resolver/user-purchase-details-resolver';
import { PaymentSummaryComponent } from './view/ipg/payment-summary/payment-summary.component';
import { HomeProductDetailComponent } from './view/home-view/home-product-detail/home-product-detail.component';
import { HomeComponent } from './view/home-view/home/home.component';
import { CreateProductsComponent } from './view/admin-view/create-products/create-products.component';
import { EditProductsComponent } from './view/admin-view/edit-products/edit-products.component';
import { DeleteProductsComponent } from './view/admin-view/delete-products/delete-products.component';
import { ListProductsComponent } from './view/admin-view/list-products/list-products.component';
import { AdminComponent } from './view/admin-view/admin/admin.component';
import { HomeListProductsComponent } from './view/home-view/home-list-products/home-list-products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProductsComponent,
    EditProductsComponent,
    DeleteProductsComponent,
    ListProductsComponent,
    NavComponent,
    AdminComponent,
    HomeListProductsComponent,
    SignupComponent,
    SigninComponent,
    AlertComponent,
    HomeProductDetailComponent,
    UserProfileComponent,
    UserPurchaseComponent,
    UserCardComponent,
    PaymentSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module 
    AngularFireDatabaseModule,  // Firebase database module 
    AngularFireAuthModule
  ],
  providers: [
    ProductListResolver,
    ProductDetailResolver,
    UserProfileResolver,
    UserCardDetailsResolver,
    UserPurchaseDetailsResolver
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
