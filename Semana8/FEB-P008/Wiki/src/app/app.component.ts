import { Component } from '@angular/core';
import { WikiapiService } from './services/wikiapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wikipedia-restapi';

  articles: any[] = [];
  selectedArticle: any = '';

  constructor(private wikiService: WikiapiService) {}

  search(term: string) {
    this.wikiService.search(term).subscribe((response: any) => {
      this.wikiService.getArticlesDetails(response.query.search).subscribe((details: any[]) => {
        this.articles = response.query.search.map((result: any, index: number) => ({
          title: result.title,
          snippet: result.snippet,
          fullurl: details[index].fullurl,
        }));
        this.selectedArticle = null;
      });
    });
  }
}
