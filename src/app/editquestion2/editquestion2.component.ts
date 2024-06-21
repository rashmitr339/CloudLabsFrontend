import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editquestion2',
  templateUrl: './editquestion2.component.html',
  styleUrl: './editquestion2.component.css'
})
export class Editquestion2Component {

  Data :any =  {

    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    marks: '',
    answer: ''

  };

  constructor(private HttpClient: HttpClient,
              private router:Router,
              private route:ActivatedRoute
  ){}
  
  ngOnInit(): void {
      this.route.params.subscribe((param) => {
        let id=param['id'];
        this.getById(id);
      })
  }

  getById(id:any){
    this.HttpClient.get(`https://localhost:44321/api/Mcq2/${id}`).subscribe((data) =>{
      this.Data = data;
    })
  }

  editData(id:any){
    let res = confirm("Are you sure you want to save this changes?");
    if(res){
      this.HttpClient.put(`https://localhost:44321/api/Mcq2/${id}`, this.Data).subscribe({
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
