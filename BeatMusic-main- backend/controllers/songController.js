const Song = require('../models/Song');

// List of default songs to seed
const defaultSongs = [
  {
    id: 1,
    title: "Radhimaa - From \"Think Indie\"",
    artist: "Sai Abhyankkar, Nargis Teji, Asma Taji, Vivek",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    title: "Tera Mera Rishta - New Version",
    artist: "Mithoon, Pritam, Mustafa Zahid, Sayeed Quadri",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    title: "Mallepoola Pallaki (From \"Irumudi\")",
    artist: "G. V. Prakash, Dappu Srinu, Chowdam Srinivasa Rao",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: 4,
    title: "Ala Bolelo (From \"Jailer 2\")",
    artist: "Anirudh Ravichander, Arunraja Kamaraj",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    id: 5,
    title: "IYKYK",
    artist: "Jxggi, Dishant, Sickboi",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    isExplicit: true
  },
  {
    id: 6,
    title: "Shiv Tandav Stotram",
    artist: "Shankar Mahadevan",
    image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=300&h=300&fit=crop",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  {
    id: 7,
    title: "KALYANI (with Shreya Ghoshal) - Remix",
    artist: "ARJN, KDS, FIFTY4, Shreya Ghoshal",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
  },
  {
    id: 8,
    title: "Kalyana Virundhu (From \"Dorothy\")",
    artist: "Ilaiyaraaja, Yugendran Vasudevan, Anthony",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  }
];

// Seed default songs if database collection is empty
const seedSongs = async () => {
  try {
    const count = await Song.countDocuments();
    if (count === 0) {
      await Song.insertMany(defaultSongs);
      console.log('Successfully seeded default songs database.');
    }
  } catch (err) {
    console.error('Failed to seed default songs to MongoDB:', err);
  }
};

// @desc    Get all songs
// @route   GET /api/songs
// @access  Public
const getSongs = async (req, res) => {
  try {
    const songs = await Song.find().sort({ id: 1 });
    res.json(songs);
  } catch (err) {
    console.error("Get songs error:", err);
    res.status(500).json({ error: 'Failed to retrieve songs list' });
  }
};

module.exports = {
  getSongs,
  seedSongs
};
