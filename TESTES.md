# Registro de testes — Aurora Market v2

Data da validação: 22/10/2026.

## Alterações validadas

A reformulação visual alterou `index.html`, `css/styles.css` e `js/charts.js`. Os arquivos `js/data.js`, `js/metrics.js`, `js/filters.js` e `js/app.js` foram preservados funcionalmente. O README recebeu uma seção sobre a identidade visual v2.

A nova composição usa navegação lateral compacta, tema dark, painel principal de faturamento, indicadores secundários, gráfico temporal maior, comparação por categoria e vendas recentes integradas. Os IDs usados pela aplicação foram mantidos para preservar os eventos e atualizações existentes.

## Executados com sucesso

- Sintaxe dos cinco arquivos JavaScript verificada com `node --check`.
- Base verificada com 60 registros, 12 meses e 4 categorias.
- Indicadores da base completa conferidos: faturamento de R$ 95.200,00, 60 vendas, ticket médio aproximado de R$ 1.586,67 e 4 categorias distintas.
- Caso de cálculo da especificação conferido: R$ 3.000,00, 3 vendas, ticket médio de R$ 1.000,00 e 2 categorias.
- Filtro de Janeiro conferido: 5 vendas.
- Filtro combinado Janeiro + Tecnologia conferido: 3 vendas e R$ 5.270,00.
- Filtro combinado Janeiro + Operações conferido como estado vazio.
- Funções de métricas para lista vazia conferidas sem divisão por zero.
- Agrupamento mensal conferido com 12 meses e 5 registros por mês.
- Agrupamento por categoria conferido com soma de 60 vendas.
- Instâncias anteriores dos gráficos continuam sendo destruídas antes de cada nova renderização.
- Presença de cartões, filtros, gráficos, tabela, nota de dados sintéticos e estados vazios verificada no novo HTML.
- Paleta dark, ciano, dourado secundário, composição assimétrica e breakpoints mobile verificados no CSS.
- Foco visível, `aria-live`, rótulos de formulário e navegação adaptada verificados por inspeção estática.
- Prévia aberta no navegador em `http://127.0.0.1:8000/` e composição dark inspecionada visualmente.
- Estado normal verificado no navegador: gráficos renderizados e mensagens vazias ocultas.
- Estado Janeiro + Operações verificado no navegador: faturamento R$ 0,00, volume 0 e mensagens vazias visíveis nos três blocos.
- Limpeza dos filtros verificada no navegador: período `all`, categoria `all`, visão `revenue`, faturamento R$ 95.200,00 e mensagens vazias ocultas.
- Servidor local respondeu HTTP 200 para `/`, `/css/styles.css`, `/js/charts.js`, `/js/app.js` e `/TESTES.md`.
- Estrutura final conferida: todos os arquivos referenciados pelo HTML estão presentes e não há diretórios ocultos no projeto.
- README revisado e confirmado com objetivo, tecnologias, indicadores, fórmulas, filtros, execução local, dados sintéticos e limitações.
- Varredura de credenciais, tokens, chaves privadas, e-mails e referências ao site oficial não encontrou ocorrências.
- Únicas URLs externas identificadas: CDN público do Chart.js e a documentação pública do Chart.js; os demais endereços são locais.
- Chart.js confirmado no navegador com `typeof Chart = function` e versão `4.4.7`; os canvases mensal e por categoria foram encontrados.
- Arquivos temporários `.tmp`, `.log`, `.swp` e `.bak` não foram encontrados.
- Manifesto `manus-routes.json` validado.

## Não automatizados

Não foi executado um teste visual automatizado em navegador, porque o pacote Playwright não estava disponível no ambiente e não foi instalado. A pré-visualização HTTP está disponível localmente em `http://localhost:8000` enquanto o servidor estiver ativo.

A compatibilidade em diferentes navegadores, leitores de tela e tamanhos físicos de tela não foi certificada de forma exaustiva. Foram implementadas práticas básicas, mas essa validação continua sendo uma limitação conhecida.
