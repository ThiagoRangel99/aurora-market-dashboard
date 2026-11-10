# Aurora Market — Dashboard de vendas

Demonstração independente de Business Intelligence para uma empresa fictícia de comércio de produtos e serviços fictícios. O projeto foi criado para estudo e portfólio, sem conexão com o site oficial, sistemas corporativos ou dados reais.

> **Aviso:** todos os nomes, produtos, datas e valores deste projeto são sintéticos.

**Demo:** [thiagorangel99.github.io/aurora-market-dashboard](https://thiagorangel99.github.io/aurora-market-dashboard/) · **Portfólio:** [thiagorangel99.github.io](https://thiagorangel99.github.io/)

## Experiência

O visitante pode filtrar uma base de 60 vendas por mês e categoria. Os quatro indicadores, os dois gráficos e a tabela usam a mesma base e são atualizados pelo mesmo recorte. O controle **Visão dos gráficos** alterna entre faturamento e quantidade de vendas sem mudar o significado dos cartões ou da tabela.

## Identidade visual v2

A versão atual utiliza uma linguagem dark de produto SaaS: fundo azul-marinho profundo, painéis em camadas de azul, ciano para dados e interações e dourado apenas como detalhe secundário. O faturamento ocupa o painel principal, a evolução mensal recebe mais espaço, a comparação por categoria fica em um painel complementar e as vendas recentes aparecem integradas à composição. A navegação lateral se adapta para uma barra compacta em telas menores.

## Tecnologias

- HTML semântico
- CSS responsivo, sem framework
- JavaScript em arquivos separados
- [Chart.js 4.4.7](https://www.chartjs.org/) via CDN para os gráficos

## Estrutura

- `index.html`: estrutura semântica, filtros, cartões, gráficos e tabela.
- `css/styles.css`: identidade visual e responsividade.
- `js/data.js`: aproximadamente 60 registros de vendas sintéticos.
- `js/metrics.js`: fórmulas, agrupamentos e formatação.
- `js/filters.js`: aplicação e limpeza dos filtros.
- `js/charts.js`: criação e atualização dos gráficos Chart.js.
- `js/app.js`: coordenação dos eventos e atualização da interface.

## Indicadores e fórmulas

- **Faturamento:** soma dos valores das vendas filtradas.
- **Quantidade de vendas:** quantidade de registros filtrados.
- **Ticket médio:** faturamento dividido pela quantidade de vendas. Quando não há vendas, o resultado é R$ 0,00.
- **Categorias distintas:** quantidade de categorias únicas nos registros filtrados.

## Filtros

- **Período:** todos os meses ou um dos doze meses da base.
- **Categoria:** todas as categorias ou uma categoria específica.
- **Visão dos gráficos:** faturamento ou quantidade de vendas.
- **Limpar filtros:** restaura Todos os meses, Todas as categorias e Faturamento.

Quando não há registros, os cartões mostram zero, os gráficos exibem uma mensagem e a tabela informa que nenhuma venda foi encontrada.

## Como executar localmente

A forma recomendada é abrir um servidor HTTP local na pasta do projeto:

```bash
cd aurora-market-dashboard
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000` no navegador. O arquivo `index.html` também pode ser aberto diretamente, mas o servidor local evita restrições do navegador relacionadas a scripts locais.

## Teste manual sugerido

1. Abra a página com os filtros no estado inicial.
2. Confirme que há 60 vendas na base e que a tabela é preenchida.
3. Escolha Janeiro: devem aparecer 5 vendas.
4. Escolha a categoria Tecnologia: Janeiro deve mostrar 3 vendas.
5. Alterne a visão para Quantidade de vendas e confirme que os dois gráficos mudam de métrica.
6. Combine um mês e uma categoria e confira cartões, gráficos e tabela.
7. Combine Janeiro com Operações: não há vendas nesse recorte e os estados vazios devem aparecer.
8. Clique em Limpar filtros e confirme o retorno ao estado inicial.

### Caso de cálculo verificável

Para os registros de teste abaixo, as funções de cálculo devem retornar os resultados indicados:

| Categoria | Valor |
|---|---:|
| Tecnologia | R$ 1.000,00 |
| Serviços | R$ 1.500,00 |
| Tecnologia | R$ 500,00 |

- Faturamento: R$ 3.000,00
- Quantidade de vendas: 3
- Ticket médio: R$ 1.000,00
- Categorias distintas: 2
- Tecnologia: R$ 1.500,00 em 2 vendas
- Serviços: R$ 1.500,00 em 1 venda

## Limitações conhecidas

- A base é estática e não representa uma operação real.
- Não há backend, autenticação, persistência de filtros ou atualização em tempo real.
- Os gráficos dependem do carregamento do Chart.js pelo CDN; uma conexão de rede é necessária para renderizar os gráficos.
- A tabela não possui paginação nem ordenação nesta primeira versão.
- Não há modo TV, visitas, pendências ou integração com o portfólio nesta etapa.
- A validação foi feita localmente; diferentes navegadores e leitores de tela podem apresentar diferenças.

## Melhorias futuras

- Empacotar o Chart.js localmente para permitir uso totalmente offline.
- Adicionar ordenação e paginação à tabela.
- Adicionar testes automatizados das funções de métricas.
- Criar uma seção de documentação visual do projeto para o portfólio.
- Considerar modo TV somente após validação do MVP.
