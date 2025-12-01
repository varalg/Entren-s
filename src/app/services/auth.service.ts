import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/environments/firebaseConfig';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);

  // ✅ Cadastro
  async register(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  // ✅ Login
  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  // ✅ Logout
  async logout() {
    await signOut(this.auth);
  }

  // ✅ Usuário atual
  get currentUser() {
    return this.auth.currentUser;
  }
}
