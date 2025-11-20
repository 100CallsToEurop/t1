import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
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
  @IsOptional()
  @IsArray()
  @IsEnum(Resolutions, { each: true })
  availableResolutions?: Resolutions[];
  @IsOptional()
  @IsBoolean()
  canBeDownloaded?: true;
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(18)
  minAgeRestriction?: number | null;
  @IsOptional()
  // @IsDate()
  @Matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
  publicationDate?: Date;
}
