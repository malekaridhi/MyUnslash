import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
/*import { Router } from '@angular/router';*/
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 
  constructor(
    private ServicesService: ServicesService,
   
  ) { }

  ngOnInit(): void {
    
  }
  
}
