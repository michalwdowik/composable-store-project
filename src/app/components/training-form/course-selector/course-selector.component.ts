import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Course } from 'src/app/shared/interface/course.interface'
import { CourseService } from 'src/app/shared/services/course.service'

@Component({
  selector: 'app-course-selector',
  templateUrl: './course-selector.component.html',
  styleUrls: ['./course-selector.component.scss'],
})
export class CourseSelectorComponent implements OnInit {
  course$: Observable<Course[]> = new Observable<Course[]>()
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.loadCourses()
  }

  private loadCourses() {
    this.course$ = this.courseService.getAllCourses()
  }
}
