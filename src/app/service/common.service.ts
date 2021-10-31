import { CategoryListRes } from '../model/common/category-list/CategoryListRes';
import { CategoryListReq } from '../model/common/category-list/CategoryListReq';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl = 'api/common/';

  constructor(private http: HttpClientService) { }

  categoryList(req: CategoryListReq): Observable<CategoryListRes[]> {
    return this.http.postApi(this.apiUrl + 'categoryList', req);
  }
}
