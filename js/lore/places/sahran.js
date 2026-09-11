window.LORE_ENTRIES = window.LORE_ENTRIES || [];
window.LORE_ENTRIES.push(
  // === PLACES ===

  // Sahran
  {
    id: "sahran",
    name: "Sahran",
    aliases: [],
    category: "places",
    age: null,
    tier: "nation",
    parent: "verdant",
    short: "A fractured continent southeast of Solmara and Hoshimira, divided into four provinces shaped by different responses to fear, instability and the Curse.",
    full: `Fractured Lands of the South

Sahran lies southeast of Solmara and Hoshimira, separated from the eastern mainland by a narrow sea. It is a continent of four distinct provinces, each shaped by its own history, culture and response to the forces that fractured Sahran.

Tayran occupies the northern coast and became the centre of the Luminary movement, with the Geode at the heart of its history. Najmara rises across the central plateau, where finance, accounting and careful measurement became defining parts of its culture. Zaristan occupies the mountainous north-east and serves as Sahran's military bulwark, while Panjara stretches along the southern coast, known for its spices, coffee, fabrics and festivals.

Sahran's cultures remain distinct, but they share the memory of a continent repeatedly forced to respond to threats beyond its control. The Curse reached its shores through trade and coastal routes, while the legacy of the Autarchs left deeper wounds in places such as the Geode. Sahran is defined not by a single ideology or history, but by the different ways its people learned to survive what came after.

~~~Inspiration: Middle Eastern, South Asian and Central Asian blend. Fractured cultural landscape drawing from Turkish, Iranian, Afghan, Saudi Arabian and Indian influences.~~
`,
    related: ["tayran", "najmara", "zaristan", "panjara"]
  },

  {
    id: "tayran",
    name: "Tayran",
    aliases: ["Tayrani", "Tayranis"],
    category: "places",
    age: null,
    tier: "region",
    parent: "sahran",
    short: "Sahran's northern province and centre of the Luminary movement. The Geode lies at its heart, its history shaped by Autarch exploitation, imprisonment and rebellion.",
    full: `Home of the Luminaries

Tayran occupies Sahran's northern coast. The province became the centre of the Luminary movement, whose doctrine eventually spread beyond its borders. At its heart lies the Geode, a place whose history reaches back to the Autarchs and their exploitation of Sahrani land and people.

The Geode was used as a mining operation and prison, with generations of Sahrani forced into its depths. The Orphan Tiers, the labour systems and the tunnels beneath the surface became part of Tayran's collective memory. The Curse eventually took root in the deeper reaches, where Vanta and the strange life within the Geode made the depths increasingly dangerous.

The Geode also became a centre of resistance. Rebellions rose from within its tiers, and the struggle against its exploitation shaped later Sahrani politics. The Luminary movement inherited much of this history, transforming the memory of oppression into a doctrine of its own.

~~~Inspiration: Turkish. Inspired by Istanbul, Cappadocia and Anatolia.~~
`,
    related: ["sahran", "the-geode", "luminaries"]
  },

  {
    id: "the-geode",
    name: "The Geode",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "tayran",
    short: "A vast crystal excavation in Tayran, once an Autarch mining prison. Its layered settlements descend into Vanta-tainted caverns where the old machinery gave way to something far stranger.",
    full: `The Geode

The Geode was opened as an Autarch mining operation, its crystal caverns torn into the desert and reshaped into a vast subterranean settlement. What began as an extraction site became a prison, with generations of Sahrani workers forced into its depths.

The upper tiers contained council chambers, overseers' quarters and reinforced dwellings. Below them were residential tiers, connected by bridges, pulley lifts and platforms suspended around the great central shaft. Deeper tiers contained forges, tunnels and mining operations, where copper, quartz and firestones were extracted from the surrounding rock.

The lower tiers marked the beginning of Vanta territory. VantaBats nested among the crystal formations, while deeper caverns became increasingly hostile. The black tiers were restricted to council-sanctioned expeditions, their walls warped by Vanta and their depths inhabited by creatures including Tinnin, Ifrit and Shadowlings.

At the centre of the Geode lies the great shaft, connecting its many tiers through a vertical chasm of scaffolding, bridges and mineral seams. Somewhere beneath it lies something older than the excavation itself. Sahrani stories name that presence as Bahamut, a god buried alive.

~~~Inspiration: Turkish and Central Asian landscapes, particularly Cappadocia and other regions of Anatolia and Central Asia.~~
`,
    related: ["tayran", "bahamut", "geode-rebellion"]
  },

  {
    id: "zaristan",
    name: "Zaristan",
    aliases: ["Zaristani", "Zaristanis"],
    category: "places",
    age: null,
    tier: "region",
    parent: "sahran",
    short: "Sahran's mountainous north-eastern province and military bulwark, known for its armies, fortifications, political mediation and epic poetry.",
    full: `The Shield of Sahran

Zaristan occupies the mountainous north-eastern crown of Sahran and is considered the sister province of Tayran. For centuries it has served as Sahran's military bulwark, with its people carrying the responsibilities of defence, diplomacy and conflict management.

Zaristan is known for its armies and fortifications, as well as its role in the political management of conflict. Its leaders negotiate ceasefires and treaties, while its military remains prepared to enforce them when necessary. Zaristani speech is often described as harsher than that of other Sahrani cultures, clipped and direct.

The province also has a strong poetic tradition. Long epics recount fallen heroes, historic sieges and wars that stretched across generations. The Curse rarely finds purchase in Zaristan, perhaps because its people have long treated death as an unavoidable part of life rather than something to be denied.

~~~Inspiration: Iranian and Afghan. Inspired by Tehran, Kabul and the historic cultures of the Silk Road.~~
`,
    related: ["sahran"]
  },

  {
    id: "najmara",
    name: "Najmara",
    aliases: ["Najmaran", "Najmarans"],
    category: "places",
    age: null,
    tier: "region",
    parent: "sahran",
    short: "Sahran's central plateau province, defined by finance, accounting and the careful measurement of value. Its capital is dominated by a vast glass and steel tower.",
    full: `The Counting Province

Najmara rises across Sahran's central plateau, where the air is dry and the horizon stretches wide. The province is renowned for its accountants, producing more certified auditors than the rest of Sahran combined.

Najmarans are taught arithmetic from an early age, and their culture places considerable value on precision, record-keeping and the careful measurement of value. Their clothing tends towards neutral colours, while their speech is measured and deliberate. A common joke across Sahran claims that Najmarans count their footsteps so they cannot be cheated out of a single stride.

The capital is dominated by a vast glass and steel tower containing the central bank, national archives and offices belonging to powerful merchant syndicates. To Najmarans, the tower represents necessity rather than vanity. It is a physical expression of the systems through which the province keeps track of what Sahran owns, owes and exchanges.

~~~Inspiration: Saudi Arabian. Inspired by Riyadh and Dubai, particularly their financial districts and modern urban architecture.~~
`,
    related: ["sahran"]
  },

  {
    id: "panjara",
    name: "Panjara",
    aliases: ["Panjaran", "Panjarans"],
    category: "places",
    age: null,
    tier: "region",
    parent: "sahran",
    short: "Sahran's southern coastal province, known for spices, coffee, colourful fabrics, hospitality and elaborate festivals with a strong Solarii presence.",
    full: `The Spice Coast

Panjara stretches along Sahran's southern coast, where the sea air carries the scent of cardamom, clove and black pepper. The province is known for its spices, slow-roasted coffee, colourful fabrics and rugs, with markets that bring together merchants, artisans and travellers from across the continent.

Panjaran markets are vibrant places, filled with spices, textiles and the sounds of trade. Hospitality is an important part of local culture, and Panjarans are known for their warmth and generosity.

The province is also known for elaborate festivals. Communities gather to dance, trade and celebrate beneath the sun, with food, flowers and traditional music forming part of the festivities. The Solarii faith has a particularly strong presence here, adding another layer to Panjara's longstanding relationship with the sun.

~~~Inspiration: Indian. Inspired by Kerala, Goa and Tamil Nadu, particularly their coastal cultures, markets and festivals.~~
`,
    related: ["sahran", "solarii"]
  },
);