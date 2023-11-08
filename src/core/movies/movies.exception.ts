import { HttpException, HttpStatus } from '@nestjs/common';
import { OMDbErrorResponses } from './movies.constants';

export class MovieNotFound extends HttpException {
  constructor() {
    super(OMDbErrorResponses.MOVIE_NOT_FOUND, HttpStatus.NOT_FOUND);
  }
}

export class UnexpectedError extends HttpException {
  constructor() {
    super(
      OMDbErrorResponses.UNEXPECTED_ERROR,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
