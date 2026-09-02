window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === PHILOSOPHICAL CONCEPTS ===
// Order: Autarchs, Primarchs, Thanatarchs, Luminaries, Pyraeon, Solarii, Vesperites, Yorushika, Psycrata, AEvicara, Odyraphim, Vantari, Hollowed, Duskwalkers

window.LORE_ENTRIES.push(
  // Autarchs
  {
    id: "autarchs",
    name: "The Autarchs",
    aliases: ["Autarch", "Autarchs", "Autarchian", "Tarch"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Autarchs believe humanity stands above all else. There are no gods, no divine intervention. Only humanity must save itself.",
    full: `The Autarchs
The Autarchs believe that humanity stands above all else. There are no gods watching over the world, no higher powers to appeal to, no divine intervention waiting to save anyone. There is only humanity, and humanity must save itself.
This philosophy emerged from the wreckage of the Shattering. If the world was to survive, people would have to build the means of survival themselves.
The Autarchs place their faith in technology, in progress, in the accumulation of knowledge and capability. Their mechs, their cities, their academies are monuments to the conviction that human hands can shape human destiny.
In the modern era, the Autarchs persist as a leading power across much of Aerisu. Their influence runs through Solmara's councils, through the industrial centres of Exandria and Argestia.`,
    related: ["primarchs", "thanatarchs", "solmara"]
  },

  // Primarchs
  {
    id: "primarchs",
    name: "The Primarchs",
    aliases: ["Primarch", "Primarchs", "Autarch", "Autarchs"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Primarchs are the nationalists and capitalists of the Autarch tradition. They believe progress must be organised, directed, and protected.",
    full: `The Primarchs - Autarch Subsect
The Primarchs are the nationalists and capitalists of the Autarch tradition. They believe that progress must be organised, directed, and protected.
Their focus is on building and maintaining the structures that allow civilisation to function: economies, militaries, governments, corporations. They sign contracts, move resources, ensure mechs have fuel and cities have food.
In the Crown Nations and across Solmara, the Primarchs hold the levers of practical power, managing the day-to-day machinery of survival.`,
    related: ["autarchs", "solmara"]
  },

  // Thanatarchs
  {
    id: "thanatarchs",
    name: "The Thanatarchs",
    aliases: ["Thanatarch", "Thanatarchs", "Autarch", "Autarchs"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Thanatarchs emerged from Silealyros. They acknowledge death cannot be defeated but refuse to accept it gracefully.",
    full: `The Thanatarchs - Autarch Subsect
The Thanatarchs emerged from the philosophy of Silealyros, from the Market of Flesh where the body is treated as the last true asset.
They acknowledge that death cannot be defeated, but they refuse to accept it gracefully. They resist until the bitter end, pushing their bodies past natural limits through cybernetic enhancement, experimental technology, and chemical stimulation.
They indulge in pleasure and violence and extremes, knowing their time is limited. They believe in control and authority, but they build nothing for the future because for them, the future does not exist.
They are dying kings ruling over empty thrones.`,
    related: ["autarchs", "silealyros"]
  },

  // Luminaries
  {
    id: "luminaries",
    name: "The Luminaries",
    aliases: ["Luminaries", "Luminary"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Luminaries are people of hope, believers in the light of the sun and the coming of a new age. They believe the Scorching Sun will return.",
    full: `The Luminaries
The Luminaries are people of hope, believers in the light of the sun and the coming of a new age. They call themselves Luminaries, bearers of light. Their detractors call them Evershinites, or worse, Evershites.
The Luminaries believe that the Scorching Sun will return. Not the pale warmth that appears briefly on Sundays, but the full fire that once ruled the sky.
They gather on beaches and coastal cities when Sunday comes, watching the sunrise with the desperate hope of people who have been told for generations that salvation is coming. They wait. They pray. They prepare.`,
    related: ["pyraeon", "solarii", "sun"]
  },

  // Pyraeon
  {
    id: "pyraeon",
    name: "The Pyraeon",
    aliases: ["Pyraeon", "Luminaries", "Luminary"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Pyraeon are the radical extremists of the Luminary tradition. They believe the world must purge itself of progress.",
    full: `The Pyraeon - Luminary Subsect
The Pyraeon are the radical extremists of the Luminary tradition. They believe that the world must purge itself of progress, that technology and industry and government are plagues that must be burned away.
They wage war against the modern world, committing acts of terror to dismantle civilisation and restore balance.
For the Pyraeon, the sun is not a deity but a force of purification, a symbol of the cleansing fire that will reduce everything to ash so that something true can grow from the ruins.
They are militants, willing to die and to kill for their vision of a world returned to nature's rule.`,
    related: ["luminaries", "sun"]
  },

  // Solarii
  {
    id: "solarii",
    name: "The Solarii",
    aliases: ["Solarii", "Luminaries", "Luminary"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Solarii are a secluded monastic order who worship the sun as a literal god. They reject modern innovation but value craftsmanship and tradition.",
    full: `The Solarii - Luminary Subsect
The Solarii are a secluded, insular, almost monastic order who worship the sun as a literal god. They reject modern innovation but value craftsmanship, art, and tradition, believing that true creation comes from human hands rather than machines.
They wear gold adornments and jewellery, seeing these as reflections of the sun's divine gift. Their rituals include daily sun-gazing, fire dances, and sacred performances.
They hate the moon, believing that its presence corrupts people into stagnation and complacency. They violently reject outsiders who try to force their way into Solarii communities.`,
    related: ["luminaries", "sun", "atenara"]
  },

  // Vesperites
  {
    id: "vesperites",
    name: "The Vesperites",
    aliases: ["Vesperites", "Vesperite", "Moon Baby", "Nightstray", "Gloamer", "Sundrifter"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Vesperites are the common people, those who suffered under the sun and found relief in its setting. In the Age of Decay, they despise Sundays and the Luminaries.",
    full: `The Vesperites
The Vesperites are the common people of Aerisu, those who suffered under the sun and found relief in its setting. They are called Nightstrays and Gloamers and Sundrifters.
The Vesperites do not care what they are called. They care about their families, about the time they have, about the brief period of peace that comes when the sun finally sets.
In the Age of Decay, with the world plunged into perpetual night, Vesperite philosophy has transformed. What was once a matter of finding peace in darkness has become a defense of the night against those who would see it ended.
They despise Sundays. They despise the Luminaries, calling them Evershites with real venom.

Moon Babies is an insult used by other ideologies to dismiss Vesperites as naive. Within Vesperite communities, the term is sometimes reclaimed with ironic pride.`,
    related: ["yorushika", "moon", "luminaries"]
  },

  // Yorushika
  {
    id: "yorushika",
    name: "The Yorushika",
    aliases: ["Yorushika", "Vesperites", "Vesperite"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Yorushika are pacifist activists within the Vesperite tradition. They organise sit-ins and silent protests, campaign for weapon dismantlement, and refuse to fight even when attacked.",
    full: `The Yorushika - Vesperite Subsect
The Yorushika are pacifist activists within the Vesperite tradition. They organise massive sit-ins and silent protests to disrupt government and military actions.
They campaign for weapon dismantlement and refuse to support industries that profit from war. They refuse to fight even when directly attacked, believing that proving war is unnecessary matters more than winning any particular battle.
They smuggle people out of war zones and provide safe zones for refugees. They disrupt propaganda and military recruitment through art, performances, and public discourse.
The Yorushika are not passive. They are active in their pacifism, working constantly to undermine the structures that perpetuate violence.`,
    related: ["vesperites"]
  },

  // Psycrata
  {
    id: "psycrata",
    name: "The Psycrata",
    aliases: ["Psycrata"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Psycrata are scholars and magic-users who believe true advancement comes from wisdom and knowledge. They reject mechanisation.",
    full: `The Psycrata
The Psycrata are scholars and magic-users who believe that true advancement comes from wisdom, knowledge, and the mastery of natural forces.
Unlike the Autarchs who rely on technology, the Psycrata are rooted in the arcane and spiritual. They study the core of existence, using magic to manipulate the natural world and unlock its mysteries.
In the modern era, the Psycrata rival the Autarchs as a leading power. Their influence runs through the Diviner Councils, through the Temples, through every institution that values knowledge as the highest currency.
They hold the vaults where Soul Shards are studied and sealed. They perform the Separation Rituals. They interpret the signs and patterns that shape the age.`,
    related: ["aevicara", "odyraphim", "diviners"]
  },

  // AEvicara
  {
    id: "aevicara",
    name: "The AEvicara",
    aliases: ["AEvicara", "Psycrata"],
    category: "concepts",
    age: "age-of-decay",
    short: "The AEvicara are mystics who believe knowledge should be sought through experience and reincarnation. They embrace fate and cycles.",
    full: `The AEvicara - Psycrata Subsect
The AEvicara are mystics who believe that knowledge should be sought through experience and reincarnation. They see death as a transition to a new life, with past wisdom carrying over through the soul.
They embrace fate and cycles, believing that history repeats itself and that true understanding can only be attained by comprehending these loops.
They engage in spiritual journeys, memory transference, and ritualistic meditation to tap into past lives and lost knowledge.
The more structured Psycrata view them as dogmatic and reckless. The AEvicara see the Psycrata as rigid and detached from the soul's true journey.`,
    related: ["psycrata"]
  },

  // Odyraphim
  {
    id: "odyraphim",
    name: "The Odyraphim",
    aliases: ["Odyraphim", "Psycrata"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Odyraphim are keepers of hidden truth, intellectuals operating between politics and power. Their public face is an academic society.",
    full: `The Odyraphim - Psycrata Subsect
The Odyraphim are keepers of hidden truth, intellectuals who operate in the spaces between politics and power. Their official public face is an academic society studying magic, technology, and celestial movements.
Below ground, in hidden laboratories and classified research facilities, they conduct experiments, develop weapons, and protect knowledge that cannot be allowed to travel freely.
The Odyraphim are not loyal to any faction. They sell to whoever pays. Many members personally oppose war, but some believe that weapons are inevitable.
Xeraphina Auto operates as a key faction within the Odyraphim. The Odyraphim watch the stars and build the tools that shape the future, and they answer to no one but themselves.`,
    related: ["psycrata", "xeraphina"]
  },

  // Vantari
  {
    id: "vantari",
    name: "The Vantari",
    aliases: ["Vantari", "Nihilists", "Nihilist"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Vantari have embraced the Curse. They believe darkness is not an affliction but a calling. Most necromancers trace their lineage to Vantari traditions.",
    full: `The Vantari
The Vantari are those who have embraced the Curse. They believe that the darkness is not an affliction but a calling, that true life begins only when Vanta fully seeps into the soul.
They are called nihilists by outsiders, death-cultists by those who fear what they represent. The Vantari do not argue with these names. They simply continue their work.
Most necromancers trace their lineage to Vantari traditions. The manipulation of death, the cultivation of residue, the navigation of the spaces between life and whatever comes after all of these arts were refined by Vantari practitioners.
The Diviners officially condemn them. Unofficially, the Diviners study their techniques.`,
    related: ["hollowed", "duskwalkers", "death-gardening"]
  },

  // Hollowed
  {
    id: "hollowed",
    name: "The Hollowed",
    aliases: ["Hollowed", "Vantari"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Hollowed are the most common Vantari, fully consumed by the Curse. They drift aimlessly, seeking oblivion. They worship Vanta as an unknowable force.",
    full: `The Hollowed - Vantari Subsect
The Hollowed are the most common Vantari, fully consumed by the Curse and lost to its nihilistic pull. They drift aimlessly, seeking oblivion and embracing darkness as the true end of all things.
Most are mindless, vacant, or obsessive, lost in eternal trances of despair and longing. They see their eventual death as salvation, believing that once they fully succumb they will reach a state of true enlightenment.
They worship Vanta as an unknowable force, embracing its hold over them without question. They are easily manipulated by those stronger than themselves. The void is their symbol. The unknown. The inevitable end.`,
    related: ["vantari", "duskwalkers"]
  },

  // Duskwalkers
  {
    id: "duskwalkers",
    name: "The Duskwalkers",
    aliases: ["Duskwalkers", "Duskwalker", "Vantari"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Duskwalkers resist the Curse long enough to wield its power. They can command the Hollowed. Despite intelligence, they share the same nihilistic worldview.",
    full: `The Duskwalkers - Vantari Subsect
The Duskwalkers are a rarer sect of Vantari who resist the Curse long enough to wield its power. They can command the Hollowed, directing them as tools for their own agendas.
Despite their intelligence and control, they share the same nihilistic worldview, believing that all things will inevitably fall to darkness.
They use their power to manipulate life and death, resurrecting others as cursed thralls, shaping the residue of endings into tools for their purposes.
They are not immune to the Curse. They simply succumb more slowly than the Hollowed. Many Duskwalkers seek the Orb of Souls, believing it might offer a way to delay or control their fall into oblivion.`,
    related: ["vantari", "hollowed"]
  }
);
