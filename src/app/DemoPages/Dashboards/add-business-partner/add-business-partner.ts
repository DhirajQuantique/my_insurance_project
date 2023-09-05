import { Component, OnInit } from "@angular/core";
import Stepper from "bs-stepper";
@Component({
  selector: "app-new-admin-portal",
  templateUrl: "./add-business-partner.html",
  styleUrls: ["./add-business-partner.scss"],
})
export class AddBusinessPartner implements OnInit {
  private stepper: Stepper;
  addbuspart: boolean = true;
  addbusparttwo: boolean = false;
  addbuspartnext() {
    this.addbuspart = false;
    this.addbusparttwo = true;
  }
  addbuspartpre() {
    this.addbuspart = true;
    this.addbusparttwo = false;
  }
  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true,
    });
  }
  active: number = 1; // Initialize the active step to 1
  next() {
    this.stepper.next();
  }
  back() {
    this.stepper.previous();
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
