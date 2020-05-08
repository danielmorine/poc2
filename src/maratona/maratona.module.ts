import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Maratona} from './maratona.entity';
import { MaratonaController } from './maratona.controller';
import { MaratonaService } from './maratona.service';


@Module({
imports:[TypeOrmModule.forFeature([Maratona])],
controllers: [MaratonaController],
providers: [MaratonaService],
})

export class MaratonaModule {}


