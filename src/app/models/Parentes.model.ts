export enum TipoParente {
  MAE = 'mãe',
  PAI = 'pai',
  TIO = 'tio',
  TIA = 'tia',
  AVOH = 'avô',
  AVOF = 'avó'
}

export interface ParenteDTO {
  id: number;
  nome: string;
  tipo: TipoParente;
  foto: ArrayBuffer[];
  telefones: string[];
  idsAluno: number[];
}

export interface Parente {
  id: number;
  nome: string;
  tipo: TipoParente;
  foto: ArrayBuffer[];
  telefones: Telefone[];
  alunos: Aluno[];
  reviews: Review[];
}

export interface Aluno {
  id: number;
  nome: string;
  foto: ArrayBuffer[]; // ou ArrayBuffer, dependendo do tipo de dado
  parente: Parente[];
  user: String;
}

export interface Telefone {
  id: number;
  numero: String;
  parente: Parente;
}

export interface Review {
  id: number;
  comentario: String;
  parente: Parente;
  aluno: Aluno;
}

