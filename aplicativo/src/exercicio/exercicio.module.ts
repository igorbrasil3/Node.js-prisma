import { Module } from '@nestjs/common';
import { ExercicioService } from './exercicio.service';
import { ExercicioController } from './exercicio.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ExercicioController],
  providers: [ExercicioService, PrismaService],
  exports: [ExercicioModule],
})
export class ExercicioModule {}
