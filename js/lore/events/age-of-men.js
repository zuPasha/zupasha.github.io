window.LORE_ENTRIES = window.LORE_ENTRIES || [];
window.LORE_ENTRIES.push(
  // === EVENTS ===

  // Events Overview
  {
    id: "events-overview",
    name: "Events Overview",
    aliases: ["Events Overview"],
    category: "events",
    age: "age-of-men",
    short: "Events is the chronology of Aerisu, covering its major historical and cosmological events across the successive Ages.",
    full: `Chronology of Aerisu's major historical and cosmological events.

Events traces the history of Aerisu from the Age of Men through the Age of Gods, Age of Fairytales, Age of Magic, Age of Knowledge and Age of Decay. Entries are primarily chronological, with related events occasionally grouped together to preserve their broader historical context.`,
    related: ["age-of-men"]
  },

  // Age of Men
  {
    id: "age-of-men",
    name: "Age of Men",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "Moonless era of the Scorching Sun. Storms, deserts, and the mountain realm as heaven. The major nations of Aerisu during the first age: Solmara (Autarch seat), Hoshimira (mountain realm), and Sahran (born from exile).",
    full: `The Age of Men was the era before the Moon, when the Scorching Sun governed Aerisu's skies and humanity's great civilisations began defining themselves through ambition, faith and survival. Solmara rose as the dominant human power, while the histories of Hoshimira and Sahran became intertwined with its expansion.

The Nations during the Age of Men
Solmara
Solmara was the seat of the Autarchs before the rise of the Psycrata, an expanding empire of scholars, rulers and soldiers devoted to order, efficiency and human capability. Their power rested on disciplined institutions, military strength and technological ambition. When their mechs entered the mountains of Hoshimira, their radiant forms were taken for Angels. The reverence that followed became political allegiance, and Hoshimira became a Solmaran vassal.

Hoshimira
Hoshimira was a mountain realm of spiritual discipline, ancestral tradition and harmony with the land. When some of its people mined into the Golden Heart against the Elders' warnings, the resulting devastation brought Solmaran intervention. The diggers were driven from Aokusa, and Hoshimiran tradition understood the event as judgement from the Angels. Those exiles became the Sahrani.

Sahran
Sahran was formed by the exiled Hoshimiran people, who settled in the desert lands beyond Aokusa and made the Geode their home. Their society developed around survival, craft, repentance and the hope of returning to their ancestral mountain. Many accepted servitude or sought to prove themselves worthy of returning. Others rejected this path and became the first Luminaries, turning their sense of exile and injustice towards rebellion and religious extremism.`,
    related: ["solmara", "hoshimira", "sahran", "geode-rebellion"]
  },
  {
    id: "geode-rebellion",
    name: "Geode Rebellion",
    aliases: ["Geode Rebellion", "Red Orphan Tier"],
    category: "events",
    age: "age-of-men",
    short: "The Geode Rebellion was the Sahrani uprising against Autarch rule in the Geode, in which generations of exploited labourers reclaimed the tiers, restored their communities and established Sahrani self-rule.",
    full: `Life Under Autarch Control
After the Sahrani exile, the Geode became a system of labour tiers under Autarch control. Identity was stripped into numbers and function, families were separated, and children were taken into the Orphan Tiers where memory, ritual and obedience replaced the lives they had been born into. The Curse was known throughout the caverns through disappearances, distortions and whispered accounts, while speaking openly about it carried the threat of punishment.

The Sahrani worked the stone and machinery of the Geode beneath constant surveillance from the mechs once called Angels. Resentment accumulated through generations, alongside the quiet preservation of family, faith and memory.

The Red Orphan Tier
The Red Orphan Tier became one of the centres of resistance. Children raised within its system learned to turn whatever they could reach towards defiance. Tools became weapons, sabotage became routine and forbidden knowledge passed between the tiers. The Autarchs classified these acts as terrorism and executed suspected saboteurs publicly, creating further symbols for the growing rebellion.

The Rebellion of the Tiers
The rebellion eventually spread through the Geode. Tunnels were destroyed, patrols disappeared and fighting moved from the lowest tiers towards the surface. Autarch forces responded with mechs and overwhelming firepower, while the rebels fought through the caverns they had spent generations working and learning.

Tier by tier, the rebels reclaimed their communities and drove the remaining Autarch forces from the Geode. Councils returned, shrines reopened and Sahrani traditions were practised openly. The Geode became the centre of an independent Sahrani society, carrying the memory of exile into a new political identity.

The rebellion ended Autarch rule without erasing its influence. The structures, technology and power relationships left behind continued shaping the Geode, leaving freedom as something that had to be maintained rather than assumed.`,
    related: ["geode-expedition", "sahran", "tayran"]
  },

  {
    id: "geode-expedition",
    name: "Geode Expedition",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "A Geode Expedition descended into the Geode's unexplored depths and discovered the sentient Deep, later revealed to be an extension of Bahamut. Its encounter with the expedition ended in Siba's sacrifice, revealing the consciousness beneath the Geode and permanently changing Sahrani understanding of what lay below.",
    full: `The Geode Expedition
After the Geode Rebellion, exploration of the deeper tiers continued through numerous expeditions. Among the most consequential was an expedition that descended after detecting an unexplained presence around a fissure known as the Mouth, where light and signals became distorted and the surrounding stone showed signs of Vanta saturation.

The deeper levels contained Cursed beings, VantaBats, Shadowlings and Tinnin, alongside increasingly abnormal geology and concentrations of Residue. The expedition eventually reached the Deep, a vast sentient formation connected to the planet's deeper structures. It was later revealed to be an extension of Bahamut, and its awareness became clear when it responded to their presence.

The encounter ended in catastrophe. Siba, a great mech built for war and protection, was offered as a vessel for Bahamut's destructive force. Its sacrifice ruptured the Geode's central seam and released a surge of light through the caverns before Siba and the expedition's guiding instrument disappeared.

The survivors returned carrying the knowledge that Bahamut was conscious and that the Geode contained something far beyond an ordinary mineral formation. The Curse remained active beneath the settlement, while the memory of Siba's sacrifice became part of the Geode's history. The expedition permanently changed how the Sahrani understood what lay beneath them and established that the boundary between Aerisu's surface and its deeper consciousness was far thinner than previously believed.`,
    related: ["geode-rapture", "geode-rebellion", "sahran", "the-geode"]
  },

  {
    id: "geode-rapture",
    name: "Geode Rapture",
    aliases: ["Rapture"],
    category: "events",
    age: "age-of-men",
    short: "The Geode Rapture was the catastrophic descent into the Geode's depths, where its semi-sentient interior erupted and devastated the settlement. Material expelled during the disaster entered the atmosphere and caused the Crescent Sun.",
    full: `The Second Descent
Among the later expeditions into the deeper Geode, a second major descent followed years after the expedition that first encountered Bahamut. The team entered through reinforced shafts and increasingly unstable tunnels, encountering shifting stone, dense Vanta miasma and increasingly hostile life. Few returned.

At the deepest level, the expedition encountered the Geode's immense inner chamber, where its semi-sentient nature became undeniable. The cavern behaved like a living system, drawing creatures towards it and producing entities from stone, fire and shadow. The presence at its centre was beyond anything the expedition could contain.

Rapture
The Geode erupted. Its lower regions collapsed into a violent release of creatures, Vanta-saturated material and destructive energy that overwhelmed miners, soldiers and engineers. Evacuation became the only priority as survivors fought their way towards the surface.

The release extended beyond the Geode itself. Material expelled into the atmosphere altered the passage of sunlight, producing the Crescent Sun, in which part of the Scorching Sun's disk appeared darkened and distorted. The Sun itself remained unchanged.

The destruction left the Geode devastated and its population scattered. Those who escaped carried accounts of what had awakened below, while the wider world inherited an atmospheric consequence that would remain long after the Rapture ended.`,
    related: ["geode-expedition", "geode-rebellion", "sahran", "the-geode"]
  },

  {
    id: "sanctum-verge",
    name: "Sanctum Verge",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "Sanctum Verge was a Hoshimiran outpost in war-torn Ori'sol, destroyed after Luminary forces experimented on a captured apprentice and Hoshimiran troops retaliated by massacring the outpost's defenders.",
    full: `During the Ori'sol War, a Hoshimiran squad established a military outpost within the ruined city, surrounded by streets choked with black rain, ash and collapsed buildings. Signs of Luminary occupation remained throughout the area, including makeshift fortifications, ritual traces and the presence of the Curse within the hollow structures.

A young Hoshimiran apprentice was captured during an early skirmish and subjected to experiments intended to weaponise the Curse. Hoshimiran forces retaliated by storming the Luminary outpost, executing its defenders, including children and others caught within the fighting, before burning what remained.

The checkpoint was destroyed during the fighting, and the squad later found their own position in ruins. Sanctum Verge became remembered for the cycle of violence between Luminary extremism and Hoshimiran retaliation, with civilians and young recruits caught between them.`,
    related: ["hoshimira", "orisol", "daigo-kusanagi", "aokusa", "sahran", "luminaries"]
  },
  {
    id: "ik-rasul-incident",
    name: "Ik-Rasul Incident",
    aliases: ["Ik-Rasul Crash"],
    category: "events",
    age: "age-of-men",
    short: "The Ik-Rasul Incident began when the Ik-Rasul fell into Aokusa, triggering widespread environmental and psychological disturbances, Black Blood Syndrome and unexplained changes in the Autarch Angels stationed nearby.",
    full: `When the Ik-Rasul fell into Aokusa, the impact disturbed the surrounding basin, affecting its mountains, rivers and aquifers. Solmaran authorities classified the event as a cross-border bio-threat and deployed monitoring drones and Autarch forces throughout the region.

Soon afterwards, people across southern Aokusa reported hallucinations, nightmares and voices resembling fragments of old Hoshimiran chants. The condition later known as Black Blood Syndrome appeared among the affected population, while animals and soil began displaying abnormal responses.

The redeployed Angels also began returning with unexplained alterations. Their sensors recorded patterns without recognised commands, while strange Resonance accumulated beneath the basin. Ori'sol became the centre of investigation as evidence grew that the Ik-Rasul had disturbed something deeper within Aokusa.

The incident marked the beginning of a prolonged period of fear and study surrounding the region, while the effects of the Ik-Rasul extended beyond physical contamination into cognition, Resonance and the behaviour of those exposed.`,
    related: ["ik-rasul", "aokusa"]
  },
  {
    id: "operation-car",
    name: "Operation C.a.R",
    aliases: ["C.a.R"],
    category: "events",
    age: "age-of-men",
    short: "Operation C.a.R was a Solmaran stabilisation campaign launched after the Ik-Rasul Incident, using Project DAEDALUS to suppress unrest, secure affected territories and relocate vulnerable populations, including Hoshimiran orphans, to Isvara.",
    full: `Operation C.a.R was launched after the Ik-Rasul Incident destabilised Sahran, Hoshimira and Ylvara. Solmara framed the worsening situation as a crisis requiring rapid stabilisation, with the Geode and the spread of Luminary doctrine presenting particular concern.

Tayran's northern coast had already begun moving towards collapse as Luminary influence increasingly shaped local governance. Solmara authorised Project DAEDALUS to intervene with private forces, bipedal mechs and rapid-response units. Insurgencies were suppressed, territory secured and civilians extracted.

The operation also gathered survivors of other incidents, including people affected by the Ik-Rasul, and redirected them into Isvara's systems, with Hoshimiran orphans receiving priority. Displacement became a standard method of containment, with care increasingly administered through monitoring and controlled relocation.

Responses across Sahran varied. Tayran resisted the intervention, while Najmara and Zaristan accepted it to preserve stability in their cities. Panjara remained distant and watched the situation unfold.

Operation C.a.R established Solmara's modern model of containment: suppress instability, remove vulnerable populations from affected regions and impose enough administrative control to prevent further escalation.`,
    related: ["ik-rasul-incident", "isvara"]
  },
  {
    id: "vaelmiric-war",
    name: "Vaelmiric War",
    aliases: ["Vaelmir War"],
    category: "events",
    age: "age-of-men",
    short: "The Vaelmiric War was a prolonged conflict between Solmara's northern provinces and Ylvara, sparked by revelations of Black Blood experimentation and abuses within Council facilities. It ended with the Calm Accords and the Black Blood Regulations.",
    full: `The Vaelmiric War began as a response to revelations of Ylvaran abuses and developed into a prolonged conflict between the northern provinces of Solmara and Ylvara. Norrvektstan and Silealyros had very different ideas about the use of Vaelmir, yet both opposed Ylvara after reports emerged of children held in Council facilities and Black Blood experiments conducted on living subjects without consent.

The Council's response was slow and increasingly ineffective as the northern provinces began coordinating outside its established channels. Fighting spread across Vaelmir, where naval engagements disrupted shipping and coastal bombardments devastated settlements, while ground forces conducted operations through civilian areas. Within Ylvara itself, political conflict grew over what the Council had known, when it had known it and which officials had authorised the research.

The war lasted for years, with northern and southern records disagreeing over its exact beginning. It ended through exhaustion as the cost of continued fighting became unsustainable. The Calm Accords established the terms of the settlement and included the Black Blood Regulations, placing formal restrictions on the research that had helped ignite the conflict.

The war left a lasting silence across Solmara. Veterans from every side remembered what had happened, while the populations that survived carried the consequences into the uneasy peace that followed.`,
    related: ["vaelmir", "calm-accords", "black-blood-regulations", "isvara"]
  },
  {
    id: "calm-accords",
    name: "Calm Accords",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "The Calm Accords ended the Vaelmiric War by dividing control of Vaelmir, restricting military force and restoring trade between northern and southern Solmara. Their fragile settlement preserved the tensions that had caused the war.",
    full: `The Calm Accords ended the Vaelmiric War after decades of naval and coastal destruction, establishing a fragile settlement between northern and southern Solmara.

Vaelmir's central waters were demilitarised and patrols reduced, while Norrvektstan assumed stewardship of the inland sea and the southern provinces retained control of major ports, trade routes and chokepoints. Disputed islands were placed under joint oversight. Long-range weapons and destructive military platforms were prohibited, with neutral mediators appointed to monitor compliance.

Economic measures restored trade through shared tariffs and reparations, though corruption and covert violations soon undermined the settlement. Non-interference provisions were routinely tested whenever political or economic interests outweighed the cost of doing so.

The Accords became known as the Silent Curse among veterans. In the North they were remembered as surrender disguised as diplomacy, while the South regarded them as necessary restraint. They ended the war without resolving the tensions that produced it, leaving Vaelmir heavily watched and both sides preparing for the conflict they expected might return.`,
    related: ["vaelmiric-war", "vaelmir", "black-blood-regulations"]
  },
  {
    id: "black-blood-regulations",
    name: "B-Blood Regulations",
    aliases: ["Black Blood Regulations"],
    category: "events",
    age: "age-of-men",
    short: "The Black Blood Regulations prohibited Council-sanctioned Black Blood research and ordered existing subjects into humanitarian care following the Vaelmiric War. Their implementation led to the establishment of Isvara, where many former subjects remained under extensive state supervision.",
    full: `The Black Blood Regulations were established as a condition of the Calm Accords, following the revelations and conflict surrounding the Solmaran Council's Black Blood research. The research had used displaced and orphaned children as living subjects, processed through administrative systems that made them available to programmes requiring human experimentation.

Norrvektstan and Silealyros, despite their opposing cultures, condemned the practice together. Norrvektstan treated it as a violation of communal responsibility and human life, while Silealyros regarded it as an assault on bodily autonomy and personal sovereignty. Their shared opposition became one of the forces that drove the Vaelmiric War.

The Regulations prohibited Black Blood research conducted under direct Council authority and required existing subjects to be released into humanitarian care. Isvara was established soon afterwards as a supervised refuge for many of those children and other displaced survivors.

The Regulations remained an enduring symbol of Solmaran reform, cited for decades as evidence that the Council had addressed the abuses that caused the war. In practice, the children transferred to Isvara remained under close surveillance and administrative control, preserving much of the system of containment under the language of protection.`,
    related: ["vaelmiric-war", "vaelmir", "calm-accords"]
  },
  {
    id: "vireliax-expedition",
    name: "Vireliax Expedition",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "The Vireliax Expedition was a Solmaran deep-sea mission into the Vaelmir Rift that encountered the Curse and evidence of a vast sentient intelligence within the Ocean Maw, leaving the vessel crippled and its crew shattered.",
    full: `The Vireliax Expedition was a deep-sea exploration mission launched from Velmora Port to investigate reports of the Curse within the Vaelmir Rift. The Vireliax was a submersible dreadnought combining military engineering with Resonance technology, built to navigate both the physical depths of the Ocean Maw and its unusual metaphysical conditions. Its crew consisted of scholars, warriors and technicians, reflecting an expedition where scientific and military roles were closely intertwined.

The expedition encountered hostile pirate fleets, perception-altering nanoviruses and manifestations of the Curse aboard the vessel itself. As the Vireliax descended further into the Maw, the mission's original objective expanded into an investigation of a possible planetary intelligence. Evidence increasingly suggested that the Maw was aware of the expedition and capable of responding to it.

At the Eye of the Maw, the crew encountered a vast storm surrounding a calm, sentient void, accompanied by bioluminescent organisms, intentional light patterns and symbols that appeared without known origin. The encounter caused severe psychological strain and fractured the crew's ability to distinguish threats, intentions and reliable information.

The expedition ultimately reached a catastrophic confrontation with the depths. Survival required decisions involving pre-emptive containment, sacrifice and the increasing influence of the Curse. The Vireliax was crippled and its crew left divided, with surviving records damaged and contradictory.

The expedition became one of the earliest major bodies of evidence that the depths of Vaelmir possessed a form of intelligence capable of observation and response, contributing to the later identification of that planetary consciousness as Bahamut.`,
    related: ["vaelmir", "vaelmiric-war", "bahamut"]
  },
  {
    id: "phantom-rescue",
    name: "Phantom Rescue",
    aliases: ["Operation Phantom Rescue"],
    category: "events",
    age: "age-of-men",
    short: "Operation Phantom Rescue was a covert Solmaran extraction of Vireliax survivors held in Thalgrith Port, using deniable agents to recover selected prisoners and relocate Black Blood affected children to Isvara.",
    full: `Operation Phantom Rescue
Operation Phantom Rescue was a deniable Solmaran operation launched after the survivors of the Vireliax Expedition were captured and taken to Thalgrith Port. Silealyros displayed the prisoners publicly and threatened to execute them unless Ylvara abandoned its Black Blood research, placing Solmara in a position where direct military intervention risked a wider conflict.

Solmara instead authorised a covert extraction targeting selected survivors, researchers and information considered strategically important. The operation involved two independent agents who briefly coordinated their efforts. One was a Shinkiri infiltrator who moved through Thalgrith by exploiting its identities, routines and security systems. The other was a Hoshimiran swordsman who entered the city's fighting pits and syndicates to locate survivors the official operation had ignored.

Their search led into the Gilt Spiral, where one survivor had been absorbed into Silealyros's system of manufactured identities, performances and controlled companionship. Recovering her required the swordsman to participate in the establishment that held her, turning the rescue into a series of compromises and negotiated access.

The Shinkiri agent initially followed the operation's limited objectives, treating unassigned survivors as outside her remit. She eventually extracted an additional child after choosing to intervene despite having no order to do so, creating a deviation from the mission's original scope.

The operation succeeded in removing several survivors before the authorities could respond. Children affected by Black Blood were subsequently transferred to Isvara, where they entered a heavily supervised system presented as humanitarian protection. Thalgrith continued operating, while Solmara denied direct involvement.

Phantom Rescue became an example of Solmaran deniable intervention, remembered for recovering valuable personnel while leaving the structures that enabled their captivity intact.`,
    related: ["vireliax-expedition", "isvara", "silealyros"]
  },
  {
    id: "shattered-walls",
    name: "Shattered Walls",
    aliases: ["Era of Shattered Walls"],
    category: "events",
    age: "age-of-men",
    short: "The Era of Shattered Walls marked the end of Solmara's long attempt to contain the Curse through secrecy and segregation. The structures surrounding it had been opened, exposing both the afflicted and the institutions that had kept them hidden.",
    full: `The Era of Shattered Walls began nearly forty years after the Ik-Rasul Incident, following Operation C.a.R., Phantom Rescue and the relocation of affected children to Isvara. By then, Solmara had built an increasingly rigid system of scanners, checkpoints and quarantine measures around the Curse, classifying afflicted people as anomalies and removing them from ordinary society.

The system began to fail as the Curse spread beyond containment and information about it became increasingly difficult to suppress. Survivor accounts, leaked research and persistent Resonance carried knowledge through the population until the divisions surrounding the Cursed could no longer be maintained.

Protests against the Cursed Laws developed into riots and clashes with Solmaran security forces. Councillor Retha Nuur responded with a programme she called Structural Restoration, loosening checkpoints, reducing executions and dismantling segregation measures. These reforms exposed the Council's internal divisions and created pressure for greater recognition of the Cursed, including public research and the restoration of previously suppressed histories.

For the first time, Cursed people appeared openly within Solmaran society. Universities studied the Curse, research received state support, and children raised within containment were placed alongside ordinary students. Fear and curiosity spread alongside the reforms.

The collapse of secrecy also allowed Vantari traditions to expand beyond their previous communities. Their acceptance of the Cursed and their teachings around Vanta, death and existential withdrawal attracted people who had been excluded by Solmaran society, creating an ideological challenge to Council authority.

Other powers responded according to their own interests. Elysium withdrew behind Cryotech barriers, while other nations watched Solmara's instability and adjusted their own policies towards the Cursed.`,
    related: ["ik-rasul-incident", "phantom-rescue", "operation-car"]
  },
  {
    id: "discovery-of-magic",
    name: "Discovery of Magic",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "The Discovery of Magic was Zephyr's development of systematic methods for manipulating Soul Resonance, establishing Magic as a studied discipline through external anchors, Heart Crystals and controlled experimentation.",
    full: `Zephyr was among the first to recognise that Soul Resonance could be deliberately tuned and directed through external anchors. What became known as Magic, he approached as a science: a method of shaping Resonance through knowledge, formula and controlled application.

His earliest tools included the Heart Crystals produced through his experiments, concentrated stores of Resonance capable of retaining emotion, desire and will. He developed methods for using them as magical anchors and documented his findings through grimoires and systematic experimentation.

Zephyr built a network of collaborators around this knowledge, eventually making himself indispensable to Elysium through solutions to problems others could not solve. His research depended increasingly on living subjects, particularly Cursed people, displaced populations and orphans who could be taken into his laboratories without meaningful resistance.

His work established many of the foundations of modern magical study, while also creating the conditions for increasingly invasive experimentation. Among the subjects who passed through his laboratories was a woman whose presence would eventually undermine the system he had built.`,
    related: ["soul-shards", "zephyr", "veyra-descent"]
  },
  {
    id: "veyra-descent",
    name: "Veyra's Descent",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "Veyra completed her father's Doctrine of Becoming and became an advocate for the Cursed while the Curse eroded her own identity. Pregnant with Ash Salinte's child, she travelled to Elysium after hearing of Zephyr's research into stabilising or reversing the Curse.",
    full: `Veyra completed her father's Doctrine of Becoming, which soon spread through underground Cursed communities as philosophy, prayer and a declaration that transformation could be understood rather than feared. She became an advocate for the Cursed even as the Curse consumed her own memory and identity. Pregnant with Ash Salinte's child, she gradually forgot his name, his face and eventually what being loved by him had felt like. When rumours reached her of Zephyr's research into stabilisation, cures and reversal, she travelled to Elysium in the hope of saving herself and her unborn child.`,
    related: ["elysium-atrocities", "first-spell", "soul-first-cry"]
  },
  {
    id: "elysium-atrocities",
    name: "Elysium Atrocities",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "Veyra witnessed Zephyr's experiments on Cursed subjects and discovered that Heart Crystals contained the concentrated Soul Resonance of those killed to create them. While imprisoned beneath Elysium, she stole one of the crystals and began learning to communicate with the Resonance within it.",
    full: `In Elysium, Veyra discovered the true nature of Zephyr's research. His laboratories used children and other Cursed subjects in experiments that opened their bodies, extracted their hearts and condensed their magical essence through alchemical apparatus into Heart Crystals. Veyra witnessed the crystallisation process and understood what the crystals contained: concentrated Soul Resonance, preserving the anguish, will and identity of the person from whom they were made. The knowledge turned her growing anger towards Zephyr and his work.

Her memory continued to deteriorate while her rage remained intact. Zephyr kept her in a cell beneath Elysium, where her pregnancy became increasingly dangerous. A friend who had protected her while she was imprisoned eventually died beside her. When the body was removed, synthetic white blood marked the floor. Veyra examined the trail through a Heart Crystal she had stolen from Zephyr's experiments and found something reflected through its fractured surface, perhaps instructions or a name. She began practising with the crystal, speaking to it and learning the shape of the Resonance within it.`,
    related: ["veyra-descent", "soul-first-cry"]
  },

  {
    id: "first-spell",
    name: "The First Spell",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "Veyra used Maura's Heart Crystal to cast Ignis, creating the first known Vanta Fire spell and becoming Aerisu's first mage. The casting freed the imprisoned Cursed, after which Veyra escaped Elysium and discovered that her baby had died.",
    full: `Veyra eventually learned whose Resonance she had been working with. The Heart Crystal belonged to Maura, Zephyr's daughter. Veyra had known Maura while Zephyr kept her in his house, controlling her with Synthetic White Blood to keep her placid and obedient. She had also met Sophie there, the maid who would later save her. As Veyra worked with Maura's crystal, she understood that the person whose Resonance it carried had been killed to make it. From that understanding came the first true command.

Ignis erupted from the crystal in a purple-black Vanta Fire that consumed essence rather than matter. The explosion broke Veyra's cell and opened others throughout the laboratory. She led the imprisoned Cursed into the escape as guards were overwhelmed and corridors collapsed, killing many in the process.

Veyra became the first mage of Aerisu through that casting. She fled the laboratory through the frozen waters surrounding its island and reached a sewer beneath Elysium, where she discovered that her baby had died.`,
    related: ["veyra-descent", "elysium-atrocities", "soul-first-cry"]
  },

  {
    id: "soul-first-cry",
    name: "Soul's First Cry",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "The death of Veyra's child produced a psychic shockwave that spread across Aerisu, overwhelming souls attuned to the Curse and causing widespread emotional and technological disturbances. The event became known as the Soul's First Cry.",
    full: `Veyra's discovery of her child's death triggered a psychic shockwave that travelled through Elysium, across the continent and throughout Aerisu. Souls attuned to the Curse felt a moment of overwhelming anguish. Mothers clutched their children, soldiers dropped their weapons, scholars stopped to tremble and technology flickered in response. The event became known as the Soul's First Cry.`,
    related: ["veyra-descent", "elysium-atrocities", "first-spell", "soul-first-cry", "cursed-prophet", "soul-shards", "zephyr"]
  },
  {
    id: "cursed-prophet",
    name: "Cursed Prophecy",
    aliases: ["The Prophecy of the Cursed"],
    category: "events",
    age: "age-of-men",
    short: "Veyra reached an underground community of Cursed people and created a Vanta Fire beacon from Maura's Heart Crystal. A woman there proclaimed that Veyra's dead child would still be born, while the community helped Veyra escape through the underground railway, where she eventually encountered Ash and recovered her lost memories.",
    full: `After the Soul's First Cry, Veyra continued through the sewers until she reached a community of homeless Cursed people, many marked by Black or White Blood. She used a fragment of Maura's Heart Crystal to kindle Vanta Fire in a metal drum, creating a beacon that would continue burning for generations.

A woman approached the fire and proclaimed that Veyra's child still lived and would be born, despite Veyra's discovery of the death. Others dismissed the woman as mad, while members of the community sheltered Veyra and helped her reach the underground railway. Tomenos was waiting there and carried her through the tunnels towards her home district.

There she encountered Ash. The meeting gradually restored the memories the Curse had taken from her, including his face, voice and the life they had shared. Veyra resolved to complete her father's work and expose Zephyr`,
    related: ["veyra-descent", "elysium-atrocities", "first-spell", "soul-first-cry", "zephyr-ascension", "tomenos"]
  },
  {
    id: "zephyr-ascension",
    name: "Zephyr's Ascension",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "After Veyra exposed his laboratories, Zephyr rebuilt his research network through scientists, politicians and corporations. His followers weaponised Synthetic White Blood, pursued Black and White Blood applications, and combined Curse research with economic and strategic power, allowing Zephyr to re-establish his influence over Elysium within a decade.",
    full: `While Veyra's writings spread through Elysium, testimonies and evidence exposed Zephyr's laboratories. He fled the city and rebuilt his research through collaborators among scientists, politicians and corporations, codifying his findings into grimoires and distributing them through a network that could function without him.

His followers developed Synthetic White Blood into weapons, pursued Black Blood bioweapons and White Blood applications, and combined Curse research with economic and strategic power. The organisations that emerged from this network became some of the earliest Mages and Sorcerers.

Within a decade, Zephyr had returned to Elysium through infrastructure, policy and research, making his influence part of the city's foundations. His experiments on children continued, establishing a long struggle between the knowledge Veyra had brought into the world and the system of control Zephyr built around it.`,
    related: ["veyra-descent", "elysium-atrocities", "blood-types"]
  },
  {
    id: "hell-of-elysium",
    name: "Hell of Elysium",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "The failure of Zephyr's Synthetic White Blood reactor devastated Elysium, releasing stored bioweapons, experimental Cursed, concentrated Vanta and multiple forms of Blood contamination. As the city collapsed, Zephyr began adapting his plans to the disaster.",
    full: `Elysium descended into catastrophe when an experiment intended to stabilise Synthetic White Blood for mass production failed. Zephyr's collaborators had constructed a massive alchemical reactor beneath the city's core, combining Autarch technology with arcane circuitry to synthesise the substance on an industrial scale. Its failure tore through Elysium's foundations, rupturing containment chambers that held decades of stored bioweapons, experimental Cursed and concentrated Vanta.

Black Blood flooded the streets. White Blood clung to buildings, puffing and expanding until structures buckled beneath its weight, while Synthetic White Blood entered the water system and transformed thousands into hollow, obedient shells. Creatures born from failed experiments emerged from the depths, including amalgamations of flesh and crystal, beings whose bodies wept acidic tears, and things that screamed with voices stolen from the dead. Vanta spread through the city as a creeping fog, distorting perception and memory.

Citizens fled while soldiers fired into the chaos. The Council issued evacuation orders, rescinded them, then issued them again. Elysium, the jewel of Ylvara, was dying.

Zephyr stood at the centre of the disaster. He had not intended the explosion, and the failure represented a loss of control over a system he had spent decades building. He was already calculating how to adapt to it.`,
    related: ["zephyr-ascension", "blood-types"]
  },
  {
    id: "fight-for-hell",
    name: "Fight for Hell",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "During Elysium's destruction, Veyra was captured while Ash fought through Zephyr's forces with the aid of a disillusioned Solmaran mech pilot. Sophie secretly helped them inside Zephyr's tower while continuing to rescue people across the city, ultimately dying there alone.",
    full: `As Elysium collapsed into the catastrophe caused by Zephyr's failed reactor, Veyra was captured amid the chaos. Her capture came through circumstance rather than heroism or grand defiance. By this point, she had cast a single spell and possessed little magical mastery. What followed was survival and fury, rather than the mastery later attributed to her.

Zephyr's compatriots had turned the ruined city into a testing ground, with each district warped by different experiments and applications of the Curse. The streets twisted, the air became corrupted and reality bent in places where it should not have. Ash came for Veyra, fighting through Zephyr's forces, collaborators and their defences with the aid of a mech pilot who had lost her patriotism towards Solmara after witnessing what the state had become.

Sophie was also still alive within the ruined city. The maid who had saved Veyra years earlier continued rescuing people while Elysium collapsed around her. She eventually reached Zephyr's tower, where she secretly helped Ash and Veyra make progress, opening doors that should have been inaccessible and disabling systems no one knew she could reach.

No one knew what Sophie was doing. Few even knew she existed. She died alone in the tower, forgotten.

At least, until I remembered her.`,
    related: ["hell-of-elysium", "zephyr-ascension", "the-crystallization"]
  },

  {
    id: "final-broadcast",
    name: "The Final Broadcast",
    aliases: [],
    category: "events",
    age: "age-of-men",
    short: "After reaching the epicentre of Zephyr's tower with Ash and Sophie's secret assistance, Veyra broadcast a final condemnation of the systems built around the Curse. She gave those who could hear her one last chance to flee before detonating herself.",
    full: `The struggle through Zephyr's tower eventually brought Veyra to its epicentre, where she arrived with the secret assistance of Ash and Sophie. By this point, she understood what she needed to do and what she was capable of doing, even if she did not fully understand the nature of that ability.

Veyra used the network Zephyr had built to broadcast her message across every channel, speaker and screen still connected to it. Her voice reached homes, bunkers and sealed districts where people continued to believe themselves safe. She told them they had all sinned, that the corruption had spread too far, and that the systems built to contain the Curse had become the Curse itself. She condemned the categorisation, medicalisation and gamification of suffering, along with the bureaucracy that had reduced souls to inventory.

“To hell with control,” she said. “To hell with order. To hell with your systems and your certainty. To hell with all of it.”

The broadcast was a warning and a final chance to flee. Veyra detonated herself at the tower's epicentre, leading to The Crystallization of Elysium.`,
    related: ["fight-for-hell", "veyra-descent", "zephyr"]
  },

  {
    id: "the-crystallization",
    name: "The Crystallization",
    aliases: ["The Crystallization of Elysium", "Vanta Explosion"],
    category: "events",
    age: "age-of-men",
    short: "Veyra's detonation at Zephyr's tower crystallised Elysium and spread across large areas of Ylvara, transforming everything in its path into purple-black mineral known as VantaBlack. At the epicentre, the crystal preserved Veyra protecting her unborn child, who was still alive within her womb.",
    full: `Veyra's detonation at the centre of Zephyr's tower triggered a transformation that instantly crystallised everything within Elysium's borders. Stone, steel, flesh and air were locked into a lattice of purple-black mineral known as VantaBlack. The wave spread outward from the city, consuming districts, provinces and entire swathes of Ylvara, turning the landscape into a frozen tableau of anguish and beauty.

Veyra herself stood at the epicentre. The crystal preserved her with her hands cradled against her womb and her head bowed, her body curved around the life within her in the instinctive posture of a mother protecting her child. She was preserved exactly as she had been in that moment, protecting what remained within her.

And within her womb, impossibly, her child still lived.`,
    related: ["final-broadcast", "fight-for-hell", "veyra-descent", "voluntas"]
  },
);
