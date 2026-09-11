window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === BESTIARY: CLASSIFICATIONS ===

window.LORE_ENTRIES.push(

  // Bestiary Overview
  {
    id: "bestiary-overview",
    name: "Bestiary Overview",
    aliases: ["Bestiary"],
    category: "bestiary",
    age: null,
    short: "The Bestiary classifies Aerisu's creatures by what they fundamentally are, tracing their place within the relationship between Resonance, Echo, body and sapience.",
    full: `Classification by Origin
Aerisuan creatures are classified by origin rather than appearance. Each classification describes what a creature fundamentally is and where it sits within the progression from Resonance through Echo or Echoling, Yokai, Beast and the successive stages of sapience, including branches that develop outside that progression. Creatures with entirely different forms can therefore share a classification, while similar forms may belong to different ones.

Every entry carries exactly one classification. Most also carry zero or more conditions: Cursed, Chimera or Enhanced, which are layered onto the creature without replacing its underlying Type. A Cursed Yokai remains a Yokai, while a Chimera may occur across multiple classifications.`,
    related: ["soul-resonance", "aerisu"]
  },


  // Echoling
  {
    id: "bestiary-echoling",
    name: "Echoling",
    aliases: ["Echolings"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "An Echoling, the Bestiary term for an Echo, is Resonance that has formed a recognisable pattern without becoming bodily, often persisting as the psychic residue of a soul severed through violence, the Curse or the Shattering.",
    full: `A Pattern Without a Body
An Echoling, the Bestiary term for an Echo, is Resonance that has become coherent enough to form a recognisable pattern without entangling with a physical body. It can affect the world as a voice, shape or presence while remaining intangible.

Most catalogued Echolings are remnants of souls severed rather than released through their natural passage into the Veins. Violence, the Curse and the Shattering can leave such residue behind. The resulting Echoling carries no completed choice or continued journey, only what remains of the severed pattern.

An Echoling can advance to Yokai when it entangles with a body, element or other physical medium. Without such an anchor, it may disperse into ordinary Resonance or persist indefinitely in its existing form.`,
    related: ["soul-resonance", "bestiary-yokai", "bestiary-fae", "bestiary-vaentyma"]
  },


  // Yokai
  {
    id: "bestiary-yokai",
    name: "Yokai",
    aliases: ["Gui"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "A Yokai is an Echoling entangled with an element such as fire, ice, Lux, Vanta or flesh, giving it tangibility and loose intent without requiring a sustained body.",
    full: `Between Echo and Body
A Yokai forms when an Echoling entangles with an element such as fire, ice, electricity, wind, plant matter, Lux, Vanta or another medium that Resonance can inhabit. The entanglement gives the Echoling tangibility and the ability to act with something resembling intent, without producing the sustained desire of a soul.

A Yokai remains fundamentally a force of nature. Its existence depends upon the element with which it has become entangled, allowing it to be extinguished, scattered or re-entangled elsewhere without the same finality as a bodily creature.

Classification depends upon this mechanism. Age, appearance or unusual abilities do not by themselves make something a Yokai.`,
    related: ["bestiary-echoling", "bestiary-beast", "soul-resonance"]
  },


  // Beast
  {
    id: "bestiary-beast",
    name: "Beast",
    aliases: ["Beasts", "Animal", "Animals", "Fauna"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "Beast is the Bestiary's term for an Echoling attached closely enough to a physical body to depend upon it, encompassing ordinary, domesticated and unusual animal life.",
    full: `Attached and Reliant
An Echoling becomes a Beast when it attaches closely enough to a physical body that its continued existence depends upon that body. Resonance remains present throughout the process, as it does in everything within Aerisu, while the creature's existence becomes bound to biology.

The classification encompasses bacteria, fish, insects, birds, mammals and other forms of ordinary life, including species selectively bred over generations. Domestication changes their relationship with people without changing their classification.

Sapience and culture develop further along the same continuum through Tribal, Folk and Human. Most Beasts remain at this stage throughout their existence.`,
    related: ["bestiary-yokai", "bestiary-tribal"]
  },


  // Tribal
  {
    id: "bestiary-tribal",
    name: "Tribal",
    aliases: ["Tribal Creatures"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "Tribal creatures occupy the stage between Beast and Folk, possessing partial sapience and loose social structures while remaining strongly influenced by instinct.",
    full: `Between Beast and Folk
Tribal creatures have developed beyond Beast, gaining the ability to communicate, sometimes through speech, and organise around shared needs. Their societies lack the accumulated institutions, traditions and structures associated with a culture.

The boundary between Tribal and Folk is gradual, allowing reasonable observers to disagree about the classification of an individual species. Tribal creatures remain strongly influenced by instinct, even where their behaviour shows deliberation or intelligence.`,
    related: ["bestiary-beast", "bestiary-folk"]
  },


  // Folk
  {
    id: "bestiary-folk",
    name: "Folk",
    aliases: ["Folk Peoples"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "Folk are sapient, non-human peoples with established cultures, societies, hierarchies and traditions of their own.",
    full: `A People
Folk occupy the stage beyond Tribal on the continuum of sapience. Their defining feature is established culture: systems of rule, hierarchy, tradition and accumulated social knowledge that allow a species to function as a people.

Folk cultures develop according to their own bodies, instincts and histories. Their societies share sapience and culture with Human-tier beings while retaining distinct forms shaped by their own origins.`,
    related: ["bestiary-tribal", "bestiary-human"]
  },

// Human

  {
    id: "bestiary-human",
    name: "Human",
    aliases: ["Human-like", "Humans"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "A Human is a soul capable of choosing for itself and pursuing desires beyond basic need, giving rise to creation, learning, cultivation and the deliberate reshaping of body and soul.",
    full: `The Soul That Chooses
Human marks the point where a soul can choose for itself beyond the immediate demands of survival. Folk may possess language, culture, hierarchy and tradition, yet their lives generally remain centred around the needs shared by their kind. Humans pursue wants that exceed those necessities, creating, learning, questioning, cultivating and building things whose value exists beyond simple survival.

That freedom makes Humans unusually malleable. A soul capable of pursuing its own desires can deliberately reshape itself, while the body follows through cultivation, augmentation and other alterations. Human bodies and souls therefore vary far more readily than those of Folk, whose forms and ways of life tend to remain closer to the needs they were shaped around.

Human is still part of the ordinary pipeline. Humans carry Resonance, can wield magic, and remain subject to conditions such as the Curse or Enhancement. Draken, Lithejorm and Demon instead descend through separate recursions originating from Spirits.`,
    related: ["bestiary-folk", "soul"]
  },

  // Undead
  {
    id: "bestiary-undead",
    name: "Undead",
    aliases: ["The Undead", "Living Dead"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "Undead are formed from dead matter, including bodies, dead flora and residual Resonance, producing new beings through a process that usually occurs through Death Gardening and Necromancy.",
    full: `Using the Dead
An Undead creature forms when Resonance attaches to matter that has already completed its own cycle, using bodies, dead flora or other remains rather than restoring the life that was lost. The process bypasses the Yokai stage by attaching directly to dead matter.

Undead are commonly mindless because their coherence is assembled from residue rather than developed gradually through the ordinary pipeline. With sufficient time, an Undead branch can develop greater coherence and even sapience while retaining its distinct origin.

Necromancy and Death Gardening deliberately produce this process by entangling a corpse's Resonance with living flora under a practitioner's direction. The same process can occur naturally at sites containing sufficient residual Resonance, although this is rare without deliberate cultivation.`,
    related: ["soul-resonance", "bestiary-beast"]
  },


  // Fae
  {
    id: "bestiary-fae",
    name: "Fae",
    aliases: ["Fae Folk", "The Fae"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "Fae are souls that reached the Toll and refused to relinquish their memories, becoming displaced from the ordinary cycle as accumulated memory alters their identity and relationship with time.",
    full: `What Refuses to Forget
When a soul dies, its ordinary passage leads through the Spiral Veins towards the Orb of Souls. At the Toll, it must relinquish enough memory to continue. A Fae forms when a soul refuses, retaining its memories and stepping outside the ordinary recursion.

Centuries of unrelinquished memory gradually distort the Fae's recollection. Memories fragment and overlap, producing riddling speech, contradictory recollections and an awareness that can seem to span several periods at once. Their strangeness emerges from the accumulated burden of memory rather than from a single personality trait.

Fae are the counterpart to Vaentyma, which follow the opposite path from the same failed Toll. A Vaentyma relinquishes its memory while retaining the desire beneath it. A Fae retains memory while losing its place within the ordinary cycle.`,
    related: ["soul-resonance", "bestiary-vaentyma", "bestiary-echoling"]
  },


  // Vaentyma
  {
    id: "bestiary-vaentyma",
    name: "Vaentyma",
    aliases: ["Vaentymae", "Monster", "Monsters"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "A Vaentyma (plural Vaentymae) is a soul that failed the Toll, losing its memory and melding into the Veins while retaining a directionless remnant of desire. Monster is the common term.",
    full: `Desire, Melded and Directionless
A Vaentyma follows the opposite path to a Fae after failing the Toll. Its memory disperses while the desire beneath it remains, melding into the Veins and losing the self that once directed it. What persists is a singular remnant of want without memory to give it context or restraint.

The same phenomenon can occur in fragments of Bahamut that never find a purpose. A dissolved soul and a planetary fragment of undirected hunger therefore produce the same resulting phenomenon through different origins, which places both within this classification.

Monster is the ordinary term for a Vaentyma. A Vaentyma retains no memory or name through which it can be reasoned with, only the singular purpose around which it has formed.`,
    related: ["bestiary-fae", "soul-resonance"]
  },


  // Spirit
  {
    id: "bestiary-spirit",
    name: "Spirit",
    aliases: ["Spirits", "God", "Gods", "Kami", "Shen"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "A Spirit is an Echo powerful enough to sustain its own recursion and generate lesser Echoes or Echolings, representing the extreme end of the same phenomenon expressed by Yokai.",
    full: `An Echo That Learned to Recur
Each stage of the pipeline describes Resonance gaining coherence. A Spirit emerges when an Echo becomes powerful enough to sustain its own recursion indefinitely and generate lesser Echoes or Echolings from itself. A Yokai expresses the same underlying phenomenon at a smaller scale, while this spirit classification is reserved for the Nine Spirits, Bahamut and beings of comparable scale.

Spirits are generally unique, named entities rather than populations of similar creatures. They therefore function more as historical or metaphysical individuals than as species.

Draken, Lithejorm and Demon descend directly from Spirits of this tier, carrying those origins forward through their own separate, self-sustaining recursions.`,
    related: ["spirits", "soul", "bestiary-draken", "bestiary-lithejorm", "bestiary-demon"]
  },


  // Draken
  {
    id: "bestiary-draken",
    name: "Draken",
    aliases: ["Drakens"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "Draken descend from Lady Draka's Spirit-tier transformation, which became a self-sustaining hereditary species. Full transformation produces Drakens proper, while exposure through an affected parent produces Wyverns.",
    full: `A Bloodline
Draken descend from a single event: Lady Draka's transformation, amplified by a Spirit's influence until the change became total and hereditary. The resulting lineage became a species rather than remaining an individual condition.

Full transformation passed directly through the lineage produces Drakens proper. Partial exposure through an affected parent produces Wyverns, a related and lesser expression of the same lineage. Both are established breeding populations within Aerisu's ecosystems.

Draken classification depends upon descent from Draka's lineage rather than physical resemblance. Serpentine or draconic creatures from other origins therefore remain separate classifications.`,
    related: ["bestiary-spirit", "bestiary-lithejorm"]
  },


  // Lithejorm
  {
    id: "bestiary-lithejorm",
    name: "Lithejorm",
    aliases: ["Lithejormae"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "Lithejorm (plural Lithejormae) descend from Hvitara and Susanoo's bond, formed from two Bahamut fragments that found purpose in one another. Sea serpents, krakens, mermaids and sirens belong to this lineage.",
    full: `Born of a Bond
Hvitara and Susanoo were both fragments of Bahamut. Hvitara froze what approached her until Susanoo found her, fought her and ultimately remained to hold her. Their bond produced new forms and descendants that established an entire lineage across the northern oceans.

Lithejormae therefore descend from a guardian's purpose rather than an unclaimed fragment of hunger. Their origin separates them from Vaentyma despite their shared connection to Bahamut: the Vaentyma emerges where nothing bonds and nothing is chosen, while the Lithejorm exists through a bond that became generative.

Sea serpents, krakens, mermaids and sirens are expressions of this lineage, carrying Hvitara and Susanoo's forms forward through their descendants.`,
    related: ["bestiary-spirit", "bestiary-vaentyma", "bestiary-draken"]
  },


  // Demon
  {
    id: "bestiary-demon",
    name: "Demon",
    aliases: ["Demons", "Hellspawn", "Hell Spawn"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "Demons descend from the hellscape lineage of Zorya Chernaya and Vorograv, including the Daughters of Vice, Cerberus and the creatures descended from them.",
    full: `Zorya's Line
Demon is a specific lineage descended from Zorya Chernaya, crowned in the hellscape that became Varkane, and Vorograv, the fragment of the Abyss who tormented her. Their suffering produced the Daughters of Vice, pride, greed, lust, envy, gluttony, wrath and sloth, along with Cerberus and the gargoyles, incubi, succubae and Hell Hounds that carry the bloodline forward.

Like Draken and Lithejorm, Demon follows a separate recursion descended directly from a Spirit-tier origin rather than the general pipeline. Evil, hostility or an infernal appearance alone do not determine the classification; Demon refers specifically to this lineage.`,
    related: ["bestiary-spirit"]
  },


  // Construct
  {
    id: "bestiary-construct",
    name: "Construct",
    aliases: ["Artificial", "Constructs"],
    category: "bestiary",
    age: null,
    isClassification: true,
    short: "A Construct is Resonance deliberately forced to entangle and integrate through an external act of creation. Artificials such as Borenfegens are a notible example.",
    full: `Made to Hold
A Construct is deliberately created by forcing Resonance to entangle and integrate through an external act. The process cannot occur naturally. Unlike a Chimera, which results from unstable combination, a Construct is designed to hold together from the outset.

The method does not alter the classification. A Borenfegen may develop greater sapience than a Golem without changing Type; sapience develops along the same continuum while the underlying foundation remains artificial.`,
    related: ["spectrum-of-being", "bestiary-undead"]
  }

);