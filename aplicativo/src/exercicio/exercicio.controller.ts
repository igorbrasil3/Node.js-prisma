import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { ExercicioService } from './exercicio.service';
import { ExercicioDTO } from './exercicio.dto';

@Controller('exercicio')
export class ExercicioController {
  constructor(private readonly exercicioService: ExercicioService) {}

  @Post()
  async create(@Body() data: ExercicioDTO) {
    return this.exercicioService.create(data)
  }

  @Get()
  async findAll() {
    return this.exercicioService.findAll();
  }

  @Put(':id_exercicio')
  async update(@Param('id_exercicio') id: number, @Body() data: ExercicioDTO) {
    return this.exercicioService.update(id, data);
  }

  @Delete(':id_exercicio')
  async delete(@Param('id_exercicio') id: number) {
    return this.exercicioService.delete(id);
  }
}
