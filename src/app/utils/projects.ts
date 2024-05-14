import IProject from "../interfaces/IProject";

const projects: IProject[] = [
  {
    title: 'Germinne',
    tech: 'React, ContextAPI, mdb-react-ui-kit, formspree',
    description: 'A Germinne é uma plataforma que busca revolucionar a relação das pessoas com a agricultura urbana. Nosso objetivo principal é tornar o cultivo de hortas acessível, inclusivo e prazeroso para todos, independentemente do espaço disponível ou do conhecimento prévio sobre horticultura. Buscamos promover um estilo de vida mais saudável e sustentável, incentivando a conexão com a natureza no ambiente urbano.',
    repo: 'https://github.com/moutim/plataforma-germinne',
    deploy: 'https://germinne.com.br/',
  },
  {
    title: 'API Case PSEL XP Inc.',
    tech: 'ExpressJS, Sequelize, MySQL, Docker, CI/CD, JWT, Swagger',
    description: 'Esta aplicação simula um ambiente de corretora para investimentos em ações, desenvolvida como parte de um processo seletivo para a XP Inc. Após o cadastro ou login, você receberá um token de autorização para acessar e gerenciar ações e contas de clientes.',
    repo: 'https://github.com/moutim/case-psel-xp-backend',
    deploy: 'https://api-case.onrender.com/documentation/',
  },
  {
    title: 'Stats Spotify',
    tech: 'Angular, Angular Material, Spotify API',
    description: 'Este projeto utiliza a API do Spotify para fornecer estatísticas personalizadas sobre a sua atividade musical. Com base na sua conta do Spotify, você poderá visualizar os artistas mais escutados, as músicas mais reproduzidas e criar playlists com suas faixas mais ouvidas em diferentes períodos de tempo, como um mês, seis meses ou em toda a sua história no Spotify.',
    repo: 'https://github.com/moutim/angular-stats-spotify',
    deploy: 'https://angular-stats-spotify.vercel.app/',
  },
  {
    title: 'Desafio MKS Desenvolvimento',
    tech: 'NestJS, TypeORM, Docker, Swagger, Postgresql, JWT',
    description: 'Projeto desenvolvido em um teste técnico para a empresa MKS desenvolvimento de sistemas. A aplicação consiste em uma API para cadastro de uma catálogo de filmes.',
    repo: 'https://github.com/moutim/desafio-mks-psel',
    deploy: 'https://desafio-mks-psel.onrender.com/API',
  },
  {
    title: 'Dungeons And Dragons',
    tech: 'C#, OPP',
    description: 'Este é um jogo simples baseado em texto desenvolvido em C# usando programação orientada a objetos. No jogo, você explora uma masmorra cheia de desafios, inimigos e tesouros.',
    repo: 'https://github.com/moutim/Dungeon-And-Dragons',
    deploy: 'https://github.com/moutim/Dungeon-And-Dragons',
  },
  {
    title: 'API RESTful para site de filmes',
    tech: 'ASP.NET, Entity Framework, AWS',
    description: 'Projeto de uma API RESTful desenvolvida utilizando ASP.NET e Entity Framework para um site de filmes. A API permite o gerenciamento de usuários, filmes vistos e lista de Watchlist. O banco de dados é hospedado em uma instância AWS com MySQL e o deploy está feito em ambiente dockerizado.',
    repo: 'https://github.com/moutim/ASP.NET-API-Filmes',
    deploy: 'https://asp-net-api-filmes.onrender.com/swagger/index.html',
  },
  {
    title: 'Gerador de ficha criminal',
    tech: 'Angular, TypeScript',
    description: 'Este é um projeto desenvolvido utilizando Angular e Angular Material para a criação de uma ficha de identificação criminal a partir de um formulário de informações. A aplicação faz uso da API do IBGE para buscar estados e municípios, e da API do VIACEP para buscar endereços a partir do CEP. Além disso, a aplicação gera um arquivo PDF automaticamente com os dados inseridos no formulário.',
    repo: 'https://github.com/moutim/gerador-identificacao-criminal-pdf',
    deploy: 'https://identificacao-criminal.vercel.app/',
  },
  {
    title: 'Formas Geométricas',
    tech: 'React, CSS',
    description: 'Este é um projeto em React, JavaScript e CSS que permite calcular a área de diferentes formas geométricas. O projeto usa componentes funcionais e hooks para gerenciar o estado e os eventos.',
    repo: 'https://github.com/moutim/formasGeometricas',
    deploy: 'https://formas-geometricas.vercel.app/',
  },
  {
    title: 'Daily Bugle - PROA',
    tech: 'HTML/CSS',
    description: 'O Daily Bugle é um portal de notícias que oferece uma variedade de artigos informativos sobre os últimos lançamentos, atualizações e novidades no universo do entretenimento. Seja você fã de filmes, jogos, séries ou livros, o Daily Bugle é o seu destino único para se manter informado.',
    repo: 'https://github.com/moutim/Daily-Bugle-PROA',
    deploy: 'https://moutim.github.io/Daily-Bugle-PROA/',
  },
];

export default projects;
