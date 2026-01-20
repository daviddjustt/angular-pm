import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ESSENCIAL para o ngModel
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  // Adicione FormsModule e CommonModule aqui nos imports do componente
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login { // O nome da classe deve bater com o erro do log
  private authService = inject(AuthService);
  private router = inject(Router);

  // Certifique-se de que estas propriedades estão EXATAMENTE com esses nomes
  loginData = {
    email: '',
    password: ''
  };

  onSubmit() {
    this.authService.login(this.loginData).subscribe({
      next: (v) => {
        console.log('Sucesso');
        this.router.navigate(['/requerimento']);
      },
      error: (e) => {
        console.error('Erro no login', e);
        alert('Falha na autenticação');
      }
    });
  }
}
