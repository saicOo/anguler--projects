import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FuncService } from 'src/app/service/func.service';

@Component({
  selector: 'app-collection-spring',
  templateUrl: './collection-spring.component.html',
  styleUrls: ['./collection-spring.component.css']
})
export class CollectionSpringComponent implements OnInit {

  // public filterCategory: any = [];
  public productList: any = [];

  constructor(private serv : FuncService ,private api: ApiService) { }

  ngOnInit(): void {
    this.api.get().subscribe((data)=>{
      this.productList = data.filter((a)=>{
        if(a.category == 'spring'){
          return a
        }
      })
    })

    // this.serv.getFilter().subscribe((res)=>{
    //   this.filterCategory = res;

    // })

  }
}
