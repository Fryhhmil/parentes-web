import { Component, OnInit } from '@angular/core';
import { ParentesService } from 'src/app/service/parentes.service';
import { Parente } from 'src/app/models/Parentes.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inspecionar-parentes',
  templateUrl: './inspecionar-parentes.component.html',
  styleUrls: ['./inspecionar-parentes.component.css']
})

export class InspecionarParentesComponent implements OnInit {

  parente!: Parente;
  id!: Number;

  constructor(private service: ParentesService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['_id'];
    this.selecionar();

  }

  //Médoto de seleção
  selecionar():void{
    if(this.id != null){
      this.service.buscarId(this.id)
      .subscribe(retorno => this.parente = retorno);
    }else{

    }
  }

}
