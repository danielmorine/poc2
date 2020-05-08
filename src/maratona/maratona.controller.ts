import { Controller, Get, Post, Request, Req, Delete } from '@nestjs/common';
import { MaratonaService } from './maratona.service';

@Controller('maratona')
export class MaratonaController {
    constructor(
        private readonly maratonaService: MaratonaService,
    ){ }

    @Get()
    async index() {
       return await this.maratonaService.findAll();
    }

    @Post()
    async store(@Req() request: Request){
        await this.maratonaService.PostAsync(request.body as any);
        return;
    }

    @Delete()
    async RemoveAsync(@Req() request: Request){
        await this.maratonaService.RemoveAsync(request.body as any);
        return;
    }
}
