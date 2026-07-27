const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.style.display = 'none'));

  // partículas douradas — bem discretas
  const lightsWrap = document.getElementById('lights');
  const count = window.innerWidth < 680 ? 8 : 18;
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = (10 + Math.random() * 70) + '%';
    dot.style.animationDelay = (Math.random() * 10) + 's';
    dot.style.animationDuration = (14 + Math.random() * 10) + 's';
    lightsWrap.appendChild(dot);
  }

  // profundidade sutil: paralaxe de scroll + resposta discreta ao mouse
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroPhoto = document.getElementById('heroPhoto');
  const heroContent = document.getElementById('heroContent');
  const heroEl = document.getElementById('top');

  if (!reduceMotion) {
    let scrollY = 0, mouseX = 0, mouseY = 0;

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      requestAnimationFrame(applyTransform);
    });

    heroEl.addEventListener('mousemove', (e) => {
      const rect = heroEl.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;  // -1..1
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      requestAnimationFrame(applyTransform);
    });

    function applyTransform(){
      const parallax = Math.min(scrollY * 0.12, 40); // fundo sobe bem devagar ao rolar
      const tiltX = mouseX * 4; // deslocamento máximo de 4px — extremamente sutil
      const tiltY = mouseY * 3;
      heroPhoto.style.transform = `translate3d(${tiltX * -0.6}px, ${(-parallax) + tiltY * -0.6}px, 0) scale(1.06)`;
      heroContent.style.transform = `translate3d(${tiltX * 0.4}px, ${tiltY * 0.4}px, 0)`;
    }
    applyTransform();
  }

  // reveal em cascata dos cards da Barra de Confiança + frase institucional
  const trustCards = document.querySelectorAll('.trust-card');
  trustCards.forEach((card, i) => { card.style.transitionDelay = reduceMotion ? '0ms' : (i * 90) + 'ms'; });

  const trustObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); trustObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.2 });

  trustCards.forEach(card => trustObserver.observe(card));
  const trustStatement = document.getElementById('trustStatement');
  if (trustStatement) trustObserver.observe(trustStatement);

  // reveal em cascata dos cards da Galeria — mesmo padrão (fade + translateY + entrada escalonada)
  const galleryCards = document.querySelectorAll('.gallery-card');
  galleryCards.forEach((card, i) => { card.style.transitionDelay = reduceMotion ? '0ms' : (i * 90) + 'ms'; });

  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); galleryObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });

  galleryCards.forEach(card => galleryObserver.observe(card));

  // reveal em cascata dos cards de Produtos — mesmo padrão da Galeria
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach((card, i) => { card.style.transitionDelay = reduceMotion ? '0ms' : (i * 90) + 'ms'; });

  const productsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); productsObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });

  productCards.forEach(card => productsObserver.observe(card));

  // reveal em cascata dos cards do Instagram — mesmo padrão (fade + translateY, mesmo delay e easing)
  const instagramCards = document.querySelectorAll('.instagram-card');
  instagramCards.forEach((card, i) => { card.style.transitionDelay = reduceMotion ? '0ms' : (i * 90) + 'ms'; });

  const instagramObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); instagramObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });

  instagramCards.forEach(card => instagramObserver.observe(card));

  // reveal das colunas do Footer — mesmo padrão (fade + translateY, mesmo delay e easing)
  const footerCols = document.querySelectorAll('.footer-col');
  footerCols.forEach((col, i) => { col.style.transitionDelay = reduceMotion ? '0ms' : (i * 90) + 'ms'; });

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); footerObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });

  footerCols.forEach(col => footerObserver.observe(col));

  // reveal — Como Funciona (mesmo padrão fade + translateY + cascata)
  const howCards = document.querySelectorAll('.how-card');
  howCards.forEach((card, i) => { card.style.transitionDelay = reduceMotion ? '0ms' : (i * 90) + 'ms'; });
  const howObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); howObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  howCards.forEach(card => howObserver.observe(card));

  // reveal — Clientes que confiam na VRB (mesmo padrão fade + translateY + cascata)
  const googleSummary = document.getElementById('googleSummary');
  const googleSummaryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); googleSummaryObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.2 });
  if (googleSummary) googleSummaryObserver.observe(googleSummary);

  const googleCards = document.querySelectorAll('.google-card');
  googleCards.forEach((card, i) => { card.style.transitionDelay = reduceMotion ? '0ms' : (i * 90) + 'ms'; });
  const googleCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); googleCardsObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  googleCards.forEach(card => googleCardsObserver.observe(card));

  /*
    PONTO DE INTEGRAÇÃO FUTURA COM AS AVALIAÇÕES REAIS DO GOOGLE
    ------------------------------------------------------------
    Hoje o selo e os 3 cards usam nota/textos de exemplo. Para exibir os dados
    reais automaticamente, é preciso o Place ID da VRB no Google e uma chamada
    à Google Places API (Place Details, campos "rating", "user_ratings_total"
    e "reviews") feita a partir de um backend próprio (a chave da API não pode
    ficar exposta no HTML). Nenhum ajuste de layout será necessário — é só
    preencher os elementos abaixo com os dados reais.

    Exemplo de uso, quando a integração real existir:

    async function loadGoogleReviews() {
      const res = await fetch('/api/google/reviews'); // endpoint próprio da VRB
      const data = await res.json(); // { rating, totalReviews, reviews: [{author, text, rating}, ...] }

      document.getElementById('googleScore').textContent = data.rating.toFixed(1);
      document.getElementById('googleCount').textContent = `Baseado em +${data.totalReviews} avaliações no Google`;

      const cards = document.querySelectorAll('.google-card');
      data.reviews.slice(0, 3).forEach((review, i) => {
        if (!cards[i]) return;
        cards[i].querySelector('p').textContent = `“${review.text}”`;
        cards[i].querySelector('.google-card-author').textContent = review.author;
        cards[i].dataset.googleReview = 'loaded';
      });
    }
    // loadGoogleReviews();
  */


  // reveal — Depoimentos (mesmo padrão)
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach((card, i) => { card.style.transitionDelay = reduceMotion ? '0ms' : (i * 90) + 'ms'; });
  const testimonialsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); testimonialsObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  testimonialCards.forEach(card => testimonialsObserver.observe(card));

  // reveal — FAQ (mesmo padrão, cascata um pouco mais rápida por serem itens de lista)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, i) => { item.style.transitionDelay = reduceMotion ? '0ms' : (i * 70) + 'ms'; });
  const faqRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); faqRevealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  faqItems.forEach(item => faqRevealObserver.observe(item));

  // accordion do FAQ — animação suave via max-height, um item aberto por vez
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /*
    PONTO DE INTEGRAÇÃO FUTURA COM O INSTAGRAM REAL
    ------------------------------------------------
    Quando a VRB tiver um token da Instagram Graph API (ou plugin oficial do Wix),
    basta buscar as últimas publicações e preencher este array — o HTML já reconhece
    o formato abaixo. Nenhuma outra alteração de layout será necessária.

    Exemplo de uso, quando a integração real existir:

    async function loadInstagramFeed() {
      const res = await fetch('/api/instagram/latest-posts'); // endpoint próprio da VRB
      const posts = await res.json(); // [{ imageUrl, permalink, caption }, ...]
      const cards = document.querySelectorAll('.instagram-card');
      posts.slice(0, 6).forEach((post, i) => {
        if (!cards[i]) return;
        cards[i].href = post.permalink;
        cards[i].querySelector('.instagram-img').src = post.imageUrl;
        cards[i].querySelector('.instagram-img').alt = post.caption || 'Publicação do Instagram da VRB Eventos';
        cards[i].dataset.instagramPost = 'loaded';
      });
    }
    // loadInstagramFeed();
  */

/* ============================================================
   MODAL — Solicitar Orçamento
   ============================================================ */
(function () {
  const overlay = document.getElementById('orcOverlay');
  if (!overlay) return;

  const modal = overlay.querySelector('.orc-modal');
  const closeBtn = document.getElementById('orcClose');
  const form = document.getElementById('orcForm');
  const triggers = document.querySelectorAll('[data-orcamento="1"]');

  function openModal(e) {
    if (e) e.preventDefault();
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggers.forEach((el) => el.addEventListener('click', openModal));
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const whatsapp = form.whatsapp.value.trim();
    const detalhes = form.detalhes.value.trim();

    const subject = 'Solicitação de orçamento — ' + nome;
    const body =
      'Nome: ' + nome + '\n' +
      'E-mail: ' + email + '\n' +
      'WhatsApp: ' + whatsapp + '\n\n' +
      'Detalhes do evento:\n' + detalhes;

    const mailto =
      'mailto:vrbeventosproducoes@gmail.com' +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    window.location.href = mailto;
  });
})();
