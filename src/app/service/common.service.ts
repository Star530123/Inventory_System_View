import { CategoryListRes } from '../model/common/category-list/CategoryListRes';
import { CategoryListReq } from '../model/common/category-list/CategoryListReq';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';
import { ManuListReq } from '../model/common/manu-list/ManuListReq';
import { ManuListRes } from '../model/common/manu-list/ManuListRes';
import { ItemListReq } from '../model/common/item-list/ItemListReq';
import { ItemListRes } from '../model/common/item-list/ItemListRes';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiUrl = 'api/common/';

  constructor(private http: HttpClientService) {}

  categoryList(req: CategoryListReq): Observable<CategoryListRes[]> {
    return this.http.postApi(this.apiUrl + 'categoryList', req);
  }

  manuList(req: ManuListReq): Observable<ManuListRes[]> {
    return this.http.postApi(this.apiUrl + 'manuList', req);
  }

  itemList(req: ItemListReq): Observable<ItemListRes[]> {
    return this.http.postApi(this.apiUrl + 'itemList', req);
  }
}
