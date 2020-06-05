import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin'
import { Movie } from "./interfaces/movie.interface";

@Injectable()
export class MoviesService {
  db = admin.firestore();

  async findAll():  Promise<FirebaseFirestore.DocumentData[]> {
    const snapshot = await this.db.collection('movies').get()
    return snapshot.docs.map(movie => movie.data());
  }

  async getByGenre(genre: string):  Promise<FirebaseFirestore.DocumentData[]> {
    const snapshot = await this.db.collection('movies').where('genre', '==', genre).get()
    return snapshot.docs.map(movie => movie.data());
  }

  async addMovie(Movie: Movie): Promise<FirebaseFirestore.DocumentData[]> {
    return await this.db.collection('movies').doc().set(Movie).then(() => {
      return 'Movie added successfully'
    }).catch((err) => {
      return err;
    });
  }
}