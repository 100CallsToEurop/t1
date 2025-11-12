import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class SharedModule {}
