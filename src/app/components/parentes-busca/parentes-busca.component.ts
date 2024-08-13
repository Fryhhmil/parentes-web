import { Component, OnInit } from '@angular/core';
import { ParentesService } from 'src/app/service/parentes.service';
import { ParenteDTO, Parente } from 'src/app/models/Parentes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parentes-busca',
  templateUrl: './parentes-busca.component.html',
  styleUrls: ['./parentes-busca.component.css']
})
export class ParentesBuscaComponent implements OnInit {

  parentes?: Parente[];
  nome: String = '';
  parente?: Parente;


  constructor(private service: ParentesService, private router: Router){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.selecionar();
  }

  //Médoto de seleção
  selecionar():void{
    if(this.nome != ''){
      this.service.buscarNome(this.nome)
      .subscribe(retorno => this.parentes = retorno);
    }else{
      this.service.selecionar()
      .subscribe(retorno => this.parentes = retorno);
    }
  }

  //Método para selecionar um cliente em especifico
  selecionarCliente(posicao:number):void{
    //selecionar cliente no vetor
    this.parente = this.parentes![posicao];
    this.router.navigate(['/inspecionar/'+this.parente.id]);
  }

}
