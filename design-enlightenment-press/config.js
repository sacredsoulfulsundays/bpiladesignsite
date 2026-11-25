// EASY TOGGLES: edit these values when the release details are confirmed.
window.PRESS_CONFIG = {
  // Change to true ONLY when the new books are available to buy.
  // Also paste their real store URLs into BOOKS below. Blank links stay hidden.
  RETAIL_LIVE: false,
  SIGNING_DETAILS: {
    date: 'Wednesday, December 9, 2026',
    venue: 'Coblan Italian Kitchen Store',
    address: '1805 NW 97th Avenue, Miami, FL 33172',
    time: null, // Replace null with a quoted time when confirmed.
    rsvp: null, // Replace null with a quoted RSVP URL when confirmed.
    show: true // Set false to hide the signing section and its hero link.
  },
  PODCAST_URL: null, // Add the episode URL to reveal the podcast card.

  // Prices are plain display strings, not calculated numbers.
  // Keep these IDs: they connect each setting to its static HTML card.
  // Sacred Spaces is always available, independent of RETAIL_LIVE.
  BOOKS: [
    {
      id: 'sacred-spaces',
      title: 'Sacred Spaces for Inspired Living',
      subtitle: 'Your Guide to Design Enlightenment',
      availableNow: true,
      price: '',
      buyLinks: [
        { label: 'Amazon', href: 'https://www.amazon.com/Sacred-Spaces-Inspired-Living-Enlightenment/dp/1504364201' },
        { label: 'Barnes & Noble', href: 'https://www.barnesandnoble.com/w/sacred-spaces-for-inspired-living-bea-pila/1124547203' }
      ]
    },
    {
      id: 'sacred-living',
      title: 'Sacred Living',
      subtitle: 'Wisdom from a Reluctant Goddess',
      availableNow: false,
      price: '$21.99',
      buyLinks: [
        { label: 'Amazon', href: '' },
        { label: 'Barnes & Noble', href: '' },
        { label: 'Bookshop.org', href: '' }
      ]
    },
    {
      id: 'sacred-living-practice',
      title: 'Sacred Living',
      subtitle: 'Putting It into Practice',
      availableNow: false,
      price: '$19.99',
      buyLinks: [
        { label: 'Amazon', href: '' },
        { label: 'Barnes & Noble', href: '' },
        { label: 'Bookshop.org', href: '' }
      ]
    }
  ]
};
// This file only controls enhancements. The HTML contains the complete
// pre-release page for readers without JavaScript. If permanent dates,
// prices or publication facts change, update that fallback HTML too.
