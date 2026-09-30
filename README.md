# Design18k Joias · Website Institucional e de Conversão de Alto Padrão

Site completo, responsivo e com identidade visual editorial desenvolvido sob medida para a **Design18k Joias**, joalheria localizada no **Shopping América, São José dos Campos - SP**.

---

## 🌟 Destaques do Projeto

- **Identidade Visual Autoral & Editorial:**
  - Paleta equilibrada em Off-white quente (`#FAF7F2`), Preto Carvão (`#1A1816`), Dourado Ouro 18k sutil (`#B8924A` / `#D9BE7F`) e Verde Musgo Profundo (`#131E16`) na seção nobre de compra de ouro.
  - Tipografia de alto contraste com *Cormorant Garamond* (serifada editorial) e *Jost* (sans-serif contemporânea).
  - Selo e monograma de garantia `"750 · 18k"` recorrente como elemento de credibilidade técnica.

- **Fotografia de Alta Joalheria já Integrada:**
  - Imagens em altíssima resolução de alianças, processo de desenho em bancada, balança de precisão com ouro e antes/depois da restauração.
  - Estrutura pronta com placeholders marcados com `[EDITAR]` para fácil substituição pelas fotos do catálogo próprio.

- **Funcionalidades Interativas & Conversão:**
  - **Montador Interativo de Alianças (Customizer Box):** O cliente seleciona perfil (anatômica, reta, etc.), largura (2.5mm a 6.5mm), acabamento, pedras e texto para gravação, gerando automaticamente um link com o pedido montado no WhatsApp.
  - **Slider Interativo "Antes e Depois" de Restauração:** Arraste com o mouse ou toque no celular para comparar a peça desgastada e a mesma joia restaurada e polida.
  - **Simulador de Avaliação de Ouro:** Seleção de teor e peso estimado com botão direto para agendar pesagem segura na loja.
  - **Botão Flutuante de WhatsApp Inteligente:** Ajusta a mensagem de contato automaticamente de acordo com a seção em que o usuário está navegando.
  - **Formulário de Contato Direcionado:** Validação limpa e disparo de mensagem estruturada no WhatsApp.
  - **Botão "Ligar Agora" Nativo no Mobile.**

- **SEO Local de Alto Desempenho (São José dos Campos):**
  - Palavras-chave estruturadas para o mercado de SJC e Vale do Paraíba: *"joalheria em São José dos Campos"*, *"alianças de casamento SJC"*, *"compra de ouro São José dos Campos"*, *"reforma de joias SJC"*.
  - Marcação de dados estruturados **Schema.org** (`JewelryStore` e `LocalBusiness`) com endereço exato no Shopping América, coordenadas geográficas, horários e avaliação Google 4,6 estrelas (65 avaliações).

---

## 📁 Estrutura de Arquivos

```text
Joalheria18k/
├── index.html                    # Estrutura semântica HTML5 com Schema.org
├── assets/
│   ├── css/
│   │   └── styles.css            # Estilos editoriais com variáveis CSS e responsividade
│   ├── js/
│   │   └── main.js               # Slider antes/depois, customizador, simulador e WhatsApp inteligente
│   └── images/
│       ├── hero-aliancas.jpg      # Foto de destaque do Hero
│       ├── colecao-aliancas.jpg   # Vitrine de alianças
│       ├── design-autoral.jpg     # Esboço técnico de joia sob medida
│       ├── ourives-restauracao.jpg# Mestre ourives trabalhando na bancada
│       ├── restauracao-antes.jpg  # Joia antes do reparo (oxidação/riscos)
│       ├── restauracao-depois.jpg # Joia restaurada e polida
│       ├── compramos-ouro.jpg     # Balança de precisão e barras de ouro 18k
│       └── loja-ambiente.jpg      # Foto de atendimento da loja física
├── README.md                     # Documentação geral do projeto
└── GUIA_DE_PERSONALIZACAO.md     # Checklist e instruções para trocar fotos e dados
```

---

## 🚀 Como Visualizar e Testar Localmente

O projeto foi construído em tecnologia padrão (HTML5, CSS3, JavaScript puro), o que significa que **não requer instalação de dependências pesadas** para rodar.

### Opção 1: Abrir diretamente no Navegador
Basta dar um duplo clique no arquivo `index.html` ou arrastá-lo para dentro de qualquer navegador (Google Chrome, Safari, Firefox, Edge).

### Opção 2: Servidor Local via Node.js
Se tiver o Node instalado, você pode executar um servidor leve na pasta do projeto:
```bash
npx serve .
# ou
npx http-server . -p 8080
```
Depois acesse `http://localhost:8080` no seu navegador ou celular.

---

## 🌐 Como Publicar na Web (Hospedagem Gratuita ou Própria)

1. **Vercel ou Netlify:**
   - Arraste a pasta do projeto diretamente para o painel do [Netlify Drop](https://app.netlify.com/drop) ou conecte via GitHub na [Vercel](https://vercel.com).
   - O site estará no ar em segundos com certificado SSL (HTTPS) gratuito.

2. **WordPress / Elementor:**
   - Você pode utilizar este código como tema HTML estático ou replicar a mesma estrutura de seções, textos e estilos diretamente no construtor do Elementor.

3. **Hospedagem Convencional (cPanel, Hostinger, Locaweb):**
   - Envie os arquivos da pasta para a pasta `public_html` via FTP ou Gerenciador de Arquivos.

---

## 🛠️ Dados da Empresa Já Configurados

- **Nome Comercial:** Design18k Joias
- **Endereço:** Shopping América, R. Andorra, 500, Loja 293, Jardim Oriente, São José dos Campos - SP, CEP 12235-050
- **WhatsApp Oficial:** (12) 98220-8667
- **Avaliação Google:** 4,6 estrelas (65 avaliações)
- **Garantia:** Vitalícia do teor 750 (ouro 18k)
