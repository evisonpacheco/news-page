import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { notice } from '../models/noticeModel';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get<notice[]>("https://jsonplaceholder.typicode.com/posts").toPromise();
  }

}
