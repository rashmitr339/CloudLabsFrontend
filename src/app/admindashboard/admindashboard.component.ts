// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { Chart } from 'chart.js/auto';
// import { DateRangeServiceService } from '../date-range-service.service';

// interface CostDetails {
//   serviceCosts: { [key: string]: number };
//   totalCost: number;
// }


// @Component({
//   selector: 'app-admindashboard',
//   templateUrl: './admindashboard.component.html',
//   styleUrl: './admindashboard.component.css'
// })
// export class AdmindashboardComponent implements OnInit {

//   @ViewChild('barChart') barChart!: ElementRef<HTMLCanvasElement>;
//   costDetails: CostDetails = { serviceCosts: {}, totalCost: 0 };
//   errorMessage: string | null = null;
//   username: string ='Admin';

//   constructor(private http: HttpClient, private dateRangeService: DateRangeServiceService) {}

//   ngOnInit() {
//     this.fetchCostDetails();
//   }

//   fetchCostDetails() {
//     const startDate = this.dateRangeService.getStartDate();
//     const endDate = this.dateRangeService.getEndDate();

//     if (startDate && endDate) {
//       this.http.post<CostDetails>('https://localhost:44321/api/Cost/calculateTotalCost', {
//         startDate: startDate,
//         endDate: endDate
//       })
//       .subscribe(
//         (response) => {
//           this.costDetails = response;
//           this.createChart();
//         },
//         (error) => {
//           console.error('Error fetching cost details:', error);
//           this.errorMessage = error.error ? error.error : 'An error occurred while fetching cost details.';
//         }
//       );
//     } else {
//       this.errorMessage = 'Start date and end date are required.';
//     }
//   }

//   createChart() {
//     const labels = Object.keys(this.costDetails.serviceCosts);
//     const data = Object.values(this.costDetails.serviceCosts);

//     new Chart(this.barChart.nativeElement, {
//       type: 'bar',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'Service Costs',
//           data: data,
//           backgroundColor: 'rgba(173, 216, 230, 0.2)', // Light blue background
//           borderColor: 'rgba(70, 130, 180, 1)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   }

// }


import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DateRangeServiceService } from '../date-range-service.service';
import { Router } from '@angular/router';

interface CostDetails {
  serviceCosts: { [key: string]: number };
  totalCost: number;
}

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  @ViewChild('barChart') barChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('userServiceChart') userServiceChart!: ElementRef<HTMLCanvasElement>; 
  


  costDetails: CostDetails = { serviceCosts: {}, totalCost: 0 };
  errorMessage: string | null = null;
  username: string = 'Admin';
  userCount: number = 0;
  serviceCount: number = 0;
  users:any=[];

  constructor(private http: HttpClient, private dateRangeService: DateRangeServiceService, private router: Router) {}

  ngOnInit() {
    this.fetchCostDetails();
    this.fetchUsers();
    this.getAllusers();
  }

  fetchCostDetails() {
    const startDate = this.dateRangeService.getStartDate();
    const endDate = this.dateRangeService.getEndDate();

    if (startDate && endDate) {
      this.http.post<CostDetails>('https://localhost:44321/api/Cost/calculateTotalCost', {
        startDate: startDate,
        endDate: endDate
      })
      .subscribe(
        (response) => {
          this.costDetails = response;
          this.serviceCount = Object.keys(this.costDetails.serviceCosts).length;
          this.createChart();
          this.createUserServiceChart();
        },
        (error) => {
          console.error('Error fetching cost details:', error);
          this.errorMessage = error.error ? error.error : 'An error occurred while fetching cost details.';
        }
      );
    } else {
      this.errorMessage = 'Start date and end date are required.';
    }
  }

  fetchUsers() {
    this.http.get<any[]>('https://localhost:44321/api/User').subscribe(
      (data) => {
        this.userCount = data.length;
      },
      (error) => {
        console.error('Failed to fetch users:', error);
      }
    );
  }

  createChart() {
    const labels = Object.keys(this.costDetails.serviceCosts);
    const data = Object.values(this.costDetails.serviceCosts);

    new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Service Costs',
          data: data,
          backgroundColor: '#78b3f2', 
          borderColor: 'rgba(25, 25, 112, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createUserServiceChart() {
    new Chart(this.userServiceChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Total Users', 'Total Services'],
        datasets: [{
          label: 'Users vs Services',
          data: [this.userCount, this.serviceCount],
          backgroundColor: ['#78b3f2', '#78b3f2'],
          borderColor: 'rgba(25, 25, 112, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  getAllusers(){
    this.http.get(`https://localhost:44321/api/User`).subscribe((data) => {
      this.users=data;
      console.log(this.users);
    })
  }

  deleteUser(id:any){
    let res = confirm("Are you sure you want to delete this user?");
    if(res){
      this.http.delete(`https://localhost:44321/api/User/${id}`).subscribe({
        next: () => {
          this.users = this.users.filter((u:any) => u.id!=id);
        }
      })
    }
    else{
      this.router.navigate(['/admindashboard']);
    }

    }


    home(){
      this.router.navigate(['/']);
    }
}
