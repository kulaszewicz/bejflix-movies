import { Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';

@Injectable()
export class MoviesService {
  private readonly movies: Movie[] = [];

  findAll(): Movie[] {
    return this.movies;
  }
}