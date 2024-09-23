import { Controller, Post, Body, Get, Param, Put, Delete} from '@nestjs/common';
import { TreinoService } from './treino.service';
import { TreinoDTO } from './treino.dto';

@Controller('treino')
export class TreinoController {
  constructor(private readonly treinoService: TreinoService) {}
  @Post()
  async create(@Body() data: TreinoDTO) {
    return this.treinoService.create(data);
  }

  @Get()
  async findAll() {
    return this.treinoService.findAll();
  }

  @Put(':treino_id')
  async update(@Param('treino_id') id: number, @Body() data: TreinoDTO) {
    return this.treinoService.update(id, data);
  }

  @Delete(':treino_id')
  async delete(@Param('treino_id') id: number) {
    return this.treinoService.delete(id);
  }
}
