export type Song = {
  id: number;
  title: string;
  artist: string;
  image: string;
  url?: string;
  isExplicit?: boolean;
};

export type Artist = {
  id: number;
  name: string;
  image: string;
  role: string;
};

export type Album = {
  id: number;
  title: string;
  artist: string;
  image: string;
  type: string; // e.g. "Album", "Single"
};

export type Navbar = {
  title: string;
  isFollow?: string;
};

export type FooterSection = {
  title: string;
  links: string[];
  to?: string[];
};