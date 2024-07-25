import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService} from 'src/app/service/cart.service';

@Component({
  selector: 'app-jewel',
  templateUrl: './jewel.component.html',
  styleUrls: ['./jewel.component.scss']
})
export class JewelComponent implements OnInit {
  Jess:any;
  constructor(public Api:ApiService,public cart:CartService){}

  ngOnInit(){
    this.Jess=this.Api.getJewel();
    this.Jess.forEach((a:any)=>{
     Object.assign(a,{quantity:1,total:a.price})
    })
  }

  AddtoCart(item:any){
    this.cart.addtocart(item);
  }


}
