import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminviewusers',
  templateUrl: './adminviewusers.component.html',
  styleUrl: './adminviewusers.component.css'
})
export class AdminviewusersComponent implements OnInit{

  username: string ='Admin';
  users:any=[];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getAllusers();
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
      this.router.navigate(['/adminviewusers']);
    }

    }

    home(){
      this.router.navigate(['/']);
    }
    
    Logout(){
      alert("You are now logging out.");
      this.router.navigate(['/']);
    }
}

