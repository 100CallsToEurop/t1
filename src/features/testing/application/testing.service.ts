import { Injectable } from '@nestjs/common';
import { VideoEntity } from 'src/features/videos/domain';
import { DataSource } from 'typeorm';

@Injectable()
export class TestingService {
  constructor(private readonly dataSource: DataSource) {}

  async deleteAllData(): Promise<void> {
    await this.dataSource.getRepository(VideoEntity).clear();
  }
}
