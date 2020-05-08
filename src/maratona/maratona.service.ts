import { Injectable, Options } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maratona } from './maratona.entity';

@Injectable()
export class MaratonaService {
    constructor(
        @InjectRepository(Maratona)
        private readonly maratonaRepository: Repository<Maratona>
    ) {}

    async findAll(): Promise<Maratona[]> {
        return await this.maratonaRepository.find();
    }

     PostAsync(schema: Maratona[]): void {        
        schema.map(e => {
            const maratona = this.maratonaRepository.create(e);
            this.maratonaRepository.save(maratona);
        })
                    
    }

    async RemoveAsync(id: string): Promise<void> {
        var maratona = await this.maratonaRepository.find({where: [id === id]});
        this.maratonaRepository.remove(maratona);
        return;
    }
}