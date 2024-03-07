import { Component, OnInit } from '@angular/core';
import { CollectionList } from 'src/app/model/collectionList';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-delete-collection',
  templateUrl: './delete-collection.component.html',
  styleUrls: ['./delete-collection.component.css']
})
export class DeleteCollectionComponent implements OnInit {
  object = new CollectionList;
  objectLength: number = 1;
  constructor(private api : ApiService) { }

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
  remove(id){

    this.api.delete(id).subscribe(data => {
      window.location.reload();
    })
  }
}
