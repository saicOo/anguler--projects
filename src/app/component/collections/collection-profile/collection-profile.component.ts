import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionList } from 'src/app/model/collectionList';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-collection-profile',
  templateUrl: './collection-profile.component.html',
  styleUrls: ['./collection-profile.component.css']
})
export class CollectionProfileComponent implements OnInit {

  public productList = new CollectionList();
  public displayedimg = 0;
  constructor(private service : ApiService,private cartService : CartService,private route : ActivatedRoute) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.params['id'];
    this.service.getById(id).subscribe((data : any)=>{
      this.productList = data;
    })
  }
  addToCart(item :any){
    this.cartService.addToCart(item)
  }
  
}
