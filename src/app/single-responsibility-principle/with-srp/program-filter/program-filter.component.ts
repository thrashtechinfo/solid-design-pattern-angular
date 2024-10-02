import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-program-filter',
  standalone: true,
  imports: [],
  templateUrl: './program-filter.component.html',
  styleUrl: './program-filter.component.css'
})
export class ProgramFilterComponent {
  @Output() programChange = new EventEmitter<string>();

  onProgramChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.programChange.emit(selectedValue);
  }
}
