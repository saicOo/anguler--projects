import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionList } from 'src/app/model/collectionList';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {
  object = new CollectionList();

  constructor(private api : ApiService,private router :Router) { }

  ngOnInit(): void {

  }
  save(title,description){
    if(title.errors == null && description.errors == null)
    {
      this.api.post(this.object).subscribe(data => {
        this.router.navigateByUrl("");
      })
    }else{
      alert('Pleass Enter Valid Data');
    }

  }

}
