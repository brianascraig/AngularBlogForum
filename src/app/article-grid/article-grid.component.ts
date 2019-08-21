import { Component, OnInit } from '@angular/core';

export interface Article {
  image: string;
  cols: number;
  rows: number;
  text: string;
  id: number;
}

@Component({
  selector: 'app-article-grid',
  templateUrl: './article-grid.component.html',
  styleUrls: ['./article-grid.component.css']
})
export class ArticleGridComponent implements OnInit {
  articles: Article[] = [
    {id: 1, text: 'Finding the Right Summer Dress', cols: 3, rows: 1,
      image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
    {id: 2, text: 'Learning How to Thrift', cols: 1, rows: 2,
      image: 'https://images.unsplash.com/photo-1494424698959-eeb116f0daac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'},
    {id: 3, text: 'How to Layer for the Fall', cols: 1, rows: 1,
      image: 'https://images.unsplash.com/photo-1485527691629-8e370684924c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'},
    {id: 4, text: 'Ways to Repurpose Thrift Clothing', cols: 2, rows: 1,
      image: 'https://images.unsplash.com/photo-1517840545241-b491010a8af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
