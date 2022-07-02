import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MovieService } from '../service/movie.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
 
  name_list:any;
  title_data:any;
  totLen: any;
  s:any;
  showMore = false;
  count : number = 0;
  moreData:any;
  page: number = 1;


  constructor(private service:MovieService) { 
    let c = localStorage.getItem('next');
    this.LoadData(c);
  }
  ngOnInit(): void {
    this.LoadData("1");

  }
  reload(){
    window.location.reload();
    }


  

  LoadData(page:any){
    this.service.loadMoviesList(page).subscribe(data=>{
      this.name_list=data;
      this.title_data=this.name_list.results;
      this.totLen=this.name_list.count;
    });
  }



  onDataChange(event:any){
    this.page = event;
    this.count++;
    this.LoadData(event);

  }

 




 

}
