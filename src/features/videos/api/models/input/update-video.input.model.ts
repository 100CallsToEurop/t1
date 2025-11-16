import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { Resolutions } from '../../../domain/resolutions.enum';
import { Transform } from 'class-transformer';

export class UpdateVideoInputModel {
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
  @IsNotEmpty()
  @IsBoolean()
  canBeDownloaded: true;
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(18)
  minAgeRestriction: number | null;
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  publicationDate: Date;
}
