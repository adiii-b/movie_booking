import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  movies: Movie[] = [
    {title:"Inception", genre:"Sci-Fi", duration:148, rating:8.7},
    {title:"The Dark Knight", genre:"Action", duration:152, rating:9.0},
    {title:"Interstellar", genre:"Sci-Fi", duration:169, rating:8.6},
    {title:"Parasite", genre:"Thriller", duration:132, rating:8.6}
  ];
}
export interface Movie {
  title: string;
  genre: string;
  duration: number;
  rating: number;
}
