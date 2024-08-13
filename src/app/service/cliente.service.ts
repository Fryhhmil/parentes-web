import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from "../models/Cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url da api
  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  //Metodo para selecionar todos os clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  //Método para cadastrar clientes
  cadastrar(obj: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url,obj);
  }

  //Método para atualizar clientes
  atualizar(obj: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url,obj);
  }

  //Método para deletar clientes
  deletar(obj: Cliente):Observable<Cliente>{
    return this.http.delete<Cliente>(this.url+"/"+obj.codigo);
  }
}
