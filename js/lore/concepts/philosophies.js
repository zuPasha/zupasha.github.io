window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === PHILOSOPHICAL CONCEPTS ===
// Order: Autarchs, Primarchs, Thanatarchs, Luminaries, Pyraeon, Solarii, Vesperites, Yorushika, Psycrata, AEvicara, Odyraphim, Vantari, Hollowed, Duskwalkers

window.LORE_ENTRIES.push(
  // Autarchs
  {
    id: "autarchs",
    name: "The Autarchs",
    aliases: ["Autarch", "Autarchian", "Tarch"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Forever Forward. Existentialist philosophy centred on human self-determination, progress, authority and heroic service. Autarchianism became the dominant power of the Age of Men, originating in Solmara before later becoming centred in Varkane.",
    full: `Forever Forward
Existentialist philosophy of human self-determination, progress, command and heroic service.

The Autarchs believe humanity stands above all else. There are no gods to appeal to and no higher power waiting to save the world. Humanity must determine its own meaning and build the means to survive through its own knowledge, labour and strength.

Autarchianism places its faith in progress, technology and the deliberate shaping of human destiny. Authority is therefore treated as responsibility: those capable of protecting, building or leading are expected to use that ability in service of others. This produces both genuine heroism and a culture that can equate strength with the right to command.

The philosophy predates recorded history and became the dominant power of the Age of Men. Solmara was its original centre, where the Autarchs were regarded by the Hoshimirans as Angels, and Demons by the Sahrani. They protected Hoshimiran communities and provided support in exchange for favour and farmland, eventually reducing Hoshimira to a Solmaran vassal, while the Sahrani of the Geode were placed under direct servitude.

Autarchian power reached its height before the Shattering, which crippled Solmara's position even as the philosophy continued to spread. Over the following eras, Psycrata gained increasing control within Solmara, while Autarchianism became increasingly centred in Varkane, where Bahamut rose from Aerisu during the Shattering.

Autarch ideals remain influential wherever progress, duty, technological mastery and heroic service are treated as measures of human worth.`,
    related: ["primarchs", "thanatarchs", "solmara"]
  },

  // Primarchs
  {
    id: "primarchs",
    name: "The Primarchs",
    aliases: ["Primarch"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Order Through Progress. Autarch sect centred on nationalism, capitalism, institutional power and organised service to civilisation. Primarchs regard themselves as the original expression of the Autarch ideal, with Exandria its foremost example.",
    full: `Order Through Progress
Autarch sect centred on nationalism, capitalism, institutional power and the organised protection of civilisation.

The Primarchs consider themselves the original form of the Autarch ideal: humanity advancing through organised power, disciplined leadership and collective ambition. They believe progress must be built, directed and protected through the structures that make civilisation function.

Their influence is expressed through governments, militaries, corporations, academies and industrial institutions. They organise economies, move resources, maintain infrastructure and ensure that the machinery of civilisation continues to operate. Their patriotism extends naturally into this philosophy, treating service to the nation and its people as both duty and proof of personal worth.

Exandria is regarded as the foremost example of Primarch society, where industrial power, corporate structures and political authority are deeply intertwined. Across the Crown Nations and wider Solmara, Primarch institutions continue to hold much of the practical machinery of governance and production.`,
    related: ["autarchs", "solmara"]
  },

  // Thanatarchs
  {
    id: "thanatarchs",
    name: "The Thanatarchs",
    aliases: ["Thanatarch"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Live Until Nothing Remains. Autarch sect centred on bodily autonomy, augmentation, extreme experience and defiance of death. Thanatarchs emerged from Silealyros's Market of Flesh and seek to extend personal sovereignty by pushing the body beyond its natural limits.",
    full: `Live Until Nothing Remains
Autarch sect centred on bodily autonomy, augmentation, extreme experience and defiance of death.

The Thanatarchs emerged from the philosophy of Silealyros and its Market of Flesh, which treats the body as an individual's last true asset. They accept that death cannot ultimately be defeated, yet refuse to surrender to it quietly, pursuing survival through cybernetic augmentation, experimental technology and chemical stimulation.

They value control over flesh, sensation and personal destiny, pushing their bodies beyond natural limits while indulging in pleasure, violence and other extremes. Their ideal is to remain sovereign over themselves until the body can no longer continue.

Unlike the Primarchs, who build institutions for a future they expect to inherit, Thanatarchs are concerned with the life immediately in front of them. They command, consume and endure, but rarely build beyond their own horizon. They are dying rulers determined to remain standing until the last possible moment.`,
    related: ["autarchs", "silealyros"]
  },

  // Norrvekt
  {
    id: "norrvekt",
    name: "The Norrvekts",
    aliases: ["Norrvekt"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Humanity Together. Autarch sect centred on family, cooperation, communal responsibility and altruistic service. Norrvekt place human wellbeing at the heart of Autarchianism, treating progress as a means of protecting and strengthening people.",
    full: `Humanity Together
Autarch sect centred on family, cooperation, communal responsibility and altruistic service.

The Norrvekt are the traditionalist branch of Autarchianism that developed in Norrvektstan, shaped by the cold seas and long nights of northern Solmara. They place the human purpose of Autarchianism above progress for its own sake, believing knowledge, strength and technology are valuable because they allow people to protect and provide for one another. Family, crew and community are treated as extensions of the same bond, with survival understood as a shared responsibility.

Norrvekt culture is deeply maritime. Its people are renowned sailors, navigators and shipwrights, equally comfortable aboard seaborne vessels and airships. Their reputation for seamanship, reliability and cooperation made them natural recruits for D.E.A.D., which often sought Norrvekt as its heroes. Some became renowned figures in their own right, travelling beneath capes and carrying names that passed into legend.

Heroism is therefore central to the Norrvekt ideal. They admire those who put themselves in danger for others, protect their communities without expectation of reward and use their abilities in service of people who depend upon them. Their prudence and communal discipline can make them appear conservative beside other Autarch sects, yet their strength lies in preserving the people those other traditions often claim to be building the future for.`,
    related: ["autarchs", "norrvektstan", "silealyros"]
  },

  // Sahrani
  {
    id: "sahrani",
    name: "The Sahrani Faith",
    aliases: ["Sahrani", "Sahrani Faith"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Be Worthy of the Sky. Ancient Sahrani faith centred on the Sun, responsibility, repentance, community and return to Aokusa. Its traditions teach that exile was a consequence of the Sahrani's own actions and that becoming worthy of the sky requires how they live with one another.",
    full: `Be Worthy of the Sky
Ancient Sahrani faith centred on the Sun, responsibility, repentance, community and the hope of returning to Aokusa.

The Sahrani faith originated in Aokusa, where the people lived beneath the Scorching Sun and regarded the mountain at its heart as sacred. When the Sahrani disturbed the Fruit of the Deep, the land began to decay. The Autarchs subsequently descended upon Aokusa and drove the Sahrani from their homeland. Sahrani tradition interprets this as a consequence they brought upon themselves: they were not cast out by the Angels, they cast themselves out through their own actions.

The exiled people settled in Sahran, living within the Geode formed by the wound they had left behind. Aokusa remained across the strait, visible but inaccessible, and became the central image of their religious longing. To return, the Sahrani believe they must become worthy of the sky they once inhabited. This gives the faith a strong emphasis on repentance, responsibility, endurance and service to others, with the individual's conduct measured by what it preserves and how it affects the people around them.

The Sun represents the divine light under which humanity lives and is judged. Its presence connects the Sahrani to Aokusa and to the hope of restoration, while the memory of exile teaches that what is given can also be lost through human choice. Community is therefore essential to the faith: hardship is shared, responsibility is carried collectively and helping others is considered part of becoming worthy rather than merely an obligation imposed from above.

The broader Luminary tradition grew from these beliefs, placing particular emphasis on the Sun and the renewal of a world believed to have fallen into corruption. Over time, its interpretations diverged. The Solarii preserved the faith through worship, tradition and craftsmanship, while the Pyraeon turned its ideas of purification and renewal towards militant destruction. The Luminary tradition remains recognisably Sahrani because both branches inherit the same older ideas of light, consequence, worthiness and renewal.`,
    related: ["luminaries", "pyraeon", "solarii", "sun"]
  },

  // Luminaries
  {
    id: "luminaries",
    name: "The Luminaries",
    aliases: ["Luminaries", "Luminary"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "The Light Will Return. Sahrani religious tradition centred on the Sun, hope, repentance and renewal. Originating as a rebellion against Autarch rule, Luminary faith evolved from its early purificationism into a broader belief that light, humanity and a better age can return after darkness.",
    full: `The Light Will Return
Sahrani religious tradition centred on the Sun, hope, repentance, renewal and the coming of a new age.

The Luminaries originated during the Age of Men as a rebellion within the Sahrani faith. After the Sahrani were driven from Aokusa by the Autarchs, the Luminaries rejected submission and the expectation that their people should simply endure exile and prove themselves worthy of returning. They regarded the Autarchs as demons and believed the world had become corrupted through their rule, calling for repentance and the restoration of a purer age.

The Geode Rapture and the appearance of the Crescent Sun gave their beliefs greater urgency. The altered Sun was interpreted as a sign of divine judgement, reinforcing the conviction that the world had reached a point at which something had to change. This produced the purificationist strain that eventually became the Pyraeon, who retained the older Luminary conviction that corruption must be destroyed before renewal can occur.

The Shattering transformed the tradition. The Scorching Sun became the Warm Sun, and the appearance of the Moon forced the Luminaries to reconsider what the return of light meant. Over generations, the broader tradition moved away from rebellion and destruction towards hope, renewal and the belief that darkness is something humanity can endure without surrendering its future. In the Age of Decay, Perpetual Night gave this belief renewed importance. The brief Sunday appearance of the Warm Sun became a recurring reminder that light still returns.

Modern Luminaries therefore look towards the Sun as a promise of renewal, teaching that humanity can recover from suffering, corruption and loss. Repentance remains part of the tradition, though increasingly as recognition of responsibility rather than preparation for punishment. Luminary communities preserve many of the practices and values inherited from the wider Sahrani faith, while treating the hope of another age as their defining ideal.

The name Luminary became increasingly associated with this broader and more hopeful interpretation, while the Pyraeon remained its radical purificationist offshoot. The Solarii eventually separated from the Sahrani tradition entirely, developing their own distinct theology around the Sun.`,
    related: ["pyraeon", "sahrani", "solarii", "sun"]
  },

  // Pyraeon
  {
    id: "pyraeon",
    name: "The Pyraeon",
    aliases: ["Pyraeon"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Let the World Burn Clean. Luminary sect centred on purification, anti-modernism and militant religious extremism. The Pyraeon believe civilisation must be burned away so humanity can return to a purified, natural world.",
    full: `Let the World Burn Clean
Luminary sect centred on purification, anti-modernism, destruction and militant religious extremism.

The Pyraeon are the radical branch of the Luminary tradition, emerging from its belief that the world has fallen into corruption and must be purified. Where Luminaries broadly place their faith in the Sun, repentance and the hope of renewal, the Pyraeon believe civilisation itself has become part of the corruption. Technology, industry and government are treated as extensions of the world's spiritual decay and must be destroyed rather than reformed.

For the Pyraeon, the Sun represents purification through destruction. Its fire will reduce the corruption of civilisation to ash, allowing something true to grow from what remains. They therefore wage war against the modern world, attacking the institutions and infrastructure they believe prevent humanity from returning to a more natural existence.

The Pyraeon are militant and uncompromising, willing to kill, die and destroy in pursuit of purification. Their extremism makes them feared even among other Luminaries, whose faith can encompass hope, reverence and renewal without demanding the world's destruction as their necessary price.`,
    related: ["luminaries", "sahrani", "sun"]
  },

  // Solarii
  {
    id: "solarii",
    name: "The Solarii",
    aliases: ["Solarii"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "The Sun Remembers. Luminary sect centred on solar divinity, tradition, craftsmanship and spiritual isolation. The Solarii reject modern innovation in favour of human-made craft and ritual, worship the Sun as a god and regard the Moon as a corrupting influence.",
    full: `The Sun Remembers
Luminary sect centred on solar divinity, tradition, craftsmanship and spiritual isolation.

The Solarii are the monastic branch of the Luminary faith, secluded communities devoted to the Sun as a literal god. They reject modern innovation and industrial progress, holding that meaningful creation comes through human hands. Craftsmanship, art, ritual and inherited tradition are therefore treated as sacred practices through which humanity honours the Sun's gift.

Gold is central to Solarii culture, worn as jewellery and ornamentation as a reflection of sunlight and divine favour. Their rituals include daily sun-gazing, fire dances and sacred performances, particularly at dawn. Among the Solarii, healing carries similar religious significance. Lux-infused crystals such as Verdani and Mauri are regarded as expressions of the Sun's restorative power, with their use often accompanied by prayer, reverence and thanksgiving.

The Solarii consider the Moon a corrupting presence, believing its influence encourages stagnation, passivity and complacency. Their communities are consequently insular and protective of their traditions, and outsiders who attempt to impose themselves upon Solarii settlements can meet violent resistance. Atenara contains the largest concentration of Solarii, particularly around the ancient temples and shrines of Khemru and Heliadis.`,
    related: ["luminaries", "sahrani", "sun", "atenara"]
  },

  // Vesperites
  {
    id: "vesperites",
    name: "The Vesperites",
    aliases: ["Vesperite", "Vesperitism", "Moon Baby", "Nightstray", "Gloamer", "Sundrifter"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "In the Quiet Between. Hoshimiran faith centred on the Moon, stars, impermanence, harmony and acceptance. Originating in Hoshimira, Vesperitism spread across Aerisu as a flexible way of living that places spiritual value in family, community, ritual and the changing cycles of the world.",
    full: `In the Quiet Between
Hoshimiran faith centred on the Moon, stars, impermanence, harmony and the acceptance of life's changing cycles.

Vesperitism originated in Hoshimira as a way of living alongside the rhythms of the world. It teaches that life changes constantly and that peace comes from accepting those changes rather than trying to control them. Family, community, ritual and appreciation for ordinary moments form its practical foundation, with spiritual meaning found in how people live rather than in strict doctrine.

Before the Moon existed, this understanding was expressed through the coming of night. The setting of the Scorching Sun marked the world's brief respite from its relentless heat, giving people time for family, reflection and rest. The appearance of the Moon transformed that relationship. Its light became a gentler presence in the darkness, while the stars came to represent the vastness beyond individual lives and the continuity of the world through generations. These became central to Vesperite practice and symbolism.

The faith spread widely beyond Hoshimira because its teachings could exist alongside local customs rather than demanding their replacement. Different cultures developed their own rituals, interpretations and names while retaining the same emphasis on harmony, acceptance, impermanence and living well within one's circumstances. Vesperitism consequently became one of Aerisu's most widespread traditions without losing its Hoshimiran character.

In the Age of Decay, Perpetual Night changed the meaning of those traditions again. The Moon and stars became the dominant celestial presence, while the brief Sunday appearance of the Sun came to interrupt the darkness Vesperites had learned to value. Luminary demands for the Sun's return therefore became increasingly opposed to Vesperite sentiment, and many Vesperites came to regard the Sunday dawn as an intrusion rather than a promise.

Vesperites are variously called Nightstrays, Gloamers and Sundrifters, though the names matter little to them. Other ideologies dismiss them as Moon Babies, a term some communities have reclaimed with amused pride.`,
    related: ["yorushika", "moon", "luminaries", "hoshimira"]
  },

  // Yorushika
  {
    id: "yorushika",
    name: "The Yorushika",
    aliases: ["Yorushika"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Peace Through Action. Vesperite sect centred on active pacifism, nonviolence and humanitarian resistance. The Yorushika oppose war through protest, civil disruption, refuge networks and direct efforts to dismantle the structures that sustain violence.",
    full: `Peace Through Action
Vesperite sect centred on active pacifism, nonviolence, humanitarian aid and resistance to war.

The Yorushika are the activist branch of Vesperitism, believing that peace requires deliberate action rather than withdrawal from conflict. They organise mass sit-ins, silent protests and civil disruption against governments and militaries, campaign for weapons dismantlement and reject industries that profit from war.

They refuse to fight even when attacked, holding that demonstrating the possibility of peace matters more than victory in any individual conflict. Their activism extends into war zones, where they smuggle civilians to safety, establish refuges and shelter refugees while disrupting military recruitment and propaganda through art, performance and public discourse.

Yorushika pacifism is therefore deliberately confrontational. They seek to undermine the structures that perpetuate violence while refusing to reproduce that violence themselves.`,
    related: ["vesperites", "hoshimira"]
  },

  // Fenguan
  {
    id: "fenguans",
    name: "The Fenguan Faith",
    aliases: ["Fenguan"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Order Beneath Heaven. Fenguan faith centred on harmony, duty, ancestry, hierarchy and responsible knowledge. It teaches that society flourishes when people understand their place, fulfil their obligations and use knowledge to preserve harmony.",
    full: `Order Beneath Heaven
Fenguan faith centred on harmony, duty, ancestry, hierarchy and the responsible use of knowledge.

The Fengua faith developed from the Hoshimiran clans who settled in the storm valleys after the Shattering. It teaches that harmony depends upon people understanding their place within the wider whole and fulfilling the responsibilities attached to it. Family, community and governance therefore follow the same principle of reciprocal duty, with greater authority carrying greater responsibility.

The world itself is treated as a source of knowledge. Storms, seasons, spirits and celestial movements are observed, recorded and passed between generations so that communities can understand the forces around them and live accordingly. Susanoo, guardian of the Rift, became central to this tradition, with his storms studied through both ritual and careful observation.

This produced a culture where scholarship and governance became closely intertwined. Officials, priests, engineers and archivists each preserve different forms of knowledge, while hierarchy provides the structure through which that knowledge serves the community. Wisdom is measured through its application, particularly in maintaining order, protecting others and preserving harmony with the world.

The faith remains deeply rooted in ancestry and continuity. Traditions, records and obligations connect each generation to those who came before, giving inherited knowledge the same importance as individual understanding.`,
    related: ["chi", "fengua", "hoshimira"]
  },

  // Psycrata
  {
    id: "psycrata",
    name: "The Psycrata",
    aliases: ["Psycrata"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Knowledge Reveals. Intellectual tradition centred on knowledge, interpretation, understanding and control of information. The Psycrata shape society through scholarship, institutions and expertise, treating understanding as the foundation of advancement and a source of power.",
    full: `Knowledge Reveals
Intellectual tradition centred on knowledge, interpretation, understanding and the control of information.

The Psycrata are scholars, researchers and interpreters who believe that understanding is the foundation of true advancement. They study the underlying structures of the world, from natural phenomena and magical principles to history, consciousness and the patterns connecting events. Their expertise in Understanding makes them exceptionally proficient with magic, though magic itself is not exclusive to them.

Psycrata influence is strongest through institutions that control knowledge and interpretation. Diviner Councils, academies, archives, temples and private intellectual orders preserve and regulate information, determine how discoveries are understood and decide which interpretations are accepted. Their networks allow them to shape policy and public belief without necessarily holding formal political authority.

They are especially associated with the study and containment of Soul Shards, the Separation Ritual and other subjects where knowledge carries significant consequence.

Their influence has made them one of the major powers of the modern era, rivaling the Autarchs through information rather than industrial dominance. To know something is useful; to determine how that knowledge is understood can be power in itself.`,
    related: ["aevicara", "odyraphim", "diviners"]
  },

  // AEvicara
  {
    id: "aevicara",
    name: "The AEvicara",
    aliases: ["AEvicara"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "The Pattern Persists. Psycrata sect centred on Recursion, memory, Echoes and Soul Resonance. The AEvicara study how patterns survive through Echoes and influence new configurations, often experimenting directly with memories and souls to understand them.",
    full: `The Pattern Persists
Psycrata sect centred on Recursion, obsession, memory, souls and the study of persistent Echoes.

The AEvicara are the mystical and obsessive branch of the Psycrata, devoted to understanding Recursion through the traces left by previous configurations. They study how memories, desires, behaviours and aspects of identity persist through Echoes and influence new souls, seeking knowledge through direct engagement with these recurring patterns.

AEvicara practitioners work closely with Soul Resonance, using Psy practices such as meditation, memory transference and Resonance manipulation to recover and interpret persistent Echoes. They may deliberately immerse themselves in recurring memories or patterns, attempting to understand the relationship between what remains and what has changed.

Their pursuit can become obsessive. The more deeply an AEvicara embeds themselves in recurring Echoes, the greater the temptation to gather fragments that appear related and force them into a single pattern. Many eventually begin feeding Chimericism in this way, gradually entangling themselves with incompatible Resonances and identities in pursuit of a continuity that does not truly exist.

The wider Psycrata regard the AEvicara as dogmatic and reckless, particularly when their experiments interfere with souls or attempt to reproduce recurring configurations. The AEvicara consider conventional Psycrata too detached from the phenomena they claim to understand, believing some knowledge requires direct participation rather than observation.`,
    related: ["psycrata", "chimericism", "chimeric-design"]
  },

  // Odyraphim
  {
    id: "odyraphim",
    name: "The Odyraphim",
    aliases: ["Odyraphim"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "The Truth Between. Psycrata network centred on hidden knowledge, research and information control. The Odyraphim operate through loosely connected scholars and power brokers whose shared ideas influence one another and spread without requiring a central organisation.",
    full: `The Truth Between
Psycrata network centred on hidden knowledge, independent research, information control and the unseen influence of ideas.

The Odyraphim are a loose network of scholars, researchers and power brokers connected by shared assumptions about knowledge rather than a formal doctrine or hierarchy. Their public institutions present them as an academic society studying magic, technology, celestial movements and the deeper structures of the world. Behind that public face, individual Odyraphim pursue classified research, restricted knowledge and projects considered too dangerous or politically sensitive for ordinary institutions.

They operate between scholarship and power, influencing governments, corporations, military organisations and other factions through information, research and interpretation. Some develop weapons, others suppress discoveries or preserve knowledge they believe cannot safely circulate. Their loyalties are therefore individual and transactional rather than ideological, with members willing to work across factional boundaries and sell knowledge or technology when it serves their interests.

The Odyraphim are less a unified organisation than a self-reinforcing pattern. Many members know only a fraction of the network around them, while others may arrive at the same conclusions independently and begin influencing one another without recognising the connection. Ideas, discoveries and assumptions spread through this network much like a meme, creating a collective direction without requiring central coordination.

Xeraphina Auto is one of the major powers associated with the Odyraphim. Together, they represent the more concealed side of Psycrata influence: the people who study what others cannot see, decide what knowledge should circulate and quietly build tools that may shape what comes next.`,
    related: ["psycrata", "xeraphina"]
  },

  // Vantari
  {
    id: "vantari",
    name: "The Vantari",
    aliases: ["Vantari", "Nihilist"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Death Gives Life. Vanta-aligned tradition associated with the Curse, nihilism, withdrawal, death and existential lack. Vantari is also used broadly as a social label for people perceived as isolated, cursed or outside conventional society.",
    full: `Death Gives Life
Vanta-aligned tradition associated with the Curse, nihilism, withdrawal, death and the acceptance of existential lack.

Vantari is a broad term for people associated with Vanta and the Curse, encompassing a range of beliefs and practices that developed around the acceptance of darkness, desire and mortality. Some embrace the Curse deliberately, treating Vanta as a path towards understanding; others simply withdraw from society and become associated with its nihilistic reputation. The name is often applied loosely, sometimes describing entire communities rather than a coherent doctrine.

The tradition is strongly associated with Ereboska and its descendants, where generations of people learned to live alongside death, Vanta and the residue left by living things. Necromancy, Death Gardening and other practices emerged from this relationship and became closely associated with Vantari culture, even as their practitioners developed distinct traditions of their own.

Vantari thought tends towards the recognition of lack as fundamental to existence. Desire, decay, death and dissolution become subjects of contemplation and practice, while some seek meaning through accepting what others fear. The same ideas can lead towards disciplined study, ritual and transformation or towards nihilism, isolation and surrender to the Curse.

Because of this breadth, Vantari has become a social category as much as an ideological one. The Hollowed embody its nihilistic extreme, while practitioners such as the Gedevari have developed more deliberate traditions around death and Resonance. Soulless and homeless people are also frequently labelled Vantari by others, associating their isolation, lack of belonging or perceived withdrawal with the darkness surrounding the term.

The Diviners officially condemn Vantari traditions, particularly their relationship with the Curse and necromancy, while continuing to study the knowledge developed by those they condemn.`,
    related: ["hollowed", "duskwalkers", "death-gardening"]
  },

  // Hollowed
  {
    id: "hollowed",
    name: "The Hollowed",
    aliases: ["Hollowed"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "Into the Void. Vantari sect centred on nihilism, despair, oblivion and surrender to the Curse. The Hollowed seek the dissolution of self through Vanta, embracing death and emptiness as the final form of release.",
    full: `Into the Void
Vantari sect centred on nihilism, despair, oblivion and surrender to the Curse.

The Hollowed are the most recognisable expression of the Vantari worldview, having surrendered themselves almost completely to the Curse. They embrace Vanta as the ultimate expression of lack and desire, believing that existence leads inevitably towards dissolution and that release from the burden of being is the closest thing to salvation.

Many Hollowed become vacant, obsessive or deeply withdrawn, consumed by despair, fixation and the longing for an end. They seek states of trance and dissociation in which ordinary concerns lose meaning, treating the gradual erosion of self as a form of enlightenment. Death is welcomed as the final surrender, while further descent into Vanta is regarded as movement towards the truth they seek.

Their symbol is the void, representing the unknown, the inevitable end and the absence that waits beneath everything. Hollowed communities often gather around stronger Vantari figures who can give shape to their otherwise directionless existence, making them susceptible to manipulation and exploitation.`,
    related: ["vantari", "gedevari"]
  },

  // Gedevari
  {
    id: "gedevari",
    name: "The Gedevari",
    aliases: ["Gedevari", "Death Gardeners"],
    category: "concepts",
    age: "age-of-knowledge",
    short: "From Death, Growth. Vantari sect centred on death gardening, necromancy and the cultivation of life through death. The Gedevari work with the Resonance of the dead to cultivate plants, perform Blossoming Death and develop many of Aerisu's foundational necromantic practices.",
    full: `From Death, Growth
Vantari sect centred on death gardening, necromancy, Soul Resonance and the cultivation of life through death.

The Gedevari are practitioners who have learned to work with death as a source of transformation. Rooted in the Vantari traditions of Ereboska, they study the Resonance released when living things die and use it to cultivate plants, manipulate growth and interact with the lingering traces of the dead. Death Gardening became their defining discipline, while necromancy developed alongside it as another means of understanding and directing what death leaves behind.

Gedevari practice treats each death as having its own character. The condition of the dying, the life they lived and the manner of their death all influence the residue they leave behind, allowing experienced gardeners to cultivate particular plants from particular endings. This knowledge extends into ritual, medicine and commerce, with death gardens producing food, medicines and materials throughout Ereboska and beyond.

Some Gedevari provide Blossoming Death services, carefully directing a person's final Resonance into a prepared garden so their death can nourish something chosen in advance. The practice appears in hospitals, where it may serve as a final act of care, as well as among families and communities that wish to give death a continuing purpose.

Their work extends into the Veins, where accumulated death gathers around the deeper passages and the boundaries between realms. Gedevari necromancers are among the most knowledgeable practitioners of these thresholds, and their expertise has made them important guides, healers and ritual specialists.

Unlike the Hollowed, who surrender themselves to Vanta's pull, the Gedevari cultivate a relationship with it through discipline and practice. The Curse remains a constant danger, and prolonged work with death, Vanta and accumulated Resonance can gradually draw practitioners deeper into the same darkness they seek to understand.`,
    related: ["vantari", "hollowed"]
  },
  // VantaPsy
  {
    id: "vantapsy",
    name: "VantaPsy",
    aliases: ["VantaPsy"],
    category: "concepts",
    age: "age-of-decay",
    short: "To Lack; To Want A Soul. Philosophy of becoming centred on lack, desire, awareness, agency and consequence. VantaPsy teaches that the soul forms through how a person responds to what they lack, with each choice creating Echoes that shape what follows.",
    full: `To Lack; To Want A Soul
Philosophy centred on lack, desire, awareness, agency, consequence and the continual formation of the soul.

VantaPsy takes its name from Vanta, meaning to lack or to want, and Psy, referring to the psyche, mind, soul and heart. Together they describe the condition from which all becoming begins: a person encounters what they lack, develops desire, and moves through the world in response to it.

The philosophy understands the soul as something formed through that movement. A person becomes through their choices, relationships, intentions and consequences, leaving Resonance and Echoes that continue into what follows. The soul therefore develops throughout life, carrying its history while changing through every new action.

VantaPsy teaches the Six Steps of Becoming: recognising lack, wanting with compassion, seeking clarity, acting with noble intent, taking responsibility for consequence, and carrying what remains with reverence. These principles describe a practice of living with awareness, directing desire rather than being consumed by it, and accepting that every choice becomes part of something larger.

VantaPsy has no final state of completion. Wholeness remains something approached through continual becoming, as each Echo enters the world and becomes part of what comes next. Meaning lies in the movement itself, in what a person chooses to do with what they lack and what they leave behind.`,
    related: ["vanta-concept", "soul", "soulless"]
  },
);
