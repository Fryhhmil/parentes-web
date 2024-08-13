import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parente, ParenteDTO } from '../models/Parentes.model';

@Injectable({
  providedIn: 'root'
})
export class ParentesService {

  //Url da api
  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

    // Metodo para buscar parentes pelo nome
    buscarNome(termo: String):Observable<Parente[]>{
      return this.http.get<Parente[]>(this.url+"/parente/buscar-nome/"+termo);
    }

    // Metodo para selecionar todos os parentes
    selecionar():Observable<Parente[]>{
      return this.http.get<Parente[]>(this.url+"/parente/listar-todos");
    }

    // Metodo para buscar parentes pelo id
    buscarId(id: Number):Observable<Parente>{
      return this.http.get<Parente>(this.url+"/parente/buscar/"+id);
    }
}
