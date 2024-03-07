import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AllCollectionComponent } from './component/collections/all-collection/all-collection.component';
import { CollectionFmaleComponent } from './component/collections/collection-gender/collection-fmale/collection-fmale.component';
import { CollectionMaleComponent } from './component/collections/collection-gender/collection-male/collection-male.component';
import { CollectionSpringComponent } from './component/collections/collection-gender/collection-spring/collection-spring.component';
import { CollectionSummerComponent } from './component/collections/collection-gender/collection-summer/collection-summer.component';
import { CollectionWinterComponent } from './component/collections/collection-gender/collection-winter/collection-winter.component';
import { CollectionProfileComponent } from './component/collections/collection-profile/collection-profile.component';
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/myAccount/account/account.component';
import { AddCollectionComponent } from './shared/myAccount/add-collection/add-collection.component';
import { DeleteCollectionComponent } from './shared/myAccount/delete-collection/delete-collection.component';
import { LoginComponent } from './shared/myAccount/login/login.component';
import { UpdateCollectionComponent } from './shared/myAccount/update-collection/update-collection.component';
import { UpdateByIdComponent } from './shared/myAccount/UpdateCollection/update-by-id/update-by-id.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {path: "" , component : HomeComponent},
  {path: "AllCollection" , component : AllCollectionComponent},
  {path: "CollectionFmale" , component : CollectionFmaleComponent},
  {path: "CollectionMale" , component : CollectionMaleComponent},
  {path: "CollectionSpring" , component : CollectionSpringComponent},
  {path: "CollectionWinter" , component : CollectionWinterComponent},
  {path: "CollectionSummer" , component : CollectionSummerComponent},
  {path : "CollectionProfile/:id", component : CollectionProfileComponent},
  {path: "cart" , component : CartComponent},
  {path: "checkout" , component : CheckoutComponent},
  {path: "login" , component : LoginComponent},
  {path: "Account" , component : AccountComponent},
  {path: "AddCollection" , component : AddCollectionComponent},
  {path: "UpdateCollection" , component : UpdateCollectionComponent},
  {path: "UpdateById/:id" , component : UpdateByIdComponent},
  {path: "DeleteCollection" , component : DeleteCollectionComponent},
  {path: "**" , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
