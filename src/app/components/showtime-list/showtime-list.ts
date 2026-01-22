import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showtime-list',
  imports: [CommonModule],
  templateUrl: './showtime-list.html',
  styleUrl: './showtime-list.css',
  standalone: true,
})
export class ShowtimeList {
  showtimes: Show[] = [
    {title: 'Inception', screen: 'Screen 1', price: 10, time: '2024-07-01T14:00:00', language: 'English'},
    {title: 'The Dark Knight', screen: 'Screen 2', price: 12, time: '2024-07-01T16:30:00', language: 'English'},
    {title: 'Interstellar', screen: 'Screen 3', price: 15, time: '2024-07-01T19:00:00', language: 'English'},
    {title: 'Parasite', screen: 'Screen 4', price: 8, time: '2024-07-01T21:30:00', language: 'Korean'},
  ];
}

export interface Show{
  title: string;
  screen: string;
  price: number;
  time: string;
  language: string;
}