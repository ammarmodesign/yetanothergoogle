import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-link',
  standalone: true,
  imports: [],
  templateUrl: './search-link.component.html',
  styleUrl: './search-link.component.css',
})
export class SearchLinkComponent {
  @Input() title!: string;
  @Input() desc!: string;
  @Input() link!: string;
}
