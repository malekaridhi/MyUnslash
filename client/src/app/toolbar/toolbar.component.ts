import { Component, OnInit } from '@angular/core';
import { ServicesService , ImageResults } from '../services.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import{DialogComponent}from '../dialog/dialog.component'
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  Name: string;
  constructor(
    private ServicesService: ServicesService,
    private dialog :MatDialog
  ) { }
  imageName = []
  ngOnInit(): void {
  }
  /*onsearchSubmit() {
    
    this.ServicesService.searchimages().toPromise().then(data => {
      
   }) 
    }
    
    }*/
    onadd(){
      this.dialog.open(DialogComponent)
    }
}
