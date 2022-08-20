import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produto.model';
import { ProdutosService } from './produto.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosServices: ProdutosService){


  }


  @Get()
  async obterTodos(): Promise<Produto[]> {
    return this.produtosServices.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Produto> {
    return this.produtosServices.obterUm(params.id);
  }

  @Post()
  async criar(@Body() produto: Produto) {
    this.produtosServices.criar(produto);
  }

  @Put()
  async alterar(@Body() produto: Produto): Promise<[number, Produto[]]> {
    return this.produtosServices.alterar(produto);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.produtosServices.apagar(params.id);
  }
}
