import { NewItemRes } from './../model/item/new-item/NewItemRes';
import { NewItemReq } from './../model/item/new-item/NewItemReq';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';
import { UpdateItemReq } from '../model/item/update-item/UpdateItemReq';
import { UpdateItemRes } from '../model/item/update-item/UpdateItemRes';
import { DeleteItemReq } from '../model/item/delete-item/DeleteItemReq';
import { DeleteItemRes } from '../model/item/delete-item/DeleteItemRes';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiUrl = 'api/item/';

  constructor(private http: HttpClientService) { }

  newItem(req: NewItemReq): Observable<NewItemRes> {
    return this.http.postApi(this.apiUrl + 'newItem', req);
  }

  updateItem(req: UpdateItemReq): Observable<UpdateItemRes> {
    return this.http.postApi(this.apiUrl + 'updateItem', req);
  }

  deleteItem(req: DeleteItemReq): Observable<DeleteItemRes> {
    return this.http.postApi(this.apiUrl + 'deleteItem', req);
  }
}
