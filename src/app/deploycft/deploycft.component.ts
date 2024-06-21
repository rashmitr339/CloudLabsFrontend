import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deploycft',
  templateUrl: './deploycft.component.html',
  styleUrl: './deploycft.component.css'
})
export class DeploycftComponent {

  stackName: string = '';
  cftUrl: string = '';
  stackDeployed: boolean = false;

  username: string | null = null;

  ngOnInit(): void {

    this.username = localStorage.getItem('username');
  }

  constructor(private http: HttpClient, private router: Router) { }

  deployCft() {
    if (!this.stackName || !this.cftUrl) {
      alert('Please enter Stack Name and CFT URL.');
      return;
    }

    const body = {
      StackName: this.stackName,
      TemplateURL: this.cftUrl
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('https://localhost:44321/api/DeployCft', body, { headers })
      .subscribe(
        (response: any) => {
          alert(response.message);
          this.stackDeployed = true;
          this.router.navigate(['/event']); 
        },
        (error) => {
          console.error('Error:', error);
          alert('Error occurred during deployment.');
        }
      );
  }

  
  
}
