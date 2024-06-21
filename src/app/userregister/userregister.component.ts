// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-userregister',
//   templateUrl: './userregister.component.html',
//   styleUrl: './userregister.component.css'
// })
// export class UserregisterComponent {

//   Data = {
//     name: '',
//     email: '',
//     password: ''
//   };

//   constructor(private router: Router, private httpClient: HttpClient) {}

//   login() {
//     this.httpClient.post('https://localhost:44321/api/User', this.Data).subscribe({
//         next: () => {
//           alert('Registration Successful!');
//           localStorage.setItem('username', this.Data.name);
//           this.router.navigate(['/userlogin']);
//         },
//         error: (error) => {
//           console.error('Error occurred during registration:', error);
//         }
//       });
//   }

//   areFieldsFilled(): boolean {
//     return this.Data.name !== '' && this.Data.email !== '' && this.Data.password !== '';
//   }
// }
// //https://localhost:44321/api/User
// //this.router.navigate(['/userlogin']);

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/config';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrl: './userregister.component.css'
})
export class UserregisterComponent {

  Data = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router, private httpClient: HttpClient) {}

  login() {
    createUserWithEmailAndPassword(auth, this.Data.email, this.Data.password)
    .then((response) => {
      console.log(response);
      this.httpClient.post('https://localhost:44321/api/User', this.Data).subscribe({
        next: () => {
          alert('Registration Successful!');
          localStorage.setItem('username', this.Data.name);
          this.router.navigate(['/userlogin']);
        },
        error: (error) => {
          console.error('Error occurred during registration:', error);
        }
      });
    })
    
    .catch(error => console.log(error))
    
  }

  areFieldsFilled(): boolean {
    return this.Data.name !== '' && this.Data.email !== '' && this.Data.password !== '';
  }
}
