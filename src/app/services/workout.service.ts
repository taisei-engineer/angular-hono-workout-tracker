import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from '../models/workout.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private readonly baseUrl = `${environment.apiUrl}/workouts`;

  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.baseUrl);
  }
}
