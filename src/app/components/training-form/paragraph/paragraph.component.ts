import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Paragraph } from 'src/app/shared/interface/paragraph.interface'
import { ParagraphService } from 'src/app/shared/services/paragraph.service'

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
})
export class ParagraphComponent implements OnInit {
  paragraph$: Observable<Paragraph[]> = new Observable<Paragraph[]>()
  constructor(private paragraphService: ParagraphService) {}

  ngOnInit() {
    this.loadParagraphs()
  }

  private loadParagraphs() {
    this.paragraph$ = this.paragraphService.getAllParagraphs()
  }
}
