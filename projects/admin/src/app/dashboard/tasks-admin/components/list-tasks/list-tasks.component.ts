import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

export interface PeriodicElement {
  title: string;
  user: string;
  deadLineDate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {status:'Complete' , title: 'Hydrogen', user: "1.0079", deadLineDate:"10-11-2022" },
  {status:'In-Prossing' , title: 'Helium', user: "4.0026", deadLineDate:"10-11-2022" },
  {status:'Complete' , title: 'Lithium', user: "6.941", deadLineDate:"10-11-2022" },
  {status:'Complete' , title: 'Beryllium', user: "9.0122", deadLineDate:"10-11-2022" },
  {status:'Complete' , title: 'Boron', user: "10.811", deadLineDate:"10-11-2022" },
  {status:'Complete' , title: 'Carbon', user: "12.010", deadLineDate:"10-11-2022" },
  {status:'Complete' , title: 'Nitrogen', user: "14.006", deadLineDate:"10-11-2022" },
  {status:'Complete' , title: 'Oxygen', user: "15.999", deadLineDate:"10-11-2022" },
  {status:'Complete' , title: 'Fluorine', user: "18.998", deadLineDate:"10-11-2022" },
  { status:'Complete' , title: 'Neon', user: "20.179", deadLineDate:"10-11-2022" },
];

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'user' ,'deadline','status', 'actions'];
  dataSource:any = [];
  tasksFilter!:FormGroup
  users: any = [
    { name: "saico", id: "650ad252ac1e2441d8d96030" },
    { name: "osha", id: "650ad2ccac1e2441d8d96033" },
  ]

  status:any = [
    {name:this.translate.instant("tasks.Complete")},
    {name:"In-Progress"},
  ]
  page:any = 1
  filteration:any = {
    page:this.page,
    limit:10
  }

  timeOuteId:any
  total:any
  constructor(private service:TasksService
    , public dialog:MatDialog,
    private spinner:NgxSpinnerService,
    private toaster:ToastrService,
    private translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllTasks()
  }

  search(event:any){
    this.page = 1
    this.filteration['page'] = 1
    this.filteration['keyword'] = event.value
    clearTimeout(this.timeOuteId)
    this.timeOuteId = setTimeout(() => {
      this.getAllTasks()
    }, 2000);
  }

  selectUser(event:any){
    this.page = 1
    this.filteration['page'] = 1
    this.filteration['userId'] = event.value
      this.getAllTasks()
  }

  selectStatus(event:any){
    this.page = 1
    this.filteration['page'] = 1
    this.filteration['status'] = event.value.trim()
      this.getAllTasks()
  }

  selectDate(event:any, type:any){
    this.page = 1
    this.filteration['page'] = 1
   this.filteration[type] = moment(event.value).format('DD-MM-YYYY')
   if (type == 'toDate' && this.filteration['toDate'] !== 'Invalid date') {
     this.getAllTasks()
   }
  }

  getAllTasks(){

    this.service.getAllTasks(this.filteration).subscribe((res:any)=>{
      this.dataSource = this.mappingTasks(res.tasks)
      this.total = res.totalItems
    })
  }

  mappingTasks(data:any[]){
    let newTasks = data.map(item => {
      return{
        ...item,
        user:item.userId.username
      }
    })
    return newTasks
  }

  addTask(){
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '750px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllTasks()
      }
    });
  }

  updateTask(element:any){
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '750px',
      data:element,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllTasks()
      }
    });
  }

  deleteTask(id:any){

    this.service.deleteTask(id).subscribe(res=>{
      this.getAllTasks()

    })
  }
  changePage(event:any){
    this.page = event
    this.filteration['page'] = event
    this.getAllTasks()
  }
  }

