import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class SearchGoogleService {
  url = 'https://g-search.p.rapidapi.com/search?q=';
  options = {
    headers: {
      'X-RapidAPI-Key': '47d5a35e6cmshe1229de981bd503p10fc4ajsna7fc88ccab90',
      'X-RapidAPI-Host': 'g-search.p.rapidapi.com',
    },
  };
  async getSearchResult(q: string) {
    const reqUrl = this.url + q;
    const data = await axios.get(reqUrl, this.options);
    return data.data;
  }
}
