import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ExercicioDTO } from './exercicio.dto';

@Injectable()
export class ExercicioService {
    constructor(private prisma: PrismaService) {}
    async create(data: ExercicioDTO) {
        const userExists = await this.prisma.exercicio.findFirst({
            where: {
                id_exercicio: data.id_exercicio
            },
        });
        if (userExists) {
            throw new Error('User already exists');
        }
        const user = await this.prisma.exercicio.create({
            data
        });
        return user
    }
    async findAll () {
        return this.prisma.exercicio.findMany();
    }

    async update(id: number, data: ExercicioDTO) {
        const usuerExists = await this.prisma.exercicio.findUnique({
            where: {
                id_exercicio: data.id_exercicio
            },
        });

        if(!usuerExists) {
            throw new Error('User does not exists!');
        }
        return await this.prisma.exercicio.update({
            data,
            where: {
                id_exercicio: data.id_exercicio
            },
        });
    }

    async delete(id_exercicio: number) {
        const userExists = await this.prisma.exercicio.findUnique({
            where: {
                id_exercicio: Number(id_exercicio)
            },
        });
        if(!userExists) {
            throw new Error('User does not exists!');
        }
        return await this.prisma.exercicio.delete({
            where: {
                id_exercicio: Number(id_exercicio)
            },
        });
    }
}
