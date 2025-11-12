import { Module } from '@nestjs/common';
import { TestingController } from './api';
import { TestingService } from './application';

@Module({
  imports: [],
  controllers: [TestingController],
  providers: [TestingService],
  exports: [],
})
export class TestingModule {}
