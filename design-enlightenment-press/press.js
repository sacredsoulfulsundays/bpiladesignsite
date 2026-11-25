// This file only controls enhancements. The HTML contains the complete
// pre-release page for readers without JavaScript. If permanent dates,
// prices or publication facts change, update that fallback HTML too.
(function () {
  'use strict';

  var config = window.PRESS_CONFIG;
  function byId(id) { return document.getElementById(id); }
  function each(selector, callback) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), callback);
  }

  // Build only real store links. Empty placeholders never become buttons.
  function storeLinks(container, book) {
    container.textContent = '';
    book.buyLinks.forEach(function (link) {
      if (!link.href || !link.href.trim()) return;
      var anchor = document.createElement('a');
      anchor.className = 'bp-button';
      anchor.textContent = link.label;
      anchor.href = link.href.trim();
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      container.appendChild(anchor);
    });
  }

  if (config) {
    config.BOOKS.forEach(function (book) {
      var card = document.querySelector('[data-book="' + book.id + '"]');
      if (!card) return;
      card.querySelector('[data-price]').textContent = book.price ? ' · ' + book.price : '';
      if (book.availableNow || config.RETAIL_LIVE) {
        card.querySelector('.bp-dep__badge').textContent = 'Available now';
        storeLinks(card.querySelector('.bp-dep__book-actions'), book);
      }
      var row = document.querySelector('[data-retail-book="' + book.id + '"]');
      if (row && config.RETAIL_LIVE) storeLinks(row.querySelector('.bp-dep__book-actions'), book);
    });
    byId('get-your-copy').hidden = !config.RETAIL_LIVE;
    if (config.RETAIL_LIVE) {
      byId('hero-lead').textContent = 'Two new books from Bea Pila, available now. A book of wisdom from a reluctant goddess, and a companion to help you bring it home.';
      byId('hero-cta').textContent = 'Get your copy';
      byId('hero-cta').href = '#get-your-copy';
    }

    var signing = config.SIGNING_DETAILS;
    byId('signing').hidden = !signing.show;
    byId('hero-signing-link').hidden = !signing.show;
    byId('signing-date').textContent = signing.date.replace(/December 9/g, 'December\u00a09');
    byId('signing-venue').textContent = signing.venue;
    byId('signing-address').textContent = signing.address;
    byId('signing-time').hidden = signing.time === null;
    byId('signing-time').textContent = signing.time === null ? '' : ' · ' + signing.time;
    byId('signing-time-note').hidden = signing.time !== null;
    if (signing.rsvp !== null && signing.rsvp.trim()) {
      byId('signing-rsvp').href = signing.rsvp.trim();
      byId('signing-rsvp').hidden = false;
    }
    if (config.PODCAST_URL && config.PODCAST_URL.trim()) {
      byId('podcast-link').href = config.PODCAST_URL.trim();
      byId('podcast-card').hidden = false;
    }
  }

  // Desktop dropdowns also work with CSS hover/focus when scripting is off.
  each('.bp-header__quick-item--has-children', function (item) {
    var button = item.querySelector('button');
    function open() {
      item.classList.remove('is-closed');
      item.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
    }
    function close() {
      item.classList.remove('is-open');
      item.classList.add('is-closed');
      button.setAttribute('aria-expanded', 'false');
    }
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', function () {
      if (!item.contains(document.activeElement)) close();
    });
    item.addEventListener('focusin', open);
    item.addEventListener('focusout', function (event) {
      if (!item.contains(event.relatedTarget)) close();
    });
    button.addEventListener('click', open);
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        button.focus();
        close();
      }
      if (event.key === 'ArrowDown' && event.target === button) {
        event.preventDefault();
        open();
        item.querySelector('.bp-header__quick-dropdown a').focus();
      }
    });
    document.addEventListener('click', function (event) {
      if (!item.contains(event.target)) close();
    });
  });

  var menu = byId('bp-mobile-menu');
  var menuToggle = document.querySelector('.bp-header__menu-toggle');
  menuToggle.hidden = false;
  menuToggle.addEventListener('click', function () {
    menu.showModal();
    document.body.classList.add('bp-menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  });
  menu.querySelector('.bp-mobile-menu__close').addEventListener('click', function () { menu.close(); });
  each('#bp-mobile-menu a', function (link) {
    link.addEventListener('click', function () { menu.close(); });
  });
  menu.addEventListener('close', function () {
    document.body.classList.remove('bp-menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    each('#bp-mobile-menu details', function (group) { group.open = false; });
    menuToggle.focus();
  });
}());
