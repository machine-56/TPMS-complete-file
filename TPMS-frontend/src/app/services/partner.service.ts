import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../server';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  constructor(private http: HttpClient) {}

  getWorkOrder(data: any){
    return this.http.post(`${serverURL}/partner/workorder`,{"uname":data});
  }

  eachWorkorder(data: any){
    return this.http.post(`${serverURL}/partner/workorder/each`,{"woid":data});
  }

  getProfile(uid: any) {
    return this.http.get(`${serverURL}/partner/profile/`+uid)
  }

  updateProfile(profile: any) {
    return this.http.put(`${serverURL}/partner/edit`, profile)
  }

  invoiceFormUpload(data: any) {
    return this.http.post(`${serverURL}/partner/invoice`, data);
  }

  invoiceFileUpload(data: any) {
    return this.http.post<any>(`${serverURL}/partner/multifiles`, data);
  }
  getInvodata(data:any){
    return this.http.get(`${serverURL}/partner/invoice/`+data)
  }
}
