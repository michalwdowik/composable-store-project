import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Paragraph } from '../interface/paragraph.interface'

const BASE_URL = 'http://localhost:3000'
@Injectable({
  providedIn: 'root',
})
export class ParagraphService {
  constructor(private http: HttpClient) {}

  model = 'data'

  getAllParagraphs() {
    return this.http.get<Paragraph[]>(this.getUrl())
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`
  }
}
