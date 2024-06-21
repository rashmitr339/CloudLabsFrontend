import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquestion2',
  templateUrl: './addquestion2.component.html',
  styleUrl: './addquestion2.component.css'
})
export class Addquestion2Component {
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
      this.HttpClient.post(`https://localhost:44321/api/Mcq2`, this.Data).subscribe({
      next: () => {
        this.router.navigate(['/admineventpage2']);
      },
      error: (err) => {
        console.log(err);
      }
    })

    }
    else{
      this.router.navigate(['/admineventpage2']);
    }
    
  }

  back(){
    this.router.navigate(['/admineventpage2'])
  }


}

//https://localhost:44321/api/Mcq2/1003