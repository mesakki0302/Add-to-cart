import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit{

  Fashion:any;

  constructor(private Api:ApiService,private cart:CartService){}

  ngOnInit(){
     this.Fashion=this.Api.getFashion();

     this.Fashion.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
     })

}

AddtoCart(item:any){
  this.cart.addtocart(item);
}

}
