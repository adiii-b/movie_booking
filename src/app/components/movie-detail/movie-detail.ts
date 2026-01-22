import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetailComponent {
  movie: MovieDetail = {
    title: 'Inception',
    genre: 'Sci-Fi',
    duration: 148,
    rating: 8.8,
    description: 'A mind-bending thriller about dreams within dreams.',
    language: 'English'
  };
}

export interface MovieDetail {
  title: string;
  genre: string;
  duration: number;
  rating: number;
  description: string;
  language: string;
}
