import { Injectable } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class MoviesService {
  private movies: Movie[];

  constructor(private db: DbService) {}

  async getAllMovies() {
    return this.db.movie.findMany();
  }
}
