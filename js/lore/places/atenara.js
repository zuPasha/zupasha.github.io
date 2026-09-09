window.LORE_ENTRIES = window.LORE_ENTRIES || [];
window.LORE_ENTRIES.push(
  // === PLACES ===
  
  // Atenara
  {
    id: "atenara",
    name: "Atenara",
    aliases: ["Atenaran"],
    category: "places",
    age: null,
    tier: "nation",
    parent: "verdant",
    short: "A small, sun-steeped nation south of Hoshimira, divided into four provinces and known for its deep devotion to the Solarii faith.",
    full: `The Sun-Steeped South
Atenara lies south of Hoshimira along a warm stretch of the eastern mainland. It is one of the smallest mainland nations, yet its climate and culture give it a strong presence. Sahran lies across the sea to the east, connected to Atenara through maritime trade and shared traditions surrounding the sun.

The nation is divided into four provinces. Melqara occupies the west, Khemru the centre, Kushara the east and Heliadis an island lying between the Atenaran mainland and Sahran. Their cultures differ considerably, but the Solarii faith connects them, with sun worship deeply embedded throughout Atenaran life.

~~~Inspiration: Mediterranean, North African and European blend. A fusion of North African, Iberian, Egyptian, Nubian and Greek cultures.~~~
`,
    related: ["melqara", "khemru", "kushara", "heliadis", "solarii", "hoshimira", "sahran"]
  },

  {
    id: "melqara",
    name: "Melqara",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "atenara",
    short: "Atenara's western province, known for whitewashed architecture, blue doors, olive groves and a strong maritime and musical culture.",
    full: `Melqara occupies the western reaches of Atenara. Its coastal towns are characterised by whitewashed buildings and deep blue doors, while olive groves extend inland from the sea.

Melqaran culture is strongly maritime, with music serving as an important part of everyday life. Coastal strings and inland percussion come together in local traditions, reflecting the province's position between sea and interior.

~~~Inspiration: Algerian and Spanish Andalusian blend. Inspired by Algiers, Granada and Seville.~~~
`,
    related: ["atenara"]
  },

  {
    id: "khemru",
    name: "Khemru",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "atenara",
    short: "Atenara's central province, defined by sun-baked plains, ancient temples and the oldest expression of Atenaran Solarii worship.",
    full: `Khemru occupies the centre of Atenara, where sun-baked plains surround ancient temples and monumental structures. Solarii priests maintain great sundials throughout the province, continuing traditions that reach back to the earliest forms of Atenaran sun worship.

Its temples, obelisks and hypostyle halls remain among the clearest expressions of the faith's architectural and religious heritage.

~~~Inspiration: Egyptian. Inspired by Luxor, Karnak and Giza.~~~
`,
    related: ["atenara", "solarii"]
  },

  {
    id: "kushara",
    name: "Kushara",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "atenara",
    short: "Atenara's eastern province, shaped by riverine culture, fertile floodplains, cattle herding and ancestral sun worship.",
    full: `Kushara occupies the eastern side of Atenara, extending towards the sea and the continent of Sahran. Its dark fertile soil supports agriculture across broad floodplains, while cattle remain an important part of rural life.

The province maintains strong traditions of ancestral sun worship. Its culture is shaped by the relationship between land, river and community, giving Kushara a character distinct from the maritime west and temple-centred heartland of Atenara.

~~~Inspiration: Nubian and Sudanese. Inspired by Meroë, Nubia and Sudan.~~~
`,
    related: ["atenara", "sahran", "solarii"]
  },

  {
    id: "heliadis",
    name: "Heliadis",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "atenara",
    short: "An island province between Atenara and Sahran, known for marble hills, white-columned shrines, amphitheatres, philosophers and star-gazers.",
    full: `Heliadis lies on a large island between the Atenaran mainland and Sahran. Its marble hills and white-columned shrines give it a distinct character from the mainland provinces, while its position makes it a natural meeting point between Atenara and its eastern neighbour.

The province is known for philosophers and star-gazers, whose traditions developed alongside its temples and amphitheatres. Its relationship with the sea has also made Heliadis an important cultural crossroads between Atenara and Sahran.

~~~Inspiration: Greek. Inspired by Athens, Santorini and Delos.~~~
`,
    related: ["atenara", "sahran", "solarii"]
  }
);