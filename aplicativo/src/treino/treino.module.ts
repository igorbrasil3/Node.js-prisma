import { Module } from '@nestjs/common';
import { TreinoService } from './treino.service';
import { TreinoController } from './treino.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [TreinoController],
  providers: [TreinoService, PrismaService],
  exports: [TreinoModule],
})
export class TreinoModule {}
