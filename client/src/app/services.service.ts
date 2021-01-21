import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/*import { Router } from '@angular/router';*/
interface imageResults {
  Name: number;
  url: string;
}
@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  Images: Observable<imageResults[]>;
  constructor(private http: HttpClient) { }
  getimage(){
    return this.http.get
    ('http://localhost:5000/Images') 
   
  }
  
}
