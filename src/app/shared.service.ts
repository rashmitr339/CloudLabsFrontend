import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //private validationEnabled: boolean = false;
  private totalMarks: number = 0;
  private totalMarks2: number = 0;

  // isValidationEnabled(): boolean {
  //   return this.validationEnabled;
  // }

  // setValidationEnabled(state: boolean): void {
  //   this.validationEnabled = state;
  // }


  setTotalMarks(marks: number) {
    this.totalMarks = marks;
  }

  getTotalMarks(): number {
    return this.totalMarks;
  }

  setTotalMarks2(marks: number) {
    this.totalMarks2 = marks;
  }

  getTotalMarks2(): number {
    return this.totalMarks2;
  }
}


