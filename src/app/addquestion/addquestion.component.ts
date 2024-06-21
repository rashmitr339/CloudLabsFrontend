import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrl: './addquestion.component.css'
})
export class AddquestionComponent {

  Data = {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    marks: '',
    answer: ''
  };

  constructor(private HttpClient:HttpClient,
              private router:Router
  ) {}

  addData(){
    let res= confirm("Are you sure you want to add this Question?");
    if(res){
      this.HttpClient.post(`https://localhost:44321/api/Mcq`, this.Data).subscribe({
      next: () => {
        this.router.navigate(['/adminevent']);
      },
      error: (err) => {
        console.log(err);
      }
    })

    }
    else{
      this.router.navigate(['/adminevent']);
    }
    
  }

  back(){
    this.router.navigate(['/adminevent'])
  }

}
