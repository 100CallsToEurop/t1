import { Injectable } from '@nestjs/common';
import { VideoRepository } from '../repository';
import { VideoEntity } from '../../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VideoAdapter implements VideoRepository {
  constructor(
    @InjectRepository(VideoEntity)
    private readonly videoRepository: Repository<VideoEntity>,
  ) {}
  async save(video: VideoEntity): Promise<VideoEntity> {
    return await this.videoRepository.save(video);
  }
  async delete(id: number): Promise<void> {
    await this.videoRepository.delete(id);
  }
  async findById(id: number): Promise<VideoEntity | null> {
    return await this.videoRepository.findOne({ where: { id } });
  }
}
