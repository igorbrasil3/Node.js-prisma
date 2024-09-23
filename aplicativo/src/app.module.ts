import { Module } from '@nestjs/common';
import { TreinoModule } from './treino/treino.module';
import { ExercicioModule } from './exercicio/exercicio.module';


@Module({
  imports: [TreinoModule,ExercicioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
