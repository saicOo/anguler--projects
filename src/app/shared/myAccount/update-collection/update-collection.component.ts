import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionList } from 'src/app/model/collectionList';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-update-collection',
  templateUrl: './update-collection.component.html',
  styleUrls: ['./update-collection.component.css']
})
export class UpdateCollectionComponent implements OnInit {
  object = new CollectionList();
  objectLength: number = 1;
  constructor(private api : ApiService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.api.get().subscribe((data)=>{
      this.objectLength= data.length
    });
  }
  print(x) {
    this.api.getById(x).subscribe((data)=>{
      this.object = data
    })
  }

}
