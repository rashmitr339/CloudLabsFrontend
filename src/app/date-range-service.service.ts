import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateRangeServiceService {

  constructor() { }

  private startDate: string = '';
  private endDate: string = '';

  setStartDate(date: string) {
    this.startDate = date;
  }

  getStartDate(): string {
    return this.startDate;
  }

  setEndDate(date: string) {
    this.endDate = date;
  }

  getEndDate(): string {
    return this.endDate;
  }
}
