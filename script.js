/**
 * ASTRA Research - Primary Client-Side JavaScript
 * Pure Vanilla JavaScript (ES6+)
 * Zero External Dependencies - GitHub Pages Compatible
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. DOM Elements & State
  // -------------------------------------------------------------------------
  const siteHeader = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');
  const currentYearSpan = document.getElementById('current-year');
  const queryChips = document.querySelectorAll('.query-chip');

  // Scientific Console Elements
  const consoleDisplay = document.getElementById('console-display');
  const consoleHeadline = document.getElementById('console-headline');
  const consoleSummary = document.getElementById('console-summary');
  const consoleNode1 = document.getElementById('console-node-1');
  const consoleNode2 = document.getElementById('console-node-2');
  const consoleNode3 = document.getElementById('console-node-3');
  const consoleCitations = document.getElementById('console-citations');

  // Interactive Scientific Datasets for Hero Console
  const researchDatasets = {
    neuro: {
      headline: 'Tau Oligomerization & CDK5 Cross-Talk',
      summary: 'Multi-cohort systematic synthesis confirms hyperphosphorylation at Thr231 initiates pre-filament structural disruption. Cross-citation topology isolates 4 pivotal papers linking TREM2 microglial clearance deficiency with CDK5 activation rates.',
      node1: 'CDK5 / p25 Activator Complex',
      node2: 'Low (2 dissenters / 144 studies)',
      node3: 'Allosteric Kinase Inhibition',
      citations: 'Referenced: Nature Neurosci. (2024), Science Transl. Med. (2025), Cell (2025)'
    },
    quantum: {
      headline: 'Cryptochrome Radical Pair Coherence in Avian Navigation',
      summary: 'Cross-disciplinary analysis bridging quantum entanglement and sensory avian biology. Flavin adenine dinucleotide (FAD) radical pair yields sustain spin coherence for >1.2 microseconds at physiological body temperatures in European robins.',
      node1: 'FAD Photo-Reduction Kinetics',
      node2: 'Negligible (1 dissenter / 89 studies)',
      node3: 'Bio-Mimetic Quantum Sensors',
      citations: 'Referenced: Nature (2024), Phys. Rev. X (2025), PNAS (2025)'
    },
    crispr: {
      headline: 'Cas12a Cleavage Specificity & Off-Target Kinetic Profiling',
      summary: 'Comprehensive meta-analysis across 24,190 sgRNA targeting libraries reveals non-canonical protospacer adjacent motif (PAM) tolerance is suppressed by engineered loop-2 alterations, reducing off-target cleavages below 0.002%.',
      node1: 'Loop-2 Stereochemical Redesign',
      node2: 'Zero (99.8% consensus across 210 studies)',
      node3: 'High-Fidelity Gene Therapeutics',
      citations: 'Referenced: Nature Biotech. (2024), Cell Stem Cell (2025), Science (2025)'
    }
  };

  // -------------------------------------------------------------------------
  // 2. Initialization
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNav();
    initSmoothNavigation();
    initActiveNavObserver();
    initHeroConsoleTabs();
    initFormValidation();
    initDynamicYear();
  });

  // -------------------------------------------------------------------------
  // 3. Dynamic Year
  // -------------------------------------------------------------------------
  function initDynamicYear() {
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }
  }

  // -------------------------------------------------------------------------
  // 4. Header Scroll State
  // -------------------------------------------------------------------------
  function initHeaderScroll() {
    if (!siteHeader) return;

    const handleScroll = () => {
      if (window.scrollY > 24) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // -------------------------------------------------------------------------
  // 5. Mobile Navigation Toggle
  // -------------------------------------------------------------------------
  function initMobileNav() {
    if (!menuToggle || !primaryNav) return;

    const toggleNav = (open) => {
      const isOpen = open !== undefined ? open : menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      primaryNav.classList.toggle('is-open', isOpen);

      // Prevent background scrolling on mobile when open
      document.body.classList.toggle('nav-lock', isOpen);
    };

    menuToggle.addEventListener('click', () => {
      toggleNav();
    });

    // Close when clicking nav links
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (primaryNav.classList.contains('is-open')) {
          toggleNav(false);
        }
      });
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        toggleNav(false);
        menuToggle.focus();
      }
    });

    // Close on resize if expanded to desktop view
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && primaryNav.classList.contains('is-open')) {
        toggleNav(false);
      }
    }, { passive: true });
  }

  // -------------------------------------------------------------------------
  // 6. Smooth Navigation & Focus Management
  // -------------------------------------------------------------------------
  function initSmoothNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#' || !targetId) return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });

          // Manage focus for accessibility
          if (targetElement.tabIndex === -1) {
            targetElement.focus();
          } else {
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus({ preventScroll: true });
          }
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 7. Active Navigation Link Tracker (IntersectionObserver)
  // -------------------------------------------------------------------------
  function initActiveNavObserver() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // -------------------------------------------------------------------------
  // 8. Interactive Hero Research Console Switcher
  // -------------------------------------------------------------------------
  function initHeroConsoleTabs() {
    if (!queryChips.length || !consoleDisplay) return;

    queryChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const topic = chip.dataset.topic;
        const data = researchDatasets[topic];
        if (!data) return;

        // Update active chip state & ARIA attributes
        queryChips.forEach((c) => {
          c.classList.remove('active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-selected', 'true');
        consoleDisplay.setAttribute('aria-labelledby', chip.id);

        // Smooth text transition
        consoleDisplay.classList.add('is-transitioning');
        setTimeout(() => {
          if (consoleHeadline) consoleHeadline.textContent = data.headline;
          if (consoleSummary) consoleSummary.textContent = data.summary;
          if (consoleNode1) consoleNode1.textContent = data.node1;
          if (consoleNode2) consoleNode2.textContent = data.node2;
          if (consoleNode3) consoleNode3.textContent = data.node3;
          if (consoleCitations) consoleCitations.textContent = data.citations;
          consoleDisplay.classList.remove('is-transitioning');
        }, 120);
      });
    });
  }

  // -------------------------------------------------------------------------
  // 9. Accessible Form Validation & Feedback
  // -------------------------------------------------------------------------
  function initFormValidation() {
    if (!contactForm) return;

    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const roleInput = document.getElementById('user-role');
    const messageInput = document.getElementById('user-message');

    const validators = {
      name: (val) => {
        const trimmed = val.trim();
        if (!trimmed) return 'Please enter your full name.';
        if (trimmed.length < 2) return 'Name must be at least 2 characters.';
        return '';
      },
      email: (val) => {
        const trimmed = val.trim();
        if (!trimmed) return 'Please enter your academic or institutional email address.';
        // Standard RFC 5322 compatible email pattern
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
        if (!emailRegex.test(trimmed)) return 'Please enter a valid email address (e.g. name@university.edu).';
        return '';
      },
      message: (val) => {
        const trimmed = val.trim();
        if (!trimmed) return 'Please provide details about your research objectives.';
        if (trimmed.length < 10) return 'Please provide at least 10 characters describing your inquiry.';
        return '';
      }
    };

    // Helper: Validate Single Input Field
    const validateField = (input, groupSelector, errorId, validator) => {
      const group = document.querySelector(groupSelector);
      const errorContainer = document.getElementById(errorId);
      const errorMsg = validator(input.value);

      if (errorMsg) {
        group.classList.add('has-error');
        group.classList.remove('has-success');
        input.setAttribute('aria-invalid', 'true');
        if (errorContainer) {
          errorContainer.textContent = errorMsg;
        }
        return false;
      } else {
        group.classList.remove('has-error');
        group.classList.add('has-success');
        input.setAttribute('aria-invalid', 'false');
        if (errorContainer) {
          errorContainer.textContent = '';
        }
        return true;
      }
    };

    // Helper: Clear validation state
    const clearFieldError = (input, groupSelector, errorId) => {
      const group = document.querySelector(groupSelector);
      const errorContainer = document.getElementById(errorId);
      group.classList.remove('has-error');
      input.removeAttribute('aria-invalid');
      if (errorContainer) {
        errorContainer.textContent = '';
      }
    };

    // Real-time listeners: Validate on Blur, clear error on input
    if (nameInput) {
      nameInput.addEventListener('blur', () => validateField(nameInput, '#group-name', 'name-error', validators.name));
      nameInput.addEventListener('input', () => {
        if (document.querySelector('#group-name').classList.contains('has-error')) {
          validateField(nameInput, '#group-name', 'name-error', validators.name);
        }
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => validateField(emailInput, '#group-email', 'email-error', validators.email));
      emailInput.addEventListener('input', () => {
        if (document.querySelector('#group-email').classList.contains('has-error')) {
          validateField(emailInput, '#group-email', 'email-error', validators.email);
        }
      });
    }

    if (messageInput) {
      messageInput.addEventListener('blur', () => validateField(messageInput, '#group-message', 'message-error', validators.message));
      messageInput.addEventListener('input', () => {
        if (document.querySelector('#group-message').classList.contains('has-error')) {
          validateField(messageInput, '#group-message', 'message-error', validators.message);
        }
      });
    }

    // Submit Handler
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear previous top-level feedback
      formFeedback.className = 'form-feedback';
      formFeedback.textContent = '';

      // Validate all fields
      const isNameValid = validateField(nameInput, '#group-name', 'name-error', validators.name);
      const isEmailValid = validateField(emailInput, '#group-email', 'email-error', validators.email);
      const isMessageValid = validateField(messageInput, '#group-message', 'message-error', validators.message);

      const isValid = isNameValid && isEmailValid && isMessageValid;

      if (!isValid) {
        formFeedback.className = 'form-feedback is-visible status-error';
        formFeedback.textContent = 'Please correct the highlighted fields before submitting your inquiry.';
        formFeedback.focus();

        // Focus first invalid element
        if (!isNameValid) nameInput.focus();
        else if (!isEmailValid) emailInput.focus();
        else if (!isMessageValid) messageInput.focus();
        return;
      }

      // Valid: Start Simulated Asynchronous Transmission
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;
      const originalBtnText = submitBtn.querySelector('.btn-text').textContent;
      submitBtn.querySelector('.btn-text').textContent = 'Transmitting Inquiry...';

      const userName = nameInput.value.trim();
      const userEmail = emailInput.value.trim();
      const userRole = roleInput ? roleInput.options[roleInput.selectedIndex].text : 'Researcher';
      const referenceId = 'ASTRA-' + Math.floor(100000 + Math.random() * 900000);

      // Simulate API processing delay (700ms)
      setTimeout(() => {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').textContent = originalBtnText;

        // Reset form inputs and visual state classes
        contactForm.reset();
        document.querySelectorAll('.form-group').forEach((g) => {
          g.classList.remove('has-success', 'has-error');
        });
        document.querySelectorAll('.field-error').forEach((fe) => {
          fe.textContent = '';
        });

        // Accessible Success Banner
        formFeedback.className = 'form-feedback is-visible status-success';
        formFeedback.innerHTML = `
          <strong>Inquiry Successfully Transmitted!</strong><br>
          Thank you, <em>${escapeHtml(userName)}</em>. We have received your inquiry for <em>${escapeHtml(userRole)}</em> access and sent an automated confirmation to <strong>${escapeHtml(userEmail)}</strong>.<br>
          <span class="docket-tag">Reference Docket: ${referenceId}</span>
        `;
        formFeedback.focus();
      }, 700);
    });
  }

  // -------------------------------------------------------------------------
  // 10. Sanitization Utility
  // -------------------------------------------------------------------------
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

})();
