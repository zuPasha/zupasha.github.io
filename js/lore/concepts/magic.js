window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === MAGIC CONCEPTS ===
// Order: Nature of Magic, Soul Types, Schools of Magic, Psy, Crystals, Separation Ritual, Affinities, Elementals

window.LORE_ENTRIES.push(
  // Nature of Magic
  {
    id: "magic",
    name: "Magic",
    aliases: ["Magic", "Potential"],
    category: "concepts",
    age: "age-of-magic",
    short: "Magic is potential expressed through Resonance, allowing a being or system to transform, affect or connect. Its workings are shaped by Understanding, Intent and Connection, and manifest through the Matter, Energy, Life and Mind schools, with Lux and Vanta expressing the opposing principles through which potential is directed.",
    full: `Magic is potential expressed through Resonance: the capacity within a being or system to transform, affect or connect. Every working follows three governing principles. Understanding provides knowledge of the target system, Intent determines how the potential is directed, and Connection determines how deeply that potential resonates with the world's underlying currents.

Magic manifests through two primal forces. Lux-aspected magic reinforces coherence, restoration and structural integrity, while Vanta-aspected magic draws upon lack and desire to produce transformative power at the risk of consumption. These forces manifest through the four schools of Matter, Energy, Life and Mind, which describe the different ways potential can be expressed.

Magic is therefore the outward expression of potential through Resonance, turning what a being or system can become into measurable effects upon the world.`,
    related: ["soul-resonance", "soul-types", "schools-of-magic", "primal-dichotomy"]
  },

  // Soul Types and Casting
  {
    id: "soul-types",
    name: "Soul Types and Casting",
    aliases: ["Soul Types", "Caster", "Casting"],
    category: "concepts",
    age: "age-of-magic",
    short: "Soulful casters direct their Resonance through developed understanding, intent and Connection; Cursed casters channel Vanta-saturated desire with greater instability; Soulless casters cannot externalise their potential through Separation, leaving it internalised and producing Frallation.",
    full: `Magic flows through the Soul, shaped by its condition and the way its potential is expressed. Aerisu recognises three primary caster types.

Soulful casters have developed strong Soul integrity through knowledge, intention and Connection. Their Resonance moves deliberately, allowing precise and controlled use of magic.

Cursed casters carry heavy Vanta saturation, with desire and emotion driving their Resonance. Their magic can be powerful and immediate, but becomes unstable as that desire turns inward and spills into its surroundings.

Soulless casters cannot externalise their Soul through Separation, leaving their potential contained within the body. They cannot safely channel magic, and the resulting pressure produces Frallation.

Casting therefore depends upon more than magical knowledge. Understanding gives structure to potential, Intent directs it, and Connection determines how effectively that potential can be expressed through Resonance.`,
    related: ["magic", "soulless", "separation-ritual"]
  },

  // Schools of Magic
  {
    id: "schools-of-magic",
    name: "The Four Schools of Magic",
    aliases: ["Types of Magic", "Types of Magic", "Magic School", "Magic Schools", "Schools of Magic"],
    category: "concepts",
    age: "age-of-magic",
    short: "Magic reaches four fundamental domains: Matter, which governs physical substance; Energy, which governs flow, motion and their relationships; Life, which governs biological systems; and Mind, which governs consciousness, perception and connection. Each can be expressed through Lux, which reinforces coherence and restoration, or Vanta, which drives transformation through lack and desire.",
    full: `The Four Schools of Magic
Magic reaches into four fundamental domains of reality, each describing a different way potential can be expressed and reshaped through Resonance.

Matter governs physical substance, from Terra, Aqua and Aero to Pyra and Materia. It allows practitioners to shape, transform and combine material according to its physical properties.

Energy governs flow, motion and the relationships between them, encompassing Kinetic and Potential forces, Thermodynamic and Entropic processes, Temporal and Causal effects, Probability and Space. It manipulates how things move, change and influence one another.

Life governs biological systems and the processes that sustain and transform them, including biogenesis, biomancy, botany and mycology, microbial and viral dynamics, genetics, neuro-organics and necrobiology.

Mind governs consciousness, perception and the structures through which minds relate to one another, including Psy, cognition, memory, identity, emotion, will, memetics, connection and soul mechanics.

Vanta and Lux in Practice
Every school can be expressed through Lux or Vanta, shaping how its potential behaves. Lux reinforces coherence, restoration, precision and structural integrity. Vanta draws on lack and desire to produce transformative force, breaking existing structures and accelerating change at the risk of feeding the Curse.

A practitioner therefore develops through how they direct potential as much as through what they know. Lux can preserve a structure beyond the point where it should have changed, while Vanta can force transformation beyond what the structure can safely contain. Their use is therefore a matter of Resonance, Intent and consequence.`,
    related: ["magic", "psy", "primal-dichotomy", "elementals"]
  },

  // Psy
  {
    id: "psy",
    name: "Psy",
    aliases: ["Psy"],
    category: "concepts",
    age: "age-of-magic",
    short: "Psy is the Mind school of magic concerned with the soul, consciousness, memory, desire and connection, as well as the psychic aspect of Resonance through which thoughts, identities, emotions and ideas can affect one another. It includes practices such as thought manipulation, Psy hacking, Soul Capturing and soul transference.",
    full: `Psy is the Mind school of magic concerned with the soul, consciousness, memory, desire and connection. It is also the term used for the psychic aspect of Resonance: the same Resonance that carries potential through physical systems can carry thoughts, memories, emotions, identities and ideas between minds and other connected systems. Psy, psyche, psy-residue and related terms therefore describe different applications or expressions of this same underlying process.

Psy practitioners learn to perceive these patterns as tangible presences, sensing emotions, memories and connections that ordinary perception cannot detect. More advanced applications allow them to read thoughts, alter cognition, influence will and navigate the psychic currents connecting living things.

Psy is also the basis of Soul Capturing and soul transference, which manipulate the Resonance carrying consciousness and identity. Lux-aspected Psy tends towards clarity, coherence and restoration, while Vanta-aspected Psy draws on lack and desire, increasing the risk of distortion and loss of self.

Because Psy works directly with patterns of mind and identity, its effects can persist through the Resonance they alter. Every intervention leaves traces, and practitioners who push too deeply into another psyche risk carrying those patterns into themselves.`,
    related: ["schools-of-magic", "soul", "soul-capturing", "psy-hacking"]
  },

  // Crystals and Amplification
  {
    id: "crystal-amplification",
    name: "Crystal Amplification",
    aliases: ["Crystal Amplification", "Crystal", "Crystals", "Amplify Magic"],
    category: "concepts",
    age: "age-of-magic",
    short: "Crystals amplify magic by lowering the Connection threshold required to channel an effect, allowing limited attunement to access greater potential. Their Resonance can favour particular effects, but reliance can create dependency by substituting external amplification for the development of one's own Resonance.",
    full: `Crystals can amplify magic by lowering the threshold of Connection required to channel a given effect. They allow a mage with limited attunement to access potential that would otherwise require years of discipline, increasing the amount of Resonance they can direct without changing the underlying principles of the working.

This makes crystals useful across every school of magic. Lux shards favour stable, restorative and coherent effects, while Vanta gems provide greater transformative force through lack and desire. Raikami crystals, formed where Susanoo's lightning strikes particular mineral seams, are one example of a crystal whose Resonance naturally amplifies a specific kind of magic. Other crystals retain distinctive Resonance from places, processes or beings that produced them.

Amplification still depends on the mage. A crystal does not provide Understanding, Intent or genuine Connection of its own, and repeated reliance can weaken the mage's own attunement. The Soul begins to depend on the external source rather than developing its own Resonance, making withdrawal painful and reducing independent control.

Some crystals are actively dangerous. Corrupted Lux can overwhelm perception with imposed order, while Vantagems can continuously reinforce obsessive patterns through their Vanta-saturated Resonance. Their use is therefore regulated differently across Aerisu, from controlled trade to outright prohibition.`,
    related: ["magic", "crystal-vantablack", "crystal-lux", "crystal-naru", "crystal-ankaru", "crystal-raikamu", "crystal-mauri", "crystal-verdani", "soul-shards"]
  },

  // Separation Ritual
  {
    id: "separation-ritual",
    name: "Separation Ritual",
    aliases: ["Separation Ritual"],
    category: "concepts",
    age: "age-of-magic",
    short: "The Separation Ritual externalises the soul's Resonance through the Strand, forming an Affinity through which a person's magical potential can be expressed. By directing Resonance outward, it prevents the pressure of an internalised soul from producing Frallation.",
    full: `The Separation Ritual externalises the soul's Resonance through the Strand, allowing a person to express their magical potential through an Affinity rather than contain it within the body. It is the established means of relieving the pressure that would otherwise produce Frallation.

The ritual is typically performed during adolescence, when the soul reaches sufficient maturity for Separation. Through ritual, meditation and magical guidance, the individual's Resonance is directed outward until the Affinity forms beyond the body while remaining connected through the Strand.

Its forms vary across Aerisu. Some traditions use flame, water or other elemental media; others rely on controlled breathing, meditation and focused intention. The method differs, but the underlying process is the same: the person's Resonance is given an external expression through which their potential can be safely channelled.

Separation is therefore both a magical and developmental process. It allows the individual to act upon the world through an Affinity, directing their Resonance outward rather than allowing accumulated magical pressure to remain trapped within the body.`,
    related: ["affinities", "soulless", "frallation"]
  },

  // Affinities
  {
    id: "affinities",
    name: "Affinities",
    aliases: ["Affinities", "The Strand"],
    category: "concepts",
    age: "age-of-magic",
    short: "An Affinity is the externalised manifestation of a person's soul, taking animal form and expressing aspects of their identity. It remains connected to the person through the Strand, the metaphysical tether through which Resonance, thought and feeling pass between body and Affinity.",
    full: `The Strand and Affinities
The Strand is the metaphysical tether connecting a person's body and soul, carrying Resonance between them and allowing the soul's influence to remain part of thought, sensation and action after Separation.

Through Separation, that Resonance takes visible form as an Affinity, an external manifestation of the person's soul and identity. Affinities take animal forms, reflecting different aspects of the pattern that has developed through the individual's life. A person may manifest a small companion such as a cat, bird or rabbit, while others take the forms of larger animals such as lions, bears, wolves or eagles. Rarely, an Affinity manifests as a dragon.

The Affinity remains connected through the Strand, allowing the person and their Affinity to share thought and feeling without speech. Harm to an Affinity therefore reverberates through the same Resonance that connects the two, affecting the person directly and potentially leaving lasting psychological scars.`,
    related: ["separation-ritual", "soul", "elementals"]
  },

  // Elementals
  {
    id: "elementals",
    name: "Elementals",
    aliases: ["Elemental"],
    category: "concepts",
    age: "age-of-magic",
    short: "An Elemental is the particular magical affinity expressed through the Strand after Separation, giving a person's Resonance a natural tendency towards a specific aspect of a magic school. Fire, water, electricity and plant affinities are common, while rarer Elementals can encompass broader domains such as Matter, Life or Psy.",
    full: `An Elemental is the particular magical affinity expressed through the Strand when a person's soul is externalised. It gives their Resonance a natural tendency towards a specific aspect of one of the four schools of magic, making that form easier to channel and develop.

A Fire Elemental, for example, allows a mage to channel fire more readily. A Plant Elemental might make them naturally adept at nurturing and manipulating plant life without giving them equal command of the wider Life school. Water, electricity and other specific magical forms are common, while rarer Elementals can encompass broader domains such as Matter or Psy.

The Elemental usually emerges during the Separation Ritual as the person's Resonance settles into its most natural magical expression. It determines what comes most easily through the Strand, while other forms of magic can still be learned through understanding, practice and Connection.`,
    related: ["separation-ritual", "affinities", "schools-of-magic", "soul-types"]
  }
);
