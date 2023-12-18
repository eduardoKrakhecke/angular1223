import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from "@environments/environment";

import { IonicModule } from '@ionic/angular';
import { ColorPickerModule } from 'ngx-color-picker';


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
import { RemoveSlashPipe } from './components/pipes/remove-slash.pipe';
import { ModalConfirmComponent } from './components/shared/modal-confirm/modal-confirm.component';
import { ModalUserComponent } from './components/modal-user/modal-user.component';
import { BadgeComponent } from './components/shared/badge/badge.component';
import { DateFormatPipe } from './components/pipes/date-format.pipe';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { WebSocketComponent } from './pages/web-socket/web-socket.component';
import { UserConnectedComponent } from './pages/user-connected/user-connected.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { TextEditorComponent } from './pages/text-editor/text-editor.component';
import { CreatePdfComponent } from './pages/create-pdf/create-pdf.component';




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
    PostComponent,
    RemoveSlashPipe,
    ModalConfirmComponent,
    ModalUserComponent,
    BadgeComponent,
    DateFormatPipe,
    CreatePostComponent,
    WebSocketComponent,
    UserConnectedComponent,
    GalleryComponent,
    TextEditorComponent,
    CreatePdfComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    ColorPickerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularEditorModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
