import { Component, Input } from '@angular/core';
import { ICourse } from '../../../interfaces/course.interface';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  @Input() courses: Array<ICourse> = [];
}
