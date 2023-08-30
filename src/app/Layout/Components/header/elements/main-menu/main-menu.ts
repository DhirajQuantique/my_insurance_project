import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manimenu',
  templateUrl: './main-menu-component.html',
})
export class MainMenuComponent implements OnInit {

  public isActive: any;
  showSubmenu: boolean = false;
  showbusinees: boolean = false;
  status: boolean;
  constructor() { }
  autoClose: NgbDropdown['autoClose'] = false;

  toggleAutoClose() {
    this.autoClose = !this.autoClose ? 'inside' : false;
  }
  ngOnInit() {
  }
  muteStream() {
    this.status = !this.status;
 }
}
