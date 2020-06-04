import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  async findAll(): Promise<FirebaseFirestore.DocumentData[]> {
    return this.moviesService.findAll();
  }
}
