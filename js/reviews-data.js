// Reviews shown on reviews.html.
//
// Shape of each entry:
//   name           - whatever the client wants shown: a real name, a
//                    pseudonym, or "Anonymous"
//   commissionType - short label for what was made (optional, omit the
//                    whole line by leaving it out or using an empty string)
//   image           - { src, alt } for the piece shown alongside the review
//   blurb          - the short word-or-sentence summary
//   review         - the full review text

window.REVIEWS_DATA = [

  

  {
     name: "JacStone24",
     commissionType: "Full Body Illustration",
     image: { src: "images/portfolio/character/fire_emblem_char_col1_trans.webp", alt: "Fire Emblem inspired character" },
     blurb: "The process was easy, laid-back, and adaptable.",
     review: "The artist was very accommodating to people new to the commissioning process. I felt like they listened to what I was asking during the process and were receptive to feedback along the way. The finished work was high quality. I would recommend this artist for character art when you are able to articulate the details of what you want[. This] is so that zuPasha doesn't have to guess as much. He used his imagination with me, and he nailed it."
   },

   {
     name: "Kelly",
     commissionType: "Tattoo Concept",
     image: { src: "images/portfolio/illustration/kelly_tattoo_sketch.webp", alt: "Moon-tree tattoo concept" },
     blurb: "The piece he created captured everything I felt and everything I had hoped for",
     review: "The entire process was seamless from start to finish. Zuhayr designed a piece based on the specific elements I shared with him, but what stood out the most was the time he took to ask what each element meant to me. He encouraged me to describe them through words, images, and the feelings they carried. That level of care made the experience incredibly personal. The piece he created captured everything I felt and everything I had hoped for. It was more than just artwork—it told my story. Zuhayr is an incredibly talented artist, and I can't recommend him highly enough."
   },

   // {
   //   name: "JJBEATS",
   //   commissionType: "Various Character Designs",
   //   image: { src: "images/portfolio/character/female_week4.webp", alt: "Moon and tree tattoo concept" },
   //   blurb: "These three fuckers",
   //   review: "COMMANDER KIDD is a small, firm woman with short reddish hair (Scottish-inspired), cropped and practical. A red bandana is tied tightly around her head, a few strands escaping. Her face is sharp, her expression one of annoyed exasperation. She wears practical military-style gear – a fitted jacket with reinforced shoulders, cargo trousers, sturdy boots. She leans on her elbow on the table, her head in her palm, looking at the mech pilots with a 'these fuckers' expression. She looks like someone who has seen too much chaos caused by men who think they're invincible."
   // }
];
