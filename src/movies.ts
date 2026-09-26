export interface Movie { id: string; title: string; year: number; description: string; short: string; tags: string[]; why: string; runtime: number; color: string; posterUrl: string; }
export const movies: Movie[] = [
  {
    "id": "notting-hill",
    "title": "Notting Hill",
    "year": 1999,
    "description": "A famous Hollywood actress unexpectedly falls for an ordinary London bookstore owner after wandering into his shop.",
    "short": "A famous Hollywood actress unexpectedly falls for an ordinary London bookstore owner after wandering into his shop.",
    "tags": [
      "Cozy",
      "British",
      "Funny",
      "Romantic"
    ],
    "why": "For pretending we're sophisticated while watching Hugh Grant be awkward.",
    "runtime": 124,
    "color": "#425d63",
    "posterUrl": "./posters/notting-hill.jpg"
  },
  {
    "id": "how-to-lose-a-guy-in-10-days",
    "title": "How to Lose a Guy in 10 Days",
    "year": 2003,
    "description": "A journalist trying to drive a man away in ten days unknowingly chooses an advertising executive who has made a bet that he can make any woman fall for him.",
    "short": "A journalist trying to drive a man away in ten days unknowingly chooses an advertising executive who has made a bet that he can make any woman fall for him.",
    "tags": [
      "Flirty",
      "Chaotic",
      "2000s",
      "Rom-Com"
    ],
    "why": "Elite flirting, terrible decisions, and peak 2000s rom-com energy.",
    "runtime": 116,
    "color": "#b8884e",
    "posterUrl": "./posters/how-to-lose-a-guy-in-10-days.jpg"
  },
  {
    "id": "the-holiday",
    "title": "The Holiday",
    "year": 2006,
    "description": "Two women on opposite sides of the Atlantic swap homes and unexpectedly find romance along the way.",
    "short": "Two women on opposite sides of the Atlantic swap homes and unexpectedly find romance along the way.",
    "tags": [
      "Cozy",
      "Charming",
      "Comfort Movie",
      "Romantic"
    ],
    "why": "Basically two hours of making us want a tiny English cottage.",
    "runtime": 136,
    "color": "#6b7662",
    "posterUrl": "./posters/the-holiday.jpg"
  },
  {
    "id": "a-walk-to-remember",
    "title": "A Walk to Remember",
    "year": 2002,
    "description": "A rebellious teenager unexpectedly falls in love with a quiet, kind-hearted girl who changes the course of his life.",
    "short": "A rebellious teenager unexpectedly falls in love with a quiet, kind-hearted girl who changes the course of his life.",
    "tags": [
      "Emotional",
      "Young Love",
      "Tearjerker",
      "Romantic"
    ],
    "why": "For when we apparently want movie night to emotionally destroy us.",
    "runtime": 101,
    "color": "#9d7c72",
    "posterUrl": "./posters/a-walk-to-remember.jpg"
  },
  {
    "id": "10-things-i-hate-about-you",
    "title": "10 Things I Hate About You",
    "year": 1999,
    "description": "A witty high-school romance involving an elaborate dating scheme that becomes much more genuine than anyone expected.",
    "short": "A witty high-school romance involving an elaborate dating scheme that becomes much more genuine than anyone expected.",
    "tags": [
      "Funny",
      "Flirty",
      "90s",
      "Enemies-to-Lovers-ish"
    ],
    "why": "Heath Ledger singing in the bleachers. That is the argument.",
    "runtime": 97,
    "color": "#715455",
    "posterUrl": "./posters/10-things-i-hate-about-you.jpg"
  },
  {
    "id": "you-ve-got-mail",
    "title": "You’ve Got Mail",
    "year": 1998,
    "description": "Two business rivals unknowingly fall for each other through anonymous emails while competing against each other in real life.",
    "short": "Two business rivals unknowingly fall for each other through anonymous emails while competing against each other in real life.",
    "tags": [
      "Cozy",
      "NYC",
      "Slow Burn",
      "Classic Rom-Com"
    ],
    "why": "Bookshops, autumn New York, and people falling for each other through messages. Suspiciously relevant.",
    "runtime": 119,
    "color": "#9a744a",
    "posterUrl": "./posters/you-ve-got-mail.jpg"
  },
  {
    "id": "when-harry-met-sally",
    "title": "When Harry Met Sally…",
    "year": 1989,
    "description": "Two friends keep crossing paths over the years while trying to figure out whether friendship and romance can really stay separate.",
    "short": "Two friends keep crossing paths over the years while trying to figure out whether friendship and romance can really stay separate.",
    "tags": [
      "Witty",
      "NYC",
      "Friends-to-Lovers",
      "Classic"
    ],
    "why": "Top-tier conversations, autumn New York and an unreasonable amount of chemistry.",
    "runtime": 95,
    "color": "#675443",
    "posterUrl": "./posters/when-harry-met-sally.jpg"
  },
  {
    "id": "serendipity",
    "title": "Serendipity",
    "year": 2001,
    "description": "Two strangers meet by chance in New York and decide to leave their future together entirely up to fate.",
    "short": "Two strangers meet by chance in New York and decide to leave their future together entirely up to fate.",
    "tags": [
      "Fate",
      "Winter",
      "Cozy",
      "Romantic"
    ],
    "why": "For when we want to let the universe make questionable relationship decisions for us.",
    "runtime": 90,
    "color": "#596f81",
    "posterUrl": "./posters/serendipity.jpg"
  },
  {
    "id": "13-going-on-30",
    "title": "13 Going on 30",
    "year": 2004,
    "description": "A thirteen-year-old suddenly wakes up as her thirty-year-old self and begins discovering what actually matters to her.",
    "short": "A thirteen-year-old suddenly wakes up as her thirty-year-old self and begins discovering what actually matters to her.",
    "tags": [
      "Cute",
      "Nostalgic",
      "Friends-to-Lovers",
      "2000s"
    ],
    "why": "Peak comfort movie energy and aggressively good early-2000s vibes.",
    "runtime": 98,
    "color": "#b7777e",
    "posterUrl": "./posters/13-going-on-30.png"
  },
  {
    "id": "the-proposal",
    "title": "The Proposal",
    "year": 2009,
    "description": "A demanding executive convinces her assistant to pretend to marry her, only for their fake engagement to become unexpectedly complicated.",
    "short": "A demanding executive convinces her assistant to pretend to marry her, only for their fake engagement to become unexpectedly complicated.",
    "tags": [
      "Fake Dating",
      "Funny",
      "Chaotic",
      "Feel-Good"
    ],
    "why": "Fake dating, Alaska, Sandra Bullock and Ryan Reynolds. Hard to argue with.",
    "runtime": 108,
    "color": "#6d7581",
    "posterUrl": "./posters/the-proposal.jpg"
  },
  {
    "id": "crazy-stupid-love",
    "title": "Crazy, Stupid, Love.",
    "year": 2011,
    "description": "Several overlapping love stories collide while a recently separated man gets an unexpected dating makeover.",
    "short": "Several overlapping love stories collide while a recently separated man gets an unexpected dating makeover.",
    "tags": [
      "Funny",
      "Charming",
      "Flirty",
      "Ensemble"
    ],
    "why": "Ryan Gosling, Emma Stone and one of the greatest chaotic reveal scenes in rom-com history.",
    "runtime": 118,
    "color": "#866b51",
    "posterUrl": "./posters/crazy-stupid-love.jpg"
  },
  {
    "id": "letters-to-juliet",
    "title": "Letters to Juliet",
    "year": 2010,
    "description": "A young woman in Italy discovers an unanswered love letter and sets out to reunite its writer with her first love.",
    "short": "A young woman in Italy discovers an unanswered love letter and sets out to reunite its writer with her first love.",
    "tags": [
      "Italy",
      "Sunshine",
      "Slow Romance",
      "Pretty"
    ],
    "why": "Romance in Italy is almost unfairly effective.",
    "runtime": 105,
    "color": "#808257",
    "posterUrl": "./posters/letters-to-juliet.jpg"
  },
  {
    "id": "about-time",
    "title": "About Time",
    "year": 2013,
    "description": "A young man discovers that the men in his family can travel through time and initially uses the ability to improve his love life.",
    "short": "A young man discovers that the men in his family can travel through time and initially uses the ability to improve his love life.",
    "tags": [
      "Warm",
      "Romantic",
      "Emotional",
      "Beautiful"
    ],
    "why": "Romance, time travel, and a suspiciously high chance of making us emotional.",
    "runtime": 123,
    "color": "#a05e44",
    "posterUrl": "./posters/about-time.jpg"
  },
  {
    "id": "love-rosie",
    "title": "Love, Rosie",
    "year": 2014,
    "description": "Best friends spend years missing their chance to be together as life continuously pulls them in different directions.",
    "short": "Best friends spend years missing their chance to be together as life continuously pulls them in different directions.",
    "tags": [
      "Friends-to-Lovers",
      "Yearning",
      "Funny",
      "Emotional"
    ],
    "why": "An entire movie dedicated to two people making us yell “JUST TELL EACH OTHER.”",
    "runtime": 102,
    "color": "#76758b",
    "posterUrl": "./posters/love-rosie.jpg"
  },
  {
    "id": "set-it-up",
    "title": "Set It Up",
    "year": 2018,
    "description": "Two overworked assistants scheme to make their demanding bosses fall in love and accidentally complicate their own relationship.",
    "short": "Two overworked assistants scheme to make their demanding bosses fall in love and accidentally complicate their own relationship.",
    "tags": [
      "Workplace",
      "Banter",
      "Modern",
      "Feel-Good"
    ],
    "why": "Low-stakes scheming and extremely good banter.",
    "runtime": 105,
    "color": "#46736b",
    "posterUrl": "./posters/set-it-up.jpg"
  },
  {
    "id": "pride-prejudice",
    "title": "Pride & Prejudice",
    "year": 2005,
    "description": "Elizabeth Bennet and the reserved Mr. Darcy gradually reconsider their first impressions of one another.",
    "short": "Elizabeth Bennet and the reserved Mr. Darcy gradually reconsider their first impressions of one another.",
    "tags": [
      "Slow Burn",
      "Period Romance",
      "Yearning",
      "Beautiful"
    ],
    "why": "For maximum yearning and people staring at each other across fields instead of communicating.",
    "runtime": 129,
    "color": "#687456",
    "posterUrl": "./posters/pride-prejudice.jpg"
  },
  {
    "id": "the-notebook",
    "title": "The Notebook",
    "year": 2004,
    "description": "A young couple from different backgrounds fall deeply in love despite family and circumstance pulling them apart.",
    "short": "A young couple from different backgrounds fall deeply in love despite family and circumstance pulling them apart.",
    "tags": [
      "Passionate",
      "Emotional",
      "Classic Romance",
      "Tearjerker"
    ],
    "why": "For when peaceful movie night sounds boring and we'd rather emotionally suffer.",
    "runtime": 123,
    "color": "#516b7b",
    "posterUrl": "./posters/the-notebook.jpg"
  }
];
export const filters = ["All", "Funny", "Cozy", "Flirty", "Emotional", "Classics", "2000s", "Slow Burn", "Friends-to-Lovers"];
export function matchesFilter(m: Movie, filter: string) { if(filter === "All") return true; if(filter === "2000s") return m.year >= 2000 && m.year <= 2009; if(filter === "Classics") return m.year < 2000 || m.tags.some(t => t.includes("Classic")); return m.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())) || (filter === "Funny" && m.tags.includes("Rom-Com")); }
