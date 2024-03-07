import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionList } from 'src/app/model/collectionList';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-update-by-id',
  templateUrl: './update-by-id.component.html',
  styleUrls: ['./update-by-id.component.css']
})
export class UpdateByIdComponent implements OnInit {

  object = new CollectionList();

  constructor(private api : ApiService,private route : ActivatedRoute ,private router :Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.api.getById(id).subscribe((data : any)=>{
      this.object = data;
    })
  }


  update(title,description){
    if(title.errors == null && description.errors == null){

      this.api.put(this.object,this.route.snapshot.params['id']).subscribe(data =>{

      });
      this.router.navigateByUrl(`CollectionProfile/${this.route.snapshot.params['id']}`);
    }else{
      alert('Pleass Enter Valid Data');
    }
    // btnUpdate.setAttribute('disabled','disabled')
}
}
