import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { environment } from '../../../environments/environment.environment';

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
      await addDoc(col, data);
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
  async submitContactRequest(data: any) {
    try {
      const col = collection(db, 'contact-requests');
      await addDoc(col, data);
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

  async submitAppealRequest(data: any) {
    try {
      const col = collection(db, 'appeal-requests');
      await addDoc(col, data);
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

}
