import { Component, inject, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  imports: [],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.css'
})
export class MenuLateral {
  router = inject(Router);
  

  goToDashboard() {
    this.router.navigate(['/dashboard']); 
  }

   goToHome() {
    this.router.navigate(['/home']); 
  }

  goToLogin() {
    // Clear session storage and navigate to login page
    sessionStorage.removeItem('email');
    this.router.navigate(['/']);
    
  }

}
