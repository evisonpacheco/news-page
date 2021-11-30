import { NoticeService } from 'services/notice.service';
import { noticeInterface } from './../../../models/noticeModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-notice',
  templateUrl: './new-notice.component.html',
  styleUrls: ['../styles/reset.css', '../styles/main.css', '../styles/media.query.css', './new-notice.component.css']
})

export class NewNoticeComponent {

  constructor(private NoticeService: NoticeService) { }

  public titleNotice: any = '';
  public contentNotice: any = '';

  newNotice: noticeInterface;

  warning: string;


  addNews() {
    const newNotice: any = {
      title: this.titleNotice,
      body: this.contentNotice
    };

    this.warning = 'A seguinte notícia foi cadastrada:';

    this.NoticeService.add(newNotice)
      .then(newNotice => this.newNotice = newNotice)
      .then(newNotice => console.log(this.newNotice))
      .catch(error => console.log(error))

    this.clearInputs()
  }

  clearInputs() {
    this.titleNotice = '';
    this.contentNotice = '';
  }
}
