import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';*/
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  getimage(Image: FormData){
    return this.http.post
    ('http://localhost:4000/Images',Image)   
  }
}
