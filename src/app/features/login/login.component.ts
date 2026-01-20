import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginData = { email: '', password: '' };

  onSubmit() {
    this.authService.login(this.loginData).subscribe({
      next: () => {
        console.log('Logado com sucesso! ID salvo no cookie.');
        this.router.navigate(['/requerimento']); // Vai para a tela que você já criou
      },
      error: (err) => alert('Falha no login: Verifique suas credenciais')
    });
  }
}
