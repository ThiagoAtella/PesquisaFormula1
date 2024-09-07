Visão Geral
Este projeto é um site simples que permite aos usuários pesquisar informações sobre pilotos da Fórmula 1. A interface oferece um campo de pesquisa e um botão, onde o usuário pode digitar o nome ou descrição de um piloto para visualizar os resultados correspondentes. O projeto é dividido em três arquivos principais: index.html, style.css, e app.js.# PesquisaFormula1
Programa para pesquisar determinados pilotos da F1. Criado por Thiago Atella de Freitas estudante do ISERJ
/
├── index.html   # Arquivo HTML principal do projeto
├── style.css    # Estilos para o layout e design do site
└── app.js       # Lógica de busca e manipulação de dados
Arquivos
index.html:

Define a estrutura básica do site, incluindo o cabeçalho, o campo de pesquisa, o botão de pesquisa, e uma área para exibir os resultados da pesquisa.
Referências para o arquivo de estilo style.css e os scripts JavaScript (app.js e dados.js).
Contém um rodapé com informações sobre o autor e a data de criação.
style.css:

Estiliza o layout do site, incluindo o corpo da página, títulos, campos de input, botões e a área de resultados.
Inclui regras de responsividade, ajustando o design para telas menores (como tablets e celulares).
Usa a fonte "Chakra Petch" para uma aparência moderna.
app.js:

Lida com a funcionalidade de pesquisa. A função pesquisar() captura o termo inserido pelo usuário, verifica se ele corresponde a algum piloto pré-definido, e exibe os resultados na página.
Os pilotos são armazenados em um array (provavelmente no arquivo dados.js, que deve ser fornecido com os dados dos pilotos).
Se não houver correspondência para a pesquisa, uma mensagem de "Nenhum resultado encontrado" é exibida.
Como Executar
Pré-requisitos: Um navegador moderno que suporte JavaScript.
Passos:
Baixe todos os arquivos (index.html, style.css, app.js e dados.js).
Abra o arquivo index.html em um navegador da web.
Utilize o campo de pesquisa para buscar informações sobre pilotos da Fórmula 1.
Futuras Melhorias
Adicionar uma base de dados dinâmica para inserir novos pilotos.
Expandir as funcionalidades, permitindo a filtragem por categorias como equipe, país, etc.
Melhorar a interface para exibir mais detalhes sobre os pilotos.
Autor
Este site foi criado por Thiago Atella de Freitas, estudante do ISERJ, em 5 de setembro de 2024.
