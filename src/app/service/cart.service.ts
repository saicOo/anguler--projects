import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList :any = []
  public productList = new BehaviorSubject<any>([])

  public search = new BehaviorSubject<string>("")
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  
  getTotalPrice() : Number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal
  }
  removeCartItem(product : any){
    let i = this.cartItemList.indexOf(product);
      this.cartItemList.splice(i,1)
    this.productList.next(this.cartItemList)
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }
}
