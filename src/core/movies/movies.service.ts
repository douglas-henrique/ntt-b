import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { OMDbErrorResponses } from './movies.constants';

interface SearchMovieProps {
  statusCode: number;
  content?: object;
}

@Injectable()
export class MoviesService {
  API_REQUEST_PATH: string;

  constructor() {
    this.API_REQUEST_PATH = `${process.env.API_URL}?apikey=${process.env.API_KEY}&`;
  }

  async searchMovie(movie: string): Promise<SearchMovieProps> {
    const response = await fetch(this.API_REQUEST_PATH + `t=${movie}`);
    const data = await response.json();

    if (data.Error) {
      if (data.Error === OMDbErrorResponses.MOVIE_NOT_FOUND) {
        return { statusCode: 404 };
      }

      return { statusCode: 500 };
    }

    return {
      content: data,
      statusCode: 200,
    };
  }
}
