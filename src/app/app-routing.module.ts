import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './component/user/user.component';



const routes: Routes = [{path:'header',component:HeaderComponent},{path:'Login',component:LoginComponent},{path:"",redirectTo:'products',pathMatch:'full'},{path:'user',component:UserComponent},
{path:'products',component:ProductsComponent},{path:'cart', component:CartComponent},
{path:'like',loadChildren:()=>import('./component/like/like.module').then((m)=>m.LikeModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
