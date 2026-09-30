# Guia de Personalização — Design18k Joias

> **Arquivo histórico:** este guia descreve a versão anterior em HTML. A landing page atual usa Astro; consulte o [README](README.md) e o [plano de implementação](PLANO_IMPLEMENTACAO_UI.md) para os caminhos e o escopo atuais. As referências a `index.html`, `assets/css` e `assets/js` abaixo não se aplicam mais.

Tudo o que precisa ser trocado, conferido ou fornecido antes de o site ir ao ar.

**Como localizar os pontos editáveis:** busque por `[EDITAR` no `index.html` (Ctrl+F). Não use números de linha como referência, porque eles mudam a cada edição.

---

## 1. Checklist de materiais

| # | Item | Quem fornece | Status |
| :-: | :--- | :--- | :-: |
| 1 | Logo em SVG: versão para fundo claro **e** versão para fundo escuro | Cliente | ☐ |
| 2 | Favicon 32×32 e ícone Apple 180×180 (PNG) | Designer | ☐ |
| 3 | Fotos de produto, uma por peça anunciada | Cliente | ☐ |
| 4 | Fotos de ambiente: loja, bancada, balança | Cliente | ☐ |
| 5 | Par antes/depois de uma restauração real | Cliente | ☐ |
| 6 | Instagram e Facebook (usuário ou URL) | Cliente | ☐ |
| 7 | CNPJ e razão social | Cliente | ☐ |
| 8 | Horários: semana, domingo, feriados e fim de ano | Cliente | ☐ |
| 9 | Link da ficha no Google (CID do Google Meu Negócio) | Cliente | ☐ |
| 10 | Três depoimentos reais do Google, com autorização | Cliente | ☐ |
| 11 | Prazo de produção e condições de parcelamento | Cliente | ☐ |
| 12 | Texto da Política de Privacidade (LGPD) | Cliente / jurídico | ☐ |

---

## 2. Marcadores no código

| Marcador | Onde fica | O que colocar |
| :--- | :--- | :--- |
| `[EDITAR_INSTAGRAM]` | Rodapé, redes sociais | Usuário do Instagram, sem o `@` |
| `[EDITAR_FACEBOOK]` | Rodapé, redes sociais | Usuário ou ID da página |
| `[EDITAR_CNPJ: ...]` | Rodapé, linha de direitos | CNPJ formatado `00.000.000/0001-00` |
| `[EDITAR_GOOGLE_CID]` | Seção Depoimentos | CID numérico da ficha no Google Maps |
| `[EDITAR: 7 a 15 dias úteis]` | FAQ, pergunta 3 | Prazo real do atelier |
| `[EDITAR: 10x ou 12x sem juros]` | FAQ, pergunta 5 | Parcelamento real |
| `<!-- [EDITAR]: Horário... -->` | Seção Contato | Horário completo, igual ao do Schema.org no `<head>` |
| `<!-- [EDITAR]: Foto... -->` | Ao lado de cada `<img>` | Ver seção 3 |

> Ao terminar, a busca por `[EDITAR` no `index.html` deve retornar **zero** resultados.

---

## 3. Imagens

### Arquivos e especificações

Todas ficam em `assets/images/`. Se você mantiver o nome do arquivo, não precisa mexer no código.

| Arquivo | Onde aparece | Proporção | Tamanho mínimo | Conteúdo |
| :--- | :--- | :-: | :-: | :--- |
| `hero-aliancas.jpg` | Hero (primeira dobra) | 20:17 | 1600×1360 | Par de alianças em destaque |
| `colecao-aliancas.jpg` | Card "Aliança Clássica" | 1:1 | 1000×1000 | A aliança do card |
| `design-autoral.jpg` | Sob Medida | 4:5 | 1000×1250 | Esboço técnico ou peça em produção |
| `ourives-restauracao.jpg` | Reformas, destaque bancada | 4:3 | 1000×750 | Ourives trabalhando |
| `restauracao-antes.jpg` | Slider antes/depois | 4:3 | 1200×900 | Peça desgastada |
| `restauracao-depois.jpg` | Slider antes/depois | 4:3 | 1200×900 | **A mesma peça**, mesmo ângulo e enquadramento |
| `compramos-ouro.jpg` | Compra de ouro | 16:9 | 1200×675 | Balança de precisão |
| `loja-ambiente.jpg` | Sobre | 4:5 | 1000×1250 | Balcão ou fachada da loja |

