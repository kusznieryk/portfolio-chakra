export interface itemDetail {
  icon: string;
  text: string;
  active?: boolean;
}
// Expanded project interface to support richer data shapes without breaking existing usage
export interface project {
  code: string;
  img: string;
  description: string;
  live: string;
  name: string;
  // Optional fields for extended cataloging
  stack?: string[];
  featured?: boolean;
  longDescription?: string;
  badge?: string;
}

// New domain interfaces for various static data payloads
export interface Experience {
  id: string;
  date: string;
  company: string;
  title: string;
  description: string;
  bullets?: string[];
  tags?: string[];
}

export interface Fact {
  label: string;
  value: string;
}
export interface AboutData {
  paragraphs: string[];
  facts: Fact[];
}

export interface Stat {
  value: string;
  label: string;
}
export interface HeroData {
  tag: string;
  name: string;
  title: string;
  description: string;
  stats: Stat[];
}

export interface ContactLink {
  href: string;
  icon: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
}
