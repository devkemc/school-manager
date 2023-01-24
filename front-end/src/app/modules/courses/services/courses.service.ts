import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly endPoint = '/assets/course.mock.json';

  constructor(private http: HttpClient) {}

  public listAll() {
    return this.http.get<Course[]>(`${this.endPoint}`);
  }
}
