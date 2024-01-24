import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiapiService {

  private apiUrl = 'https://pt.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const params = new HttpParams()
      .set('action', 'query')
      .set('format', 'json')
      .set('list', 'search')
      .set('srsearch', query)
      .set('redirects', '1');

    return this.http.jsonp(`${this.apiUrl}?${params.toString()}`, 'callback');
  }

  getArticleDetails(title: string): Observable<any> {
    const detailsParams = new HttpParams()
      .set('action', 'query')
      .set('format', 'json')
      .set('titles', title)
      .set('prop', 'info')
      .set('inprop', 'url');

    return this.http.jsonp(`${this.apiUrl}?${detailsParams.toString()}`, 'callback').pipe(
      map((response: any) => {
        const pageId = Object.keys(response.query.pages)[0];
        return response.query.pages[pageId];
      })
    );
  }

  getArticlesDetails(articles: any[]): Observable<any[]> {
    const observables = articles.map((article) => this.getArticleDetails(article.title));
    return forkJoin(observables);
  }
}
