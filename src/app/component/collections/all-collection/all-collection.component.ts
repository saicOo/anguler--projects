import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-all-collection',
  templateUrl: './all-collection.component.html',
  styleUrls: ['./all-collection.component.css']
})
export class AllCollectionComponent implements OnInit {

  public productList: any;
  public filterCategoty : any
  searchKay:string = "";
    constructor(private api : ApiService , private cartService :CartService) { }

    ngOnInit(): void {

      this.api.get().subscribe((data)=>{
        this.productList = data;
        this.filterCategoty = data;

      });
      this.cartService.search.subscribe((val:any)=>{
        this.searchKay = val;
      })
    }

}
