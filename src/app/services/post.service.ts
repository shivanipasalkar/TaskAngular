import { Injectable } from '@angular/core';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
constructor (private http: HttpClient){}
getAllPosts():Observable<any> {
 
  return this.http.get('https://jsonplaceholder.typicode.com/posts')
  .pipe(catchError((error)=>{
    return throwError(()=> new Error(error.message))
  })) ;
}
}
