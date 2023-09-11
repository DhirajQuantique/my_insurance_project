import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import Stepper from "bs-stepper";
@Component({
  selector: "app-new-admin-portal",
  templateUrl: "./add-business-partner.html",
  styleUrls: ["./add-business-partner.scss"],
})
export class AddBusinessPartner implements OnInit {
  public Positions = ["CEO", "CTO", "Director"]
  public BStatus =["Active", "InActive"]
  public currency = ["Rupee", "Pound", "Dollar", "Euro"]
  public Regions =["India", "United Kingdom", "United States", "European"]
  

  private stepper: Stepper;
  addbuspart: boolean = true;
  addbusparttwo: boolean = false;
  addbuspartnext() {
    this.addbuspart = false;
    this.addbusparttwo = true;
  } 
  // addbusinessPartner = new FormGroup({
  //   BusinessName: new FormControl('',Validators.required),
  //   lastName: new FormControl('',Validators.required),
  // });
  addbuspartpre() {
    this.addbuspart = true;
    this.addbusparttwo = false;
  }
  addbusinessPartner: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true,
    });
    this.addbusinessPartner = this.formBuilder.group({
      BusinessName: ['', Validators.required],
      BusinessPartnerType: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      ContactNumber: ['', Validators.required],
      TANNumber: ['', Validators.required],
      Address: ['', Validators.required],
      PANNumber: ['', Validators.required],
      GSTNumber: ['', Validators.required]
    });
  }
  hasError(controlName: string, errorName: string) {
    return this.addbusinessPartner.controls[controlName].hasError(errorName);
  }
  isNextButtonDisabled() {
    return this.addbusinessPartner.invalid;
  }
  active: number = 1; // Initialize the active step to 1
  next() {
    this.stepper.next();
     this.onSubmit()
  }
  back() {
    this.stepper.previous();
  }
onSubmit() {
  if (this.addbusinessPartner.valid) {
    // Submit the form data (you can send it to your API or handle it as needed)
    console.log(this.addbusinessPartner.value);

    // Move to the next step
    this.next();
  }
}
  // onSubmit() {
  //   if (this.addbusinessPartner.valid) {
  //   console.log(this.addbusinessPartner.value.BusinessName);
  //   return false;
  //   }
  // }
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
