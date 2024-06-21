// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-userlogin',
//   templateUrl: './userlogin.component.html',
//   styleUrl: './userlogin.component.css'
// })
// export class UserloginComponent {

//   Data = {
//     email: '',
//     password: ''
//   };

//   constructor(private router: Router, private httpClient: HttpClient) {}

//   login() {
//     this.httpClient.get(`https://localhost:44321/api/User/Login?email=${encodeURIComponent(this.Data.email)}&password=${encodeURIComponent(this.Data.password)}`)
//       .subscribe({
//         next: (response: any) => {
//           if (response) {
//             alert('Login Successful!');
//             this.router.navigate(['/deploycft']);
//           } else {
//             alert('Incorrect email or password. Please try again.');
//           }
//         },
//         error: (error) => {
//           console.error('Error occurred during login:', error);
//           alert('An error occurred during login. Please ensure entered email & password are correct.');
//         }
//       });
//   }

//   areFieldsFilled(): boolean {
//     return this.Data.email !== '' && this.Data.password !== '';
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/config';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {

  Data = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private httpClient: HttpClient) {}

  login() {
   signInWithEmailAndPassword(auth, this.Data.email, this.Data.password)
   .then((response) => {
    console.log(response);
    alert('Login Successful!');
    this.router.navigate(['/deploycft']);
   })
   .catch (error => {
    console.log(error);
    alert('An error occurred during login. Please ensure entered email & password are correct.');
   })
  }

  areFieldsFilled(): boolean {
    return this.Data.email !== '' && this.Data.password !== '';
  }
}