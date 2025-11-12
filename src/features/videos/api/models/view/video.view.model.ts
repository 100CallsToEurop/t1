import { VideoViewEntity } from '../../../domain';
import { Resolutions } from '../../../domain/resolutions.enum';

export class VideoViewModel implements VideoViewEntity {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number;
  createdAt: string;
  publicationDate: string;
  availableResolutions: Resolutions[];
}
