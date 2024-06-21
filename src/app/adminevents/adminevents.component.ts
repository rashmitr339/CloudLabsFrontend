import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-adminevents',
  templateUrl: './adminevents.component.html',
  styleUrl: './adminevents.component.css'
})
export class AdmineventsComponent {

  Data: any = [];
  username: string ='Admin';
 

  constructor(private httpClient: HttpClient, private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.httpClient.get('https://localhost:44321/api/Mcq').subscribe((data) => {
      this.Data = data;
      console.log(this.Data);
    });
  }

  delete(id:any) : void {
    let res = confirm("Are you sure you want to delete this Question?");
    if(res){
      this.httpClient.delete(`https://localhost:44321/api/Mcq/${id}`).subscribe({
        next: (data) => {
          this.Data = this.Data.filter((sample:any) => sample.id != id);
          console.log("Successfully deleted");
        },
        error: (err) => {
          console.log("Something went wrong", err);
        }

      });

    }
    else{
      this.router.navigate(['/adminevent']);
    }
  }

  nextevent(){
    this.router.navigate(['/admineventpage2']);
  }

  add(){
    this.router.navigate(['/add']);
  }

  edit(id:any){
    this.router.navigate(['/edit', id]);
  }


  home(){
    this.router.navigate(['/']);
  }

  // toggleValidation() {
  //   const newValidationState = !this.sharedService.isValidationEnabled();
  //   this.sharedService.setValidationEnabled(newValidationState);
  //   alert(`Validation ${newValidationState ? 'applied' : 'removed'} for this page.`);
  // }

}

  // selectAnswer(questionIndex: number, selectedOption: string) {
  //   this.selectedAnswers[questionIndex] = selectedOption;
  // }

  // validateAndProceed() {
  //   // Check if all questions are answered
  //   if (Object.keys(this.selectedAnswers).length !== this.Data.length) {
  //     alert('Please answer all the questions before proceeding.');
  //     return;
  //   }

  //   // Calculate total marks
  //   this.totalMarks = this.Data.reduce((total: number, question: any, index: number) => {
  //     if (this.selectedAnswers[index] === question.answer) {
  //       return total + question.marks;
  //     }
  //     return total;
  //   }, 0);

  //   // Ensure totalMarks is not null
  //   const finalMarks = this.totalMarks !== null ? this.totalMarks : 0;

  //   // Store total marks in the shared service
  //   this.sharedService.setTotalMarks(finalMarks);

  //   // Ask for confirmation before navigating
  //   if (confirm('Are you sure you want to save these answers and go to the next page?')) {
  //     // Navigate to the results page
  //     this.router.navigate(['/eventpage2']);
  //   }
  // }


