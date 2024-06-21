import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlab',
  templateUrl: './adminlab.component.html',
  styleUrl: './adminlab.component.css'
})
export class AdminlabComponent {

  username: string ='Admin';

  constructor(private router: Router){}

  home(){
    this.router.navigate(['/']);
  }
}
