import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Resolutions } from './resolutions.enum';
import {
  CreateVideoInputModel,
  UpdateVideoInputModel,
} from '../api/models/input';

@Entity('video')
export class VideoEntity {
  @Column()
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  title: string;
  @Column()
  author: string;
  @Column({ name: 'can_be_downloaded', type: 'boolean' })
  canBeDownloaded: boolean;
  @Column({ name: 'min_age_restriction' })
  minAgeRestriction: number;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;
  @Column({ name: 'publication_date', type: 'timestamp with time zone' })
  publicationDate: Date;
  @Column({ type: 'jsonb' })
  availableResolutions: Resolutions[];

  update(video: UpdateVideoInputModel): void {
    this.title = video.title ?? this.title;
    this.author = video.author ?? this.author;
    this.canBeDownloaded = video.canBeDownloaded ?? this.canBeDownloaded;
    this.minAgeRestriction = video.minAgeRestriction ?? this.minAgeRestriction;
    this.publicationDate = video.publicationDate ?? this.publicationDate;
    this.availableResolutions =
      video.availableResolutions ?? this.availableResolutions;
  }

  static create(video: CreateVideoInputModel): VideoEntity {
    const _video = new VideoEntity();
    _video.title = video.title;
    _video.author = video.author;
    _video.canBeDownloaded = true;
    _video.minAgeRestriction = 18;
    _video.publicationDate = new Date();
    _video.availableResolutions = video.availableResolutions;

    return _video;
  }
}
