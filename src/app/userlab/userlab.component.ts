import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlab',
  templateUrl: './userlab.component.html',
  styleUrl: './userlab.component.css'
})
export class UserlabComponent implements OnInit{

  cftDeployed: boolean = false;
  username: string | null = null;

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
}
