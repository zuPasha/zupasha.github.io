window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === VANTA & CURSE CONCEPTS ===
// Order: Vanta (Concept), Cursed Soul, Physical Curse, Memetic Curse

window.LORE_ENTRIES.push(
  // Vanta (Concept)
  {
    id: "vanta-concept",
    name: "Vanta Concept",
    aliases: ["To lack", "To want", "Desire"],
    category: "concepts",
    age: "age-of-decay",
    short: "Vanta is the condition of lack and the desire it creates, giving potential the impulse to move, seek, change and become. Absence and longing form its two intertwined states, shaping the choices and Echoes through which a soul develops.",
    full: `To lack. To want. To begin.
Vanta is the condition of lack and the desire that rises from recognising it. All beings begin with some form of absence, and that absence creates the impulse to move, seek, change and become. Through engagement with the world, desire produces action, action leaves Echoes, and those Echoes shape the soul.

Vanta exists as two intertwined states: absence, the recognition of what is missing, and longing, the desire that recognition produces. Lack gives direction to potential, creating the pressure through which becoming begins.

Vanta therefore underlies growth, choice and transformation. It gives existence something to move towards, while the way that desire is understood and acted upon determines what it becomes.`,
    related: ["vanta-substance", "vantapsy", "soulless", "physical-curse"]
  },

  // Cursed Soul
  {
    id: "cursed-soul",
    name: "Cursed Soul",
    aliases: ["The Cursed Soul", "Curse"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Curse is the pathological expression of Vanta, arising when lack and desire become self-consuming and erode the soul's ability to act with clarity and responsibility. Cursed souls develop destructive patterns of Resonance that can distort their choices, relationships and Echoes.",
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
    aliases: ["Cursed"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Physical Curse is the bodily manifestation of deep Vanta saturation, most visibly expressed through corrupted blood and changes in physical and mental function. Its effects vary according to how an individual's Cursing develops.",
    full: `Cursing manifests in the body as well as the soul, most visibly through changes to blood. Deep Vanta saturation can produce Black Blood, thick and acidic enough to burn flesh and corrode metal. Black Blooded individuals often become driven by destructive hunger, particularly under conditions of heat and hardship.

Other Cursed learn to channel their Vanta deliberately, retaining control while gaining heightened perception, prolonged life or extraordinary power. Their bodies still bear the marks of corruption, shaped by the particular way their descent developed. Black Blood tends towards outward aggression and destruction, while White Blood emerges from cold, oppressive conditions and turns suffering inward.

Physical Cursing varies between individuals. Hallucination, silence, rage, obsession and bodily mutation can all emerge as different expressions of the same underlying corruption.`,
    related: ["cursed-soul", "blood-types"]
  },

  // Memetic Curse
  {
    id: "memetic-curse",
    name: "Memetic Curse",
    aliases: ["Memes", "Memetic"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Memetic Curse is the cognitive transmission of the Curse through awareness, allowing dreams, language, symbols, memories and other forms of information to distort perception and identity.",
    full: `The Memetic Curse spreads through awareness, allowing perception and communication to become vectors for Vanta. Dreams, whispers, hallucinations, symbols, phrases and other forms of information can carry its influence into the mind.

Once established, it distorts memory, perception and identity, making familiar thoughts and experiences increasingly unreliable. Affected minds may lose names and faces, develop compulsions or interpret altered perceptions as reality. The Curse can therefore propagate through ideas themselves, with repeated exposure allowing its patterns to spread between people.

The Memetic Curse is especially difficult to contain because its transmission occurs through cognition and communication. Psy practitioners study its effects as a corruption of Resonance within the mind, while severe cases can produce psychological collapse, bodily alteration or withdrawal into silence.`,
    related: ["cursed-soul", "physical-curse"]
  },

  // Truth, Conviction and Interpretation
  {
    id: "truth-conviction",
    name: "Truth, Conviction and Interpretation",
    aliases: ["Truth", "Conviction", "Interpretation"],
    category: "concepts",
    age: "age-of-decay",
    short: "Truth exists independently of perception. Conviction gives understanding enough form to guide action, while Interpretation determines how Echoes are understood and therefore what consequences they produce. Lux provides coherence for conviction, while Vanta preserves the sense of incompleteness that allows understanding to change.",
    full: `Truth is what exists and remains regardless of whether anyone understands it. A soul retains the pattern formed through its actions and relationships even when the person carrying it misunderstands themselves.

Conviction is the understanding a mind accepts strongly enough to act upon. It gives uncertainty enough shape for intention to become action, while excessive certainty can harden belief against contradiction and endless doubt can prevent action entirely. Clarity therefore requires the willingness to act while remaining open to being wrong.

Interpretation connects the two. Echoes carry consequences without predetermined meaning, so minds interpret them through their own understanding and conviction. That interpretation influences what happens next, creating further consequences that enter Recursion. When an interpretation becomes sufficiently persistent and widely shared, it can develop into Mythwrighting and acquire material consequence of its own.

Lux and Vanta express the same tension within thought. Lux gives understanding coherence, allowing conviction to form. Vanta preserves awareness of what remains unknown or incomplete, keeping understanding capable of change. A healthy mind needs both: enough coherence to act and enough uncertainty to continue learning.`,
    related: ["memetic-curse", "psycrata", "diviners"]
  }
);
