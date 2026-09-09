window.LORE_ENTRIES = window.LORE_ENTRIES || [];
window.LORE_ENTRIES.push(
  // === PLACES ===

  // Crown Nations - Landmass
  {
    id: "crown-nations",
    name: "Crown Nations",
    aliases: [],
    category: "places",
    age: null,
    tier: "continent",
    parent: "verdant",
    short: "A small landmass west of Hoshimira and Yantara, shaped roughly like a crowned figure and home to several nations formed from cultures carried across Aerisu.",
    full: `The Crown Nations are a small landmass west of Hoshimira and Yantara, shaped roughly like a crowned figure. Its nations were formed by peoples who carried traditions from across Aerisu, leaving the landmass with a remarkably dense mixture of cultures.

Hoshimiran heritage shaped Yoshinara and Bayangara, Varkane heritage and Autarch bloodlines became prominent in Justavik, Fenguan traditions took root in Lianzhou, Sahrani heritage persists in Amatsunagi, and Vantari and Psycratan traditions became associated with Necrovia and Veralisse. Each developed differently after settling here, so familiar customs often survive in forms their original cultures would scarcely recognise.

The result is a place where architectural styles, religious practices, languages and social customs frequently carry echoes of distant nations. Modern infrastructure has grown around inherited traditions rather than replacing them, making the Crown Nations a meeting ground for peoples, ideas and competing histories.

~~~Inspiration: North America and the United States as a cultural melting pot. A hodgepodge of diverse peoples and cultures drawn from across Aerisu.~~`,
    related: ["yoshinara", "justavik", "lianzhou", "bayangara", "amatsunagi", "necrovia", "veralisse", "sengetsuki"]
  },

  // Yoshinara - Nation
  {
    id: "yoshinara",
    name: "Yoshinara",
    aliases: [],
    category: "places",
    age: null,
    tier: "nation",
    parent: "crown-nations",
    short: "A Hoshimiran-descended nation whose mountain traditions have adapted to the more open, commercial and modern life of the Crown Nations.",
    full: `Yoshinara occupies the middle belt of the Crown Nations, carrying a strong Hoshimiran heritage shaped by generations of life beyond the mountains. Its people retain traditions of discipline, seasonal observance, shrine worship and respect for nature, while life within the Crown Nations has brought greater cultural and commercial exchange.

The nation divides into three principal regions. Sankoten follows the eastern coast, where Hoshimiran traditions meet the sea. Kusachi occupies the central interior, opening into broad grasslands, rivers and cultivated fields. To the west lies Tetsuishin surrounding Tygeria, where Hoshimiran customs meet the technological and social influence of Silealyros.

Yoshinara has consequently developed its own balance between inherited tradition and modern life. Shrines stand beside contemporary buildings, seasonal festivals continue beneath electric lighting, and older disciplines remain part of a society increasingly shaped by commerce, technology and movement.

~~~Inspiration: Hoshimiran heritage filtered through the Crown Nations. Inspired by Japanese-American communities on the American West Coast.~~`,
    related: ["crown-nations", "sankoten", "kusachi", "tetsuishin", "tygeria", "hoshimira"]
  },

  // Sankoten - Region
  {
    id: "sankoten",
    name: "Sankoten",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "yoshinara",
    short: "The eastern coastal region of Yoshinara, whose principal settlements are associated with the Stars, Moon and Sun.",
    full: `Sankoten occupies the eastern coast of Yoshinara, where the mountains give way to the sea. Its principal settlements developed along the coast, each taking its identity from one of the great lights of the sky.

Mikadoboshi stands on the northern coast, Sengetsuki on the eastern shore, and Hinomitsusei to the south. Their shared maritime position created a network of ports, roads and coastal communities linking the region together.

Further inland, Goyawa marks the transition from Sankoten's coastal settlements to the open country of Kusachi. Its farms, family homesteads and river crossings give it a quieter, more agricultural character than the cities along the coast.

Sankoten retains a strong Hoshimiran spiritual character, though its coastal position has made it more accustomed to outsiders and commerce than the mountain communities from which its traditions descend.

~~~Inspiration: Coastal Hoshimiran culture adapted to the Crown Nations, combining Japanese spiritual traditions with a modern coastal settlement culture.~~`,
    related: ["yoshinara", "mikadoboshi", "sengetsuki", "hinomitsusei", "goyawa"]
  },

  // Mikadoboshi - Settlement
  {
    id: "mikadoboshi",
    name: "Mikadoboshi",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "sankoten",
    short: "A northern coastal city of Sankoten associated with the Stars, known for maritime trade, navigation and observatories.",
    full: `Mikadoboshi lies on the northern coast of Sankoten, where the sea opens towards the wider waters surrounding the Crown Nations. Its position made it an important maritime settlement, connecting inland communities with foreign traders and travellers.

The city is particularly associated with the Stars. Rooftops, shrines and public spaces incorporate celestial imagery, while elevated districts and observatories provide clear views of the night sky. Hoshimiran reverence for the heavens developed here alongside astronomy and navigation, giving the city's star worship a practical maritime purpose.

Modern districts have grown around the older settlement, bringing offices, apartments and commercial streets into the same landscape as shrines and traditional homes. At night, artificial light competes with the stars that remain central to the city's identity.

~~~Inspiration: Coastal Japanese cities with traditions of astronomy, navigation and celestial worship.~~`,
    related: ["sankoten", "yoshinara", "hoshimira"]
  },

  // Sengetsuki - Settlement
  {
    id: "sengetsuki",
    name: "Sengetsuki",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "sankoten",
    short: "A major eastern coastal city trapped in the Folding, where nine years of temporal recursion have left it beneath perpetual night.",
    full: `Sengetsuki rises along the eastern coast of Sankoten, a city of narrow streets, broad boulevards, Hoshimiran temples and modern districts. Traditional buildings stand beside contemporary architecture, while rain, fog and artificial light have become part of ordinary life.

The city has known eternal night for nine years. The Sun appears only briefly on Sundays, a pale glimpse through the Vanta-heavy sky before darkness returns. Gas lamps, crystal lanterns and fixed schedules have replaced daylight as the rhythm of daily life, while children born into the long night have never known an ordinary morning.

Sengetsuki is also caught within the Folding, a temporal recursion that has destabilised its relationship with time. Events and memories can become entangled with other moments, leaving the city's history liable to overlap with itself. That little complication makes an already strange place considerably harder to document.

Its population reflects the wider Crown Nations. Vesperites maintain temples, Luminaries gather in hidden rooms, Autarch traditionalists preserve their beliefs, Vantari cultists move through the city's shadows, and Soulless communities live beneath the Brands and the threat of Frallation.

The Four Diviners govern Sengetsuki through its institutions of magical knowledge and civic order. ~~~Jenova Najma presides from Floreat Academy, Bourne Nirvana serves as her enforcer and assistant, Cosmo Mirosi runs Nightjar Home, and Yengchen Zealous teaches at the Academy. The city also bears the aftermath of the Nightjar expedition, whose destruction brought Voluntas into the material world and left the Nightjar at the site where Nightjar Home was later established.~~

~~~Inspiration: Seattle and the Pacific Northwest combined with a rural coastal town. Fog, rain, coffee and technology.~~`,
    related: ["sankoten", "yoshinara", "the-folding", "diviners", "floreat-academy", "nightjar-home", "nightjar", "soulless"]
  },

  // Nightjar Home
  {
    id: "nightjar-home",
    name: "Nightjar Home",
    aliases: [],
    category: "places",
    age: null,
    tier: "landmark",
    parent: "sengetsuki",
    short: "An orphanage founded by Cosmo Mirosi at the site of the Nightjar crash in Sengetsuki, where he raised children including ~~~Aysha Salinte while keeping the truth of her origins hidden.~~",
    full: `Nightjar Home is an orphanage established by Cosmo Mirosi at the site of the Nightjar crash in Sengetsuki. It became a refuge for children growing up beneath the city's perpetual darkness and the uncertainty of the Folding.

Cosmo raised and protected the children there while ~~~continuing his duties as Third Diviner. Among them was Aysha Salinte, the child brought into the material world during the Nightjar expedition. He kept the truth of her origins hidden while she grew up and pursued her own research into the strange events surrounding Sengetsuki~~.

The home became part of the city's life after the crash, carrying the name of the ship whose destruction gave the site its history.

~~~Inspiration: American orphanages and group homes.~~`,
    related: ["nightjar", "sengetsuki", "cosmo-mirosi", "age-of-knowledge"]
  },
  
  // Floreat Academy
{
  id: "floreat-academy",
  name: "Floreat Academy",
  aliases: [],
  category: "places",
  age: null,
  tier: "landmark",
  parent: "sengetsuki",
  short: "A Psycrata-run academy on an island off Sengetsuki, occupying a former children's hospital whose study of souls, Curse and magic remains entwined with the site's buried history.",
  full: `Let Your Mind Bloom
Floreat Academy stands on a small island off the coast of Sengetsuki, accessible by causeway or ferry and connected to the city's wider transport network through an underwater tunnel and island station. Its grounds overlook the ocean, with gardens, rivers, waterfalls, bridges and statues surrounding the academy before a path descends towards the beach. The island's seclusion gives the Academy practical distance from the city while providing an enclosed environment for the study of magic, souls and Curse.

The Academy is administered by the Psycrata and is currently presided over by Headmaster ~~~Jenova~~ Najma. Its name refers to the concepts of Death Gardening and Recursive Bloom, which hold that what has been cultivated through death and decay may produce new growth and understanding. This philosophy informs an institution concerned with knowledge, interpretation and the controlled study of phenomena that are poorly understood elsewhere.

The Academy occupies a former hospital specialising in children. Its mansion-like structure retains older hospital infrastructure alongside Varkane-influenced architecture, gargoyles, a mezzanine overlooking the central quad and an observatory tower that serves as a laboratory and place of magical study. Beneath the grounds lies an underground parking area and, deeper within the former hospital, a ~~~restricted archive containing patient records, research notes and experimental results from the institution's earlier work~~.

The hospital's history is considerably less comfortable than the Academy's present appearance suggests. It is widely believed that soul pathology experiments were conducted upon child patients, with research into the soul, Curse, consciousness and magical potential pushed beyond acceptable boundaries. The hospital eventually closed, though whether its work was directly connected to the methods of Veyra Megami and Zephyr remains disputed. Some scholars regard the similarities as evidence that their methods produced consequences that resurfaced independently, while others consider the connection apocryphal.

The former hospital is also said to remain haunted by the children who died there. Footsteps and crying have been reported from sealed rooms, along with brief glimpses of figures within the older parts of the building. Whether these are spirits, Resonance echoes or stories attached to the site's history has never been established, and the Academy does not officially acknowledge them. Beneath the island, a cave system contains stranger hazards of its own, including dangerous creatures whose connection to the Academy and its history remains unclear.

Floreat provides conventional education alongside formal magical training. Students follow the standard curriculum through Grades 8 to 12, with a thirteenth year devoted to advanced magical study. Its magic curriculum is based upon Resonance through Understanding, Intent and Connection, organised into the four schools of Matter, Energy, Life and Mind. Students are drawn from Sengetsuki and across the Crown Nations, giving the Academy a mixture of Hoshimiran, Solmaran, Sahrani, Varkanian and other cultural backgrounds. Their black, purple and blue uniforms retain a common identity while allowing varied silhouettes, layering and personal customisation.

For all its gardens and academic formality, Floreat remains a place built around the management of knowledge. Its classrooms teach what can be understood, ~~~its archives preserve what was meant to disappear~~, and its older foundations continue to raise questions that the institution has never entirely answered.

~~~Inspiration: Gothic academies, coastal schools, old hospitals, Japanese school architecture and rural-modern fantasy.~~`,
  related: ["sengetsuki", "psycrata", "death-gardening", "recursive-bloom", "veyra-megami", "shattered-walls", "veyra-descent", "zephyr", "elysium-atrocities"]
},

  // Hinomitsusei - Settlement
  {
    id: "hinomitsusei",
    name: "Hinomitsusei",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "sankoten",
    short: "A southern coastal city of Sankoten associated with the Sun, where maritime life and Hoshimiran solar traditions endure beneath the altered sky.",
    full: `Hinomitsusei lies along the southern coast of Sankoten, facing the waters between Yoshinara and the wider Crown Nations. Its identity is closely associated with the Sun, reflected in its shrines, festivals and older traditions of welcoming daylight.

The city developed around fishing, coastal agriculture and maritime trade. Its older districts retain low buildings, shrine grounds and open communal spaces, while newer neighbourhoods have grown around transport links and commercial development.

The Age of Decay changed the meaning of those traditions. The Scorching Sun and the long darkness transformed celebrations of daylight into acts of remembrance as well as worship. Sun imagery remains common throughout Hinomitsusei as an Echo of the light its people once expected to see.

~~~Inspiration: Japanese coastal communities and traditions surrounding the Sun, seasonal festivals and maritime life.~~`,
    related: ["sankoten", "yoshinara", "sun", "crescent-sun"]
  },

  // Goyawa - Settlement
  {
    id: "goyawa",
    name: "Goyawa",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "sankoten",
    short: "A rural transition town between Sankoten's coast and the open grasslands of Kusachi, surrounded by farms, rivers and family homesteads.",
    full: `Goyawa lies inland from Sankoten's coastal cities, where the settled coast begins giving way to the open country of Kusachi. It grew around farms, family homesteads, river crossings and roads connecting the coast with the interior.

Modern infrastructure has been incorporated into the older agricultural community without displacing it. New homes, utilities and small businesses sit among fields, waterways and established homesteads, leaving Goyawa with a distinctly rural character despite its connections to the wider nation.

For travellers, Goyawa is primarily a stopping point between the coast and Kusachi. For its residents, it is the practical middle ground between Yoshinara's maritime economy and its central grasslands.

~~~Inspiration: Rural Japanese towns and agricultural communities serving as transitions between coastal settlements and inland countryside.~~`,
    related: ["sankoten", "kusachi", "yoshinara"]
  },

  // Kusachi - Region
  {
    id: "kusachi",
    name: "Kusachi",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "yoshinara",
    short: "The central region of Yoshinara, characterised by broad grasslands, open fields, rivers and rural-modern communities.",
    full: `Kusachi occupies the centre of Yoshinara, where the mountains and coastal settlements open into broad grasslands and cultivated fields. Rivers wind through the region, feeding ponds, farmland and lowland settlements before continuing towards the coast.

Kusachi remains predominantly rural without being isolated or technologically stagnant. Modern roads, utilities and buildings have been incorporated into older agricultural communities, leaving contemporary life alongside shrines, farmsteads, irrigation channels and traditional homes.

Gen'ya is the principal settlement. Its streets gather around ponds and waterways, with shrines and old trees woven into the town rather than separated from it. The surrounding fields begin almost immediately beyond the built environment.

Kusachi has a quieter rhythm than Sankoten's coast or the urbanism of Tygeria, preserving the Hoshimiran idea that settlement should remain in conversation with the land.

~~~Inspiration: Japanese grasslands, rural Shinto landscapes and traditional agricultural settlements adapted to a modern rural environment.~~`,
    related: ["yoshinara", "genya", "sankoten", "goyawa"]
  },

  // Gen'ya - Settlement
  {
    id: "genya",
    name: "Gen'ya",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "kusachi",
    short: "The principal settlement of Kusachi, a rural-modern town built around ponds, rivers, shrines and open fields.",
    full: `Gen'ya sits among the open fields of Kusachi, built around ponds and rivers that divide the town into quiet districts. Waterways pass beneath bridges and along roads, while shrines occupy wooded spaces between homes and public buildings.

The town has remained predominantly rural despite its modern infrastructure. Low residential buildings, farms and family businesses make up much of the settlement, while newer offices, shops and public facilities have been built around the older landscape.

Samurai traditions remain part of Gen'ya's cultural memory through local schools, ceremonies and martial institutions. Vesperite practice is similarly woven into ordinary life, with seasonal festivals, shrine visits and community gatherings following the rhythms of the fields and waterways.

Technology is present throughout Gen'ya, but it has never become the defining feature of the town. The landscape remains visible through it.

~~~Inspiration: Rural-modern Japan, Shinto shrine communities, samurai traditions, grasslands, ponds and river towns.~~`,
    related: ["kusachi", "yoshinara", "hoshimira"]
  },

  // Tetsuishin Region - provisional
  {
    id: "tetsuishin",
    name: "Tetsuishin",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "yoshinara",
    short: "The western region of Yoshinara, where Hoshimiran heritage meets the commercial and technological influence of Silealyros.",
    full: `Tetsuishin occupies the nation's boundary with the wider Crown Nations, where Hoshimiran traditions encounter the technological and commercial influence of Silealyros.

Its communities are more urbanised than those of Kusachi and more commercially connected than Sankoten. Modern buildings, transport infrastructure and business districts dominate the larger settlements, while shrines, family traditions and Hoshimiran customs remain embedded within them.

Tygeria is the region's principal city. Its culture developed around the meeting of Hoshimiran discipline and Silealyric autonomy, commerce and technological ambition, producing a distinctly modern Yoshinaran identity.

~~~Inspiration: A mixture of Hoshimiran and Silealyros influences, particularly Japanese urban culture and Silealyric commercial and technological aesthetics.~~`,
    related: ["yoshinara", "tygeria", "silealyros"]
  },

  // Tygeria - Settlement
  {
    id: "tygeria",
    name: "Tygeria",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "tetsuishin",
    short: "A city in Tetsuishin where Hoshimiran discipline meets the commercial, technological and individualistic influence of Silealyros.",
    full: `Tygeria stands at the western edge of Tetsuishin, where its Hoshimiran heritage meets the influence of Silealyros. The city has consequently become one of Yoshinara's most modern settlements.

Its streets combine traditional forms with dense contemporary development. Shrines and older neighbourhoods survive between commercial towers, transport networks and modern residential districts, while businesses draw heavily on trade and technology moving across the western border.

Hoshimiran ideas of discipline, responsibility and restraint remain influential, while Silealyric ideas of autonomy, commerce and technological self-determination have become increasingly visible. Tygeria's identity has formed through their coexistence rather than the disappearance of either.

~~~Inspiration: Hoshimiran and Silealyros, combining Japanese urban culture with Silealyric commercial and technological influences.~~`,
    related: ["tetsuishin", "yoshinara", "silealyros"]
  },

  // Justavik - Nation
  {
    id: "justavik",
    name: "Justavik",
    aliases: [],
    category: "places",
    age: null,
    tier: "nation",
    parent: "crown-nations",
    short: "A wealthy Crown Nation shaped by Varkane heritage, Autarch bloodlines and an aristocratic culture carried into modern prosperity.",
    full: `Justavik occupies much of the crowned northern portion of the Crown Nations. Its history carries strong Varkane heritage and bloodlines descended from the Autarchs, leaving aristocratic tradition, inherited power and modern wealth closely intertwined.

The nation divides into the Crown Region in the north and Vorostrum in the interior. The Crown Region contains Crown City, the political and ceremonial centre of Justavik. Vorostrum forms the landlocked heart of the nation and contains Peca, whose metropolitan character represents its modern commercial and scientific power.

Castles, fortified estates and monumental stone buildings preserve the visual language of the older aristocracy, while modern construction has grown around them. Justavik's elite now occupy corporate offices, private clubs, research institutions and high-rise residences, carrying inherited ideas of status into a modern economy.

~~~Inspiration: Varkane heritage and Gothic American culture. Inspired by Eastern European immigrant communities in the United States and the architectural traditions associated with medieval Britain.~~`,
    related: ["crown-nations", "crown-region", "vorostrum", "crown-city", "peca", "varkane"]
  },

  // Crown Region - Region
  {
    id: "crown-region",
    name: "Crown Region",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "justavik",
    short: "The northern region of Justavik, centred on Crown City and defined by aristocratic architecture, political institutions and immense wealth.",
    full: `The Crown Region occupies the northern portion of Justavik and forms the political heart of the nation. Its landscape retains the castles, stone fortifications and estates associated with Justavik's aristocratic traditions, though modern construction has grown directly around them.

Crown City dominates the region. Government buildings, financial institutions, universities and luxury districts extend from the old fortified centre, producing a city where medieval architectural forms and modern towers share the same skyline.

The region's wealth is reflected in its infrastructure and preservation of historic structures, with modern developments built at a scale intended to project permanence and authority.

~~~Inspiration: Medieval England and Gothic European architecture combined with modern wealthy urban development.~~`,
    related: ["justavik", "crown-city", "vorostrum"]
  },

  // Crown City - Settlement
  {
    id: "crown-city",
    name: "Crown City",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "crown-region",
    short: "The opulent capital of Justavik, built around medieval fortifications and expanded into one of Aerisu's wealthiest modern cities.",
    full: `Crown City is the capital of Justavik and the centre of its political and ceremonial life. Its oldest districts grew around castles, fortified walls and monumental stone structures, many of which remain integrated into the modern city.

Modern architecture has grown around these foundations rather than replacing them. Glass towers rise behind medieval walls, elevated roads cross old districts and contemporary civic buildings incorporate stonework and heraldic forms inherited from the city's past.

Crown City is among the most opulent cities in Aerisu. Wealth appears throughout its architecture, public spaces, hotels, galleries, commercial districts and private institutions. Its most powerful residents occupy penthouses and estates overlooking the older city, while corporations and political institutions maintain headquarters designed to project permanence and authority.

The city is rivalled in grandeur only by New Elysium, though the two express their wealth through different histories. New Elysium reflects the crystalline legacy of Ylvara and the Psycrata; Crown City builds its identity around inherited nobility transformed into modern power.

~~~Inspiration: Medieval and Georgian England, modern European capitals and exceptionally wealthy metropolitan districts.~~`,
    related: ["justavik", "crown-region", "new-elysium"]
  },

  // Vorostrum - Region
  {
    id: "vorostrum",
    name: "Vorostrum",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "justavik",
    short: "The landlocked central region of Justavik, dominated by Peca and its commercial, scientific and corporate metropolis.",
    full: `Vorostrum occupies the landlocked centre of Justavik. Its position away from the sea made it an inland centre of commerce, research and transportation.

Peca dominates the region. Businesses, research institutions and wealthy professionals have concentrated around its expanding economy, producing a skyline of skyscrapers, corporate towers and dense residential developments.

Vorostrum's wealth is less aristocratic than that of the Crown Region. Executives, researchers, financiers and other professionals derive their influence through institutions and commercial power, with penthouses, private clubs, laboratories and corporate offices forming the landscape of the region.

Where the Crown Region preserves Justavik's inherited prestige, Vorostrum turns it towards industry, finance and research.

~~~Inspiration: Modern metropolitan business districts, corporate America and European financial centres.~~`,
    related: ["justavik", "peca", "crown-region"]
  },

  // Peca - Settlement
  {
    id: "peca",
    name: "Peca",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "vorostrum",
    short: "A vast inland metropolis of skyscrapers, corporate headquarters, research institutions and affluent professional districts.",
    full: `Peca is the largest city of Vorostrum and one of the principal commercial centres of the Crown Nations. Its skyline rises from the inland plain in dense layers of glass, steel and illuminated towers.

Business dominates the city. Corporate headquarters occupy entire blocks, research institutions operate beside financial firms, and professional districts remain active long after ordinary residential neighbourhoods have quietened. Executives, researchers and financiers live in high-rise penthouses above a city built around work and commerce.

Peca's concentration of research has also made it important to the circulation of knowledge across the Crown Nations. Universities, private laboratories and corporate research groups compete for talent and information, making discovery as valuable here as money.

~~~Inspiration: Modern American and European metropolises, corporate districts, research hubs and high-rise professional culture.~~`,
    related: ["vorostrum", "justavik"]
  },

  // Amatsunagi - Region
  {
    id: "amatsunagi",
    name: "Amatsunagi",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "crown-nations",
    short: "An island region off the eastern coast of Sankoten, preserving Sahrani and Atenaran heritage within the Crown Nations.",
    full: `Amatsunagi occupies an island off the eastern coast of Sankoten. Its geographic separation from the mainland has allowed its Sahrani and Atenaran heritage to develop with a distinct local character while maritime routes keep it connected to Yoshinara and the wider Crown Nations.

Fishing, shipping and coastal trade form an important part of island life. Religious practices, architecture, food and festivals retain southern influences, while generations of contact with Yoshinara have introduced Hoshimiran elements into everyday life.

~~~Inspiration: Sahrani and Atenaran heritage adapted to an island environment within the Crown Nations.~~`,
    related: ["crown-nations", "sankoten", "yoshinara", "sahran", "atenara"]
  },

  // Necrovia - Nation
  {
    id: "necrovia",
    name: "Necrovia",
    aliases: [],
    category: "places",
    age: null,
    tier: "nation",
    parent: "crown-nations",
    short: "A Vantari nation of dark forests, scattered settlements and death gardening traditions in the southern neck of the Crown Nations.",
    full: `Necrovia occupies the southern neck of the Crown Nations, a region of dark forests, neglected roads and dispersed settlements associated with Vantari traditions.

Death Gardening is central to Necrovia's identity. Vantari practitioners work with death, memory and transformation, cultivating gardens in which the Residue and Resonance left by the dead nourish new growth. The resulting plants may provide food, medicine and materials, while memorial gardens preserve an individual's Echo through living things.

The nation has deliberately withdrawn from much of the wider world. Its settlements remain small and scattered, and outsiders often regard Necrovia with suspicion. Its people, meanwhile, preserve traditions and knowledge concerning death, memory, Vanta and the Veins that few outside their communities understand well.

~~~Inspiration: Vantari and necromantic traditions, American Gothic and Southern Gothic, with elements inspired by Voodoo.~~`,
    related: ["crown-nations", "vantari", "death-gardening", "the-veins"]
  },

  // Veralisse - Region
  {
    id: "veralisse-region",
    name: "Veralisse Region",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "crown-nations",
    short: "A tiny region at the southern-eastern tip of the Crown Nations, dominated almost entirely by the city of Veralisse and the institutions of the Psycrata.",
    full: `Veralisse occupies the southern-eastern tip of the Crown Nations, with most of its developed territory belonging to the city of the same name. The region therefore has little separation between its administrative territory and its principal settlement.

The Psycrata hold the region as a centre of scholarship and magical study. Universities, laboratories, libraries and Diviner institutions form the core of its developed landscape, concentrating knowledge rather than spreading it across numerous settlements.

Its small size has encouraged that concentration. Veralisse's influence extends far beyond the region through the scholars, Diviners and knowledge that pass through its institutions.

~~~Inspiration: Academic and research institutions in the United States, particularly Harvard and MIT, combined with Psycratan and Diviner aesthetics.~~`,
    related: ["crown-nations", "veralisse", "psycrata", "diviners"]
  },

  // Veralisse - Settlement
  {
    id: "veralisse",
    name: "Veralisse",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "veralisse-region",
    short: "A compact academic city dominated by crystalline towers, libraries, laboratories and Diviner institutions under Psycratan influence.",
    full: `Veralisse is a city built around knowledge. Crystalline towers, libraries and laboratories dominate its skyline, while academies and Diviner institutions occupy much of its central districts.

The city developed as a centre for preserving and studying magical knowledge. Researchers examine Resonance, the soul, artefacts and records inherited from earlier Ages, while Diviners train alongside scholars whose work approaches magic through systematic study.

Its architecture reflects that purpose. Archives, laboratories and lecture halls are as prominent as homes and commercial buildings, with crystal incorporated throughout the city for both aesthetic and practical purposes.

Veralisse is small beside Aerisu's great metropolises, but the scholars trained and knowledge preserved within it give the city an influence far beyond its borders.

~~~Inspiration: Harvard, MIT and other major academic and research institutions in the United States.~~`,
    related: ["veralisse-region", "crown-nations", "psycrata", "diviners", "nightjar"]
  },

  // Noctara - Nation
  {
    id: "noctara",
    name: "Noctara",
    aliases: ["Noctaran"],
    category: "places",
    age: null,
    tier: "nation",
    parent: "crown-nations",
    short: "A barren Crown Nation of wastelands and scattered settlements whose Ereboskan population preserves Vantari traditions of Death Gardening.",
    full: `Noctara occupies one of the harsher stretches of the Crown Nations, where wasteland, exposed earth and long distances separate its scattered communities. Water is scarce, fertile ground is precious and many settlements are small enough to disappear into the surrounding landscape.

Much of Noctara's population descends from Ereboskan communities, carrying traditions shaped by Vanta, death and the land. Death Gardening is among the most important. Gardeners use the Residue left by death to nourish and guide particular plants, turning otherwise barren ground into pockets of fertility that provide food, medicine, materials and stranger growths shaped by the lives that nourished them.

The practice also serves remembrance. Families may cultivate memorial plants from the final Resonance of their dead, while communal gardens preserve useful growth across generations. More specialised practitioners may follow Gedevari traditions, studying the relationship between death, Resonance and growth alongside the Vanta and necromantic techniques used to direct it.

Noctara's relationship with death is therefore both practical and spiritual. The dead continue to sustain the living, while Ereboskan traditions concerning the Veins persist around the Vein Mouths scattered through the wasteland. Communities near these thresholds preserve knowledge of the passages beneath the earth and the movement of souls through them.

Beyond its gardens, Noctara remains sparse. Roads and trade routes connect its scattered populations, but only a handful of settlements are large enough to become widely recognised. Morvane is the most prominent.

~~~Inspiration: Wasteland environments and isolated frontier settlements, with a darker Crown Nations interpretation of the American frontier.~~`,
    related: ["crown-nations", "morvane", "ereboska", "vantari", "death-gardening", "gedevari", "vein-guides"]
  },

  // Morvane - Settlement
  {
    id: "morvane",
    name: "Morvane",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "noctara",
    short: "The largest settlement in Noctara, where Ereboskan Death Gardening sustains the community amid the surrounding wasteland.",
    full: `Morvane is the largest and most recognised settlement in Noctara, built where several wasteland routes converge. Its markets, workshops, inns and trading houses draw together the scattered communities, travellers and merchants who pass through the region, while homes and older districts extend into the surrounding waste.

Death Gardens are woven throughout the settlement, surrounding homes and courtyards and turning barren ground into productive soil according to the Residue that nourishes them. Their plants provide food, medicine, fibres, timber, dyes and other materials, while the oldest gardens serve as memorial grounds, with trees and flowers cultivated from the final Resonance of generations of Morvane's dead. Families tend their ancestral gardens alongside trained Death Gardeners who maintain communal plots and preserve the knowledge behind them, making Death Gardening inseparable from Morvane's agriculture, medicine and funerary customs.

This practice reflects the settlement's Ereboskan heritage and the influence of Gedevari traditions. Morvane's position also brings different Vantari traditions into contact: some approach the gardens through remembrance and renewal, while others emphasise death as part of an ongoing cycle, with the distinction resting on whether Vanta is engaged with discipline or surrendered to the Curse.`,
    related: ["noctara", "crown-nations", "ereboska", "vantari", "death-gardening", "gedevari"]
  },

  // Lianzhou - Nation
  {
    id: "lianzhou",
    name: "Lianzhou",
    aliases: ["Lianzhoun"],
    category: "places",
    age: null,
    tier: "nation",
    parent: "yantara",
    short: "A Fenguan-descended nation of Yantara whose traditions of hierarchy, scholarship and disciplined civic life developed beyond Fengua itself.",
    full: `Lianzhou occupies part of Yantara, carrying a strong Fenguan heritage shaped by migration and generations of life beyond Fengua itself.

The nation retains traditions of scholarship, hierarchy, discipline and civic responsibility, though these have developed within a more commercially connected environment. Its cities combine formal architecture, modern development and institutions centred on education, administration and trade.

Lianzhou remains in longstanding tension with Bayangara, with the two nations sharing Yantara while developing markedly different cultural identities.

One territory of Lianzhou lies beyond Yantara itself. Shunxi remains politically Lianzhoun while occupying part of the Crown Nations landmass, separated from the nation's principal territory by sea.

~~~Inspiration: Fenguan heritage filtered through the Crown Nations. Inspired by Chinese-American communities and Taiwanese culture, with an American East Coast influence.~~`,
    related: ["yantara", "bayangara", "shunxi", "fengua", "crown-nations"]
  },

  // Shunxi - Region
  {
    id: "shunxi",
    name: "Shunxi",
    aliases: ["Shunxin"],
    category: "places",
    age: null,
    tier: "region",
    parent: "lianzhou",
    short: "A detached Lianzhoun region situated on the Crown Nations landmass, separated from Lianzhou's main territory by sea.",
    full: `Shunxi is a region of Lianzhou situated on the Crown Nations landmass, geographically separated from the nation's principal territory while remaining politically Lianzhoun.

Its position places it among the nations surrounding the Crown Nations, making its communities more accustomed to cultural exchange and maritime contact than much of mainland Lianzhou. Lianzhoun institutions nevertheless preserve its political and cultural connection to the parent nation.

Shunxi consequently occupies an unusual position in Aerisu's geography: part of Lianzhou, part of the Crown Nations' wider political landscape, and physically detached from Yantara itself.

~~~Inspiration: Detached overseas regions and culturally connected territories, with Fenguan and East Asian influences.~~`,
    related: ["lianzhou", "crown-nations", "yantara"]
  },

  // Bayangara - Nation
  {
    id: "bayangara",
    name: "Bayangara",
    aliases: ["Bayangaran"],
    category: "places",
    age: null,
    tier: "nation",
    parent: "yantara",
    short: "A Hoshimiran-descended nation of Yantara shaped by patience, maritime life and a cultural identity distinct from Yoshinara.",
    full: `Bayangara occupies part of Yantara, sharing the landmass with Lianzhou. Its people carry Hoshimiran heritage, though generations of separation and interaction with surrounding cultures have produced a distinct identity.

The nation is closely connected to its landscape and waterways. Rural settlements, cultivated land and coastal communities form much of its population, while larger towns connect the interior to the surrounding seas.

Bayangaran culture places particular value on patience and endurance. Hoshimiran ideas of harmony with nature remain visible, but they have developed into local traditions rather than direct copies of those preserved in Yoshinara or Hoshimira.

Its relationship with Lianzhou remains complicated. Their shared landmass and contrasting political and cultural priorities make trade, diplomacy and rivalry part of everyday life.

~~~Inspiration: Hoshimiran heritage combined with Indonesian and Japanese influences, particularly island and maritime cultures.~~`,
    related: ["yantara", "lianzhou", "yoshinara", "hoshimira"]
  },

  // Yantara - Landmass
  {
    id: "yantara",
    name: "Yantara",
    aliases: ["Yantaran"],
    category: "places",
    age: null,
    tier: "continent",
    parent: "verdant",
    short: "A smaller landmass south-west of Elyra, shared principally by Lianzhou and Bayangara.",
    full: `Yantara is a smaller landmass in the south-western seas of Elyra, principally occupied by Lianzhou and Bayangara. Though classified at the continent tier, it is considerably smaller than Verdant's major continental landmasses.

The two nations share the landmass while developing distinct identities. Lianzhou carries Fenguan traditions of hierarchy, scholarship and civic order, while Bayangara preserves a Hoshimiran heritage shaped by patience, nature and maritime life.

Their proximity has made Yantara a region of sustained interaction, with trade, cultural exchange and political tension shaping both nations.

Lianzhou also maintains Shunxi, a detached region on the Crown Nations landmass. It remains politically part of Lianzhou despite its geographic separation from Yantara.

~~~Inspiration: East and Southeast Asian cultural regions, particularly the interaction of Chinese and island Southeast Asian traditions.~~`,
    related: ["lianzhou", "bayangara", "shunxi", "crown-nations"]
  }
);