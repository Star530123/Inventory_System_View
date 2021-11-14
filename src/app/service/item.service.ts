import { NewItemRes } from './../model/item/new-item/NewItemRes';
import { NewItemReq } from './../model/item/new-item/NewItemReq';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiUrl = 'api/item/';

  constructor(private http: HttpClientService) { }

  newItem(req: NewItemReq): Observable<NewItemRes> {
    return this.http.postApi(this.apiUrl + 'newItem', req);
  }
}
