import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { FuncService } from 'src/app/service/func.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public totalItem: number = 0;
public grandTotal !: Number;
public searchTerm : string = '';
  constructor(private serv : FuncService ,private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res)=>{
      this.totalItem = res.length
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }



  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm)
  }


  open(box,spin){
    box.classList.toggle("open")
    spin.classList.toggle("fa-spin")
  }
}
