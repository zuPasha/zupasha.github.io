window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === VANTA & CURSE CONCEPTS ===
// Order: Vanta (Concept), Cursed Soul, Physical Curse, Memetic Curse

window.LORE_ENTRIES.push(
  // Vanta (Concept)
  {
    id: "vanta-concept",
    name: "Vanta (Concept)",
    aliases: ["Vanta"],
    category: "concepts",
    age: "age-of-decay",
    short: "To lack. To want. To begin. Vanta is the void within the self, the hollow that knows it is hollow, and the ache that rises from recognition of that absence.",
    full: `Vanta as a Concept
To lack. To want. To begin.
Vanta is the void within the self, the hollow that knows it is hollow, and the ache that rises from recognition of that absence. Vanta defines the human condition. All beings begin with lack, and from this lack arises desire. Desire compels motion and action. Through engagement with the world, one shapes the soul.
Vanta exists as two intertwined states. Absence is the inner void. Longing is the yearning born from absence.
Vanta is the opposite of wholeness yet indispensable. Without Vanta, there is no hunger, no reason to move, no path toward growth. It is the spark of being, the unformed potential that calls life into motion.`,
    related: ["vantapsy", "soulless", "physical-curse"]
  },

  // Cursed Soul
  {
    id: "cursed-soul",
    name: "Cursed Soul",
    aliases: ["Cursed Soul", "Curse"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Curse is the tangible consequence of a soul unmoored from its own essence. To fall to the Curse is to descend into Vanta, the root condition of lack and longing.",
    full: `The Cursed Soul
The Curse is the tangible consequence of a soul unmoored from its own essence. To fall to the Curse is to descend into Vanta, the root condition of lack and longing. Untended, Vanta becomes dangerous, collapsing inward as numbness or expanding outward as insatiable hunger.
Those who succumb to the Curse have lost continuity with their humanity. The collapse of the Six Steps of Being Human leads inevitably to corruption.
The Cursed manifest in archetypes. The Hollow denied their lack. The Devourer consumed by desire. The Zealot enslaved to dogma. The Wraith consumed by regret. The Tyrant denying responsibility. The Echoless leaving only distortion.
The Curse is also a mirror, reflecting what happens when lack, desire, and responsibility are ignored. Systems, cultures, and individuals that numb themselves or justify harm embody aspects of the Curse.
Redemption is possible but rare. Those on the edges may yet be guided back. For the truly Cursed, the path is nearly closed.`,
    related: ["vanta-concept", "physical-curse", "memetic-curse"]
  },

  // Physical Curse
  {
    id: "physical-curse",
    name: "Physical Curse",
    aliases: ["Physical Curse", "Cursed"],
    category: "concepts",
    age: "age-of-decay",
    short: "Cursing leaves marks on the body as well as the soul. The most visible manifestation is the corruption of blood. Those who fall deeply into Vanta may develop Black Blood or White Blood.",
    full: `The Physical Curse
Cursing leaves marks on the body as well as the soul. The most visible manifestation is the corruption of blood. Those who fall deeply into Vanta may develop Black Blood, thick and acidic and corrosive, capable of burning flesh and corroding metal.
The Black Blooded are often mindless and wrathful, driven by an instinctive hunger to destroy or consume. They commonly emerge in harsh, hot environments.
Yet some Cursed learn to harness their Vanta, channelling it into prolonged life, heightened perception, or godlike power. Such beings carry scars of corruption but retain self direction.
The nature of one's descent shapes their condition. The Black Blooded emerge from heat and hardship, prone to rage and outward destruction. The White Blooded arise in cold, oppressive conditions, their suffering internalised and contemplative.
The experience of becoming Cursed is intensely personal. Some are wracked with hallucinations. Others slip into hollow silence. The Cursed are a spectrum of corruption.`,
    related: ["cursed-soul", "blood-types"]
  },

  // Memetic Curse
  {
    id: "memetic-curse",
    name: "Memetic Curse",
    aliases: ["Memetic Curse"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Curse moves through awareness itself. Seeing, hearing, or even thinking of the Curse is enough to make one vulnerable. Dreams and whispers carry it, turning perception into a vector.",
    full: `The Memetic Curse
The Curse moves through awareness itself. Seeing, hearing, or even thinking of the Curse is enough to make one vulnerable. Dreams and whispers and hallucinations carry it, turning perception into a vector.
Once lodged in a mind, the Curse rewrites memory and perception. Victims find their sense of self reshaped. Reality bends, what was certain becomes unreliable.
The Curse is contagious through thought and communication. A phrase, a melody, a symbol can propagate it. It functions as a cognitive parasite, spreading through the very ideas one holds.
Fighting the Curse is not a matter of quarantine or medicine. The Curse lives in awareness. To live under the Curse is to inhabit a world where awareness is the vector, memory is the battleground, and truth itself becomes fragile.
Its victims forget names and faces. Some warp in form, others collapse into silence. There is no armour against knowing.`,
    related: ["cursed-soul", "physical-curse"]
  }
);
