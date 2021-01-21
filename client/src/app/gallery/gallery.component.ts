import { Component, OnInit,Input } from '@angular/core';
import { ServicesService } from '../services.service';
import { map, catchError } from 'rxjs/operators';
/*import { Router } from '@angular/router';*/
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() imagesurl: any[] = []
  
  constructor(
    private ServicesService: ServicesService,
   
  ) { }

  ngOnInit(): void {
    this.ServicesService.getimage().toPromise().then(data => {
      console.log(data);
      
      for (var i=0;i<data.length;i++){
        this.imagesurl.push(data[i].url)
        console.log(this.imagesurl)
        
        
      }
   }) 
    
  }
  
}
