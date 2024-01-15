import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { ServiceCenter } from 'src/app/shared/interface/service-center.interface'
import { ServiceCenterService } from 'src/app/shared/services/service-center.service'

@Component({
  selector: 'app-service-center',
  templateUrl: './service-center.component.html',
  styleUrls: ['./service-center.component.scss'],
})
export class ServiceCenterComponent {
  services$: Observable<ServiceCenter[]> = new Observable<ServiceCenter[]>()
  constructor(private serviceCenter: ServiceCenterService) {}

  ngOnInit() {
    this.loadServices()
  }

  private loadServices() {
    this.serviceCenter
      .getAllServiceCenter()
      .subscribe((data: ServiceCenter[]) => {
        this.services$ = new Observable<ServiceCenter[]>(observer => {
          observer.next(data)
          observer.complete()
        })
      })
  }
}
