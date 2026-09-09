window.LORE_ENTRIES = window.LORE_ENTRIES || [];
window.LORE_ENTRIES.push(
  // === OBJECTS ===

  // Soul Shards, VantaBlack, etc.
  {
    id: "soul-shards",
    name: "Soul Shards",
    aliases: ["Soul Shards", "Heart Crystals"],
    category: "substances",
    age: "age-of-fairytales",
    short: "Soul Shards are fragments of crystallised soul resonance, otherwise known as echoes. Physical remnants of consciousness frozen into mineral form.",
    full: `Soul Shards are fragments of crystallised soul resonance, or echoes, physical remnants of consciousness frozen into mineral form. They were first created through Zephyr's experiments on the Cursed and children, when they were known as Heart Crystals. The process extracted and concentrated soul essence through alchemical apparatus before cooling it into crystal, producing small, warm fragments in which light moves and resonance remains active.

Soul Shards became widely used as magic foci, reservoirs of concentrated will, prisons for consciousness, and components in the creation of Borenfegens, among other applications. Using one draws upon the essence within it, making Soul Shards an exceptionally efficient source of magical power. Their trade flourishes across Aerisu.

The name Heart Crystal eventually gave way to Soul Shard, reflecting their nature as fragments broken from a larger soul. The most dangerous shards are made from the truly Cursed, whose corrupted resonance can spread memetic contagion through those who handle them.

The flame Veyra lit in the sewers of Elysium, which still burns, was fed by a fragment of Maura's Soul Shard. The first spell cast on Aerisu was cast through a child's compressed soul.`,
    related: ["soul-capturing", "diviners"]
  },

// Crystals

{
  id: "verdani",
  name: "Verdani",
  aliases: ["Verdani", "Heal Shard", "Heal Stone", "Heal Gem", "Heal Crystal"],
  category: "substances",
  age: "age-of-decay",
  short: "Verdani is a restorative crystal refined from herbal and mineral compounds, used to treat wounds, exhaustion and severe injuries.",
  full: `Heal Crystals
Verdani is a restorative crystalline material refined in Atenara from crystallised herbal distillates and mineral binders drawn from the fertile floodplains of Kushara and the island gardens of Heliadis. Its ocean-green crystal is cool to the touch and carries a faint scent of mint, jasmine and sun-warmed leaves.

Verdani's restorative properties come from the interaction between its herbal compounds, mineral structure and Lux infusion. When activated, it releases a gentle restorative charge that supports the body's own recovery, making it effective against wounds, exhaustion, shock and deeper tissue damage without placing additional strain on the body.

The concentration of Lux and the density of the crystal determine how much energy Verdani can hold and how quickly it releases it. Less concentrated pieces are common in Solarii temples, coastal clinics, civilian first-aid kits and expedition supplies, while heavily refined crystals are reserved for severe injuries and sanctioned medical or rescue work. The most concentrated forms require regulated Lux infusion in the shrines of Heliadis, and their production and distribution are tightly licensed by the authorities responsible for Lux use.

Verdani is valued precisely because its healing effect remains gradual and compatible with natural recovery. Rather than forcing the body into immediate reconstruction, it provides the energy required for damaged tissue to stabilise and repair itself, making it one of the most widely trusted restorative materials in Atenara.`,
  related: ["raikami", "mauri", "atenara"]
},

{
  id: "mauri",
  name: "Mauri",
  aliases: ["Mauri", "Revive Stone", "Revive Gem", "Revive Crystal"],
  category: "substances",
  age: "age-of-decay",
  short: "Mauri is a rare restorative crystal used to return consciousness to the unconscious, with highly concentrated forms capable of reviving multiple people at once.",
  full: `Revive Crystals
Mauri is a rare crystalline material refined for the restoration of consciousness, designed to pull an unconscious person back from the narrow threshold between the body and separation. In Atenara, the crystal is called Mauri, meaning "life-force made tangible". Its activation produces a sharp taste of copper, salt and sun-warmed stone, grounding the user in sensation before awareness returns.

The concentration and stability of Mauri determine how many people it can affect and how reliably consciousness can be restored. Less concentrated crystals are used to revive individual people, while the rarest Lux-stabilised forms can recall multiple unconscious people at once. These crystals produce no immediate pain during activation, although many survivors report feeling a deep internal pulse for days afterwards, like a slow echo through the blood, which Atenaran tradition associates with the first light after the longest night.

Mauri is treated as an act of intervention rather than ordinary medical treatment, and its use carries considerable weight among the Solarii. The most concentrated forms are theoretically reusable, although almost no one survives needing more than one in a lifetime. Their use remains controversial, and Solarii priests approach each revival with the reverence of a returning dawn, often accompanied by consequence and thanksgiving.`,
  related: ["verdani", "lux", "atenara"]
},

{
  id: "naru",
  name: "Naru",
  aliases: ["Naru", "Fire Shard", "Fire Stone", "Fire Gem", "Fire Crystal"],
  category: "substances",
  age: "age-of-decay",
  short: "Naru is a geothermal crystal extracted from the Geode in Tayran, used for ignition, industry and destructive thermal applications.",
  full: `Fire Crystals
Naru is a geothermal crystalline material extracted from the Geode in Tayran, where extreme geothermal pressure fractures mineral veins into volatile fragments. It remains warm at rest and can produce a short controlled flare through soul-resonance or mechanical ignition.

The concentration and stability of Naru determine the scale and control of its thermal discharge. Less concentrated crystals are used as expendable ignition tools by Varkanian troops, industrial workers and civilian defence cadres, while more stable forms release accumulated thermal energy in a broad surge and became standard Autarch ordnance. The most concentrated crystals form in the deepest accessible Geode tiers, where extreme heat and pressure reshape the mineral structure. Sealed, they radiate oppressive warmth and require containment to prevent premature detonation; activated, they produce concentrated infernos capable of collapsing fortifications, melting armour and permanently scarring terrain.

During the Age of Men, Sahrani labourers mined Naru under Solmaran Autarch occupation and economic exploitation. The Geode Rebellion allowed Sahrani communities in Tayran to reclaim partial sovereignty, although trade agreements, debt and political leverage enabled the displaced Autarchs in Varkane to retain influence. Modern Tayran trades Naru to Varkane under these constraints, while the Panjara-Najmara accord regulates the deployment of its most destructive forms. Zaristan has remained silent during negotiations while legal loopholes, grey markets and covert arrangements have enabled sales to Varkane.

Naru remains both an essential industrial material and a symbol of the political control surrounding Tayran's resources.`,
  related: ["ankaru", "tayran", "the-geode", "varkane"]
},

{
  id: "ankaru",
  name: "Ankaru",
  aliases: ["Ankaru", "Ice Shard", "Ice Stone", "Ice Gem", "Ice Crystal"],
  category: "substances",
  age: "age-of-decay",
  short: "Ankaru is a frost-bound crystal formed in the Hoshimiran mountains, used for cooling, cryotech and extreme suppression of thermal motion.",
  full: `Ice Crystals
Ankaru is a frost-bound crystalline material found in the high ranges of Hoshimira, where ancient formations preserve extreme cold across millennia. It remains solid regardless of ambient temperature and can produce a brief numbing chill through soul-resonance or mechanical activation. Officially called Ankaru in technical records, it is traded south to Sahran at inflated prices where water is rationed.

The concentration and density of Ankaru determine the scale of its thermal suppression. It was first employed as a coolant in mech systems during Geode expeditions beneath Tayran, and Project DAEDALUS later led Solmara to refine it into cryotech combining thermal suppression with soul-reactive engineering. More concentrated crystals can leech heat systematically across a wide area, while the most extreme formations suppress thermal motion to a point approaching absolute zero without reaching it. Exposure to these forms can dull perception, slow cognition and cause severe brief fugue states in which awareness of time is lost.

Ankaru-Kai formations occur in the deepest mountain strata, where pressure and time compress ambient cold into stable crystalline matrices. Extraction is dangerous, with miners reporting spatial disorientation, temporal distortion and recurring dreams of drowning in frozen water, leading the Hoshimiran Temple Authority to regulate mining alongside its spiritual prohibitions. Vesperites incorporate Ankaru into meditation, believing the crystals retain the memory of the original cold, while Hoshimiran folklore associates the formations with a sleeping deity beneath subterranean lakes. Some scholars speculate that they preserve fragments of Bahamut's essence, although no divine presence has been confirmed.

During the collapse of Elysium, Ankaru-Shin cryotech arrays were deployed throughout the city, creating a perpetual winter that slowed the spread of the Curse and preserved the dying. The disaster remains the basis of the Solmaran Council's Elysium Protocols and its strict regulation of modern cryotech.`,
  related: ["naru", "lux", "hoshimira", "elysium"]
},

{
  id: "raikami",
  name: "Raikami",
  aliases: ["Raikami", "Electric Shard", "Electric Stone", "Electric Gem", "Electric Crystal"],
  category: "substances",
  age: "age-of-decay",
  short: "Raikami is a storm-born crystal formed where Susanoo's lightning strikes mineral seams in Fengua, used to store and channel electrical force.",
  full: `Electric Crystals
Raikami forms where Susanoo's lightning strikes the earth and reaches particular mineral seams in the storm valleys of Fengua. After the Shattering, Hoshimiran clans descended into these restless valleys and learned to recognise the patterns of the storms. The crystal retains a persistent residual charge, producing a low irregular buzz that can interfere with conductive and soul-reactive devices.

The concentration and stability of Raikami determine how much electrical force it can store and release. Less concentrated pieces became common, reliable harvests used in everyday tools and rituals, while more stable lattices can release broad electrical surges capable of overwhelming unshielded systems and disrupting biological rhythm. Sensitive instruments may cause compasses to spin, radios to fill with static resembling fragments of language and soul-reactive machinery to awaken. The crystals' hum often intensifies before severe weather, making them an informal forecast for sailors and farmers.

The most concentrated Raikami cores hold electrical force under near-catastrophic tension, producing ozone, static and physical sensations such as aching fillings and raised hair. They can also lower the threshold of magical Connection required to channel their effects, allowing lesser attunement to produce power that would otherwise require years of discipline. Repeated use can create dependency, leading societies to regulate them.

Fengua's greatest weapon of the Age of Magic, the Leiting pao or Thunder Cannon, was built around such cores and alchemical condensers, producing a beam capable of striking a guardian god. Raikami remains both a practical resource and an enduring physical trace of Susanoo's storms.`,
  related: ["verdani", "lux", "fengua", "susanoo"]
},

{
  id: "lux",
  name: "Lux Crystals",
  aliases: ["Lux", "Lux Shard", "Lux Stone", "Lux Gem", "Lux Crystal"],
  category: "substances",
  age: "age-of-decay",
  short: "Lux is a crystalline radiance born from the Shattering of the Sky, used for illumination, healing, purification and revelation.",
  full: `Lux Crystals
Lux is a crystalline radiance born from the Shattering of the Sky. Lunarkos carried concentrated Lux essence before colliding with Bahamut, scattering fragments across Aerisu where they became embedded in the crust and merged with geological and biological substrates to form an underlying crystalline lattice.

The concentration and refinement of Lux determine the intensity and nature of its effects. Less concentrated crystals produce a steady glow even without ambient light, becoming brighter in darkness, and can disrupt shadow formations, dispel minor obscuring and make concealment difficult. These forms are widely used for civilian illumination and distributed by clergy as tangible blessings. Greater concentrations flood an area with structured radiance, purifying darkness and destabilising Vanta-corrupted states. Lux can also stabilise souls, heal early Frallation and suppress Vanta temporarily.

The Psycrata have documented that concentrated Lux can suppress free will, reduce creative deviation and enforce behavioural conformity. Prolonged or excessive use can also produce Lux Overgrowth, in which imposed order becomes pathological and structure hardens into rigidity. The most intense crystals act as revelation focuses, exposing hidden forms, suppressed truths and concealed identities, causing shapeshifters to revert, illusions to collapse and lies to become physically painful. Such exposure has caused severe trauma, destroyed relationships and driven some people to suicide, leading temples to maintain exclusive control over these forms.

Lux therefore serves as both a healing and controlling force, with its effects extending from physical restoration to the imposition of order upon matter, magic and thought. Its relationship with the Moon reflects the same principle: Moonlight reveals through reflection and refraction, illuminating while preserving mystery. Lux can reveal much while still leaving meaning to be understood.`,
  related: ["verdani", "vantablack", "lunarkos", "bahamut", "moon", "primal-dichotomy"]
},

{
  id: "vantablack",
  name: "VantaBlack",
  aliases: ["VantaBlack", "Vanta Shard", "Vanta Stone", "Vanta Gem", "Vanta Crystal", "Crystallised Vanta", "Crystalline Vanta"],
  category: "substances",
  age: "age-of-decay",
  short: "VantaBlack is a crystalline form of condensed Vanta associated with absence, erasure and increasingly severe effects on cognition, identity and existence.",
  full: `Vanta Crystals
VantaBlack forms where Vanta saturation disrupts matter and structure collapses into void-touched crystal. Less concentrated forms can cause cognitive slips in which thoughts, memories or names become temporarily unreachable. Researchers exposed to them have reported recurring dreams of loss and erasure and developed compulsive habits of documentation, hoarding and recording. These effects can persist after contact and leave permanent psychological scarring.

The concentration and stability of VantaBlack determine the severity of its effects. Greater concentrations form stable void crystals that absorb light like a hole in space, producing intrusive doubt and existential unease concerning the meaning of actions, relationships and beliefs. Proximity correlates with depression, nihilistic ideation and existential dissociation even without activation, leading governments to license their possession. Vantari cults instead embrace these crystals in rituals intended to accelerate decay and return to primordial absence.

Vanta was once theorised to originate in the Geode beneath Tayran, but surveys established that it is present across Aerisu and intrinsic to reality. It represents condensed entropy and unfiltered desire, expressing wanting without wisdom, hunger without fulfilment and acknowledged lack left unresolved. Vanta can arise through emotional and existential processes and increases around entities and environments shaped by despair, nihilism and existential collapse.

The most concentrated black-tier deposits thin reality itself, making the boundary between the material and Spirit Realms permeable. Exposure can produce profound existential distress and the sensation of becoming less real while remaining physically present. Leaked reports describe effects that unmake concepts, erase bodies and the memory that they existed, and leave gaps in causality. Possession is illegal or tightly restricted across most of Aerisu, while Vantari nations such as Ereboska and Necrovia treat the most powerful forms as sacred and as deterrents against foreign aggression.

Vanta was once widely theorised to have originated with Bahamut during the Shattering, when the planetary defence tore through the mantle and exposed concentrated entropy. Comprehensive study now shows that Vanta exists within everything capable of conscious existence, making VantaBlack one of the most dangerous substances known to Aerisu.`,
  related: ["vanta-substance", "lux", "mauri", "bahamut", "the-geode", "vanta-concept", "primal-dichotomy"]
}

);