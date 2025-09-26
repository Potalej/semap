# semap 📚
Site da Semana da Matemática Aplicada (SEMAP) no IME-USP!

Visualização temporária enquanto sob desenvolvimento: [https://semap.ime.usp.br/previa](https://semap.ime.usp.br/previa).

lets que lets

## Páginas que o site precisa ter

- **Início**: Informações principais, identidade visual, datas, contato, links para outras páginas.
- **Minicursos**: Listar minicursos incluindo título, sobre o professor, resumo, datas/horários, formulário de inscrição se for o caso.
- **Palestras**: Listar palestras incluindo título, sobre o palestrante, resumo, datas/horários.
- **Pôsteres (?)**: Página com informações sobre a sessão de pôsteres e um formulário para a inscrição se for o caso.
- **Programação**: Listagem da programação completa, parecida com a tabela do Google Sheets se pá.

## Atualizando informações "dinâmicas"

Algumas informações como palestras, minicursos, programação, descrições e tal podem ser alteradas em algum dos arquivos do diretório ["_data"](https://github.com/Potalej/semap/tree/main/_data).

Uma vez atualizado e salvo o arquivo aqui no repositório, um GitHub Action será disparado para compilar o site, e em seguida outro será disparado para atualizar o site na Rede IME. Isso deve levar menos de 3 minutos. Passado isso, só conferir no site se as informações foram atualizadas e se deu tudo certo.

Para mudar o ano, só atualizar a propriedade "ano" no [config.yml](https://github.com/Potalej/semap/blob/main/_config.yml). É importante que o ano esteja entre aspas, se não não vai funcionar.