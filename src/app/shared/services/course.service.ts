import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Course } from '../interface/course.interface'

const BASE_URL = 'http://localhost:3000'
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  model = 'course'

  getAllCourses() {
    return this.http.get<Course[]>(this.getUrl())
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`
  }
}
