# Design18k Joias — landing page

Landing page da Design18k Joias, construída com Astro 7 e publicada como HTML estático. Todas as imagens usadas na página foram retiradas de publicações públicas do [Instagram da marca](https://www.instagram.com/design18ksjc/); o site não usa mais as imagens ilustrativas anteriores.

O [plano visual e de implementação](PLANO_IMPLEMENTACAO_UI.md) registra as referências: [Instagram da Design18k](https://www.instagram.com/design18ksjc/) e [PRIDEAUX no Dribbble](https://dribbble.com/shots/27229385-PRIDEAUX-Jewelry-Ecommerce-Website-UI-UX).

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:4321`.

## Verificar e gerar a versão de produção

```bash
npm run check
npm run build
```

O conteúdo gerado fica em `dist/`. Publique essa pasta em qualquer hospedagem de sites estáticos. Abrir o arquivo fonte diretamente no navegador não executa o projeto Astro.

## Estrutura

```text
src/pages/index.astro     página, metadados e interações leves
src/styles/global.css     identidade visual e responsividade
public/assets/instagram/  imagens das publicações da Design18k
astro.config.mjs          configuração do build estático
```

## Antes de publicar

- As imagens ativas são miniaturas públicas do Instagram. Os antigos arquivos mockados foram removidos do projeto; se necessário, ainda podem ser recuperados pelo histórico do Git. Para ampliar fotos além de 640 px, use arquivos originais fornecidos pela marca.
- Confirmar o nome oficial do shopping e o endereço exato. O perfil do Instagram menciona Shopping Jardim Oriente, enquanto a documentação anterior cita Shopping América; por isso, a página não exibe número de loja ou endereço não confirmado.
- Validar textos comerciais e os links de WhatsApp.
- Adicionar logo e favicon oficiais, se disponíveis.

As publicações de origem de cada imagem estão em [FONTES_IMAGENS_INSTAGRAM.md](FONTES_IMAGENS_INSTAGRAM.md).

O arquivo [GUIA_DE_PERSONALIZACAO.md](GUIA_DE_PERSONALIZACAO.md) documenta a versão anterior em HTML e possui referências a arquivos e funções já removidos. Ele foi preservado como histórico e deve ser atualizado antes de ser usado como checklist da versão Astro.
