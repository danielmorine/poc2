import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MaratonaModule } from './maratona/maratona.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from "@nestjs/config";
import { Maratona } from './maratona/maratona.entity';


@Module({
  imports: [    
    ConfigModule.forRoot({envFilePath: '.env'}),   
    TypeOrmModule.forRoot({
       // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      database: process.env.TYPEORM_DATABASE,
      entities: [Maratona],            
    }),
    MaratonaModule,
  ],
  controllers: [AppController],
  providers: [],
})

export class AppModule {

}
