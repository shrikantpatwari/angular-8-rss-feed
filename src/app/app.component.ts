import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { NewsRss } from './news-rss';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  RssData: NewsRss;
  constructor(private http: HttpClient) {}
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    this.http
      .get<any>('https://sadhanaitsolutions.com/feed/', requestOptions)
      .subscribe((data) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }
}

export interface IRssData {}
