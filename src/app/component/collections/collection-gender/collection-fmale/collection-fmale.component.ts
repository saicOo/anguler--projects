import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FuncService } from 'src/app/service/func.service';

@Component({
  selector: 'app-collection-fmale',
  templateUrl: './collection-fmale.component.html',
  styleUrls: ['./collection-fmale.component.css']
})
export class CollectionFmaleComponent implements OnInit {
  // public filterCategoty:any = []
  public productList: any = [];

  constructor(private serv : FuncService ,private api: ApiService) { }

  ngOnInit(): void {
    this.api.get().subscribe((data)=>{
      this.productList = data.filter((a)=>{
        if(a.gender == 'fmale'){
          return a
        }
      })
    })

    // this.serv.getFilter().subscribe((res)=>{
    //   this.filterCategoty = res;

    // })

  }
}
