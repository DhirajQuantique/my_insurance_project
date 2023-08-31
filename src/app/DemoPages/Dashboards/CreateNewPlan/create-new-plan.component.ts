import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-create-new-plan',
  templateUrl: './create-new-plan.component.html',
  styleUrls: ['./create-new-plan.component.scss'],
})
export class CreateNewPlanComponent implements OnInit {
 items: any[] = [
    { name: 'Hindi', checked: false },
    { name: 'English', checked: true },
    { name: 'Marathi', checked: false },
    // Add more items as needed
  ];

   selectedLanguage: string[] = [];
  

  

  constructor() {
  
  }

  ngOnInit(): void { }
//  toggleSelected(language: string): void {
//     const index = this.selectedLanguages.indexOf(language);
//     if (index === -1) {
//       this.selectedLanguages.push(language);
//     } else {
//       this.selectedLanguages.splice(index, 1);
//     }
//   }

 getSelectedLanguageItems(): any[] {
    return this.items.filter(item => item.name === this.selectedLanguage);
  }
  
  uploadFile() {
    // Implement your file upload logic here
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    const file = fileInput.files[0];
    if (file) {
      // You can now work with the selected file, e.g., upload it to a server
      console.log('Uploading file:', file.name);
    }
  }
 
  
}

  
 
  


