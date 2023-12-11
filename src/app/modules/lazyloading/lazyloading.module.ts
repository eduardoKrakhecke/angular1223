import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from '@ionic/angular';

import { LazyloadingRoutingModule } from "@app/modules/lazyloading/lazyloading-routing.module";

import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';






@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
