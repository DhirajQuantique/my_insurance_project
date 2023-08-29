import {Component, EventEmitter, Input, Output} from '@angular/core';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {
  faStar = faStar;
  faPlus = faPlus;
  status: string|boolean;
  
  @Input() heading;
  @Input() subheading;
  @Input() icon;
  message: string;
 
}
