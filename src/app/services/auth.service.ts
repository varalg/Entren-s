import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from '@angular/fire/auth';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);

  get user() {
    return this.auth.currentUser;
  }

  get uid() {
    return this.auth.currentUser?.uid || null;
  }

  async login(email: string, senha: string) {
    return signInWithEmailAndPassword(this.auth, email, senha);
  }

  async register(email: string, senha: string) {
    return createUserWithEmailAndPassword(this.auth, email, senha);
  }

  async logout() {
    return signOut(this.auth);
  }

  async resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }
}
