import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendData } from './DemoPages/Dashboards/ManagePlans/manageplan.component';
import { ConfigService } from './config.services';
@Injectable()
export class SharedserviceService {
  
  public snippet;

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.config.getData()
      .subscribe(data => {
        console.log(data);
        this.snippet = data;
      });
  }

}
