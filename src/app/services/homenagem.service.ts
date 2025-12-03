import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where, orderBy, doc, deleteDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { firstValueFrom } from 'rxjs';

export interface Homenagem {
  id?: string;
  uid?: string;
  titulo: string;
  mensagem: string;
  imagemUrl?: string;
  spotifyUrl?: string;
  criadoEm: Date;
  audioUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomenagemService {
  private firestore: Firestore = inject(Firestore);
  private auth = inject(AuthService);

  // Cria homenagem
  async criarHomenagem(h: Omit<Homenagem, 'id' | 'uid'>): Promise<string> {
    const uid = this.auth.user?.uid;
    if (!uid) throw new Error('Usuário não logado');

    const docRef = await addDoc(collection(this.firestore, 'homenagens'), {
      ...h,
      uid
    });

    return docRef.id;
  }

  // Lista homenagens do usuário logado
  async listarMinhasHomenagens(): Promise<Homenagem[]> {
    const uid = this.auth.user?.uid;
    if (!uid) return [];

    const colRef = collection(this.firestore, 'homenagens');
    const q = query(colRef, where('uid', '==', uid), orderBy('criadoEm', 'desc'));

    const snapshot = await firstValueFrom(collectionData(q, { idField: 'id' }));
    return snapshot as Homenagem[];
  }

  // Deleta homenagem
  async deletarHomenagem(id: string) {
    const docRef = doc(this.firestore, `homenagens/${id}`);
    await deleteDoc(docRef);
  }
}
