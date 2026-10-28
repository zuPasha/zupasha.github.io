window.LORE_ENTRIES = window.LORE_ENTRIES || [];

// === BESTIARY: CREATURES ===
// Entries drawn from the prologue enemy roster, one per species rather
// than per encounter - duo/trio/queen groupings are a battle mechanic,
// not a distinct creature, so their material has been folded into the
// base entry instead of written up separately. Each sets entry.type to
// the id of its classification entry and, where relevant,
// entry.conditions. Order here doesn't matter; the bestiary is always
// sorted alphabetically by the renderer, classifications first.

window.LORE_ENTRIES.push(

  // Wolf — Beast
  {
    id: "wolf",
    name: "Wolf",
    aliases: ["Wolves"],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: [],
    short: "A cautious pack predator of Aerisu's colder forests, among the simplest beasts shaped by raw desire and recognisable by its black fur and horrible protrusions.",
    full: `Testing before Commitment
A wolf watches before it lunges, and even then commits in short bursts rather than a single decisive strike, retreating the moment resistance stiffens against it. Strength held in reserve rather than spent is the whole of its strategy. In packs the same caution becomes rehearsed coordination: wolves circle with shared awareness, drifting apart and closing again, wearing down attention rather than armour, fangs and claws finding purchase through persistence rather than power. There is something almost ceremonial in a full pack working together, a pattern that has long outlived whatever originally made it necessary.

Wolves are among the simplest expressions of a beast's desire, their wants reduced to the immediate things that keep them moving: hunger, territory, safety, reproduction and the restless urge to pursue. There are many species across Aerisu, though the most recognisable are the black-furred varieties with horrible protrusions growing from their cheeks. The protrusions are purple fungal matter that stores Vanta within their bodies. Wolves do not require this Vanta to survive, but as it accumulates they become increasingly irritated and reckless, driven to feed until the excess is spent. They usually satisfy this urge by consuming Vanta Points directly, particularly those produced by Soulless, whose Souls generate VP more readily. Pixpsy are an unfortunate curiosity in this regard: their glowing dust contains raw VP, making them tempting prey to wolves even when it does little to satisfy their ordinary hunger.

A den under threat changes the calculation entirely. A mother defending pups fights with none of the ordinary restraint, pushing every strike harder and pulling nearby wolves into the same urgency, and the smoke and flame that any predator learns to fear near a den setting is often enough to break that focus when nothing else will.

Their fangs, ivory white and harder than bone, are treasured enough that removing one from a living wolf counts as besting an apex predator in its own right, and weaponsmiths finish blade edges with them. Hide cured from a wolf keeps its warmth and a faint scent of wild pine, prized for leather armour equally for comfort as for looks.`,
    related: ["bestiary-beast"]
  },

  // Armadillo — Beast
  {
    id: "armadillo",
    name: "Armadillo",
    aliases: ["Armadillos"],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: [],
    short: "A lumbering, heavily armoured beast whose natural plating turns aside almost anything short of a charge met at exactly the wrong moment.",
    full: `Pride and Plate
An Armadillo's defence is also its temperament: plated in natural armour dense enough to shrug off conventional strikes, it leans on that shell rather than speed or cunning, absorbing what it cannot avoid until a charge closes the distance entirely. That same reliance is its weakness. A charge braced for and returned staggers it badly enough to break through what the plating alone could never concede, an opening blunt, unbraced force never manages to force open. Electric current unsettles it more than it ever actually harms it, the crackle enough to startle it out of its usual composure even though the shell underneath takes barely any real damage from it.

Its shed plates, osteoderm, are nearly unbreakable and correspondingly punishing to wear, armour that never fails but never stops weighing on the one wearing it. The claws, curved and serrated for digging and climbing, stay warm to the touch even freshly harvested, and see steady use as climbing tools and reinforcement for unarmed fighters.`,
    related: ["bestiary-beast"]
  },

  // Flyra — Beast
  {
    id: "flyra",
    name: "Flyra",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: [],
    short: "A swarming insect pest that feeds specifically on stray Fire magic, thriving wherever ambient fire residue has been left to linger.",
    full: `A Diet of Leftover Heat
Flyra colonies cluster wherever Fire-aspected magic lingers loose in the air, typically the scar left by something heavier crashing down and burning long after impact. They drain Fire from nearby casters on contact and largely ignore everything else, even tolerating Ice without complaint, while Electric current does what nothing else manages, short-circuiting their wings mid-flight and dropping them before a swarm has the chance to form. Left to gather in numbers, they grow bold enough to channel the fire they have siphoned into genuine offensive spells rather than simply draining it, turning a nuisance into something that stings considerably more than its size suggests.

At the centre of a large enough nest sits a queen, swollen and stationary, feeding endlessly from whatever crash or ember first drew the colony there. Her brood emerges continuously around her, individually fragile but effectively bottomless, and she wraps herself in barriers that absorb spells directed at her rather than simply blocking them. Fire behaves strangely close to her: her brood thrives on it, while she herself burns in it, and Electric current sharpens her further even as a creeping lethargy spreads from her touch, drawing down the reserves of anyone lingering too long nearby.

Their waterproof storage sacks, used to hold whatever residue the colony hasn't yet spent, smell faintly of charcoal and see use among alchemists for similar storage purposes. The paper-thin wings, fragile alone, hold enough latent charge in bulk to be worth harvesting for enchantment work.`,
    related: ["bestiary-beast"]
  },

  // Condu — Beast
  {
    id: "condu",
    name: "Condu",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: [],
    short: "A fledgling storm bird that draws in Electric charge faster than it can comfortably hold, discharging it in short, involuntary bursts.",
    full: `A Bird That Can't Help Gathering Charge
A Condu pulls Electric energy toward itself with barely any effort of its own, the charge building under its wings until sparks skip visibly along its feathers and its movements turn jittery with the strain of holding it. When the buildup peaks, it releases everything it has gathered at once, a compact, startling discharge rather than a devastating one, but enough to catch anyone unprepared off guard. In pairs, the birds learn to share the load, one drawing in charge while the other keeps attention elsewhere, and the resulting joint discharge hits noticeably harder than either bird managing alone. In larger numbers, each bird charges independently until the surrounding air turns genuinely unstable, feints and dives overlapping until the whole flock discharges close together.

The nerve node harvested from a Condu, commonly mistaken for an antenna, is in practice a specialised organ for regulating ambient energy, and channels magical current efficiently once removed and preserved. Feathers shed during flight carry the same conductive trait, unnaturally light and shear-resistant, favoured by artisans working boots, cloaks and gliders for those who need steady control over their own energy flow.`,
    related: ["bestiary-beast", "bestiary-yokai"]
  },

  // Zu — Yokai
  {
    id: "zu",
    name: "Zu",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-yokai",
    conditions: [],
    short: "An apex storm bird drawn to the residue of a fallen Bahamut fragment, its presence alone enough to destabilise the weather for the surrounding region.",
    full: `A Storm That Learned to Fly
Where a Condu is simply born and breeds true, a Zu is called into being by residue, drawn to wherever a Bahamut fragment struck the ground hard enough to leave its magic soaked into the stone. Every beat of its wings drags pressure through the air; storms gather without invitation, clouds stall where they would otherwise pass, and lightning finds the ground more often and more violently than the mountain can recover from between strikes. The disturbance spreads outward from wherever it roosts: Snyrms abandon water gone hostile with current, Deadwood rise where rot and stray energy overlap, and Golems shift and crack under the accumulated stress of storms that refuse to end. None of it forms a clean chain of cause and effect. It is simply a very large presence spilling into a space too small to absorb it quietly.

It feeds on Electric energy as freely as it sheds it, charge arcing constantly through its feathers and discharging in bursts violent enough to remind anything nearby exactly what fed the storm in the first place. Bringing one down does not undo what it has already done to the weather. Storms remember longer than mountains recover, but travel through the region does grow survivable once the wings stop beating.`,
    related: ["bestiary-yokai", "condu"]
  },

  // Bats — Beast
  {
    id: "bats",
    name: "Bats",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: [],
    short: "Cave-dwelling bats whose quick, shallow bites leave wounds that keep bleeding long after the bite itself has been forgotten.",
    full: `A Nuisance That Compounds
Bats favour dark, overlooked corners of the world and strike in quick, nervous passes rather than sustained assault, leaving thin cuts that refuse to close cleanly on their own. Individually the wounds barely register. Left unattended across several passes, the accumulated blood loss becomes the actual threat, worse the longer it goes untreated and only reliably stopped through direct care rather than simply waiting it out. They read less as predators in their own right than as a symptom of a place gone unwatched for too long, easy to dismiss and correspondingly easy to underestimate.

Their fangs, small but precisely sharp, grind well for alchemical work, particularly anything requiring poison. The wing membrane, naturally silent in flight, sees steady use among thieves and assassins who need equipment that makes no sound.`,
    related: ["bestiary-beast"]
  },

  // VantaBats — Vaentyma
  {
    id: "vantabats",
    name: "VantaBats",
    aliases: ["Vanta Bats"],
    category: "bestiary",
    age: null,
    type: "bestiary-vaentyma",
    conditions: [],
    short: "The same lineage as ordinary cave bats, but carrying genuine Vanta rather than simple darkness, drawn to deposits and hoarding shards for no purpose beyond the hoarding.",
    full: `An Echo That Learned to Feed
VantaBats carry the same shallow, persistent bite as their smaller cousins, but everything about them runs heavier. Their wings trail deeper shadow than flight alone explains, and they cast Vanta freely enough to thread real void pressure into whatever tunnel they've claimed. They gather around Vanta deposits and hoard shards without any evident use for them, drawn to accumulation for its own sake the way a Vaentyma's leftover desire fixates on whatever it happened to want last. The energy clings to them unstably, and an encounter left unattended escalates quickly, the same restless hunger simply given more to work with than a plain bat ever carries.`,
    related: ["bestiary-vaentyma", "bats"]
  },

  // Snyrm — Vaentyma
  {
    id: "snyrm",
    name: "Snyrm",
    aliases: ["Snyrms"],
    category: "bestiary",
    age: null,
    type: "bestiary-vaentyma",
    conditions: [],
    short: "A mindless coastal Vaentyma, formed when the memory behind a desire is lost and the remaining want is left to twist without identity or direction.",
    full: `Want, Without a Name Attached
A Snyrm is desire with nothing left holding it together: a soul that failed the Toll, lost its memory rather than keeping it, and melded into something driven purely by whatever it once wanted. What remains twists and drifts along the coast with no identity behind it and no reasoning to appeal to. The want is the whole of what remains.

That restlessness shows in how it hunts. Snyrms cluster near beaches and coastal caves and are technically aquatic by nature, yet curiously stay clear of open water, burrowing beneath sand instead and striking upward before shifting position again, never settling anywhere long enough to be predicted. The wing membrane taken from one, translucent and stretched across chitin struts, catches and holds light on its own, and a Snyrm is oddly reluctant to part with it even though it serves no purpose it still needs. The scales, iridescent and shed naturally during seasonal moults, are light and flexible enough to favour armour built for movement.`,
    related: ["bestiary-vaentyma"]
  },

  // Deadwood — Undead
  {
    id: "deadwood",
    name: "Deadwood",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-undead",
    conditions: [],
    short: "The simplest form produced through Death Gardening, a corpse whose Resonance has been entangled with root, foliage and other living growth until body and tree stop being separate things.",
    full: `Where the Corpse Ends and the Tree Begins
In a Deadwood, muscle binds directly to root, bone is hollowed to make room for growth, and nerves thread through living wood until the distinction between corpse and tree stops mattering functionally. The tree moves because the corpse is compelled to; the corpse persists because the tree gives it something left to stand in. Necromancy remains the accepted explanation mostly for lack of a better one. Whatever force actually animates a Deadwood shows no interest in comfort, preservation or anything resembling resurrection. It solves a specific problem: a body too broken to stand on its own is simply given something else to stand in.

Blades do little against one. Bark absorbs the force before it reaches anything, and the corpse beneath no longer registers pain in any way that matters. Fire works because it removes the compromise entirely, tree and body burning together until whatever was holding them in alignment cannot survive the collapse. In pairs and small groups, Deadwood stop behaving like obstacles and start behaving like intent, closing exits and forcing reactions with a coordination that unsettles more than their individual strength does, some even drawing in cold to shape rudimentary ice where none should exist. Larger groups calibrate further still, exploiting hesitation and panic rather than raw force, working not only against how a body fails but against how a person does.

The flesh still rotting within one sees use among the Vantari for fuelling mechanisms, and alchemists prize it, ethical questions aside, for potions restoring life and vigour. The branch wood itself carries the residue of the corpse's soul in its grain, resistant to being carved into anything but the shape it already seems to want.`,
    related: ["bestiary-undead"]
  },

  // Monkey — Folk
  {
    id: "monkey",
    name: "Monkey",
    aliases: ["Monkeys"],
    category: "bestiary",
    age: null,
    type: "bestiary-folk",
    conditions: [],
    short: "A sapient, cultured people of the Fenguan eastern peaks, organised under Ragmu's rule with the hierarchy, traditions and social structures of a Folk society.",
    full: `Ragmu's Kingdom
The Monkeys of the Fenguan eastern peaks maintain an actual kingdom under Ragmu, with the rule, hierarchy and tradition that distinguish Folk from Tribal peoples. Whatever instinct carried their ancestors remains beneath a society built through laws, succession and established customs, giving them a recognised place in the wider politics of the region.

That same instinct surfaces readily in conflict. Monkeys favour whatever happens to be within reach over any settled discipline, leaping in sharp, restless arcs and flinging clumps of filth that cling, burn and poison on contact, darting in for a quick strike before bouncing clear again rather than committing to sustained engagement. Momentum matters more to them than force, each hit small, each distraction bought cheaply, and left uninterrupted they turn a fight into something deliberately messy, letting irritation and poison do the work that direct confrontation would otherwise demand. It is difficult to watch one and conclude they mind losing more than they'd mind fighting cleanly.`,
    related: ["bestiary-folk"]
  },

  // Viltregeist — Echoling
  {
    id: "viltregeist",
    name: "Viltregeist",
    aliases: ["Viltregeists"],
    category: "bestiary",
    age: null,
    type: "bestiary-echoling",
    conditions: [],
    short: "A restless Echoling that anchors itself to a single object, commonly cold iron, unable to fully release the weight it has chosen to carry.",
    full: `A Weight It Won't Set Down
A Viltregeist wraps itself around cold iron, typically a battered anvil, hauling and hurling the weight with a jittery, uneven force. The iron shudders mid-motion, correcting itself as though arguing with its own decision. Pushed hard enough, its grip flickers, caught visibly between holding on and letting go, and that hesitation is the only real opening it offers.

It reads less as hostile than fixated: once it has chosen a weight, it clings to it with an intensity well past anything the object still warrants, refusing what would otherwise be the easier and more dangerous path available to it. There is something uncomfortably familiar in that refusal, a persistence that looks less like malice than an inability to accept that what it's holding might no longer need to be held.

Repair shards taken from the iron it carries serve blacksmiths as base components for their own work, and the spirit drawn from a Viltregeist, like any ghost or Echoling, glows faintly with inner Lux and sees regular use among enchanters imbuing items with magic of their own.`,
    related: ["bestiary-echoling"]
  },

  // Mimic — Beast, Chimera
  {
    id: "mimic",
    name: "Mimic",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: ["chimera"],
    short: "A malformed creature that returns whatever action is directed at it and treats consumed equipment as something closer to food than plunder.",
    full: `A Question Asked Back
A Mimic watches before it acts, and whatever comes at it comes back in kind: a strike answered with a strike, fire answered with fire, stillness answered with stillness. It reads a fight through repetition rather than instinct, returning each action like a question handed straight back to whoever asked it first. Weapons and armour that come near it disappear into its body, scraped, dented and partially digested rather than simply stolen, though what it takes can often still be recovered if retrieved quickly enough.

There's a quality to the copying that reads closer to sincerity than menace, as though getting the shape of an action exactly right might eventually explain to it what the shape is actually for.`,
    related: ["bestiary-beast"]
  },

  // Veincrept — Beast
  {
    id: "veincrept",
    name: "Veincrept",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: [],
    short: "A cave-dwelling beast carrying crystal formations grown from years of Vanta-saturated groundwater calcifying through its own living tissue.",
    full: `Stillness, Then Everything At Once
A Veincrept holds still against the cave floor for longer than feels natural, its crystal formations vibrating at a frequency the body registers before the ears do, reading whatever approaches through the stone itself. When it moves, the stillness breaks completely, closing distance in fast, low bursts with foreclaws leading and its crystal crown catching what light there is into sharp points ahead of impact.

Veincrept are Vaentyma born in the Veins, their bodies forming around the want left behind by a lost memory as it takes root in the stone. They condense in clusters along cave walls, their developing bodies embedded among the mineral deposits until they crack open. Beyond a handful sharing one passage, their crystal formations begin interfering with one another's vibration reading, causing the group to fracture. Years of miners comparing notes have also established a consistent pattern in their movement: Veincrept steadily drift towards Elysium, following the pull of the Orb of Souls at its centre, drawn towards whatever destination that buried want was always seeking.

The crystal harvested from a Veincrept's dorsal plates, violet black at the base and translucent purple towards the tips, conducts Lux and Vanta with unusual stability and holds enchantments longer than most material, remaining partway through its own formation. The foreclaws, hooked and multi-pointed for gripping stone, transfer force efficiently on impact and are prized by weaponsmiths for their geometry alone.`,
    related: ["bestiary-beast"]
  },

  // Troll — Human, Cursed
  {
    id: "troll",
    name: "Troll",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-human",
    conditions: ["cursed"],
    short: "What remains of a person after prolonged isolation near heavy residual Vanta wears down their soul's integration until hunger stops being a response and becomes the body's whole structure.",
    full: `When Hunger Becomes a Structure
A Troll begins as an ordinary person, cut off from everyone else for long enough, and usually somewhere already carrying heavy residual Vanta, commonly a site marked by a fallen Bahamut fragment or similar catastrophe. Cut off from any reliable means of surviving normally, they turn to hiding and scavenging: scraps, animals, anything that wanders close enough. Given enough time in isolation, that scavenging stops being a response to circumstance and calcifies into the only structure the body still organises itself around.

The transformation shows plainly in what's left. Mass layers onto mass. Strikes land heavy and decisive, driven by need rather than any retained skill, and wounds close quickly, flesh pulling itself back together as if unwilling to relinquish anything it has already claimed. Thunder unsettles them more than most things reach, cracking through whatever focus remains long enough to matter, and precise, piercing strikes slip past the accumulated bulk to find what still remembers pain underneath it.

Something of the original person persists throughout, buried deep enough that it rarely surfaces, watching rather than entirely gone.`,
    related: ["bestiary-human", "bestiary-vaentyma"]
  },

  // Lindorm — Draken
  {
    id: "lindorm",
    name: "Lindorm",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-draken",
    conditions: [],
    short: "Wingless, ground-bound drakes that gather Vanta around themselves with unusual ease, carrying a duller, more stubborn endurance than the mythic weight true Drakes once held.",
    full: `Endurance Without the Omen
Lindorms coil close to the ground, heavy-bodied and constantly alert, and Vanta gathers around them with almost no effort on their part, spilling out in crude casts that warp space and intention alike, digging into their own scales as readily as it answers their will. They linger near Vanta deposits with something close to devotion, circling with patience rather than urgency, and retaliate instinctively and immediately if struck at the wrong moment.

Where Drakes once carried grief and omen in their movement, part of a lineage remembered rather than simply encountered, Lindorms carry something considerably less storied: stubborn endurance, staying where they shouldn't, absorbing what should hurt them, and answering pressure with pressure rather than meaning.`,
    related: ["bestiary-draken"]
  },

  // Sariel — Beast, Chimera
  {
    id: "sariel",
    name: "Sariel",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: ["chimera"],
    short: "A chimera of scavenged shapes moving through Floreat's underbelly, ratlike in posture and unsettlingly near-human through the hands, driven by a hollowness that pulls it toward anything dense with soul-energy.",
    full: `A Hollow With a Very Specific Hunger
Sariel moves like a thought that refuses to settle, a body built from scavenged and mismatched shapes rather than one coherent form, ratlike through most of its posture but disconcertingly close to human through the hands. What drives it is absence rather than appetite in the ordinary sense, a hollow sharp enough to pull it toward anything carrying real weight of soul-energy. It notices value immediately and lunges for it with clear intent, tearing away whatever it can carry rather than lingering to fight for it.

Its intelligence shows less in confrontation than in retreat: the corners it chooses, the spaces it vanishes into that seem too small to reasonably accept a body at all. It fights, when it must, with the urgency of something that already expects to lose the exchange, and favours escaping with what it's taken over holding ground it was never trying to hold in the first place. There's a sense, watching it work, that it knows precisely what it's looking for, and that the knowing costs it something.`,
    related: ["bestiary-beast"]
  },

  // Soulless — Human, Cursed
  {
    id: "soulless-bestiary",
    name: "Soulless",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-human",
    conditions: ["cursed"],
    short: "People mid-Frallation, their bodies and behaviour unravelling gradually while awareness persists throughout, watched and tolerated by everyone around them rather than engaged with.",
    full: `Watching Yourself Narrow
The Soulless remain people in every legal and social sense, recorded, acknowledged, still counted among the living, even as Frallation reshapes what's left of them from the inside. Movement slows. Responses dull. The weight of something failing settles into the body long before it fully claims them, and consciousness stays present for the whole of it, observing the decay rather than being spared from watching it happen. Society tends to tolerate their presence rather than engage with it, an open-ended waiting that settles as heavily over families and bystanders as it does over the person actually experiencing it.

In numbers, that same awareness can tip toward open agitation rather than resignation, movement carrying frustration instead of purpose, lashing out at whatever crosses their path less from intent than from pressure that has run out of anywhere else to go. What persists most clearly, alone or together, is the awareness itself: they understand exactly what is happening to them, and each moment holds weight precisely because it is thinning.`,
    related: ["bestiary-human"]
  },

  // Firtronach — Yokai
  {
    id: "firtronach",
    name: "Firtronach",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-yokai",
    conditions: [],
    short: "Fire given loosely humanoid shape, capable of raising walls of flame that hold until enough cold is pressed directly against them.",
    full: `Fire, Given a Shape to Stand In
A Firtronach carries little resilience of its own, a Yokai closer to fire briefly wearing a body than a creature that happens to wield flame. What danger it offers comes entirely from the fire itself, wielded freely and confidently enough to raise walls of it that hold firm against most approaches, walls that flicker and collapse only once enough cold has been pressed directly against them rather than simply nearby. For anything further along the path of fire-aligned danger, a Firtronach amounts to an early, almost gentle introduction to what the element is capable of once it stops asking permission.`,
    related: ["bestiary-yokai"]
  },

  // Firtrigger — Yokai
  {
    id: "firtrigger",
    name: "Firtrigger",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-yokai",
    conditions: [],
    short: "A small, volatile knot of fire with one apparent purpose: detonating as violently as possible, ideally with company.",
    full: `A Countdown With a Body
A Firtrigger takes physical punishment poorly in the most literal sense: struck directly, it only swells further and edges closer to whatever threshold sets it off. Left standing for any length of time narrows the options considerably, the fire building toward release regardless of what provokes it, until the difference between acting quickly and hesitating becomes the difference between walking away and being caught in the blast.`,
    related: ["bestiary-yokai"]
  },

  // Firmon — Demon
  {
    id: "firmon",
    name: "Firmon",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-demon",
    conditions: [],
    short: "A fiery demon of Zorya Chernaya's lineage, wrapped permanently in flame, whose molten claws leave wounds that keep draining long after they land.",
    full: `Flame That Doesn't Go Out
A Firmon carries the weight and directness expected of Zorya's lineage rather than any real subtlety, a body engulfed in fire that never settles and claws that tear as much as they burn, leaving wounds that continue draining strength well after the strike itself has landed. It hits hard, hits often, and offers little reason to look for a cleverer approach than simply surviving the exchange.`,
    related: ["bestiary-demon"]
  },

  // Firgolem — Construct
  {
    id: "firgolem",
    name: "Firgolem",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-construct",
    conditions: [],
    short: "The fire-aligned variant of an ordinary Golem, a hulking, scorched-stone frame built around a molten core, slower and heavier than its plain-stone counterpart.",
    full: `Scorched Stone Over a Molten Core
A Firgolem carries the same layered, deliberately-built body as any other Golem, but reworked around heat rather than simple mass: scorched stone plating wrapped around a core that runs molten rather than merely warm. What speed a standard Golem manages, a Firgolem trades further still for raw resilience, leaning almost entirely on heavy blows and a defensive stance that has to be broken through rather than worn down gradually.`,
    related: ["bestiary-construct", "golem"]
  },

  // Firym — Yokai
  {
    id: "firym",
    name: "Firym",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-yokai",
    conditions: [],
    short: "An old, serpentine fire spirit once honoured as a divine messenger, its coils said to have once held volcanoes shut before that reverence gave way to exploitation.",
    full: `A Messenger Nobody Reveres Anymore
A Firym is serpentine enough in shape to invite comparison to draconic bloodlines, but it carries none of that lineage. It is a fire spirit in the same sense a Firtronach is, entangled with flame rather than descended from anything, and considerably older for it: once revered as a divine messenger, its coils said to wrap around volcanoes and keep them from erupting. That reverence didn't survive contact with people willing to exploit it, and a Firym now answers any challenge with open hostility, keeping a wall of flame permanently raised rather than the flickering, doused-and-rebuilt kind a Firtronach manages, and lashing out hardest at whatever reminds it that it can still be hurt at all.`,
    related: ["bestiary-yokai"]
  },

  // Golem — Construct
  {
    id: "golem",
    name: "Golem",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-construct",
    conditions: [],
    short: "Clay, stone or metal deliberately animated through magic, advancing behind layered plating built specifically to absorb and dull whatever strikes it.",
    full: `Built to Hold, and to Wait
A Golem advances behind a body of layered rock, each plate fitted to absorb impact and dull intent, blows landing and sliding away as the stone settles back into place. It favours patience over speed, bracing and restoring itself between strikes, and answers only once resistance has hardened into something worth answering: heavy blows that land like decisions already made, slow to start and difficult to stop once committed. The plating resists slashing, while focused, well-timed force can crack the alignment between plates, driving pressure through the stone. Cold works into those same seams readily, slowing the internal settling that lets a Golem recover between hits. In numbers, a group holds formation with a discipline unsettling for something built rather than born, one anchoring while another advances, trading space with a steadiness that makes impatience the real liability. Some accounts trace certain formations back to old rulers who shaped stone into guardians meant to hold a place indefinitely. Whatever the truth of it, the relentlessness has long outlived whatever purpose first gave rise to it.

The living stone core taken from a Golem holds faint warmth and a weak pulse even when removed, and sees use, ethics aside, in crafting new Golems of one's own. The stone plating itself never degrades once harvested, though armour built from it only grows heavier with wear, a cost that never quite stops accruing.`,
    related: ["bestiary-construct"]
  },

  // Neurochimera — Beast, Chimera
  {
    id: "neurochimera",
    name: "Neurochimera",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-beast",
    conditions: ["chimera"],
    short: "A Beast whose Resonance was forced to entangle across several fused creatures without proper integration, its two halves visibly disagreeing with each other in every motion.",
    full: `A Disagreement Made Flesh
A Neurochimera moves like an argument that never resolved: one half of its body driving forward while the other resists, momentum constantly interrupted by whatever's fighting underneath the surface. Nothing about its behaviour reads as a single coherent intention. Despite that, it hits hard and holds together longer than something visibly this unstable has any right to, because whatever souls were pressed into it have apparently been fighting each other for long enough now that the fighting itself is the only thing still keeping the body functional. Disrupt that internal rhythm and the whole structure opens up.

Someone built this deliberately and left it here, for reasons nobody involved has ever been willing to explain.`,
    related: ["bestiary-beast"]
  },

  // --- Entries carried over unchanged from the previous file: not in
  // the prologue enemy log, so nothing new to weave in. ---

  // Kodama — Yokai
  {
    id: "kodama",
    name: "Kodama",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-yokai",
    conditions: [],
    short: "Small, tree-bound Yokai found throughout Aokusa's old-growth forests, formed when an Echoling entangles with the plant life it inhabits rather than a single body.",
    full: `The Forest's Own Attention
Kodama are among the oldest magical creatures on record, appearing in surviving accounts and tradition from long before the Shattering. Bound to Aokusa's forests, each Kodama is an Echoling entangled with the tree or grove it inhabits rather than a body of its own, closer to the wood's own attention given shape than an animal living within it.

Aokusa has long treated its wilderness, Kodama included, as something owed a kind of care rather than simply territory to be used.`,
    related: ["bestiary-yokai"]
  },

  // Toad — Tribal
  {
    id: "toad",
    name: "Toad",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-tribal",
    conditions: [],
    short: "Marsh-dwelling creatures capable of speech and loose group behaviour, with little beyond instinct developing into anything resembling true culture.",
    full: `Talking, Not Building
Toads can speak and often do, gathering in loose groups through marsh and swampland rather than living entirely solitary. Their groups have no substantial hierarchy, no deliberately maintained tradition passed between generations, and nothing an outsider would recognise as a society. Instinct remains visibly present in the way they behave and make decisions.`,
    related: ["bestiary-tribal"]
  },

  // Ghost — Echoling
  {
    id: "ghost",
    name: "Ghost",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-echoling",
    conditions: [],
    short: "A persistent psychic imprint left by a soul severed through violence, the Curse or the Shattering, remaining as an unentangled Echoling without a body or elemental anchor.",
    full: `What's Left, Unclaimed
A Ghost is an Echoling in its plainest form: recognisable and capable of affecting its surroundings in small ways, yet never entangled with an element or body as a Yokai or Beast would be. Most form where a soul was severed suddenly rather than released properly, through violence, the Curse or the Shattering itself, rather than through a natural death that completed its ordinary journey through the Veins.`,
    related: ["bestiary-echoling"]
  },

  // Pixpsy — Fae
  {
    id: "pixpsy",
    name: "Pixpsy",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-fae",
    conditions: [],
    short: "Luminous, memory-bound Fae whose consciousness remains stretched across recurring moments after refusing to relinquish its memory at the Toll.",
    full: `Stretched Thin, Never Quite Arriving
Pixpsy carry their memory as every Fae does, retaining what should have been surrendered and becoming stranger with every moment it remains. What sets a Pixpsy apart is how visibly stretched the effect becomes: consciousness spread across recurring moments, trapped between states rather than settled within one. Some scholars connect the faint radiance they carry to the same phenomenon that makes stars visible at all, though this remains a theory rather than a settled fact.`,
    related: ["bestiary-fae"]
  },

  // Wyvern — Draken
  {
    id: "wyvern",
    name: "Wyvern",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-draken",
    conditions: [],
    short: "A lesser, partial expression of Lady Draka's bloodline, carried through an affected parent rather than inherited from a full transformation directly.",
    full: `A Lesser Echo of the Same Line
Wyverns descend from Draka's corruption as Drakens proper do, but at one remove, carried through a parent who was exposed to the transformation rather than transformed outright. The result remains visibly related to the original lineage while expressing it in a smaller and less complete form.`,
    related: ["bestiary-draken"]
  },

  // Sea Serpent — Lithejorm
  {
    id: "sea-serpent",
    name: "Sea Serpent",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-lithejorm",
    conditions: [],
    short: "A many-headed descendant of Hvitara and Susanoo's bond, roaming the northern oceans as a living expression of the purpose the two fragments found in each other.",
    full: `Born of the Northern Bond
The sea serpents of the northern oceans trace directly back to Hvitara and Susanoo, new heads grown from their bond after Susanoo stopped fighting and chose to hold her instead. The Norrvekt still honour the pair as twin serpents wound around a central pole, a sign of healing rather than the monstrous hunger Hvitara carried before Susanoo found her.`,
    related: ["bestiary-lithejorm"]
  },

  // Hell Hound — Demon
  {
    id: "hell-hound",
    name: "Hell Hound",
    aliases: [],
    category: "bestiary",
    age: null,
    type: "bestiary-demon",
    conditions: [],
    short: "A lesser member of Zorya Chernaya's hellscape lineage, kept in the service of her Daughters throughout Varkane's burning reaches.",
    full: `Kept in Zorya's Reaches
Hell Hounds run through the burning reaches Zorya Chernaya once ruled outright, belonging to the same lineage that produced her Daughters and Cerberus, though as a far lesser expression of it. They are bred rather than born in any individual sense, kept, used and set loose as the hellscape's hunting pack.`,
    related: ["bestiary-demon"]
  }
);