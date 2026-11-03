/**
 * R.K. FURNITURE - ULTRA LUXURY ATELIER INTERACTIVE CONTROLLER 2.0
 * Specialist in Royal Handcrafted Wood Carving Furniture - Saharanpur, India
 * Proprietor: Kaleem (Prop.) | Direct Atelier Manufacturing
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Data Store: Product Catalog Details (100% Unique Real Workshop Pieces)
  // -------------------------------------------------------------------------
  const productData = {
    '1': {
      title: 'Maharaja Royal Blue 5-Piece Living Suite',
      category: 'Ornate Wooden Sofas',
      image: 'assets/images/real-royal-blue-sofa.jpg',
      desc: 'Grand palace living room suite comprising a monumental 3-seater sofa, two high-back wing throne chairs, and a hand-carved center table. Rich royal blue button-tufted velvet upholstery surrounded by ornate gold-carved cabriole legs and baroque crests.',
      wood: 'Kiln-Dried Solid Teak & Sheesham Timber',
      finish: 'Royal Antique Gold with Protective Topcoat',
      dimensions: 'Complete 5-Piece Set (Custom configurations available)'
    },
    '2': {
      title: 'Monumental Lion Head Singhasan Throne Sofa',
      category: 'Ornate Wooden Sofas',
      image: 'assets/images/real-lion-throne-sofa.jpg',
      desc: 'Exclusive bespoke Singhasan sofa featuring a breathtaking 3D hand-sculpted lion head center backrest with flowing mane, tufted ivory leatherette seating, and hand-carved baroque floral scrollwork apron and armrests.',
      wood: 'Heavy Solid Teak Wood Frame',
      finish: 'Warm Ivory Pearl with Soft Antique Gold Shading',
      dimensions: '3-Seater (92"W x 40"D x 56"H) - Bespoke orders only'
    },
    '3': {
      title: 'Royal Gold Handcrafted Chaise Lounge (Diwan)',
      category: 'Royal Sofas & Diwan',
      image: 'assets/images/real-chaise-lounge.jpg',
      desc: 'Handcrafted royal chaise lounge diwan featuring deep-relief 24K antique gold leaf floral carvings, diamond-tufted cream upholstery, and matching bolster cushion. Perfect for luxury suites, royal drawing rooms, and master bedrooms.',
      wood: '100% Seasoned Grade-A Teak Wood',
      finish: '24K Antique Gold Leaf with Burnished Patina',
      dimensions: '78" Length x 32" Depth x 46" Height'
    },
    '4': {
      title: 'French Rococo Luxury Carved Dressing Table',
      category: 'Dressing Tables',
      image: 'assets/images/real-dressing-table.jpg',
      desc: 'French rococo inspired luxury vanity table with an ornate hand-carved floral crest mirror frame, 6 spacious storage drawers with antique brass handles, solid carved cabriole legs, and a matching button-tufted leatherette stool.',
      wood: 'Seasoned Solid Hardwood & High-Grade Cabinetry Detailing',
      finish: 'Pastel Mint Green & Antique White with Champagne Gold Accents',
      dimensions: 'Dresser: 60"W x 20"D x 76"H (Table + Mirror) | Stool: 18"W x 18"D x 18"H'
    },
    '5': {
      title: 'Handcrafted Solid Teak Pooja Mandir (Temple)',
      category: 'Temples & Mandir',
      image: 'assets/images/real-pooja-mandir.jpg',
      desc: 'Sacred Saharanpur temple craftsmanship featuring traditional hand-carved shikhar dome, fluted royal pillars, floral lattice jali doors, inner sanctum with hanging brass bell, and base storage drawers for pooja accessories.',
      wood: '100% Seasoned Solid Teak Wood',
      finish: 'Natural Honey Teak Wood Polish with Clear Satin Finish',
      dimensions: '6.5ft Height x 3.5ft Width x 2ft Depth (Customizable)'
    },
    '6': {
      title: 'Imperial 8-Seater Royal Dining Set',
      category: 'Royal Dining Sets',
      image: 'assets/images/dining-1.jpg',
      desc: 'Majestic dining table featuring hand-carved pedestal bases, ornate scalloped edges, and 8 high-back chairs with cushioned seats and carved crest backrests.',
      wood: 'Selected Solid Sheesham / Teak Timber',
      finish: 'Natural Honey Gloss or Rich Dark Teak Polish',
      dimensions: 'Table: 8ft x 4ft (Customizable to 6 or 10 seaters)'
    },
    '7': {
      title: 'Intricate Floral Carved Wardrobe',
      category: 'Intricate Wardrobes',
      image: 'assets/images/wardrobe-1.jpg',
      desc: 'Multi-door heritage almirah featuring traditional carved relief panel doors, antique brass drop handles, hanging rods, and hidden security drawers.',
      wood: 'Grade-A Solid Teak & Sheesham Wood',
      finish: 'Hand-Rubbed Dark Walnut Wax Finish',
      dimensions: '4-Door: 7ft Height x 6ft Width x 22" Depth'
    },
    '8': {
      title: 'Classic Victoria Handcrafted Bed',
      category: 'Carved Beds',
      image: 'assets/images/bed-2.jpg',
      desc: 'Timeless Victorian styling blended with authentic Saharanpur carving. Rich wood grain, heavy posts, and reinforced solid slat foundation for lifetime stability.',
      wood: 'Premium Sheesham Wood (Rosewood)',
      finish: 'Royal Mahogany / Teakwood Natural Polish',
      dimensions: 'King Size & Queen Size Available'
    }
  };

  const workshopPhone = '919962271729';

  // -------------------------------------------------------------------------
  // 2. Navigation & Mobile Menu Toggle
  // -------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active Nav Link on Scroll
  const trackedSections = document.querySelectorAll('section[id], footer[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    trackedSections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 75;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // -------------------------------------------------------------------------
  // 3. Hero Masterpiece Switcher (Interactive Stage)
  // -------------------------------------------------------------------------
  const heroShowcaseData = [
    {
      img: 'assets/images/real-chaise-lounge.jpg',
      alt: 'Royal Handcrafted Gold Carved Chaise Lounge Diwan by R.K. Furniture',
      title: 'Royal Carved Chaise Lounge (Diwan)',
      sub: 'Grade-A Solid Teak • Diamond-Tufted Leatherette',
      tag: '✦ 24K Antique Gold Leaf',
      productId: '3'
    },
    {
      img: 'assets/images/real-royal-blue-sofa.jpg',
      alt: 'Royal Blue & Antique Gold Handcrafted Maharaja Living Room Set',
      title: 'Maharaja Royal Blue 5-Piece Suite',
      sub: 'Hand-Carved Gold Leaf Frame • Royal Blue Velvet',
      tag: '✦ 5-Piece Palace Suite',
      productId: '1'
    },
    {
      img: 'assets/images/real-lion-throne-sofa.jpg',
      alt: 'Monumental 3D Hand-Carved Lion Head Singhasan Throne Sofa',
      title: 'Monumental Lion Head Singhasan Sofa',
      sub: '3D Sculpted Lion Mane • Warm Ivory & Antique Gold',
      tag: '✦ Masterpiece Singhasan',
      productId: '2'
    },
    {
      img: 'assets/images/real-pooja-mandir.jpg',
      alt: 'Traditional Solid Teak Hand-Carved Pooja Mandir Temple',
      title: 'Handcrafted Solid Teak Pooja Mandir',
      sub: 'Traditional Shikhar Dome • Fluted Pillars & Brass Bell',
      tag: '✦ Sacred Teak Woodcraft',
      productId: '5'
    }
  ];

  const heroStageCard = document.getElementById('heroStageCard');
  const heroStageImg = document.getElementById('heroStageImg');
  const heroStageTagTop = document.getElementById('heroStageTagTop');
  const heroStageTitle = document.getElementById('heroStageTitle');
  const heroStageSubtitle = document.getElementById('heroStageSubtitle');
  const heroStageQuickViewBtn = document.getElementById('heroStageQuickViewBtn');
  const heroSwitchBtns = document.querySelectorAll('.hero-switch-item');

  let currentHeroIdx = 0;
  let heroAutoTimer = null;

  function setHeroShowcase(idx) {
    if (idx < 0 || idx >= heroShowcaseData.length) return;
    currentHeroIdx = idx;
    const item = heroShowcaseData[idx];

    // Smooth transition
    if (heroStageImg) {
      heroStageImg.style.opacity = '0.3';
      setTimeout(() => {
        heroStageImg.src = item.img;
        heroStageImg.alt = item.alt;
        heroStageImg.style.opacity = '1';
      }, 180);
    }

    if (heroStageTagTop) heroStageTagTop.innerHTML = `<span>${item.tag}</span>`;
    if (heroStageTitle) heroStageTitle.textContent = item.title;
    if (heroStageSubtitle) heroStageSubtitle.textContent = item.sub;
    if (heroStageQuickViewBtn) heroStageQuickViewBtn.setAttribute('data-product', item.productId);

    heroSwitchBtns.forEach((btn, bIdx) => {
      btn.classList.toggle('active', bIdx === idx);
    });
  }

  function startHeroAutoRotate() {
    stopHeroAutoRotate();
    heroAutoTimer = setInterval(() => {
      const nextIdx = (currentHeroIdx + 1) % heroShowcaseData.length;
      setHeroShowcase(nextIdx);
    }, 6000);
  }

  function stopHeroAutoRotate() {
    if (heroAutoTimer) clearInterval(heroAutoTimer);
  }

  heroSwitchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-hero-idx'), 10) || 0;
      setHeroShowcase(idx);
      startHeroAutoRotate();
    });
  });

  if (heroStageCard) {
    heroStageCard.addEventListener('mouseenter', stopHeroAutoRotate);
    heroStageCard.addEventListener('mouseleave', startHeroAutoRotate);
  }

  startHeroAutoRotate();

  // -------------------------------------------------------------------------
  // 4. Section 2: Craftsmanship Transformation Switcher (Raw vs Finished)
  // -------------------------------------------------------------------------
  const tabRawWood = document.getElementById('tabRawWood');
  const tabFinishedWood = document.getElementById('tabFinishedWood');
  const transformImg = document.getElementById('transformImg');
  const transformStatusBadge = document.getElementById('transformStatusBadge');
  const transformStampNumber = document.getElementById('transformStampNumber');
  const transformStampText = document.getElementById('transformStampText');
  const transformPillTag = document.getElementById('transformPillTag');
  const transformSpecsStrip = document.getElementById('transformSpecsStrip');

  function setTransformationMode(mode) {
    if (mode === 'raw') {
      if (tabRawWood) {
        tabRawWood.classList.add('active');
        tabRawWood.setAttribute('aria-selected', 'true');
      }
      if (tabFinishedWood) {
        tabFinishedWood.classList.remove('active');
        tabFinishedWood.setAttribute('aria-selected', 'false');
      }
      if (transformImg) {
        transformImg.style.opacity = '0.3';
        setTimeout(() => {
          transformImg.src = 'assets/images/real-raw-sofa-frame.jpg';
          transformImg.alt = 'Authentic hand-carved raw teak wood sofa frame in Saharanpur workshop yard';
          transformImg.style.opacity = '1';
        }, 150);
      }
      if (transformStatusBadge) transformStatusBadge.textContent = 'Stage 1: Workshop Yard';
      if (transformStampNumber) transformStampNumber.textContent = '100%';
      if (transformStampText) transformStampText.innerHTML = 'Hand-Chiseled Raw Solid Teak Frame<br><strong>Saharanpur Workshop Yard • Zero CNC</strong>';
      if (transformPillTag) transformPillTag.textContent = 'Seasoned Hardwood';
      if (transformSpecsStrip) {
        transformSpecsStrip.innerHTML = `
          <span class="transform-spec-item">✦ Steel Chisel 3D Relief</span>
          <span class="transform-spec-item">✦ Interlocking Mortise Joinery</span>
          <span class="transform-spec-item">✦ Kiln-Dried Sagwan Teak</span>
        `;
      }
    } else {
      if (tabFinishedWood) {
        tabFinishedWood.classList.add('active');
        tabFinishedWood.setAttribute('aria-selected', 'true');
      }
      if (tabRawWood) {
        tabRawWood.classList.remove('active');
        tabRawWood.setAttribute('aria-selected', 'false');
      }
      if (transformImg) {
        transformImg.style.opacity = '0.3';
        setTimeout(() => {
          transformImg.src = 'assets/images/real-royal-blue-sofa.jpg';
          transformImg.alt = 'Royal Blue & Antique Gold Handcrafted Maharaja Living Room Set';
          transformImg.style.opacity = '1';
        }, 150);
      }
      if (transformStatusBadge) transformStatusBadge.textContent = 'Stage 2: Royal Palace Finish';
      if (transformStampNumber) transformStampNumber.textContent = '24K';
      if (transformStampText) transformStampText.innerHTML = 'Burnished Antique Gold Leaf Gilding<br><strong>Royal Blue Tufted Velvet • Heirloom Topcoat</strong>';
      if (transformPillTag) transformPillTag.textContent = 'Export Ready';
      if (transformSpecsStrip) {
        transformSpecsStrip.innerHTML = `
          <span class="transform-spec-item">✦ 24K Hand-Applied Gold Leaf</span>
          <span class="transform-spec-item">✦ High-Density Royal Velvet</span>
          <span class="transform-spec-item">✦ Lifetime Scratch Protection</span>
        `;
      }
    }
  }

  if (tabRawWood) tabRawWood.addEventListener('click', () => setTransformationMode('raw'));
  if (tabFinishedWood) tabFinishedWood.addEventListener('click', () => setTransformationMode('finished'));

  // -------------------------------------------------------------------------
  // 5. Product Gallery Category Filtering & Live Search
  // -------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const gallerySearchInput = document.getElementById('gallerySearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const galleryCountTag = document.getElementById('galleryCountTag');

  let currentCategory = 'all';
  let searchQuery = '';

  function applyGalleryFilters() {
    let visibleCount = 0;

    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTitle = card.querySelector('.product-card-title')?.textContent?.toLowerCase() || '';
      const overlayDesc = card.querySelector('.overlay-desc')?.textContent?.toLowerCase() || '';
      const overlayTitle = card.querySelector('.overlay-title')?.textContent?.toLowerCase() || '';

      const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
      const matchesSearch = !searchQuery || 
        cardTitle.includes(searchQuery) || 
        overlayDesc.includes(searchQuery) || 
        overlayTitle.includes(searchQuery) ||
        cardCategory.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (galleryCountTag) {
      galleryCountTag.innerHTML = `Showing <strong>${visibleCount}</strong> of ${productCards.length} Masterpieces`;
    }

    if (clearSearchBtn) {
      clearSearchBtn.style.display = searchQuery ? 'inline-block' : 'none';
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      currentCategory = btn.getAttribute('data-filter') || 'all';
      applyGalleryFilters();
    });
  });

  if (gallerySearchInput) {
    gallerySearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyGalleryFilters();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (gallerySearchInput) {
        gallerySearchInput.value = '';
        searchQuery = '';
        applyGalleryFilters();
        gallerySearchInput.focus();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 6. Interactive Configurator 2.0 (Dynamic Workshop Estimator)
  // -------------------------------------------------------------------------
  const cfgSummaryDisplay = document.getElementById('cfgSummaryDisplay');
  const cfgPriceRange = document.getElementById('cfgPriceRange');
  const cfgRetailPrice = document.getElementById('cfgRetailPrice');
  const cfgSavingsBadge = document.getElementById('cfgSavingsBadge');
  const cfgTimeTag = document.getElementById('cfgTimeTag');
  const sendConfigWaBtn = document.getElementById('sendConfigWaBtn');

  // Baseline direct workshop price ranges (in INR thousands)
  const priceMatrix = {
    'Royal Sofa Suite': {
      '100% Solid Seasoned Teak Wood': { min: 65000, max: 88000, retailMin: 135000, retailMax: 175000, days: '20 – 26 Days' },
      'Grade-A Seasoned Sheesham (Rosewood)': { min: 54000, max: 74000, retailMin: 110000, retailMax: 145000, days: '18 – 24 Days' },
      'Combined Teak & Hardwood': { min: 46000, max: 62000, retailMin: 95000, retailMax: 125000, days: '16 – 22 Days' }
    },
    'Chaise Lounge Diwan': {
      '100% Solid Seasoned Teak Wood': { min: 38000, max: 52000, retailMin: 78000, retailMax: 98000, days: '14 – 18 Days' },
      'Grade-A Seasoned Sheesham (Rosewood)': { min: 32000, max: 44000, retailMin: 65000, retailMax: 82000, days: '12 – 16 Days' },
      'Combined Teak & Hardwood': { min: 28000, max: 38000, retailMin: 55000, retailMax: 70000, days: '10 – 14 Days' }
    },
    'Carved Bed (King/Queen)': {
      '100% Solid Seasoned Teak Wood': { min: 58000, max: 78000, retailMin: 125000, retailMax: 160000, days: '18 – 25 Days' },
      'Grade-A Seasoned Sheesham (Rosewood)': { min: 48000, max: 66000, retailMin: 105000, retailMax: 135000, days: '16 – 22 Days' },
      'Combined Teak & Hardwood': { min: 42000, max: 56000, retailMin: 88000, retailMax: 115000, days: '14 – 18 Days' }
    },
    'Pooja Mandir (Temple)': {
      '100% Solid Seasoned Teak Wood': { min: 45000, max: 68000, retailMin: 95000, retailMax: 130000, days: '16 – 22 Days' },
      'Grade-A Seasoned Sheesham (Rosewood)': { min: 38000, max: 54000, retailMin: 80000, retailMax: 105000, days: '14 – 18 Days' },
      'Combined Teak & Hardwood': { min: 32000, max: 46000, retailMin: 68000, retailMax: 90000, days: '12 – 16 Days' }
    },
    'Luxury Dressing Table': {
      '100% Solid Seasoned Teak Wood': { min: 36000, max: 48000, retailMin: 76000, retailMax: 98000, days: '14 – 18 Days' },
      'Grade-A Seasoned Sheesham (Rosewood)': { min: 30000, max: 42000, retailMin: 64000, retailMax: 84000, days: '12 – 16 Days' },
      'Combined Teak & Hardwood': { min: 26000, max: 36000, retailMin: 55000, retailMax: 72000, days: '10 – 14 Days' }
    },
    'Royal Dining Table Set': {
      '100% Solid Seasoned Teak Wood': { min: 78000, max: 115000, retailMin: 170000, retailMax: 225000, days: '22 – 28 Days' },
      'Grade-A Seasoned Sheesham (Rosewood)': { min: 64000, max: 92000, retailMin: 140000, retailMax: 185000, days: '20 – 26 Days' },
      'Combined Teak & Hardwood': { min: 54000, max: 78000, retailMin: 115000, retailMax: 155000, days: '18 – 22 Days' }
    }
  };

  function updateConfiguratorDisplay() {
    const type = document.querySelector('input[name="cfgType"]:checked')?.value || 'Royal Sofa Suite';
    const wood = document.querySelector('input[name="cfgWood"]:checked')?.value || '100% Solid Seasoned Teak Wood';
    const finish = document.querySelector('input[name="cfgFinish"]:checked')?.value || '24K Antique Gold Leaf Gilding';

    if (cfgSummaryDisplay) {
      cfgSummaryDisplay.textContent = `${type} in ${wood} with ${finish}`;
    }

    // Lookup base price
    const base = priceMatrix[type]?.[wood] || { min: 50000, max: 70000, retailMin: 110000, retailMax: 140000, days: '18 – 24 Days' };
    
    // Add finishing factor
    let finishDelta = 0;
    if (finish.includes('Gold Leaf')) {
      finishDelta = 6000;
    } else if (finish.includes('Pastel Mint')) {
      finishDelta = 4000;
    }

    const estMin = (base.min + finishDelta).toLocaleString('en-IN');
    const estMax = (base.max + finishDelta).toLocaleString('en-IN');
    const retailMin = (base.retailMin + (finishDelta * 2)).toLocaleString('en-IN');
    const retailMax = (base.retailMax + (finishDelta * 2)).toLocaleString('en-IN');

    if (cfgPriceRange) cfgPriceRange.textContent = `₹${estMin} – ₹${estMax}`;
    if (cfgRetailPrice) cfgRetailPrice.textContent = `Showroom Retail: ₹${retailMin} – ₹${retailMax}`;
    if (cfgTimeTag) cfgTimeTag.textContent = `⏱ ${base.days} Handcrafted`;
    if (cfgSavingsBadge) cfgSavingsBadge.textContent = `Direct Atelier Savings ~45%`;

    // WhatsApp Action URL
    if (sendConfigWaBtn) {
      const waText = encodeURIComponent(
        `Hello Kaleem ji (R.K. Furniture),\n` +
        `I configured a custom furniture piece on your website:\n` +
        `• Type: ${type}\n` +
        `• Timber: ${wood}\n` +
        `• Finish: ${finish}\n` +
        `• Direct Workshop Estimate: ₹${estMin} – ₹${estMax}\n` +
        `Please provide the final quote, crate shipping to my pincode, and production schedule.`
      );
      sendConfigWaBtn.onclick = () => {
        window.open(`https://wa.me/${workshopPhone}?text=${waText}`, '_blank');
      };
    }
  }

  document.querySelectorAll('input[name="cfgType"], input[name="cfgWood"], input[name="cfgFinish"]').forEach(input => {
    input.addEventListener('change', updateConfiguratorDisplay);
  });

  updateConfiguratorDisplay();

  // -------------------------------------------------------------------------
  // 7. Interactive FAQ Accordion
  // -------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      // Close other accordion items
      faqItems.forEach(other => {
        other.classList.remove('active');
        const btn = other.querySelector('.faq-question');
        const icon = other.querySelector('.faq-icon');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = '+';
      });

      // Toggle current
      if (!isAlreadyActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        const icon = item.querySelector('.faq-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // -------------------------------------------------------------------------
  // 8. Product Details Modal Dialog
  // -------------------------------------------------------------------------
  const productDialog = document.getElementById('productDialog');
  const dialogCloseBtn = document.getElementById('dialogCloseBtn');
  const dialogImg = document.getElementById('dialogImg');
  const dialogCategory = document.getElementById('dialogCategory');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogDesc = document.getElementById('dialogDesc');
  const dialogWood = document.getElementById('dialogWood');
  const dialogFinish = document.getElementById('dialogFinish');
  const dialogDimensions = document.getElementById('dialogDimensions');
  const dialogWhatsAppBtn = document.getElementById('dialogWhatsAppBtn');

  function openProductModal(productId) {
    const item = productData[productId] || productData['1'];
    
    if (dialogImg) {
      dialogImg.src = item.image;
      dialogImg.alt = item.title;
    }
    if (dialogCategory) dialogCategory.textContent = item.category;
    if (dialogTitle) dialogTitle.textContent = item.title;
    if (dialogDesc) dialogDesc.textContent = item.desc;
    if (dialogWood) dialogWood.textContent = item.wood;
    if (dialogFinish) dialogFinish.textContent = item.finish;
    if (dialogDimensions) dialogDimensions.textContent = item.dimensions;

    if (dialogWhatsAppBtn) {
      const waText = encodeURIComponent(`Hello R.K. Furniture, I am interested in ordering or getting details for "${item.title}" (${item.category}). Please share price and finish details.`);
      dialogWhatsAppBtn.href = `https://wa.me/${workshopPhone}?text=${waText}`;
    }

    if (productDialog) {
      productDialog.showModal();
      document.body.style.overflow = 'hidden';
    }
  }

  function closeProductModal() {
    if (productDialog) {
      productDialog.close();
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.view-details-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = button.getAttribute('data-product');
      openProductModal(productId);
    });
  });

  if (dialogCloseBtn) dialogCloseBtn.addEventListener('click', closeProductModal);

  if (productDialog) {
    productDialog.addEventListener('click', (e) => {
      const rect = productDialog.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        closeProductModal();
      }
    });

    productDialog.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  }

  // -------------------------------------------------------------------------
  // 9. Request a Quote Modal Dialog
  // -------------------------------------------------------------------------
  const quoteDialog = document.getElementById('quoteDialog');
  const quoteCloseBtn = document.getElementById('quoteCloseBtn');
  const headerQuoteBtn = document.getElementById('headerQuoteBtn');
  const heroQuoteBtn = document.getElementById('heroQuoteBtn');
  const customInquiryBtn = document.getElementById('customInquiryBtn');
  const quoteModalForm = document.getElementById('quoteModalForm');
  const quoteDirectWa = document.getElementById('quoteDirectWa');
  const quoteStatus = document.getElementById('quoteStatus');

  function openQuoteModal(defaultCat = '') {
    if (defaultCat) {
      const select = document.getElementById('quoteCategory');
      if (select) select.value = defaultCat;
    }
    if (quoteDialog) {
      quoteDialog.showModal();
      document.body.style.overflow = 'hidden';
    }
  }

  function closeQuoteModal() {
    if (quoteDialog) {
      quoteDialog.close();
      document.body.style.overflow = '';
    }
  }

  if (headerQuoteBtn) headerQuoteBtn.addEventListener('click', () => openQuoteModal());
  if (heroQuoteBtn) heroQuoteBtn.addEventListener('click', () => openQuoteModal());
  if (customInquiryBtn) customInquiryBtn.addEventListener('click', () => openQuoteModal('Other Custom Carving'));
  if (quoteCloseBtn) quoteCloseBtn.addEventListener('click', closeQuoteModal);

  if (quoteDialog) {
    quoteDialog.addEventListener('click', (e) => {
      const rect = quoteDialog.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        closeQuoteModal();
      }
    });

    quoteDialog.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  }

  if (quoteDirectWa) {
    quoteDirectWa.addEventListener('click', () => {
      const name = document.getElementById('quoteName')?.value?.trim() || 'Valued Client';
      const cat = document.getElementById('quoteCategory')?.value || 'Custom Furniture';
      const msg = document.getElementById('quoteMessage')?.value?.trim() || '';
      const text = encodeURIComponent(`Hello R.K. Furniture, I am requesting a quote.\nName: ${name}\nCategory: ${cat}\nRequirements: ${msg || 'Direct catalog inquiry'}`);
      window.open(`https://wa.me/${workshopPhone}?text=${text}`, '_blank');
    });
  }

  if (quoteModalForm) {
    quoteModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quoteName')?.value?.trim();
      const phone = document.getElementById('quotePhone')?.value?.trim();
      const cat = document.getElementById('quoteCategory')?.value;
      const message = document.getElementById('quoteMessage')?.value?.trim();

      if (!name || !phone) {
        if (quoteStatus) {
          quoteStatus.textContent = 'Please fill in both your Name and Phone Number.';
          quoteStatus.style.color = '#ef4444';
        }
        return;
      }

      if (quoteStatus) {
        quoteStatus.innerHTML = `✓ Thank you, ${name}! Your quote request for <strong>${cat}</strong> has been received. Kaleem (Prop.) will call you at ${phone} shortly.`;
        quoteStatus.className = 'form-status success';
      }

      setTimeout(() => {
        const text = encodeURIComponent(`Hello Kaleem ji (R.K. Furniture), I just submitted a quote request on your website.\nName: ${name}\nPhone: ${phone}\nCategory: ${cat}\nDetails: ${message}`);
        window.open(`https://wa.me/${workshopPhone}?text=${text}`, '_blank');
        closeQuoteModal();
        quoteModalForm.reset();
        if (quoteStatus) quoteStatus.textContent = '';
      }, 1800);
    });
  }

  // -------------------------------------------------------------------------
  // 10. Contact Form in Footer (Get in Touch)
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const sendViaWhatsAppBtn = document.getElementById('sendViaWhatsAppBtn');
  const formStatus = document.getElementById('formStatus');

  function getContactFormData() {
    const name = document.getElementById('contactName')?.value?.trim() || '';
    const phone = document.getElementById('contactPhone')?.value?.trim() || '';
    const message = document.getElementById('contactMessage')?.value?.trim() || '';
    return { name, phone, message };
  }

  function validateContactForm() {
    const { name, phone, message } = getContactFormData();
    let isValid = true;

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    if (!name) {
      if (nameError) nameError.textContent = 'Please enter your name.';
      isValid = false;
    } else if (nameError) {
      nameError.textContent = '';
    }

    if (!phone || phone.length < 8) {
      if (phoneError) phoneError.textContent = 'Please enter a valid phone number.';
      isValid = false;
    } else if (phoneError) {
      phoneError.textContent = '';
    }

    if (!message) {
      if (messageError) messageError.textContent = 'Please write a brief message.';
      isValid = false;
    } else if (messageError) {
      messageError.textContent = '';
    }

    return isValid;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateContactForm()) return;

      const { name, phone } = getContactFormData();

      if (formStatus) {
        formStatus.innerHTML = `✓ Thank you <strong>${name}</strong>! Your inquiry has been sent to R.K. Furniture. We will call you shortly on <strong>${phone}</strong>.`;
        formStatus.className = 'form-status success';
      }

      contactForm.reset();
    });
  }

  if (sendViaWhatsAppBtn) {
    sendViaWhatsAppBtn.addEventListener('click', () => {
      const { name, phone, message } = getContactFormData();
      const text = encodeURIComponent(
        `Hello R.K. Furniture (Kaleem),\n` +
        `I would like to inquire about your handcrafted wood carving furniture:\n` +
        `• Name: ${name || 'Prospective Client'}\n` +
        `• Phone: ${phone || 'Not specified'}\n` +
        `• Message: ${message || 'Please share your catalog & pricing.'}`
      );
      window.open(`https://wa.me/${workshopPhone}?text=${text}`, '_blank');
    });
  }

  // -------------------------------------------------------------------------
  // 11. Scroll to Top Floating Action
  // -------------------------------------------------------------------------
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 380) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -------------------------------------------------------------------------
  // 12. Live Workshop Video Showcase Controller (Autoplay + Mute/Play Controls)
  // -------------------------------------------------------------------------
  const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach((card) => {
    const video = card.querySelector('.showcase-video');
    const wrap = card.querySelector('.video-media-wrap');
    const muteBtn = card.querySelector('.video-mute-btn');
    const iconMuted = muteBtn ? muteBtn.querySelector('.icon-muted') : null;
    const iconUnmuted = muteBtn ? muteBtn.querySelector('.icon-unmuted') : null;

    if (!video) return;

    // Guarantee autoplay attributes
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.autoplay = true;

    // Initial play attempt
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        card.classList.add('is-paused');
      });
    }

    // Toggle Play/Pause on video click
    if (wrap) {
      wrap.addEventListener('click', (e) => {
        if (e.target.closest('.video-mute-btn')) return;

        if (video.paused) {
          video.play().catch(() => {});
          delete card.dataset.manuallyPaused;
          card.classList.remove('is-paused');
        } else {
          video.pause();
          card.dataset.manuallyPaused = 'true';
          card.classList.add('is-paused');
        }
      });
    }

    // Toggle Sound on mute button click
    if (muteBtn) {
      muteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        if (video.muted) {
          if (iconMuted) iconMuted.style.display = 'block';
          if (iconUnmuted) iconUnmuted.style.display = 'none';
        } else {
          if (iconMuted) iconMuted.style.display = 'none';
          if (iconUnmuted) iconUnmuted.style.display = 'block';
        }
      });
    }

    // Update is-paused class based on native events
    video.addEventListener('play', () => card.classList.remove('is-paused'));
    video.addEventListener('pause', () => card.classList.add('is-paused'));
  });

  // IntersectionObserver to auto-play when in viewport and pause when out of view
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector('.showcase-video');
        if (!video) return;
        if (entry.isIntersecting) {
          if (video.paused && !entry.target.dataset.manuallyPaused) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      });
    }, { threshold: 0.25 });

    videoCards.forEach((card) => videoObserver.observe(card));
  }

});
