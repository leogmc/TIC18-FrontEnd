import { Component, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  styleUrl: './article.component.css',
  template: `<div class="article" *ngIf="articles && articles.length > 0">
                <h2 class="title">Resultados da pesquisa:</h2>
                <ul>
                  <li *ngFor="let article of articles" (click)="selectArticle(article)">
                    <strong class="title">{{article.title}}</strong>
                    <p [innerHTML]="highlightMatches(article.snippet)"></p>
                    <a href="{{article.fullurl}}" target="_blank">Leia mais</a>
                  </li>
                </ul>
              </div>

              <div class="article" *ngIf="selectedArticle">
                <h2>{{selectedArticle.title}}</h2>
                <p [innerHTML]="highlightMatches(selectedArticle.snippet)"></p>
                <a href="{{selectedArticle.fullurl}}" target="_blank">Leia mais</a>
              </div>`,
})
export class ArticleComponent {
  @Input () articles: any = '';
  @Input () selectedArticle: any = '';

  constructor(private sanitizer: DomSanitizer) {}

  selectArticle(article: any) {
    this.selectedArticle = article;
  }

  highlightMatches(snippet: string): SafeHtml {
    const regex = /(<span[^>]*class="searchmatch"[^>]*>.*?<\/span>)/g;
    const highlightedSnippet = snippet.replace(regex, '<span class="custom-highlight" style="background-color: yellow">$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(highlightedSnippet);
  }

}
