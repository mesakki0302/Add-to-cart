import { Component,OnInit } from '@angular/core';
import { ApiService} from 'src/app/service/api.service';
import { CartService} from 'src/app/service/cart.service';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.scss']
})
export class ElectronicComponent implements OnInit {
  electronic:any;

  constructor( private Api:ApiService,private cart:CartService){}

  ngOnInit(){

    this.electronic=this.Api.getelectronics();
    this.electronic.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
     })

  }

  AddtoCart(item:any){
    this.cart.addtocart(item);

  }


 


}
