import {Component, OnInit} from "@angular/core";
import {Trip, Trips} from "./trip.model";
import {TripsService} from "./tripservice";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.css'

})
export class TripsComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripsService: TripsService) { }

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripsService.getTrips().subscribe((data: Trips) => {
      this.trips = data.trips;
    });
  }
}
