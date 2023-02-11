import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from '@prisma/client';
import { shuffle } from './util';

@Controller('movies')
export class MoviesController {
  constructor(private mS: MoviesService) {}

  @Get()
  async getMovies(): Promise<Movie[]> {
    const movies = await this.mS.getAllMovies();
    const shuffledMovies = shuffle<Movie>(movies).slice(1, 4);
    return shuffledMovies;
  }
}
