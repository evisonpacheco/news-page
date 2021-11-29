import { NoticeService } from './../../services/notice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notices: any[] = [];

  constructor(private NoticeService: NoticeService) { }

  ngOnInit() {
    this.getNews();
  }


  getNews() {
    this.NoticeService.getNews()
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
}

