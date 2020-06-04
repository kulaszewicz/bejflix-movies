import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin'

@Injectable()
export class MoviesService {
  db = admin.firestore();

  async findAll():  Promise<FirebaseFirestore.DocumentData[]> {
    const snapshot = await this.db.collection('movies').get()
    return snapshot.docs.map(movie => movie.data());
  }
}