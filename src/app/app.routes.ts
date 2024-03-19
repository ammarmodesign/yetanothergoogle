import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/search' },
  { path: 'search', component: SearchComponent },
  { path: 'search/:searchTerm', component: SearchResultsComponent },
  { path: '**', redirectTo: '/search', pathMatch: 'full' },
];
