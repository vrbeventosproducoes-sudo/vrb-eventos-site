# VRB Eventos & Produções — Site Institucional

Site institucional de uma página (one-page) da **VRB Produções e Eventos LTDA**, locação de barracas, mobiliário, louças, iluminação e decoração para casamentos, formaturas, aniversários e eventos corporativos.

## Stack

HTML5 + CSS3 + JavaScript puro (vanilla). Sem framework, sem build step — arquivos estáticos prontos para qualquer host (Vercel, Netlify, GitHub Pages, etc).

## Estrutura do projeto

```
/
├── index.html          # página principal (single-page)
├── 404.html             # página de erro personalizada
├── robots.txt           # diretivas para crawlers
├── sitemap.xml           # mapa do site
├── manifest.json          # PWA (ícones, cores, nome)
├── css/
│   └── style.css         # todo o CSS do site
├── js/
│   └── main.js           # todo o JavaScript (reveal, accordion, menu, parallax)
├── images/
│   ├── hero-photo.jpg      # foto de fundo do Hero
│   └── og-image.jpg        # imagem de compartilhamento (Open Graph / Twitter Card)
└── icons/
    ├── favicon.png         # ícone da aba do navegador
    ├── icon-192.png         # ícone PWA 192×192
    └── icon-512.png         # ícone PWA 512×512
```

## Seções do site (nesta ordem)

1. Hero (com foto de fundo e parallax sutil no mouse)
2. Navbar fixa (menu completo no desktop, hambúrguer no mobile)
3. Trust Bar (5 diferenciais)
4. Galeria (6 categorias de eventos)
5. Produtos (5 categorias: barracas, mesas, cadeiras, louças, decoração)
6. Como Funciona (4 passos)
7. Avaliações dos nossos clientes (Google — estrutura pronta para integração real)
8. Instagram (6 posts — estrutura pronta para integração real)
9. Depoimentos (3 cards)
10. FAQ (accordion, 6 perguntas)
11. Footer (dados de contato, navegação, redes sociais, CTA)
12. Botão flutuante do WhatsApp

Todas as seções usam o mesmo sistema de animação de entrada (fade + translateY ao rolar a página, via `IntersectionObserver`) e a mesma paleta: preto `#111111`, dourado `#C8A24A`, branco `#FFFFFF`, cinza `#333333`.

## Rodando localmente

Como é 100% estático, qualquer servidor HTTP simples funciona:

```bash
python3 -m http.server 8000
# depois abra http://localhost:8000
```

Ou, com Node instalado:

```bash
npx serve .
```

**Importante:** não abra o `index.html` direto pelo navegador com duplo clique (`file://`) — os caminhos `/css/style.css`, `/js/main.js` etc. são absolutos (raiz do domínio) e só resolvem corretamente servidos por HTTP.

## Pendências antes da publicação

- [ ] Confirmar o **domínio oficial** e atualizar `canonical`, `og:url`, `og:image`, Schema.org e `sitemap.xml` (hoje usam `vrbeventos.com.br` como placeholder)
- [ ] Confirmar o **link real do Facebook** (hoje é um placeholder no footer e no Schema.org)
- [ ] Trocar as avaliações de exemplo (Google e Depoimentos) pelas reais
- [ ] Trocar as fotos placeholder da Galeria, Produtos e Instagram por fotos reais dos eventos da VRB
- [ ] Conectar a Instagram Graph API / avaliações reais do Google quando os tokens/Place ID estiverem disponíveis (há um guia comentado dentro de `js/main.js` para os dois casos)

## Dados oficiais já integrados

| Campo | Valor |
|---|---|
| Razão social | VRB Produções e Eventos LTDA |
| CNPJ | 53.369.462/0001-36 |
| Endereço | Rua Doutor Jesuíno Maciel, 1506 — Campo Belo, São Paulo/SP, CEP 04615-004 |
| WhatsApp | (11) 94731-3256 |
| E-mail | vrbeventosproducoes@gmail.com |
| Horário | Segunda a Sexta, 9h às 18h |
| Instagram | instagram.com/vrb.eventossp |

## Deploy

Este projeto está pronto para deploy em qualquer plataforma de hospedagem estática (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Não há variáveis de ambiente nem build step — é publicar os arquivos como estão.
