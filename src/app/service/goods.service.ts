import { QueryGoodsRes } from './../model/goods/query-goods/QueryGoodsRes';
import { QueryGoodsReq } from './../model/goods/query-goods/QueryGoodsReq';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  apiUrl = 'api/goods/';

  constructor(private http: HttpClientService) { }

  queryGoods(req: QueryGoodsReq): Observable<QueryGoodsRes[]> {
    return this.http.postApi(this.apiUrl + 'queryGoods', req);
  }
}
