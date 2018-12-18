import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './view/home-view/home/home.component';
import {SigninComponent} from './view/signin/signin.component';
import {SignupComponent}from './view/signup/signup.component';
import {AuthGuard} from './guards/auth.guard';
import {ProductListResolver} from './resolver/product-list-resolver';
import { ProductDetailResolver } from './resolver/product-detail-resolver';
import { UserProfileComponent } from './view/user/user-profile/user-profile.component';
import { UserPurchaseComponent } from './view/user/user-purchase/user-purchase.component';
import { UserCardComponent } from './view/user/user-card/user-card.component';
import { UserProfileResolver } from './resolver/user-profile-resolver';
import { UserCardDetailsResolver } from './resolver/user-card-details-resolver';
import { UserPurchaseDetailsResolver } from './resolver/user-purchase-details-resolver';
import { PaymentSummaryComponent } from './view/ipg/payment-summary/payment-summary.component';
import { AdminComponent } from './view/admin-view/admin/admin.component';
import { HomeListProductsComponent } from './view/home-view/home-list-products/home-list-products.component';
import { HomeProductDetailComponent } from './view/home-view/home-product-detail/home-product-detail.component';
import { EditProductsComponent } from './view/admin-view/edit-products/edit-products.component';
import { CreateProductsComponent } from './view/admin-view/create-products/create-products.component';

const routes: Routes = [
  {path:'',component:HomeComponent, canActivate: [AuthGuard]},
  {path:'home',component:HomeComponent},
  {path:'product',component:HomeListProductsComponent,resolve:{products:ProductListResolver}},
  {path:'product/:id',component:HomeProductDetailComponent,resolve:{product:ProductDetailResolver}},
  {path:'admin',children:[
    {path:'',component:AdminComponent,resolve:{products:ProductListResolver}},
    {path:'edit',component:EditProductsComponent},
    {path:'create',component:CreateProductsComponent}
  ]},
  {path:'edit',component:EditProductsComponent},
  {path:'create',component:CreateProductsComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'payment',children:[
    {path:'summary',component:PaymentSummaryComponent}
  ]},
  {path:'user',children:[
    {path:'profile',component:UserProfileComponent,resolve:{user:UserProfileResolver}},
    {path:'mypurchase',component:UserPurchaseComponent,resolve:{userPurchase:UserPurchaseDetailsResolver}},
    {path:'mycard',component:UserCardComponent,resolve:{userCard:UserCardDetailsResolver}}
  ]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
