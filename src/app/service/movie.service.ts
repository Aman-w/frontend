import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
apiurl='https://demo.credy.in/api/v1/maya/movies/';
url="https://ui-avatars.com/api"
  constructor(private http:HttpClient) {

   }

   loadMoviesList(page:any){
    let params1=new HttpParams().set("page",page);

     return this.http.get(this.apiurl,{params:params1});
   }

   data(Name:any){
    let params1=new HttpParams().set("name",Name);
    return this.http.get(this.url,{params:params1}); 
   }

}