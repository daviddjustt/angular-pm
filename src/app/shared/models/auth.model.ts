export interface TokenResponse {
  access: string;
  refresh: string;
}

export interface UserPayload {
  user_id: string; // O ID que o JWT carrega internamente
  email: string;
  exp: number;
}
