import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cart:CartService){}

  public product:any=[];
  public grandTotal!:number;

  
ngOnInit(): void {
    this.cart.getproduct().
    subscribe((res)=>{
    this.product=res;
    this.grandTotal=this.cart.getTotalprice();
  })
}

removeItem(item:any){
  this.cart.removecartItem(item);
}

Emptycart(){
  this.cart.removeallcart()
}

}
 
