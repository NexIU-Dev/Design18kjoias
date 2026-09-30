/**
 * DESIGN18K JOIAS - JAVASCRIPT PRINCIPAL
 * Funcionalidades interativas, conversão WhatsApp, customizador de alianças e slider antes/depois
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initScrollReveal();
  initBeforeAfterSlider();
  initAliancasTabs();
  initRingCustomizer();
  initGoldSimulator();
  initFaqAccordion();
  initContactForm();
  initSmartWhatsApp();
});

/* ==========================================================================
   1. HEADER SCROLL EFFECT
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE MENU CONTROLLER
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    toggleBtn.setAttribute('aria-expanded', isOpen);
  };

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
}

/* ==========================================================================
   3. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   4. SLIDER ANTES E DEPOIS INTERATIVO (RESTAURAÇÃO DE JOIAS)
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.querySelector('.comparison-slider-wrap');
  const rangeInput = document.querySelector('.slider-range-input');
  const beforeWrap = document.querySelector('.slider-img-before-wrap');
  const handle = document.querySelector('.slider-handle');

  if (!container || !rangeInput || !beforeWrap || !handle) return;

  const updatePosition = (val) => {
    const percentage = Math.min(Math.max(val, 0), 100);
    beforeWrap.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
    rangeInput.value = percentage;
  };

  rangeInput.addEventListener('input', (e) => {
    updatePosition(e.target.value);
  });

  // Suporte a clique e arraste com mouse/touch no container
  let isDragging = false;

  const getPositionFromEvent = (e) => {
    const rect = container.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const offset = clientX - rect.left;
    return (offset / rect.width) * 100;
  };

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updatePosition(getPositionFromEvent(e));
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updatePosition(getPositionFromEvent(e));
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updatePosition(getPositionFromEvent(e));
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updatePosition(getPositionFromEvent(e));
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Posição inicial (50%)
  updatePosition(50);
}

/* ==========================================================================
   5. TABS DE ALIANÇAS (NOIVADO / CASAMENTO / NAMORO)
   ========================================================================== */
function initAliancasTabs() {
  const tabs = document.querySelectorAll('.tab-btn[data-category]');
  const cards = document.querySelectorAll('.product-card[data-category]');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetCategory = tab.getAttribute('data-category');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (targetCategory === 'all' || cardCategory === targetCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   6. MONTADOR INTERATIVO DE ALIANÇAS (CUSTOMIZER BOX)
   ========================================================================== */
function initRingCustomizer() {
  const customizer = document.querySelector('.customizer-box');
  if (!customizer) return;

  const state = {
    profile: 'Anatômica Conforto',
    width: '4.0 mm',
    finish: 'Polido Clássico',
    stone: 'Sem Pedra',
    engraving: ''
  };

  const profileChips = customizer.querySelectorAll('[data-group="profile"]');
  const widthChips = customizer.querySelectorAll('[data-group="width"]');
  const finishChips = customizer.querySelectorAll('[data-group="finish"]');
  const stoneChips = customizer.querySelectorAll('[data-group="stone"]');
  const engravingInput = customizer.querySelector('#custom-engraving-input');
  const ctaBtn = customizer.querySelector('#customizer-whatsapp-cta');

  // Elementos do resumo
  const summaryProfile = customizer.querySelector('#sum-profile');
  const summaryWidth = customizer.querySelector('#sum-width');
  const summaryFinish = customizer.querySelector('#sum-finish');
  const summaryStone = customizer.querySelector('#sum-stone');
  const summaryEngraving = customizer.querySelector('#sum-engraving');

  function bindChips(chips, stateKey, summaryEl) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state[stateKey] = chip.textContent.trim();
        if (summaryEl) summaryEl.textContent = state[stateKey];
        updateWhatsAppLink();
      });
    });
  }

  bindChips(profileChips, 'profile', summaryProfile);
  bindChips(widthChips, 'width', summaryWidth);
  bindChips(finishChips, 'finish', summaryFinish);
  bindChips(stoneChips, 'stone', summaryStone);

  if (engravingInput) {
    engravingInput.addEventListener('input', (e) => {
      state.engraving = e.target.value.trim();
      if (summaryEngraving) {
        summaryEngraving.textContent = state.engraving || 'Nenhuma (ou a definir)';
      }
      updateWhatsAppLink();
    });
  }

  function updateWhatsAppLink() {
    if (!ctaBtn) return;
    const phone = '5512982208667';
    const message = `Olá! Montei uma aliança no site da Design18k Joias e gostaria de um orçamento:\n\n` +
      `• Modelo/Perfil: ${state.profile}\n` +
      `• Largura: ${state.width}\n` +
      `• Acabamento: ${state.finish}\n` +
      `• Pedras: ${state.stone}\n` +
      `• Gravação interna: ${state.engraving || 'A combinar'}\n` +
      `• Ouro 18k (Teor 750) certificado\n\n` +
      `Poderiam me passar os detalhes de valores e prazo de entrega?`;

    ctaBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

  updateWhatsAppLink();
}

