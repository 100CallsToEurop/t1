import { Resolver, Tool } from '@nestjs-mcp/server';
import { VideoQueryRepository } from '../infrastructure/repository';
import { CallToolResult } from '@modelcontextprotocol/sdk/types';

@Resolver('status')
export class VideosMcp {
  constructor(private readonly videoQueryRepository: VideoQueryRepository) {}

  @Tool({ name: 'работоспособность сервера' })
  healthCheck(): CallToolResult {
    return { content: [{ type: 'text', text: 'OK' }] };
  }

  @Tool({ name: 'получить количество видео' })
  async getVideos(): Promise<CallToolResult> {
    const result = await this.videoQueryRepository.findAll();
    return {
      content: [
        {
          type: 'text',
          text: `Found ${result.length} videos`,
        },
      ],
    };
  }
}
