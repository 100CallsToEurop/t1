import { VideoEntity } from '../../domain';

export abstract class VideoRepository {
  abstract save(video: VideoEntity): Promise<VideoEntity>;
  abstract delete(id: number): Promise<void>;
  abstract findById(id: number): Promise<VideoEntity | null>;
}
