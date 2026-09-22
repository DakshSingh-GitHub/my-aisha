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
    title: "Question 1 — Birthday Princess",
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
    question: "Who is looking the prettiest and most graceful in the entire universe today?",
    options: [
      "Obviously YOU, Doctor Aisha! 👑",
      "Definitely not you",
      "I need to consult a mirror first",
      "Someone else on this planet",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Obviously YOU! 👑✨",
      subtitle: "The mirror didn't even hesitate for a microsecond!",
      hinglishVoice: "Bilkul sahi jawab! Aaj toh chaand bhi aapse jealous feel kar raha hai, Sahiba! 🌸✨",
    },
    playfulResponses: {
      1: {
        title: "Arre Sahiba… itna bhi doubt? 😭😂",
        hint: "स्वर्ग से उतरी हुई अप्सरा लग रही हो… ab answer samajh aaya? 👑✨",
        hinglishVoice: "Ye answer galat kaise ho sakta hai? Khud ko camera mein dekho zara!",
      },
      2: {
        title: "Mirror consult karna mana hai! 🪞🙅‍♀️",
        hint: "Hint: Mirror khud bolega 'Aisha Sahiba se zyaada pyara koi nahi!' 🌷",
        hinglishVoice: "Mirror bhi aapse sharma kar toot na jaaye!",
      },
      3: {
        title: "Someone else? No way! 🙅‍♀️👑",
        hint: "Hint: Is dharti par sirf ek hi Princess Aisha hain! ✨",
        hinglishVoice: "Ye option select karna scientifically impossible hai!",
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
    title: "Question 2 — The Doctor Aura",
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
    question: "When Doctor Aisha walks into a room or clinic, what immediately happens?",
    options: [
      "Everyone’s heartbeat cures instantly! 🩺✨",
      "Absolute confusion and chaos",
      "Nothing special at all",
      "People start checking their watches",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Healing Radiance! 🩺💖",
      subtitle: "Who needs prescriptions when a single smile heals everything?",
      hinglishVoice: "Madam, aapki presence hi aisi hai ki adha dard toh muskuraahat dekh ke gayab ho jata hai! 👑✨",
    },
    playfulResponses: {
      1: {
        title: "Confusion? Sirf aapke noor se! 💫",
        hint: "Hint: Stethoscope bhi bolta hai 'Sahiba ki smile best medicine hai!'",
        hinglishVoice: "Arre Doctor Sahiba, chaos nahi, sab log bas admire karne lagte hain!",
      },
      2: {
        title: "Nothing special? Jhooth pakda gaya! 🙈",
        hint: "Hint: Your elegance lights up even the coldest hospital corridors!",
        hinglishVoice: "Aap walk karo aur notice na ho? Impossible physics!",
      },
      3: {
        title: "Watches dekhna band ho jata hai! ⏳",
        hint: "Hint: Time stops for the royal princess!",
        hinglishVoice: "Aapke aate hi time tham jata hai, Sahiba!",
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
    title: "Question 3 — Sweet Habits",
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
    question: "What is Aisha’s official superpower when she decides to be adorable?",
    options: [
      "Can get away with literally ANYTHING with one puppy pout 🥺✨",
      "She never does cute things",
      "She gives serious medical lectures only",
      "None, she is completely strict",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Unstoppable Cuteness! 🥺🦋",
      subtitle: "Even the Supreme Court would dismiss all charges instantly.",
      hinglishVoice: "Ye pout dekha aur koi na nahi bol saka! World record cute habit! 😂👑",
    },
    playfulResponses: {
      1: {
        title: "Never cute? Are you kidding! 😆",
        hint: "Hint: You are the brand ambassador of effortless cuteness!",
        hinglishVoice: "Arre Sahiba, mirror ko jhooth bolna sikhaya hai kya?",
      },
      2: {
        title: "Sirf lectures? Kabhi nahi! 🩺",
        hint: "Hint: Doctor vibes ke peeche ek sweet naughty princess chhupi hai!",
        hinglishVoice: "Lecture dete hue bhi itni pyaari lagogi toh patient theek kaise na ho!",
      },
      3: {
        title: "Strict? Only when patients skip meds! 💊",
        hint: "Hint: Option 1 is 100% verified by royal decree!",
        hinglishVoice: "Aap strict banne ki acting karo tab bhi cute lagti ho!",
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
    title: "Question 4 — Desi Elegance & Jhumkas",
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
    question: "When Aisha wears traditional Indian attire with Jhumkas, what is the public verdict?",
    options: [
      "Royal Maharani vibes: 1000/10 sheer poetry! 🥻✨",
      "She looks okay-ish",
      "Western outfits suit better",
      "Jhumkas are too noisy anyway",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Pure Royal Maharani! 🥻👑",
      subtitle: "Poets literally run out of ink trying to describe the grace!",
      hinglishVoice: "Aap jhumke pehno aur hum ghayal na hon? Ye toh Indian history mein kabhi nahi hua! 🪔✨",
    },
    playfulResponses: {
      1: {
        title: "Okay-ish?! Crime alert! 🚨",
        hint: "Hint: 'स्वर्ग से उतरी हुई अप्सरा' vibes exist solely for you!",
        hinglishVoice: "Arre Sahiba, itna injustice apne khud ke look ke saath? Nafrat hai is option se! 😂",
      },
      2: {
        title: "Both suit, but desi is magical! 💫",
        hint: "Hint: Traditional look mein aap direct palace se aayi lagti hain!",
        hinglishVoice: "Desi attire mein jo noor hai, uska koi muqabla nahi!",
      },
      3: {
        title: "Jhumkas sing melodies! 🎶",
        hint: "Hint: The jhumka chime is the rhythm of your royal presence!",
        hinglishVoice: "Jhumke shor nahi, aapki tareef mein taaliyan bajate hain!",
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

  // 05 — Lotus Pond
  {
    id: 5,
    stageNumber: "05 / 15",
    title: "Question 5 — Pure Heart & Healing",
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
    question: "What shines brightest in Doctor Aisha’s heart?",
    options: [
      "Unconditional empathy, genuine warmth, and a pure healing soul 🪷💖",
      "Only stethoscope sounds",
      "A desire to finish work quickly",
      "She keeps her heart locked in a safe",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Purity of a Sacred Lotus 🪷💫",
      subtitle: "The rarest combination: sharp medical intellect with an angelic gentle heart.",
      hinglishVoice: "Aapka dil itna saaf hai jaise subah ka paani aur lotus petals! Truly a blessing! 🤍",
    },
    playfulResponses: {
      1: {
        title: "Stethoscope sounds? Haha! 🩺",
        hint: "Hint: Your heartbeat is filled with kindness for every living soul!",
        hinglishVoice: "Stethoscope sirf heart rate batata hai, aapka warm nature dil se aata hai!",
      },
      2: {
        title: "Finish work? Dedication is real! 💼",
        hint: "Hint: You always go above and beyond for people around you!",
        hinglishVoice: "Aap toh thak kar bhi sabka khayal rakhti hain, Sahiba!",
      },
      3: {
        title: "Safe mein locked? Chabi toh khul gayi! 🔑",
        hint: "Hint: Your warmth melts every cold barrier effortlessly!",
        hinglishVoice: "Aapka dil sabse generous aur warm hai!",
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
    title: "Question 6 — Late Night Thoughts & Chai",
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
    question: "If Aisha is given a quiet moonlit evening, what is her dream luxury vibe?",
    options: [
      "A cozy cup of Elaichi Chai, peaceful music, and zero alarms! ☕🌙",
      "Reading 800 pages of medical pharmacology textbooks",
      "Running a marathon in high heels",
      "Staring blankly at a wall",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Royal Peace & Elaichi Chai! ☕✨",
      subtitle: "Uninterrupted peaceful slumber and aesthetic vibes approved.",
      hinglishVoice: "Doctor sahab ko ek din bina emergency calls aur alarms ke chain ki neend milni hi chahiye! 🌙👑",
    },
    playfulResponses: {
      1: {
        title: "Pharmacology textbook?! Reham karo! 📚😭",
        hint: "Hint: Birthday par no studies allowed! Only royal pampering!",
        hinglishVoice: "Arre aaj toh pharmacology ko chhutti de do Sahiba!",
      },
      2: {
        title: "Marathon in heels? Paanv dard ho jayenge! 👠",
        hint: "Hint: Princesses relax on soft cushions, they don't do marathons!",
        hinglishVoice: "Heels bas photos ke liye theek hain, daudne ke liye nahi! 😂",
      },
      3: {
        title: "Staring at a wall? Wall bhi bored ho jayegi! 🧱",
        hint: "Hint: You deserve romantic cozy aesthetic peace!",
        hinglishVoice: "Aap itni interesting ho, wall dekhna match nahi karta!",
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

  // 07 — Colorful Birthday Room
  {
    id: 7,
    stageNumber: "07 / 15",
    title: "Question 7 — Birthday Cravings",
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
      baseColor: "bg-gradient-to-br from-rose-700 via-fuchsia-900 to-rose-950",
      flapColor: "bg-rose-600",
      innerLining: "bg-rose-100",
      ribbonColor: "border-rose-200 bg-pink-500",
      waxSealColor: "bg-rose-600 border-amber-300",
      waxSealSymbol: "🎂",
      stampText: "SWEET B-DAY",
    },
    question: "When it comes to birthday cake and desserts, what is Aisha’s official policy?",
    options: [
      "Calories don’t count on a Princess’s Birthday — bring the biggest chocolate slice! 🎂🍫",
      "She will only eat boiled spinach and drink warm water",
      "She calculates the glycemic index and refuses to touch it",
      "Cake is strictly forbidden by doctor's orders",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Zero Calories on Royal Birthdays! 🎂😋",
      subtitle: "Doctor's orders have been officially overridden by Birthday Princess jurisdiction!",
      hinglishVoice: "Aaj ke din sugar level nahi, khushiyon ka level check hoga! Extra slice banta hai! 🍰✨",
    },
    playfulResponses: {
      1: {
        title: "Boiled spinach?! Aaj toh nahi! 🥗🙅‍♀️",
        hint: "Hint: Treat yourself like the queen you are!",
        hinglishVoice: "Sahiba, birthday par spinach? Itna bhi healthy mat bano!",
      },
      2: {
        title: "Glycemic Index calculation banned! 🚫",
        hint: "Hint: Birthday cake is 100% vitamins of happiness!",
        hinglishVoice: "Doctor dimaag side mein rakh kar cake ka lutf uthaiye!",
      },
      3: {
        title: "Strictly forbidden? Not on my watch! 🧁",
        hint: "Hint: Today the universe sends sweet treats for you!",
        hinglishVoice: "Forbidden word hi dictionary se hata diya gaya hai aaj!",
      },
    },
    surprise: {
      title: "Surprise #7: Miniature Royal Birthday Cupcake",
      subtitle: "Layered with Belgian ganache and edible 24k gold leaf",
      description: "A decadent virtual birthday treat with a golden candle ready to make your deepest wish come true.",
      icon: "🎂✨",
      poetry: "मिठास तो बहुत है बाज़ार की हर एक मिठाई में,\nपर वो बात कहाँ जो आपकी एक अंगड़ाई और मुस्कुराहट में। 🍰",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂",
  },

  // 08 — Elegant Rose Garden
  {
    id: 8,
    stageNumber: "08 / 15",
    title: "Question 8 — Unmatched Radiance",
    environmentName: "Imperial Rose Garden",
    environmentSubtitle: "Crimson damask roses, velvety dewdrops, and romantic mist",
    palette: {
      bgGradient: "from-[#26050e] via-[#450917] to-[#140106]",
      cardBorder: "border-red-400/40",
      cardBg: "bg-red-950/25",
      accentGlow: "rgba(248, 113, 113, 0.4)",
      primaryTone: "text-red-200",
      particleType: "roses",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-red-800 via-rose-950 to-red-950",
      flapColor: "bg-red-700",
      innerLining: "bg-rose-100",
      ribbonColor: "border-red-300 bg-red-500",
      waxSealColor: "bg-red-700 border-amber-300",
      waxSealSymbol: "🌹",
      stampText: "RED ROSE",
    },
    question: "If roses could talk in this garden, what would they whisper as Aisha passes by?",
    options: [
      "“Dekho, humse bhi zyaada haseen aur naazuk koi aa gaya!” 🌹👑",
      "“Please don’t step on our thorns”",
      "“We don’t care about birthdays”",
      "“Who turned off the garden sprinkler?”",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Even the Roses Bow Down! 🌹✨",
      subtitle: "Unmatched elegance that makes nature itself take notes.",
      hinglishVoice: "Sahi pakde hain! Gulab bhi aapse compliment mangne lag gaye hain aaj! 🌹💖",
    },
    playfulResponses: {
      1: {
        title: "Thorns? Aapsay darenge! 🌵",
        hint: "Hint: Flowers bloom brighter when you come near!",
        hinglishVoice: "Gulab aapse ladenge nahi, aapke raste mein bichh jayenge!",
      },
      2: {
        title: "Don't care? Nature is celebrating! 🌸",
        hint: "Hint: Today entire nature is tuned to Aisha Sahiba's birthday frequency!",
        hinglishVoice: "Poori garden celebrate kar rahi hai, ye option toh bogus hai!",
      },
      3: {
        title: "Sprinkler joke?! 🚿😂",
        hint: "Hint: Choose the poetic truth option!",
        hinglishVoice: "Itna romantic garden aur sprinkler ki chinta? Sahiba please!",
      },
    },
    surprise: {
      title: "Surprise #8: Preserved Crimson Velvet Rose",
      subtitle: "A bloom that will never fade in time",
      description: "An eternal enchanted rose encapsulated in crystal glass, radiating warmth and affection.",
      icon: "🌹✨",
      poetry: "हज़ारों गुलाब देखे होंगे इस ज़माने ने,\nपर ऐसा महकता गुल कभी नहीं देखा किसी फ़साने ने। 🌹",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹",
  },

  // 09 — Royal Princess Chamber
  {
    id: 9,
    stageNumber: "09 / 15",
    title: "Question 9 — The Royal Mirror & Attitude",
    environmentName: "Royal Princess Chamber",
    environmentSubtitle: "Ornate gilded mirrors, silk velvet canopies, and flickering candelabras",
    palette: {
      bgGradient: "from-[#24132b] via-[#3d1a49] to-[#120617]",
      cardBorder: "border-fuchsia-300/40",
      cardBg: "bg-fuchsia-950/25",
      accentGlow: "rgba(232, 121, 249, 0.4)",
      primaryTone: "text-fuchsia-200",
      particleType: "crown",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-fuchsia-800 via-purple-900 to-indigo-950",
      flapColor: "bg-fuchsia-700",
      innerLining: "bg-fuchsia-100",
      ribbonColor: "border-fuchsia-300 bg-fuchsia-400",
      waxSealColor: "bg-fuchsia-600 border-amber-300",
      waxSealSymbol: "🪞",
      stampText: "CHAMBER 09",
    },
    question: "When Princess Aisha looks into the royal antique mirror, what truth is revealed?",
    options: [
      "A fierce, intelligent, breathtaking woman who rules hearts with kindness 👑💎",
      "Just someone who forgot where she put her phone 10 seconds ago",
      "A sleepy girl waiting for coffee",
      "A mysterious stranger with messy hair",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Royal Queen Energy! 👑✨",
      subtitle: "Brilliance, beauty, compassion, and royal poise all combined into one person.",
      hinglishVoice: "Phone ghumna apni jagah hai, par aapki royalty aur grace unquestionable hai, Sahiba! 💎👑",
    },
    playfulResponses: {
      1: {
        title: "Phone ghoom gaya?! Relatable! 😂📱",
        hint: "Hint: Even while searching for the phone, you look like royalty!",
        hinglishVoice: "Hahaha phone toh mil jayega, pehle ye accept karo ki aap gorgeous ho!",
      },
      2: {
        title: "Coffee lover detected! ☕",
        hint: "Hint: Sleepy or energetic, your charisma is magnetic!",
        hinglishVoice: "Coffee ke baad toh direct queen mode activate hota hai!",
      },
      3: {
        title: "Messy hair is a royal trend! 💇‍♀️",
        hint: "Hint: The mirror reflects pure grace and brilliance!",
        hinglishVoice: "Aapke messy hair bhi fashion statement ban jayein!",
      },
    },
    surprise: {
      title: "Surprise #9: Golden Antique Hand-Mirror Charm",
      subtitle: "Reflecting only pure beauty and kindness",
      description: "An ornate mini hand mirror crafted with delicate filigree work, inscribed: 'The Fairest of All'.",
      icon: "🪞💎",
      poetry: "आईना भी जब देखता है आपको, तो मुग्ध हो जाता है,\nआपकी सादगी में छुपा वो राजसी अंदाज़ नजर आता है। 🪞",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞",
  },

  // 10 — Pastel Cloud World
  {
    id: 10,
    stageNumber: "10 / 15",
    title: "Question 10 — Flying High & Big Dreams",
    environmentName: "Pastel Cloud World",
    environmentSubtitle: "Dreamy peach, cream and lilac cloud cushions with celestial golden sparkles",
    palette: {
      bgGradient: "from-[#1d1633] via-[#332252] to-[#120b22]",
      cardBorder: "border-sky-300/40",
      cardBg: "bg-indigo-950/25",
      accentGlow: "rgba(56, 189, 248, 0.4)",
      primaryTone: "text-sky-200",
      particleType: "clouds",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-sky-800 via-indigo-900 to-purple-950",
      flapColor: "bg-sky-700",
      innerLining: "bg-sky-100",
      ribbonColor: "border-sky-200 bg-sky-300",
      waxSealColor: "bg-sky-600 border-amber-200",
      waxSealSymbol: "☁️",
      stampText: "DREAMLAND",
    },
    question: "Where are Aisha’s biggest dreams and ambitions destined to take her?",
    options: [
      "To the pinnacle of success, healing thousands, and touching the sky! ☁️✨",
      "Just to the local grocery store and back",
      "Nowhere, she is too lazy to move from bed",
      "To an endless spiral of scrolling Instagram reels",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Sky is Just the Beginning! ☁️🚀",
      subtitle: "Your talent, dedication, and brilliance are destined to make history.",
      hinglishVoice: "Aapke sapne itne buland hain ki aasmaan bhi chhota pad jaye! Proud of you, Doctor Sahiba! 🌟",
    },
    playfulResponses: {
      1: {
        title: "Grocery store?! Arre baap re! 🛒😂",
        hint: "Hint: Your future is as grand and luminous as the palace stars!",
        hinglishVoice: "Grocery store toh side quest hai, main journey bohot badi hai!",
      },
      2: {
        title: "Bed lovers unite! 🛌",
        hint: "Hint: Resting is important, but your destiny is magnificent!",
        hinglishVoice: "Neend zaroori hai, par aapki capabilities limitless hain!",
      },
      3: {
        title: "Reels scrolling?! Guilty! 📱🙈",
        hint: "Hint: Choose the empowering royal destiny answer!",
        hinglishVoice: "Reels dekh kar thodi der chill karna allowed hai, par aim bada hai!",
      },
    },
    surprise: {
      title: "Surprise #10: Crystal Shooting Star Talisman",
      subtitle: "Empowered to grant your grandest wishes",
      description: "A luminous iridescent shooting star crystal that reminds you that you are built for greatness.",
      icon: "☁️⭐",
      poetry: "हौसलों की उड़ान को अब आसमान चाहिए,\nआप जैसी शहज़ादी को सारा जहाँ चाहिए। ⭐☁️",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐",
  },

  // 11 — Traditional Indian Celebration
  {
    id: 11,
    stageNumber: "11 / 15",
    title: "Question 11 — Festive Spark & Joy",
    environmentName: "Traditional Indian Celebration",
    environmentSubtitle: "Gleaming golden diyas, mogra floral drapes, and festive celebratory rangolis",
    palette: {
      bgGradient: "from-[#2b0e07] via-[#4d1607] to-[#170502]",
      cardBorder: "border-yellow-400/40",
      cardBg: "bg-amber-950/30",
      accentGlow: "rgba(250, 204, 21, 0.4)",
      primaryTone: "text-amber-200",
      particleType: "diya",
    },
    envelopeDesign: {
      baseColor: "bg-gradient-to-br from-amber-800 via-red-900 to-amber-950",
      flapColor: "bg-amber-700",
      innerLining: "bg-amber-100",
      ribbonColor: "border-yellow-300 bg-amber-400",
      waxSealColor: "bg-amber-600 border-yellow-200",
      waxSealSymbol: "✨",
      stampText: "JASHN",
    },
    question: "What makes Aisha’s presence feel like an authentic Indian festive celebration?",
    options: [
      "The genuine laughter, warmth, and spark of joy she brings wherever she goes! 🪔🎆",
      "She carries fireworks in her pockets",
      "She constantly plays loud dhol music 24/7",
      "She distributes mithai forcefully to strangers",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Pure Festive Spark! 🪔🎉",
      subtitle: "Like a million Diwali lamps illuminating a dark room, your happiness is infectious.",
      hinglishVoice: "Jahan aap ho wahan roshni aur hansi khud ba khud aa jaati hai! Sacha jashn aapki maujoodgi hai! 🪔✨",
    },
    playfulResponses: {
      1: {
        title: "Fireworks in pocket?! Dangerous doctor! 🧨",
        hint: "Hint: Your smile sparks more joy than any firecracker!",
        hinglishVoice: "Arre hospital mein firecrackers ban hain! Apni smile se hi dhoom machao!",
      },
      2: {
        title: "Dhol 24/7?! Kaan fat jayenge! 🥁",
        hint: "Hint: It's your sweet voice and warmth that sets the festive mood!",
        hinglishVoice: "Dhol ki zaroorat nahi, aapki baaton mein hi mithaas hai!",
      },
      3: {
        title: "Forceful mithai? Actually tempting! 🍬",
        hint: "Hint: Option 1 captures your magnetic, joyful aura perfectly!",
        hinglishVoice: "Mithai toh khilani hi padegi birthday par!",
      },
    },
    surprise: {
      title: "Surprise #11: Golden Brass Diya with Perpetual Flame",
      subtitle: "Dispelling all shadows and doubt",
      description: "A royal intricately carved diya that radiates warmth, prosperity, and blessings for the coming year.",
      icon: "🪔✨",
      poetry: "दिए तो जलते हैं अक्सर अँधेरों को मिटाने के लिए,\nआपकी एक हँसी काफ़ी है सारे ग़म भुलाने के लिए। 🪔",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐🪔",
  },

  // 12 — Magical Butterfly Tunnel
  {
    id: 12,
    stageNumber: "12 / 15",
    title: "Question 12 — Bollywood & Magic",
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
    question: "If Aisha starred in her own Bollywood movie, what would the title be?",
    options: [
      "“Princess Aisha: Dil Se Doctor, Andaaz Se Maharani” 🎬👑",
      "“The Girl Who Slept Through Her 10 Alarms”",
      "“Fast & Furious: The Hospital Stethoscope Drift”",
      "“Kyunki Saas Bhi Kabhi Stethoscope Thi”",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Blockbuster Superhit Title! 🎬✨",
      subtitle: "Housefull in every cinema hall of hearts! 100 Crore Club confirmed.",
      hinglishVoice: "Is movie ke saare tickets pehle din hi bik jayenge! Superhit Princess Sahiba! 🎥👑",
    },
    playfulResponses: {
      1: {
        title: "10 Alarms movie?! Documentary alert! 😂⏰",
        hint: "Hint: Alarms might fail, but your royal charm never fails!",
        hinglishVoice: "Ye movie toh comedy genre mein superhit hogi pakka!",
      },
      2: {
        title: "Fast & Furious Drift?! 🏎️🩺",
        hint: "Hint: Choose the majestic Bollywood Maharani title!",
        hinglishVoice: "Stethoscope drift? Hahaha Vin Diesel bhi sharma jaye!",
      },
      3: {
        title: "Daily soap opera? No way! 📺",
        hint: "Hint: You belong on the grand 70mm cinematic silver screen!",
        hinglishVoice: "Daily soap nahi, aap toh grand Sanjay Leela Bhansali film ki heroine ho!",
      },
    },
    surprise: {
      title: "Surprise #12: Golden Film Clapperboard & Silver Tiara Pin",
      subtitle: "Marking you as the leading star of our story",
      description: "A commemorative golden pin shaped like a movie reel and crown, honoring your timeless charm.",
      icon: "🎬👑",
      poetry: "कहानियाँ तो बहुत बनती हैं इस दुनिया के परदे पर,\nपर आपका किरदार सबसे जुदा और हसीन रहेगा उम्र भर। 🦋✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐🪔🎬",
  },

  // 13 — Flower Celebration Hall
  {
    id: 13,
    stageNumber: "13 / 15",
    title: "Question 13 — Travel, Music & Wonder",
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
    question: "If Aisha could teleport anywhere in the world right now for her birthday, where should it be?",
    options: [
      "A scenic fairytale European garden with endless flowers, tea, and zero stress! 🏰🌸",
      "Back to the emergency ward on night shift",
      "Stuck in a 3-hour traffic jam in the rain",
      "Sitting in an empty lecture hall alone",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "Fairytale European Destination! 🏰✈️",
      subtitle: "First-class luxury travel booked straight into paradise.",
      hinglishVoice: "Ye hui na princess wali baat! Flowers, scenic sunsets, aur shanti hi aap deserve karti hain! 🌸✨",
    },
    playfulResponses: {
      1: {
        title: "Night shift?! Bhagwaan ke liye chhutti lo! 😭",
        hint: "Hint: Birthday par emergency duty nahi, luxury getaway chahiye!",
        hinglishVoice: "Doctor sahab, patient bhi bolenge 'aaj aap ghoomne jao!'",
      },
      2: {
        title: "Traffic jam?! Horrible nightmare! 🚗🌧️",
        hint: "Hint: Pick the fairytale floral escape with royal treatment!",
        hinglishVoice: "Traffic mein phansna kaun choose karta hai birthday par?! 😂",
      },
      3: {
        title: "Empty lecture hall? So lonely! 🏫",
        hint: "Hint: The universe wants to take you to a wonderland!",
        hinglishVoice: "Lecture hall se aage bhi ek haseen jahaan hai!",
      },
    },
    surprise: {
      title: "Surprise #13: Golden Passport of Boundless Happiness",
      subtitle: "Valid for infinite adventures and joy",
      description: "A symbolic royal golden passport granting you visa-free access to peace, love, and breathtaking journeys.",
      icon: "🏰✈️",
      poetry: "जहाँ भी कदम रखें आप, वो ज़मीं गुलज़ार हो जाए,\nसफ़र इतना सुहाना हो कि हर लम्हा बहार हो जाए। 🌸✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐🪔🎬🏰",
  },

  // 14 — Grand Royal Birthday Setup
  {
    id: 14,
    stageNumber: "14 / 15",
    title: "Question 14 — The Crowning Glory",
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
    question: "Before the final grand envelope opens, who has officially earned the title of the Eternal Birthday Princess?",
    options: [
      "None other than DOCTOR AISHA SAHIBA herself! 👑✨💖",
      "Someone who didn't even open envelope 1",
      "I am still not sure, let me take a quiz",
      "The crown is currently lost in transit",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "OFFICIALLY CROWNED! 👑✨",
      subtitle: "Signed, sealed, and decreed across all kingdoms of hearts.",
      hinglishVoice: "Madam, ab toh Supreme Royal Court ne bhi sign kar diya: You are the one and only Birthday Princess! 👑✨",
    },
    playfulResponses: {
      1: {
        title: "Someone else? 14 envelopes open karne ke baad bhi?! 😱",
        hint: "Hint: You crossed 14 magical worlds for this exact moment!",
        hinglishVoice: "Arre Sahiba, itni mehnat ke baad kisi aur ko crown dogi kya?!",
      },
      2: {
        title: "Still taking quizzes?! 📝😂",
        hint: "Hint: The result has been 100% Doctor Aisha from day one!",
        hinglishVoice: "Quiz khatam ho chuka hai, result aapke naam aa gaya!",
      },
      3: {
        title: "Lost in transit?! Courier boy ko pakdo! 📦",
        hint: "Hint: The crown is right above your head glowing brightly!",
        hinglishVoice: "Crown transit mein nahi, bas aapke sar par sajne wala hai!",
      },
    },
    surprise: {
      title: "Surprise #14: The Royal Decree of Honor",
      subtitle: "Proclaiming your reign over tomorrow and beyond",
      description: "An imperial golden scroll declaring Aisha Sahiba as the undisputed Queen of Grace and Kindness.",
      icon: "📜👑",
      poetry: "ताज की तलाश में भटके होंगे कई शहंशाह यहाँ,\nपर आपके माथे पे सजने को ये ताज खुद तरसता है यहाँ। 👑✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐🪔🎬🏰💎",
  },

  // 15 — Ultimate Birthday Reveal
  {
    id: 15,
    stageNumber: "15 / 15",
    title: "Question 15 — The Ultimate Mystery",
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
    question: "What is the true reason this entire magical world of 15 envelopes was built?",
    options: [
      "To remind Doctor Aisha that she is profoundly cherished, endlessly admired, and truly one of a kind 💖👑✨",
      "Just a random coding assignment with pretty buttons",
      "Because someone had too much free time",
      "To test your patience with 15 questions",
    ],
    complimentaryIndex: 0,
    complimentaryResponse: {
      title: "From the Depths of the Heart! 💖✨",
      subtitle: "Every pixel, every word, and every envelope was crafted solely for your smile.",
      hinglishVoice: "Kyunki aap jaisa koi doosra nahi hai is duniya mein… Ab waqt hai aakhri aur sabse bade surprise ka! 👑🎉",
    },
    playfulResponses: {
      1: {
        title: "Random assignment?! Itna dil kahan lagta hai random mein! 🥺",
        hint: "Hint: This was built with pure love, admiration, and special thoughts for you!",
        hinglishVoice: "Arre Sahiba, ye code nahi, jazbaat hain jo screen par sajaye hain!",
      },
      2: {
        title: "Too much free time?! Dil se banaya hai! ⏳",
        hint: "Hint: Time stops when creating something for the birthday princess!",
        hinglishVoice: "Waqt nikala gaya hai aapke chehre par ek pyari si hasi laane ke liye!",
      },
      3: {
        title: "Patience test?! Na ji na! 🙈",
        hint: "Hint: Option 1 is the heartfelt truth behind this entire universe!",
        hinglishVoice: "Patience nahi, ye toh 15 steps ka royal journey tha aapke liye!",
      },
    },
    surprise: {
      title: "Surprise #15: The Grand Birthday Revelation",
      subtitle: "Unlocking the grand imperial celebration",
      description: "The seal of the 15th Grand Envelope breaks, unleashing an endless shower of blessings, balloons, and love.",
      icon: "👑💖🎉",
      poetry: "खुदा करे कि ये दिन आपकी ज़िंदगी में बार-बार आए,\nऔर हर बार आपके दामन में खुशियों की सौगात लाए। 🌷✨",
    },
    crownProgression: "👑✨🦋🌷🪷🌙🎂🌹🪞⭐🪔🎬🏰💎💖",
  },
];

