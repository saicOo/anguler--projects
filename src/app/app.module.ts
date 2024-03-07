import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CartComponent } from './component/cart/cart.component';
import { AllCollectionComponent } from './component/collections/all-collection/all-collection.component';
import { CollectionMaleComponent } from './component/collections/collection-gender/collection-male/collection-male.component';
import { CollectionFmaleComponent } from './component/collections/collection-gender/collection-fmale/collection-fmale.component';
import { CollectionSummerComponent } from './component/collections/collection-gender/collection-summer/collection-summer.component';
import { CollectionSpringComponent } from './component/collections/collection-gender/collection-spring/collection-spring.component';
import { CollectionWinterComponent } from './component/collections/collection-gender/collection-winter/collection-winter.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CollectionProfileComponent } from './component/collections/collection-profile/collection-profile.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './shared/myAccount/login/login.component';
import { AccountComponent } from './shared/myAccount/account/account.component';
import { AddCollectionComponent } from './shared/myAccount/add-collection/add-collection.component';
import { DeleteCollectionComponent } from './shared/myAccount/delete-collection/delete-collection.component';
import { UpdateCollectionComponent } from './shared/myAccount/update-collection/update-collection.component';
import { UpdateByIdComponent } from './shared/myAccount/UpdateCollection/update-by-id/update-by-id.component';
import { CheckoutComponent } from './component/checkout/checkout.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    CartComponent,
    AllCollectionComponent,
    CollectionMaleComponent,
    CollectionFmaleComponent,
    CollectionSummerComponent,
    CollectionSpringComponent,
    CollectionWinterComponent,
    FooterComponent,
    CollectionProfileComponent,
    FilterPipe,
    LoginComponent,
    AccountComponent,
    AddCollectionComponent,
    DeleteCollectionComponent,
    UpdateCollectionComponent,
    UpdateByIdComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
