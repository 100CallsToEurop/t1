import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoEntity, VideoViewEntity } from './domain';
import { VideosController } from './api';
import { VideoService } from './application';
import {
  VideoQueryRepository,
  VideoRepository,
} from './infrastructure/repository';
import { VideoAdapter, VideoQueryAdapter } from './infrastructure/adapter';

@Module({
  imports: [TypeOrmModule.forFeature([VideoEntity, VideoViewEntity])],
  controllers: [VideosController],
  providers: [
    VideoService,
    {
      provide: VideoRepository,
      useClass: VideoAdapter,
    },
    {
      provide: VideoQueryRepository,
      useClass: VideoQueryAdapter,
    },
  ],
  exports: [],
})
export class VideosModule {}
