# nlw3
Next Level Weekend #3 Rocketseet

Projeto desenvolvido durante a semana NLW3

Dia 1 - Commit inicial, entendendo a estrutura.

Dia 2 - Criação da página que demonstra os orfanatos através de um mapa pelo Leaflet, criação da página quando clica para abrir um orfanato onde mostra fotos, descrição, localização, instruções de visita, adicionado troca de fotos dinâmica com javascript, desenvolvido todo estilo css de modo a respeitar a proposta de layout, adicionado redirecionamentos index para visão geral de orfanatos, página do orfanato em si.

Dia 3 - Adicionado nova página create para cadastrar um novo orfanato, adicionado formulário para cadastro com o .css correspondente ao estilo da página proposto no figma, adicionado parte javascript no front para deixar o formulário seguindo uma lógica de cadastro coerente e para indicar posição no mapa para dar senso de localização ao orfanato cadastrado.

Dia 4 - Instalado node.js, instalado gitbash e acoplado ao vscode de modo a utilizar terminal para utilizar bibliotecas/dependencias. Alterado estrutura de pastas para fazer sentido no backend. Criação do servidor, instalação de módulos (express para rotas, nodemon para restart do server de modo dinamico e handlebars para utilizar utilizar template engine no html), criado dados fakes para utilizar o conceito de arquivos dinâmicos e handlebars para renderizar icons no mapa buscando dos dados fake cadastrados.

Dia 5 - Adicionado estrutura do banco de dados. Banco de dados utilizado SQLITE. Utilizado documento de testes para aprender a lógica da rotina do async/await, adicionado validação try/catch para criar as verificações das rotinas do banco de dados para caso der erros, adicionado handlebars para passar as informações do backend (buscando do database) para o frontend de modo dinâmico, adicionado nova rota .post para criação de um novo orfanato, revisões extras. (2 desafios - if ternário no pages.js / validação para não criar novo orfanato caso não tenha sido selecionado ponto no mapa no script/page-create-orphanages.js
