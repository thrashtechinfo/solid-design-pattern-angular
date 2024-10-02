import { Component } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';
import { ProgramFilterComponent } from './program-filter/program-filter.component';
import { ICourse } from '../../interfaces/course.interface';

@Component({
  selector: 'app-with-srp',
  standalone: true,
  imports: [CourseListComponent, ProgramFilterComponent],
  templateUrl: './with-srp.component.html',
  styleUrl: './with-srp.component.css'
})
export class WithSrpComponent {
  courses: ICourse[] = [
    { name: 'Introduction to AI', program: 'Computer Science' },
    { name: 'Advanced Calculus', program: 'Mathematics' },
    { name: 'Digital Marketing', program: 'Business' },
  ];

  filteredCourses = this.courses;

  onProgramChange(program: string) {
    if (!program) {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course => course.program === program);
    }
  }
}