**Pendente:** os cards "Solitário Aurora" e "Aliança Fiammetta" reaproveitam fotos de outras seções. Crie `solitario-aurora.jpg` e `alianca-fiammetta.jpg` e atualize o `src` desses dois cards.

### Padrão de qualidade

- **Formato:** WebP com qualidade entre 80 e 85, até **200 KB** por foto (o hero pode chegar a 300 KB). Mantenha um JPG de reserva se precisar.
- **Fundo das fotos de produto:** neutro e contínuo, off-white ou pedra clara, com a mesma luz e o mesmo ângulo em todo o catálogo. Consistência vale mais que foto "bonita" isolada.
- **Luz:** difusa e lateral. Evite flash direto, que estoura o brilho do ouro.
- **Antes/depois:** use tripé ou pelo menos o mesmo enquadramento. Se as fotos não se alinharem, o slider perde credibilidade.
- **Texto alternativo (`alt`):** ao trocar a foto, reescreva o `alt` descrevendo a peça real (modelo, metal, pedra). Ele conta para acessibilidade e para SEO.
- **Dimensões:** preencha `width` e `height` em cada `<img>` com as medidas reais. Isso evita que o layout "pule" durante o carregamento (CLS).
- **Carregamento:** só o hero usa `loading="eager"`. Todas as outras imagens usam `loading="lazy"`.

---

## 4. Paleta de cores

A identidade usa quatro famílias. Cada cor tem uma **função**: não use o dourado de marca para texto sobre fundo claro, porque ele não tem contraste suficiente.

### Tokens

| Token | Hex | Função |
| :--- | :--- | :--- |
| `--ivory` | `#FAF7F2` | Fundo principal |
| `--sand` | `#F2ECE2` | Fundo de seções alternadas e cards |
| `--line` | `#E4DCCF` | Bordas e divisores em fundo claro |
| `--ink` | `#1A1816` | Títulos e texto principal |
| `--ink-muted` | `#6B645B` | Texto secundário e legendas |
| `--gold` | `#B8924A` | Elementos decorativos: selos, divisores, ícones, bordas |
| `--gold-text` | `#8A6A2F` | Links e texto dourado **sobre fundo claro** |
| `--gold-light` | `#D9BE7F` | Texto e detalhes dourados **sobre fundo escuro** |
| `--forest` | `#131E16` | Fundo da seção Compra de Ouro e do rodapé |
| `--forest-soft` | `#1E2C22` | Cards dentro da seção escura |
| `--whatsapp` | `#0E7A55` | Botões de WhatsApp com texto branco |

### Contraste (WCAG 2.1)

| Combinação | Contraste | Uso permitido |
| :--- | :-: | :--- |
| `--ink` sobre `--ivory` | ~16:1 | ✅ Qualquer texto |
| `--ink-muted` sobre `--ivory` | ~5,4:1 | ✅ Texto de corpo |
| `--gold-text` sobre `--ivory` | ~4,7:1 | ✅ Links e texto de destaque |
| `--gold` sobre `--ivory` | ~2,7:1 | ⚠️ Só decorativo, **nunca texto** |
| `--gold-light` sobre `--forest` | ~9,5:1 | ✅ Qualquer texto |
| `--gold` sobre `--forest` | ~5,9:1 | ✅ Texto e ícones |
| Branco sobre `--whatsapp` | ~5,3:1 | ✅ Botão |
| Branco sobre `#25D366` (verde padrão do WhatsApp) | ~2:1 | ❌ Não use com texto branco |

### Regras de aplicação

