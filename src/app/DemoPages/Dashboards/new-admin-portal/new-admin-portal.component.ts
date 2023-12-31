import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-new-admin-portal',
  templateUrl: './new-admin-portal.component.html',
  styleUrls: ['./new-admin-portal.component.scss']
})
export class NewAdminPortalComponent implements OnInit {
  private stepper: Stepper;
  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
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
