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
      title: "Winter Hibernation",
      category: "forest",
      image: "Illus1.png",
      description: "Foxes nestled in their underground burrow during winter",
      client: "Children's Book Illustration",
      year: null,
      tags: ["illustration", "map", "fantasy"]
    },
    {
      id: "illus2",
      title: "Foxes at the Manor",
      category: "forest",
      image: "Illus2.png",
      description: "Vintage children's book style illustration of foxes by a manor house",
      client: "Children's Book Illustration",
      year: null,
      tags: ["illustration", "fantasy", "journey"]
    },
    {
      id: "illus3",
      title: "Fantasy Map",
      category: "forest",
      image: "Illus4.png",
      description: "Hand-drawn-style map based on research of ancient Scottish-Celtic shepherd maps",
      client: null,
      year: null,
      tags: ["illustration", "vintage", "animals"]
    },
    {
      id: "illus4",
      title: "Cellar Surprise",
      category: "forest",
      image: "Illus3.png",
      description: "A family discovers an ancient treasure hidden in the cellar",
      client: "Children's Book Illustration",
      year: null,
      tags: ["illustration", "mystery", "home"]
    },
    {
      id: "illus7",
      title: "The Battle of 1914",
      category: "forest",
      image: "Illus7.png",
      description: "The archangel defeats the great dragon.",
      client: null,
      year: null,
      tags: ["illustration", "fantasy", "action"]
    },
    {
      id: "illus6",
      title: "Journey to the Castle",
      category: "forest",
      image: "Illus6.png",
      description: "Tortoises on an epic journey through Scottish hills.",
      client: "Children's Book Illustration",
      year: null,
      tags: ["illustration", "nature", "cross-section"]
    },
    {
      id: "illus5",
      title: "Kitchen Chaos",
      category: "forest",
      image: "Illus5.png",
      description: "Modern life meets social media perfection",
      client: "InvokeAI Community Challenge Winner",
      year: null,
      tags: ["illustration", "contemporary", "humor"]
    },
    {
      id: "illus8",
      title: "Kikis Pet Pics",
      category: "forest",
      image: "Illus8.png",
      description: "Branding for a pet photographer",
      client: "Kiki's Pet Pics",
      year: null,
      tags: ["illustration", "neon", "retro"]
    },

    // VILLAGE CATEGORY - Logos (9 cards)
    {
      id: "logo2",
      title: "Bombshell Salon & Spa",
      category: "village",
      image: "Logo-BombShell-1024.jpg",
      description: "Beauty salon branding with attitude",
      client: "Bombshell Salon & Spa",
      year: null,
      tags: ["logo", "beauty", "elegant"]
    },
    {
      id: "logo3",
      title: "Crane Technologies",
      category: "village",
      image: "Logo-Crane-1024.jpg",
      description: "Industrial equipment company",
      client: "Crane Technologies",
      year: null,
      tags: ["logo", "technology", "clever"]
    },
    {
      id: "logo5",
      title: "Electric Glaze",
      category: "village",
      image: "Logo-ElectricGlaze-1024.jpg",
      description: "Branding for a fun 80's retro donut shop",
      client: "Electric Glaze Donuts",
      year: null,
      tags: ["logo", "neon", "80s", "food"]
    },
    {
      id: "logo7",
      title: "Howell Home",
      category: "village",
      image: "Logo-HowellHome-1024.jpg",
      description: "Residential building and remodeling company",
      client: "Howell Home",
      year: null,
      tags: ["logo", "monogram", "construction"]
    },
    {
      id: "logo8",
      title: "The Ruff",
      category: "village",
      image: "Logo-TheRuff-1024.jpg",
      description: "An online community featuring undiscovered indie rock artists",
      client: "The Ruff",
      year: null,
      tags: ["logo", "animated", "music", "bold"]
    },
    {
      id: "logo10",
      title: "The Stone Soup Project",
      category: "village",
      image: "Logo-StoneSoup-1024.jpg",
      description: "Hand-drawn community outreach food drive branding",
      client: "The Stone Soup Project",
      year: null,
      tags: ["logo", "hand-drawn", "community", "nonprofit"]
    },
    {
      id: "logo13",
      title: "Arrow Line Company",
      category: "village",
      image: "Logo-ArrowLine-1024.jpg",
      description: "A logo for a logistics line company",
      client: "Arrow Line Company",
      year: null,
      tags: ["logo", "typography", "modern"]
    },
    {
      id: "logo15",
      title: "Brothers Beard Balm",
      category: "village",
      image: "Logo-Brothers-1024.jpg",
      description: "Vintage globe design for a handcrafted beard balm",
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
