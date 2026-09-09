window.LORE_ENTRIES = window.LORE_ENTRIES || [];
window.LORE_ENTRIES.push(
  // === Underworld ===
  // The Veins
{
  id: "the-veins",
  name: "The Veins",
  aliases: ["Veined Underworld", "Underworld"],
  category: "places",
  age: null,
  tier: "realm",
  parent: "aerisu",
  short: "One of Aerisu's three realms, an immense network of passages beneath Verdant through which Echoes travel after death and the deeper currents of the world converge towards the Spiral.",
  full: `The Veined Underworld
The Veins are one of Aerisu's three realms, forming a vast network of tunnels, caverns and deeper structures beneath Verdant and extending inward towards the Spiral. They thread through stone, water and buried memory beneath cities, forests, mountains and oceans, with little correspondence to the geography above. Their currents carry Resonance and the Echoes of the dead through the world's interior.

When a person dies, their Echo enters the Veins, often experiencing disorientation before being gathered into the currents already moving through the darkness. Accumulated Residue and memories leave impressions throughout the passages as Echoes are carried towards the deeper regions and, eventually, the Spiral Veins.

The Veins open into Verdant through scattered Vein Mouths, ranging from vast wounds in the landscape to concealed openings where the boundary between realms has thinned. Some have become known routes, with communities such as Ereboska's Vein Guides maintaining generations of knowledge about their passages and hazards. The Varkane Abyss is among the largest, descending through an immense volcanic wound into the deeper network.

As the passages converge, the wandering channels become increasingly ordered, forming the Spiral Veins that draw Echoes towards Elysium and ultimately the Orb of Souls. The Veins therefore form the hidden anatomy connecting Verdant to the deeper realms, carrying the dead and their Resonance towards the centre of Aerisu.`,
  related: ["aerisu", "verdant", "the-spiral", "orb-of-souls", "varkane-abyss", "vein-mouths", "vein-guides", "ereboska"],
  contains: ["the-spiral"]
},

  // === Spirit Realm ===

  {
    id: "spirit-realm",
    name: "Spirit Realm",
    aliases: ["Spirit Realm", "Ethereal Realm"],
    category: "places",
    age: null,
    tier: "realm",
    parent: "aerisu",
    short: "The third great realm of Aerisu, existing beyond ordinary space and time where souls and spirits persist. The Nine Spirits dwell here, and the Orb of Souls rests at its core.",
    full: `The Spirit Realm completes Aerisu's three great divisions, existing entirely apart from the waking land of Verdant and the buried architecture of the Veins. We once called it the Ethereal Realm, a living layer stretching outside ordinary space and time where souls, spirits, and other forms of existence persist.

Aether first breached this space alongside Logaris during the Shattering. Stepping through the fracture, they carried Mnemotas still developing in Aether's womb, providing the exact conditions the child needed to grow into a living archive. 

The Nine Spirits currently dwell here in their pure configurations. Navigation requires abandoning ordinary physics, as time folds softly upon itself and memory walks entirely on its own. Past the Spiral Veins of Elysium at the absolute core rests the Orb of Souls, suspended in a matrix of crystalline Vanta. Pulsing with violet-white light, the Orb acts as a concentrated nexus of soul resonance where identity, memory, and will converge.`,
    related: ["aether", "mnemotas", "orb-of-souls", "nine-spirits", "verdant", "the-veins"]
  },

  {
  id: "vein-mouths",
  name: "Vein Mouths",
  aliases: ["Vein Mouth", "Entrance to the Veins", "Entrance to the Veined Underworld"],
  category: "places",
  age: null,
  tier: "landmark",
  parent: "the-veins",
  short: "Scattered entrances to the Veined Underworld, ranging from vast wounds in the landscape to concealed openings where the boundary between realms has grown thin. Vein Guides navigate these passages, and the Varkane Abyss is the largest among them.",
  full: `Vein Mouths are scattered openings through which Verdant connects to the Veined Underworld, ranging from immense chasms and volcanic wounds to fissures hidden beneath roots, stone or water. Some formed through geological shifts or erosion of the boundary between realms, while others resulted from catastrophes such as earthquakes, mine collapses or the violent release of Vanta during the Shattering and its aftermath.

The Varkane Abyss is the largest and most infamous, a wound left by Bahamut's emergence that descends into the volcanic depths beneath Varkane. Smaller Mouths can be found in caves, basements, abandoned tunnels and other places where the boundary has grown thin.

Vein Guides, particularly those of Ereboska, maintain generations of knowledge concerning the Mouths, including their locations, hazards and passages. Some are sealed or guarded, while others are known only to those who have reason to seek them. The boundary between a Mouth and the Veins beyond is not always clear, and a passage may become something else entirely with depth.`,
  related: ["the-veins", "varkane-abyss", "vein-guides", "ereboska"]
},

  // === Varkane Abyss ===

  {
    id: "varkane-abyss",
    name: "Varkane Abyss",
    aliases: ["Varkane Abyss", "The Abyss", "Hellscape"],
    category: "places",
    age: null,
    tier: "region",
    parent: "varkane",
    short: "The great wound where Bahamut rose through the earth, and the largest entrance to the Veined Underworld. Magma and Vanta bleed from its depths, while its hellscape is ruled by Zorya Chernaya.",
    full: `The Wounded Hellscape
The Varkane Abyss is the largest entrance to the Veined Underworld. It formed when Bahamut rose through the earth during the Shattering, leaving a volcanic gulf beneath the lands that became Varkane. Magma still surges through its depths, while Vanta bleeds from the planet below.

The Abyss became a hellscape around this wound. Vorograv emerged from its depths and claimed Zorya Chernaya within the ruins of her former castle. He bound her there and forced her to bear his spawn, including the succubi, incubi, gargoyles and seven daughters. Cerberus remained at her side, becoming the one presence she could trust.

Centuries later, Zorya arranged Vorograv's death. She sent Cerberus through the Veins to Qayyin, who forged a sword from the pieces of Vorograv's horns. One stroke took Vorograv's head. The daughters knelt before Zorya, and she declared herself queen of the depths.

The Abyss descends into the Veins. Its volcanic-glass bridges, blackened stone and demonic domains surround the deeper passages, while Cerberus guards the entrance. Zorya remains within the Abyss as its Burned Queen, ruling the demons beneath Varkane and keeping the worst of its corruption from spilling unchecked.`,
    related: ["varkane", "krovograd", "bahamut", "zorya-chernaya", "vorograv", "cerberus", "the-veins"]
  },

// === The Spiral ===

{
  id: "the-spiral",
  name: "The Spiral",
  aliases: [],
  category: "places",
  age: null,
  tier: "region",
  parent: "the-veins",
  short: "The deepest region of the Veins, where eight concentric regions draw souls towards Elysium and the Orb through seven stations of the Soulful Path.",
  full: `The Spiral Veins
Deep within the Veins, the passages begin to converge into the Spiral, an immense circulatory structure carrying the dead towards the Orb of Souls. Unlike the wandering passages above, the Spiral follows a fixed inward progression through eight concentric regions, each shaped by one of the Spirits.

The Spiral is a journey for souls. A soul carries the capacity to choose, and therefore must pass through the stations that confront the choices, desires and consequences through which it became what it was. Echoes without souls do not undergo this journey. Creatures and other non-soul Echoes instead become part of the Veins or emerge within them as monsters.

The Spiral is anchored to Elysium, beneath the crystallised ruins left by the Vanta Explosion. The dead reach it through the deeper passages of the Veins, passing from the wider network into the Spiral's ordered descent.

Eight concentric regions surround the centre, separated by seven stations. Each region embodies one stage of the journey, while the stations confront the soul with the Six Steps of Humanity. At the centre lies the Orb of Souls, where the journey reaches its final convergence.`,
  related: ["the-veins", "orb-of-souls", "spiral-journey", "elysium"]
},

  // === The Rift ===

  {
    id: "the-rift",
    name: "The Rift",
    aliases: [],
    category: "places",
    age: null,
    tier: "landmark",
    parent: "spirit-realm",
    short: "A permanent wound between the material world and the Spirit Realm. Opened by the Phumenar and widened by the First Separation, it remains bound to Voluntas.",
    full: `The Rift stands as a permanent wound between the material world and the Spirit Realm. The Phumenar opened it, and the First Separation widened it further, binding Voluntas to its threshold.

Through the Rift, magic flows back into Aerisu in steady waves. Arcane energy saturates the air, the soil and every living current. Creatures continue to manifest as Lux and Vanta intertwine with rising complexity. The Rift created a direct connection between humanity and the Spirit Realm.

At its edge, Susanoo maintains his eternal vigil over his sister, Voluntas. In the shadows beyond his reach, Daigo waits for his opening to strike the root at its core. Their conflict has continued for centuries. Neither wins. Neither surrenders. The Rift feels like a held breath between worlds.`,
    related: ["spirit-realm", "first-separation", "susanoo", "daigo-kusanagi", "voluntas"]
  },

  // Orb of Souls
  {
    id: "orb-of-souls",
    name: "Orb of Souls",
    aliases: ["The Orb", "The Orb of Souls", "Veyra's Womb", "The Womb", "presence beneath Elysium"],
    category: "places",
    age: null,
    tier: "landmark",
    parent: "spirit-realm",
    short: "The Orb of Souls is a vast nexus of soul resonance at the centre of the Spirit Realm beyond the Spiral Veins of Elysium, believed by the Phumenar to be a repository of souls and accumulated knowledge. It is also Veyra's womb, a crystal formed by the Vanta Explosion around the unborn Voluntas, who grew within it across centuries under Anima's observation.",
    full: `Veyra's Womb
At the centre of the Spirit Realm, beyond the Spiral Veins of Elysium, lies the Orb of Souls. The first Phumenar to encounter it perceived a sphere that seemed transparent and opaque, warm and cold, singing and silent at once. They understood it as a repository of souls, where the dead gathered and knowledge accumulated.

In this, they were partly correct. The Orb contains a nexus of soul resonance where identity, memory and will converge, making it a concentrated expression of the architecture of consciousness itself.

The Phumenar did not know that the Orb was also Veyra's womb, crystallised by the Vanta Explosion around the unborn Voluntas. Within it, Voluntas grew across centuries, nourished by planetary energy, the Echoes of souls and the memories of the dead. She became entangled with Anima, goddess of mortality, who served as her steward and observer.

The Phumenar felt Voluntas's influence moving through them like a deep current and followed it with unwavering focus, never fully understanding what they were following or where it would lead.`,
    related: ["voluntas", "veyra-megami", "spirit-realm"]
  },
);