import { NewGoodsRes } from './../model/goods/new-goods/NewGoodsRes';
import { NewGoodsReq } from './../model/goods/new-goods/NewGoodsReq';
import { QueryGoodsRes } from './../model/goods/query-goods/QueryGoodsRes';
import { QueryGoodsReq } from './../model/goods/query-goods/QueryGoodsReq';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';
import { DeleteGoodsReq } from '../model/goods/delete-goods/DeleteGoodsReq';
import { DeleteGoodsRes } from '../model/goods/delete-goods/DeleteGoodsRes';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  apiUrl = 'api/goods/';

  constructor(private http: HttpClientService) { }

  queryGoods(req: QueryGoodsReq): Observable<QueryGoodsRes[]> {
    return this.http.postApi(this.apiUrl + 'queryGoods', req);
  }

  newGoods(req: NewGoodsReq): Observable<NewGoodsRes> {
    return this.http.postApi(this.apiUrl + 'newGoods', req);
  }

  deleteGoods(req: DeleteGoodsReq): Observable<DeleteGoodsRes> {
    return this.http.postApi(this.apiUrl + 'deleteGoods', req);
  }
}
