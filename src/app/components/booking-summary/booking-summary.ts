import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.css'
})
export class BookingSummaryComponent {

  booking = {
    movieTitle: 'Inception',
    theatreName: 'PVR Cinemas',
    showTime: '7:30 PM',
    seats: ['A1', 'A2'],
    totalAmount: 300
  };

}

