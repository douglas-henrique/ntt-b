import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { SearchMovieParams } from './movies.validation';
import { Response } from 'express';
import { MovieNotFound, UnexpectedError } from './movies.exception';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get(':title')
  async findMovie(
    @Param() params: SearchMovieParams,
    @Res() response: Response,
  ) {
    const { statusCode, content } = await this.movieService.searchMovie(
      params.title,
    );

    if (statusCode !== HttpStatus.OK) {
      if (statusCode === HttpStatus.NOT_FOUND) {
        throw new MovieNotFound();
      }
      throw new UnexpectedError();
    }

    return response.send(content);
  }
}
