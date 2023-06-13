# Módulo de cadastro e busca

## Equipe

- Anderson Lima
- Antony Araújo
- Bianca Santana
- Laercio Rios

## Descrição do Projeto

Este projeto é uma aplicação web para cadastro de resoluções do CONSU/CONSEPE da UEFS (Universidade Estadual de Feira de Santana). Através dessa aplicação, os usuários podem preencher um formulário com informações sobre as resoluções, anexar um arquivo .zip contendo as resoluções digitalizadas e enviar os dados para serem processados.

## Cadastro

- Preenchimento do formulário de cadastro de resoluções:

  - Ano da resolução: O usuário pode inserir o ano da resolução através de um campo numérico.
  - Conselho: O usuário pode selecionar o conselho ao qual a resolução pertence (CONSU ou CONSEPE) através de um grupo de botões de rádio.
  - Resolução digitalizada: O usuário pode anexar um arquivo .zip contendo as resoluções digitalizadas através de um botão de upload.

- Upload do arquivo .zip:

  - O arquivo .zip é enviado para o serviço SmashUploader, que realiza o upload dos arquivos para um serviço de armazenamento na nuvem (AWS S3).

- Envio dos dados:
  - Após o upload do arquivo .zip, os dados do formulário e o link para o arquivo armazenado são enviados para um módulo de gerenciamento de usuários, que registra a ação do usuário e o timestamp.
  - Os dados também são enviados para um módulo de extração de informações, onde o link do arquivo é utilizado para extrair as resoluções em formato PDF.
  - Por fim, os dados extraídos são enviados para um módulo de armazenamento, que cadastra as novas resoluções no banco de dados. As informações são enviadas no formato de um JSON com os campos número, ano, data, reitor, cabeçalho, texto, link e email do usuário que cadastrou a resolução.

## Login

O componente `Login` é responsável por exibir um formulário de login e autenticar o usuário. Ele possui os seguintes recursos:

- Campos de entrada para o email e senha do usuário.
- Opção para mostrar/esconder a senha.
- Validação de login inválido e exibição de mensagem de erro.
- Botão de submit para enviar as credenciais e realizar a autenticação.

**Aviso**: Deve-se alterar a url da constante `authApi`do arquivo `api.ts`para a url do módulo back-end de autenticação dos usuários.

## Search

O componente `Search` permite que o usuário faça buscas por resoluções. Ele possui os seguintes recursos:

- Campo de entrada para palavras-chave.
- Campos de entrada para selecionar uma data de início e uma data final.
- Botão de busca para realizar a pesquisa.
- Opções de filtro por órgão (CONSUL e CONSEPE).
- Exibição dos resultados da busca em uma tabela, mostrando o ano, órgão, descrição, número e um link para a resolução.

**Aviso**: Deve-se alterar a url da constante `api`do arquivo `api_busca.ts`para a url do módulo back-end de busca de resoluções.

**Certifique-se de fornecer as informações de configuração corretas para a API de autenticação, como a URL correta para a rota de busca. Para ser mais fácil achar esses pontos, basta pesquisar o termo `FIXME` nos arquivos.**

## Tecnologias Utilizadas

- Next.js: Um framework React para criação de aplicações web.
- Chakra UI: Uma biblioteca de componentes de interface do usuário para React.
- Smash SDK: Uma biblioteca para upload de arquivos para serviços de armazenamento na nuvem.

## Instalação e Execução

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório do projeto: `buscador-resolucoes-front`.
3. Instale as dependências do projeto: `npm install` ou `yarn`.
4. Execute o projeto: `npm run dev` ou `yarn dev`.
5. Acesse a aplicação em seu navegador através do endereço: `http://localhost:3000`.
