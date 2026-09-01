window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === MAGIC CONCEPTS ===
// Order: Nature of Magic, Soul Types, Schools of Magic, Psy, Crystals, Separation Ritual, Affinities, Elementals

window.LORE_ENTRIES.push(
  // Nature of Magic
  {
    id: "nature-of-magic",
    name: "Nature of Magic",
    aliases: ["Nature of Magic"],
    category: "concepts",
    age: "age-of-magic",
    short: "Magic flows as the Soul acting upon the world. It expresses the two primal currents, Lux and Vanta, to shape reality.",
    full: `Nature of Magic
Magic flows as the Soul acting upon the world. It expresses the two primal currents, Lux and Vanta, to shape reality.
Three principles govern every act of magic, always in this sequence.
Understanding stands first. Precise knowledge of the system to be changed forms the foundation. Without understanding, magic becomes erratic guesswork.
Intent follows. The moral and emotional orientation behind the act determines how power moves. Purpose, restraint, desire all colour the flow.
Connection completes the triad. The depth of a Soul's resonance with reality and the chosen current sets the capacity. Connection dictates the volume of power drawn, the stability of effects, the toll exacted from the caster.
These principles rule every magical working. Understanding provides the structure. Intent gives direction. Connection supplies the strength.`,
    related: ["soul-types", "schools-of-magic", "primal-dichotomy"]
  },

  // Soul Types and Casting
  {
    id: "soul-types",
    name: "Soul Types and Casting",
    aliases: ["Soul Types", "Nature of Magic"],
    category: "concepts",
    age: "age-of-magic",
    short: "Three primary types of casters exist in Aerisu: Soulful, Cursed, and Soulless. Each channels power in distinct ways.",
    full: `Soul Types and Casting
Magic flows through the Soul, shaped by its nature and condition. Three primary types of casters exist in Aerisu.
Soulful casters possess high integrity, studied knowledge, and deep connection. Magic moves through them like water along a clear channel. They approach magic with reverence and responsibility.
Cursed casters carry heavy Vanta saturation and desire-first impulses. Magic surges from raw emotion. It arrives powerful but unstable. Collateral effects follow naturally.
Soulless casters lack the channel entirely. Their souls hold unchecked potential with no pathway for expression. This produces Frallation. The Separation Ritual is the established remedy.
Magic remains a moral-scientific practice. Power deepens through knowledge and stronger Soul connection. No true shortcuts exist beyond the perilous ones.`,
    related: ["nature-of-magic", "soulless", "separation-ritual"]
  },

  // Schools of Magic
  {
    id: "schools-of-magic",
    name: "The Four Schools of Magic",
    aliases: ["Magic School", "Magic Schools", "Schools of Magic"],
    category: "concepts",
    age: "age-of-magic",
    short: "Magic organises into four fundamental domains: Matter, Energy, Life, and Mind. Each channels through Lux or Vanta.",
    full: `The Four Schools of Magic
Magic organises into four fundamental domains.

Matter governs physical substance. Subdomains include Terra, Aqua, Aero, Pyra, and Materia. Practitioners shape stone, condense air into blades, restructure bonds, crystallise fire.

Energy directs flow, motion, and consequence. Subdomains encompass Kinetic, Thermodynamic, Temporal, Causal, Probabilistic, and Spatial. Masters redirect force, slow time, tilt probability, fold space.

Life embraces biological systems. Subdomains cover biogenesis, biomancy, botany, genetics, neuro-organics, and necrobiology. Healers accelerate regeneration. Druids foster symbiotic ecosystems.

Mind encompasses consciousness and perception. Subdomains include Psy, cognition manipulation, memory, emotion, and social memetics. Practitioners read thoughts, edit memories, seed ideas.

Vanta and Lux in Practice
Lux provides precision, stability, and restoration. Vanta delivers raw power, transformation, and acceleration. The interplay shapes a mage's path. Balanced practitioners wield both. Those who favour Lux grow rigid. Those who embrace Vanta become Cursed.`,
    related: ["nature-of-magic", "psy", "primal-dichotomy"]
  },

  // Psy
  {
    id: "psy",
    name: "Psy",
    aliases: ["Psy"],
    category: "concepts",
    age: "age-of-magic",
    short: "Psy is the magic of the soul itself. Where other schools shape matter, energy, life, or mind, Psy works directly upon the essence that underlies them all.",
    full: `Psy
Psy is the magic of the soul itself. Where other schools shape matter, energy, life, or mind, Psy works directly upon the essence that underlies them all: the soul's own fabric, its desires, its memories, its connections to other souls.
Those who practice Psy learn to perceive souls as tangible presences. They sense the weight of a soul's desires, the texture of its memories, the shape of its lacks.
The deepest applications involve reaching directly into another's soul. Skilled practitioners form psychic connections, sense emotions from rooms away, read surface thoughts, and impose their will.
Advanced practitioners navigate psychic currents that connect all living things. The most profound and dangerous application is entering another's psyche.
This is soul snatching. When a practitioner remains too long, boundaries between souls blur. Identity fragments.
Psy enables Soul Capturing and soul transference. Lux-aspected Psy tends toward clarity. Vanta-aspected Psy reaches toward hunger.
The practice carries profound risks. Every entry leaves traces. Some practitioners lose themselves entirely.`,
    related: ["schools-of-magic", "soul", "soul-capturing"]
  },

  // Crystals and Amplification
  {
    id: "crystal-amplification",
    name: "Crystals and Amplification",
    aliases: ["Crystal Amplification", "Crystals"],
    category: "concepts",
    age: "age-of-magic",
    short: "Lux shards and Vanta gems serve as tools of amplification. They lower the threshold of connection, allowing mages with less attunement to channel powerful effects.",
    full: `Crystals and Amplification
Lux shards and Vanta gems serve as tools of amplification. Raikami crystals from Fengua form where Susanoo's lightning strikes. Crystals from Blossoming Death sites carry unique residue. Fragments from Elysium's ruins pulse with power.
Crystals do not replace understanding. They lower the threshold of connection, allowing mages with less attunement to channel effects that would otherwise demand years of discipline.
Crystals carry danger. Overuse fosters dependency. The Soul leans on the crystal rather than cultivating its own bond. Withdrawal brings sharp pain.
Corrupted Lux screams when activated, fracturing perception. Vantagems whisper constantly, seeding obsessive thoughts.
Societies impose strict regulations. Fengua controls Raikami trade. Some kingdoms forbid crystals outright. Others build economies around them.`,
    related: ["nature-of-magic", "raikami", "soul-shards"]
  },

  // Separation Ritual
  {
    id: "separation-ritual",
    name: "Separation Ritual",
    aliases: ["Separation Ritual"],
    category: "concepts",
    age: "age-of-men",
    short: "During adolescence, the ritual draws the soul outward from the body. The spirit emerges as an Affinity while remaining bound through the Strand. Relieves Frallation.",
    full: `The Separation Ritual
Relief from Frallation arrives through a union of knowledge and ritual craft. The Psycrata study souls with patient discipline, while Hoshimiran priests preserve ancient ceremonies.
During adolescence, when Frallation intensifies, the ritual draws the soul outward from the body. The spirit emerges and settles beyond the flesh while remaining bound through a metaphysical tether called the Strand.
Practitioners guide the ritual through different forms. Some use flame. Others use water. Meditative traditions guide the soul through stillness and breath.
The act relieves the swelling pressure of Frallation and clears the residues that gather within the soul.

A World of Visible Souls
The ritual reshapes civilisation. Every person walks beside the visible form of their soul. Communities gather around shared resonance between Affinities.
Guilds and nations organise labour through Elemental alignment. Fire wielders master metallurgy. Water practitioners guide ships. Earth specialists raise fortifications. Air adepts command currents.
The Strand glows quietly between body and spirit, while Affinities walk beside their human halves.`,
    related: ["affinities", "soulless", "frallation"]
  },

  // Affinities
  {
    id: "affinities",
    name: "Affinities",
    aliases: ["Affinities", "The Strand"],
    category: "concepts",
    age: "age-of-men",
    short: "The Strand forms a living tether of will and identity. Once externalised, the soul reveals its nature through a living manifestation called an Affinity.",
    full: `The Strand and Affinities
The Strand forms as a living tether of will and identity. Through it the soul continues to flow into thought, sensation, and action.
Once externalised, the soul reveals its nature through a living manifestation called an Affinity. The Affinity takes animal form and carries the essence of the individual into visible shape.
Some souls appear as small companions: cats, birds, rabbits. Stronger spirits take the shapes of lions, bears, wolves, or eagles. Rare souls manifest as dragons.
The Affinity lives as a companion bound through the Strand, sharing thought and feeling in a quiet exchange that requires no spoken language.
Harm done to an Affinity strikes the soul directly. The pain echoes through both spirit and body.`,
    related: ["separation-ritual", "soul", "elementals"]
  },

  // Elementals
  {
    id: "elementals",
    name: "Elementals",
    aliases: ["Elementals", "Elements", "Magic"],
    category: "concepts",
    age: "age-of-men",
    short: "The Strand carries a narrow channel between body and soul. Through this bond each individual discovers a single domain of magic that flows with natural clarity.",
    full: `Elementals
The Strand carries a narrow channel between body and soul. Through this bond each individual discovers a single domain of magic that flows with natural clarity. This alignment becomes known as the Elemental.
A fire-aligned soul guides flame with instinctive grace. Air-aligned individuals feel the movement of wind. Those attuned to life mend flesh through touch. Minds aligned with thought sense patterns in consciousness.
The Elemental often reveals itself during the Separation Ritual. Flame, storm, crystal, flowing water, or living growth appear as the soul settles beyond the body.
These manifestations illuminate the path through which magic moves most freely along the Strand.`,
    related: ["separation-ritual", "affinities", "soul-types"]
  }
);
