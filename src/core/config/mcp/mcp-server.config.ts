import { ConfigModule, ConfigService } from '@nestjs/config';

export const MCPServerConfig = () => ({
  useFactory: (configService: ConfigService) => ({
    name: configService.get<string>('MCP_SERVER_NAME', 'Default Server'),
    version: configService.get<string>('MCP_SERVER_VERSION', '1.0.0'),
  }),
  inject: [ConfigService],
  imports: [ConfigModule],
});
