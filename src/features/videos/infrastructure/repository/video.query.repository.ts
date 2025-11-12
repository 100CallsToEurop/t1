import { VideoViewEntity } from '../../domain';

export abstract class VideoQueryRepository {
  abstract findAll(): Promise<VideoViewEntity[]>;
  abstract findById(id: number): Promise<VideoViewEntity | null>;
}
