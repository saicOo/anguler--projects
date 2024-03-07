import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FuncService } from 'src/app/service/func.service';

@Component({
  selector: 'app-collection-male',
  templateUrl: './collection-male.component.html',
  styleUrls: ['./collection-male.component.css']
})
export class CollectionMaleComponent implements OnInit {

 public productList: any = [];

 constructor(private serv : FuncService ,private api: ApiService) { }

 ngOnInit(): void {
   this.api.get().subscribe((data)=>{
     this.productList = data.filter((a)=>{
       if(a.gender == 'male'){
         return a
       }
     })
   })

 }
}
