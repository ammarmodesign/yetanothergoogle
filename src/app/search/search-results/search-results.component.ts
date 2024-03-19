import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SearchLinkComponent } from '../search-link/search-link.component';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input.component';

interface searchResInterface {
  status: number;
  data: {
    result_stat: string;
    organic_results: [
      {
        title: string;
        url: string;
        desc: string;
      }
    ];
    knowledge_graph: {
      title: string;
      answer_panel: [];
      informations: [];
    };
    inline_twitter: [
      {
        tweet?: string;
        url: string;
      }
    ];
    ads: {
      top_text_ads: [
        {
          title: string;
          url: string;
          desc: string;
        }
      ];
    };
  };
}

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [SearchLinkComponent, SearchInputComponent, CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string = '';
  searchRes: searchResInterface[] = [];
  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  fetchForData() {
    const url = 'https://g-search.p.rapidapi.com/search?q=';
    const options = {
      headers: {
        'X-RapidAPI-Key': '47d5a35e6cmshe1229de981bd503p10fc4ajsna7fc88ccab90',
        'X-RapidAPI-Host': 'g-search.p.rapidapi.com',
      },
    };
    this.http
      .get(`${url}${this.searchQuery}`, options)
      .subscribe((res: any) => {
        this.searchRes = [res];
        console.log(this.searchRes);
        this.isLoading = false;
      });
    // this.searchQuery = '';
  }

  getSearchTerm(q: string) {
    this.router.navigate([`/search/${q}`]);
    console.log(q);
    this.isLoading = true;
    this.searchQuery = q;
    this.fetchForData();
  }

  ngOnInit() {
    this.searchQuery = this.route.snapshot.paramMap.get('searchTerm') as string;
    this.fetchForData();
  }
}
