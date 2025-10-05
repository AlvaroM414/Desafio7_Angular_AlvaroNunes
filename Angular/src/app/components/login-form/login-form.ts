import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { Login } from '../../services/login';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  loginService = inject(Login);
  router = inject(Router);
  
  loginForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  });

  onSubmitLogin() {
    const { nome, senha } = this.loginForm.value;
    // Aqui você pode chamar o serviço de login passando nome e senha
    
    if(!this.loginForm.valid || !nome || !senha) {
      alert('Existem campos não preenchidos!');
      return;
    }
     
    this.loginService.login(nome, senha).subscribe({
      error:(err) => {
        console.error('Erro completo:', err); // ✅ Adicionado para depuração
        if(err.status == 401) {
          alert('Usuário ou senha inválidos!');
          return
        }
        alert('Erro no servidor, tente novamente mais tarde!');        
      },
      next: () => {
        this.router.navigate(['/home']);
      }
    })
  }
}
