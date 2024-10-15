import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Trip, Trips } from './trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private apiUrl = `${environment.apiUrl}/trips`;

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trips> {
    return this.http.get<Trips>(this.apiUrl);
  }

  createTrip(trip: Trip): Observable<number> {
    return this.http.post<number>(this.apiUrl, trip);
  }
}
