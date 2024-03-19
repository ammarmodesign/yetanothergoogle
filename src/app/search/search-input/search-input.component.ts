import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  @Output() searchInputEmitter = new EventEmitter();
  searchInput = new FormControl('', Validators.required);

  search() {
    if (this.searchInput.valid)
      this.searchInputEmitter.emit(this.searchInput.value);
  }
}
