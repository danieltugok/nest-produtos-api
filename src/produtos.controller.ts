import { Controller, Get, Param } from '@nestjs/common';

@Controller('produtos')
export class ProdutosController{

  @Get()
  obterTodos(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }

}