import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './forum-cards.component.html',
  styleUrls: ['./forum-cards.component.css']
})
export class ForumCardsComponent implements OnInit {
  title1: string;
  title2: string;
  title3: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
  content1: string;
  content2: string;
  content3: string;

  constructor() {
    this.title1 = 'Display Users';
    this.title2 = 'Display Posts';
    this.title3 = 'Browse the Forum';
    this.subtitle1  = 'See a list of all forum users';
    this.subtitle2 = 'See all topics in the forum';
    this.subtitle3 = 'Take a look around the forum topics';
    this.content1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Ultrices vitae auctor eu augue. ' +
      'Turpis cursus in hac habitasse platea dictumst. ' +
      'Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.';
    this.content2 = 'Ultrices vitae auctor eu augue.' +
      'Turpis cursus in hac habitasse platea dictumst.' +
      'Porttitor massa id neque aliquam vestibulum morbi blandit.' +
      'Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.';
    this.content3 = 'Ultrices vitae auctor eu augue.' +
      'Turpis cursus in hac habitasse platea dictumst.' +
      'Porttitor massa id neque aliquam vestibulum morbi blandit.' +
      'Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.';
  }

  ngOnInit() {
  }

}
