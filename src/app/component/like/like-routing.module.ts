import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header1Component } from './header1/header1.component';
import { JewelComponent } from './jewel/jewel.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { FashionComponent } from './fashion/fashion.component';

const routes: Routes = [{path:'header1',component:Header1Component},{path:'like/electronic',component:ElectronicComponent},{path:'like/jewel',component:JewelComponent},{path:'like/fashion',component:FashionComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikeRoutingModule { }
