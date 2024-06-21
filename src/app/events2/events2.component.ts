import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-events2',
  templateUrl: './events2.component.html',
  styleUrl: './events2.component.css'
})
export class Events2Component {

  Data: any = [];
  selectedAnswers: any = {};
  totalMarks2: number | null = null;
  cftDeployed: boolean = false;
  username: string | null = null;

  constructor(private httpClient: HttpClient, private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getAllQuestions();
    this.username = localStorage.getItem('username');
  }

  getAllQuestions() {
    this.httpClient.get('https://localhost:44321/api/Mcq2').subscribe((data) => {
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

    this.totalMarks2 = this.Data.reduce((total: number, question: any, index: number) => {
      if (this.selectedAnswers[index] === question.answer) {
        return total + question.marks;
      }
      return total;
    }, 0);

   
    const finalMarks = this.totalMarks2 !== null ? this.totalMarks2 : 0;

   
    this.sharedService.setTotalMarks2(finalMarks);

   
    if (confirm('Are you sure you want to save these answers and Submit?')) {
     
      this.router.navigate(['/result']);
    }
  }

  nav(){
    this.router.navigate(['/event'])
  }

}
