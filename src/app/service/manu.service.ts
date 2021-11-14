import { NewManuRes } from './../model/manu/new-manu/NewManuRes';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';
import { NewManuReq } from '../model/manu/new-manu/NewManuReq';
import { DeleteManuReq } from '../model/manu/delete-manu/DeleteManuReq';
import { DeleteManuRes } from '../model/manu/delete-manu/DeleteManuRes';

@Injectable({
  providedIn: 'root'
})
export class ManuService {
  apiUrl = 'api/manu/';
  constructor(private http: HttpClientService) {}

  newManu(req: NewManuReq): Observable<NewManuRes> {
    return this.http.postApi(this.apiUrl + 'newManufacturer', req);
  }

  deleteManu(req: DeleteManuReq): Observable<DeleteManuRes> {
    return this.http.postApi(this.apiUrl + 'deleteManufacturer', req);
  }

}
