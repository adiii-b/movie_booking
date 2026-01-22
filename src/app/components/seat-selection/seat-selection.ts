import { Component } from '@angular/core';

@Component({
  selector: 'app-seat-selection',
  imports: [],
  templateUrl: './seat-selection.html',
  styleUrl: './seat-selection.css',
})
export class SeatSelection {
  seats= [
    {seatNumber: 'A1', isAvailable: true},
    {seatNumber: 'A2', isAvailable: false},
    {seatNumber: 'A3', isAvailable: true},
  ];

  selectedSeats: string[] = [];

  selectSeat(seat: any) {

    
    if (seat.isBooked) {
      return;
    }
    if (this.selectedSeats.includes(seat.seatNumber)) {
      this.selectedSeats = this.selectedSeats.filter(
        s => s !== seat.seatNumber
      );
    } else {
      this.selectedSeats.push(seat.seatNumber);
    }
  }
}
