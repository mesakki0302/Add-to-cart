import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }
  getproduct(){
    return this.productList.asObservable();
  }
 
  addtocart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalprice()
  }
  getTotalprice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal+= a.total;
    })
    return grandTotal;
  }

  removecartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList)
  }

  removeallcart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }

}