- **Proporção 60-30-10:** 60% marfim/areia, 30% tinta e verde-musgo, 10% dourado. Dourado demais barateia a percepção de luxo.
- **Um único ponto escuro:** a seção Compra de Ouro e o rodapé usam `--forest`. Não crie outras seções escuras, porque o contraste entre claro e escuro é o que dá peso a essa seção.
- **Botões:**
  - primário: `--ink` com texto `--ivory`;
  - secundário: contorno `--ink`;
  - dourado: só dentro da seção escura;
  - WhatsApp: `--whatsapp`.
- **Estados:**
  - hover: escureça cerca de 8% ou troque a cor da borda;
  - foco: sempre use um contorno visível (`outline: 2px solid var(--gold)` com `outline-offset: 2px`).
- **Nunca** use degradê dourado em texto corrido nem sombra dourada em botão.

---

## 5. Tipografia

| Uso | Fonte | Peso | Observação |
| :--- | :--- | :-: | :--- |
| Títulos (H1–H3) | Cormorant Garamond | 500–600 | Itálico só em palavras de ênfase, como no hero |
| Corpo, botões, menus | Jost | 400 / 500 | Mínimo de 16 px no corpo, altura de linha entre 1,6 e 1,7 |
| Selos e rótulos (`750 · 18k`) | Jost | 500 | Caixa-alta, espaçamento de 0,12 a 0,18 em |

Carregue apenas os pesos usados. Cada peso a mais no Google Fonts pesa cerca de 20 a 30 KB.

---

## 6. Conteúdo que exige atenção

- **Depoimentos:** os três atuais ("Mariana Silveira", "Rodrigo Fagundes" e "Camila Prado") são exemplos. Substitua por avaliações **reais** do Google, com o nome como aparece lá. Exibir depoimentos inventados como "Avaliação verificada no Google" é propaganda enganosa (CDC, art. 37).
- **Nota do Google (4,6 / 65):** aparece no hero, nos depoimentos e no Schema. Atualize nos três lugares, ou remova da página para que não fique desatualizada.
- **Promessas comerciais:** "garantia vitalícia", "pagamento imediato via Pix", "100% do teor na troca" e "descontos à vista" precisam ser verdade na operação da loja.
- **Horários:** o texto da seção Contato e o `openingHoursSpecification` do Schema precisam ser iguais.

---

## 7. SEO técnico

- [ ] Trocar `og:image` e o `"image"` do Schema para uma URL absoluta (`https://design18kjoias.com.br/assets/images/hero-aliancas.jpg`). Com caminho relativo, a prévia no WhatsApp e nas redes não aparece.
- [ ] Criar uma imagem de compartilhamento de 1200×630 (`og-image.jpg`).
- [ ] Remover o `aggregateRating` do Schema. O Google ignora a nota quando é a própria empresa que a publica, e o valor fica desatualizado.
- [ ] Remover a `<meta name="keywords">`, que os buscadores não usam mais.
- [ ] Criar `robots.txt` e `sitemap.xml`.
- [ ] Cadastrar o domínio no Google Search Console e validar o Schema no [Teste de Resultados Avançados](https://search.google.com/test/rich-results).
- [ ] Deixar nome, endereço e telefone idênticos no site, no Google Meu Negócio e no Instagram.

---

## 8. Checklist antes de publicar

- [ ] A busca por `[EDITAR` retorna zero resultados.
- [ ] Todos os links do WhatsApp foram testados num celular real e abrem com a mensagem correta.
- [ ] O montador de alianças, o simulador de ouro e o formulário de contato geram a mensagem completa.
- [ ] O slider antes/depois funciona com toque.
- [ ] Layout conferido em 360 px, 768 px, 1280 px e 1920 px.
- [ ] Lighthouse com nota **90 ou mais** em Performance, Acessibilidade, Boas Práticas e SEO.
- [ ] Nenhuma imagem acima de 300 KB.
- [ ] A navegação pelo teclado (Tab) mostra o foco em todos os botões e links.
- [ ] Política de Privacidade publicada e com link no rodapé.
- [ ] Domínio com HTTPS ativo.
