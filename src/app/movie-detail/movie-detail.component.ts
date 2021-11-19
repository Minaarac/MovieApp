import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
//import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input()
  movie: Movie = new Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
   // private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie():void{
    this.route.params.subscribe((params)=>{
      console.log("AAAAA",params)
    })
    const id:number =Number (this.route.snapshot.paramMap.get('id')) ;//route üzerinde id parametresine ulaş
    this.movieService.getMovie(id)
    .subscribe((movie)=>
    { 
      this.movie = movie;
      console.log("dfkjfd", movie);
    });

  }

}
