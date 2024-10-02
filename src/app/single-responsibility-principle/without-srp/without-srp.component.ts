import { Component } from '@angular/core';
import { ICourse } from '../../interfaces/course.interface';

@Component({
  selector: 'app-without-srp',
  standalone: true,
  imports: [],
  templateUrl: './without-srp.component.html',
  styleUrl: './without-srp.component.css'
})
export class WithoutSrpComponent {
  selectedProgram = '';

  courses: ICourse[] = [
    { name: 'Introduction to AI', program: 'Computer Science' },
    { name: 'Advanced Calculus', program: 'Mathematics' },
    { name: 'Digital Marketing', program: 'Business' },
  ];

  get filteredCourses() {
    if (!this.selectedProgram) {
      return this.courses;
    }

    return this.courses.filter(course => course.program === this.selectedProgram);
  }

  onProgramChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedProgram = selectedValue;
  }
}
