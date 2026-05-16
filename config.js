// Portfolio configuration
const CONFIG = {
  // Site metadata
  siteName: "Your Portfolio Name",
  tagline: "Designer & Illustrator",
  
  // Card categories - each card will randomly get one of these themes
  categories: {
    forest: {
      name: "Forest",
      color: "#2d5016", // Deep forest green
      description: "Illustrations & Narrative Work"
    },
    village: {
      name: "Village", 
      color: "#8b4513", // Warm terracotta/saddle brown
      description: "Logos & Brand Identity"
    },
    monster: {
      name: "Monster",
      color: "#4a0000", // Deep red/maroon - used for game over cards
      description: "Game Over"
    },
    treasure: {
      name: "Treasure",
      color: "#997700", // Golden/treasure color
      description: "You Win!"
    }
  },

  // Portfolio pieces
  portfolio: [
    // FOREST CATEGORY - Illustrations (8 cards)
    {
      id: "illus1",
      title: "Fantasy Map",
      category: "forest",
      image: "Illus1.png",
      description: "Hand-drawn fantasy map with villages and landmarks",
      client: null,
      year: null,
      tags: ["illustration", "map", "fantasy"]
    },
    {
      id: "illus2",
      title: "Journey to the Castle",
      category: "forest",
      image: "Illus2.png",
      description: "Tortoises on an epic journey through mountains",
      client: null,
      year: null,
      tags: ["illustration", "fantasy", "journey"]
    },
    {
      id: "illus3",
      title: "Foxes at the Manor",
      category: "forest",
      image: "Illus3.png",
      description: "Vintage-style illustration of foxes by a manor house",
      client: null,
      year: null,
      tags: ["illustration", "vintage", "animals"]
    },
    {
      id: "illus4",
      title: "Underground Den",
      category: "forest",
      image: "Illus4.png",
      description: "Cross-section view of family discovering underground secrets",
      client: null,
      year: null,
      tags: ["illustration", "mystery", "home"]
    },
    {
      id: "illus5",
      title: "Dragon Battle",
      category: "forest",
      image: "Illus5.png",
      description: "Epic warrior confronting a dragon",
      client: null,
      year: null,
      tags: ["illustration", "fantasy", "action"]
    },
    {
      id: "illus6",
      title: "Winter Hibernation",
      category: "forest",
      image: "Illus6.png",
      description: "Foxes nestled in their underground burrow during winter",
      client: null,
      year: null,
      tags: ["illustration", "nature", "cross-section"]
    },
    {
      id: "illus7",
      title: "Kitchen Chaos",
      category: "forest",
      image: "Illus7.png",
      description: "Modern life meets social media perfection",
      client: null,
      year: null,
      tags: ["illustration", "contemporary", "humor"]
    },
    {
      id: "illus8",
      title: "Electric Glaze Donuts",
      category: "forest",
      image: "Illus8.png",
      description: "Vibrant neon donut shop branding illustration",
      client: "Electric Glaze",
      year: null,
      tags: ["illustration", "neon", "retro"]
    },

    // VILLAGE CATEGORY - Logos (9 cards)
    {
      id: "logo2",
      title: "Bombshell Salon & Spa",
      category: "village",
      image: "Logo2.png",
      description: "Beauty salon branding with elegant illustration",
      client: "Bombshell Salon & Spa",
      year: null,
      tags: ["logo", "beauty", "elegant"]
    },
    {
      id: "logo3",
      title: "Crane Technologies",
      category: "village",
      image: "Logo3.png",
      description: "Tech company logo with clever crane hook design",
      client: "Crane Technologies",
      year: null,
      tags: ["logo", "technology", "clever"]
    },
    {
      id: "logo5",
      title: "Electric Glaze",
      category: "village",
      image: "Logo5.png",
      description: "Retro neon donut shop branding",
      client: "Electric Glaze",
      year: null,
      tags: ["logo", "neon", "80s", "food"]
    },
    {
      id: "logo7",
      title: "Hicks & Cline Painting",
      category: "village",
      image: "Logo7.png",
      description: "Professional painting company monogram with ladder detail",
      client: "Hicks & Cline Painting LLC",
      year: null,
      tags: ["logo", "monogram", "construction"]
    },
    {
      id: "logo8",
      title: "The Riff",
      category: "village",
      image: "Logo8.gif",
      description: "Bold, angular logo with dynamic energy",
      client: "The Riff",
      year: null,
      tags: ["logo", "animated", "music", "bold"]
    },
    {
      id: "logo10",
      title: "The Stone Soup Project",
      category: "village",
      image: "Logo10.png",
      description: "Hand-drawn community organization branding",
      client: "The Stone Soup Project",
      year: null,
      tags: ["logo", "hand-drawn", "community", "nonprofit"]
    },
    {
      id: "logo13",
      title: "Arrow Line Company",
      category: "village",
      image: "Logo13.png",
      description: "Clean typography with strong directional design",
      client: "Arrow Line Company",
      year: null,
      tags: ["logo", "typography", "modern"]
    },
    {
      id: "logo15",
      title: "Brothers Beard Balm",
      category: "village",
      image: "Logo15.png",
      description: "Vintage globe design for handcrafted grooming products",
      client: "Brothers Beard Balm",
      year: null,
      tags: ["logo", "vintage", "grooming", "handcrafted"]
    },

    // MONSTER CATEGORY - Game Over cards (5 cards)
    {
      id: "monster1",
      title: "Game Over",
      category: "monster",
      image: "Monster1.jpg",
      description: "The Pancake Monster has found you!",
      client: null,
      year: null,
      tags: ["game-over", "monster"],
      isGameOver: true
    },
    {
      id: "monster2",
      title: "Game Over",
      category: "monster",
      image: "Monster2.jpg",
      description: "The Mimic Chest was a trap!",
      client: null,
      year: null,
      tags: ["game-over", "monster"],
      isGameOver: true
    },
    {
      id: "monster3",
      title: "Game Over",
      category: "monster",
      image: "Monster3.jpg",
      description: "The Copy Machine Monster strikes!",
      client: null,
      year: null,
      tags: ["game-over", "monster"],
      isGameOver: true
    },
    {
      id: "monster4",
      title: "Game Over",
      category: "monster",
      image: "Monster4.jpg",
      description: "Dragged into the depths!",
      client: null,
      year: null,
      tags: ["game-over", "monster"],
      isGameOver: true
    },
    {
      id: "monster5",
      title: "Game Over",
      category: "monster",
      image: "Monster5.jpg",
      description: "The Server Room Horror has you!",
      client: null,
      year: null,
      tags: ["game-over", "monster"],
      isGameOver: true
    },

    // TREASURE CATEGORY - Victory card (1 card)
    {
      id: "treasure1",
      title: "You Win!",
      category: "treasure",
      image: "Tereasure1.jpg",
      description: "You found the treasure!",
      client: null,
      year: null,
      tags: ["victory", "treasure"],
      isVictory: true
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
