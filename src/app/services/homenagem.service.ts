import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/environments/firebaseConfig';
import { getFirestore, collection, addDoc, query, where, getDocs, orderBy } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class HomenagemService {
  private app = initializeApp(firebaseConfig);
  private db = getFirestore(this.app);
  private storage = getStorage(this.app);
  private auth = getAuth(this.app);

  constructor() {}

  private async uploadArquivo(path: string, arquivo: File) {
    const fileRef = ref(this.storage, path);
    await uploadBytes(fileRef, arquivo);
    return await getDownloadURL(fileRef);
  }

  async criarHomenagem(titulo: string, mensagem: string, imagem: File, audio: File | null) {
    const user = this.auth.currentUser;
    if (!user) throw new Error('Usuário não autenticado');

    const autorId = user.uid;
    const timestamp = Date.now();

    const imagemUrl = await this.uploadArquivo(`homenagens/${autorId}/${timestamp}_img_${imagem.name}`, imagem);

    let audioUrl = '';
    if (audio) {
      audioUrl = await this.uploadArquivo(`homenagens/${autorId}/${timestamp}_audio_${audio.name}`, audio);
    }

    await addDoc(collection(this.db, 'homenagens'), {
      titulo,
      mensagem,
      imagemUrl,
      audioUrl,
      autorId,
      data: new Date().toISOString()
    });

    return true;
  }

  // Busca apenas homenagens do usuário atual, ordenadas pela data (mais recente primeiro)
  async listarMinhasHomenagens() {
    const user = this.auth.currentUser;
    if (!user) throw new Error('Usuário não autenticado');

    const homenagensRef = collection(this.db, 'homenagens');
    const q = query(homenagensRef, where('autorId', '==', user.uid), orderBy('data', 'desc'));
    const snapshot = await getDocs(q);

    const items: any[] = [];
    snapshot.forEach(doc => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  }
}
