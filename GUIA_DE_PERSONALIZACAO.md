# Guia de Personalização & Checklist · Design18k Joias

Este documento lista exatamente tudo o que você precisa fornecer e onde alterar no código para deixar o site 100% alinhado com a operação real da loja.

Todos os pontos editáveis no código estão marcados com comentários claros: `<!-- [EDITAR]: ... -->`.

---

## 📋 Checklist do que Fornecer

| Item | Descrição Recomendada | Local de Substituição |
| :--- | :--- | :--- |
| **1. Logo Oficial** | Arquivo em vetor (SVG) ou PNG com fundo transparente em alta resolução. | Substituir a tag `.brand-logo` no cabeçalho e rodapé em `index.html`. |
| **2. Fotos Reais da Loja** | 1 a 2 fotos da fachada e do balcão de atendimento no Shopping América. | Substituir `assets/images/loja-ambiente.jpg`. |
| **3. Fotos do Mostruário de Alianças** | Fotos reais em fundo claro das alianças mais vendidas (Casamento, Noivado, Solitários). | Substituir `assets/images/hero-aliancas.jpg` e `assets/images/colecao-aliancas.jpg`. |
| **4. Fotos de Restauração (Antes/Depois)** | Foto de uma joia real arranhada/sem pedra e da mesma joia após polimento e cravação. | Substituir `assets/images/restauracao-antes.jpg` e `assets/images/restauracao-depois.jpg`. |
| **5. Redes Sociais** | Links oficiais do Instagram e Facebook da joalheria. | Linhas 800-820 de `index.html` (`[EDITAR_INSTAGRAM]`, `[EDITAR_FACEBOOK]`). |
| **6. CNPJ da Loja** | CNPJ oficial da empresa para constar no rodapé e termos legais. | Linha 835 de `index.html` (`[EDITAR_CNPJ]`). |
| **7. Horários Detalhados** | Horário de funcionamento completo de feriados, domingos e plantões de fim de ano. | Seção de contato e rodapé em `index.html`. |
| **8. Link Direto do Google Maps** | Link da ficha do Google Meu Negócio para receber novas avaliações. | Linha 720 de `index.html` (`[EDITAR_GOOGLE_CID]`). |

---

## 🔍 Onde Localizar Cada Item no Arquivo `index.html`

### 1. Telefone e WhatsApp
O número `(12) 98220-8667` (código de país e DDD: `5512982208667`) já está configurado em todos os links e botões. Caso mude no futuro, basta buscar por `5512982208667` em:
- `index.html`
- `assets/js/main.js`

### 2. Fotos e Imagens
Todas as fotos ficam organizadas dentro da pasta:
```text
Joalheria18k/assets/images/
```
Se você mantiver os mesmos nomes de arquivo (`hero-aliancas.jpg`, `colecao-aliancas.jpg`, etc.), as imagens serão atualizadas automaticamente sem precisar alterar nenhuma linha de código!

### 3. Prazo Médio de Produção no FAQ
Na seção FAQ (pergunta 3), o prazo sugerido foi configurado como:
> `7 a 15 dias úteis`
Se o seu atelier tiver prazos diferentes (por exemplo, 3 a 5 dias para modelos tradicionais), edite a resposta do item 3 do FAQ.

### 4. Parcelamento e Condições Comerciais
No FAQ (pergunta 5), está indicado:
> `em até 10x ou 12x sem juros no cartão de crédito`
Você pode alterar para o número exato de parcelas oferecido na loja.

---

## 💡 Dicas de Sucesso para Conversão de Joalheria
1. **Vídeos no WhatsApp:** Quando o cliente pedir orçamento pelo botão do site, responda com uma foto ou vídeo curto de 5 segundos da aliança brilhando na luz natural da loja. Isso aumenta a taxa de fechamento em até 4 vezes.
2. **Avaliação na hora:** Reforce que a avaliação do ouro usado é feita em 10 minutos com o cliente acompanhando a pesagem na balança; isso gera confiança imediata.
