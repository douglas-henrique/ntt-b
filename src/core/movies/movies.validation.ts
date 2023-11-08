import { IsString } from 'class-validator';

export class SearchMovieParams {
  @IsString()
  title: string;
}
