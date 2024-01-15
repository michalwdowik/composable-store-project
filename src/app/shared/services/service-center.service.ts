import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ServiceCenter } from '../interface/service-center.interface'
const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root',
})
export class ServiceCenterService {
  constructor(private http: HttpClient) {}

  model = 'service'

  getAllServiceCenter() {
    return this.http.get<ServiceCenter[]>(this.getUrl())
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`
  }
}
