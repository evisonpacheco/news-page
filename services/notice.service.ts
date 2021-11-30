import { noticeInterface } from './../models/noticeModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get<noticeInterface[]>("https://jsonplaceholder.typicode.com/posts").toPromise();
  }

  }

}
