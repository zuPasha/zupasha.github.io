window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === PRACTICE CONCEPTS ===
// Order: Chi, Psy Hacking, Death Gardening

window.LORE_ENTRIES.push(

  // Soul Regulation
  {
    id: "soul-regulation",
    name: "Soul Regulation",
    aliases: ["Regulation"],
    category: "concepts",
    age: "age-of-magic",
    short: "Soul Regulation is the practice of directing one's Resonance through conscious action, using breathing, grounding, visualisation and physical discipline to regulate how that Resonance is expressed and carried forward. For the Soulless, it can reduce the pressure of an internalised soul and slow Frallation.",
    full: `Soul Regulation is the practice of deliberately directing one's Resonance through controlled behaviour, attention and action. Because choices, emotions, movement and intention all leave Resonance, changing how one acts changes the pattern that those actions produce.

Breathing, grounding, visualisation and physical discipline help regulate attention and behaviour, allowing Resonance to be directed deliberately rather than accumulating through uncontrolled reaction. In hospitals, this makes regulation part of patient care: a person's agitation can affect their Affinity, while steadier conduct produces a steadier expression of Resonance.

For the Soulless, regulation is especially important because their soul remains internalised and the resulting pressure drives Frallation. Meditation, breathwork and physical exercise provide ways to direct that pressure outward through deliberate action, opening blocked pathways and reducing the strain placed upon the body.

Soul Regulation is therefore a practice of agency. By becoming conscious of how they act and where their Resonance goes, a person can influence the pattern they are continuing to create.`,
    related: ["chi", "affinities", "soulless", "frallation"]
  },

  // Chi
  {
    id: "chi",
    name: "Chi",
    aliases: [],
    category: "concepts",
    age: "age-of-magic",
    short: "Chi is the discipline through which Soul Regulation becomes a lifelong practice, allowing practitioners to control desire and Resonance through breath, movement and deliberate action. Green blood marks this transformation, while refined Resonance enables physical reinforcement, accelerated recovery and the tracking of Resonance through conductive materials.",
    full: `Chi is the discipline through which Soul Regulation becomes a way of life. Originating in the high valleys of Fengua, its practitioners spend decades refining the relationship between desire, Resonance and the body until their discipline produces a visible physiological change. Their blood gradually turns green, reflecting a state in which desire has been brought under conscious control and no longer drives the soul towards hunger or inward collapse.

Chi is expressed through breath, movement and deliberate action. Practitioners can direct Resonance through the body to reinforce bone, sharpen strikes, strengthen defences, accelerate recovery and contain aggression with precision. Their attunement also allows them to perceive Resonance trails across conductive materials, making electric magic particularly effective for tracking and detection.

Chi developed alongside Fengua's traditions of observation, discipline and harmony with the world, and remains closely associated with its monks and high valleys.`,
    related: ["soul-regulation", "fengua", "blood-types"]
  },

  // Death Gardening
  {
    id: "death-gardening",
    name: "Death Gardening",
    aliases: ["Necromantic Horticulture", "Death Garden", "Death Gardens"],
    category: "concepts",
    age: "age-of-magic",
    short: "Death Gardening is Ereboska's practice of cultivating plants through the magical Residue released by death, with the manner and nature of each death shaping what grows. Death Gardeners also use necromancy to direct this process, producing food, medicine, materials and memorial growth from deliberate endings.",
    full: `Necromantic Horticulture
Death Gardening is the practice developed by the tribes of Ereboska around a simple discovery: death feeds growth. When a living being dies, its magical essence enters the surrounding soil as Residue, carrying qualities shaped by the life, circumstances and manner of death. Death Gardeners learned to read these traces and cultivate particular plants from particular endings. Violent deaths can produce rapid, aggressive growth, while peaceful deaths tend towards slower and subtler forms. Generations of observation turned this into a precise discipline.

Ritual Death
Death Gardeners may prepare ritual deaths in which a person willingly offers their final Resonance to sustain the community. The dying can be guided towards chosen soil and seeds, with the method, state of mind and manner of death influencing what eventually grows. Elders, the sick and others who choose this path may regard their death as an act of continuation, feeding children, medicine, food or materials for those who remain.

Death Gardens
Gardens are cultivated around the specific deaths that nourish them, producing food, medicine, construction materials and stranger growths that retain traces of their sources. Colours become unnaturally vivid, flowers form familiar patterns, bark can resemble skin, and some plants carry impressions of the lives that fed them. Different tribes developed specialised forms, including hallucinogenic fruits, black-barked forests and medicinal herbs.

Necromancy and Trade
Death Gardeners use Vanta and necromancy to direct Residue, accelerate growth and shape roots and vines. Their knowledge extends to Vein Mouths, where accumulated death gathers around the boundaries below. Gardens can reinforce these thresholds, absorb toxins and mark or stabilise passages. Ereboskan produce became a major export, with carefully cultivated fruits, vegetables and herbs valued for effects derived from the lives that nourished them. Memorial gardens and trees can also be grown from a person's final Resonance.

Death Gardening remains one of Ereboska's defining traditions, turning barren ground into fertile ground through an intimate understanding of death, Resonance and renewal.`,
    related: ["ereboska", "death-gardening", "vantari"]
  },

// Ritual Death
{
  id: "ritual-death",
  name: "Ritual Death",
  aliases: ["Blossoming Death"],
  category: "concepts",
  age: "age-of-magic",
  short: "A deliberate death performed within Death Gardening, allowing the deceased's final Resonance to nourish and become part of a cultivated garden.",
  full: `Blossoming Death
Ritual Death is a specific practice of Death Gardening in which a person deliberately dies within a prepared garden so that their final Resonance can pass directly into the flora. The body is given to the garden, where its remains become part of the soil, roots and growth that sustain those who follow.

For the Vantari, the practice treats death as a continuation of the relationship between a person, their community and the living world. The deceased does not remain alive through the body; their death becomes another part of the garden's growth, carrying their echo forward through what they leave behind.

~~~ Inspiration: Ritual death and funerary traditions within Vodun/Voodoo, adapted through the Vantari practice of Death Gardening and its understanding of death, Resonance and the continuation of echoes. ~~
`,
  related: ["death-gardening", "vantari", "necromancy", "soul-resonance"]
},

// Necromancy
{
  id: "necromancy",
  name: "Necromancy",
  aliases: ["Necromantic"],
  category: "concepts",
  age: "age-of-magic",
  short: "A Vantari practice of using flora, corpses and Resonance to cultivate the living dead through Death Gardening.",
  full: `Wooden Souls
Necromancy is the practice of cultivating the living dead by entangling a corpse's Resonance with living flora. Through Death Gardening, plants, roots, fungi and other growths inhabit and sustain the remains, giving them motion and structure rather than restoring their former biological state.

The simplest forms produce Deadwood, crude undead bodies in which wood, roots and foliage replace much of the corpse's original structure. Their movements are primitive and their connection to the gardener's will direct. More experienced practitioners can cultivate refined forms, sometimes called dolls, which retain the body's shape and movement as flora grows beneath and through the flesh. Wood grain may show through the skin, while roots and fungi emerge from wounds and joints. The finest can appear almost indistinguishable from the living.

Most cultivated dead are mindless, their movement arising from the Resonance binding corpse and flora together. The rare forms that retain greater complexity may approach convincing humanity, though attempts to produce a truly human-like being frequently result in Hollowing.

Whether such beings are human remains debated. Vantari thought gives weight to the cultivation of the soul, allowing a being grown from a corpse to be regarded as human if it can cultivate and express soulfulness. Others regard such beings as echoes wearing bodies shaped by another's hand.

Necromancy thus occupies the boundary between death, growth and becoming, binding what has lived to what continues to grow and determining what may emerge from their entanglement.

~~~ Inspiration: Vodun/Voodoo traditions surrounding the reanimated dead, particularly the cultural image of the zombie, combined with the botanical imagery of Death Gardening and the Pinocchio-like idea of a constructed body becoming something recognisably human. ~~
`,
  related: ["death-gardening", "ritual-death", "hollowed", "vantari", "soul-resonance"]
},

  // Vein Guides
  {
    id: "vein-guides",
    name: "Vein Guides",
    aliases: ["Vein Guide"],
    category: "concepts",
    age: "age-of-magic",
    short: "Ereboskan specialists who navigate the Veins through generations of accumulated knowledge and necromantic awareness, guiding travellers safely through the world's hidden underworld.",
    full: `The Vein Guides are Ereboskan specialists who navigate the Veins beneath the wasteland, carrying generations of practical knowledge about their changing passages, hazards and inhabitants. Their communities formed around the Vein Mouths, where guiding became a respected craft passed from elder to apprentice.

Necromantic tradition gives them an unusual awareness of death within the tunnels. They can recognise the movement of souls and places where the living world thins towards the deeper realms, guiding travellers with the patience and caution demanded by the underworld.

Scholars, miners, treasure hunters and pilgrims all seek their services, and a guide's reputation rests on bringing people safely through the depths.`,
    related: ["ereboska", "death-gardening", "vantari", "the-veins", "the-spiral"]
  },

  // Psy Hacking
  {
    id: "psy-hacking",
    name: "Psy Hacking",
    aliases: ["Psy Hacker", "Psycker", "Psycho", "Psy Hackers", "Psyckers", "Psychos"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Psy Hacking is the technological practice of analysing and manipulating Psy through devices that convert Soul Resonance into data. Psy Hackers are especially associated with memetics, using symbols, language and cultural triggers to influence minds and behaviour.",
    full: `Psy Hacking is the technological approach to Psy, using devices and computation to analyse, manipulate and transmit patterns of Soul Resonance. Where trained Psychics develop this understanding through prolonged discipline, Psy Hackers build tools that read Psy currents and convert them into usable information.

Its most distinctive field is memetics. Psy Hackers study how symbols, phrases, behaviours and cultural associations carry Resonance between minds, allowing suggestions to be embedded into communications and environments. Their work can influence perception, memory, behaviour and collective belief with remarkable subtlety.

Psycker is the common term for practitioners and carries a degree of respect within underground communities. Psycho describes those who have pushed the practice into dangerous territory, particularly through repeated interference with minds and Resonance until their own grasp of identity and truth begins to deteriorate. Some become weapons or psychological hazards, drawing the attention of the Diviners.

The distinction between Psychic and Psycker is therefore primarily one of method. Both work with Psy and can reach comparable levels of understanding, though one develops the discipline internally while the other builds ways to circumvent it.`,
    related: ["psy", "soul-resonance", "diviners"]
  },

  // Hero
  {
    id: "heroes",
    name: "Heroes",
    aliases: ["Hero", "Legend", "Legends", "Heroism", "Heroic", "Heroine", "Heroines"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "A Hero is a person whose Resonance places them above ordinary people, giving them an unusual capacity to act, endure and influence the world. Their deeds leave an Echo that sets them apart in the eyes of others, often carrying their name into legend.",
    full: `A Hero is a person whose Resonance places them a step above ordinary people, giving them an unusual capacity to act, endure and influence events. They remain human, with the same limitations and consequences as anyone else, but something about them carries further.

Heroism is therefore more than a single courageous deed. A person may save a life and never become a Hero. A Hero is someone whose actions, abilities or character leave a lasting impression strong enough for others to recognise them as exceptional. Their deeds accumulate into an Echo, and their name begins to carry meaning beyond the individual events that made it known.

Heroes arise from many walks of life. The Civic Hero Registry provides one recognised path, while organisations such as D.E.A.D. and its various initiatives produce many others. Soldiers, explorers, engineers, rescuers and civilians can all become Heroes. Among the Norrvekts, heroic service is particularly valued, and many of their most renowned figures have carried that ideal into wider society.

The title carries no guarantee of virtue. Heroes may be admired, revered or celebrated, while others are considered reckless, troublesome or dangerous. What matters is the impression they leave and the degree to which that impression persists.

Some Heroes eventually become legends, their Echo extending beyond their lifetime and becoming part of history, culture or myth. Others remain known within a city, organisation or community.

To be a Hero is to be recognised as someone who can do more than most, and whose actions carry further than most. They are still people. They simply leave a larger Echo.`,
    related: ["chr", "dead", "norrvekts"]
  },

  // Civic Hero Registry
  {
    id: "chr",
    name: "Civic Hero Registry",
    aliases: ["CHR", "Civic Hero Rank", "Hero Rank", "CH Rank", "CH Registry"],
    category: "concepts",
    age: "age-of-decay",
    short: "The Civic Hero Registry (CHR) is Sengetsuki's formal system for recognising civilians who assist during Curse outbreaks. Administered by government, police and hospital authorities, the Registry grants Heroes increasing access and privileges according to four ranks: Junior, Silver, Gold and Master. Heroes remain legally accountable for their actions, while the unofficial title of Legend is reserved for those whose deeds become part of the city's history. Its triangular badge has become a symbol of trust, access and civic courage.",
    full: `The Civic Hero Registry (CHR) was established during the Age of Decay as an auxiliary program for responding to Curse outbreaks. Administered by the Crown Liaison Office, Sengetsuki Police and hospital containment teams, it formally recognises civilians who assist during crises. Registration requires verified heroic conduct, basic combat competence, a clean criminal record and a signed liability waiver. Heroes receive no payment, but their registration grants access to areas, services and information normally restricted to civilians.

Registered Heroes are identified by a small triangular badge, with bronze, silver, gold and platinum corresponding to increasing ranks. The design reflects the triangular motifs common throughout Sengetsuki and carries identification details appropriate to the holder's rank.

The Rank of Junior Hero
A single verified act of heroism earns Junior Hero status. Qualifying actions include saving civilians during a Curse outbreak, subduing a Cursed individual or rescuing people from a dangerous situation. The incident must be witnessed by an authority or supported by surviving surveillance evidence.

Junior Heroes receive limited access to police facilities, hospital wards, government buildings and combat gyms. They may detain individuals until authorities arrive, but cannot make arrests or carry restricted weapons. The badge grants tolerance and access rather than legal authority.

The Path to Higher Ranks
Silver Heroes require multiple verified acts or exceptional bravery, followed by an interview, combat proficiency test and first aid certification. Their expanded access includes supervised evidence rooms, the hospital morgue for investigations and an emergency radio frequency. They may also testify as expert witnesses in Curse-related cases.

Gold Heroes require two years of service, ten verified incidents, an official recommendation, advanced combat certification and crisis management training. They may access non-lethal suppression equipment during active crises, receive relevant classified briefings and coordinate lower-ranked Heroes until authorities arrive.

Master Hero is an honorary rank reserved for exceptional Gold Heroes with five years of service, a city commendation and a record of saving hundreds of lives or defeating major threats. Only around ten exist across the Sengetsuki region. They receive near-total access, may carry restricted equipment under permit and are consulted on crisis policy.

Beyond the formal ranks is the unofficial status of Legend, reserved for Heroes whose deeds have become part of Sengetsuki's history and culture.

Legal Boundaries
The CHR exists to regulate civilian intervention rather than replace law enforcement. Heroes remain legally accountable for their actions and may be sued or prosecuted for excessive force. The government assumes no liability for Hero injuries, while optional Hero insurance is available privately. Incident reports are reviewed by the Hero Coordination Office, and violations can result in demotion, removal from the Registry or criminal prosecution.

Cultural Presence
The CHR has become part of everyday life in Sengetsuki. Registered Heroes receive recognition from civilians and businesses, while higher-ranked Heroes are treated with increasing trust and authority. The system reflects a practical response to the Age of Decay: Curse outbreaks occur faster than official forces can contain them, so civilians willing to intervene are given a structure through which they can do so.`,
    related: ["heroes", "sengetsuki", "crown-nations"]
  },
  
);
