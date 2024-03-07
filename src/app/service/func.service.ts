import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FuncService {

  public productList: any;
  public filtergender: any;
  public filterCategory: any;
  public collectionList = new BehaviorSubject<any>([])
  constructor(private api : ApiService) {
    this.api.get().subscribe((data)=>{
      this.productList = data;
      this.filtergender = data;
    })
  }

  getFilter(){
    return this.collectionList.asObservable();
  }
    filterAdd(gender :any){
      this.filtergender = this.productList.filter((a)=>{
      if(a.gender == gender){
        return a
      }
    })
    this.collectionList.next(this.filtergender)
  }
    filterAddCategory(category :any){
      this.filterCategory = this.productList.filter((a)=>{
      if(a.category == category){
        return a
      }
    })
    this.collectionList.next(this.filterCategory)
  }
}
