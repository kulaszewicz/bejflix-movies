import { Controller, Get } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  async findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }
}
