import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { TreinoDTO } from './treino.dto';

@Injectable()
export class TreinoService {
    constructor(private prisma: PrismaService) {}
    async create(data: TreinoDTO) {
        const userExists = await this.prisma.treino.findFirst({
            where: {
                treino_id: data.treino_id
            },
        });
        if (userExists) {
            throw new Error('User already exists');
        }
        const user = await this.prisma.treino.create({
            data,
        });
        return user
    }
    async findAll () {
        return this.prisma.treino.findMany();
    }

    async update(treino_id: number, data: TreinoDTO) {
        const usuerExists = await this.prisma.treino.findUnique({
            where: {
                treino_id: Number (treino_id )
            },
        });

        if(!usuerExists) {
            throw new Error('User does not exists!');
        }
        return await this.prisma.treino.update({
            data,
            where: {
                treino_id: Number (treino_id )
            },
        });
    }

    async delete(treino_id: number) {
        const userExists = await this.prisma.treino.findUnique({
            where: {
                treino_id: Number (treino_id)
            },
        });
        if(!userExists) {
            throw new Error('User does not exists!');
        }
        return await this.prisma.treino.delete({
            where: {
                treino_id: Number (treino_id)
            },
        });
    }
}
