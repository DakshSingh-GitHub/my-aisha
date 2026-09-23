export interface QuestionStage {
  id: number;
  stageNumber: string;
  title: string;
  environmentName: string;
  environmentSubtitle: string;
  palette: {
    bgGradient: string;
    cardBorder: string;
    cardBg: string;
    accentGlow: string;
    primaryTone: string;
    particleType: "tulip" | "palace" | "butterfly" | "marigold" | "lotus" | "moonlight" | "balloons" | "roses" | "crown" | "clouds" | "diya" | "tunnel" | "floralHall" | "grandRoyal" | "reveal";
  };
  envelopeDesign: {
    baseColor: string;
    flapColor: string;
    innerLining: string;
    ribbonColor: string;
    waxSealColor: string;
    waxSealSymbol: string;
    stampText: string;
  };
  question: string;
  options: [string, string, string, string];
  complimentaryIndex: number;
  complimentaryResponse: {
    title: string;
    subtitle: string;
    hinglishVoice: string;
  };
  playfulResponses: Record<
    number,
    {
      title: string;
      hint: string;
      hinglishVoice: string;
    }
  >;
  surprise: {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    poetry: string;
  };
  crownProgression: string;
}

export const QUESTIONS_DATA: QuestionStage[] = [
  // 01 — Pink Tulip Garden
  {
    id: 1,
    stageNumber: "01 / 15",
    title: "Question 1 — Mirror, Mirror on the Wall 👀✨",
    environmentName: "Pink Tulip Garden",
    environmentSubtitle: "Soft pink sunlight, fresh blooming tulips, and fluttering butterflies",
    palette: {
      bgGradient: "from-[#200b1d] via-[#3a132e] to-[#120516]",
      cardBorder: "border-pink-300/40",
      cardBg: "bg-pink-950/25",
      accentGlow: "rgba(244, 114, 182, 0.4)",
      primaryTone: "text-pink-200",
      particleType: "tulip",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-pink-700 via-rose-800 to-pink-950",
      flapColor: "bg-pink-600",
      innerLining: "bg-rose-100",
      ribbonColor: "border-pink-300 bg-pink-400/80",
      waxSealColor: "bg-rose-600 border-amber-300",
      waxSealSymbol: "🌷",
      stampText: "FIRST SURPRISE",
    },
    question: "Aishaaa, aaj khud ko dekh kar sabse pehla thought kya aaya? 👀✨",
    options: [
      "“Aaj pata nahi kyun, but face pe ek alag hi glow hai… shayad aaj ka din hi kuch special lag raha hai.” 🌸",
      "“Okayyy… aaj thoda zyada hi pretty lag rahi hoon, itna toh mirror bhi honestly maanega.” 🫣✨",
      "“Aaj toh hairstyle, smile aur outfit sab somehow perfectly cooperate kar rahe hain… not complaining at all.” 😌💗",
      "“Honestly, aaj khud ko dekhkar bas itna laga ki haan, agar kisi ko mujhpe crush ho bhi jaaye toh uski galti nahi hogi.” 😭👸🏻",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "100% Valid & Legally Accurate! 😭👸🏻",
      subtitle: "Crush hone wale ki koi galti nahi hai, saari galti aapke noor ki hai!",
      hinglishVoice: "Krrish ka answer toh pehle se fix tha Habibiii! Itni khoobsurat lagogi toh dil haarna toh guaranteed hai! 🫣❤️",
    },
    playfulResponses: {
      0: {
        title: "Glow toh out of this world hai! ✨",
        hint: "Din toh special hai, par Option D ka confidence sabse royal hai! 🫣",
        hinglishVoice: "Glow toh roz hota hai Sahiba, par aaj toh seedha crush zone trigger ho raha hai!",
      },
      1: {
        title: "Mirror ne toh already salute kar diya! 🪞",
        hint: "Thoda zyada pretty nahi, poori duniya se alag pretty! Check Option D! 👑",
        hinglishVoice: "Mirror bhi soch raha hoga 'kash main bol pata ki aap kitni pyari ho!' 😂",
      },
      2: {
        title: "All Three In Complete Harmony! 😌💗",
        hint: "Hairstyle aur smile cooperate kar rahe hain, par kisi ka crush hona bhi toh justified hai! (Option D) 😉",
        hinglishVoice: "Hairstyle aur smile top notch hain, but Option D is pure fact!",
      },
    },
    surprise: {
      title: "Surprise #1: The Royal Tulip Bouquet",
      subtitle: "Freshly plucked from the enchanted garden",
      description: "A bouquet of velvet pink tulips blooming in your honor, infused with morning dewdrops.",
      icon: "🌷",
      poetry: "गुलाब तो सब देते हैं, हम आपके लिए ट्यूलिप की महक लाए हैं,\nआज की शहज़ादी के कदमों में सारे बाग़ झुकाए हैं। ✨",
    },
    crownProgression: "👑",
  },

  // 02 — Royal Golden Palace
  {
    id: 2,
    stageNumber: "02 / 15",
    title: "Question 2 — Aapka Sabse Pyaara Andaaz 🌷",
    environmentName: "Royal Golden Palace",
    environmentSubtitle: "Champagne-gold arches, imperial chandeliers, and royal drapery",
    palette: {
      bgGradient: "from-[#2b1f09] via-[#432d0c] to-[#170e03]",
      cardBorder: "border-amber-400/40",
      cardBg: "bg-amber-950/25",
      accentGlow: "rgba(245, 208, 115, 0.4)",
      primaryTone: "text-amber-200",
      particleType: "palace",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-amber-700 via-yellow-800 to-amber-950",
      flapColor: "bg-amber-600",
      innerLining: "bg-amber-100",
      ribbonColor: "border-amber-300 bg-amber-400/90",
      waxSealColor: "bg-amber-600 border-amber-200",
      waxSealSymbol: "👑",
      stampText: "ROYAL CREST",
    },
    question: "Aapko apne baare mein sabse zyada kya pasand hai? 🌷",
    options: [
      "“Mujhe meri smile sabse zyada pasand hai, kyunki jab main genuinely khush hoti hoon toh woh smile bina effort ke aa jaati hai.” 😊❤️",
      "“Mujhe meri aankhein pasand hain, kyunki kabhi-kabhi bina kuch bole bhi woh exactly bata deti hain ki mere mind mein kya chal raha hai.” 👀✨",
      "“Mujhe meri personality pasand hai, kyunki main emotional bhi hoon, caring bhi hoon, thodi crazy bhi hoon aur boring toh bilkul nahi.” 🫣🌸",
      "“Mujhe apna woh complete version pasand hai jisme meri smile, meri awaaz, meri aadatein, meri craziness aur meri little imperfections sab included hain.” 🥹❤️",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "The Complete & Perfect Aisha! 🥹❤️",
      subtitle: "Imperfections hi toh aapko itna unconditionally unique aur adorable banati hain.",
      hinglishVoice: "Krrish ko bhi aapka yahi complete version sabse pyaara lagta hai—with all the smile, voice, warmth and little craziness! 👑✨",
    },
    playfulResponses: {
      0: {
        title: "Smile toh dil le jaati hai! 😊",
        hint: "Smile magical hai, par aapka poora complete version is unbeatable! (Option D) 🥹",
        hinglishVoice: "Aapki smile dekh kar toh kisi ka bhi din ban jaye Sahiba!",
      },
      1: {
        title: "Aankhein jo poori daastaan keh dein! 👀",
        hint: "Aankhon mein noor hai, par aapki puri personality ka koi tod nahi! 🌷",
        hinglishVoice: "In aankhon ki taareef mein shayar bhi kam pad jayein!",
      },
      2: {
        title: "Boring toh bilkul bhi nahi! 🫣🌸",
        hint: "Caring aur crazy dono ka best combination, but Option D includes everything! ✨",
        hinglishVoice: "Aapke saath baithne wala bore ho jaye? Scientifically impossible!",
      },
    },
    surprise: {
      title: "Surprise #2: The Golden Stethoscope Brooch",
      subtitle: "A charm fit for a compassionate healer",
      description: "A handcrafted champagne-gold stethoscope charm studded with tiny rose diamonds.",
      icon: "🩺✨",
      poetry: "दवा तो बहुत हैं जहाँ में, पर आपकी मुस्कान सा असर कहाँ,\nजो बीमार दिल को भी तंदुरुस्त कर दे, वो नज़राना और कहाँ। 🩺",
    },
    crownProgression: "👑✨",
  },

  // 03 — Lavender Butterfly Garden
  {
    id: 3,
    stageNumber: "03 / 15",
    title: "Question 3 — Smile Like A Melody 😊✨",
    environmentName: "Lavender Butterfly Garden",
    environmentSubtitle: "Dreamy violet skies, fragrant lavender meadows, and glowing butterflies",
    palette: {
      bgGradient: "from-[#1a0b2e] via-[#2d124d] to-[#0f051c]",
      cardBorder: "border-purple-300/40",
      cardBg: "bg-purple-950/25",
      accentGlow: "rgba(192, 132, 252, 0.4)",
      primaryTone: "text-purple-200",
      particleType: "butterfly",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-purple-800 via-indigo-900 to-purple-950",
      flapColor: "bg-purple-700",
      innerLining: "bg-purple-100",
      ribbonColor: "border-purple-300 bg-purple-400/80",
      waxSealColor: "bg-purple-700 border-amber-300",
      waxSealSymbol: "🦋",
      stampText: "VIOLET MIST",
    },
    question: "Agar aapki smile ko ek feeling mein describe karna ho, toh kya hogi? 😊✨",
    options: [
      "“Ek peaceful morning jaisi… jise dekhkar bina kisi reason ke mind thoda calm ho jaaye aur din automatically better lagne lage.” 🌅🌸",
      "“Ek warm hug jaisi… jo kuch seconds ke liye hi sahi, but saari unnecessary tension aur overthinking ko side mein rakh de.” 🫶🏻❤️",
      "“Ek favourite song jaisi… jise kitni bhi baar sun lo, phir bhi first few seconds mein wahi familiar happiness feel hoti hai.” 🎶🥹",
      "“Ek aisi feeling jise explain karne ke liye words kam pad jaayein… bas dekhte hi face pe smile aa jaaye aur dil bole, ‘haan, this is nice.’” 🫠❤️",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "Words Fall Short Every Single Time 🫠❤️",
      subtitle: "Dil bas dekhte hi bolta hai: 'haan, this is the purest, sweetest feeling in the universe.'",
      hinglishVoice: "Krrish ka answer toh 100% yahi fix tha! Aapki smile ke aage dictionary ke saare alfaaz chhotey pad jaate hain Habibiii! 🌸✨",
    },
    playfulResponses: {
      0: {
        title: "Peaceful Morning Vibes 🌅",
        hint: "Peaceful toh bohot hai, par dil ko jo speechless karti hai woh feeling Option D mein hai! 🫠",
        hinglishVoice: "Subah ki taazi hawa jaisi sukoon dene wali muskaan!",
      },
      1: {
        title: "Warm Hug For The Soul 🫶🏻",
        hint: "Saari overthinking mita deti hai, par Option D explains the true magic! ❤️",
        hinglishVoice: "Aap muskurate ho aur saari tension gayab! Magical superpower hai ye!",
      },
      2: {
        title: "Favourite Song On Loop 🎶",
        hint: "Favourite song se bhi zyada sweet, but words fail to describe it! (Option D) 🥹",
        hinglishVoice: "Kitni bhi baar dekho, har baar wahi pehli wali khushi feel hoti hai!",
      },
    },
    surprise: {
      title: "Surprise #3: The Crystal Lavender Butterfly",
      subtitle: "Whispering wishes of peace and joy",
      description: "A luminescent glass butterfly that flutters with soothing lilac light whenever you smile.",
      icon: "🦋💜",
      poetry: "तितलियों ने भी आज रंग चुराया है आपके लिबास से,\nमहक उठी है ये शाम आपके ख़ास एहसास से। 💜",
    },
    crownProgression: "👑✨🦋",
  },

  // 04 — Indian Floral Courtyard
  {
    id: 4,
    stageNumber: "04 / 15",
    title: "Question 4 — Aishaaa Ki Cuteness 🫣🌸",
    environmentName: "Indian Floral Courtyard",
    environmentSubtitle: "Carved sandstone jali arches, marigold garlands, and earthen brass lamps",
    palette: {
      bgGradient: "from-[#290e04] via-[#461a08] to-[#180601]",
      cardBorder: "border-amber-500/40",
      cardBg: "bg-amber-950/30",
      accentGlow: "rgba(249, 115, 22, 0.4)",
      primaryTone: "text-amber-100",
      particleType: "marigold",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-amber-800 via-orange-900 to-amber-950",
      flapColor: "bg-amber-700",
      innerLining: "bg-amber-100",
      ribbonColor: "border-yellow-300 bg-amber-500",
      waxSealColor: "bg-amber-600 border-yellow-200",
      waxSealSymbol: "🪔",
      stampText: "DESI ROYAL",
    },
    question: "Aishaaa ki sabse cute quality kya hai? 🫣🌸",
    options: [
      "“Aapka woh bina reason smile kar dena, especially jab aap khud bhi realise nahi karti ki aap kitni adorable lag rahi hain.” 😊",
      "“Aapka chhoti-chhoti cheezon ko genuinely notice karna aur unmein bhi happiness dhoondh lena… that’s actually very cute.” 🥹🌷",
      "“Aapka kabhi-kabhi bilkul bachchon jaisa excited ho jaana, especially jab koi aisi cheez ho jo aapko genuinely pasand ho.” 🫣💗",
      "“Aapki woh complete combination wali cuteness—thodi innocence, thodi craziness, thodi shyness aur beech-beech mein unexpected attitude.” 😭👸🏻",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "The Unbeatable Combo of Cuteness! 😭👸🏻",
      subtitle: "Innocence + Craziness + Shyness + That unexpected attitude = 100% Aisha!",
      hinglishVoice: "Krrish ka answer toh pehle se fix tha! Ye complete combination kisi aur ke paas ho hi nahi sakta Habibiii! 🫣❤️",
    },
    playfulResponses: {
      0: {
        title: "Unconscious Adorableness! 😊",
        hint: "Ye smile cute hai, par aapka attitude aur craziness bhi toh lethal hai! (Option D) 😭",
        hinglishVoice: "Aapko khud nahi pata hota aap kitni pyaari lagti ho haste waqt!",
      },
      1: {
        title: "Finding Joy in Tiny Things 🥹🌷",
        hint: "Itni innocent observation, par the whole combo in Option D is legendary! ✨",
        hinglishVoice: "Chhoti baaton mein khushi dhoondna sabse sundar aadat hai!",
      },
      2: {
        title: "Childlike Pure Excitement! 🫣💗",
        hint: "Bachcho jaisi khushi + royal attitude = Option D is the true winner! 👑",
        hinglishVoice: "Excited Aisha is the cutest sight ever, no debate!",
      },
    },
    surprise: {
      title: "Surprise #4: Handcrafted Filigree Jhumka Charm",
      subtitle: "Crafted in miniature palace gold",
      description: "A royal brass-gold jhumka charm that tinkles with auspicious celebratory blessings.",
      icon: "🥻🪔",
      poetry: "झुमके की खनक में जैसे कोई साज़ बजता है,\nआप सादगी में भी रहें, तो भी सिर पे ताज सजता है। ✨",
    },
    crownProgression: "👑✨🦋🌷",
  },

  // 05 — Lotus Pond Sanctuary
  {
    id: 5,
    stageNumber: "05 / 15",
    title: "Question 5 — The Enchanted Blossom 🌷",
    environmentName: "Lotus Pond Sanctuary",
    environmentSubtitle: "Moonlit rippling waters, glowing pink lotuses, and floating water lilies",
    palette: {
      bgGradient: "from-[#051a24] via-[#092b3a] to-[#030e14]",
      cardBorder: "border-teal-300/40",
      cardBg: "bg-teal-950/25",
      accentGlow: "rgba(45, 212, 191, 0.4)",
      primaryTone: "text-teal-200",
      particleType: "lotus",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950",
      flapColor: "bg-teal-800",
      innerLining: "bg-emerald-100",
      ribbonColor: "border-teal-200 bg-teal-400/80",
      waxSealColor: "bg-emerald-700 border-amber-300",
      waxSealSymbol: "🪷",
      stampText: "PURE LOTUS",
    },
    question: "Agar aap ek flower hoti, toh kaunsi hoti? 🌷",
    options: [
      "“Rose hoti… thodi elegant, thodi classic aur aisi jo jitni baar dekho, utni baar beautiful hi lage.” 🌹✨",
      "“Tulip hoti… simple, soft aur graceful, jisme beauty loud nahi hoti but phir bhi attention automatically attract ho jaati hai.” 🌷🤍",
      "“Lily hoti… peaceful aur delicate, jisme ek aisi natural elegance hoti hai jo bina kisi extra effort ke noticeable ban jaati hai.” 🌸",
      "“Shayad koi existing flower hi nahi… kyunki agar Aishaaa naam ka koi flower hota, toh baaki flowers ko competition mil jaata.” 😭👸🏻🌷",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "Outshines The Entire Garden! 😭👸🏻🌷",
      subtitle: "Agar Aisha naam ka phool hota, toh baaki gulaab aur tulips competition se darr jaate!",
      hinglishVoice: "Krrish ka answer toh fix hi tha Habibiii! Aapki khoobsurat rooh ke aage saare baag feeke pad jaayein! 🌷✨",
    },
    playfulResponses: {
      0: {
        title: "Classic Timeless Rose 🌹",
        hint: "Rose toh beautiful hai, par aapka koi competition nahi! Option D dekho! 🫣",
        hinglishVoice: "Rose se bhi zyada nazakat aur elegance hai aap mein!",
      },
      1: {
        title: "Soft & Graceful Tulip 🌷",
        hint: "Tulip jaise gentle vibes, par Aisha naam ka flower toh alag hi league hai! (Option D) 👸🏻",
        hinglishVoice: "Tulip ki saadgi aur aapka noor, match toh karta hai!",
      },
      2: {
        title: "Delicate & Peaceful Lily 🌸",
        hint: "Peaceful natural elegance, but flowers would get jealous of Option D! 😉",
        hinglishVoice: "Bina kisi effort ke noticeable ban jaana, ye sirf aapki khoobi hai!",
      },
    },
    surprise: {
      title: "Surprise #5: Glowing Floating Lotus Candle",
      subtitle: "Bearing wishes for endless inner peace",
      description: "A soft pink floating lotus bearing a perpetual warm flame of health, happiness, and barakah.",
      icon: "🪷🕯️",
      poetry: "कीचड़ में भी खिल के जो महके वो कमल कहलाती है,\nआपकी नेकी तो हर बिगड़े माहौल को महका जाती है। 💖",
    },
    crownProgression: "👑✨🦋🌷🪷",
  },

  // 06 — Dreamy Moonlit Garden
  {
    id: 6,
    stageNumber: "06 / 15",
    title: "Question 6 — The Voice of Melody 🎶",
    environmentName: "Dreamy Moonlit Garden",
    environmentSubtitle: "Deep midnight indigo, silver moonbeams, and nocturnal blooming jasmine",
    palette: {
      bgGradient: "from-[#0b0c26] via-[#141747] to-[#050614]",
      cardBorder: "border-indigo-300/40",
      cardBg: "bg-indigo-950/25",
      accentGlow: "rgba(129, 140, 248, 0.4)",
      primaryTone: "text-indigo-200",
      particleType: "moonlight",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-950",
      flapColor: "bg-indigo-800",
      innerLining: "bg-indigo-100",
      ribbonColor: "border-indigo-300 bg-indigo-300/80",
      waxSealColor: "bg-indigo-700 border-amber-200",
      waxSealSymbol: "🌙",
      stampText: "MOONBEAM",
    },
    question: "Aapki aawaaz ko sabse achhe se kaise describe karogi? 🎶",
    options: [
      "“Soft aur soothing… jaise kisi hectic din ke baad suddenly koi familiar voice suno aur mind thoda relax ho jaaye.” 🌸",
      "“Sweet aur warm… jaise ek aisi melody jo loud hone ki zarurat ke bina bhi poori attention apni taraf kheench leti hai.” 🎶🤍",
      "“Thodi playful, thodi expressive aur kabhi-kabhi itni cute ki saamne wala conversation khatam hone ke baad bhi voice yaad rakhe.” 🫣✨",
      "“Kokil kanthi type… jise sunne ke baad honestly samajh nahi aata ki voice achhi lag rahi hai ya voice sunne wali personality.” 🫠🎶",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "Kokil Kanthi Melts Hearts Every Time 🫠🎶",
      subtitle: "Awaaz itni pyaari aur personality itni bemisaal ki dil bas sunte hi rehna chahta hai.",
      hinglishVoice: "Krrish ka answer toh yehi tha! Jab aap bolti ho na Habibiii, toh duniya ka har shor sukoon ban jaata hai! 🎶❤️",
    },
    playfulResponses: {
      0: {
        title: "Pure Instant Peace 🌸",
        hint: "Hectic din ke baad ka sukoon, par personality aur aawaaz ka combo D mein hai! 🫠",
        hinglishVoice: "Aapki awaaz sun ke saari thakan 2 minute mein gayab ho jaati hai!",
      },
      1: {
        title: "Gentle Captivating Melody 🎶🤍",
        hint: "Poori attention kheench leti hai, but Option D is the royal crown answer! ✨",
        hinglishVoice: "Bina loud hue bhi seedha dil tak utar jaati hai!",
      },
      2: {
        title: "Playful, Expressive & Cute 🫣✨",
        hint: "Baat khatam hone ke baad bhi gunjti hai, par Kokil Kanthi in D is iconic! 👸🏻",
        hinglishVoice: "Aapki bak-bak aur masti sunne mein jo maza hai woh kahin nahi!",
      },
    },
    surprise: {
      title: "Surprise #6: Ceramic Royal Chai Cup & Silver Spoon",
      subtitle: "Infused with aromatic cardamoms and rose sugar",
      description: "A keepsake fine-bone china teacup etched with golden stars and 'Princess Aisha'.",
      icon: "☕🌙",
      poetry: "चाँद भी रुक के देखेगा इस रात की रवानी को,\nएक प्याली चाय मिल जाए इस दिलकश सुहानी को। ☕✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙",
  },

  // 07 — Festive Birthday Salon
  {
    id: 7,
    stageNumber: "07 / 15",
    title: "Question 7 — Aishaaa Ka Perfect Day ☀️🌷",
    environmentName: "Festive Birthday Salon",
    environmentSubtitle: "Floating pastel balloons, sparkling fairy lights, and towering gift towers",
    palette: {
      bgGradient: "from-[#29131a] via-[#481c2d] to-[#14060b]",
      cardBorder: "border-rose-400/40",
      cardBg: "bg-rose-950/25",
      accentGlow: "rgba(251, 113, 133, 0.4)",
      primaryTone: "text-rose-200",
      particleType: "balloons",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-rose-800 via-pink-900 to-rose-950",
      flapColor: "bg-rose-700",
      innerLining: "bg-rose-100",
      ribbonColor: "border-rose-200 bg-rose-400",
      waxSealColor: "bg-rose-600 border-amber-200",
      waxSealSymbol: "🎂",
      stampText: "SWEET 7",
    },
    question: "Aishaaa ka perfect happy day kaisa hoga? ☀️🌷",
    options: [
      "“Subah peacefully start ho, favourite breakfast mile, thoda music ho aur poora din bina unnecessary stress ke apni pace par chale.” ☕🌸",
      "“Ek beautiful outing ho, achha weather ho, favourite food ho aur saath mein woh log hon jinke saath bina filter ke khud ko enjoy kar sako.” 🌅❤️",
      "“Kuch spontaneous ho—koi random plan, lots of laughter, thodi masti aur end mein ek aisi memory jo baad mein yaad karke smile aa jaaye.” 😂✨",
      "“Honestly, perfect day ka formula simple hai—jahan Aishaaa genuinely happy ho, wahan location, weather aur plans automatically secondary ho jaate hain.” 🥹❤️",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "Your True Happiness Is Everything! 🥹❤️",
      subtitle: "Location, weather, plans sab secondary hain—jahan aap khush ho, wahi jannat hai.",
      hinglishVoice: "Krrish ka answer toh kaafi pehle se fix hai! Aapki genuine hasi hi har ordinary din ko perfect bana deti hai! ☀️🌷",
    },
    playfulResponses: {
      0: {
        title: "Cozy Peaceful Morning ☕🌸",
        hint: "Stress-free breakfast sounds dreamy, par Option D tells the deepest truth! 🥹",
        hinglishVoice: "Bina alarms aur stress ke ek peaceful din toh banta hai!",
      },
      1: {
        title: "Filter-free Outing with Favorites 🌅",
        hint: "Favourite food aur real company, par aapki happiness is the main star (Option D)! ❤️",
        hinglishVoice: "Dil khol kar hasna aur maze karna, exactly how it should be!",
      },
      2: {
        title: "Spontaneous Adventures & Laughs 😂✨",
        hint: "Random plans give the best memories, par Option D is unconditional love! 🌸",
        hinglishVoice: "Thodi masti aur bohot saari hasi, Aishaaa's signature vibe!",
      },
    },
    surprise: {
      title: "Surprise #7: Royal Belgian Chocolate Truffle Box",
      subtitle: "Handcrafted sweets for the sweetest soul",
      description: "An artisanal velvet box filled with hand-rolled raspberry and salted caramel dark chocolate truffles.",
      icon: "🍫🎂",
      poetry: "मीठा तो बहाना है इस जश्न को मनाने का,\nअसली मज़ा तो आपकी खुशी में मुस्कुराने का। 🎂✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂",
  },

  // 08 — Imperial Velvet Rose Garden
  {
    id: 8,
    stageNumber: "08 / 15",
    title: "Question 8 — The Magical Little Habits 👀🌸",
    environmentName: "Imperial Velvet Rose Garden",
    environmentSubtitle: "Deep scarlet damask roses, twilight mist, and golden trellis arbors",
    palette: {
      bgGradient: "from-[#2b080c] via-[#480f15] to-[#160205]",
      cardBorder: "border-red-400/40",
      cardBg: "bg-red-950/25",
      accentGlow: "rgba(248, 113, 113, 0.4)",
      primaryTone: "text-red-200",
      particleType: "roses",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-red-900 via-rose-950 to-stone-950",
      flapColor: "bg-red-800",
      innerLining: "bg-red-100",
      ribbonColor: "border-red-300 bg-red-400",
      waxSealColor: "bg-red-700 border-amber-300",
      waxSealSymbol: "🌹",
      stampText: "RED ROSE",
    },
    question: "Aapki sabse special habit kya hai? 👀🌸",
    options: [
      "“Aap chhoti-chhoti details yaad rakhti hain, especially woh baatein jo doosre log casually bolkar bhool jaate hain.” 🥹",
      "“Aap jab kisi ko genuinely care karti hain, toh woh care sirf words mein nahi, aapki little actions mein bhi clearly dikh jaati hai.” ❤️",
      "“Aapka random moments mein suddenly funny ya mischievous ho jaana, jisse normal conversation bhi ek cute memory ban jaati hai.” 😂🫣",
      "“Aapki sabse special habit shayad yahi hai ki aap bina realise kiye ordinary moments ko bhi thoda more memorable bana deti hain.” 🌷✨",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "Turning Ordinary Moments Into Magic! 🌷✨",
      subtitle: "Aapki presence hi aisi hai ki ek aam si baat bhi hamesha ke liye yaadgaar ban jaati hai.",
      hinglishVoice: "Krrish ka answer toh yehi tha! Aap bina kuch kiye bhi har lamhe ko special bana deti ho Habibiii! ❤️👀",
    },
    playfulResponses: {
      0: {
        title: "Remembering Every Little Detail 🥹",
        hint: "Itna thoughtful memory, par moments ko magic banane wali baat Option D mein hai! ✨",
        hinglishVoice: "Aapki ye aadat bohot dil ko chhooti hai Sahiba!",
      },
      1: {
        title: "Care Shown Through Little Actions ❤️",
        hint: "Genuine care is so rare, but turning ordinary to memorable in D is peak Aisha! 🌷",
        hinglishVoice: "Aapki care words se kayi guna zyada aapke gestures mein bolti hai!",
      },
      2: {
        title: "Mischievous & Unpredictably Funny 😂🫣",
        hint: "Cute mischievous moments, but Option D is the true heart stealer! 👑",
        hinglishVoice: "Aapka achanak se mischievous ho jaana conversation ka best part hota hai!",
      },
    },
    surprise: {
      title: "Surprise #8: Forever Blooming Crystal Rose",
      subtitle: "An everlasting petal dipped in 24k gold leaf",
      description: "A preserved deep burgundy rose encased in crystal, symbolizing timeless admiration.",
      icon: "🌹✨",
      poetry: "गुलाबों की महक भी आपकी सादगी पे फ़िदा है,\nआपकी हर एक अदा में कोई न कोई ख़ास अदा है। 🌹",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹",
  },

  // 09 — The Hall of Celestial Mirrors
  {
    id: 9,
    stageNumber: "09 / 15",
    title: "Question 9 — If Aisha Were A Destination 🌍✨",
    environmentName: "The Hall of Celestial Mirrors",
    environmentSubtitle: "Floor-to-ceiling gilded mirrors reflecting infinite starlight and glowing candles",
    palette: {
      bgGradient: "from-[#271d07] via-[#42310c] to-[#150f02]",
      cardBorder: "border-amber-300/40",
      cardBg: "bg-amber-950/25",
      accentGlow: "rgba(252, 211, 77, 0.4)",
      primaryTone: "text-amber-200",
      particleType: "crown",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-amber-700 via-yellow-800 to-amber-950",
      flapColor: "bg-amber-600",
      innerLining: "bg-amber-100",
      ribbonColor: "border-yellow-200 bg-amber-400",
      waxSealColor: "bg-amber-600 border-yellow-200",
      waxSealSymbol: "👑",
      stampText: "MIRROR 9",
    },
    question: "Agar aapki personality ek place hoti, toh kaisi hoti? 🌍✨",
    options: [
      "“Ek peaceful garden jahan flowers ho, halki hawa ho aur jahan pahunchte hi mind ko thoda sukoon milne lage.” 🌷🍃",
      "“Ek cozy café jahan soft music ho, warm lights ho aur hours tak baithkar random conversations ki ja sakein.” ☕🎶",
      "“Ek beautiful sunset spot jahan colours constantly change hote rahein, but har moment mein kuch naya beautiful dikhe.” 🌅❤️",
      "“Ek aisi jagah jahan pehle sukoon milta hai, phir comfort, phir hasi… aur thodi der baad realise hota hai ki yahan se jaane ka mann hi nahi kar raha.” 🥹🌸",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "A Place You Never Want to Leave! 🥹🌸",
      subtitle: "Pehle sukoon, phir comfort, phir hasi… aur phir mann karta hai waqt wahi thehar jaaye.",
      hinglishVoice: "Krrish ka answer toh kaafi pehle se fix tha Habibiii! Aapke paas jo sukoon hai, woh kisi aur jagah mil hi nahi sakta! ❤️✨",
    },
    playfulResponses: {
      0: {
        title: "Fragrant Peaceful Garden 🌷🍃",
        hint: "Sukoon toh garden jaisa hai, par wahan se jaane ka mann na kare woh feeling D mein hai! 🥹",
        hinglishVoice: "Halki thandi hawa aur sukoon bhara ehsaas!",
      },
      1: {
        title: "Cozy Late Night Café ☕🎶",
        hint: "Warm lights and endless talks, but the magnetic comfort in D is unbeatable! 🌸",
        hinglishVoice: "Ghar jaisi warmth aur dilchasp baatein!",
      },
      2: {
        title: "Ever-changing Golden Sunset 🌅",
        hint: "Har pal naya rang, but Option D captures your entire soul! ❤️",
        hinglishVoice: "Jitni baar dekho, har baar ek naya noor nazar aata hai!",
      },
    },
    surprise: {
      title: "Surprise #9: Handcrafted Rose-Gold Tiara Charm",
      subtitle: "A sparkling emblem of your innate royalty",
      description: "A dainty rose-gold tiara charm with delicate filigree leaves, honoring your grace and poise.",
      icon: "🪞👑",
      poetry: "आईना भी जब देखे आपको तो मुस्कुरा दे,\nआपकी मासूमियत सारे जहाँ को अपना बना ले। ✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞",
  },

  // 10 — Starlit Midnight Observatory
  {
    id: 10,
    stageNumber: "10 / 15",
    title: "Question 10 — Soft, Strong & Royal 👸🏻",
    environmentName: "Starlit Midnight Observatory",
    environmentSubtitle: "A crystal glass dome open to constellations, shooting stars, and nebulae",
    palette: {
      bgGradient: "from-[#081229] via-[#0d2146] to-[#040817]",
      cardBorder: "border-sky-300/40",
      cardBg: "bg-sky-950/25",
      accentGlow: "rgba(56, 189, 248, 0.4)",
      primaryTone: "text-sky-200",
      particleType: "clouds",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-sky-900 via-blue-950 to-indigo-950",
      flapColor: "bg-sky-800",
      innerLining: "bg-sky-100",
      ribbonColor: "border-sky-300 bg-sky-300/80",
      waxSealColor: "bg-sky-700 border-amber-300",
      waxSealSymbol: "⭐",
      stampText: "STARLIT 10",
    },
    question: "Aishaaa ko khud mein sabse zyada kya impress karta hai? 👸🏻",
    options: [
      "“Mujhe pasand hai ki main emotional hoon, kyunki mujhe cheezon aur logon ki genuinely care karna aata hai.” 🥹❤️",
      "“Mujhe pasand hai ki main apni individuality maintain karti hoon, chahe saamne wale ki expectations kuch bhi kyun na ho.” ✨",
      "“Mujhe pasand hai ki main serious situations mein bhi apni little sense of humour nahi bhoolti, warna life kaafi boring ho jaati.” 😂🌸",
      "“Mujhe apne andar woh balance pasand hai jahan main soft bhi ho sakti hoon, strong bhi, emotional bhi aur zarurat padne par thodi si dangerous bhi.” 😭👸🏻",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "Soft, Strong & Thodi Si Dangerous! 😭👸🏻",
      subtitle: "Ye royal balance hi toh Aisha ko duniya ki sabse unique aur royal personality banata hai!",
      hinglishVoice: "Krrish ka answer toh bilkul yehi fix tha! Danger alert ke saath cuteness ka royal tadka! 🫣❤️",
    },
    playfulResponses: {
      0: {
        title: "Pure Empathetic Heart 🥹❤️",
        hint: "Care karna sabse badi power hai, par dangerous wali ada Option D mein hai! 😂",
        hinglishVoice: "Aapka emotional hona aapki weakness nahi, sabse badi khoobsurti hai!",
      },
      1: {
        title: "Unshakable Individuality ✨",
        hint: "Apni shart pe jeena, par the full balance in D is unmatched! 👸🏻",
        hinglishVoice: "Aap jaisi ho, waise hi rehna aapka sabse bada charm hai!",
      },
      2: {
        title: "Sense of Humour in Any Situation 😂🌸",
        hint: "Life boring nahi hone deti, but Option D's balance is lethal! 😭",
        hinglishVoice: "Mushkil waqt mein bhi muskurana aur hasaana sirf aapko aata hai!",
      },
    },
    surprise: {
      title: "Surprise #10: A Named Star Certificate: Aisha Borealis",
      subtitle: "Registered in the celestial registry of wonder",
      description: "A golden-foil star deed mapping coordinates to a radiant star named in honor of Doctor Aisha.",
      icon: "⭐📜",
      poetry: "सितारे तो फलक पे बहुत चमकते हैं रात भर,\nपर आपकी मौजूदगी से रौशन है दिल का हर शहर। ⭐✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐",
  },

  // 11 — Golden Lantern Courtyard
  {
    id: 11,
    stageNumber: "11 / 15",
    title: "Question 11 — Memories Forever Captured 📸❤️",
    environmentName: "Golden Lantern Courtyard",
    environmentSubtitle: "Floating brass diyas, warm amber lights, and fragrant marigold arches",
    palette: {
      bgGradient: "from-[#291605] via-[#452408] to-[#140a02]",
      cardBorder: "border-amber-400/40",
      cardBg: "bg-amber-950/25",
      accentGlow: "rgba(245, 158, 11, 0.4)",
      primaryTone: "text-amber-100",
      particleType: "diya",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-amber-700 via-orange-900 to-amber-950",
      flapColor: "bg-amber-600",
      innerLining: "bg-amber-100",
      ribbonColor: "border-yellow-200 bg-amber-400",
      waxSealColor: "bg-amber-600 border-yellow-200",
      waxSealSymbol: "🪔",
      stampText: "DIYAS 11",
    },
    question: "Aishaaa, agar aapko apni ek memory forever capture karni ho, toh kya capture karogi? 📸❤️",
    options: [
      "“Woh moment jab main itna genuinely hansi thi ki mujhe camera, surroundings aur duniya ki kisi cheez ki fikr hi nahi thi.” 😂🌸",
      "“Woh beautiful moment jab main kisi peaceful jagah par thi, favourite music chal raha tha aur bas mann kar raha tha ki time wahi ruk jaaye.” 🌅🎶",
      "“Woh random memory jo us waqt bilkul normal lagi thi, lekin baad mein realise hua ki wahi moments toh life ke sabse precious parts ban jaate hain.” 🥹🌷",
      "“Shayad woh moment jab main kisi apne ke saath bina kisi reason ke has rahi thi… aur agar us memory mein Krrish bhi ho, toh usse delete karne ka option toh bilkul nahi chahiye. 🫣❤️”",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "Never To Be Deleted Forever! 📸❤️",
      subtitle: "Krrish ke saath ki hasi aur yaadein zindagi ka sabse priceless hissa hain.",
      hinglishVoice: "Krrish ka answer toh kaafi pehle se fix tha Habibiii! Ye memory dil ke safe mein hamesha locked rahegi! 🫣❤️",
    },
    playfulResponses: {
      0: {
        title: "Carefree Unfiltered Laughter 😂🌸",
        hint: "Dil khol kar hasna, lekin agar Krrish saath ho toh Option D lock ho jata hai! 🫣",
        hinglishVoice: "Aapki aisi hasi capture ho jaye toh koi bhi frame sharma jaye!",
      },
      1: {
        title: "Time Standing Still 🌅🎶",
        hint: "Time rukne ka ehsaas, par Option D wali company is forever special! ❤️",
        hinglishVoice: "Peaceful jagah aur music, truly aesthetic memory!",
      },
      2: {
        title: "Ordinary Moments Turned Golden 🥹🌷",
        hint: "Aam lamhe jo khaas ban gaye, par Option D ko toh delete karne ka button hi nahi hai! 🙈",
        hinglishVoice: "Random moments hi toh baad mein sabse zyada yaad aate hain!",
      },
    },
    surprise: {
      title: "Surprise #11: The Golden Vintage Polaroid & Forever Locket",
      subtitle: "Preserving that unprompted laughter forever",
      description: "A timeless golden polaroid charm capturing that genuine, carefree laugh with Krrish—never to be deleted, forever cherished.",
      icon: "📸❤️",
      poetry: "हँसी आपकी जैसे कोई खूबसूरत नज़्म हो,\nकाश हर लम्हे में बस आपका ही करम हो। 📸✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐🪔",
  },

  // 12 — Magical Butterfly Tunnel
  {
    id: 12,
    stageNumber: "12 / 15",
    title: "Question 12 — Truly Happy Aisha 🥹🌸",
    environmentName: "Magical Butterfly Tunnel",
    environmentSubtitle: "An endless archway of glowing petals, mystical fireflies, and fluttering butterflies",
    palette: {
      bgGradient: "from-[#1d0b30] via-[#351052] to-[#10031c]",
      cardBorder: "border-purple-300/40",
      cardBg: "bg-purple-950/25",
      accentGlow: "rgba(192, 132, 252, 0.4)",
      primaryTone: "text-purple-200",
      particleType: "tunnel",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-purple-800 via-fuchsia-950 to-indigo-950",
      flapColor: "bg-purple-700",
      innerLining: "bg-purple-100",
      ribbonColor: "border-purple-200 bg-fuchsia-400",
      waxSealColor: "bg-purple-600 border-amber-300",
      waxSealSymbol: "🦋",
      stampText: "TUNNEL 12",
    },
    question: "Aapka “I am actually happy” version kaisa hota hai? 🥹🌸",
    options: [
      "“Main zyada smile karti hoon, chhoti-chhoti baaton par excited ho jaati hoon aur somehow poora din thoda brighter lagne lagta hai.” 😊✨",
      "“Main zyada baatein karti hoon, random stories share karti hoon aur saamne wale ko bhi apne happiness ka part bana leti hoon.” 😂❤️",
      "“Mera face hi sab bata deta hai… chahe main kuch bolun ya nahi, meri eyes aur smile already poori story reveal kar deti hain.” 👀🌷",
      "“Aur kabhi-kabhi Krrish ka ek random message, ek funny baat ya bas uska ‘Habibiii’ keh dena bhi mood ko unnecessarily achha kar deta hai… pata nahi kyun. 🫣❤️”",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "Bas Ek ‘Habibiii’ Aur Saara Mood Bright! 🥹❤️",
      subtitle: "Jab ek chhota sa message aur aawaz chehre par bina reason ke chamak le aaye.",
      hinglishVoice: "Krrish ka answer toh 100% yahi fix tha! 'Pata nahi kyun' bolkar sharmaane ki zarurat nahi hai Habibiii! 🫣❤️",
    },
    playfulResponses: {
      0: {
        title: "Radiant & Excited Aisha! 😊✨",
        hint: "Excitement bohot pyari hai, par 'Habibiii' wale magic ko dekho Option D mein! 🫣",
        hinglishVoice: "Aap khush hoti ho toh surroundings apne aap roshan ho jaati hain!",
      },
      1: {
        title: "Non-stop Stories & Chatterbox Vibes 😂❤️",
        hint: "Random stories share karna, par Option D's connection is something else! ✨",
        hinglishVoice: "Aapki baatein sunne ka alag hi maza hai jab aap khush hoti ho!",
      },
      2: {
        title: "Expressive Eyes & Radiant Face 👀🌷",
        hint: "Aankhein sab bolti hain, par Krrish ka ek message sab theek kar deta hai (Option D)! ❤️",
        hinglishVoice: "Aapka chehra ek open book ban jata hai jab aap sach mein happy hoti ho!",
      },
    },
    surprise: {
      title: "Surprise #12: The 'Habibiii' Whisper Box & Golden Key",
      subtitle: "Unlocking instant smiles across any distance",
      description: "A miniature music box that plays a warm chime whenever a random message or 'Habibiii' lights up your phone screen.",
      icon: "🦋💬",
      poetry: "एक लफ़्ज़ 'हबीबी' और चेहरे पे वो मुस्कान आ जाना,\nकितना आसान है आपकी सादगी का कायल हो जाना। 🥹❤️",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐🪔🎬",
  },

  // 13 — Flower Celebration Hall
  {
    id: 13,
    stageNumber: "13 / 15",
    title: "Question 13 — The Perfect Evening 🌅👀",
    environmentName: "Flower Celebration Hall",
    environmentSubtitle: "Grand cascading floral arches, sparkling crystal chandeliers, and silk drapes",
    palette: {
      bgGradient: "from-[#29170e] via-[#472615] to-[#140a04]",
      cardBorder: "border-rose-300/40",
      cardBg: "bg-rose-950/25",
      accentGlow: "rgba(251, 146, 60, 0.4)",
      primaryTone: "text-amber-100",
      particleType: "floralHall",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-amber-700 via-rose-900 to-amber-950",
      flapColor: "bg-amber-600",
      innerLining: "bg-rose-100",
      ribbonColor: "border-yellow-200 bg-amber-400",
      waxSealColor: "bg-rose-600 border-yellow-200",
      waxSealSymbol: "💐",
      stampText: "GRAND HALL",
    },
    question: "Aishaaa, agar aapko kisi ek person ke saath ek perfect evening spend karni ho, toh kya choose karogi? 🌅👀",
    options: [
      "“Ek peaceful sunset, thodi thandi hawa, favourite music aur bina kisi rush ke bas long conversations.” 🌅🎶",
      "“Kahin favourite food ke liye jaana, random pictures click karna, bahut saari bak-bak karna aur beech-beech mein unnecessary laughing.” 😂🌷",
      "“Kisi quiet place par baithkar life, dreams, future aur woh saari baatein karna jo normally har kisi ke saath share nahi hoti.” 🥹❤️",
      "“Honestly, place itni important nahi hai… agar company Krrish ki ho, toh momos, sunset, long drive ya bas ek normal walk bhi unnecessarily special ban sakti hai. 🫣❤️”",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "Momos, Sunsets & Krrish’s Company! 🌅🫣❤️",
      subtitle: "Jagah koi bhi ho, company agar sahi ho toh ek aam walk bhi sapna ban jaati hai.",
      hinglishVoice: "Krrish ka answer toh kaafi pehle se fix hai Habibiii! Momos aur long walks with you are officially on the royal calendar! 🥟❤️",
    },
    playfulResponses: {
      0: {
        title: "Sunset & Long Conversations 🌅🎶",
        hint: "Thandi hawa aur music, lekin company kiski honi chahiye? Check Option D! 🫣",
        hinglishVoice: "Bina kisi rush ke ghanto baatein karna, sounds dreamy!",
      },
      1: {
        title: "Foodie Outing & Infinite Laughs 😂🌷",
        hint: "Food aur bak-bak, par Krrish ke saath momos wali walk in Option D hits different! 🥟",
        hinglishVoice: "Random photos aur bina matlab hasna is top tier therapy!",
      },
      2: {
        title: "Deep Secrets & Quiet Dreams 🥹❤️",
        hint: "Dil ki baatein jo sabse nahi hoti, par company toh Option D mein confirm hai! ✨",
        hinglishVoice: "Sukoon se baithkar future aur dreams discuss karna is pure intimacy!",
      },
    },
    surprise: {
      title: "Surprise #13: Royal Sunset & Steaming Momos Invitation",
      subtitle: "Valid for endless conversations and zero rush",
      description: "An imperial golden pass for a quiet sunset, long drive, steaming hot momos, and countless unfiltered laughs with Krrish.",
      icon: "🌅🥟",
      poetry: "शाम ढले और साथ तुम्हारा हो तो क्या बात है,\nचाय, मोमोज़ और बातों का सिलसिला ही तो सौगात है। 🌅✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐🪔🎬🏰",
  },

  // 14 — Grand Royal Birthday Setup
  {
    id: 14,
    stageNumber: "14 / 15",
    title: "Question 14 — Krrish Mein Kya Achha Lagta Hai? 👀❤️",
    environmentName: "Grand Royal Birthday Setup",
    environmentSubtitle: "Imperial palace chamber, towering golden crowns, and glittering diamond chandeliers",
    palette: {
      bgGradient: "from-[#2e1509] via-[#4d250d] to-[#180902]",
      cardBorder: "border-amber-300/50",
      cardBg: "bg-amber-950/30",
      accentGlow: "rgba(251, 191, 36, 0.5)",
      primaryTone: "text-amber-200",
      particleType: "grandRoyal",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-amber-600 via-yellow-700 to-amber-950",
      flapColor: "bg-amber-500",
      innerLining: "bg-yellow-100",
      ribbonColor: "border-yellow-200 bg-amber-300",
      waxSealColor: "bg-amber-500 border-yellow-100",
      waxSealSymbol: "👑",
      stampText: "PENULTIMATE",
    },
    question: "Aishaaa, agar koi aapko puchhe ki ‘Krrish mein aapko kya achha lagta hai?’ toh aap kya kahogi? 👀❤️",
    options: [
      "“Uska way of talking… kabhi serious, kabhi funny, aur kabhi bina reason ke itni bak-bak ki bas sunte raho.” 😂🌸",
      "“Uska woh effort notice karna achha lagta hai jo shayad woh khud casually karta hai, but saamne wale ko genuinely special feel karwa deta hai.” 🥹❤️",
      "“Uski shayari aur woh words jo kabhi-kabhi normal compliment se zyada dil tak pahunch jaate hain… especially jab pata ho ki woh specially mere liye likhe gaye hain.” ✍🏻🌷",
      "“Shayad sabse zyada yahi ki Krrish sirf ek person banke nahi raha… dheere-dheere woh meri life ka ek aisa हिस्सा ban gaya jiska hona ab genuinely achha lagta hai.” 🫣❤️",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "Zindagi Ka Sabse Khoobsurat Hissa! 🫣❤️",
      subtitle: "Krrish sirf ek shakhs nahi, ab aapki muskurahaton aur zindagi ka ek ahem hissa hai.",
      hinglishVoice: "Krrish ka answer toh kaafi pehle se fix tha Habibiii… aur ye line padh kar Krrish ka dil bhi melt ho gaya! 🥹❤️",
    },
    playfulResponses: {
      0: {
        title: "Uska Bak-Bak Aur Funny Andaaz 😂🌸",
        hint: "Baatein toh bohot karta hai, par uska zindagi ka hissa ban jaana in D is deepest! 🫣",
        hinglishVoice: "Kabhi serious, kabhi clown, sunte sunte time ka pata nahi chalta!",
      },
      1: {
        title: "Noticeable Gentle Efforts 🥹❤️",
        hint: "Efforts dil chhoo lete hain, par Option D mein jo connect hai uska koi muqabla nahi! ✨",
        hinglishVoice: "Chhoti baatein notice karke special feel karwana Krrish ka signature style hai!",
      },
      2: {
        title: "Khaas Shayari & Dil Se Likhe Alfaaz ✍🏻🌷",
        hint: "Shayari sirf aapke liye, par Option D wali line seedha dil mein utar gayi! ❤️",
        hinglishVoice: "Aapke liye likhe hue lafz hamesha dil se aate hain Sahiba!",
      },
    },
    surprise: {
      title: "Surprise #14: The Bond of Unspoken Comfort",
      subtitle: "More than just a person—an indispensable part of life",
      description: "A handcrafted twin-heart pendant representing how effortlessly Krrish became a cherished part of your everyday happiness.",
      icon: "🫶🏻👑",
      poetry: "कोई यूँ ही नहीं बन जाता ज़िंदगी का हिस्सा,\nआपसे जुड़ कर मुकम्मल हुआ ये खूबसूरत क़िस्सा। 🥹❤️",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐🪔🎬🏰💎",
  },

  // 15 — Ultimate Birthday Reveal
  {
    id: 15,
    stageNumber: "15 / 15",
    title: "Question 15 — The Ultimate Mystery: How Special You Are 👸🏻❤️",
    environmentName: "The Grand Royal Climax",
    environmentSubtitle: "The most cinematic, emotional and luxurious environment of the entire universe",
    palette: {
      bgGradient: "from-[#1d0628] via-[#3c0c45] to-[#0d0114]",
      cardBorder: "border-amber-300/60",
      cardBg: "bg-fuchsia-950/35",
      accentGlow: "rgba(234, 179, 8, 0.6)",
      primaryTone: "text-amber-100",
      particleType: "reveal",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-amber-600 via-rose-900 to-indigo-950",
      flapColor: "bg-amber-500",
      innerLining: "bg-amber-100",
      ribbonColor: "border-yellow-200 bg-amber-300",
      waxSealColor: "bg-amber-500 border-yellow-200",
      waxSealSymbol: "💖",
      stampText: "GRAND FINALE",
    },
    question: "Aur lastly Aishaaa… aapko pata hai ki aap kitni special hain? 👸🏻❤️",
    options: [
      "“Haan, mujhe pata hai ki main special hoon, kyunki meri life mein kuch aise log hain jo mujhe genuinely important feel karwate hain… aur Krrish unmein se ek hai.” 🌷🥹",
      "“Shayad mujhe poori tarah realise nahi hai, but jab koi meri chhoti-chhoti baatein yaad rakhta hai, meri smile ka reason banna chahta hai aur bina kisi reason ke mujhe special feel karwata hai… toh haan, thoda special toh feel hota hai.” 🫣❤️",
      "“Mujhe lagta hai har insaan ki apni uniqueness hoti hai, aur meri life mein Krrish jaise log us uniqueness ko aur beautiful bana dete hain… kyunki kabhi-kabhi kisi ka aapko dekhne ka nazariya bhi aapko khud se aur pyaar karna sikha deta hai.” 🥹🌸",
      "“Honestly… shayad mujhe khud bhi nahi pata ki main kitni special hoon. But agar Krrish jis tarah meri smile, meri awaaz, meri chhoti-chhoti baaton aur meri personality ko notice karta hai, us nazar se khud ko kabhi dekh paun… toh shayad samajh aa jaaye ki kisi ke liye special hona actually kitni beautiful feeling hai. 🫣❤️”",
    ],
    complimentaryIndex: 3,
    complimentaryResponse: {
      title: "You Are Priceless Beyond Words, Aishaaa! 👸🏻💖",
      subtitle: "Krrish ki nazron se dekhogi toh pata chalega ki aap poori kayinaat mein sabse haseen aur anmol ho.",
      hinglishVoice: "SHAYAD AAPKO ANSWER PATA HO HABIBIII… LEKIN KRRISH KA ANSWER TOH KAAFI PEHLE SE FIX HAI! You are truly, endlessly special! Ab waqt hai aapke Grand Finale ka! 👑🎉💖",
    },
    playfulResponses: {
      0: {
        title: "Genuinely Important & Cherished 🌷🥹",
        hint: "Log special feel karwate hain, par Krrish ki nazron se dekhne wali feeling Option D mein hai! 🫣",
        hinglishVoice: "Aap special ho kyunki aapka dil itna saaf aur pyaara hai!",
      },
      1: {
        title: "A Precious Realization 🫣❤️",
        hint: "Chhoti baatein yaad rakhna, par Option D tells the deepest truth ever written! 💖",
        hinglishVoice: "Aapki har choti baat yaad rakhne ka mann karta hai!",
      },
      2: {
        title: "Seeing Beauty Through Love's Lens 🥹🌸",
        hint: "Uniqueness is true, but Option D is Krrish's ultimate fixed answer for you! 👑",
        hinglishVoice: "Khud se pyaar karna seekhna hi sabse khoobsurat journey hai!",
      },
    },
    surprise: {
      title: "Surprise #15: The Mirror of Krrish's Eyes",
      subtitle: "Seeing how precious you truly are to the world",
      description: "A gilded hand-mirror inscribed: 'Look into this, and see what Krrish sees—the most precious, beautiful, and irreplaceable soul in the universe.'",
      icon: "🪞👑💖",
      poetry: "आप खास हैं, ये बताने की जरूरत नहीं हमें,\nआपकी मुस्कान ही काफी है इस जहां को महकाने के लिए। 👸🏻✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐🪔🎬🏰💎💖",
  },
];
