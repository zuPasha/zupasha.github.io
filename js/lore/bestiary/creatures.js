window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === BESTIARY: CREATURES (placeholders) ===
// A handful of entries across different classifications, standing in
// for the full roster to come. Each sets entry.type to the id of its
// classification entry (see classifications.js) and, where relevant,
// entry.conditions — an array of zero or more of: cursed, chimera,
// enhanced. Order here doesn't matter; the bestiary is always sorted
// alphabetically by the renderer.

window.LORE_ENTRIES.push(

  // Wolf — Beast
  {
    id: "wolf",
    name: "Wolf",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: [],
    short: "An ordinary pack predator of Aerisu's colder forests and mountains, representative of the Beast classification without any condition altering its nature.",
    full: `Pack and Territory
Wolves move in tight family packs across Aerisu's colder reaches, holding territory through scent and numbers rather than any Resonance particular to the species. Beyond their preferred range and pack structure, there is little to distinguish an Aerisu wolf from what the name suggests elsewhere.

They serve here as a plain baseline: a Beast with no classification-altering condition, representative of how most of Aerisu's animal population exists.`,
    related: ["bestiary-beast"]
  },

  // Kodama — Yokai
  {
    id: "kodama",
    name: "Kodama",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-yokai",
    conditions: [],
    short: "Small, tree-bound Yokai found throughout Aokusa's old-growth forests, formed when an Echoling entangles with the plant life it inhabits rather than a single body.",
    full: `The Forest's Own Attention
Kodama are among the oldest magical creatures on record, appearing in surviving accounts and tradition from long before the Shattering. Bound to Aokusa's forests, each Kodama is an Echoling entangled with the tree or grove it inhabits rather than a body of its own, closer to the wood's own attention given shape than an animal living within it.

Aokusa has long treated its wilderness, Kodama included, as something owed a kind of care rather than simply territory to be used.`,
    related: ["bestiary-yokai"]
  },

  // Toad — Tribal
  {
    id: "toad",
    name: "Toad",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-tribal",
    conditions: [],
    short: "Marsh-dwelling creatures capable of speech and loose group behaviour, with little beyond instinct developing into anything resembling true culture.",
    full: `Talking, Not Building
Toads can speak and often do, gathering in loose groups through marsh and swampland rather than living entirely solitary. Their groups have no substantial hierarchy, no deliberately maintained tradition passed between generations, and nothing an outsider would recognise as a society. Instinct remains visibly present in the way they behave and make decisions.`,
    related: ["bestiary-tribal"]
  },

  // Monkey — Folk
  {
    id: "monkey",
    name: "Monkey",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-folk",
    conditions: [],
    short: "A sapient, cultured people of the eastern peaks, organised under Ragmu's rule with the hierarchy, traditions and social structures of a Folk society.",
    full: `Ragmu's Kingdom
The Monkeys of the eastern peaks maintain an actual kingdom under Ragmu, with the rule, hierarchy and tradition that distinguish Folk from Tribal peoples. Whatever instinct carried their ancestors remains beneath a society built through laws, succession and established customs, giving them a recognised place in the wider politics of the region.`,
    related: ["bestiary-folk"]
  },

  // Ghost — Echoling
  {
    id: "ghost",
    name: "Ghost",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-echoling",
    conditions: [],
    short: "A persistent psychic imprint left by a soul severed through violence, the Curse or the Shattering, remaining as an unentangled Echoling without a body or elemental anchor.",
    full: `What's Left, Unclaimed
A Ghost is an Echoling in its plainest form: recognisable and capable of affecting its surroundings in small ways, yet never entangled with an element or body as a Yokai or Beast would be. Most form where a soul was severed suddenly rather than released properly, through violence, the Curse or the Shattering itself, rather than through a natural death that completed its ordinary journey through the Veins.`,
    related: ["bestiary-echoling"]
  },

  // Pixpsy — Fae
  {
    id: "pixpsy",
    name: "Pixpsy",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-fae",
    conditions: [],
    short: "Luminous, memory-bound Fae whose consciousness remains stretched across recurring moments after refusing to relinquish its memory at the Toll.",
    full: `Stretched Thin, Never Quite Arriving
Pixpsy carry their memory as every Fae does, retaining what should have been surrendered and becoming stranger with every moment it remains. What sets a Pixpsy apart is how visibly stretched the effect becomes: consciousness spread across recurring moments, trapped between states rather than settled within one. Some scholars connect the faint radiance they carry to the same phenomenon that makes stars visible at all, though this remains a theory rather than a settled fact.`,
    related: ["bestiary-fae"]
  },

  // Snyrm — Vaentyma
  {
    id: "snyrm",
    name: "Snyrm",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-vaentyma",
    conditions: [],
    short: "A mindless coastal Vaentyma, formed when the memory behind a desire is lost and the remaining want is left to twist without identity or direction.",
    full: `Want, Without a Name Attached
A Snyrm is desire with nothing left holding it together: a soul that failed the Toll, lost its memory rather than keeping it, and melded into something driven purely by whatever it once wanted. What remains twists and drifts along the coast with no identity behind it and no reasoning to appeal to. The want is the whole of what remains.`,
    related: ["bestiary-vaentyma"]
  },

  // Deadwood — Undead
  {
    id: "deadwood",
    name: "Deadwood",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-undead",
    conditions: [],
    short: "The simplest form produced through Death Gardening, a corpse whose Resonance has been entangled with root, foliage, wood and other living growth.",
    full: `Root Where Flesh Was
Deadwood are Necromancy's plainest result: a body whose Resonance has been deliberately entangled with living flora rather than left to disperse, with root and wood growing through and eventually replacing much of what the corpse once was. More refined practice can produce far more coherent results. Deadwood is simply the simplest and most common form.`,
    related: ["bestiary-undead"]
  },

  // Cave Troll — Human, Cursed
  {
    id: "cave-troll",
    name: "Cave Troll",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-human",
    conditions: ["cursed"],
    short: "A person buried beneath stone near a fallen Bahamut fragment, whose years of isolation and prolonged exposure gradually degraded his soul's integration into something barely recognisable.",
    full: `A Person, Underneath
The Cave Troll was a person before it was anything else: someone shaped by ordinary contracts and ordinary work, until a collapse buried him beneath stone near where a serpent, a fallen fragment of Bahamut, had come down. Years of isolation and prolonged exposure to what the fall left behind wore down his soul's integration without fully replacing it, as occurs with a Cursed creature that remains fundamentally what it originally was.

He survived by hiding and feeding on whatever came close enough, scraps, animals, anything the caves offered. Beneath the degradation remains the person that the collapse once buried.`,
    related: ["bestiary-human"]
  },

  // Wyvern — Draken
  {
    id: "wyvern",
    name: "Wyvern",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-draken",
    conditions: [],
    short: "A lesser, partial expression of Lady Draka's bloodline, carried through an affected parent rather than inherited from a full transformation directly.",
    full: `A Lesser Echo of the Same Line
Wyverns descend from Draka's corruption as Drakens proper do, but at one remove, carried through a parent who was exposed to the transformation rather than transformed outright. The result remains visibly related to the original lineage while expressing it in a smaller and less complete form.`,
    related: ["bestiary-draken"]
  },

  // Sea Serpent — Lithejorm
  {
    id: "sea-serpent",
    name: "Sea Serpent",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-lithejorm",
    conditions: [],
    short: "A many-headed descendant of Hvitara and Susanoo's bond, roaming the northern oceans as a living expression of the purpose the two fragments found in each other.",
    full: `Born of the Northern Bond
The sea serpents of the northern oceans trace directly back to Hvitara and Susanoo, new heads grown from their bond after Susanoo stopped fighting and chose to hold her instead. The Norrvekt still honour the pair as twin serpents wound around a central pole, a sign of healing rather than the monstrous hunger Hvitara carried before Susanoo found her.`,
    related: ["bestiary-lithejorm"]
  },

  // Hell Hound — Demon
  {
    id: "hell-hound",
    name: "Hell Hound",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-demon",
    conditions: [],
    short: "A lesser member of Zorya Chernaya's hellscape lineage, kept in the service of her Daughters throughout Varkane's burning reaches.",
    full: `Kept in Zorya's Reaches
Hell Hounds run through the burning reaches Zorya Chernaya once ruled outright, belonging to the same lineage that produced her Daughters and Cerberus, though as a far lesser expression of it. They are bred rather than born in any individual sense, kept, used and set loose as the hellscape's hunting pack.`,
    related: ["bestiary-demon"]
  },

  // Golem — Construct
  {
    id: "golem",
    name: "Golem",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-construct",
    conditions: [],
    short: "Clay, stone or metal deliberately animated through magic, with Resonance forced to integrate into its material as a Construct.",
    full: `Built to Hold
A Golem is Resonance forced into clay, stone or metal and made to integrate, rather than simply entangle as a Yokai does. Nothing about a Golem occurs naturally. Each is the deliberate result of a practitioner's work, animated for a purpose and generally kept to it.`,
    related: ["bestiary-construct"]
  },

  // Neurochimera — Beast, Chimera
  {
    id: "neurochimera",
    name: "Neurochimera",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: ["chimera"],
    short: "A Beast whose Resonance was forced to entangle across several fused creatures without proper integration, leaving its form and behaviour unstable.",
    full: `Fused, Not Integrated
The Neurochimera began as ordinary Beast-stock before a mixture of Vanta excess and deliberate experimentation forced its Resonance to entangle across parts of several creatures at once. The parts never properly settled into one coherent whole. It holds together after a fashion, yet the failure of integration leaves both its form and nature unstable, producing the Chimera condition.`,
    related: ["bestiary-beast"]
  }
);