window.LORE_ENTRIES = window.LORE_ENTRIES || [];

window.LORE_ENTRIES.push(

  // === PLACES ===

  // Fengua
  {
    id: "fengua",
    name: "Fengua",
    aliases: [],
    category: "places",
    age: null,
    tier: "nation",
    parent: "elyra",
    short: "A stormbound nation south of Hoshimira, founded by clans who descended from the mountains and built their civilisation around discipline, study and the careful mastery of thunder.",
    full: `The Storm Valleys
South of Hoshimira lies Fengua, a nation shaped by valleys where storms move in patient cycles and lightning follows familiar paths. Its people descend from Hoshimiran clans who came down from the mountains after the Shattering, settling beneath skies that demanded constant attention.

Susanoo moved through these valleys, shaping their weather and leaving traces of his presence wherever lightning struck. Raikami stones formed beneath the ground, retaining a persistent charge that could be studied, stored and eventually directed. The settlers adapted their lives around the storms, carving canals, raising watchtowers and organising communities according to the demands of survival.

Over generations, this practical discipline became a broader culture of study and order. Scholars recorded storm patterns. Engineers developed ways to work with Raikami. Chi meditation traditions taught stillness and control, while hierarchies formed around responsibility and the preservation of communal stability.

During the Age of Fairytales, spirits wandered through Fengua's forests and hills, many carrying small echoes of Susanoo's essence. Raikami crystals became part of everyday tools, rituals and later technologies. Storm towers rose throughout the valleys, with prayer and engineering becoming increasingly difficult to separate.

Fengua's civilisation grew from the belief that thunder could be understood rather than merely endured. By studying the storms closely enough to predict and direct them, its people transformed Susanoo's presence into a foundation for their society.

~~~Inspiration: Fengua draws primarily from Chinese cultural traditions, particularly Confucian philosophy, structured social systems, disciplined scholarship and bureaucratic traditions.~~`,
    related: ["zhenxi", "haiyua", "seoryun", "xianhua", "yongjin", "chi", "susanoo", "raikami", "hoshimira"]
  },

  // Zhenxi
  {
    id: "zhenxi",
    name: "Zhenxi",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "fengua",
    short: "The central province of Fengua and its traditional heartland, where discipline, scholarship and social order shape everyday life. Its capital is Zhaoxu.",
    full: `The Ordered Heart
Zhenxi occupies central Fengua and forms the traditional heart of its civilisation. Its communities place great importance on discipline, education and the responsibilities carried by each position within society. Customs are preserved carefully, not simply as tradition, but as a means of maintaining continuity between generations.

The province is home to Zhaoxu, Fengua's capital, where scholars, administrators and practitioners of Chi gather. Formal gardens, courtyards and carefully maintained public spaces reflect the province's preference for order and proportion.

The eastern reaches of Zhenxi give way to the Storm Valleys, where Susanoo's presence remains particularly strong. There, the study of weather and Raikami became closely intertwined with the intellectual traditions of the province.

~~~Inspiration: Zhenxi draws from central and imperial China, particularly Beijing, Xi'an and the Yellow River basin.~~`,
    related: ["fengua", "zhaoxu", "storm-valleys", "chi", "raikami"]
  },

  // Zhaoxu
  {
    id: "zhaoxu",
    name: "Zhaoxu",
    aliases: [],
    category: "places",
    age: null,
    tier: "settlement",
    parent: "zhenxi",
    short: "The capital of Fengua and centre of its administration, scholarship and formal traditions.",
    full: `The Capital of Fengua
Zhaoxu stands at the centre of Fengua's political and intellectual life. Administrators, scholars and practitioners of Chi gather within the city, making it one of the principal places where the nation's traditions are preserved and debated.

Its architecture reflects the ordered character of Zhenxi. Buildings are arranged around courtyards and formal avenues, with gardens and public spaces maintained according to established principles of proportion and balance.

From Zhaoxu, the institutions of Fengua oversee the systems that bind its provinces together, while scholars continue the long tradition of observing, recording and interpreting the natural forces that shaped the nation.`,
    related: ["zhenxi", "fengua", "chi"]
  },

  // Storm Valleys
  {
    id: "storm-valleys",
    name: "The Storm Valleys",
    aliases: [],
    category: "places",
    age: null,
    tier: "landmark",
    parent: "zhenxi",
    short: "The eastern valleys of Zhenxi where Susanoo's presence shapes the weather and Raikami crystals form beneath the ground.",
    full: `Where Thunder Walks
The Storm Valleys occupy the eastern reaches of Zhenxi, where weather follows recurring patterns and lightning strikes with unusual regularity. Susanoo's presence remains strongest here, and the land still bears the traces of the storms he shaped.

Raikami forms beneath the valleys where lightning has repeatedly entered the earth. The crystals retain a persistent charge, making them valuable for tools, rituals and technologies that depend upon electrical force. Their hum can intensify before severe weather, allowing experienced inhabitants to recognise approaching storms before they arrive.

Storm towers stand throughout the region, serving as observation posts and as structures through which lightning can be studied and, where possible, directed. The valleys became one of the earliest places where Fengua's practical knowledge of thunder developed into a formal discipline.

~~~Inspiration: The Storm Valleys draw from thunderstorm-heavy regions of China.~~`,
    related: ["zhenxi", "fengua", "raikami", "susanoo"]
  },

  // Haiyua
  {
    id: "haiyua",
    name: "Haiyua",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "fengua",
    short: "The northern province of Fengua, known for technological development and its close connections with Silealyros.",
    full: `The Northern Reach
Haiyua occupies northern Fengua, where the nation's traditions of engineering and storm study developed into a more technologically focused culture. Its position near Silealyros has made it an important point of contact between Fengua and the wider world.

The province is less concerned with preserving old forms than Zhenxi, though its inventions remain rooted in the same traditions of discipline and careful study. Raikami technology is refined here alongside newer forms of machinery, communications and infrastructure.

Haiyua's cities are among Fengua's busiest centres of technological development, attracting engineers and researchers from across the nation.

~~~Inspiration: Haiyua draws from northern and modern technological China, particularly major industrial and technological centres.~~`,
    related: ["fengua", "silealyros", "raikami"]
  },

  // Seoryun
  {
    id: "seoryun",
    name: "Seoryun",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "fengua",
    short: "A southern-eastern province bordering Seiryu, shaped by lake country, disciplined communities and a culture distinct from Fengua's central heartland.",
    full: `The Lake Province
Seoryun lies along Fengua's south-eastern reaches, sharing a border with Seiryu. Two large inland bodies of water define much of the province, shaping its settlements and providing natural routes between communities.

The province developed its own customs while remaining part of Fengua's broader tradition of discipline and communal responsibility. Water, weather and seasonal change play an important role in local life, with settlements built around the lakes and the rivers that feed them.

Its position between Fengua, Seiryu, Velascia and the territories to its south-west makes Seoryun a natural meeting point between several cultures.

~~~Inspiration: Seoryun draws from Korean cultural traditions and landscapes.~~`,
    related: ["fengua", "seiryu", "velascia", "bayangara", "lianzhou"]
  },

  // Xianhua
  {
    id: "xianhua",
    name: "Xianhua",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "fengua",
    short: "A north-western province of Fengua west of Haiyua, where highlands, old settlements and long-distance trade shape the character of the region.",
    full: `The Western Highlands
Xianhua occupies north-western Fengua, west of Haiyua and across the sea from Tarkova. Its position on the edge of the nation gives it a character distinct from the more central provinces.

The province is marked by broad highlands and older settlements scattered between valleys and mountain passes. Communities here developed around agriculture, travel and the movement of goods between Fengua and the lands beyond its western waters.

Xianhua retains Fengua's emphasis on order and communal responsibility, though life on the frontier has made its people more accustomed to self-reliance. Its roads and passes connect the interior to coastal routes, making the province an important link between Fengua and the wider world.

~~~Inspiration: Xianhua is intended as a western Fenguan region with its own identity rather than a direct analogue of a single real-world region.~~`,
    related: ["fengua", "haiyua", "tarkovia"]
  },

  // Yongjin
  {
    id: "yongjin",
    name: "Yongjin",
    aliases: [],
    category: "places",
    age: null,
    tier: "region",
    parent: "fengua",
    short: "A western province south of Xianhua and west of Zhenxi, shaped by fertile lowlands, river settlements and its proximity to Rangimora.",
    full: `The Western Lowlands

Yongjin lies west of Zhenxi and south of Xianhua, extending towards the waters separating Fengua from Rangimora. The province is greener and more settled than the harsher western highlands, with rivers and fertile lowlands supporting dense communities.

Its position has made Yongjin an important agricultural region as well as a gateway towards the western sea. Trade with distant islands brings unfamiliar goods and ideas into Fengua, while the province's own produce travels towards the nation's larger cities.

Yongjin retains the discipline of Fengua's central traditions, but its relationship with the sea and its western neighbours has made it one of the more outward-looking provinces.

~~~Inspiration: Yongjin is intended as a western Fenguan lowland and maritime region, providing a contrast to Xianhua and central Zhenxi.~~`,
    related: ["fengua", "xianhua", "zhenxi", "rangimori"]
  },
);