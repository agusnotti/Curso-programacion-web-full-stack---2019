import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConcesionariaController } from './concesionaria/concesionaria.controller';
import { ConcesionariaService } from './concesionaria/concesionaria.service';


@Module({
  imports:  [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, ConcesionariaController],
  providers: [AppService, ConcesionariaService],
})
export class AppModule {}