/* ==========================================================================
   7. SIMULADOR DE AVALIAÇÃO DE OURO 18K
   ========================================================================== */
function initGoldSimulator() {
  const form = document.querySelector('#gold-simulator-form');
  if (!form) return;

  const weightInput = form.querySelector('#gold-weight');
  const puritySelect = form.querySelector('#gold-purity');
  const submitBtn = form.querySelector('#btn-gold-val-cta');

  function updateSimulatorWhatsApp() {
    const weight = weightInput.value ? `${weightInput.value}g` : 'aproximado a pesar';
    const purity = puritySelect.options[puritySelect.selectedIndex].text;
    const phone = '5512982208667';

    const message = `Olá! Gostaria de agendar uma avaliação transparente de joias/ouro na Design18k Joias:\n\n` +
      `• Tipo/Teor: ${purity}\n` +
      `• Peso estimado: ${weight}\n` +
      `• Interesse: Venda ou usar como parte do pagamento para joia nova.\n\n` +
      `Qual o melhor horário para atendimento presencial na loja do Shopping América?`;

    submitBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

  weightInput.addEventListener('input', updateSimulatorWhatsApp);
  puritySelect.addEventListener('change', updateSimulatorWhatsApp);
  updateSimulatorWhatsApp();
}

/* ==========================================================================
   8. FAQ ACCORDION (COM SUPORTE DE ACESSIBILIDADE)
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros itens
      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherBtn = other.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      // Alterna o atual
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   9. FORMULÁRIO DE CONTATO COM REDIRECIONAMENTO WHATSAPP
   ========================================================================== */
function initContactForm() {
  const form = document.querySelector('#site-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#contact-name').value.trim();
    const phoneInput = form.querySelector('#contact-phone').value.trim();
    const service = form.querySelector('#contact-service').value;
    const message = form.querySelector('#contact-message').value.trim();

    if (!name || !phoneInput) {
      alert('Por favor, preencha ao menos seu nome e telefone de contato.');
      return;
    }

    const whatsPhone = '5512982208667';
    const text = `Olá! Entrei em contato pelo formulário do site Design18k Joias:\n\n` +
      `• Nome: ${name}\n` +
      `• Telefone: ${phoneInput}\n` +
      `• Serviço de interesse: ${service}\n` +
      (message ? `• Mensagem: ${message}\n\n` : '\n') +
      `Gostaria de mais informações e atendimento.`;

    const url = `https://wa.me/${whatsPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

/* ==========================================================================
   10. SMART WHATSAPP BUTTON (MENSAGEM DINÂMICA CONFORME SEÇÃO VISÍVEL)
   ========================================================================== */
function initSmartWhatsApp() {
  const floatingBtn = document.querySelector('.floating-whatsapp-btn');
  if (!floatingBtn) return;

  const phone = '5512982208667';
  const defaultMsg = 'Olá! Gostaria de falar com um especialista da Design18k Joias.';

  const sectionMessages = {
    'hero': 'Olá! Estava navegando no site da Design18k e gostaria de conhecer as joias em ouro 18k.',
    'aliancas': 'Olá! Gostaria de consultar modelos e orçamentos de alianças em ouro 18k.',
    'sob-medida': 'Olá! Gostaria de solicitar um desenho de joia sob medida com o designer.',
    'reformas': 'Olá! Tenho uma joia para reforma e restauração. Como funciona o processo?',
    'compramos-ouro': 'Olá! Gostaria de avaliar minhas joias em ouro para venda ou troca.',
    'sobre': 'Olá! Gostaria de agendar uma visita à loja no Shopping América.',
    'contato': 'Olá! Gostaria de falar com o atendimento da Design18k Joias.'
  };

  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const msg = sectionMessages[id] || defaultMsg;
        floatingBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      }
    });
  }, {
    threshold: 0.35
  });

  sections.forEach(sec => observer.observe(sec));
}
