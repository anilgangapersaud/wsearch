import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WikipediaService } from './wikipedia.service';
import { CommonModule } from '@angular/common';

interface Pages {
  pageid: number;
  title: string; 
  snippet: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageListComponent, SearchBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  pages: Pages[] = [];

  constructor(private wikipedia: WikipediaService) {}
  
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    })
  }
  
}
