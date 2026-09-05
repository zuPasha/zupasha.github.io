window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === SOUL CONCEPTS ===
// Order: The Soul, Soul Resonance, Soul Capturing, VantaPsy, Soulless, Soulless Cont.

window.LORE_ENTRIES.push(

  // Concepts Overview
  {
    id: "concepts-overview",
    name: "Concepts Overview",
    aliases: ["Concepts Overview"],
    category: "concepts",
    age: "age-of-men",
    short: "Concepts contains Aerisu's philosophies, practices, beliefs, systems and fundamental ideas.",
    full: `Ideas, philosophies, practices and principles that explain how Aerisu's world functions and how its people understand it.

Concepts covers cosmology, the nature of the soul, magic, philosophies, religious traditions, practices, ideologies and other abstract systems that influence life across Aerisu. Entries range from fundamental principles of existence to specialised disciplines and cultural beliefs.`,
    related: ["soul"]
  },
  
  // The Soul
  {
    id: "soul",
    name: "The Soul",
    aliases: ["Soul"],
    category: "concepts",
    age: "age-of-magic",
    short: "The soul is the embodiment of what makes a person who they are, formed through memory, desire, relationships, choices and consequence. It develops through Resonance and Echo as a person moves through the world, continually carrying what came before into what they become.",
    full: `Your soul's not born full, it's something you gotta go get
A soul is a pattern of relationship formed through motion, connection and consequence. Every choice leaves an Echo, every interaction alters the web around it, and the accumulation of those effects becomes the pattern recognised as a person's soul. This pattern is also the embodiment of what makes a person who they are: their memories, desires, relationships, intentions, choices and the consequences they carry with them. It develops through the way a person responds to lack, directs desire, seeks clarity, acts with intention, accepts consequence and carries what they have done into what follows.

A soul therefore exists within the wider causal structure rather than apart from it. Memory, relationships, upbringing, culture, intention and circumstance all shape the pattern, while the person's actions continually alter those same conditions. Soul Resonance is the trace of that participation, carrying influence beyond the moment in which it was produced.

This is why a soul can change without becoming something entirely different. A person does not shed one soul and acquire another with every choice. Their pattern develops as new Echoes accumulate, with old consequences remaining part of what they become. The same process extends beyond individuals: families, cultures, systems and worlds develop through the Echoes they carry.

The Six Steps of Humanity describe this development. To Truly Lack establishes awareness of incompleteness. To Want with Compassion gives desire direction without allowing it to consume others. To Seek Clarity develops understanding. To Act or To Not Act with Noble Intent directs choice through purpose. To Take Proper Responsibility acknowledges the consequences that follow. To Echo with Reverence recognises that what a person does continues through others and the wider world.

The soul is therefore an imprint upon the causal web, continually formed through Resonance and Echo. It is lived through what a person chooses, how those choices affect others, and what remains after they are gone.`,
    related: ["vantapsy", "soulless", "separation-ritual", "psy"]
  },

  // Soul Resonance
  {
    id: "soul-resonance",
    name: "Soul Resonance",
    aliases: ["Soul Resonance", "Soul Essence", "Soul Residue", "Resonance", "Soul Signature", "soul-resonance", "Soul Connection", "psychic residue"],
    category: "concepts",
    age: "age-of-magic",
    short: "Soul Resonance is the measurable expression of potential as magic, forming a distinctive signature through interaction with the world. It can be detected and followed, carries consequences forward as Echoes, and provides the basis for Psy perception, magical tracking and the externalisation of the soul.",
    full: `Soul Resonance
Soul Resonance is the measurable expression of potential as magic, the trace left by anything that acts, wills or becomes. A soul develops through motion and connection, and wherever that pattern interacts with the world, it leaves Residue. A person's Resonance forms a distinctive signature that shifts with every choice while retaining the continuity of the life that produced it.

This signature can be read. Resonance scanners can identify and track beings, while clearance systems use it to recognise authorised signatures. The Soulless Brand siphons Resonance trapped within a body that cannot externalise its soul, while the Burn Mark obscures that signature from systems designed to track it.

Resonance is also what allows consequences to persist. Echoes are Resonance that continues beyond its original interaction, carrying memory, influence and change into new configurations. Death gardeners read the Residue of endings, the Spiral Veins carry Resonance through Aerisu, and the Strand connects body and Affinity through the same underlying principle.

Psy practitioners use Resonance to perceive souls, sense distant emotion and trace connections between living things. Electric magic is especially suited to reading it: passive Electric scans reveal strong residual signatures on nearby surfaces, while those trained in Chi can follow lingering trails across conductive materials such as metal, wet sand and crystal. Heavy Vanta saturation and magical interference can disrupt these trails.

Resonance is therefore both the expression of potential and the record of its interaction with the world. It carries the shape of what has acted, allowing that potential and its consequences to be detected, followed and carried forward. The Resonance can be genuine even when the meaning assigned to it is wrong.`,
    related: ["soul", "psy", "veins"]
  },

  // Soul Capturing
  {
    id: "soul-capturing",
    name: "Soul Capturing",
    aliases: ["Soul Capturing"],
    category: "concepts",
    age: "age-of-magic",
    short: "Soul Capturing is the extraction and preservation of a person's Soul Resonance, concentrating the Resonance that carries their identity, memories and Echoes into a stable vessel such as a Heart Crystal. The practice allows a person's accumulated Resonance to be stored, traded and used long after its original life has ended.",
    full: `Soul Capturing is the deliberate extraction and preservation of a person's Soul Resonance, concentrating the Resonance that forms their identity into a stable vessel. The practice emerged from Zephyr's experiments, which demonstrated that Resonance could be drawn from a living body and crystallised into Heart Crystals.

The process varies in severity. Alchemical apparatus can extract Resonance gradually, rituals can capture it at the moment of death, and more violent methods strip it from the living in pieces. What is preserved is not the body or soul as a separate substance, but the Resonance carrying its memories, identity and other accumulated Echoes.

The practice is justified as preservation, necessity or commerce, yet its result is the same: a person's accumulated existence becomes something that can be stored, traded and used. Captured Resonance can retain traces of consciousness, leaving those within old crystals as aware as their remaining Resonance permits.

Soul Capturing is condemned across most of Aerisu, but the resulting Heart Crystals remain valuable for their magical and practical uses, ensuring that the practice continues despite its reputation.`,
    related: ["soul-shards", "heart-crystals", "zephyr"]
  },

  // Soulless
  {
    id: "soulless",
    name: "Soulless",
    aliases: ["Soulless"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Those who fail the Separation Ritual are known as Soulless. Their potential remains internalised, preventing an Affinity from forming and magic from being safely channelled; social isolation and the pressure of unexpressed Resonance can reinforce the condition, eventually causing Frallation.",
    full: `The term Soulless describes those who fail the Separation Ritual. Without an Affinity, their potential remains internalised rather than finding expression through magic, leaving them unable to safely channel the Resonance within them. The resulting pressure produces Frallation, which typically leads to death between eighteen and twenty-six, though circumstance can shorten or extend this span.

The name carries heavy derogatory weight. Soulless people are treated as though they have nothing to contribute, no useful potential and no meaningful place within the structures around them. Their inability to wield magic is taken as proof that something essential is missing, while their withdrawal from others is often used to justify the same judgement. The stigma can become part of the condition, reinforcing the isolation that produced it.

Their souls are fully present. The problem is that their Resonance remains turned inward. Where Separation allows potential to move outward through action, relationship and magic, the Soulless absorb what surrounds them without finding room to express what they carry. They may take in the expectations, emotions and troubles of others until their own desires have little space to emerge.

This is reflected in their association with Vanta. Vanta absorbs light; the Soulless similarly accumulate rather than externalise, their potential becoming pressure within rather than something that enters the world. What should become movement becomes withdrawal, and what remains unexpressed eventually contributes to Frallation.

The condition therefore reflects the deeper pathology of the Curse: lack creates desire, but desire requires movement. When a person cannot recognise, express or direct that potential outward, the pressure turns inward and begins consuming the vessel that carries it.`,
    related: ["separation-ritual", "frallation", "soul", "vanta-concept"]
  }
);
