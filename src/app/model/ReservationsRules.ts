export class ReservationsRules {
  reservationsAvailable: number;
  reservationsTotal: number;
  hoursAvailable: number;
  hoursTotal: number;
  constructor(
    reservationsAvailable: number,
    reservationsTotal: number,
    hoursAvailable: number,
    hoursTotal: number
  ) {
    this.reservationsAvailable = reservationsAvailable;
    this.reservationsTotal = reservationsTotal;
    this.hoursAvailable = hoursAvailable;
    this.hoursTotal = hoursTotal;
  }
}
