
// import { Component, OnInit } from '@angular/core';
// import { SharedService } from '../shared.service';  // Adjust the import path as necessary
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-results',
//   templateUrl: './results.component.html',
//   styleUrls: ['./results.component.css']
// })
// export class ResultsComponent implements OnInit {
//   FinalMarks: number = 0;
//   totalMarks: number | null = null;
//   totalMarks2: number | null = null;
//   t1: number = 0; // Initialize to a default value
//   t2: number = 0; // Initialize to a default value
//   ActualMarks: number = 0;
//   resultStatus: string | null = null;
//   cftDeployed: boolean = false;
//   username: string | null = null;

  

//   constructor(private sharedService: SharedService, private httpClient: HttpClient, private router:Router) {}

//   ngOnInit(): void {
//     this.totalMarks = this.sharedService.getTotalMarks();
//     this.totalMarks2 = this.sharedService.getTotalMarks2();
//     this.FinalMarks = (this.totalMarks || 0) + (this.totalMarks2 || 0); // Handle null cases

//     this.getfinal();
//     this.getfinal2();
//     this.username = localStorage.getItem('username');
//   }

//   getfinal() {
//     this.httpClient.get<number>('https://localhost:44321/api/Mcq/total-marks').subscribe(
//       (data: number) => {
//         this.t1 = data;
//         this.calculateActualMarks();
//         console.log(this.t1);
//       },
//       (error) => {
//         console.error('Failed to fetch total marks from Mcq:', error);
//       }
//     );
//   }

//   getfinal2() {
//     this.httpClient.get<number>('https://localhost:44321/api/Mcq2/total-marks').subscribe(
//       (data: number) => {
//         this.t2 = data;
//         this.calculateActualMarks();
//         console.log(this.t2);
//       },
//       (error) => {
//         console.error('Failed to fetch total marks from Mcq2:', error);
//       }
//     );
//   }

//   calculateActualMarks() {
//     if (this.t1 !== undefined && this.t2 !== undefined) {
//       this.ActualMarks = this.t1 + this.t2;
//       this.determineResultStatus();
//     }
//   }

//   determineResultStatus() {
//     if (this.FinalMarks < 30) {
//       this.resultStatus = 'Fail';
//     } else if (this.FinalMarks >= 30 && this.FinalMarks < 70) {
//       this.resultStatus = 'Average';
//     } else if (this.FinalMarks >= 70) {
//       this.resultStatus = 'Pass';
//     }
//   }

//   Logout(){
//     alert("You are now logging out.");
//     this.router.navigate(['']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service'; 
import { Router } from '@angular/router';
import { UserResultsService } from '../user-results.service'; 
import { User } from '../user'; 

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  FinalMarks: number = 0;
  totalMarks: number | null = null;
  totalMarks2: number | null = null;

  t1: number = 0;             //actualscore of page1
  t2: number = 0; 
  ActualMarks: number = 0;

  resultStatus: string | null = null;
  cftDeployed: boolean = false;
  username: string | null = null;

  constructor(private sharedService: SharedService, 
              private httpClient: HttpClient, 
              private router: Router,
              private userResultsService: UserResultsService) {}

  ngOnInit(): void {
    this.totalMarks = this.sharedService.getTotalMarks();
    this.totalMarks2 = this.sharedService.getTotalMarks2();
    this.FinalMarks = (this.totalMarks || 0) + (this.totalMarks2 || 0); 

    this.getfinal();
    this.getfinal2();
    this.username = localStorage.getItem('username');
  }

  getfinal() {
    this.httpClient.get<number>('https://localhost:44321/api/Mcq/total-marks').subscribe(
      (data: number) => {
        this.t1 = data;
        this.calculateActualMarks();
        console.log(this.t1);
      },
      (error) => {
        console.error('Failed to fetch total marks from Mcq:', error);
      }
    );
  }

  getfinal2() {
    this.httpClient.get<number>('https://localhost:44321/api/Mcq2/total-marks').subscribe(
      (data: number) => {
        this.t2 = data;
        this.calculateActualMarks();
        console.log(this.t2);
      },
      (error) => {
        console.error('Failed to fetch total marks from Mcq2:', error);
      }
    );
  }

  calculateActualMarks() {
    if (this.t1 !== undefined && this.t2 !== undefined) {
      this.ActualMarks = this.t1 + this.t2;
      this.determineResultStatus();

      
      const userId = Number(localStorage.getItem('userId'));
      this.userResultsService.setUserResult(userId, this.FinalMarks, this.resultStatus || '');
    }
  }

  determineResultStatus() {
    if (this.FinalMarks < 30) {
      this.resultStatus = 'Fail';
    } else if (this.FinalMarks >= 30 && this.FinalMarks < 70) {
      this.resultStatus = 'Average';
    } else if (this.FinalMarks >= 70) {
      this.resultStatus = 'Pass';
    }
  }

  Logout(){
    alert("You are now logging out.");
    this.router.navigate(['']);
  }
}
