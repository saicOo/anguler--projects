import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FuncService } from 'src/app/service/func.service';

@Component({
  selector: 'app-collection-winter',
  templateUrl: './collection-winter.component.html',
  styleUrls: ['./collection-winter.component.css']
})
export class CollectionWinterComponent implements OnInit {

  // public filterCategory: any = [];
  public productList: any = [];

  constructor(private serv : FuncService ,private api: ApiService) { }

  ngOnInit(): void {
    this.api.get().subscribe((data)=>{
      this.productList = data.filter((a)=>{
        if(a.category == 'winter'){
          return a
        }
      })
    })

    // this.serv.getFilter().subscribe((res)=>{
    //   this.filterCategory = res;

    // })

  }
}
