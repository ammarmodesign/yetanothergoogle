import { Component } from '@angular/core';
import { SearchInputComponent } from './search-input/search-input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private router: Router) {}
  getSearchTerm(q: string) {
    this.router.navigate([`/search/${q}`]);
  }
}
