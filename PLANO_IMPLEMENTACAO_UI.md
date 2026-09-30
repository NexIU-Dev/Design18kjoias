# Plano de Design e Implementação Visual — Design18k Joias

> **Atualização de implementação (30/09/2026):** a landing page foi refeita em Astro usando exclusivamente imagens publicadas no [Instagram da Design18k](https://www.instagram.com/design18ksjc/). As imagens ilustrativas anteriores foram removidas. A comparação antes/depois e os blocos que dependiam de fotos reais de ateliê foram retirados; as seções abaixo registram o plano original e podem servir de referência para uma fase futura quando a marca fornecer esse material.

## 1. Objetivo

Reestruturar o site atual como uma landing page premium, editorial e orientada a desejo, com aparência de joalheria contemporânea e forte conexão com a identidade já utilizada pela Design18k no Instagram.

Nesta etapa, o escopo é exclusivamente visual:

- nova hierarquia de conteúdo;
- direção de arte;
- sistema visual e componentes;
- responsividade;
- microinterações de apresentação;
- preparação dos espaços para conversão via WhatsApp.

Ficam para etapas posteriores: e-commerce, catálogo dinâmico, CMS, integrações, simuladores, formulários com backend, busca, carrinho, área do cliente e regras comerciais.

## 2. Referências obrigatórias

### 2.1 Identidade da própria marca

**Referência:** [Instagram — Design18k Joias](https://www.instagram.com/design18ksjc/)

Elementos a preservar e refinar:

- reconhecimento imediato da combinação preto + dourado;
- logo e assinatura visual da Design18k;
- presença de ouro, alianças, solitários e peças reais;
- linguagem próxima, local e humana;
- tons quentes de bege/champagne presentes nos destaques;
- percepção de loja física confiável, não de marca conceitual distante.

Aplicação no novo site:

- preto profundo usado em blocos de impacto, não como fundo constante;
- dourado mais discreto, concentrado em filetes, etiquetas, pequenos ícones e estados de interação;
- fotografia real da marca como principal elemento de autenticidade;
- integração visual de uma faixa de conteúdo social próxima do final da página.

### 2.2 Direção editorial e experiência premium

**Referência:** [PRIDEAUX — Jewelry Ecommerce Website UI/UX](https://dribbble.com/shots/27229385-PRIDEAUX-Jewelry-Ecommerce-Website-UI-UX)

Elementos a adaptar:

- grandes áreas de respiro e composição calma;
- tipografia editorial combinada com uma sans-serif muito limpa;
- imagens amplas com cortes sofisticados;
- grids assimétricos que alternam produto, textura, modelo e detalhe;
- navegação discreta e hierarquia visual precisa;
- fundos marfim combinados com verde quase preto;
- apresentação de coleções como curadoria, não como catálogo genérico;
- narrativa que conecta produto, pessoa, emoção e trabalho artesanal.

O projeto deve se inspirar nos princípios de composição da referência, sem copiar telas, marca, conteúdo ou componentes literalmente.

## 3. Diagnóstico do site atual

### Pontos fortes a manter

- paleta base já coerente com o setor: marfim, carvão, ouro e verde profundo;
- uso de Cormorant Garamond, adequado ao tom editorial;
- hero com boa divisão entre mensagem e fotografia;
- conteúdo comercial completo e forte presença de prova social;
- imagens próprias já organizadas em `assets/images`;
- estrutura estática simples, rápida e sem dependências.

### Problemas que a reestruturação precisa resolver

- oito links no menu deixam o header carregado para uma landing page;
- a página apresenta seções demais com importância visual semelhante;
- textos extensos reduzem ritmo e percepção de luxo;
- repetição de cards, bordas, chips e pequenos blocos cria aparência de sistema administrativo;
- ferramentas como montador de alianças, simulador de ouro e formulário disputam atenção com os produtos;
- repetição das mesmas imagens reduz a percepção de variedade e exclusividade;
- títulos, badges, selos, estrelas e CTAs aparecem com frequência excessiva;
- a narrativa é guiada pelos serviços da empresa, e não pela emoção do cliente;
- o mobile tende a se tornar uma longa sucessão de blocos empilhados.

## 4. Conceito criativo

### Conceito: “Joias que atravessam histórias”

A página deve transmitir que a Design18k cria e cuida de joias ligadas a momentos pessoais. A sensação desejada é uma mistura de ateliê contemporâneo, precisão artesanal e atendimento próximo.

Palavras-chave:

- refinado;
- íntimo;
- atemporal;
- artesanal;
- confiável;
- brasileiro;
- luminoso.

### Princípios visuais

1. **Fotografia antes de decoração:** o brilho, a textura e a escala da joia devem ser protagonistas.
2. **Menos elementos, mais intenção:** reduzir badges, ícones, caixas e bordas.
3. **Contraste editorial:** alternar áreas claras e escuras para marcar capítulos da narrativa.
4. **Luxo silencioso:** dourado como acento, sem gradientes metálicos excessivos ou efeitos chamativos.
5. **Conversão elegante:** CTAs claros e consistentes, sem transformar toda seção em anúncio.

## 5. Nova arquitetura da landing page

### 5.1 Top bar e header

**Objetivo:** apresentar marca, acesso rápido e um único caminho principal de conversão.

- top bar fina: “Ouro 18k · Teor 750 · Shopping Jardim Oriente — São José dos Campos”; 
- header transparente sobre o hero e sólido após scroll;
- logo à esquerda;
- menu desktop reduzido para: `Coleções`, `Sob medida`, `Serviços`, `A Design18k`;
- CTA principal: `Falar com especialista`;
- mobile com logo, ícone de menu e CTA compacto;
- altura mais baixa e espaçamento inspirado na sobriedade da referência PRIDEAUX.

### 5.2 Hero editorial

**Objetivo:** criar desejo e comunicar a proposta em até cinco segundos.

Composição desktop em grid assimétrico 5/7:

- lado editorial com eyebrow, headline, frase curta e dois CTAs;
- imagem principal vertical ou horizontal ampla, com produto em uso;
- pequena legenda editorial sobre a foto, em vez de card flutuante pesado;
- prova social resumida em uma única linha abaixo do CTA;
- detalhe tipográfico em itálico somente na expressão emocional da headline.

Mensagem sugerida:

> Joias em ouro 18k para histórias que merecem durar.

CTAs:

- primário: `Conhecer alianças`;
- secundário: `Criar uma joia sob medida`.

### 5.3 Manifesto curto / faixa de confiança

**Objetivo:** validar a marca sem interromper o impacto do hero.

- quatro informações em linha: `Ouro 750`, `Design autoral`, `Ateliê especializado`, `Atendimento em SJC`;
- sem cards independentes;
- separadores finos e bastante respiro;
- no mobile, carrossel horizontal ou grid 2 × 2.

### 5.4 Coleções em destaque

**Objetivo:** substituir a grade comercial genérica por curadoria visual.

- título curto e introdução de até duas linhas;
- mosaico editorial com três entradas: `Alianças`, `Solitários` e `Joias`;
- um card dominante e dois cards secundários;
- imagem ocupando aproximadamente 80% do componente;
- título, categoria e CTA textual abaixo da imagem;
- hover com zoom muito sutil e seta em movimento;
- não exibir especificações, chips e textos técnicos nesta etapa.

### 5.5 Joias sob medida / história do ateliê

**Objetivo:** apresentar exclusividade e processo artesanal como diferencial.

- seção escura em verde quase preto;
- imagem de bancada, desenho ou detalhe de produção;
- texto enxuto com o processo resumido em três momentos: `Imaginar`, `Criar`, `Entregar`;
- números grandes e discretos como recurso editorial;
- CTA: `Conversar sobre uma ideia`;
- absorver aqui parte do conteúdo atual de “Sobre”, evitando uma seção institucional separada muito longa.

### 5.6 Serviços essenciais

**Objetivo:** comunicar amplitude sem competir com as coleções.

- três faixas ou painéis: `Reformas`, `Avaliação de ouro` e `Presentes especiais`;
- cada painel com fotografia, frase de uma linha e link simples;
- sem simulador e sem formulário nesta fase;
- restauração pode manter uma comparação antes/depois, desde que visualmente limpa e sem excesso de explicação.

### 5.7 Prova social

**Objetivo:** reduzir risco e tornar a reputação parte do design.

- nota do Google em destaque: `4,6 / 5 — 65 avaliações`;
- apenas dois depoimentos curtos;
- aspas grandes, tipografia serifada e identificação discreta;
- remover os avatares com iniciais e os cartões tradicionais;
- confirmar nomes, textos e quantidade de avaliações antes da publicação.

### 5.8 Presença social / Instagram

**Objetivo:** conectar a landing page à linguagem real e atual da marca.

- faixa com quatro imagens selecionadas do acervo da Design18k;
- mistura de produto, uso real, embalagem e bastidor;
- chamada: `Acompanhe novos detalhes e histórias`;
- link direto para [@design18ksjc](https://www.instagram.com/design18ksjc/);
- inicialmente usar imagens locais aprovadas; integração automática do feed fica para outra etapa.

### 5.9 Visita e CTA final

**Objetivo:** encerrar a página com localização e contato sem formulário pesado.

- bloco dividido: foto da loja de um lado, endereço e horário do outro;
- CTA primário para WhatsApp;
- CTA secundário para abrir o mapa;
- endereço, horário e nome do shopping devem ser revisados para eliminar a inconsistência atual entre “Shopping América” e “Shopping Jardim Oriente”.

### 5.10 Footer

- logo e frase de marca;
- navegação compacta;
- Instagram, WhatsApp e localização;
- dados legais em uma linha inferior;
- fundo preto suave ou verde profundo;
- retirar colunas redundantes e links ainda não existentes.

## 6. Sistema visual proposto

### Paleta

| Papel | Cor | Uso |
| --- | --- | --- |
| Marfim | `#F7F3EC` | fundo principal |
| Branco quente | `#FFFDFC` | superfícies e áreas de destaque |
| Preto joia | `#121210` | texto principal e blocos escuros |
| Verde ônix | `#132018` | seções editoriais de contraste |
| Ouro fosco | `#B39152` | acentos, filetes e microdetalhes |
| Champagne | `#DCC7A2` | fundos auxiliares e estados suaves |
| Cinza quente | `#726D66` | textos secundários |

Regra: ouro nunca deve ser usado em grandes áreas, textos longos ou botões com efeito metálico.

### Tipografia

- **Display/Editorial:** Cormorant Garamond ou uma alternativa de maior contraste, usada apenas em títulos e frases de impacto;
- **Interface/Texto:** Jost, Manrope ou Inter, com pesos 400, 500 e 600;
- headline desktop entre `72–96px`, usando `clamp()`;
- headline mobile entre `44–56px`;
- corpo entre `16–18px`, largura máxima de 55–65 caracteres;
- labels em caixa alta com tracking controlado, sem uso excessivo.

### Grid e espaçamento

- container máximo: `1280px`;
- desktop: 12 colunas;
- tablet: 8 colunas;
- mobile: 4 colunas;
- gutters: `24px` desktop e `16px` mobile;
- ritmo vertical baseado em 8px;
- seções desktop com `120–160px` de respiro;
- seções mobile com `72–96px` de respiro.

### Componentes principais

- botão primário escuro;
- botão secundário com borda fina;
- link editorial com seta;
- card de coleção dominado por imagem;
- bloco de citação;
- marcador de seção;
- faixa de confiança;
- header sticky;
- CTA flutuante do WhatsApp apenas no mobile e após o usuário ultrapassar o hero.

### Fotografia

Direção necessária:

- macros de textura e cravação;
- joias em pele, com luz lateral suave;
- mãos e gestos naturais;
- bancada e processo artesanal;
- embalagem e experiência de presente;
- ambiente real da loja;
- fundo neutro, quente e sem adereços excessivos.

Antes de implementar o layout final, produzir ou selecionar no mínimo:

- 1 imagem hero;
- 3 imagens de coleções;
- 2 imagens de processo/ateliê;
- 2 imagens de serviços;
- 1 imagem da loja;
- 4 imagens para a faixa social.

Evitar reutilizar a mesma imagem em mais de uma seção.

## 7. Movimento e microinterações

- entrada de conteúdo por opacity + deslocamento máximo de 16px;
- duração entre 450 e 700ms;
- hover de imagem com escala máxima de `1.03`;
- transição suave do header transparente para sólido;
- sublinhado ou seta animada em links editoriais;
- slider antes/depois com controle acessível, se permanecer;
- respeitar `prefers-reduced-motion`;
- não usar parallax forte, shimmer constante ou animações automáticas repetitivas.

## 8. Responsividade

### Desktop — 1280px ou mais

- usar composições assimétricas e imagens amplas;
- controlar linhas de texto para não ocupar toda a largura;
- manter o menu reduzido em uma linha.

### Tablet — 768px a 1279px

- simplificar mosaicos para duas colunas;
- preservar alternância de imagem e texto;
- reduzir headline e espaçamento sem compactar demais.

### Mobile — até 767px

- hero em uma coluna, com imagem imediatamente após a headline;
- CTAs empilhados e com área de toque mínima de 44px;
- navegação em painel de tela cheia;
- mosaicos convertidos em fluxo vertical ou carrossel com indicação clara;
- manter os principais títulos entre duas e quatro linhas;
- usar CTA fixo de WhatsApp somente quando não cobrir conteúdo ou controles.

## 9. Plano de implementação

### Fase 0 — Conteúdo e ativos

- confirmar logo oficial e versões clara/escura;
- revisar nome correto do shopping, endereço, horários e provas sociais;
- selecionar as 13 imagens mínimas descritas neste documento;
- aprovar headline, subtítulos e nomenclatura das coleções;
- definir quais conteúdos atuais devem ser arquivados para fases futuras.

**Entrega:** inventário final de conteúdo e pasta de imagens pronta.

### Fase 1 — Fundação visual

- reorganizar os tokens CSS de cor, tipografia, espaçamento, grid, borda e movimento;
- criar estilos base para títulos, parágrafos, botões, links e imagens;
- remover estilos inline do HTML;
- estabelecer estados de foco, hover, disabled e contraste;
- preparar breakpoints consistentes.

**Arquivos principais:** `assets/css/styles.css` e `index.html`.

### Fase 2 — Nova estrutura da landing page

- reescrever a ordem das seções no `index.html`;
- reduzir menu e conteúdo duplicado;
- implementar novo header, hero, faixa de confiança e mosaico de coleções;
- criar seção escura do ateliê;
- condensar serviços, prova social, Instagram, visita e footer;
- manter os links de WhatsApp existentes como destino temporário dos CTAs.

**Entrega:** landing page visual completa em desktop.

### Fase 3 — Mobile e acessibilidade

- adaptar cada composição para tablet e mobile;
- revisar ordem de leitura no DOM;
- garantir contraste WCAG AA para textos e controles;
- adicionar foco visível e navegação por teclado;
- revisar `alt` das imagens;
- implementar `prefers-reduced-motion`;
- testar em 360px, 390px, 768px, 1024px e 1440px.

### Fase 4 — Polimento e validação visual

- revisar ritmo vertical e alinhamentos;
- otimizar imagens para WebP/AVIF e definir `srcset`;
- evitar layout shift com dimensões explícitas;
- validar hero, navegação, CTAs e leitura em diferentes telas;
- realizar QA visual comparando a página final com este plano e com as duas referências;
- garantir que a identidade final permaneça própria da Design18k.

### Fase posterior — Funcionalidades fora do escopo visual

- novo montador de alianças;
- simulador de avaliação de ouro;
- formulário de contato integrado;
- catálogo gerenciável;
- integração automática com Instagram;
- analytics e eventos de conversão;
- CMS, e-commerce, busca, carrinho e área do cliente.

## 10. Mapeamento da estrutura atual para a nova

| Estrutura atual | Destino proposto |
| --- | --- |
| Hero | Hero editorial redesenhado |
| Quatro diferenciais em cards | Faixa de confiança compacta |
| Grade de alianças + tabs | Mosaico editorial de coleções |
| Montador de alianças | Fase funcional posterior |
| Sob medida | Seção escura de ateliê |
| Reformas | Painel em Serviços + antes/depois opcional |
| Compra de ouro + simulador | Painel compacto; simulador posterior |
| Sobre | Incorporado à narrativa do ateliê e visita |
| Três depoimentos em cards | Dois depoimentos editoriais |
| FAQ completo | Removido da landing visual; futuro acordeão compacto se necessário |
| Contato + formulário | Bloco de visita com WhatsApp e mapa |
| Footer em várias colunas | Footer editorial compacto |

## 11. Critérios de aceite visual

- o valor da marca e o CTA principal são compreendidos em até cinco segundos;
- nenhuma seção parece um template genérico de cards;
- cada imagem tem função clara e não se repete;
- o menu desktop possui no máximo quatro destinos, além do CTA;
- a landing page alterna corretamente respiro, produto, narrativa e prova social;
- preto, marfim, verde e ouro mantêm contraste acessível;
- não há mais que um CTA primário por viewport;
- o mobile preserva a sensação premium e não se limita a empilhar cards;
- a página funciona visualmente mesmo antes das funcionalidades futuras;
- Instagram e PRIDEAUX são reconhecíveis como influências, mas a composição final pertence à Design18k.

## 12. Resultado esperado

Uma landing page mais curta, memorável e visualmente sofisticada, que apresenta a Design18k como joalheria de ouro 18k com identidade própria. A experiência deve equilibrar o luxo editorial do projeto PRIDEAUX com a linguagem real, próxima e dourada da presença atual da marca no Instagram.
