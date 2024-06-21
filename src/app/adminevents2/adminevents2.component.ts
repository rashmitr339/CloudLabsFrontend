import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-adminevents2',
  templateUrl: './adminevents2.component.html',
  styleUrl: './adminevents2.component.css'
})
export class Adminevents2Component {
  Data: any = [];
  username: string ='Admin';
  
  constructor(private httpClient: HttpClient, private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.httpClient.get('https://localhost:44321/api/Mcq2').subscribe((data) => {
      this.Data = data;
      console.log(this.Data);
    });
  }

  delete(id:any) : void {
    let res = confirm("Are you sure you want to delete this Question?");
    if(res){
      this.httpClient.delete(`https://localhost:44321/api/Mcq2/${id}`).subscribe({
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
      this.router.navigate(['/admineventpage2']);
    }
  }

  back(){
    this.router.navigate(['/adminevent']);
  }

  add(){
    this.router.navigate(['/add2']);
  }

  edit(id:any){
    this.router.navigate(['/edit2', id]);
  }


  home(){
    this.router.navigate(['/']);
  }
}


