import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';

/* import { Wpng2RoutingModule } from './app-routing.module'; */
import { HeaderComponent } from './sections/header/header.component';
import { ProductComponent } from './sections/product/product.component';
import { FooterComponent } from './sections/footer/footer.component';
import { FutureComponent } from './sections/future/future.component';
import { LandingComponent } from './sections/landing/landing.component';
import { HomeComponent } from './home/home.component';
import { DragableComponent } from './sections/dragable/dragable.component';
import { ShopComponent } from './shop/shop.component';
import { DescriptionComponent } from './sections/description/description.component';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    FutureComponent,
    LandingComponent,
    HomeComponent,
    DragableComponent,
    ShopComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
/*     Wpng2RoutingModule, */
    RouterModule.forRoot([
      { path:'home', component: HomeComponent},
      { path: 'about', component: PostListComponent},
      { path: 'shop', component: ShopComponent},
      { path:'', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }