import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  constructor(private router:Router){}

  GetStarted(){
    alert("Please log in to access the cloud lab.");
  }

  user(){
    this.router.navigate(['/userlogin']);

  } 

  admin(){
    this.router.navigate(['/adminlogin']);

  } 
}
