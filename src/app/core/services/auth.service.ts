import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode'; // npm install jwt-decode
import { tap } from 'rxjs';
import { TokenResponse, UserPayload } from '../../shared/models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private cookieService = inject(CookieService);
  private readonly API_URL = 'http://localhost:8000/api/token/';

  login(credentials: { email: string; password: any }) {
    return this.http.post<TokenResponse>(this.API_URL, credentials).pipe(
      tap((res) => {
        // Salva o Access Token (Expira rápido)
        this.cookieService.set('access', res.access, { path: '/', secure: true, sameSite: 'Lax' });

        // Salva o Refresh Token (Dura mais)
        this.cookieService.set('refresh', res.refresh, { path: '/', expires: 7 });

        // DECODIFICA O ID: Aqui pegamos o ID de dentro do JWT
        const decoded = jwtDecode<UserPayload>(res.access);
        this.cookieService.set('user_id', decoded.user_id, { path: '/', expires: 7 });
      })
    );
  }
}
