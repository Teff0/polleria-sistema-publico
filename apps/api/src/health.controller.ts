import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('platform')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Comprueba la disponibilidad de la API' })
  @ApiResponse({ status: 200, description: 'La API está disponible.' })
  getHealth(): { status: string } {
    return { status: 'ok' };
  }
}
