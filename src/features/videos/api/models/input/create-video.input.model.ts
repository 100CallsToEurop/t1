import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { Resolutions } from '../../../domain/resolutions.enum';

export class CreateVideoInputModel {
  @IsNotEmpty()
  @IsString()
  @MaxLength(40)
  title: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  author: string;
  @IsNotEmpty()
  @IsArray()
  @IsEnum(Resolutions, { each: true })
  availableResolutions: Resolutions[];
}
