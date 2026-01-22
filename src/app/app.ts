import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie_booking');
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  language: string;
  duration: number;
  rating: number;
  posterUrl: string;
}

export interface Theater {
  id: number;
  name: string;
  location: string;
  totalSeats: number;
}

export interface showTime{
  id: number;
  movieId: number;
  theaterId: number;
  price: number;
  time: string;
}

export interface seat{
  id: number;
  showTimeId: number;
  seatNumber: string;
  isBooked: boolean;
}

export class Booking{
  constructor(
    public bookingId: number,
    public movieTitle: string,
    public theaterName: string,
    public seats: string[],
    public totalAmount: number
  ){}
}
