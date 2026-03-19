export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  detalhes: string;
  imagem: string;
  linkDemo: string;
  linkCodigo: string;
}

export interface Skill {
  nome: string;
  imagem: string;
  alt: string;
}

export interface Formacao {
  periodo: string;
  instituicao: string;
  titulacao: string;
}
