import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produto.model';
import { ProdutosService } from './produto.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosServices: ProdutosService){


  }


  @Get()
  obterTodos(): Produto[] {
    return this.produtosServices.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtosServices.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Produto) {
    this.produtosServices.criar(produto);
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return this.produtosServices.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.produtosServices.apagar(params.id);
  }
}
