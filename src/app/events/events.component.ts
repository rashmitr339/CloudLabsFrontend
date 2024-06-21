// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-events',
//   templateUrl: './events.component.html',
//   styleUrl: './events.component.css'
// })
// export class EventsComponent implements OnInit {

//   Data:any = [];
//   selectedAnswers: any = {};
//   totalMarks: number | null = null;

//   constructor(private httpClient: HttpClient, private router: Router){}

//   ngOnInit(): void {
//     this.getAllQuestions();
//   }

//   getAllQuestions(){
//     this.httpClient.get(`https://localhost:44321/api/Mcq`).subscribe((data) => {
//       this.Data = data;
//       console.log(this.Data);
//     });
//   }

//   selectAnswer(questionIndex: number, selectedOption: string) {
//     this.selectedAnswers[questionIndex] = selectedOption;
//   }

//   validateAndProceed() {
//     // Check if all questions are answered
//     if (Object.keys(this.selectedAnswers).length !== this.Data.length) {
//       alert('Please answer all the questions before proceeding.');
//       return;
//     }

//     // Calculate total marks
//     this.totalMarks = this.Data.reduce((total: number, question: any, index: number) => {
//       if (this.selectedAnswers[index] === question.answer) {
//         return total + question.marks;
//       }
//       return total;
//     }, 0);

//     // Display the total marks
//     alert(`Total Marks: ${this.totalMarks}`);

//     // Optionally, navigate to another page
//     // this.router.navigate(['/nextpage']);
//   }

// }

//https://localhost:44321/api/Mcq

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';  

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  Data: any = [];
  selectedAnswers: any = {};
  totalMarks: number | null = null;
  cftDeployed: boolean = false;
  username: string | null = null;
  //validationEnabled: boolean = false; 
  
  constructor(private httpClient: HttpClient, private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getAllQuestions();
    this.username = localStorage.getItem('username');
    //this.validationEnabled = this.sharedService.isValidationEnabled();
  }

  getAllQuestions() {
    this.httpClient.get('https://localhost:44321/api/Mcq').subscribe((data) => {
      this.Data = data;
      console.log(this.Data);
    });
  }

  selectAnswer(questionIndex: number, selectedOption: string) {
    this.selectedAnswers[questionIndex] = selectedOption;
  }

  validateAndProceed() {
      if (Object.keys(this.selectedAnswers).length !== this.Data.length) {
      alert('Please answer all the questions before proceeding.');
      return;
    }

    // if (this.validationEnabled) { 
    //   if (Object.keys(this.selectedAnswers).length !== this.Data.length) {
    //     alert('Please answer all the questions before proceeding.');
    //     return;
    //   }
    // }
  

    
    this.totalMarks = this.Data.reduce((total: number, question: any, index: number) => {
      if (this.selectedAnswers[index] === question.answer) {
        return total + question.marks;
      }
      return total;
    }, 0);

   
    const finalMarks = this.totalMarks !== null ? this.totalMarks : 0;

  
    this.sharedService.setTotalMarks(finalMarks);

    
    // if (!this.validationEnabled || confirm('Are you sure you want to save these answers and go to the next page?')) {
    //   this.router.navigate(['/eventpage2']);
    // }
    if (confirm('Are you sure you want to save these answers and go to the next page?')) {
      this.router.navigate(['/eventpage2']);
    }
  }
}
