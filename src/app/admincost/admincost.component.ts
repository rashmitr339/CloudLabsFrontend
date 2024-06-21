import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateRangeServiceService } from '../date-range-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincost',
  templateUrl: './admincost.component.html',
  styleUrl: './admincost.component.css'
})
export class AdmincostComponent {

  startDate: string = '';
  endDate: string = '';
  costDetails: any = null;
  loading: boolean = false;
  username: string ='Admin';

  constructor(private http: HttpClient, private dateRangeService: DateRangeServiceService, private router:Router) { }

  onSubmit() {
    if (this.startDate && this.endDate) {
      this.dateRangeService.setStartDate(this.startDate);
      this.dateRangeService.setEndDate(this.endDate);

      const requestData = {
        startDate: this.startDate,
        endDate: this.endDate
      };

      this.loading = true;
      
      this.http.post<any>('https://localhost:44321/api/Cost/calculateTotalCost', requestData)
        .subscribe(
          (response) => {
            this.costDetails = response;
            this.loading = false;
          },
          (error) => {
            console.error('Error fetching cost details:', error);
            this.loading = false;
          }
        );
    }
  }

  formatCurrency(value: unknown): string {
    if (typeof value === 'number') {
      return (value as number).toFixed(2);
    }
    return ''; 
  }

  home(){
    this.router.navigate(['/']);
  }
}
