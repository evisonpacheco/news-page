import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'services/notice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['../styles/reset.css', '../styles/main.css', '../styles/media.query.css']
})
export class HomePageComponent implements OnInit {
  notices: any[] = [];

  constructor(private NoticeService: NoticeService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.NoticeService.getNews()
      .then(data => this.notices = data)
      .then(data => console.log(data))
      .catch(error => console.log(error))

  }
}
