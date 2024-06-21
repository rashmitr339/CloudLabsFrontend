import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/config';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  Data = {
        email: '',
        password: ''
      };
    
      constructor(private router: Router, private httpClient: HttpClient) {}

    
      adminlogin() {
        this.httpClient.get(`https://localhost:44321/api/Admin/Adminlogin?email=${encodeURIComponent(this.Data.email)}&password=${encodeURIComponent(this.Data.password)}`)
          .subscribe({
            next: (response: any) => {
              if (response) {
                alert('Login Successful!');
                this.router.navigate(['/adminlab']);
              } else {
                alert('Incorrect email or password. Please try again.');
              }
            },
            error: (error) => {
              console.error('Error occurred during login:', error);
              alert('An error occurred during login. Please ensure entered email & password are correct.');
            }
          });
      }

      areFieldsFilled(): boolean {
        return this.Data.email !== '' && this.Data.password !== '';
      }
    }
    

    
    // adminlogin() {
    //   signInWithEmailAndPassword(auth, this.Data.email, this.Data.password)
    //   .then((response) => {
    //    console.log(response);
    //    alert('Login Successful!');
    //    this.router.navigate(['/adminlab']);
    //   })
    //   .catch (error => {
    //    console.log(error);
    //    alert('An error occurred during login. Please ensure entered email & password are correct.');
    //   })
    //  }

  // Email: string = 'admin123@gmail.com';
  // Password: string = 'admin123';

  // Data={
  //   email:'',
  //   password:''
  // }
  // constructor(private router:Router){}
  
  // adminlogin(){
  //   if(this.Data.email===this.Email && this.Data.password===this.Password){
  //     alert("Login Successful!");
  //     this.router.navigate(['/adminlab']);
  //   }
  //   else{
  //     alert("An error occurred during login. Please ensure entered email & password are correct.");
  //     this.Data.email ='';
  //     this.Data.password = '';

  //   }
  // }

   

