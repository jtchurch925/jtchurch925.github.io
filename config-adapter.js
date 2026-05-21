// Adapter to make config.js work with existing index.html
// Load this AFTER config.js

if (typeof CONFIG !== 'undefined') {
  // Map CONFIG to the format the HTML expects
  window.SITE_CONFIG = {
    name: "J.T. Church",
    tagline: CONFIG.siteName || "Designer & Illustrator",
    bio: "I'm a designer and illustrator working across disciplines — from brand identity to narrative illustration. I believe good design tells a story.",
    about: [
      "I'm J.T. Church, a designer and illustrator based in Michigan. My work spans brand identity, illustration, and web design.",
      "Whether I'm crafting a logo or illustrating a scene, I approach each project with curiosity and care. I love exploring different styles and finding the right visual voice for each story.",
      "When I'm not designing, you'll find me sketching ideas, exploring new techniques, or getting lost in a good book."
    ],
    email: "hello@jtchurch.com",
    handle: "jtchurch925",
    github: "https://github.com/jtchurch925",
    behance: "",
    linkedin: ""
  };

  // Map portfolio items to CARDS format
  window.CARDS = CONFIG.portfolio.map(function(item) {

    // Map category names
    var categoryMap = {
      'forest': 'Illustration',
      'village': 'Logo Design',
      'monster': 'Experimental',
      'treasure': 'Experimental'
    };

    return {
      title: item.title,
      category: categoryMap[item.category] || 'Illustration',
      image: item.image,
      description: item.description,
      _raw: item.category
    };
  });

  // Limit monster and treasure to one card each
  var monsterSeen = false;
  var treasureSeen = false;
  window.CARDS = window.CARDS.filter(function(card) {
    if (card._raw === 'monster') {
      if (monsterSeen) return false;
      monsterSeen = true;
    }
    if (card._raw === 'treasure') {
      if (treasureSeen) return false;
      treasureSeen = true;
    }
    return true;
  });
}
