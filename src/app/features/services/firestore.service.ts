import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { environment } from '../../../environments/environment';

const app = initializeApp(environment.firebase);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class FireStoreService {
  get fireStore() {
    return db;
  }

  async insertRequest(data: any) {
    try {
      const col = collection(db, 'requests');
      const docRef = await addDoc(col, data);
    } catch (e) {}
  }
}
