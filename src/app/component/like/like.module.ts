import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeRoutingModule } from './Like-routing.module';
import { FashionComponent } from './fashion/fashion.component';
import { JewelComponent } from './jewel/jewel.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { Header1Component } from './header1/header1.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FashionComponent,JewelComponent,ElectronicComponent,Header1Component],
  imports: [
    CommonModule,
    LikeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LikeModule { }
