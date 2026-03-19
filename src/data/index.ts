import { Projeto, Skill, Formacao } from '../types';

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: 'Projeto Cordel',
    descricao: 'Uma forma moderna de apresentar poesia utilizando HTML e CSS.',
    detalhes:
      'Projeto Cordel Moderno é uma página web responsiva inspirada na literatura de cordel, desenvolvida com HTML e CSS. O projeto utiliza efeitos visuais com imagens de fundo, tipografia personalizada e layout adaptável para diferentes tamanhos de tela, proporcionando uma leitura agradável e moderna.',
    imagem: '/imagens/projeto cordel.jpg',
    linkDemo: 'https://giliarder1994.github.io/projeto-cordel-moderno/',
    linkCodigo: 'https://github.com/giliarder1994/projeto-cordel-moderno',
  },
  {
    id: 2,
    titulo: 'Projeto Android',
    descricao: 'Conheça a história do Android apresentada em formato de site informativo.',
    detalhes:
      'O Projeto Android é uma página web informativa desenvolvida com HTML5 e CSS3, que apresenta a história do mascote do Android de forma organizada, visual e responsiva. O projeto simula um artigo de tecnologia, com imagens, vídeo incorporado e layout adaptável para diferentes dispositivos.',
    imagem: '/imagens/projeto android.jpg',
    linkDemo: 'https://giliarder1994.github.io/projeto-android/',
    linkCodigo: 'https://github.com/giliarder1994/projeto-android',
  },
  {
    id: 3,
    titulo: 'Relógio Digital',
    descricao: 'Projeto simples para praticar JavaScript com atualização dinâmica.',
    detalhes:
      'O Projeto Relógio Digital é uma aplicação web desenvolvida com HTML, CSS e JavaScript, que exibe a hora atual em tempo real. O relógio é atualizado automaticamente a cada segundo e possui um layout simples, moderno e responsivo.',
    imagem: '/imagens/projeto relogio digital.jpeg',
    linkDemo: 'https://giliarder1994.github.io/relogio-digital/',
    linkCodigo: 'https://github.com/giliarder1994/relogio-digital',
  },
  {
    id: 4,
    titulo: 'Projeto Tela de Login / Newsletter',
    descricao: 'Interface simples para cadastro de e-mail com alternância de tema.',
    detalhes:
      'O Projeto Tela de Login / Newsletter é uma página web desenvolvida com HTML, CSS e JavaScript, que simula um formulário de inscrição em newsletter. O projeto possui tema claro e escuro, layout responsivo e interação dinâmica com o usuário.',
    imagem: '/imagens/Projeto tela de login.jpeg',
    linkDemo: 'https://giliarder1994.github.io/projeto-layout-entrada/',
    linkCodigo: 'https://github.com/giliarder1994/projeto-layout-entrada',
  },
  {
    id: 5,
    titulo: 'Projeto Buscar Usuários',
    descricao: 'Projeto que consome uma API e filtra dados dinamicamente.',
    detalhes:
      'O Projeto Buscar Usuários é uma aplicação web desenvolvida com HTML, CSS e JavaScript, que consome dados de uma API e permite realizar busca em tempo real por nome. O projeto exibe feedback visual de carregamento e resultados de forma clara e organizada.',
    imagem: '/imagens/projeto lista de usuarios.jpeg',
    linkDemo: 'https://giliarder1994.github.io/Buscar-Usuarios-API-/',
    linkCodigo: 'https://github.com/giliarder1994/Buscar-Usuarios-API-',
  },
  {
    id: 6,
    titulo: 'Projeto Jogo da Velha (Tic Tac Toe)',
    descricao: 'Um projeto prático para aplicar lógica de programação e JavaScript.',
    detalhes:
      'Projeto de Jogo da Velha desenvolvido com HTML, CSS e JavaScript, permitindo partidas entre dois jogadores ou contra uma IA simples, com controle de jogadas, verificação automática de vitória e placar em tempo real.',
    imagem: '/imagens/projeto jogo da velha.jpeg',
    linkDemo: 'https://giliarder1994.github.io/projeto-jogo-da-velha/',
    linkCodigo: 'https://github.com/giliarder1994/projeto-jogo-da-velha',
  },
  {
    id: 7,
    titulo: 'Projeto Redes Sociais',
    descricao: 'Confira os detalhes deste projeto e as tecnologias utilizadas.',
    detalhes:
      'O Projeto Redes Sociais é um projeto que simula a navegação entre redes sociais dentro da tela de um smartphone, utilizando HTML e CSS para criar uma experiência visual interativa.',
    imagem: '/imagens/projeto links.jpeg',
    linkDemo: 'https://giliarder1994.github.io/projeto-rede-sociais/',
    linkCodigo: 'https://github.com/giliarder1994/projeto-rede-sociais',
  },
];

export const skills: Skill[] = [
  { nome: 'HTML5', imagem: '/imagens/html.webp', alt: 'HTML5' },
  { nome: 'CSS3', imagem: '/imagens/css.webp', alt: 'CSS3' },
  { nome: 'JavaScript', imagem: '/imagens/js.webp', alt: 'JS' },
  { nome: 'TypeScript', imagem: '/imagens/typescript.webp', alt: 'TS' },
  { nome: 'React', imagem: '/imagens/react-2.png', alt: 'REACT' },
  { nome: 'Git', imagem: '/imagens/git.webp', alt: 'Git' },
  { nome: 'Node.JS', imagem: '/imagens/nodejs.webp', alt: 'Node' },
  { nome: 'Express', imagem: '/imagens/express.png', alt: 'Express' },
  { nome: 'MySQL', imagem: '/imagens/mysql.webp', alt: 'MySQL' },
];

export const formacoes: Formacao[] = [
  {
    periodo: '2025 - 24.5hrs',
    instituicao: 'Udemy',
    titulacao: 'JavaScript do básico ao avançado',
  },
  {
    periodo: '2026 - Cursando',
    instituicao: 'Estácio',
    titulacao: 'Engenharia de Software',
  },
];
