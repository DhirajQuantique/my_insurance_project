import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { ConfigService } from 'src/app/config.services';
import { SharedserviceService } from 'src/app/sharedservice.service';


export interface BackendData {
  id: number;
  name: string;
  active: number;
  inactive: number;
}
export interface ProductData {
  Partnertype: string;
  BusinessName: string;
  PlanDetails: string;
  Action: string;
  // planCreatedAt: Date;
}


@Component({
  selector: 'app-new-admin-portal',
  templateUrl: './new-admin-portal.component.html',
  styleUrls: ['./new-admin-portal.component.scss']
})

export class NewAdminPortalComponent implements OnInit {
  partner:any;data:any; formData: any = {};
  searchTerm: string = '';
  searchQuery: string = '';
  activeTab: string = 'all'; // Default active tab
  activeCount: number = 15; // Set actual count for active plans
  inactiveCount: number = 15; // Set actual count for inactive plans
  rows: BackendData[] = []; // Use BackendData type here
  filteredData: ProductData[] = []; // Add this property
  private stepper: Stepper;
  constructor(private config: ConfigService) {}
  Tdata: ProductData[] = [
    { Partnertype:'Ramesh Chowdhary' , BusinessName: 'Ramesh Chowdhary', PlanDetails: '2 Plans 1 Plans Active Inactive' ,Action:''},
    { Partnertype:'Neerav Allhuwalia' , BusinessName: 'Ramesh Chowdhary', PlanDetails: '2 Plans 1 Plans Active Inactive',Action:'View Details'},
    { Partnertype:'Ramesh Chowdhary' , BusinessName: 'Ramesh Chowdhary', PlanDetails: '2 Plans 1 Plans Active Inactive',Action:'View Details'},
    { Partnertype:'Ramesh Chowdhary' , BusinessName: 'Ramesh Chowdhary', PlanDetails: '2 Plans 1 Plans Active Inactive',Action:'View Details'},
    { Partnertype:'Ramesh Chowdhary' , BusinessName: 'Ramesh Chowdhary', PlanDetails: '2 Plans 1 Plans  Active Inactive',Action:'View Details'},
    { Partnertype:'Ramesh Chowdhary' , BusinessName: 'Ramesh Chowdhary', PlanDetails: '2 Plans 1 Plans Active Inactive',Action:'View Details'},
    { Partnertype:'Ramesh Chowdhary' , BusinessName: 'Ramesh Chowdhary', PlanDetails: '2 Plans 1 Plans Active Inactive',Action:'View Details'},
    { Partnertype:'Ramesh Chowdhary' , BusinessName: 'Ramesh Chowdhary', PlanDetails: '2 Plans 1 Plans Active Inactive',Action:'View Details'},
    

    // Add more data objects
  ];
  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
    this.loadData();
    this. onSubmit();
  }
  active: number = 1; // Initialize the active step to 1
  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }
  handleNextPrevClick(step: number) {
    // Handle the logic for navigating to the next or previous step
    this.active = step;
  }

  handleSubmission() {
    // Handle the submission logic
    // You can perform actions when the user submits the form
  }
  //Active Tab
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  // Button Method
  createNewPlan() {}

  // Data
  loadData() {
    this.config.getData().subscribe(
      (data: BackendData) => {
        this.rows = [{ ...data }]; 
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  performSearch(): void {
    console.log('Performing search for:', this.searchQuery);
    this.filterData(); // Call the filterData method to apply search query
  }
  filterData() {
    if (this.searchQuery.trim() === '') {
      this.filteredData = this.Tdata; // If search query is empty, show all data
    } else {
      this.filteredData = this.Tdata.filter(item =>
        item.Partnertype.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.BusinessName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
  
  expandedElement: ProductData | null = null;
  expandedRows: boolean[] = [];
  toggleRowDetails(index: number): void {
    this.expandedRows[index] = !this.expandedRows[index];
  }

  isRowExpanded(index: number): boolean {
    return this.expandedRows[index] || false;
  }

  getRowIconClass(index: number): string {
    return this.isRowExpanded(index) ? 'bi bi-chevron-down' : 'bi bi-chevron-right';

  }
}






//    active: boolean;
//   active = 1;
//   active2 = 1;
//   ngOnInit(): void {}
//   handleNextPrevClick(stepper, a) {
//     if (stepper === 1) {
//       this.active = a;
//     } else if (stepper === 2) {
//       this.active2 = a;
//     }
//   }

//   handleSubmission = () => {
//     alert('Form submitted!');
//   };

//   constructor() {}

  
// }
//   stepCompletionStatus:true;
//   constructor() { }

//   ngOnInit(): void {
//   }

//   // isStepComplete(stepNumber: number): boolean {
//   //   // Implement logic to determine if a step is complete
//   //   // For example, you can use an array to track step completion status.
//   //   return this.stepCompletionStatus[stepNumber - 1];
//   // }

// }
