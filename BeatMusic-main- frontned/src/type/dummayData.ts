import type { Song, Artist, Album } from "./movie-name";

export const songs: Song[] = [
  {
    id: 1,
    title: "Radhimaa - From \"Think Indie\"",
    artist: "Sai Abhyankkar, Nargis Teji, Asma Taji, Vivek",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Tera Mera Rishta - New Version",
    artist: "Mithoon, Pritam, Mustafa Zahid, Sayeed Quadri",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Mallepoola Pallaki (From \"Irumudi\")",
    artist: "G. V. Prakash, Dappu Srinu, Chowdam Srinivasa Rao,...",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Ala Bolelo (From \"Jailer 2\")",
    artist: "Anirudh Ravichander, Arunraja Kamaraj",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    title: "IYKYK",
    artist: "Jxggi, Dishant, Sickboi",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop",
    isExplicit: true,
  },
  {
    id: 6,
    title: "Shiv Tandav Stotram",
    artist: "Shankar Mahadevan",
    image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=300&h=300&fit=crop",
  },
  {
    id: 7,
    title: "KALYANI (with Shreya Ghoshal) - Remix",
    artist: "ARJN, KDS, FIFTY4, Shreya Ghoshal",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    title: "Kalyana Virundhu (From \"Dorothy\")",
    artist: "Ilaiyaraaja, Yugendran Vasudevan, Anthony-...",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop",
  },
];

export const artists: Artist[] = [
  {
    id: 1,
    name: "Pritam",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "A.R. Rahman",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Arijit Singh",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Sachin-Jigar",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Vishal-Shekhar",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Atif Aslam",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Anirudh Ravichander",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Udit Narayan",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&h=300&fit=crop",
  },
];

export const albums: Album[] = [
  {
    id: 1,
    title: "Aashiqui 2",
    artist: "Mithoon, Ankit Tiwari, Jeet Gannguli",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop",
    type: "Album",
  },
  {
    id: 2,
    title: "Kabir Singh",
    artist: "Sachet Tandon, Shreya Ghoshal, Mithoon",
    image: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=300&h=300&fit=crop",
    type: "Album",
  },
  {
    id: 3,
    title: "Animal",
    artist: "Manan Bhardwaj, Vishal Mishra, Jaani",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300&h=300&fit=crop",
    type: "Album",
  },
  {
    id: 4,
    title: "Finding Him",
    artist: "Jailer 2 BGM / Anirudh Ravichander",
    image: "https://images.unsplash.com/photo-1446057032654-9d8885b73968?w=300&h=300&fit=crop",
    type: "Single",
  },
  {
    id: 5,
    title: "YOUNG ONES",
    artist: "Sidhu Moose Wala, Sunny Malton",
    image: "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?w=300&h=300&fit=crop",
    type: "Single",
  },
  {
    id: 6,
    title: "G.O.A.T.",
    artist: "Diljit Dosanjh",
    image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=300&h=300&fit=crop",
    type: "Album",
  },
  {
    id: 7,
    title: "Moosetape",
    artist: "Sidhu Moose Wala",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
    type: "Album",
  },
  {
    id: 8,
    title: "Starboy",
    artist: "The Weeknd",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    type: "Album",
  },
];