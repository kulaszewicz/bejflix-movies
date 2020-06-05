import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from "./interfaces/movie.interface";

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  async findAll(): Promise<FirebaseFirestore.DocumentData[]> {
    return this.moviesService.findAll();
  }

  @Get('/:genre')
  async getByGenre(@Param('genre') genre: string): Promise<FirebaseFirestore.DocumentData[]> {
    return this.moviesService.getByGenre(genre);
  }

  @Post()
  async addMovie(@Body() Movie: Movie): Promise<FirebaseFirestore.DocumentData[]> {
    return this.moviesService.addMovie(Movie);
  }
}
