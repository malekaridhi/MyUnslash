import { Component, OnInit } from '@angular/core';
import { ServicesService , ImageResults } from '../services.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  Name: string;
  constructor(
    private ServicesService: ServicesService,
  ) { }
  imageName = []
  ngOnInit(): void {
  }
  onsearchSubmit() {
    const searchByName :ImageResults ={
      Name:this.Name
    }
    this.ServicesService.searchimages(searchByName).toPromise().then(data => {
      console.log(data);
      
   }) 
    }
}
