import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendData } from './DemoPages/Dashboards/ManagePlans/manageplan.component';
import { ConfigService } from './config.services';
import { Subject,  BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedserviceService {
  
  public snippet;
  private sharedData: Subject<any> = new Subject<any>();
  sharedData$: Observable<any> = this.sharedData.asObservable();
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.config.getData()
      .subscribe(data => {
        console.log(data);
        this.snippet = data;
      });
  }
  setData(updatedData) {
    this.sharedData.next(updatedData);
  }
}
