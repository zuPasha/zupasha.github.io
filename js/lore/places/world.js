window.LORE_ENTRIES = window.LORE_ENTRIES || [];
window.LORE_ENTRIES.push(
  // === PLACES ===

  // Places Overview
  {
    id: "places-overview",
    name: "Places Overview",
    aliases: ["Places Overview"],
    category: "places",
    age: "age-of-decay",
    short: "Places contains Aerisu's locations, from the world and its nations to regions, cities and significant sites.",
    full: `Locations and environments across Aerisu, from the world itself to nations, regions, cities and significant sites.

Places describes the current form of each location while tracing the history that shaped it. Entries cover both inhabited territories and extraordinary locations, including the underworld and other places central to Aerisu's history.`,
    related: ["aerisu"]
  },

// Aerisu

{
  id: "aerisu",
  name: "Aerisu",
  aliases: ["The World"],
  category: "places",
  age: null,
  tier: "world",
  parent: null,
  short: "Aerisu is the world of VantaPsy, divided between Verdant, the Veins and the Spirit Realm. Though each exists as its own realm, they remain interconnected through Resonance, Echoes, Lux, Vanta and the Curse.",
  full: `Fractured Skies, Interwoven Realms
Aerisu is a world marked by the Shattering, when Lunarkos and Bahamut tore through the heavens and remade the planet. The Moon now hangs above it as the most visible remnant of that event, while the resulting scars, rifts and altered landscapes continue to shape its peoples and environments.

The world is divided into three great realms: Verdant, the Veins and the Spirit Realm. Verdant is the physical world, the waking realm of land, sea and mortal life. Beneath it lie the Veins, an underworld of deeper structures and hidden passages. Beyond both exists the Spirit Realm, where souls, spirits and other forms of existence persist apart from the physical world. These realms are distinct, but they are not isolated. Resonance, Echoes, Lux, Vanta and the Curse allow influence to pass between them.

The Shattering did not divide Aerisu into separate worlds so much as expose the layers that were already there. What happens in one realm can leave an Echo in another, and the boundaries between them are sometimes crossed through magic, death, descent or other forms of Resonance.`,

  related: ["lunarkos", "bahamut", "verdant"]
},

// Verdant

{
  id: "verdant",
  name: "Verdant",
  aliases: ["Verdant", "Material Realm", "Material World"],
  category: "places",
  age: null,
  tier: "realm",
  parent: "aerisu",
  short: "Verdant is the physical realm of Aerisu, encompassing its continents, oceans, nations and settlements.",
  full: `The Waking World
Verdant is the physical realm of Aerisu, the world of land, sea and mortal life. It is the realm most inhabitants understand simply as the world, stretching across its continents and oceans beneath the Moon.

Its geography is divided into several great landmasses, each containing their own nations, cultures and regions. The Eastern Mainland forms the principal continental landmass of Aerisu, carrying Solmara, Hoshimira, Fengua and Atenara among its nations. The Crown Nations occupy additional landmasses nearby, including the shared landmass of Lianzhou and Bayangara, known as Yantara. Beyond the surrounding seas lies Sahran, a separate continent divided into four culturally distinct provinces. Further east of Sahran, wrapping around the world and forming the West of Aerisu, lies Varkane. A fractured continent shaped by the wound where Bahamut rose. Ereboska lies between Varkane and Sahran, its wastelands and death gardens marked by the presence of the Vantari.

Verdant bears the physical scars of the Shattering. Its landscapes, oceans and settlements continue to reflect the forces that reshaped Aerisu, while the Veins beneath it and the Spirit Realm beyond it remain connected to the physical world through Resonance and Echoes.

Though Verdant is only one of Aerisu's three realms, it is where most mortal history unfolds. Nations rise and fall upon its surface, cultures leave their marks upon the land, and every event becomes part of the world that follows.`,

  related: ["aerisu", "elyra", "spirit-realm", "the-veins"]
},

// Elyra - Main Continent

{
  id: "elyra",
  name: "Elyra",
  aliases: ["Main Continent", "Eastern Mainland"],
  category: "places",
  age: null,
  tier: "continent",
  parent: "verdant",
  short: "Elyra is the principal mainland of Verdant, home to Solmara, Hoshimira, Fengua and Atenara.",

  full: `The Eastern Mainland
Elyra is the principal mainland of Verdant. Its lands stretch around Vaelmir, the inland sea known as the Ocean Maw, and contain several of Aerisu's oldest and most influential nations.

Solmara occupies the northern reaches, while Hoshimira lies among the mountains to the mid-south. Fengua extends through the storm valleys to wast, and Atenara occupies the sun-steeped southern-most lands. The mainland also borders the surrounding territories of the Crown Nations to the south-west and the seas leading toward Sahran to the east.

Its cultures are diverse, shaped by the different peoples, histories and environments that developed across the mainland. Despite their differences, the nations of Elyra remain closely connected through trade, migration, conflict and the shared consequences of Aerisu's history.`,

  related: ["verdant", "solmara", "hoshimira", "fengua", "atenara", "vaelmir"]
}
);