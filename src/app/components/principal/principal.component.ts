import { Component } from '@angular/core';
import { Cliente } from "src/app/models/Cliente";
import { ClienteService } from 'src/app/service/cliente.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  //Objeto do tipo Cliente
  cliente = new Cliente();

  //variavel para visibilidade dos botoes
  btnCadastro:boolean = true;

  //variavel para visibilidade da tabela
  tabela:boolean = true;

  //Json de clientes
  clientes:Cliente[] = [];

  constructor(private service:ClienteService){}

  //Médoto de seleção
  selecionar():void{
    this.service.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  //Método de cadastro
  cadastrar():void{
    this.service.cadastrar(this.cliente)
    .subscribe(retorno => {

      //Cadastrar o cliente no vetor
      this.clientes.push(retorno); });

      // Limpar formulario
      this.cliente = new Cliente();

      //visibilidade botao / tabela
    this.btnCadastro = true;
    this.tabela = true;

      //mensagem
      alert('Cliente cadastrado com sucesso!');
  }

  //Método para selecionar um cliente em especifico
  selecionarCliente(posicao:number):void{
    //selecionar cliente no vetor
    this.cliente = this.clientes[posicao];

    //visibilidade botao / tabela
    this.btnCadastro = false;
    this.tabela = false;
  }
 // Método Atualizar
  atualizar(): void {
    this.service.atualizar(this.cliente)
        .subscribe(retorno => {
            // Encontrar a posição do cliente no vetor
            let posicao = this.clientes.findIndex(obj => {
              return obj.codigo == retorno.codigo});

                // Alterar os dados do cliente no vetor
                this.clientes[posicao] = retorno;

                // Limpar formulario
                this.cliente = new Cliente();

                //visibilidade botao / tabela
                this.btnCadastro = true;
                this.tabela = true;

                //mensagem
                alert('Cliente alterado com sucesso!');

        });
  }
  //Método deletar
  deletar():void{
    this.service.deletar(this.cliente)
        .subscribe()

                // Limpar formulario
                this.cliente = new Cliente();

                //visibilidade botao / tabela
                this.btnCadastro = true;
                this.tabela = true;

                //mensagem
                alert('Cliente alterado com sucesso!');

  }

  //Método de cancelar
  cancelar():void{
      // Limpar formulario
      this.cliente = new Cliente();

      //visibilidade botao / tabela
    this.btnCadastro = true;
    this.tabela = true;

  }

  //Metodo de inicializção

  ngOnInit(): void {
    this.selecionar();
  }

}
