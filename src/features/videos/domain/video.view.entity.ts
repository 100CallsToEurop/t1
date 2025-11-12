import { ViewColumn, ViewEntity } from 'typeorm';
import { Resolutions } from './resolutions.enum';
import { VideoEntity } from './video.entity';

@ViewEntity({
  expression: (dataSource) =>
    dataSource
      .createQueryBuilder()
      .select('video.id', 'id')
      .addSelect('video.title', 'title')
      .addSelect('video.author', 'author')
      .addSelect('video.canBeDownloaded', 'canBeDownloaded')
      .addSelect('video.minAgeRestriction', 'minAgeRestriction')
      .addSelect('video.createdAt', 'createdAt')
      .addSelect('video.publicationDate', 'publicationDate')
      .addSelect('video.availableResolutions', 'availableResolutions')
      .from(VideoEntity, 'video'),
})
export class VideoViewEntity {
  @ViewColumn()
  id: number;
  @ViewColumn()
  title: string;
  @ViewColumn()
  author: string;
  @ViewColumn()
  canBeDownloaded: boolean;
  @ViewColumn()
  minAgeRestriction: number;
  @ViewColumn()
  createdAt: string;
  @ViewColumn()
  publicationDate: string;
  @ViewColumn()
  availableResolutions: Resolutions[];
}
