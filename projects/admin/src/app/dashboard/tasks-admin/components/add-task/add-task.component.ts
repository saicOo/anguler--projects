import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../../service/tasks.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialog: MatDialogRef<AddTaskComponent>,
    public matDialog: MatDialog,
    private serveice: TasksService,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService,) { }
  fileName = ""
  users: any = [
    { name: "saico", id: "650ad252ac1e2441d8d96030" },
    { name: "osha", id: "650ad2ccac1e2441d8d96033" },
  ]
  newTaskForm!: FormGroup
  formValues: any
  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.newTaskForm = this.fb.group({
      title: [this.data?.title || '', [Validators.required, Validators.minLength(5)]],
      userId: [this.data?.userId._id || '', Validators.required],
      image: [this.data?.image || '', Validators.required],
      description: [this.data?.description || '', [Validators.required, Validators.minLength(5)]],
      deadline: [this.data ? new Date(this.data.deadline.split('-').reverse().join('-')) : '', Validators.required],
    })
    this.formValues = this.newTaskForm.value
  }

  selectImage(event: any) {
    this.fileName = event.target.value;
    this.newTaskForm.get('image')?.setValue(event.target.files[0])
  }

  createTask() {
    let model = this.prepereFormData()
    this.serveice.createTask(model).subscribe(res => {
      this.dialog.close(true)
      this.toaster.success("Task Created Successfuly", "Success")
    })
  }
  updateTask() {
    let model = this.prepereFormData()
    this.serveice.updateTask(model, this.data._id).subscribe(res => {
      this.dialog.close(true)
      this.toaster.success("Task Updated Successfuly", "Success")
    })
  }

  prepereFormData() {
    let newDate = moment(this.newTaskForm.value['deadline']).format('DD-MM-YYYY')
    let formData = new FormData();
    Object.entries(this.newTaskForm.value).forEach(([key, value]: any) => {
      if (key == 'deadline') {
        formData.append(key, newDate)
      } else {
        formData.append(key, value)
      }
    })
    return formData
  }

  close() {
    let hasChanges = false
    Object.keys(this.formValues).forEach((item) => {

      if (this.formValues[item] !== this.newTaskForm.value[item]) {
        hasChanges = true
      }
    })

    if (hasChanges) {
      const dialogRef = this.matDialog.open(ConfirmationComponent, {
        width: '750px',
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
        }
      });
    } else {
      this.dialog.close()
    }
  }
}
