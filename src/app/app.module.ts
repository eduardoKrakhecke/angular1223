import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './components/shared/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ToastComponent } from './components/shared/toast/toast.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { UserComponent } from './pages/user/user.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { MapComponent } from './components/shared/map/map.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    HomeComponent,
    ToastComponent,
    MenuComponent,
    UserComponent,
    CardUserComponent,
    MapComponent,
    LoadingComponent,
    PostComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
