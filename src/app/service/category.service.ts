import { DeleteCategoryRes } from './../model/category/delete-category/DeleteCategoryRes';
import { DeleteCategoryReq } from './../model/category/delete-category/DeleteCategoryReq';
import { UpdateCategoryReq } from './../model/category/update-category/UpdateCategoryReq';
import { Observable } from 'rxjs';
import { NewCategoryRes } from './../model/new-category/NewCategoryRes';
import { NewCategoryReq } from './../model/new-category/NewCategoryReq';
import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';
import { UpdateCategoryRes } from '../model/category/update-category/UpdateCategoryRes';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'api/category/';

  constructor(private http: HttpClientService) { }

  newCategory(req: NewCategoryReq): Observable<NewCategoryRes> {
    return this.http.postApi(this.apiUrl + 'newCategory', req);
  }

  updateCategory(req: UpdateCategoryReq): Observable<UpdateCategoryRes> {
    return this.http.postApi(this.apiUrl + 'updateCategory', req);
  }

  deleteCategory(req: DeleteCategoryReq): Observable<DeleteCategoryRes> {
    return this.http.postApi(this.apiUrl + 'deleteCategory', req);
  }
}
