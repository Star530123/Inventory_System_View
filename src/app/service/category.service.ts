import { Observable } from 'rxjs';
import { NewCategoryRes } from './../model/new-category/NewCategoryRes';
import { NewCategoryReq } from './../model/new-category/NewCategoryReq';
import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'api/category/';

  constructor(private http: HttpClientService) { }

  newCategory(req: NewCategoryReq): Observable<NewCategoryRes> {
    return this.http.postApi(this.apiUrl + 'newCategory', req);
  }
}
