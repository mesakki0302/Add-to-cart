import { Component,OnInit} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList:any;

  public Jess:any;

  public searchkey:string="";

  constructor(private api:ApiService,private cart:CartService){}

ngOnInit():void{

  this.api.getproduct().subscribe(res=>{
    this.productList=res;

    this.productList.forEach((a:any)=> {
      Object.assign(a,{quantity:1,total:a.price})
    });
    
    this.cart.search.subscribe((val:any)=>{
      this.searchkey=val;
    })

  }
  )}

AddtoCart(item:any){
  this.cart.addtocart(item);
}
}  