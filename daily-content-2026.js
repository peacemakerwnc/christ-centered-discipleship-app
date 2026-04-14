/**
 * Peacemakers — 2026 data for index.html / christ-centered-discipleship-app.html
 * Sets window.PMK_APP_DATA. Scripture: reference + short summary only.
 */
(function () {
    "use strict";
  
    function pad2(n) {
      return n < 10 ? "0" + n : String(n);
    }
  
    function keyFor(month, day) {
      return pad2(month) + "-" + pad2(day);
    }
  
    function daysInMonth(month) {
      if (month === 2) return 28;
      if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
      return 31;
    }
  
    var monthlyThemes = {
      1: "Abide in Christ",
      2: "Daily Conversion for Fathers – Turning Again to Christ in the Ordinary",
      3: "The Way of the Cross — Lenten sacrifice, repentance, dying to self",
      4: "Resurrection and Mission — the risen Christ sends fathers on mission",
      5: "Mary, Model of Discipleship",
      6: "The Sacred Heart — love, mercy, the interior life, burning for souls",
      7: "Courage and Fortitude — the virtuous father who does not shrink",
      8: "Mary — Assumption, Queenship, leading family to her",
      9: "Back to Basics — the Creed, the Our Father, fundamentals",
      10: "The Rosary and Spiritual Warfare — praying men, guarding the home",
      11: "Last Things — death, judgment, purgatory, heaven",
      12: "Advent and Incarnation — waiting, longing, the Word made flesh",
    };
  
    var habitLabels = [
      { id: "scripture", label: "Read today’s Scripture" },
      { id: "prayer", label: "Spend 10 minutes in prayer" },
      { id: "charity", label: "Practice an act of charity" },
      { id: "witness", label: "Encourage someone in Christ" },
      { id: "exam", label: "Brief evening examen" },
    ];
  
    function liturgicalForMonthDay(month, day) {
      var md = month * 100 + day;
  
      if (month === 1 && day <= 11) {
        if (day === 1) {
          return {
            season: "Christmas",
            color: "white",
            celebration: "Mary, Mother of God",
            rank: "Solemnity",
          };
        }
        if (day === 6) {
          return {
            season: "Christmas",
            color: "white",
            celebration: "The Epiphany of the Lord",
            rank: "Solemnity",
          };
        }
        return { season: "Christmas", color: "white", celebration: null, rank: null };
      }
  
      if (md >= 112 && md <= 217) {
        return { season: "Ordinary Time", color: "green", celebration: null, rank: null };
      }
  
      if ((month === 2 && day >= 18) || month === 3 || (month === 4 && day <= 1)) {
        if (month === 2 && day === 18) {
          return { season: "Lent", color: "purple", celebration: "Ash Wednesday", rank: null };
        }
        if (month === 3 && day === 25) {
          return {
            season: "Lent",
            color: "white",
            celebration: "The Annunciation of the Lord",
            rank: "Solemnity",
          };
        }
        return { season: "Lent", color: "purple", celebration: null, rank: null };
      }
  
      if (month === 4 && day >= 2 && day <= 4) {
        if (day === 2) {
          return {
            season: "Triduum",
            color: "white",
            celebration: "Mass of the Lord’s Supper",
            rank: "Solemnity",
          };
        }
        if (day === 3) {
          return {
            season: "Triduum",
            color: "red",
            celebration: "Friday of the Passion of the Lord",
            rank: "Solemnity",
          };
        }
        return { season: "Triduum", color: "white", celebration: "Holy Saturday", rank: null };
      }
  
      if ((month === 4 && day >= 5) || (month === 5 && day <= 24)) {
        if (month === 4 && day === 5) {
          return {
            season: "Easter",
            color: "white",
            celebration: "The Resurrection of the Lord",
            rank: "Solemnity",
          };
        }
        if (month === 5 && day === 14) {
          return {
            season: "Easter",
            color: "white",
            celebration: "The Ascension of the Lord",
            rank: "Solemnity",
          };
        }
        if (month === 5 && day === 24) {
          return {
            season: "Easter",
            color: "red",
            celebration: "Pentecost Sunday",
            rank: "Solemnity",
          };
        }
        if (month === 4 && day <= 12) {
          return { season: "Easter", color: "white", celebration: "Easter Octave", rank: null };
        }
        return { season: "Easter", color: "white", celebration: null, rank: null };
      }
  
      if (
        (month === 5 && day >= 25) ||
        month === 6 ||
        month === 7 ||
        month === 8 ||
        month === 9 ||
        month === 10 ||
        (month === 11 && day <= 28)
      ) {
        if (month === 5 && day === 31) {
          return {
            season: "Ordinary Time",
            color: "white",
            celebration: "The Most Holy Trinity",
            rank: "Solemnity",
          };
        }
        if (month === 6 && day === 4) {
          return {
            season: "Ordinary Time",
            color: "white",
            celebration: "The Most Holy Body and Blood of Christ",
            rank: "Solemnity",
          };
        }
        if (month === 6 && day === 19) {
          return {
            season: "Ordinary Time",
            color: "white",
            celebration: "The Most Sacred Heart of Jesus",
            rank: "Solemnity",
          };
        }
        if (month === 8 && day === 15) {
          return {
            season: "Ordinary Time",
            color: "white",
            celebration: "The Assumption of the Blessed Virgin Mary",
            rank: "Solemnity",
          };
        }
        if (month === 11 && day === 1) {
          return {
            season: "Ordinary Time",
            color: "white",
            celebration: "All Saints",
            rank: "Solemnity",
          };
        }
        if (month === 11 && day === 2) {
          return {
            season: "Ordinary Time",
            color: "purple",
            celebration: "All Souls",
            rank: null,
          };
        }
        return { season: "Ordinary Time", color: "green", celebration: null, rank: null };
      }
  
      if ((month === 11 && day >= 29) || (month === 12 && day <= 24)) {
        if (month === 12 && day === 8) {
          return {
            season: "Advent",
            color: "white",
            celebration: "The Immaculate Conception",
            rank: "Solemnity",
          };
        }
        return { season: "Advent", color: "purple", celebration: null, rank: null };
      }
  
      if (month === 12 && day >= 25) {
        return {
          season: "Christmas",
          color: "white",
          celebration: day === 25 ? "The Nativity of the Lord" : null,
          rank: day === 25 ? "Solemnity" : null,
        };
      }
  
      return { season: "Ordinary Time", color: "green", celebration: null, rank: null };
    }
  
    function buildLiturgical() {
      var map = {};
      for (var month = 1; month <= 12; month++) {
        for (var day = 1; day <= daysInMonth(month); day++) {
          map[keyFor(month, day)] = liturgicalForMonthDay(month, day);
        }
      }
      return map;
    }
  
    var CHALLENGE_TYPE_ORDER = ["prayer", "sacrifice", "service", "study", "conversation"];

    var DEFAULT_TEMPLATE = {
      scripturePrimaryRef: "John 15:5",
      scripturePrimaryText:
        "I am the vine, you are the branches. Those who abide in me and I in them bear much fruit, because apart from me you can do nothing.",
      scriptureSecondaryRef: null,
      scriptureSecondaryText: null,
      connectionNote: null,
      reflection:
        "Jesus is not offering a metaphor about gardening tips; he is stating a rule of spiritual life. Fruit—real virtue, endurance, charity—does not come from willpower branding itself as holiness. It comes from remaining in him, receiving life as he gives it. Apart from that union, Jesus says you can do nothing that lasts.",
      fatherNote:
        "Your children can smell the difference between a father who is trying harder and a father who is staying near Christ. When you snap at them after skipping prayer, you are proving the verse, not breaking it: without him, the branch dries. Lead them to the vine by admitting when you need him again.",
      challengeType: "prayer",
      challenge:
        "Before anyone else is awake, sit in silence for ten minutes with John 15:5 as the only text in front of you. Read it three times slowly; on the third reading, name aloud one habit that pulls you away from Christ. End with the Lord’s Prayer.",
      leastOfThese:
        "Identify one coworker or neighbor who carries a visible burden (caregiving, night shifts, recent loss). Today, do one practical thing for them—coffee, an errand, a meal—and do not attach a sermon.",
      prayer:
        "Lord Jesus,\nyou call yourself the vine and me a branch.\nI want fruit without abiding; forgive my self-reliance.\nDraw me back into you this morning\nso my wife and children receive patience that is not performed but given.\nApart from you I can do nothing; with you, teach me to remain.\n\nAmen",
      journalPrompt:
        "Where did I encounter John 15:5 lived out—in myself, my family, or a stranger today?\n\nWhere did I resist abiding in Christ and tried to bear fruit alone—and how do I bring that honestly before God tonight?",
    };

    function buildChallengeTypeMap() {
      var map = {};
      var prev = null;
      var prev2 = null;
      for (var m = 1; m <= 12; m++) {
        for (var d = 1; d <= daysInMonth(m); d++) {
          var seed = m * 40 + d;
          var idx = seed % 5;
          var pick = CHALLENGE_TYPE_ORDER[idx];
          var guard = 0;
          while (pick === prev && prev === prev2 && guard < 12) {
            guard++;
            idx = (idx + 1) % 5;
            pick = CHALLENGE_TYPE_ORDER[idx];
          }
          map[keyFor(m, d)] = pick;
          prev2 = prev;
          prev = pick;
        }
      }
      return map;
    }

    var CHALLENGE_TYPE_MAP = buildChallengeTypeMap();

    function isValidChallengeType(t) {
      return CHALLENGE_TYPE_ORDER.indexOf(t) !== -1;
    }

      var VERSES_BY_MONTH = {
        1: [
          { r: "John 15:4–5", t: "Abide in me as I abide in you. Just as the branch cannot bear fruit by itself unless it abides in the vine, neither can you unless you abide in me." },
          { r: "John 15:7", t: "If you abide in me, and my words abide in you, ask for whatever you wish, and it will be done for you." },
          { r: "John 6:56", t: "Those who eat my flesh and drink my blood abide in me, and I in them." },
          { r: "John 15:9", t: "As the Father has loved me, so I have loved you; abide in my love." },
          { r: "John 15:10", t: "If you keep my commandments, you will abide in my love, just as I have kept my Father's commandments and abide in his love." },
          { r: "John 8:31", t: "If you continue in my word, you are truly my disciples." },
          { r: "John 15:5", t: "I am the vine, you are the branches. Those who abide in me and I in them bear much fruit, because apart from me you can do nothing." },
          { r: "1 John 2:24", t: "Let what you heard from the beginning abide in you. If what you heard from the beginning abides in you, then you will abide in the Son and in the Father." },
          { r: "1 John 2:27", t: "As for you, the anointing that you received from him abides in you, and you have no need that anyone should teach you; but as his anointing teaches you about all things, and is true and is not a lie, and just as it has taught you, abide in him." },
          { r: "Colossians 2:6–7", t: "As you therefore have received Christ Jesus the Lord, continue to live your lives in him, rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving." },
          { r: "Colossians 1:10", t: "So that you may lead lives worthy of the Lord, fully pleasing to him, as you bear fruit in every good work and grow in the knowledge of God." },
          { r: "Romans 11:17", t: "But if some of the branches were broken off, and you, a wild olive shoot, were grafted in their place to share the rich root of the olive tree, do not boast over the branches." },
          { r: "Ephesians 3:17", t: "And that Christ may dwell in your hearts through faith, as you are being rooted and grounded in love." },
          { r: "Psalm 1:3", t: "They are like trees planted by streams of water, which yield their fruit in its season, and their leaves do not wither. In all that they do, they prosper." },
          { r: "Psalm 92:13–14", t: "They are planted in the house of the Lord; they flourish in the courts of our God. In old age they still produce fruit; they are always green and full of sap." },
          { r: "Jeremiah 17:7–8", t: "Blessed are those who trust in the Lord, whose trust is the Lord. They shall be like a tree planted by water, sending out its roots by the stream; it shall not fear when heat comes, and its leaves shall stay green." },
          { r: "John 6:57", t: "Just as the living Father sent me, and I live because of the Father, so whoever eats me will live because of me." },
          { r: "Sirach 24:12", t: "So he said to me, \"Make your dwelling in Jacob; receive your inheritance in Israel.\"" },
          { r: "Wisdom 3:9", t: "Those who trust in him will understand truth, and the faithful will abide with him in love, because grace and mercy are upon his holy ones, and he watches over his elect." },
          { r: "Proverbs 3:5–6", t: "Trust in the Lord with all your heart, and do not rely on your own insight. In all your ways acknowledge him, and he will make straight your paths." },
          { r: "Psalm 27:8", t: "Come, my heart says, seek his face; your face, Lord, do I seek." },
          { r: "Psalm 63:2", t: "O God, you are my God, I seek you, my soul thirsts for you; my flesh faints for you, as in a dry and weary land where there is no water." },
          { r: "Psalm 119:30", t: "I have chosen the way of faithfulness; I set your ordinances before me." },
          { r: "Philippians 1:21", t: "For to me, living is Christ and dying is gain." },
          { r: "Galatians 2:20", t: "And it is no longer I who live, but it is Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me." },
          { r: "2 Timothy 1:13", t: "Hold to the standard of sound teaching that you have heard from me, in the faith and love that are in Christ Jesus." },
          { r: "James 1:22", t: "But be doers of the word, and not merely hearers who deceive themselves." },
          { r: "1 Peter 2:4", t: "Come to him, a living stone, though rejected by mortals yet chosen and precious in God's sight." },
          { r: "Acts 17:28", t: "For \"In him we live and move and have our being\"; as even some of your own poets have said, \"For we too are his offspring.\"" },
          { r: "John 14:23", t: "Jesus answered him, \"Those who love me will keep my word, and my Father will love them, and we will come to them and make our home with them.\"" },
          { r: "Revelation 3:20", t: "Listen! I am standing at the door, knocking; if you hear my voice and open the door, I will come in to you and eat with you, and you with me." },
        ],
        2: [
          { r: "Luke 11:9", t: "So I tell you, ask, and it will be given you; search, and you will find; knock, and the door will be opened for you." },
          { r: "Luke 11:10", t: "For everyone who asks receives, and everyone who searches finds, and for everyone who knocks, the door will be opened." },
          { r: "Philippians 4:6", t: "Do not worry about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God." },
          { r: "Matthew 6:6", t: "But whenever you pray, go into your room and shut the door and pray to your Father who is in secret; and your Father who sees in secret will reward you." },
          { r: "Matthew 6:7", t: "When you are praying, do not heap up empty phrases as the Gentiles do; for they think that they will be heard because of their many words." },
          { r: "Mark 11:24", t: "So I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours." },
          { r: "Luke 18:1", t: "Then Jesus told them a parable about their need to pray always and not to lose heart." },
          { r: "1 Thessalonians 5:17", t: "Pray without ceasing." },
          { r: "Romans 12:12", t: "Rejoice in hope, be patient in suffering, persevere in prayer." },
          { r: "James 5:16", t: "Therefore confess your sins to one another, and pray for one another, so that you may be healed. The prayer of the righteous is powerful and effective." },
          { r: "Psalm 5:3", t: "O Lord, in the morning you hear my voice; in the morning I plead my case to you, and watch." },
          { r: "Psalm 55:18", t: "He will redeem me unharmed from the battle that I wage, for many are arrayed against me." },
          { r: "Psalm 88:2", t: "Let my prayer come before you; incline your ear to my cry." },
          { r: "Psalm 102:1", t: "Hear my prayer, O Lord; let my cry come to you." },
          { r: "Psalm 141:2", t: "Let my prayer be counted as incense before you, and the lifting up of my hands as an evening sacrifice." },
          { r: "Sirach 35:21", t: "The prayer of the humble pierces the clouds, and it will not rest until it reaches its goal; it will not desist until the Most High responds." },
          { r: "Tobit 12:12", t: "When you prayed with tears and buried the dead, and left your dinner to conceal yourself in order to bury the dead during the day instead of eating, I was with you." },
          { r: "Daniel 9:18", t: "O my God, incline your ear and hear. Open your eyes and look at our desolation and the city that bears your name. We do not present our supplication before you on the ground of our righteousness, but on the ground of your great mercies." },
          { r: "Jonah 2:2", t: "saying, \"I called to the Lord out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice.\"" },
          { r: "Matthew 7:7", t: "Ask, and it will be given you; search, and you will find; knock, and the door will be opened for you." },
          { r: "Luke 11:13", t: "If you then, who are evil, know how to give good gifts to your children, how much more will the heavenly Father give the Holy Spirit to those who ask him!" },
          { r: "John 16:24", t: "Until now you have not asked for anything in my name. Ask and you will receive, so that your joy may be complete." },
          { r: "Ephesians 6:18", t: "Pray in the Spirit at all times in every prayer and supplication. To that end keep alert and always persevere in supplication for all the saints." },
          { r: "Colossians 4:2", t: "Devote yourselves to prayer, keeping alert in it with thanksgiving." },
          { r: "Hebrews 4:16", t: "Let us therefore approach the throne of grace with boldness, so that we may receive mercy and find grace to help in time of need." },
          { r: "1 Peter 5:7", t: "Cast all your anxiety on him, because he cares for you." },
          { r: "Psalm 34:6", t: "This poor soul cried, and was heard by the Lord, and was saved from every trouble." },
          { r: "Psalm 116:2", t: "Because he inclined his ear to me, therefore I will call on him as long as I live." },
        ],
        3: [
          { r: "Acts 1:8", t: "But you will receive power when the Holy Spirit has come upon you; and you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the ends of the earth." },
          { r: "Matthew 28:19", t: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
          { r: "Mark 16:15", t: "And he said to them, \"Go into all the world and proclaim the good news to the whole creation.\"" },
          { r: "1 Peter 3:15", t: "But in your hearts sanctify Christ as Lord. Always be ready to make your defense to anyone who demands from you an accounting for the hope that is in you." },
          { r: "Isaiah 43:10", t: "You are my witnesses, says the Lord, and my servant whom I have chosen, so that you may know and believe me and understand that I am he." },
          { r: "Psalm 96:3", t: "Declare his glory among the nations, his marvelous works among all the peoples." },
          { r: "Psalm 105:1", t: "O give thanks to the Lord, call on his name, make known his deeds among the peoples." },
          { r: "2 Timothy 1:8", t: "Do not be ashamed, then, of the testimony about our Lord or of me his prisoner, but join with me in suffering for the gospel, relying on the power of God." },
          { r: "Romans 10:15", t: "And how are they to proclaim him unless they are sent? As it is written, \"How beautiful are the feet of those who bring good news!\"" },
          { r: "Acts 4:20", t: "for we cannot keep from speaking about what we have seen and heard." },
          { r: "Acts 5:20", t: "\"Go, stand in the temple and tell the people the whole message about this life.\"" },
          { r: "Matthew 5:14", t: "You are the light of the world. A city built on a hill cannot be hid." },
          { r: "Matthew 5:16", t: "In the same way, let your light shine before others, so that they may see your good works and give glory to your Father in heaven." },
          { r: "Isaiah 52:7", t: "How beautiful upon the mountains are the feet of the messenger who announces peace, who brings good news, who announces salvation, who says to Zion, \"Your God reigns.\"" },
          { r: "Luke 24:48", t: "You are witnesses of these things." },
          { r: "John 15:27", t: "And you also are to testify because you have been with me from the beginning." },
          { r: "Acts 13:47", t: "For so the Lord has commanded us, saying, \"I have set you to be a light for the Gentiles, so that you may bring salvation to the ends of the earth.\"" },
          { r: "Philippians 2:15", t: "so that you may be blameless and innocent, children of God without blemish in the midst of a crooked and perverse generation, in which you shine like stars in the world." },
          { r: "Titus 2:10", t: "not to pilfer, but to show complete and perfect fidelity, so that in everything they may be an ornament to the doctrine of God our Savior." },
          { r: "1 Corinthians 9:16", t: "If I proclaim the gospel, this gives me no ground for boasting, for an obligation is laid on me, and woe to me if I do not proclaim the gospel!" },
          { r: "2 Corinthians 5:20", t: "So we are ambassadors for Christ, since God is making his appeal through us; we entreat you on behalf of Christ, be reconciled to God." },
          { r: "Psalm 40:10", t: "I have not hidden your saving help within my heart, I have spoken of your faithfulness and your salvation; I have not concealed your steadfast love and your faithfulness from the great congregation." },
          { r: "Psalm 71:18", t: "So even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to all the generations to come." },
          { r: "Sirach 39:10", t: "He will direct his counsel and knowledge rightly, and meditate on his mysteries." },
          { r: "Ezekiel 2:7", t: "You shall speak my words to them, whether they hear or refuse to hear; for they are a rebellious house." },
          { r: "Micah 6:8", t: "He has told you, O mortal, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?" },
          { r: "Isaiah 49:6", t: "It is too light a thing that you should be my servant to raise up the tribes of Jacob and to restore the survivors of Israel; I will give you as a light to the nations, that my salvation may reach to the end of the earth." },
          { r: "Daniel 12:3", t: "Those who are wise shall shine like the brightness of the sky, and those who lead many to righteousness, like the stars forever and ever." },
          { r: "Romans 1:16", t: "For I am not ashamed of the gospel; it is the power of God for salvation to everyone who has faith, to the Jew first and also to the Greek." },
          { r: "Isaiah 42:6", t: "I am the Lord, I have called you in righteousness, I have taken you by the hand and kept you; I have given you as a covenant to the people, a light to the nations." },
          { r: "Isaiah 49:1", t: "Listen to me, O coastlands, pay attention, you peoples from far away! The Lord called me before I was born, while I was in my mother's womb he named me." },
        ],
        4: [
          { r: "2 Corinthians 5:17", t: "So if anyone is in Christ, there is a new creation: everything old has passed away; see, everything has become new!" },
          { r: "Ezekiel 36:26", t: "A new heart I will give you, and a new spirit I will put within you; and I will remove from your body the heart of stone and give you a heart of flesh." },
          { r: "Psalm 51:12", t: "Restore to me the joy of your salvation, and sustain in me a willing spirit." },
          { r: "Isaiah 43:19", t: "I am about to do a new thing; now it springs forth, do you not perceive it? I will make a way in the wilderness and rivers in the desert." },
          { r: "Titus 3:5", t: "He saved us, not because of any works of righteousness that we had done, but according to his mercy, through the water of rebirth and renewal by the Holy Spirit." },
          { r: "Romans 6:4", t: "Therefore we have been buried with him by baptism into death, so that, just as Christ was raised from the dead by the glory of the Father, so we too might walk in newness of life." },
          { r: "Ephesians 4:23", t: "and to be renewed in the spirit of your minds." },
          { r: "Colossians 3:10", t: "and have clothed yourselves with the new self, which is being renewed in knowledge according to the image of its creator." },
          { r: "John 3:3", t: "Jesus answered him, \"Very truly, I tell you, no one can see the kingdom of God without being born from above.\"" },
          { r: "John 3:7", t: "Do not be astonished that I said to you, \"You must be born from above.\"" },
          { r: "Ezekiel 11:19", t: "I will give them one heart, and put a new spirit within them; I will remove the heart of stone from their flesh and give them a heart of flesh." },
          { r: "Jeremiah 31:33", t: "But this is the covenant that I will make with the house of Israel after those days, says the Lord: I will put my law within them, and I will write it on their hearts; and I will be their God, and they shall be my people." },
          { r: "Psalm 51:10", t: "Create in me a clean heart, O God, and put a new and right spirit within me." },
          { r: "Psalm 23:3", t: "He restores my soul. He leads me in right paths for his name's sake." },
          { r: "Isaiah 1:18", t: "Come now, let us argue it out, says the Lord: though your sins are like scarlet, they shall be like snow; though they are red like crimson, they shall become like wool." },
          { r: "Joel 2:25", t: "I will repay you for the years that the swarming locust has eaten, the hopper, the destroyer, and the cutter, my great army, which I sent among you." },
          { r: "Hosea 6:1", t: "Come, let us return to the Lord; for it is he who has torn, and he will heal us; he has struck down, and he will bind us up." },
          { r: "Zechariah 9:11", t: "As for you also, because of the blood of my covenant with you, I will set your prisoners free from the waterless pit." },
          { r: "Wisdom 19:6", t: "For the whole creation in its nature was fashioned anew, your creatures holding your command, so that your children might be kept unharmed." },
          { r: "Romans 12:2", t: "Do not be conformed to this world, but be transformed by the renewing of your minds, so that you may discern what is the will of God—what is good and acceptable and perfect." },
          { r: "Galatians 6:15", t: "For neither circumcision nor uncircumcision is anything; but a new creation is everything!" },
          { r: "2 Peter 1:4", t: "Thus he has given us, through these things, his precious and very great promises, so that through them you may escape from the corruption that is in the world because of lust, and may become participants in the divine nature." },
          { r: "1 John 1:9", t: "If we confess our sins, he who is faithful and just will forgive us our sins and cleanse us from all unrighteousness." },
          { r: "Acts 3:19", t: "Repent therefore, and turn to God so that your sins may be wiped out." },
          { r: "Luke 15:7", t: "Just so, I tell you, there will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance." },
          { r: "Isaiah 65:17", t: "For I am about to create new heavens and a new earth; the former things shall not be remembered or come to mind." },
          { r: "Revelation 21:5", t: "And the one who was seated on the throne said, \"See, I am making all things new.\" Also he said, \"Write this, for these words are trustworthy and true.\"" },
          { r: "Ezekiel 37:5", t: "Thus says the Lord God to these bones: I will cause breath to enter you, and you shall live." },
          { r: "Psalm 30:12", t: "You have turned my mourning into dancing; you have taken off my sackcloth and clothed me with joy." },
          { r: "Psalm 103:12", t: "As far as the east is from the west, so far he removes our transgressions from us." },
          { r: "Isaiah 40:31", t: "But those who wait for the Lord shall renew their strength, they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint." },
        ],
        5: [
          { r: "Luke 1:38", t: "Then Mary said, \"Here am I, the servant of the Lord; let it be with me according to your word.\" Then the angel departed from her." },
          { r: "Luke 1:46", t: "And Mary said, \"My soul magnifies the Lord.\"" },
          { r: "Luke 1:48", t: "For he has looked with favor on the lowliness of his servant. Surely, from now on all generations will call me blessed." },
          { r: "John 19:27", t: "Then he said to the disciple, \"Here is your mother.\" And from that hour the disciple took her into his own home." },
          { r: "Luke 2:19", t: "But Mary treasured all these words and pondered them in her heart." },
          { r: "Luke 2:51", t: "Then he went down with them and came to Nazareth, and was obedient to them. His mother treasured all these things in her heart." },
          { r: "Luke 1:45", t: "And blessed is she who believed that there would be a fulfillment of what was spoken to her by the Lord." },
          { r: "Luke 11:27–28", t: "While he was saying this, a woman in the crowd raised her voice and said to him, \"Blessed is the womb that bore you and the breasts that nursed you!\" But he said, \"Blessed rather are those who hear the word of God and obey it!\"" },
          { r: "Proverbs 31:26", t: "She opens her mouth with wisdom, and the teaching of kindness is on her tongue." },
          { r: "Judith 13:18", t: "And he said to her, \"Blessed are you, daughter, by the Most High God, above all women on earth.\"" },
          { r: "Song 4:7", t: "You are altogether beautiful, my love; there is no flaw in you." },
          { r: "Isaiah 7:14", t: "Therefore the Lord himself will give you a sign. Look, the young woman is with child and shall bear a son, and shall name him Immanuel." },
          { r: "Micah 5:2", t: "But you, O Bethlehem of Ephrathah, who are one of the little clans of Judah, from you shall come forth for me one who is to rule in Israel, whose origin is from of old, from ancient days." },
          { r: "Galatians 4:4", t: "But when the fullness of time had come, God sent his Son, born of a woman, born under the law." },
          { r: "Revelation 12:1", t: "A great portent appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars." },
          { r: "Judith 15:10", t: "You have done all this singlehanded; you have done great good to Israel, and God is pleased with what you have done. May the Almighty Lord bless you forever.\"" },
          { r: "Luke 1:28", t: "And he came to her and said, \"Greetings, favored one! The Lord is with you.\"" },
          { r: "Luke 1:42", t: "In a loud voice she exclaimed, \"Blessed are you among women, and blessed is the fruit of your womb.\"" },
          { r: "John 2:5", t: "His mother said to the servants, \"Do whatever he tells you.\"" },
          { r: "Genesis 3:15", t: "I will put enmity between you and the woman, and between your offspring and hers; he will strike your head, and you will strike his heel." },
          { r: "Sirach 24:24", t: "I am the mother of fair love, of fear, of knowledge, and of holy hope; I therefore, being given by him who is the true God, have obtained all these things; and they that are with me have not departed from me." },
          { r: "Psalm 45:10", t: "Hear, O daughter, consider and incline your ear; forget your people and your father's house." },
          { r: "Isaiah 61:10", t: "I will greatly rejoice in the Lord, my whole being shall exult in my God; for he has clothed me with the garments of salvation, he has covered me with the robe of righteousness." },
          { r: "Tobit 12:12", t: "When you prayed with tears and buried the dead, I was with you when you did not eat in order to hide yourself while you were burying a dead person on the day of festival, I offered your prayer to the Lord." },
          { r: "Judith 8:31", t: "Therefore pray for us, for you are a godly woman, and the Lord will send us rain to fill our cisterns and we will no longer be faint from thirst.\"" },
          { r: "Esther 15:11", t: "O Lord, Lord, King who rules over all things, for the universe is in your power and there is no one who can oppose you if you determine to save Israel." },
          { r: "1 Kings 2:19", t: "So Bathsheba went to King Solomon, to speak to him on behalf of Adonijah. The king rose to meet her, and bowed down to her; then he sat on his throne, and had a throne brought for the king's mother, and she sat on his right." },
          { r: "Proverbs 31:30", t: "Charm is deceitful, and beauty is vain, but a woman who fears the Lord is to be praised." },
          { r: "Luke 2:35", t: "And a sword will pierce your own soul too.\"" },
          { r: "Isaiah 66:13", t: "As a mother comforts her child, so I will comfort you; you shall be comforted in Jerusalem." },
          { r: "Luke 8:21", t: "But he said to them, \"My mother and my brothers are those who hear the word of God and do it.\"" },
        ],
        6: [
          { r: "Matthew 11:29", t: "Take my yoke upon you, and learn from me; for I am gentle and humble in heart, and you will find rest for your souls." },
          { r: "John 19:34", t: "Instead, one of the soldiers pierced his side with a spear, and at once blood and water came out." },
          { r: "Ephesians 3:17–19", t: "and that Christ may dwell in your hearts through faith, as you are being rooted and grounded in love. I pray that you may have the power to comprehend, with all the saints, what is the breadth and length and height and depth, and to know the love of Christ that surpasses knowledge, so that you may be filled with all the fullness of God." },
          { r: "John 7:37–38", t: "On the last day of the festival, the great day, while Jesus was standing there, he cried out, \"Let anyone who is thirsty come to me, and let the one who believes in me drink. As the scripture has said, 'Out of the believer's heart shall flow rivers of living water.'\"" },
          { r: "Matthew 25:35", t: "For I was hungry and you gave me food, I was thirsty and you gave me something to drink, I was a stranger and you welcomed me." },
          { r: "Hosea 11:4", t: "I led them with cords of human kindness, with bands of love. I was to them like those who lift infants to their cheeks. I bent down to them and fed them." },
          { r: "Ezekiel 34:16", t: "I will seek the lost, and I will bring back the strayed, and I will bind up the injured, and I will strengthen the weak, but the fat and the strong I will destroy. I will feed them with justice." },
          { r: "Isaiah 53:5", t: "But he was wounded for our transgressions, crushed for our iniquities; upon him was the punishment that made us whole, and by his bruises we are healed." },
          { r: "John 10:11", t: "I am the good shepherd. The good shepherd lays down his life for the sheep." },
          { r: "John 10:14", t: "I am the good shepherd. I know my own and my own know me." },
          { r: "Jeremiah 31:3", t: "The Lord appeared to him from far away. I have loved you with an everlasting love; therefore I have continued my faithfulness to you." },
          { r: "Lamentations 3:22–23", t: "The steadfast love of the Lord never ceases, his mercies never come to an end; they are new every morning; great is your faithfulness." },
          { r: "Psalm 23:1", t: "The Lord is my shepherd, I shall not want." },
          { r: "Psalm 36:9", t: "For with you is the fountain of life; in your light we see light." },
          { r: "Psalm 85:10", t: "Steadfast love and faithfulness will meet; righteousness and peace will kiss each other." },
          { r: "Sirach 24:26", t: "Come to me, you who desire me, and eat your fill of my fruits." },
          { r: "Ezekiel 36:26", t: "A new heart I will give you, and a new spirit I will put within you; and I will remove from your body the heart of stone and give you a heart of flesh." },
          { r: "Zechariah 12:10", t: "I will pour out a spirit of compassion and supplication on the house of David and the inhabitants of Jerusalem, so that, when they look on the one whom they have pierced, they shall mourn for him, as one mourns for an only child, weep bitterly over him, as one weeps over a firstborn." },
          { r: "John 3:16", t: "For God so loved the world that he gave his only Son, so that everyone who believes in him may not perish but may have eternal life." },
          { r: "Romans 5:8", t: "But God proves his love for us in that while we still were sinners Christ died for us." },
          { r: "Romans 8:35", t: "Who will separate us from the love of Christ? Will hardship, or distress, or persecution, or famine, or nakedness, or peril, or sword?" },
          { r: "Galatians 2:20", t: "And it is no longer I who live, but it is Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me." },
          { r: "1 John 4:9–10", t: "God's love was revealed among us in this way: God sent his only Son into the world so that we might live through him. In this is love, not that we loved God but that he loved us and sent his Son to be the atoning sacrifice for our sins." },
          { r: "Revelation 1:5", t: "and from Jesus Christ, the faithful witness, the firstborn of the dead, and the ruler of the kings of the earth. To him who loves us and freed us from our sins by his blood." },
          { r: "Hosea 2:19", t: "I will take you for my wife forever; I will take you for my wife in righteousness and in justice, in steadfast love, and in mercy." },
          { r: "Isaiah 54:10", t: "For the mountains may depart and the hills be removed, but my steadfast love shall not depart from you, and my covenant of peace shall not be removed, says the Lord, who has compassion on you." },
          { r: "Psalm 103:13", t: "As a father has compassion for his children, so the Lord has compassion for those who fear him." },
          { r: "Psalm 116:5", t: "Gracious is the Lord, and righteous; our God is merciful." },
          { r: "Micah 7:18", t: "Who is a God like you, pardoning iniquity and passing over the transgression of the remnant of your possession? He does not retain his anger forever, because he delights in showing clemency." },
          { r: "Luke 15:20", t: "So he set off and went to his father. But while he was still far off, his father saw him and was filled with compassion; he ran and put his arms around him and kissed him." },
          { r: "John 15:13", t: "No one has greater love than this, to lay down one's life for one's friends." },
        ],
        7: [
          { r: "Galatians 5:25", t: "If we live by the Spirit, let us also be guided by the Spirit." },
          { r: "Romans 8:14", t: "For all who are led by the Spirit of God are children of God." },
          { r: "Acts 2:4", t: "All of them were filled with the Holy Spirit and began to speak in other languages, as the Spirit gave them ability." },
          { r: "John 3:8", t: "The wind blows where it chooses, and you hear the sound of it, but you do not know where it comes from or where it goes. So it is with everyone who is born of the Spirit." },
          { r: "Romans 8:5", t: "For those who live according to the flesh set their minds on the things of the flesh, but those who live according to the Spirit set their minds on the things of the Spirit." },
          { r: "Romans 8:6", t: "To set the mind on the flesh is death, but to set the mind on the Spirit is life and peace." },
          { r: "1 Corinthians 6:19", t: "Or do you not know that your body is a temple of the Holy Spirit within you, which you have from God, and that you are not your own?" },
          { r: "Galatians 5:16", t: "Live by the Spirit, I say, and do not gratify the desires of the flesh." },
          { r: "Galatians 5:22", t: "By contrast, the fruit of the Spirit is love, joy, peace, patience, kindness, generosity, faithfulness." },
          { r: "Ephesians 4:30", t: "And do not grieve the Holy Spirit of God, with which you were marked with a seal for the day of redemption." },
          { r: "2 Corinthians 3:17", t: "Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom." },
          { r: "Ezekiel 36:27", t: "I will put my spirit within you, and make you follow my statutes and be careful to observe my ordinances." },
          { r: "Joel 2:28", t: "Then afterward I will pour out my spirit on all flesh; your sons and your daughters shall prophesy, your old men shall dream dreams, and your young men shall see visions." },
          { r: "Isaiah 44:3", t: "For I will pour water on the thirsty land, and streams on the dry ground; I will pour my spirit upon your descendants, and my blessing on your offspring." },
          { r: "Titus 3:5", t: "He saved us, not because of any works of righteousness that we had done, but according to his mercy, through the water of rebirth and renewal by the Holy Spirit." },
          { r: "John 14:26", t: "But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you everything, and remind you of all that I have said to you." },
          { r: "John 16:13", t: "When the Spirit of truth comes, he will guide you into all the truth; for he will not speak on his own, but will speak whatever he hears, and he will declare to you the things that are to come." },
          { r: "Romans 8:26", t: "Likewise the Spirit helps us in our weakness; for we do not know how to pray as we ought, but that very Spirit intercedes with sighs too deep for words." },
          { r: "Acts 5:32", t: "And we are witnesses to these things, and so is the Holy Spirit whom God has given to those who obey him." },
          { r: "Luke 11:13", t: "If you then, who are evil, know how to give good gifts to your children, how much more will the heavenly Father give the Holy Spirit to those who ask him!" },
          { r: "Psalm 51:12", t: "Restore to me the joy of your salvation, and sustain in me a willing spirit." },
          { r: "Psalm 104:30", t: "When you send forth your spirit, they are created; and you renew the face of the ground." },
          { r: "Wisdom 9:17", t: "Who has learned your counsel, unless you have given wisdom and sent your holy spirit from on high?" },
          { r: "Sirach 39:6", t: "If it pleases the Lord Almighty, he will be filled with the spirit of understanding; he will pour forth his words of wisdom in thanksgiving to the Lord." },
          { r: "Zechariah 4:6", t: "Not by might, nor by power, but by my spirit, says the Lord of hosts." },
          { r: "Micah 3:8", t: "But as for me, I am filled with power, with the spirit of the Lord, and with justice and might, to declare to Jacob his transgression and to Israel his sin." },
          { r: "Isaiah 11:2", t: "The spirit of the Lord shall rest on him, the spirit of wisdom and understanding, the spirit of counsel and might, the spirit of knowledge and the fear of the Lord." },
          { r: "Romans 15:13", t: "May the God of hope fill you with all joy and peace in believing, so that you may abound in hope by the power of the Holy Spirit." },
          { r: "1 Thessalonians 1:6", t: "And you became imitators of us and of the Lord, for in spite of persecution you received the word with joy inspired by the Holy Spirit." },
          { r: "2 Timothy 1:7", t: "For God did not give us a spirit of cowardice, but rather a spirit of power and of love and of self-discipline." },
          { r: "Acts 4:31", t: "When they had prayed, the place in which they were gathered together was shaken; and they were all filled with the Holy Spirit and spoke the word of God with boldness." },
        ],
        8: [
          { r: "Hebrews 11:1", t: "Now faith is the assurance of things hoped for, the conviction of things not seen." },
          { r: "Mark 9:23", t: "Jesus said to him, \"If you are able!—all things can be done for the one who believes.\"" },
          { r: "Mark 5:36", t: "But overhearing what they said, Jesus said to the leader of the synagogue, \"Do not fear, only believe.\"" },
          { r: "Luke 17:5", t: "The apostles said to the Lord, \"Increase our faith!\"" },
          { r: "Romans 10:17", t: "So faith comes from what is heard, and what is heard comes through the word of Christ." },
          { r: "Romans 4:20–21", t: "No distrust made him waver concerning the promise of God, but he grew strong in his faith as he gave glory to God, being fully convinced that God was able to do what he had promised." },
          { r: "James 2:17", t: "So faith by itself, if it has no works, is dead." },
          { r: "Hebrews 11:6", t: "And without faith it is impossible to please God, for whoever would approach him must believe that he exists and that he rewards those who seek him." },
          { r: "Matthew 17:20", t: "He said to them, \"Because of your little faith. For truly I tell you, if you have faith the size of a mustard seed, you will say to this mountain, 'Move from here to there,' and it will move; and nothing will be impossible for you.\"" },
          { r: "2 Corinthians 5:7", t: "For we walk by faith, not by sight." },
          { r: "Galatians 2:16", t: "Yet we know that a person is justified not by the works of the law but through faith in Jesus Christ. And we have come to believe in Christ Jesus, so that we might be justified by faith in Christ, and not by doing the works of the law, because no one will be justified by the works of the law." },
          { r: "Ephesians 2:8", t: "For by grace you have been saved through faith, and this is not your own doing; it is the gift of God." },
          { r: "1 Peter 1:8–9", t: "Although you have not seen him, you love him; and even though you do not see him now, you believe in him and rejoice with an indescribable and glorious joy, for you are receiving the outcome of your faith, the salvation of your souls." },
          { r: "John 3:16", t: "For God so loved the world that he gave his only Son, so that everyone who believes in him may not perish but may have eternal life." },
          { r: "John 20:29", t: "Jesus said to him, \"Have you believed because you have seen me? Blessed are those who have not seen and yet have come to believe.\"" },
          { r: "Psalm 27:13", t: "I believe that I shall see the goodness of the Lord in the land of the living." },
          { r: "Psalm 46:11", t: "Be still, and know that I am God! I am exalted among the nations, I am exalted in the earth." },
          { r: "Psalm 119:66", t: "Teach me good judgment and knowledge, for I believe in your commandments." },
          { r: "Daniel 3:40", t: "Blessed are you who look into the depths from your throne on the cherubim, praiseworthy and exalted above all forever." },
          { r: "Tobit 5:7", t: "Tobias answered, \"I will do everything that you have commanded, father.\"" },
          { r: "Sirach 2:10", t: "Consider the generations of old and see: has anyone trusted in the Lord and been disappointed? Or has anyone persevered in the fear of the Lord and been forsaken? Or has anyone called upon him and been ignored?" },
          { r: "Isaiah 7:9", t: "If you do not stand firm in faith, you shall not stand at all." },
          { r: "Habakkuk 2:4", t: "Look at the proud! Their spirit is not right in them, but the righteous live by their faith." },
          { r: "Romans 1:17", t: "For in it the righteousness of God is revealed through faith for faith; as it is written, \"The one who is righteous will live by faith.\"" },
          { r: "Hebrews 10:38", t: "But my righteous one will live by faith. My soul takes no pleasure in anyone who shrinks back." },
          { r: "Luke 1:45", t: "And blessed is she who believed that there would be a fulfillment of what was spoken to her by the Lord." },
          { r: "Matthew 8:10", t: "When Jesus heard this, he was amazed and said to those who followed him, \"Truly I tell you, in no one in Israel have I found such faith.\"" },
          { r: "Matthew 15:28", t: "Then Jesus answered her, \"Woman, great is your faith! Let it be done for you as you wish.\" And her daughter was healed instantly." },
          { r: "Acts 14:9", t: "He listened to Paul as he was speaking. And Paul, looking at him intently and seeing that he had faith to be healed." },
          { r: "James 1:6", t: "But ask in faith, never doubting, for the one who doubts is like a wave of the sea, driven and tossed by the wind." },
          { r: "1 John 5:4", t: "For whatever is born of God conquers the world. And this is the victory that conquers the world, our faith." },
        ],
        9: [
          { r: "Colossians 3:23", t: "Whatever your task, work at it heartily, as serving the Lord and not human beings," },
          { r: "Proverbs 16:3", t: "Commit your work to the Lord, and your plans will be established." },
          { r: "1 Corinthians 10:31", t: "So, whether you eat or drink, or whatever you do, do everything for the glory of God." },
          { r: "Romans 12:11", t: "Do not lag in zeal, be ardent in spirit, serve the Lord." },
          { r: "Ecclesiastes 9:10", t: "Whatever your hand finds to do, do with your might; for there is no work or thought or knowledge or wisdom in Sheol, to which you are going." },
          { r: "Sirach 11:21", t: "Do not marvel at the works of a sinner, but trust in the Lord and keep steady at your work; for it is easy in the sight of the Lord to enrich a poor person suddenly, in an instant." },
          { r: "Psalm 90:17", t: "Let the favor of the Lord our God be upon us, and prosper for us the work of our hands— O prosper the work of our hands!" },
          { r: "Psalm 127:1", t: "Unless the Lord builds the house, those who build it labor in vain. Unless the Lord guards the city, the guard keeps watch in vain." },
          { r: "Psalm 128:2", t: "You shall eat the fruit of the labor of your hands; you shall be happy, and it shall go well with you." },
          { r: "Deuteronomy 8:17–18", t: "Do not say to yourself, \"My power and the might of my own hand have gotten me this wealth.\" But remember the Lord your God, for it is he who gives you power to get wealth, so that he may confirm his covenant that he swore to your ancestors, as he is doing today." },
          { r: "Proverbs 14:23", t: "In all toil there is profit, but mere talk leads only to poverty." },
          { r: "Tobit 2:18", t: "After this I became blind and could not see for two years, and I did no work for my family." },
          { r: "Sirach 38:34", t: "They will not be sought out to rule a council, and they will not be elevated to the assembly of the elders. They do not sit in the judge's seat, nor do they understand the decisions of the courts; they cannot expound discipline or judgment, and they are not found among those who give instruction." },
          { r: "Matthew 11:28", t: "Come to me, all you that are weary and are carrying heavy burdens, and I will give you rest." },
          { r: "2 Thessalonians 3:10", t: "For even when we were with you, we gave you this command: Anyone unwilling to work should not eat." },
          { r: "Ephesians 4:28", t: "Thieves must give up stealing; rather let them labor and work honestly with their own hands, so as to have something to share with the needy." },
          { r: "1 Timothy 5:8", t: "And whoever does not provide for relatives, and especially for family members, has denied the faith and is worse than an unbeliever." },
          { r: "Genesis 2:15", t: "The Lord God took the man and put him in the garden of Eden to till it and keep it." },
          { r: "John 6:27", t: "Do not work for the food that perishes, but for the food that endures for eternal life, which the Son of Man will give you. For it is on him that God the Father has set his seal." },
          { r: "John 9:4", t: "We must work the works of him who sent me while it is day; night is coming when no one can work." },
          { r: "Philippians 2:12", t: "Therefore, my beloved, just as you have always obeyed me, not only in my presence, but much more now in my absence, work out your own salvation with fear and trembling;" },
          { r: "James 1:22", t: "But be doers of the word, and not merely hearers who deceive themselves." },
          { r: "Proverbs 6:6", t: "Go to the ant, you lazybones; consider its ways, and be wise." },
          { r: "Proverbs 12:11", t: "Those who till their land will have plenty of food, but those who follow worthless pursuits have no sense." },
          { r: "Sirach 7:16", t: "Do not hate hard labor or farm work, which the Most High has created." },
          { r: "Isaiah 65:23", t: "They shall not labor in vain, or bear children for calamity; for they shall be offspring blessed by the Lord— and their descendants as well." },
          { r: "Jeremiah 29:11", t: "For surely I know the plans I have for you, says the Lord, plans for your welfare and not for harm, to give you a future with hope." },
          { r: "Psalm 104:23", t: "People go out to their work and to their labor until the evening." },
          { r: "Nehemiah 4:6", t: "So we rebuilt the wall, and all the wall was joined together to half its height; for the people had a mind to work." },
          { r: "1 Corinthians 15:58", t: "Therefore, my beloved, be steadfast, immovable, always abounding in the work of the Lord, because you know that in the Lord your labor is not in vain." },
          { r: "2 Chronicles 15:7", t: "But you, take courage! Do not let your hands be weak, for your work shall be rewarded." },
        ],
        10: [
          { r: "Luke 2:19", t: "But Mary treasured all these words and pondered them in her heart." },
          { r: "Psalm 119:11", t: "I treasure your word in my heart, so that I may not sin against you." },
          { r: "John 2:5", t: "His mother said to the servants, \"Do whatever he tells you.\"" },
          { r: "Luke 1:29", t: "But she was much perplexed by his words and pondered what sort of greeting this might be." },
          { r: "Psalm 77:6", t: "I commune with my heart in the night; I meditate and search my spirit." },
          { r: "Psalm 119:148", t: "My eyes are awake before each watch of the night, that I may meditate on your promise." },
          { r: "Psalm 143:5", t: "I remember the days of old, I think about all your deeds, I meditate on the works of your hands." },
          { r: "Joshua 1:8", t: "This book of the law shall not depart out of your mouth; you shall meditate on it day and night, so that you may be careful to act in accordance with all that is written in it. For then you shall make your way prosperous, and then you shall be successful." },
          { r: "Sirach 14:20–21", t: "Blessed is the person who meditates on wisdom and who reasons intelligently. She will reflect in her heart on her ways and ponder her secrets." },
          { r: "Philippians 4:8", t: "Finally, beloved, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is pleasing, whatever is commendable, if there is any excellence and if there is anything worthy of praise, think about these things." },
          { r: "1 Timothy 4:15", t: "Put these things into practice, devote yourself to them, so that all may see your progress." },
          { r: "Psalm 19:15", t: "Let the words of my mouth and the meditation of my heart be acceptable to you, O Lord, my rock and my redeemer." },
          { r: "Psalm 49:4", t: "I will incline my ear to a proverb; I will solve my riddle to the music of the harp." },
          { r: "Psalm 63:7", t: "For you have been my help, and in the shadow of your wings I sing for joy." },
          { r: "Psalm 77:12", t: "I will also meditate on all your work, and muse on your mighty deeds." },
          { r: "Psalm 119:97", t: "Oh, how I love your law! It is my meditation all day long." },
          { r: "Psalm 119:99", t: "I have more understanding than all my teachers, for your decrees are my meditation." },
          { r: "Deuteronomy 32:7", t: "Remember the days of old, consider the years long past; ask your father, and he will inform you; your elders, and they will tell you." },
          { r: "Ecclesiastes 12:13", t: "The end of the matter; all has been heard. Fear God, and keep his commandments; for that is the whole duty of everyone." },
          { r: "Wisdom 8:16", t: "When I enter my house, I shall find rest with her, for companionship with her has no bitterness, and life with her has no pain, but gladness and joy." },
          { r: "Sirach 6:37", t: "Reflect on the statutes of the Lord, and meditate at all times on his commandments. It is he who will give insight to you, and your desire for wisdom will be granted." },
          { r: "Proverbs 4:26", t: "Keep straight the path of your feet, and all your ways will be sure." },
          { r: "Isaiah 26:3", t: "Those of steadfast mind you keep in peace— in peace because they trust in you." },
          { r: "Matthew 6:28", t: "And why do you worry about clothing? Consider the lilies of the field, how they grow; they neither toil nor spin," },
          { r: "Luke 10:42", t: "Mary has chosen the better part, which will not be taken away from her." },
          { r: "1 Corinthians 2:10-11", t: "These things God has revealed to us through the Spirit; for the Spirit searches everything, even the depths of God. For what human being knows what is truly human except the human spirit that is within? So also no one comprehends what is truly God's except the Spirit of God." },
          { r: "Romans 12:2", t: "Do not be conformed to this world, but be transformed by the renewing of your minds, so that you may discern what is the will of God—what is good and acceptable and perfect." },
          { r: "2 Timothy 2:7", t: "Think over what I say, for the Lord will give you understanding in all things." },
          { r: "Hebrews 3:1", t: "Therefore, brothers and sisters, holy partners in a heavenly calling, consider Jesus, the apostle and high priest of our confession," },
          { r: "James 1:25", t: "But those who look into the perfect law, the law of liberty, and persevere, not being hearers who forget but doers who act—they will be blessed in their doing." },
          { r: "Revelation 3:3", t: "Remember then what you received and heard; obey it, and repent. If you do not wake up, I will come like a thief, and you will not know at what hour I will come to you." },
        ],
        11: [
          { r: "1 Thessalonians 5:18", t: "Give thanks in all circumstances; for this is the will of God in Christ Jesus for you." },
          { r: "Proverbs 19:17", t: "Whoever is kind to the poor lends to the Lord, and will be repaid in full." },
          { r: "Matthew 25:40", t: "And the king will answer them, \"Truly I tell you, just as you did it to one of the least of these who are members of my family, you did it to me.\"" },
          { r: "Luke 6:38", t: "Give, and it will be given to you. A good measure, pressed down, shaken together, running over, will be put into your lap; for the measure you give will be the measure you get back." },
          { r: "2 Corinthians 9:7", t: "Each of you must give as you have made up your mind, not reluctantly or under compulsion, for God loves a cheerful giver." },
          { r: "Philippians 4:6", t: "Do not worry about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God." },
          { r: "Psalm 9:2", t: "I will give thanks to the Lord with my whole heart; I will tell of all your wonderful deeds." },
          { r: "Psalm 26:7", t: "singing aloud a song of thanksgiving, and telling all your wondrous deeds." },
          { r: "Psalm 30:13", t: "O Lord my God, I will give thanks to you forever." },
          { r: "Psalm 50:14", t: "Offer to God a sacrifice of thanksgiving, and pay your vows to the Most High." },
          { r: "Psalm 100:4", t: "Enter his gates with thanksgiving, and his courts with praise. Give thanks to him, bless his name." },
          { r: "Psalm 107:8", t: "Let them thank the Lord for his steadfast love, for his wonderful works to humankind." },
          { r: "Psalm 116:12", t: "What shall I return to the Lord for all his bounty to me?" },
          { r: "Psalm 118:1", t: "O give thanks to the Lord, for he is good; his steadfast love endures forever!" },
          { r: "Psalm 145:16", t: "You open your hand, satisfying the desire of every living thing." },
          { r: "Tobit 12:11", t: "For almsgiving saves from death and purges away every sin. Those who give alms will enjoy a full life," },
          { r: "Sirach 35:2", t: "The one who repays a good turn offers fine flour, and one who gives alms sacrifices a thank offering." },
          { r: "Proverbs 14:21", t: "Those who despise their neighbors are sinners, but happy are those who are kind to the poor." },
          { r: "Proverbs 22:9", t: "Those who are generous are blessed, for they share their bread with the poor." },
          { r: "Isaiah 58:7", t: "Is it not to share your bread with the hungry, and bring the homeless poor into your house; when you see the naked, to cover them, and not to hide yourself from your own kin?" },
          { r: "Isaiah 58:10", t: "if you offer your food to the hungry and satisfy the needs of the afflicted, then your light shall rise in the darkness and your gloom be like the noonday." },
          { r: "Matthew 6:3–4", t: "But when you give alms, do not let your left hand know what your right hand is doing, so that your alms may be done in secret; and your Father who sees in secret will reward you." },
          { r: "Luke 14:13", t: "But when you give a banquet, invite the poor, the crippled, the lame, and the blind." },
          { r: "Acts 20:35", t: "In all this I have given you an example that by such work we must support the weak, remembering the words of the Lord Jesus, for he himself said, \"It is more blessed to give than to receive.\"" },
          { r: "Romans 12:13", t: "Contribute to the needs of the saints; extend hospitality to strangers." },
          { r: "Galatians 6:9", t: "So let us not grow weary in doing what is right, for we will reap at harvest time, if we do not give up." },
          { r: "Hebrews 13:16", t: "Do not neglect to do good and to share what you have, for such sacrifices are pleasing to God." },
          { r: "James 1:27", t: "Religion that is pure and undefiled before God, the Father, is this: to care for orphans and widows in their distress, and to keep oneself unstained by the world." },
          { r: "1 John 3:17", t: "How does God's love abide in anyone who has the world's goods and sees a brother or sister in need and yet refuses help?" },
          { r: "Tobit 4:7", t: "Give alms from your possessions to all who live uprightly, and do not let your eye begrudge the gift when you make it. Do not turn your face away from anyone who is poor, and the face of God will not be turned away from you." },
          { r: "2 Corinthians 8:9", t: "For you know the generous act of our Lord Jesus Christ, that though he was rich, yet for your sakes he became poor, so that by his poverty you might become rich." },
        ],
        12: [
          { r: "Luke 12:35", t: "Be dressed for action and have your lamps lit;" },
          { r: "Isaiah 9:2", t: "The people who walked in darkness have seen a great light; those who lived in a land of deep darkness— on them light has shined." },
          { r: "Revelation 22:20", t: "The one who testifies to these things says, \"Surely I am coming soon.\" Amen. Come, Lord Jesus!" },
          { r: "Matthew 24:42", t: "Keep awake therefore, for you do not know on what day your Lord is coming." },
          { r: "Mark 13:33", t: "Beware, keep alert; for you do not know when the time will come." },
          { r: "Luke 21:36", t: "Be alert at all times, praying that you may have the strength to escape all these things that will take place, and to stand before the Son of Man." },
          { r: "Romans 13:11", t: "Besides this, you know what time it is, how it is now the moment for you to wake from sleep. For salvation is nearer to us now than when we became believers;" },
          { r: "1 Corinthians 16:13", t: "Keep alert, stand firm in your faith, be courageous, be strong." },
          { r: "1 Thessalonians 5:6", t: "So then let us not fall asleep as others do, but let us keep awake and be sober;" },
          { r: "2 Peter 3:11", t: "Since all these things are to be dissolved in this way, what sort of persons ought you to be in leading lives of holiness and godliness," },
          { r: "Psalm 27:14", t: "Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!" },
          { r: "Psalm 130:5–6", t: "I wait for the Lord, my soul waits, and in his word I hope; my soul waits for the Lord more than those who watch for the morning, more than those who watch for the morning." },
          { r: "Isaiah 40:3", t: "A voice cries out: \"In the wilderness prepare the way of the Lord, make straight in the desert a highway for our God.\"" },
          { r: "Isaiah 52:1", t: "Awake, awake, put on your strength, O Zion! Put on your beautiful garments, O Jerusalem, the holy city; for the uncircumcised and the unclean shall enter you no more." },
          { r: "Malachi 3:1", t: "See, I am sending my messenger to prepare the way before me, and the Lord whom you seek will suddenly come to his temple. The messenger of the covenant in whom you delight— indeed, he is coming, says the Lord of hosts." },
          { r: "Micah 5:2", t: "But you, O Bethlehem of Ephrathah, who are one of the little clans of Judah, from you shall come forth for me one who is to rule in Israel, whose origin is from of old, from ancient days." },
          { r: "Baruch 5:5", t: "Arise, O Jerusalem, stand upon the height; look toward the east, and see your children gathered from west and east at the word of the Holy One, rejoicing that God has remembered them." },
          { r: "Wisdom 18:14", t: "For when gentle silence enveloped all things, and night in its swift course was now half gone, your all-powerful word leaped from heaven, from the royal throne, into the midst of the land that was doomed, a stern warrior" },
          { r: "Matthew 3:2", t: "Repent, for the kingdom of heaven has come near." },
          { r: "Luke 3:4", t: "as it is written in the book of the words of the prophet Isaiah, \"The voice of one crying out in the wilderness: 'Prepare the way of the Lord, make his paths straight.'\"" },
          { r: "John 1:23", t: "He said, \"I am the voice of one crying out in the wilderness, 'Make straight the way of the Lord,' as the prophet Isaiah said.\"" },
          { r: "Philippians 4:5", t: "Let your gentleness be known to everyone. The Lord is near." },
          { r: "James 5:8", t: "You also must be patient. Strengthen your hearts, for the coming of the Lord is near." },
          { r: "1 Peter 1:13", t: "Therefore prepare your minds for action; discipline yourselves; set all your hope on the grace that Jesus Christ will bring you when he is revealed." },
          { r: "Romans 13:12", t: "The night is far gone, the day is near. Let us then lay aside the works of darkness and put on the armor of light;" },
          { r: "Isaiah 11:10", t: "On that day the root of Jesse shall stand as a signal to the peoples; the nations shall inquire of him, and his dwelling shall be glorious." },
          { r: "Isaiah 30:18", t: "Therefore the Lord waits to be gracious to you; therefore he will rise up to show mercy to you. For the Lord is a God of justice; blessed are all those who wait for him." },
          { r: "Psalm 79:6", t: "Pour out your anger on the nations that do not know you, and on the kingdoms that do not call on your name." },
          { r: "Daniel 9:19", t: "O Lord, hear; O Lord, forgive; O Lord, listen and act and do not delay! For your own sake, O my God, because your city and your people bear your name." },
          { r: "Habakkuk 2:3", t: "For there is still a vision for the appointed time; it speaks of the end, and does not lie. If it seems to tarry, wait for it; it will surely come, it will not delay." },
          { r: "Zephaniah 3:8", t: "Therefore wait for me, says the Lord, for the day when I arise as a witness. For my decision is to gather nations, to assemble kingdoms, to pour out upon them my indignation, all the burning anger of my fury; for in the fire of my passion all the earth shall be consumed." },
        ],
      };

  
    var sampleEntries = {
      "01-01": {
        scripturePrimaryRef: "Galatians 4:4-7",
        scripturePrimaryText:
          "But when the fullness of time had come, God sent his Son, born of a woman, born under the law, in order to redeem those who were under the law, so that we might receive adoption as children. And because you are children, God has sent the Spirit of his Son into our hearts, crying, \"Abba! Father!\" So you are no longer a slave but a child, and if a child then also an heir, through God.",
        reflection:
          "Paul\u2019s logic is blunt: the Son enters our slavery under the law in order to lift us into sonship\u2014not metaphorical comfort, but heirship before the Father. The Spirit you received does not murmur; he cries \u201cAbba\u201d from within, which means your deepest name is spoken in the voice of God. If January begins with spreadsheets before that cry, you have already traded your birthright for noise.",
        fatherNote:
          "Your children learn whether God is a distant judge or \u201cAbba\u201d from the tone you use when you come home tired. Say the word \u201cAbba\u201d aloud once at dinner tonight and tell them it is the name Jesus won for you\u2014not a slogan, a fact.",
        challengeType: "prayer",
        challenge:
          "Kneel beside your bed before anyone rises, whisper Galatians 4:6 once, and stay silent sixty seconds while the Spirit prays in you without your commentary.",
        leastOfThese:
          "Identify one coworker who worked Christmas week while you rested and hand them a sealed thank-you card with twenty dollars for coffee\u2014no speech, only your signature.",
        prayer:
          "Father, you sent your Son in the fullness of time to make slaves into heirs.\nI begin years as if adoption were my achievement.\nLet the Spirit\u2019s cry drown my anxious planning this morning.\nTeach my household the sound of \u201cAbba\u201d before it learns my stress.\nI live as your child today or I live a lie. Amen.",
        journalPrompt:
          "Where did Galatians 4:4\u20137\u2014fullness of time, Son, Spirit, Abba\u2014show up in what I said or did today?\n\nWhere did I act like a slave to work, reputation, or fear instead of an heir\u2014and how do I bring that to God tonight?",
      },
      "01-02": {
        scripturePrimaryRef: "Genesis 12:1-3",
        scripturePrimaryText:
          "Now the LORD said to Abram, \"Go from your country and your kindred and your father's house to the land that I will show you. I will make of you a great nation, and I will bless you, and make your name great, so that you will be a blessing. I will bless those who bless you, and the one who curses you I will curse; and in you all the families of the earth shall be blessed.\"",
        reflection:
          "God\u2019s first word to Abram is a command to leave\u2014security, clan, and story\u2014for a land shown only by trust. The promise is universal blessing routed through one man\u2019s obedience, which is how Israel and finally Christ will save the world. You cannot claim faith in the God of Abraham while clinging to every familiar sin that keeps your family small.",
        fatherNote:
          "Abram had to leave his father\u2019s house; you must leave at least one habit\u2014rage, pornography, sarcasm as default\u2014that trains your children in fear. Name it to your wife tonight without defending yourself, then ask for one practical guardrail for the week.",
        challengeType: "conversation",
        challenge:
          "At supper, map on paper one \u201ccountry, kindred, and father\u2019s house\u201d comfort you refuse to leave (money, phone, old grudge) and burn the slip after praying Genesis 12:1 aloud with your wife.",
        leastOfThese:
          "Drive an immigrant neighbor without a car to the grocery store this evening and carry one bag to their door while praying silently that all families of the earth be blessed.",
        prayer:
          "Lord, you called Abram out before you showed the map.\nI demand vision before obedience.\nBless someone through me today the way you blessed the nations through him.\nCut the rope to what keeps my children from seeing courage.\nI go, or I forfeit the promise. Amen.",
        journalPrompt:
          "Where did Genesis 12\u2019s call to leave and become a blessing appear in a concrete choice today?\n\nWhere did I cling to my \u201ccountry and kindred\u201d rather than obey\u2014and how do I confess that before God?",
      },
      "01-03": {
        scripturePrimaryRef: "Deuteronomy 30:11-14",
        scripturePrimaryText:
          "Surely, this commandment that I am commanding you today is not too hard for you, nor is it too far away. It is not in heaven, that you should say, \"Who will go up to heaven for us, and get it for us so that we may hear it and observe it?\" Neither is it beyond the sea, that you should say, \"Who will cross to the other side of the sea for us, and get it for us so that we may hear it and observe it?\" No, the word is very near to you; it is in your mouth and in your heart for you to observe.",
        reflection:
          "Moses demolishes every excuse that holiness is exotic: the command is not across the ocean or above the clouds; it is in the mouth and heart you already use at breakfast. That nearness is mercy\u2014and judgment\u2014because you cannot pretend the good was unavailable. Stop waiting for a retreat to fix what tonight\u2019s obedience could heal.",
        fatherNote:
          "Your kids hear the word \u201cnear\u201d when you apologize without theatrics, keep a promise about bedtime, or shut the laptop when they speak. Pick one command you have called \u201cimpossible\u201d and do it visibly before they sleep.",
        challengeType: "service",
        challenge:
          "Memorize Deuteronomy 30:14 while shaving; repeat it when you are tempted to say you \u201ccannot\u201d apologize to your teenager for yesterday\u2019s tone\u2014then apologize before noon.",
        leastOfThese:
          "Bring a hot meal to a single parent in your parish who cannot leave toddlers alone; text only \u201cDeuteronomy 30:14\u2014you are not alone\u201d if words embarrass them.",
        prayer:
          "Lord, your word is not in heaven; it is in my mouth and heart.\nI outsource holiness to conferences I never attend.\nGive me courage to obey what I already know before dinner.\nLet my children see nearness, not excuses.\nI observe today or I mock your mercy. Amen.",
        journalPrompt:
          "Where did I recognize God\u2019s command as near\u2014in speech, patience, or honesty\u2014today?\n\nWhere did I claim the law was \u201ctoo hard\u201d while refusing what was obvious\u2014and how do I bring that to God?",
      },
      "01-04": {
        scripturePrimaryRef: "Isaiah 43:1-3",
        scripturePrimaryText:
          "But now thus says the LORD, he who created you, O Jacob, he who formed you, O Israel: Do not fear, for I have redeemed you; I have called you by name, you are mine. When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you. For I am the LORD your God, the Holy One of Israel, your Savior.",
        reflection:
          "Redemption here is spoken to a people who will drown and burn\u2014not to men who skip suffering. God does not promise the absence of water or fire; he promises presence within them, which is how the cross already works. If you are waiting for a life without heat before you trust him, you are still worshiping comfort, not the Holy One of Israel.",
        fatherNote:
          "When your wife or child is in the river, they do not need your lecture on theology; they need your steady body in the room. Tonight, ask who in your house feels the water rising and sit with them without fixing for ten minutes.",
        challengeType: "sacrifice",
        challenge:
          "Fast from complaining aloud until sunset; each time you almost speak a gripe, touch your forehead and whisper \u201cI have called you by name\u201d once.",
        leastOfThese:
          "Visit a nursing-home resident who rarely gets visitors; hold their hand through one decade of the rosary without checking your watch.",
        prayer:
          "Holy One of Israel, you named me yours in baptism.\nI fear water and fire like an orphan.\nWalk through today\u2019s trouble at my elbow until I believe you.\nStrengthen my wife when I want to flee.\nI pass through with you or not at all. Amen.",
        journalPrompt:
          "Where did Isaiah 43\u2019s promise of God-with-us in water and fire match a moment today?\n\nWhere did fear make me absent or harsh at home\u2014and how do I offer that failure to the Savior?",
      },
      "01-05": {
        scripturePrimaryRef: "Joshua 1:7-9",
        scripturePrimaryText:
          "Only be strong and very courageous, being careful to act in accordance with all the law that my servant Moses commanded you; do not turn from it to the right hand or to the left, so that you may be successful wherever you go. This book of the law shall not depart out of your mouth; you shall meditate on it day and night, so that you may be careful to act in accordance with all that is written in it. For then you shall make your way prosperous, and then you shall be successful. I hereby command you: Be strong and courageous; do not be frightened or dismayed, for the LORD your God is with you wherever you go.\"",
        reflection:
          "Success for Joshua is not stock options; it is fidelity to the torah spoken day and night until the body obeys. Courage is commanded\u2014twice\u2014because fear is the default when the land still has giants. Your family does not need a nervous captain calculating odds; it needs a man who believes \u201cwith you wherever you go\u201d includes the hallway outside your teenager\u2019s door.",
        fatherNote:
          "Meditate does not mean scroll; it means mutter the Word until it orders your calendar. Choose one twenty-minute block this week where the phone stays off and Scripture is open on the kitchen counter while your children watch.",
        challengeType: "study",
        challenge:
          "Open Deuteronomy or Joshua at random tonight, read eight verses aloud to your household, and end with Joshua 1:9 without adding your commentary.",
        leastOfThese:
          "Pay the overdue fine on a struggling family\u2019s library card at your branch desk and pray Joshua 1:9 in the parking lot before you drive home.",
        prayer:
          "Lord, you commanded courage because you knew I would be afraid.\nI substitute bravado for meditation and call it strength.\nLet your law be in my mouth today until my hands obey.\nGo with me into the conversation I dread at work.\nI act on your word or I abandon my post. Amen.",
        journalPrompt:
          "Where did Joshua 1\u2019s coupling of meditation and courageous action show up today?\n\nWhere did fear or distraction pull me off the law\u2019s path\u2014and how do I bring that to God?",
      },
      "01-06": {
        scripturePrimaryRef: "Matthew 2:10-11",
        scripturePrimaryText:
          "When they saw that the star had stopped, they were overwhelmed with joy. On entering the house, they saw the child with Mary his mother; and they knelt down and paid him homage. Then, opening their treasure chests, they offered him gifts of gold, frankincense, and myrrh.",
        reflection:
          "The magi\u2019s joy peaks not in the journey but in the house\u2014when the star stops above a child who looks like nothing royalty promised. Homage is bodily; gifts are costly; the scene refuses every reduction of Jesus to an idea. If your Christianity never costs gold\u2014time, money, reputation\u2014you are still camped in theory east of Bethlehem.",
        fatherNote:
          "Kneeling is what bodies do before kings; show your children once today\u2014at home after Mass or before a crucifix\u2014that Jesus is not your peer. Let them see your knees touch the floor before they hear another lecture about reverence.",
        challengeType: "prayer",
        challenge:
          "Spend fifteen minutes before the tabernacle or a home crucifix kneeling in silence; place one bill or coin in the poor box on the way out as gold for the King.",
        leastOfThese:
          "Offer to cover registration for a child whose parents cannot afford Catholic school sports\u2014tell the office to keep your name off the receipt.",
        prayer:
          "Lord Jesus, the wise men knelt while Herod plotted.\nI treat you as an opinion I can take or leave.\nReceive my gold today\u2014hours I would rather hoard.\nLet joy break when I see you in the poor.\nI pay homage with substance or I lie. Amen.",
        journalPrompt:
          "Where did Matthew 2:10\u201311\u2014joy, house, homage, costly gifts\u2014shape what I did today?\n\nWhere did I withhold treasure, time, or reverence from Christ\u2014and how do I confess that tonight?",
      },
      "01-07": {
        scripturePrimaryRef: "Matthew 4:18-22",
        scripturePrimaryText:
          "As he walked by the Sea of Galilee, he saw two brothers, Simon, who is called Peter, and Andrew his brother, casting a net into the sea—for they were fishermen. And he said to them, \"Follow me, and I will make you fish for people.\" Immediately they left their nets and followed him. As he went from there, he saw two other brothers, James son of Zebedee and his brother John, in the boat with their father Zebedee, mending their nets, and he called them.",
        reflection:
          "Follow me is not an invitation to a seminar; it is a seizure of vocation\u2014nets dropped, boat abandoned, father left mid-task. Matthew\u2019s \u201cimmediately\u201d is theological, not biographical bragging; it shows what grace does when Christ speaks. You have heard the same call in baptism; the only question is which net you still refuse to drop because it feels like identity.",
        fatherNote:
          "Zebedee watched sons walk away\u2014your children will imitate either your nets or your obedience. Name one legitimate good (work email, hobby, reputation) that edged out discipleship this week and cut it for one hour tonight without announcement.",
        challengeType: "conversation",
        challenge:
          "Ask your eldest child what they think Jesus meant by \u201cfish for people\u201d; listen three full minutes, then promise one way you will prioritize family prayer this week\u2014and keep the promise Thursday.",
        leastOfThese:
          "Mow or shovel for a widow on your block who still fishes alone for groceries; refuse payment and cite only \u201cMatthew 4:19\u201d if she presses.",
        prayer:
          "Jesus, you called fishermen, not philosophers.\nI mend nets of vanity while souls drift.\nMake me leave the boat when you speak.\nGive me brothers who hold me accountable.\nI follow today or I stay ashore in sin. Amen.",
        journalPrompt:
          "Where did \u201cFollow me\u201d demand an immediate shift in time, money, or attention today?\n\nWhat net did I clutch because it felt safer than Jesus\u2014and how do I bring that to God?",
      },
      "01-08": {
        scripturePrimaryRef: "Luke 5:1-4",
        scripturePrimaryText:
          "Once while Jesus was standing beside the lake of Gennesaret, and the crowd was pressing in on him to hear the word of God, he saw two boats there at the shore; the fishermen had gone out of them and were washing their nets. He got into one of the boats, the one belonging to Simon, and asked him to put out a little way from the shore. Then he sat down and taught the crowds from the boat. When he had finished speaking, he said to Simon, \"Put out into the deep water and let down your nets for a catch.\"",
        reflection:
          "Jesus teaches the crowd from Simon\u2019s boat, then turns to the professional fisherman with a command that sounds foolish after a fruitless night\u2014put out into deep water and let down nets. Authority to teach and authority to command labor belong to the same Lord; Peter\u2019s boat becomes pulpit and test. If you treat Jesus as interesting speaker but not as master of your schedule and tools, you have not finished the story Luke is telling.",
        fatherNote:
          "Your children watch whether Christ\u2019s word rearranges your evening or only decorates it. Before bed, tell them one command from Scripture you actually obeyed today that cost you pride\u2014not to boast, to show nets lowered in deep water.",
        challengeType: "service",
        challenge:
          "Lower one \u201cnet\u201d Jesus commanded and you postponed\u2014forgive your father-in-law by text, tithe the amount you calculated last Sunday\u2014before the local news starts tonight.",
        leastOfThese:
          "Drop off diapers and wipes at a pregnancy center with a note quoting Luke 5:5\u20136 in your handwriting\u2014no donation letterhead, no photograph.",
        prayer:
          "Lord, you taught the crowd from Simon\u2019s boat, then commanded the deep.\nI let you speak only where it costs nothing.\nPut out my nets where failure still stings.\nLet your word run my tools and my calendar.\nI let them down on your order. Amen.",
        journalPrompt:
          "Where did Luke 5:1\u2014Jesus teaching, then commanding the deep\u2014touch my obedience today?\n\nWhere did I reserve my boat from his command\u2014and how do I bring that to God?",
      },
      "01-09": {
        scripturePrimaryRef: "Romans 8:28-30",
        scripturePrimaryText:
          "We know that all things work together for good for those who love God, who are called according to his purpose. For those whom he foreknew he also predestined to be conformed to the image of his Son, in order that he might be the firstborn within a large family. And those whom he predestined he also called; and those whom he called he also justified; and those whom he justified he also glorified.",
        reflection:
          "The good Paul names is not comfort but conformation to Christ\u2014being squeezed into the Son\u2019s likeness until you belong to a cruciform family. Foreknowledge and glorification are one golden chain; grumbling about providence is a vote against your own destiny. Stop using \u201call things\u201d as a sticker on pain you refuse to offer up.",
        fatherNote:
          "When your child fails a test or loses a friend, they need to hear that God\u2019s purpose is Christ-shaped, not trophy-shaped. Tell one story from your own life where a wound became mercy\u2014no moralizing, only fact.",
        challengeType: "sacrifice",
        challenge:
          "Skip the podcast on your commute once; speak Romans 8:28 aloud three times slowly, then call your father or father-in-law to thank him for one specific sacrifice he made for the family.",
        leastOfThese:
          "Carry a forgotten coworker\u2019s shift report to their desk with coffee you paid for\u2014pray Romans 8:29 silently that they be conformed, not crushed.",
        prayer:
          "Father, you predestined me to look like your Son.\nI want \u201cgood\u201d to mean easy.\nWork today\u2019s annoyance into Christlikeness before I complain.\nHold my children inside your large family.\nI love your purpose or I love myself. Amen.",
        journalPrompt:
          "Where did Romans 8:28\u201330\u2014good as conformity to Christ\u2014explain something today?\n\nWhere did I resent God\u2019s purpose because it hurt\u2014and how do I bring that honestly to him?",
      },
      "01-10": {
        scripturePrimaryRef: "Philippians 4:4-7",
        scripturePrimaryText:
          "Rejoice in the Lord always; again I will say, Rejoice. Let your gentleness be known to everyone. The Lord is near. Do not worry about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
        reflection:
          "Paul doubles \u201crejoice\u201d not because feelings are constant but because the Lord\u2019s nearness is\u2014gentleness is public witness, not private mood. Peace that guards heart and mind is military language: God posts sentries against anxiety when thanksgiving accompanies petition. If your household hears only your worry, you are preaching a different gospel than Philippi received.",
        fatherNote:
          "Gentleness known to everyone starts with the people who cannot avoid you\u2014spouse and kids. Before dinner, ask one child what worried them at school and end with one sentence of gratitude to God together, no fixing.",
        challengeType: "study",
        challenge:
          "Text your pastor one specific thanks for his last homily\u2014quote Philippians 4:5\u2014and add zero requests or complaints in that message.",
        leastOfThese:
          "Bring soup to a parishioner recovering at home; ring the bell, leave Philippians 4:6 on a card, and leave before they feel obliged to host.",
        prayer:
          "Lord, you command joy because you are near, not because life is soft.\nMy gentleness hides when I am tired.\nPost your peace as guard over my mouth at home.\nI will thank you before I petition or I will not petition.\nLet my family hear Philippians, not panic. Amen.",
        journalPrompt:
          "Where did Philippians 4:4\u20137\u2014rejoicing, gentleness, thanksgiving, peace\u2014surface today?\n\nWhere did worry run my house without prayer\u2014and how do I surrender that tonight?",
      },
      "01-11": {
        scripturePrimaryRef: "Revelation 21:1-4",
        scripturePrimaryText:
          "Then I saw a new heaven and a new earth; for the first heaven and the first earth had passed away, and the sea was no more. And I saw the holy city, the new Jerusalem, coming down out of heaven from God, prepared as a bride adorned for her husband. And I heard a loud voice from the throne saying, \"See, the home of God is among mortals. He will dwell with them as their God; they will be his peoples, and God himself will be with them; he will wipe every tear from their eyes. Death will be no more; mourning and crying and pain will be no more, for the first things have passed away.\"",
        reflection:
          "John sees eschatology as descent\u2014God\u2019s city comes down; the dwelling is with mortals, not escape from them. Sea gone means chaos defeated; tears wiped means bodies matter to the One on the throne. Hope that only dreams of leaving earth behind sneers at the very \u201camong mortals\u201d your wife and children inhabit tonight.",
        fatherNote:
          "Your home is a rehearsal for the city: wipe one child\u2019s tears tonight without rushing past the reason they cry. Tell them death and pain will end because the Lamb promised, not because Dad guarantees easy lives.",
        challengeType: "prayer",
        challenge:
          "Stand outside under the stars five minutes after the kids sleep; read Revelation 21:3 once and ask aloud for the grace to make your address feel like God\u2019s tent for one more day.",
        leastOfThese:
          "Sit with a family at children\u2019s hospital chapel during their shift\u2014no advice, only presence and one quiet Our Father when they nod.",
        prayer:
          "Lord of the throne, you will dwell with us as God.\nI treat my house like a hotel and my wife like staff.\nWipe tears I caused; teach me to wipe others\u2019.\nLet the new Jerusalem sound in how I speak after work.\nI want the first things gone starting with my pride. Amen.",
        journalPrompt:
          "Where did Revelation 21\u2019s vision of God-with-us and no more tears touch my actions today?\n\nWhere did I act as if this world were only chaos\u2014and how do I repent before God?",
      },
      "01-12": {
        scripturePrimaryRef: "Psalm 23:1-4",
        scripturePrimaryText:
          "The LORD is my shepherd, I shall not want. He makes me lie down in green pastures; he leads me beside still waters; he restores my soul. He leads me in right paths for his name's sake. Even though I walk through the darkest valley, I fear no evil; for you are with me; your rod and your staff— they comfort me.",
        reflection:
          "David does not say the valley is imaginary; he says evil is not sovereign there because the shepherd\u2019s gear\u2014rod, staff\u2014is active comfort. Want disappears not because cravings die but because another voice directs feedings. Fathers who never lie down in green pastures\u2014never cease striving\u2014model Pharaoh, not the Lord.",
        fatherNote:
          "Force the household into one ten-minute pause: phones off, lights low, Psalm 23 once. Your children need to see that Dad can stop without a panic attack\u2014that is shepherding.",
        challengeType: "conversation",
        challenge:
          "Lie on the living-room floor for eight minutes after work while your kids climb on you; pray Psalm 23:2 silently and refuse to check email until you stand.",
        leastOfThese:
          "Deliver a shepherd\u2019s bag\u2014bread, cheese, fruit\u2014to a food pantry volunteer line before they open; say nothing about yourself.",
        prayer:
          "Good Shepherd, you make me lie down; I call that laziness.\nRestore what I fractured with hurry.\nWalk the valley of my marriage at my side.\nLet rod and staff correct what comfort cannot.\nI shall not want you replaced. Amen.",
        journalPrompt:
          "Where did Psalm 23\u2014green pasture, still water, valley, rod and staff\u2014match my day?\n\nWhere did I refuse to lie down or trust the shepherd\u2014and how do I bring that to God?",
      },
      "01-13": {
        scripturePrimaryRef: "Isaiah 40:1-2",
        scripturePrimaryText:
          "Comfort, O comfort my people, says your God. Speak tenderly to Jerusalem, and cry to her that she has served her term, that her penalty is paid, that she has received from the Lord's hand double for all her sins.",
        reflection:
          "Comfort here is imperative prophecy\u2014God commands speech that announces debt paid, which is how the exile ends. Double is not cruelty but fullness of punishment borne; tenderness is public proclamation, not whispered sentiment. If you only critique your wife or children without speaking paid penalty, you are still Babylon\u2019s voice.",
        fatherNote:
          "Comfort your spouse with one sentence that names a specific virtue God has forged through struggle\u2014no backhanded \u201cbut.\u201d Let your kids overhear tenderness that sounds like Isaiah, not like negotiation.",
        challengeType: "service",
        challenge:
          "Compose a three-sentence note to your wife quoting no Bible verses but imitating Isaiah 40:2\u2019s tone\u2014mail it or slide it under her pillow tonight.",
        leastOfThese:
          "Pay for a tank of gas for the teenager working two jobs to help parents\u2014hand the receipt folded with \u201ccomfort, comfort\u201d written inside.",
        prayer:
          "Lord, you command comfort because Jerusalem\u2019s term is served.\nI rehearse my family\u2019s sins like entertainment.\nLet my mouth announce freedom, not probation.\nTeach me tenderness that costs pride.\nI speak as you command or I stay silent. Amen.",
        journalPrompt:
          "Where did Isaiah 40:1\u20132\u2019s comfort and \u201cpenalty paid\u201d shape my words today?\n\nWhere did harshness replace tender proclamation\u2014and how do I confess that?",
      },
      "01-14": {
        scripturePrimaryRef: "Proverbs 3:5-8",
        scripturePrimaryText:
          "Trust in the LORD with all your heart, and do not rely on your own insight. In all your ways acknowledge him, and he will make straight your paths. Do not be wise in your own eyes; fear the LORD, and turn away from evil. It will be a healing for your flesh and a refreshment for your bones.",
        reflection:
          "Trust is total heart allegiance\u2014insight demoted, not deleted\u2014and acknowledgment of God woven through ordinary ways, not only crises. Straight paths are fruit of fearing the Lord, not of cleverness; healing reaches flesh and bone because sin sickens bodies. Your spreadsheets cannot straighten what pride has crooked.",
        fatherNote:
          "Ask your children one decision they face this week and pray Proverbs 3:6 over them aloud\u2014then refuse to hijack the answer unless they ask. Acknowledging God includes trusting their vocations, not only yours.",
        challengeType: "sacrifice",
        challenge:
          "Turn off route suggestions on your phone for one trip; pray Proverbs 3:5 at each red light you dislike, acknowledging God in a trivial way until it stops feeling trivial.",
        leastOfThese:
          "Carry an elderly parishioner\u2019s trash bins back from the curb all month starting today\u2014no conversation required unless they initiate.",
        prayer:
          "Lord, I lean on my own insight and call it leadership.\nStraighten what I crooked by control.\nHeal my body from stress I baptized as duty.\nI fear you and turn from evil today.\nAll my ways will name you or none will. Amen.",
        journalPrompt:
          "Where did Proverbs 3:5\u20138\u2014trust, acknowledgment, fear, turning\u2014guide a choice today?\n\nWhere was I wise in my own eyes at home\u2014and how do I bring that to God?",
      },
      "01-15": {
        scripturePrimaryRef: "Hebrews 4:12-13",
        scripturePrimaryText:
          "Indeed, the word of God is living and active, sharper than any two-edged sword, piercing until it divides soul from spirit, joints from marrow; it is able to judge the thoughts and intentions of the heart. And before him no creature is hidden, but all are naked and laid bare to the eyes of the one to whom we must render an account.",
        reflection:
          "Scripture is not ink; it is alive\u2014surgery that separates what we call \u201cspiritual\u201d from what is actually flesh dressed in religion. Nothing is hidden before the gaze we will meet at judgment; privacy is a myth before Christ. If the Word never cuts you, you are not listening\u2014you are editing.",
        fatherNote:
          "Read Hebrews 4:12 aloud with your wife after the kids are in bed and ask, \u201cWhere is the Word not allowed to cut here?\u201d Listen without defending for ninety seconds.",
        challengeType: "study",
        challenge:
          "Open your Bible to Hebrews 4:12 at lunch in the break room; let a coworker see the text without your preaching\u2014if they ask, offer one sentence only.",
        leastOfThese:
          "Anonymously pay a stranger\u2019s small medical copay at the pharmacy counter when the clerk announces they are short\u2014slip away before thanks.",
        prayer:
          "Christ, your word is living\u2014cut where I numb conscience with jokes.\nI prefer inspirational posters to surgery.\nLay me bare before you now, not only at death.\nLet joint and marrow mean marriage and money.\nI render account tonight with honesty. Amen.",
        journalPrompt:
          "Where did Hebrews 4:12\u201313\u2014living word and nakedness before God\u2014confront me today?\n\nWhat thought or intention did I hide from that gaze\u2014and how do I confess it?",
      },
      "01-16": {
        scripturePrimaryRef: "Genesis 15:5-6",
        scripturePrimaryText:
          "He brought him outside and said, \"Look toward heaven and count the stars, if you are able to count them.\" Then he said, \"So shall your descendants be.\" And he believed the LORD; and the LORD reckoned it to him as righteousness.",
        reflection:
          "Righteousness here is faith in a promise too large for census\u2014God\u2019s word credited as covenant fidelity before circumcision or law. Abram\u2019s body still fails; the stars still outnumber his hope\u2014yet belief is what God counts. Your anxiety about legacy is insulting arithmetic next to that night sky.",
        fatherNote:
          "Count stars with one child tonight even through city haze; tell them God keeps impossible promises. Connect it to baptism\u2014they are already descendants in Christ, not only biology.",
        challengeType: "prayer",
        challenge:
          "Step outside before dawn, name five visible lights in the sky, pray Genesis 15:6 once for each child by name, then go in without checking the market.",
        leastOfThese:
          "Sponsor a refugee child\u2019s winter coat through Catholic Charities online; print Genesis 15:5 on the confirmation email and delete it so you do not boast.",
        prayer:
          "Lord, you reckoned faith as righteousness before Abram saw a son.\nI want receipts before I believe.\nLet your promise outnumber my spreadsheets.\nTeach my children belief in darkness.\nI look toward heaven tonight. Amen.",
        journalPrompt:
          "Where did Genesis 15:5\u20136\u2014stars, belief, reckoned righteousness\u2014touch my trust today?\n\nWhere did I demand proof before faith at home\u2014and how do I bring that to God?",
      },
      "01-17": {
        scripturePrimaryRef: "Jeremiah 29:11-13",
        scripturePrimaryText:
          "For surely I know the plans I have for you, says the LORD, plans for your welfare and not for harm, to give you a future with hope. Then when you call upon me and come and pray to me, I will hear you. When you search for me, you will find me; if you seek me with all your heart,",
        reflection:
          "The plans spoken are for exiles in Babylon\u2014not instant rescue but welfare woven through seventy years of patience, which means hope is long. God ties finding him to whole-hearted seeking, not casual curiosity. If you use this verse as a prosperity sticker while refusing exile\u2019s discipline, you are not hearing Jeremiah.",
        fatherNote:
          "Tell your family one way God\u2019s \u201cnot for harm\u201d felt like harm while it happened\u2014a move, a job loss\u2014and how you see it now. Exile language trains endurance better than motivational posters.",
        challengeType: "conversation",
        challenge:
          "Schedule a family prayer time Saturday morning that cannot move for sports\u2014twenty minutes, Jeremiah 29:13 written on an index card in the center of the table.",
        leastOfThese:
          "Pack lunches for men at a downtown shelter kitchen line; pray Jeremiah 29:11 over the steam table without being asked to speak.",
        prayer:
          "Lord, your plans included Babylon\u2019s wait.\nI want hope without exile.\nHear me when I call; I seek you with whole heart today.\nGive my children future you design, not Instagram.\nI take your welfare on your terms. Amen.",
        journalPrompt:
          "Where did Jeremiah 29:11\u201313\u2014plans, hope, seeking\u2014frame patience today?\n\nWhere did I demand rescue without seeking God wholeheartedly\u2014and how do I confess that?",
      },
      "01-18": {
        scripturePrimaryRef: "1 Peter 1:3-5",
        scripturePrimaryText:
          "Blessed be the God and Father of our Lord Jesus Christ! By his great mercy he has given us a new birth into a living hope through the resurrection of Jesus Christ from the dead, and into an inheritance that is imperishable, undefiled, and unfading, kept in heaven for you, who are being protected by the power of God through faith for a salvation ready to be revealed in the last time.",
        reflection:
          "New birth is event, not mood\u2014mercy regenerates so hope lives because the tomb is empty. The inheritance is guarded in heaven while you are guarded on earth by power that works through faith, not adrenaline. If your fatherhood is built on perishable 401(k)s and fading reputations, you are still trading birthright for stew.",
        fatherNote:
          "Bless God aloud at dinner\u2014Peter\u2019s opening\u2014before anyone complains about Monday. Let your children hear doxology from your mouth, not only requests.",
        challengeType: "service",
        challenge:
          "Bless your pastor by name in front of your kids at supper\u2014list one concrete way he protected the flock\u2014then email him a single sentence of thanks without asking favors.",
        leastOfThese:
          "Repair a single mom\u2019s broken step or loose cabinet hinge today\u2014bring tools, refuse payment, cite only \u201c1 Peter 1:4\u201d if she insists on why.",
        prayer:
          "Father of Jesus Christ, blessed be you for new birth I did not earn.\nI live as if hope were my performance.\nGuard my family by your power, not my nerves.\nLet imperishable inheritance quiet tonight\u2019s fears.\nI praise you before I petition. Amen.",
        journalPrompt:
          "Where did 1 Peter 1:3\u20135\u2014new birth, living hope, guarded inheritance\u2014shape gratitude today?\n\nWhere did I invest in what perishes\u2014and how do I turn that to God?",
      },
      "01-19": {
        scripturePrimaryRef: "Mark 1:14-15",
        scripturePrimaryText:
          "Now after John was arrested, Jesus came to Galilee, proclaiming the good news of God, and saying, \"The time is fulfilled, and the kingdom of God has come near; repent, and believe in the good news.\"",
        reflection:
          "Jesus opens with eschatological clock\u2014time fulfilled\u2014not advice. Kingdom near means God\u2019s reign breaking in, which demands repentance and faith as simultaneous turnings. John in prison frames the cost: the forerunner silenced, the King still preaching. You cannot believe good news while protecting the sin it names.",
        fatherNote:
          "Lead a sixty-second family repentance tonight\u2014each person names one failure, no cross-talk\u2014then profess the Creed. Kingdom nearness sounds like honesty, not perfection.",
        challengeType: "sacrifice",
        challenge:
          "Delete one app that trains you toward lust or rage; in its place set Mark 1:15 as the lock-screen text for seven days starting now.",
        leastOfThese:
          "Stand with a pro-life sidewalk counselor one hour this Saturday morning\u2014offer water, not debate\u2014pray Mark 1:15 for each car that passes.",
        prayer:
          "Jesus, your time is fulfilled; I keep postponing mine.\nKingdom come means I stop negotiating sin.\nI repent and believe today in my own house first.\nLet good news sound like command, not fluff.\nI turn or I remain outside. Amen.",
        journalPrompt:
          "Where did Mark 1:14\u20115\u2014fulfilled time, kingdom near, repent, believe\u2014confront me today?\n\nWhere did I mute repentance to keep comfort\u2014and how do I bring that to God?",
      },
      "01-20": {
        scripturePrimaryRef: "James 1:22-25",
        scripturePrimaryText:
          "But be doers of the word, and not merely hearers who deceive themselves. For if any are hearers of the word and not doers, they are like those who look at themselves in a mirror; for they look at themselves, go away, and immediately forget what they were like. But those who look into the perfect law, the law of liberty, and persevere, being not hearers who forget but doers who act—they will be blessed in their doing.",
        reflection:
          "James\u2019 mirror is Scripture\u2014glance and forget equals self-deception, not harmless distraction. Perfect law of liberty is not legalism; it is the word that frees when obeyed, blessing attached to doing, not to nodding. If Mass never changes Monday behavior, you are the man who walks away from his own face.",
        fatherNote:
          "Ask each child at bedtime, \u201cWhat did we hear at Mass Sunday that we actually did today?\u201d If silence follows, own your part first\u2014doers start with Dad.",
        challengeType: "study",
        challenge:
          "Perform one deed before noon that directly fulfills last Sunday\u2019s first reading or Gospel\u2014tell your wife which verse it honors without making a speech at work.",
        leastOfThese:
          "Volunteer to stack chairs after a parish event you did not attend\u2014stay until the last cart is wheeled while praying James 1:25 quietly.",
        prayer:
          "Holy Spirit, I deceive myself with hearing alone.\nYour mirror shows a man I walk away from.\nLet liberty\u2019s law stick to my hands today.\nBless doing, not my opinions about doing.\nI persevere or I forget on purpose. Amen.",
        journalPrompt:
          "Where did James 1:22\u201325\u2014doers, mirror, law of liberty\u2014show in action today?\n\nWhere did I hear and immediately forget\u2014and how do I confess that?",
      },
      "01-21": {
        scripturePrimaryRef: "Sirach 2:1-3",
        scripturePrimaryText:
          "My child, when you come to serve the Lord, prepare yourself for testing. Set your heart right and be steadfast, and do not be impetuous in time of calamity. Cling to him and do not depart, so that your last days may be prosperous.",
        reflection:
          "Ben Sira offers no romantic entry into discipleship\u2014service begins with expectation of testing, not warm feelings. Steadfast heart means decided loyalty before calamity arrives; impetuosity is the sin of quitting God because pain surprised you. If you thought faith would spare your family trials, you were sold a novel, not Catholicism.",
        fatherNote:
          "Tell your children one test God allowed in your past that made faith real\u2014no melodrama, facts only. Promise them steadiness when their calamity comes, not false immunity.",
        challengeType: "prayer",
        challenge:
          "When the next minor disaster hits today (spill, flat tire), pause ten seconds before speaking and pray Sirach 2:3 once under your breath before you fix anything.",
        leastOfThese:
          "Bring blankets to a warming center during a cold snap; hand them to staff with Sirach 2:1 written on tape\u2014no photo.",
        prayer:
          "Lord, I came to serve you and resent every test.\nTeach me steadfastness before calamity shouts.\nI cling today; I will not depart to numbness.\nProsper my last days by integrity now.\nPrepare me; do not spare me. Amen.",
        journalPrompt:
          "Where did Sirach 2:1\u20133\u2014testing, steadfastness, clinging\u2014match a trial today?\n\nWhere was I impetuous in calamity at home\u2014and how do I bring that to God?",
      },
      "01-22": {
        scripturePrimaryRef: "Psalm 1:1-3",
        scripturePrimaryText:
          "Happy are those who do not follow the advice of the wicked, or take the path that sinners tread, or sit in the seat of scoffers; but their delight is in the law of the LORD, and on his law they meditate day and night. They are like trees planted by streams of water, which yield their fruit in its season, and their leaves do not wither. In all that they do, they prosper.",
        reflection:
          "Blessedness is negative first\u2014three parallel refusals of counsel, way, and seat\u2014before positive delight in torah. The tree image is not instant fruit; season implies patience rooted near water. Scoffing is a chair you choose; if your dinner table mocks neighbors or Church, your leaves are already curling.",
        fatherNote:
          "Cancel one show or podcast this week that trains scorn; replace thirty minutes with Psalm 1 read slowly where kids can see the book open.",
        challengeType: "conversation",
        challenge:
          "Remove one cynical habit at dinner\u2014imitating a politician you despise\u2014and substitute Psalm 1:1\u2019s three refusals as a private examen after the kids sleep.",
        leastOfThese:
          "Tutor a struggling student in math at the parish for one free hour\u2014no payment, Psalm 1:3 as your intention for their future.",
        prayer:
          "Lord, happy is refusal of the scoffer\u2019s seat.\nI entertain wicked counsel for laughs.\nPlant me by water until fruit comes in season.\nLet my children see leaves that do not wither.\nI meditate your law tonight. Amen.",
        journalPrompt:
          "Where did Psalm 1\u2019s blessed path\u2014refusal, delight, tree by water\u2014appear today?\n\nWhere did I sit in the seat of scoffers with my family listening\u2014and how do I repent?",
      },
      "01-23": {
        scripturePrimaryRef: "Romans 12:1-2",
        scripturePrimaryText:
          "I appeal to you therefore, brothers and sisters, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship. Do not be conformed to this world, but be transformed by the renewing of your minds, so that you may discern what is the will of God—what is good and acceptable and perfect.",
        reflection:
          "Bodies matter\u2014worship is not interior sparkle but presenting limbs and schedules on the altar of mercy. Non-conformity is passive resistance; transformation is active renewal of mind until discernment sees God\u2019s will as good. If your phone habits are indistinguishable from the world\u2019s, your sacrifice is dead on arrival.",
        fatherNote:
          "Your body teaches your sons what worship looks like\u2014eyes, hands, sleep. Choose one bedtime that honors Romans 12:1 literally: lights out, phone in kitchen, kiss your wife first.",
        challengeType: "service",
        challenge:
          "Offer your lunch hour to help a colleague move heavy boxes\u2014present your body as sacrifice without mentioning Romans until they thank you.",
        leastOfThese:
          "Wash dishes for the soup kitchen crew after the lunch rush\u2014roll sleeves, Psalm-silent endurance\u2014pray Romans 12:1 for each pan.",
        prayer:
          "Father of mercies, I present my body while hiding it online.\nTransform my mind until I want your will.\nLet worship cost sleep and appetite today.\nRenew what conformed to this age.\nI discern good or I pretend. Amen.",
        journalPrompt:
          "Where did Romans 12:1\u20132\u2014living sacrifice, nonconformity, renewed mind\u2014show today?\n\nWhere did I conform to the world\u2019s screen and appetite\u2014and how do I confess that?",
      },
      "01-24": {
        scripturePrimaryRef: "Luke 11:9-13",
        scripturePrimaryText:
          "So I say to you, Ask, and it will be given you; search, and you will find; knock, and the door will be opened for you. For everyone who asks receives, and everyone who searches finds, and for everyone who knocks, the door will be opened. Is there anyone among you who, if your child asks for a fish, will give a snake instead of a fish? Or if the child asks for an egg, will give a scorpion? If you then, who are evil, know how to give good gifts to your children, how much more will the heavenly Father give the Holy Spirit to those who ask him!\"",
        reflection:
          "Ask-search-knock are three intensities of one movement\u2014persistence Jesus commands, not optional piety. The Father\u2019s gift escalates from bread to the Spirit himself, which means prayer\u2019s highest answer is God\u2019s own life, not toys. If you stopped asking because last year felt unanswered, you are the child who quit knocking while bread was being baked.",
        fatherNote:
          "Model asking: pray aloud with your kids for the Holy Spirit before a hard conversation\u2014college applications, bullying\u2014and mean it awkwardly if needed.",
        challengeType: "sacrifice",
        challenge:
          "Wake ten minutes early to ask the Father aloud for the Holy Spirit seven times\u2014Luke 11:13\u2014without adding a shopping list of other requests until finished.",
        leastOfThese:
          "Pay for a young father\u2019s gas when his card declines at the pump\u2014say only \u201cMy Father gave good gift today\u201d if he asks why.",
        prayer:
          "Father, you give the Holy Spirit to those who ask.\nI stopped knocking when the door stayed shut.\nI ask, search, knock until you answer.\nGive my children your Spirit, not my anxiety.\nI trust your more over my evil. Amen.",
        journalPrompt:
          "Where did Luke 11:9\u201313\u2014ask, seek, knock, good gifts, Holy Spirit\u2014shape my prayer today?\n\nWhere did I quit asking because God seemed slow\u2014and how do I bring that to him?",
      },
      "01-25": {
        scripturePrimaryRef: "2 Timothy 1:6-8",
        scripturePrimaryText:
          "For this reason I remind you to rekindle the gift of God that is within you through the laying on of my hands; for God did not give us a spirit of cowardice, but rather a spirit of power and of love and of self-discipline. Do not be ashamed, then, of the testimony about our Lord or of me his prisoner, but join with me in suffering for the gospel, relying on the power of God,",
        reflection:
          "The charism needs stirring\u2014flame dies without tending\u2014and the Spirit given is explicitly not timid but power, love, and sound mind together. Shame about the Gospel is incompatible with sharing Paul\u2019s chains; suffering is assumed, not exceptional. Coward fathers raise children who think Christ is a private hobby.",
        fatherNote:
          "Lay hands on each child\u2019s head tonight, quote 2 Timothy 1:7 quietly, and ask the Spirit to rekindle what confirmation started\u2014even if you feel foolish.",
        challengeType: "study",
        challenge:
          "Speak one sentence about Jesus to someone at work who has never heard you mention church\u2014no argument, only testimony\u2014before you leave the building.",
        leastOfThese:
          "Defend a cashier being berated by a customer\u2014step between with calm voice and offer to wait\u2014pray 2 Timothy 1:7 while you breathe.",
        prayer:
          "Lord, my spirit feels cowardly while yours is power and love.\nRekindle what ordination or confirmation lit.\nI will not be ashamed of your prisoner Paul.\nLet suffering for truth start at my dinner table.\nI rely on your power or I rely on none. Amen.",
        journalPrompt:
          "Where did 2 Timothy 1:6\u20138\u2014rekindle, spirit of power, no shame\u2019suffering\u2014appear today?\n\nWhere did cowardice mute my testimony at home or work\u2014and how do I confess that?",
      },
      "01-26": {
        scripturePrimaryRef: "Micah 6:8",
        scripturePrimaryText:
          "He has told you, O mortal, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?",
        reflection:
          "The good is already announced\u2014no mystery religion\u2014justice, kindness, humility as walking companionship with God. Require is covenant language; ignoring one leg topples the tripod. Fathers who major on kindness talk without justice in paychecks and politics lie to their children about what God requires.",
        fatherNote:
          "Audit one bill you pay\u2014cleaner, landscaper\u2014for fair wage this week; Micah 6:8 at the kitchen table when you adjust the number.",
        challengeType: "prayer",
        challenge:
          "Kneel after work and speak Micah 6:8 once per word\u2014justice, kindness, humility\u2014pausing five breaths between each before you greet your family.",
        leastOfThese:
          "Tip a waitress forty percent on a modest bill; write \u201cMicah 6:8\u201d on the receipt line where tip is tallied.",
        prayer:
          "Lord, you already told me what is good.\nI hunt new revelations to dodge justice.\nLove kindness in traffic and contracts today.\nWalk humbly beside you or I walk alone.\nI do what you require. Amen.",
        journalPrompt:
          "Where did Micah 6:8\u2014justice, kindness, humble walk\u2014guide a concrete choice today?\n\nWhere did I ignore what God requires\u2014and how do I bring that to God?",
      },
      "01-27": {
        scripturePrimaryRef: "John 15:4-5",
        scripturePrimaryText:
          "Abide in me as I abide in you. Just as the branch cannot bear fruit by itself unless it abides in the vine, neither can you unless you abide in me. I am the vine, you are the branches. Those who abide in me and I in them bear much fruit, because apart from me you can do nothing.",
        reflection:
          "Abiding is mutual indwelling\u2014Jesus\u2019 \u201cas I abide in you\u201d removes Pelagian panic while demanding real union. Fruit is not merit badge; it is evidence of sap flowing, and nothing means nothing\u2014spiritual activity without Christ is zero. Your busy fatherhood may be a severed branch spraying paint on dead leaves.",
        fatherNote:
          "Cancel one nonessential meeting this week and tell your family you did it to abide\u2014read John 15:4 together even if they roll eyes. Branches need time attached.",
        challengeType: "conversation",
        challenge:
          "Spend twenty-five minutes in silent adoration or empty-room silence with only John 15:5 written on paper; no phone, no spiritual reading\u2014abide or admit you left early.",
        leastOfThese:
          "Deliver firewood or space heaters to a rural family whose pipes froze\u2014stack it yourself, John 15:5 on the cardboard note.",
        prayer:
          "Jesus, vine of my soul, I bear leaves without sap.\nApart from you my fatherhood is theater.\nAbide in me through one unglamorous hour today.\nLet fruit feed my household, not my ego.\nI remain or I wither. Amen.",
        journalPrompt:
          "Where did John 15:4\u20135\u2014abide, vine, branch, fruit, nothing apart\u2014explain my day?\n\nWhere did I work apart from Christ\u2014and how do I return to the vine tonight?",
      },
      "01-28": {
        scripturePrimaryRef: "Isaiah 49:15-16",
        scripturePrimaryText:
          "Can a woman forget her nursing child, or show no compassion for the child of her womb? Even these may forget, yet I will not forget you. See, I have inscribed you on the palms of my hands; your walls are continually before me.",
        reflection:
          "God argues from the strongest human bond\u2014mother and nursling\u2014then surpasses it; divine memory outlasts even biology\u2019s failure. Palms inscribed evoke wounds that name you; walls before him mean Jerusalem\u2019s ruin is carried in vision. If you feel forgotten, you accuse Christ\u2019s scarred hands of amnesia.",
        fatherNote:
          "Show your children your palms\u2014calluses, cuts\u2014and tell them God\u2019s hands bear their names in Christ. Mothers are not the only parents who must speak tenderness without sentimentality.",
        challengeType: "service",
        challenge:
          "Text your mother or godmother Isaiah 49:15 verbatim and add one sentence of thanks that she did not forget you\u2014send before 9 a.m.",
        leastOfThese:
          "Rock a stranger\u2019s infant in the church narthex so the mother can receive Communion\u2014five minutes, eyes on the child, not your phone.",
        prayer:
          "Lord, a mother might forget; you cannot.\nI feel abandoned when plans break.\nYour palms bear my name in scars.\nKeep my children\u2019s walls before you.\nI trust inscription over mood. Amen.",
        journalPrompt:
          "Where did Isaiah 49:15\u201316\u2014unforgettable love, palms inscribed\u2014comfort or challenge me today?\n\nWhere did I fear God forgot my family\u2014and how do I offer that fear?",
      },
      "01-29": {
        scripturePrimaryRef: "Colossians 3:12-14",
        scripturePrimaryText:
          "As God's chosen ones, holy and beloved, clothe yourselves with compassion, kindness, humility, meekness, and patience. Bear with one another and, if anyone has a complaint against another, forgive each other; just as the Lord has forgiven you, so you also must forgive. Above all, clothe yourselves with love, which binds everything together in perfect harmony.",
        reflection:
          "Clothing imagery means virtues are put on daily\u2014chosen, holy, beloved is identity before effort. Forgiveness is measured by the Lord\u2019s standard, not fairness; love is the belt holding the wardrobe together. If your home runs on complaints without Colossians 3:13, you are spiritually naked in front of your children.",
        fatherNote:
          "Pick one complaint you nurse against your wife and forgive it aloud tonight with specifics\u2014no \u201cI forgive but remember.\u201d Let kids hear reconciliation\u2019s sound.",
        challengeType: "sacrifice",
        challenge:
          "Wear an actual extra layer\u2014jacket indoors\u2014for one hour as a joke with your kids about \u201cclothing\u201d yourselves with kindness; end by reading Colossians 3:12 once together.",
        leastOfThese:
          "Buy socks and gloves for five street outreach bags; tuck Colossians 3:12 on paper inside each pair.",
        prayer:
          "Lord, I am chosen, holy, beloved\u2014and I dress in sarcasm.\nForgive as you forgave me before I count costs.\nLet love bind what criticism tears.\nClothe my tongue before dinner.\nI put on compassion today. Amen.",
        journalPrompt:
          "Where did Colossians 3:12\u201314\u2014clothing, bearing, forgiving, love\u2019s bond\u2014appear today?\n\nWhere did I refuse to forgive as the Lord forgave me\u2014and how do I confess that?",
      },
      "01-30": {
        scripturePrimaryRef: "Ecclesiastes 3:1-4",
        scripturePrimaryText:
          "For everything there is a season, and a time for every matter under heaven: a time to be born, and a time to die; a time to plant, and a time to pluck up what is planted; a time to kill, and a time to heal; a time to break down, and a time to build up; a time to weep, and a time to laugh; a time to mourn, and a time to dance;",
        reflection:
          "Qoheleth names seasons under heaven\u2014not fatalism but recognition that God\u2019s clock has more hands than your planner. Contraries follow in pairs because life is tension, not straight line. Fighting the wrong season\u2014laughing when your child mourns, working when God says pluck\u2014is rebellion dressed as productivity.",
        fatherNote:
          "Ask each child which season they feel they are in\u2014planting, weeping, building\u2014and do not correct their answer tonight. Fatherhood includes honoring their time, not only yours.",
        challengeType: "study",
        challenge:
          "Attend a funeral home visitation for someone you barely knew\u2014sign the book, pray Ecclesiastes 3:2 in the parking lot\u2014to practice \u201ctime to mourn\u201d without performance.",
        leastOfThese:
          "Send a meal train signup to five men for a grieving father in your parish\u2014you cook Monday\u2014no credit in the group chat.",
        prayer:
          "Lord, you set seasons; I demand summer year-round.\nTeach me to weep when my child weeps.\nLet planting and plucking happen on your calendar.\nI trust time under heaven, not under my control.\nI dance or mourn as you say. Amen.",
        journalPrompt:
          "Where did Ecclesiastes 3:1\u20134\u2019s seasons match what happened today?\n\nWhere did I force the wrong \u201ctime\u201d on my family\u2014and how do I bring that to God?",
      },
      "01-31": {
        scripturePrimaryRef: "Psalm 27:1-4",
        scripturePrimaryText:
          "The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid? When evildoers assail me to devour my flesh, my adversaries and foes, they shall stumble and fall. Though an army encamp against me, my heart shall not fear; though war rise up against me, yet I will be confident. One thing I asked of the LORD, that will I seek after: to live in the house of the LORD all the days of my life, to behold the beauty of the LORD, and to inquire in his temple.",
        reflection:
          "Light and salvation collapse fear\u2019s object\u2014not because danger is imaginary but because the stronghold outranks it. David\u2019s one thing is contemplative priority: gaze on beauty, inquire in temple, which orders every battle. If January ends with your heart confident only in accounts and alarms, Psalm 27 was poetry, not prayer.",
        fatherNote:
          "Wake early February 1 Eve and read Psalm 27:4 with your wife; ask what \u201cone thing\u201d your family will seek together next month\u2014write it on the fridge.",
        challengeType: "prayer",
        challenge:
          "Turn off every light in the house for ten minutes after dark; sit with your family in one room with a single candle while Psalm 27:1 is read once\u2014then sing one verse of a hymn.",
        leastOfThese:
          "Escort a fearful elderly parishioner from car to door after evening Mass\u2014flashlight, arm offered, Psalm 27:1 prayed while you walk.",
        prayer:
          "Lord, you are light; armies are shadows.\nI fear spreadsheets more than evildoers.\nGive me one thing\u2014your beauty\u2014until February.\nLet my household inquire in your temple.\nI will be confident in you alone. Amen.",
        journalPrompt:
          "Where did Psalm 27:1\u20134\u2014light, stronghold, one thing sought\u2014shape courage today?\n\nWhere did fear command me instead of the Lord\u2014and how do I surrender that tonight?",
      },
      "02-01": {
        scripturePrimaryRef: "Genesis 2:18-24",
        scripturePrimaryText:
          "Then the LORD God said, \"It is not good that the man should be alone; I will make him a helper as his partner.\" So out of the ground the LORD God formed every animal of the field and every bird of the air, and brought them to the man to see what he would call them; and whatever the man called every living creature, that was its name. But for the man there was not found a helper as his partner. So the LORD God caused a deep sleep to fall upon the man, and he slept; then he took one of his ribs and closed up its place with flesh. And the rib that the LORD God had taken from the man he made into a woman and brought her to the man.",
        reflection:
          "God\u2019s verdict\u2014not good for the man to be alone\u2014is theological before it is romantic: communion images the Trinity and anticipates the Church born from Christ\u2019s side. Naming the animals shows Adam\u2019s kingly reason, yet only another human answers the ache; solitude twisted becomes self-rule. Conversion for a father begins when he stops treating his wife and children as audience for his autonomy and receives them as partners given to rescue him from being alone with his idols.",
        fatherNote:
          "Tonight, thank your wife aloud for one specific way she \u201chelps\u201d that cost her sleep or pride\u2014no joking downgrade of \u201chelper.\u201d Your sons need to hear that Eve\u2019s dignity is not a footnote to your career.",
        challengeType: "conversation",
        challenge:
          "At supper, read Genesis 2:18 once and ask each child what \u201cnot good alone\u201d means for how they speak to siblings\u2014you answer last, not first.",
        leastOfThese:
          "Bring a hot meal to a widower in your parish who eats alone most nights; stay ten minutes on the porch if he is awkward, no sermon unless he asks.",
        prayer:
          "Lord, you said solitude before sin was already not good.\nI hide in work and screens from the partners you gave.\nConvert my heart toward my wife as gift, not convenience.\nLet my table contradict the lie of self-sufficiency.\nI receive communion in the ordinary tonight. Amen.",
        journalPrompt:
          "Where did Genesis 2:18\u201324\u2014helper, naming, bone of bone\u2014reshape how I treated my family today?\n\nWhere did I choose functional loneliness over honest union\u2014and what will I change tomorrow?",
      },
      "02-02": {
        scripturePrimaryRef: "Ruth 1:16-17",
        scripturePrimaryText:
          "But Ruth said, \"Do not press me to leave you or to turn back from following you! Where you go, I will go; where you lodge, I will lodge; your people shall be my people, and your God my God. Where you die, I will die— there will I be buried. May the LORD do thus and so to me, and more as well, if even death parts me from you!\"",
        reflection:
          "Ruth\u2019s vow is covenant speech\u2014people, God, death, burial\u2014not sentiment; she stakes her whole story on Israel\u2019s God without a guarantee of comfort. Conversion looks like refusing the easy return to old gods when the road ahead is bitter. Your marriage and fatherhood are meant to carry the same refusal to \u201cgo back alone\u201d when stress tempts you to emotional emigration from your home.",
        fatherNote:
          "Tell your wife one way you will \u201clodge\u201d with her this week in a burden she carries\u2014doctor visit, in-law tension, a child\u2019s struggle\u2014without making her manage your feelings about it.",
        challengeType: "service",
        challenge:
          "Mail a Ruth 1:16 notecard to your godparents or sponsors with one sentence of thanks for the faith they handed on\u2014post it before work ends.",
        leastOfThese:
          "Offer to cover one evening shift for a immigrant coworker so they can attend their child\u2019s school conference\u2014refuse repayment, pray Ruth 1:16 in the car.",
        prayer:
          "Lord, Ruth clung to Naomi and to you without a safety net.\nI calculate covenant by mood and fairness.\nBind me to the people and the God you gave me.\nLet death alone part what you joined.\nI turn from going back to lesser gods. Amen.",
        journalPrompt:
          "Where did Ruth\u2019s covenant loyalty\u2014people, God, place\u2014echo in a choice I made today?\n\nWhere did I press someone toward emotional abandonment\u2014and how do I repent?",
      },
      "02-03": {
        scripturePrimaryRef: "Tobit 8:4-7",
        scripturePrimaryText:
          "When Sarah's parents left the bedroom and closed the door behind them, Tobiah rose from bed and said to his wife, \"My sister, come, let us pray and beg our Lord to grant us mercy and protection.\" She got up, and they started to pray and beg that they might be protected. He began with these words: \"Blessed are you, O God of our ancestors; blessed be your name forever and ever! Let the heavens and all your creation bless you forever. You made Adam, and you made his wife Eve to be his helper and support; and from these two the human race has come. You said, 'It is not good for the man to be alone; let us make him a helper like himself.' Now, not with lust, but with fidelity I take this kinswoman as my wife. Send down your mercy on me and on her, and grant that we may grow old together. Bless us with children.\"",
        reflection:
          "The bedroom is not a bunker for appetite but an altar where two speak to the God of the covenant before they speak only to their moods. Tobiah names lust as the rival god and chooses fidelity, asking mercy that reaches children not yet born. Christ blesses marriages that begin in begged protection rather than in self-soothing.",
        fatherNote:
          "Tonight, before sleep, pray aloud with your wife one sentence of thanks for your marriage as God's answer to solitude—not as a trophy. If you are unmarried or widowed, pray the same with Christ for the people entrusted to you.",
        challengeType: "sacrifice",
        challenge:
          "Skip one pleasure you usually default to after the kids are down (show, social scroll, drink) and spend that quarter-hour in quiet thanks for your spouse or vocation.",
        leastOfThese:
          "Drop off diapers at a pregnancy center without a social post, praying Tobiah's line about mercy on the way home.",
        prayer:
          "Lord, Tobiah prayed before touch; I touch before prayer.\nConvert my desire from consumption to covenant.\nLet mercy descend on my wife and on the children you may give.\nI renounce lust's hurry and choose fidelity's speech.\nMake our ordinary bedroom a place of turning to you.\nAmen.",
        journalPrompt:
          "Where did Tobit 8:4–7—prayer before union, naming lust, begging mercy—expose a shortcut I took today?\n\nWhat one habit this week will I replace with Tobiah's opening line to my wife or to Christ?",
      },
      "02-04": {
        scripturePrimaryRef: "Matthew 3:1-2, 7-8",
        scripturePrimaryText:
          "In those days John the Baptist appeared, preaching in the desert of Judea [and] saying, \"Repent, for the kingdom of heaven is at hand!\" When he saw many of the Pharisees and Sadducees coming to his baptism, he said to them, \"You brood of vipers! Who warned you to flee from the coming wrath? Produce good fruit as evidence of your repentance.\"",
        reflection:
          "John's geography is deliberate: the Spirit meets you where comfort has died, not where credentials sparkle. Repentance is not mood but fruit—evidence visible to the household you lead. The kingdom at hand means Christ is already sorting root from show; your calendar is not exempt.",
        fatherNote:
          "Name one 'religious' habit that impresses others but produced no mercy at home this week—cut it or convert it before you ask your son to be honest.",
        challengeType: "study",
        challenge:
          "Send one email at work that repairs an injustice you contributed to—late payment, sharp tone, unpaid hour—before sunset, no self-congratulation.",
        leastOfThese:
          "Ask your pastor whom to help stack chairs after the fish fry; show up ten minutes early without being asked.",
        prayer:
          "Lord, John cried in the desert while I curate reputation.\nLet my repentance bear fruit my children can taste.\nRescue me from brood-of-vipers politeness without justice.\nThe kingdom is at hand in dishes, payroll, and apology.\nI turn from wrath's escape toward your coming reign.\nAmen.",
        journalPrompt:
          "Where did Matthew 3:1–2, 7–8—desert, fruit, wrath—call out performance without justice in me?\n\nWhat concrete repair will I make tomorrow that only God and the injured party will notice?",
      },
      "02-05": {
        scripturePrimaryRef: "Luke 5:31-32",
        scripturePrimaryText:
          "Jesus said to them in reply, \"Those who are healthy do not need a physician, but the sick do. I have not come to call the righteous to repentance but sinners.\"",
        reflection:
          "Jesus accepts the insult 'friend of sinners' as a job description: the Physician stations himself beside contagion, not in the sterile greenroom of the self-righteous. Righteousness that needs no repentance is a spiritual fiction; pride is the undiagnosed tumor. Your fatherhood converts when you admit you are the patient who still needs the chart read aloud.",
        fatherNote:
          "At dinner, say one way you sinned this week without blaming anyone else—let your kids hear a man modeled after the Physician, not the jury.",
        challengeType: "prayer",
        challenge:
          "Kneel five minutes and speak Luke 5:31 slowly, substituting your own name after 'sinners'—end with one Our Father for someone you judged today.",
        leastOfThese:
          "Buy coffee for a coworker you privately despise; hand it over with silence instead of a lecture.",
        prayer:
          "Jesus, you came for sinners, not for my polished story.\nI pose as healthy while my household pays the bill.\nLay your stethoscope on my temper and my hidden snobbery.\nLet mercy sound like honesty at my table tonight.\nI am sick; you are physician—heal me.\nAmen.",
        journalPrompt:
          "Where did Luke 5:31–32—physician, sinners—reframe someone I labeled beyond help?\n\nWhich relationship needs my repentance spoken before I ask for theirs?",
      },
      "02-06": {
        scripturePrimaryRef: "Acts 26:17-20",
        scripturePrimaryText:
          "I shall deliver you from this people and from the Gentiles to whom I send you, to open their eyes that they may turn from darkness to light and from the power of Satan to God, so that they may obtain forgiveness of sins and an inheritance among those who have been consecrated by faith in me.\" And so, King Agrippa, I was not disobedient to the heavenly vision. On the contrary, first to those in Damascus and in Jerusalem and throughout the whole country of Judea, and then to the Gentiles, I preached the need to repent and turn to God, and to do works giving evidence of repentance.",
        reflection:
          "Paul's commission is optical surgery: eyes opened so the will can pivot from Satan's jurisdiction to God's inheritance. Forgiveness is never a private mood; it lands in works that neighbors can verify. Disobedience to that vision is how comfortable men baptize their cowardice as prudence.",
        fatherNote:
          "Teach one child tonight what 'evidence of repentance' looks like—returned toy, apology note, chore done without being asked—by doing one yourself first.",
        challengeType: "conversation",
        challenge:
          "With your family after supper, draw two columns on paper labeled 'darkness' and 'light'; each person names one move toward light for tomorrow—you begin.",
        leastOfThese:
          "Volunteer to read at a nursing home Mass this month; call the parish office today to book a date.",
        prayer:
          "Lord, you opened Paul's eyes from violence to mission.\nOpen mine from screens that darken patience.\nLet forgiveness name Satan's lies I have entertained.\nGive my children inheritance in faith, not in excuses.\nI preach repentance first by living it.\nAmen.",
        journalPrompt:
          "Where did Acts 26:17–20—turn, forgiveness, works—expose a disobedience I called prudence?\n\nWhat verified work of repentance will my children see from me before Saturday?",
      },
      "02-07": {
        scripturePrimaryRef: "Romans 6:11-14",
        scripturePrimaryText:
          "So you also must consider yourselves dead to sin and alive to God in Christ Jesus. Therefore, do not let sin exercise dominion in your mortal bodies, to make you obey their passions. Do not present your members to sin as weapons of wickedness, but present yourselves to God as those who have been brought from death to life, and present your members to God as weapons of righteousness. For sin will have no dominion over you, since you are not under law but under grace.",
        reflection:
          "Baptism is not a souvenir; it re-narrates your body as dead to sin's regime and alive to God's campaign. Passions become tyrants when you present eyes, tongue, and wallet to them as arsenals for wickedness. Grace is the stronger empire—yet only if you actually march under its flag at the office and the dinner table.",
        fatherNote:
          "Choose one member—thumbs, eyes, voice—that sin hijacked this week; bless it with a decade of the rosary for purity of use tomorrow morning.",
        challengeType: "service",
        challenge:
          "Fast from sarcasm until noon; each time you swallow a joke at your wife's expense, pray silently, 'Alive to God in Christ Jesus.'",
        leastOfThese:
          "Pay the copay for a struggling parent's prescription at the pharmacy counter when the clerk asks—leave no speech, only Romans 6:13 written on your receipt copy for you alone.",
        prayer:
          "Lord, I rehearse death to sin in theory while passions vote.\nGrace, not law, is my commander—teach me obedience.\nI present my hands to you for righteousness, not to the remote.\nLet no dominion sit on my chest but yours.\nAlive in Christ, I refuse sin's draft.\nAmen.",
        journalPrompt:
          "Where did Romans 6:11–14—dead to sin, members as weapons—name a passion that ruled me today?\n\nHow will I present one body part to God as righteousness tomorrow morning?",
      },
      "02-08": {
        scripturePrimaryRef: "Ephesians 4:22-24",
        scripturePrimaryText:
          "You were taught to put away your former way of life, your old self, corrupt and deluded by its lusts, and to be renewed in the spirit of your minds, and to clothe yourselves with the new self, created according to the likeness of God in true righteousness and holiness.",
        reflection:
          "The old self is not a quirky personality trait; it is a corruption project directed by lust's fog machine. Renewal begins in the spirit of the mind—how you picture God, neighbor, and yourself before you act. The new self is Christ-shaped righteousness; holiness is not an aura but likeness forged in ordinary truth-telling.",
        fatherNote:
          "Cancel one subscription that trains lust or rage; tell your wife why, and redirect ten dollars to the parish soup kitchen online.",
        challengeType: "sacrifice",
        challenge:
          "Delete one app that corrupts your mind's picture of women or enemies; spend the first freed ten minutes reading Ephesians 4:23 twice in silence.",
        leastOfThese:
          "Bring gently used professional clothes to a re-entry program; tape Ephesians 4:24 inside the pocket for the stranger who will wear them.",
        prayer:
          "Lord, my old self negotiates with lust and calls it taste.\nRenew the spirit of my mind when news and images assault it.\nClothe me in the likeness of your Son at work and home.\nLet righteousness be my fabric, not my mask.\nI put away corruption; I put on Christ.\nAmen.",
        journalPrompt:
          "Where did Ephesians 4:22–24—old self, renewed mind, new self—clash with a story I tell myself?\n\nWhat concrete 'unclothing' of a corrupt habit will I complete this week?",
      },
      "02-09": {
        scripturePrimaryRef: "Titus 3:3-7",
        scripturePrimaryText:
          "For we ourselves were once foolish, disobedient, led astray, slaves to various passions and pleasures, passing our days in malice and envy, despicable, and hating one another. But when the goodness and loving kindness of God our Savior appeared, he saved us, not because of any works of righteousness that we had done, but according to his mercy, through the water of rebirth and renewal by the Holy Spirit. This Spirit he poured out on us richly through Jesus Christ our Savior, so that, having been justified by his grace, we might become heirs according to the hope of eternal life.",
        reflection:
          "Paul's autobiography in the plural is every disciple's résumé before mercy: foolish, enslaved, envious—not mildly mistaken. Salvation's appearance is God's goodness, not your performance review; the bath of rebirth is how the Spirit floods what calculation cannot fix. Heirs according to hope means your fatherhood is training in inheritance, not self-construction.",
        fatherNote:
          "Tell your children one story of your pre-Christ foolishness they have not heard—end with how the font still renews you.",
        challengeType: "study",
        challenge:
          "Write a three-sentence note to a fallen-away sibling; no agenda except Titus 3:4—goodness appeared—mailed this week.",
        leastOfThese:
          "Sit with a man at an AA meeting as a listener only; buy him decaf afterward without fixing his story.",
        prayer:
          "Lord, I was slave to passions; you bathed me in mercy.\nGoodness appeared while I was still despicable.\nPour out your Spirit again on my dry cynicism.\nMake my household heirs of hope, not heirs of my temper.\nJustified by grace, I speak kindly today.\nAmen.",
        journalPrompt:
          "Where did Titus 3:3–7—foolish past, mercy, rebirth—quiet my impulse to earn your love?\n\nWho needs to hear, from me, that goodness appeared while they were still astray?",
      },
      "02-10": {
        scripturePrimaryRef: "1 Peter 2:1-3",
        scripturePrimaryText:
          "Rid yourselves, therefore, of all malice, and all guile, insincerity, envy, and all slander. Like newborn infants, long for the pure, spiritual milk, so that by it you may grow into salvation— if indeed you have tasted that the Lord is good.",
        reflection:
          "Malice and slander are spiritual junk food; they stunt the soul faster than they wound the target. Longing like a newborn is undignified by adult standards—which is why grown men avoid it and stay infants in poison. Tasting that the Lord is good is empirical: the Eucharist and the Word retrain the palate away from cynicism.",
        fatherNote:
          "Go twenty-four hours without any sentence that tears down a person not present; if you fail, confess it at home before bed.",
        challengeType: "prayer",
        challenge:
          "Before Mass or before bed, read 1 Peter 2:1-3 once and name aloud one slander you will renounce—then pray for the person you maligned.",
        leastOfThese:
          "Apologize to a coworker for a cutting joke; bring a simple lunch to share without defending yourself.",
        prayer:
          "Lord, I nurse on malice and wonder why joy starves.\nGive me the infant's hunger for your milk, not for gossip.\nI have tasted that you are good at the altar—let that flavor linger.\nRid my tongue of guile before my children mimic it.\nGrow me into salvation through what is pure.\nAmen.",
        journalPrompt:
          "Where did 1 Peter 2:1–3—malice, spiritual milk, taste—expose how I feed my ego?\n\nWhat slander will I replace with intercession this week?",
      },
      "02-11": {
        scripturePrimaryRef: "James 5:15-16",
        scripturePrimaryText:
          "The prayer of faith will save the sick, and the Lord will raise them up; and anyone who has committed sins will be forgiven. Therefore confess your sins to one another, and pray for one another, so that you may be healed. The prayer of the righteous is powerful and effective.",
        reflection:
          "James yokes bodily frailty and moral fracture: healing runs through honest confession, not through curated strength. The righteous man's prayer avails because it is Christ's righteousness speaking, not because the pray-er is spotless. Isolation is the enemy of conversion; secrecy keeps the soul feverish.",
        fatherNote:
          "Schedule or attend confession this week; tell your wife the time so your kids see sacramental honesty as normal male strength.",
        challengeType: "conversation",
        challenge:
          "Phone your brother priest or deacon and book confession; if impossible, write sins on paper and burn it after an act of contrition with your spouse present.",
        leastOfThese:
          "Offer to drive an elderly parishioner to Saturday confession; wait in the lot praying James 5:16 for them.",
        prayer:
          "Lord, I hide sin to look steady and only grow feverish.\nTeach me confession as healing, not as scandal management.\nLet my prayers for others be effective because I am honest.\nRaise up what is sick in my temper through your mercy.\nThe righteous pray; I join them today.\nAmen.",
        journalPrompt:
          "Where did James 5:15–16—confess, pray, heal—confront my preference for private pride?\n\nWho will I ask to pray for me by name about one named struggle?",
      },
      "02-12": {
        scripturePrimaryRef: "Jeremiah 31:31-34",
        scripturePrimaryText:
          "The days are surely coming, says the LORD, when I will make a new covenant with the house of Israel and the house of Judah. It will not be like the covenant that I made with their ancestors when I took them by the hand to bring them out of the land of Egypt—a covenant that they broke, though I was their husband, says the LORD. But this is the covenant that I will make with the house of Israel after those days, says the LORD: I will put my law within them, and I will write it on their hearts; and I will be their God, and they shall be my people. No longer shall they teach one another, or say to each other, \"Know the LORD,\" for they shall all know me, from the least of them to the greatest, says the LORD; for I will forgive their iniquity, and remember their sin no more.",
        reflection:
          "God's new covenant is interior legislation—torah etched on desire, not merely posted on the fridge. Forgiveness that forgets sin is divine amnesia purchased by Christ; you live inside that promise at every Mass. When fathers merely police behavior without modeling known intimacy with God, they rehearse the broken exodus covenant.",
        fatherNote:
          "Memorize Jeremiah 31:33 with one child this week; recite it on the drive to school twice.",
        challengeType: "service",
        challenge:
          "Forgive a debt a relative owes you under two hundred dollars; burn the tally mentally while speaking Jeremiah 31:34 once.",
        leastOfThese:
          "Tutor a struggling teen at the parish for free; teach one verse of Scripture by heart as part of homework help.",
        prayer:
          "Lord, you write your law on hearts, not only on screens.\nForgive what I rehearse in grudges as if you had not forgotten.\nLet my children know you because I know you plainly.\nI am yours; they are yours—covenant, not contract.\nNew covenant, new fatherhood—begin again today.\nAmen.",
        journalPrompt:
          "Where did Jeremiah 31:31–34—law on hearts, forgotten sin—invite me to parent from grace?\n\nWhat sin against my family will I stop rehearsing because God remembers it no more?",
      },
      "02-13": {
        scripturePrimaryRef: "Isaiah 30:15",
        scripturePrimaryText:
          "For thus said the Lord GOD, the Holy One of Israel: In returning and rest you shall be saved; in quietness and in trust shall be your strength. But you refused and said, \"No! We will flee upon horses\"— therefore you shall flee; and, \"We will ride upon swift steeds\"— therefore your pursuers shall be swift.",
        reflection:
          "Salvation arrives as return and rest—not as another sprint on the horses of adrenaline and control. Quiet trust is strength because it leans on God's governance instead of your panic scheduling. Refusal sounds like adult responsibility; in Isaiah it is covenant rebellion dressed as productivity.",
        fatherNote:
          "Block thirty minutes this weekend labeled 'return and rest'—walk without podcast, phone left home—and tell your family you are practicing Isaiah 30:15.",
        challengeType: "sacrifice",
        challenge:
          "Turn off notifications from 6–7 a.m.; use the hour for silent coffee and Isaiah 30:15 handwritten once.",
        leastOfThese:
          "Sit with a panhandler five minutes; listen to his name and story without fixing, trusting God more than your timetable.",
        prayer:
          "Lord, I flee on horses named hustle and image.\nIn returning and rest, save this household.\nQuietness is strength; noise is my drug.\nI refuse the steed; I accept your pace.\nHoly One of Israel, be my strength today.\nAmen.",
        journalPrompt:
          "Where did Isaiah 30:15—return, rest, quiet trust—condemn my 'necessary' hurry?\n\nWhat pursuit will I slow so God can be strength instead of my adrenaline?",
      },
      "02-14": {
        scripturePrimaryRef: "Psalm 32:1-5",
        scripturePrimaryText:
          "Happy are those whose transgression is forgiven, whose sin is covered. Happy are those to whom the LORD imputes no iniquity, and in whose spirit there is no deceit. While I kept silence, my body wasted away through my groaning all day long. For day and night your hand was heavy upon me; my strength was dried up as by the heat of summer. Then I acknowledged my sin to you, and I did not hide my iniquity; I said, \"I will confess my transgressions to the LORD,\" and you forgave the guilt of my sin.",
        reflection:
          "Blessedness begins with covered sin—God's accounting ledger closed for the honest, not for the slick. Silence before men while sin festers becomes physical groaning; the heavy hand is mercy pressing the abscess. Confession spoken aloud to the Lord—and in the Church—is how guilt drains and strength returns.",
        fatherNote:
          "If you have avoided the sacrament, go this week; if you cannot yet, kneel with your spouse and speak one hidden iniquity to God in her hearing.",
        challengeType: "study",
        challenge:
          "Text a friend: 'I am going to confession Saturday—want to meet me after coffee?' Hold the slot open for him.",
        leastOfThese:
          "Buy flowers for a nursing-home resident with no visitors; card signed only 'A brother in Christ.'",
        prayer:
          "Lord, happy are the covered, and I hid to look strong.\nYour heavy hand was love while I groaned.\nI speak my sin; you lift drought from my bones.\nNo deceit in my spirit before you tonight.\nForgive the guilt; restore my strength.\nAmen.",
        journalPrompt:
          "Where did Psalm 32:1–5—silence, groaning, confession—mirror my body's spiritual weather?\n\nWhat transgression will I acknowledge to God and one trusted person this week?",
      },
      "02-15": {
        scripturePrimaryRef: "Proverbs 28:13",
        scripturePrimaryText:
          "No one who conceals transgressions will prosper, but one who confesses and forsakes them will obtain mercy.",
        reflection:
          "Prosperity in Proverbs is shalom—relational wholeness—not your stock graph. Concealment is a career strategy that bankrupts the soul; mercy flows toward the forsaker, not the manager of appearances. One verse can carry a Lent: stop decorating the tomb.",
        fatherNote:
          "Tell your children, 'Dad confesses because mercy finds honest men,' after you apologize for one specific fault from this week.",
        challengeType: "prayer",
        challenge:
          "Write Proverbs 28:13 on your bathroom mirror; read it every time you brush teeth until Sunday.",
        leastOfThese:
          "Leave an anonymous envelope with grocery money at the parish office for a family named by the secretary—no thank-you wanted.",
        prayer:
          "Lord, concealment dressed as prudence starves us.\nI confess to obtain mercy, not to manage yours.\nForsake the transgression I have been nursing.\nProsper my household in truth, not in spin.\nMercy, meet my honesty tonight.\nAmen.",
        journalPrompt:
          "Where did Proverbs 28:13—conceal, confess, forsake—warn me about a secret I am protecting?\n\nWhat will I forsake this month with sacramental help?",
      },
      "02-16": {
        scripturePrimaryRef: "Leviticus 19:17-18",
        scripturePrimaryText:
          "You shall not hate in your heart anyone of your kin; you shall reprove your neighbor, or you will incur guilt yourself. You shall not take vengeance or bear a grudge against any of your people, but you shall love your neighbor as yourself: I am the LORD.",
        reflection:
          "Hatred nursed inwardly is kinship poison; reproof is obligation, not an option for the smug. Vengeance and grudge are twin idols of the offended ego; love as yourself assumes you wish your own genuine good and extend it. The LORD's signature on the verse means holiness sounds like courageous charity, not like cold peace.",
        fatherNote:
          "Correct one child with reproof that ends in blessing—no lingering cold shoulder—or apologize for the silent treatment you used instead of Leviticus 19:17.",
        challengeType: "conversation",
        challenge:
          "Role-play with your spouse how you will reprove a coworker justly tomorrow; pray Leviticus 19:18 before entering the building.",
        leastOfThese:
          "Mediate between two neighbors feuding over snow removal; speak truth without taking sides for vengeance.",
        prayer:
          "Lord, I hate in the heart while I smile at Mass.\nGive me courage to reprove without enjoying the wound.\nI drop vengeance; I refuse the grudge's comfort.\nLove my neighbor as myself—starting at home.\nYou are LORD; I am not jury.\nAmen.",
        journalPrompt:
          "Where did Leviticus 19:17–18—reprove, no grudge, love—expose hatred I baptized as discernment?\n\nWhom will I reprove with love this week instead of resenting in silence?",
      },
      "02-17": {
        scripturePrimaryRef: "Deuteronomy 10:12-13",
        scripturePrimaryText:
          "So now, O Israel, what does the LORD your God require of you? Only to fear the LORD your God, to walk in all his ways, to love him, to serve the LORD your God with all your heart and with all your soul, and to keep the commandments of the LORD your God and his decrees that I am commanding you today, for your own well-being.",
        reflection:
          "Requirement language is love's clarity: God is not guessing what you need for human flourishing. Fear of the Lord is awe that rearranges appetite; walking in his ways is daily ethics, not peak experiences. Serving with whole heart and soul is how fathers stop treating God as a department of emergencies.",
        fatherNote:
          "Choose one commandment you have treated as optional—Sabbath rest, honesty, chastity—and keep its concrete edge today with your wife's awareness.",
        challengeType: "service",
        challenge:
          "Serve at the parish food pantry for one shift this month; sign up online before bed.",
        leastOfThese:
          "Buy winter boots for a child not your own; involve your kids in sizing and delivery.",
        prayer:
          "Lord, you require what heals me, not what shames me.\nTeach me fear that worships, not fear that hides.\nI will walk your ways in contracts and bedtime stories.\nHeart and soul, not leftover minutes, belong to you.\nCommandments are well-being; I obey gladly.\nAmen.",
        journalPrompt:
          "Where did Deuteronomy 10:12–13—fear, walk, love, serve—call out my split allegiance?\n\nWhich commandment will I keep with whole heart tomorrow in one practical way?",
      },
      "02-18": {
        scripturePrimaryRef: "Matthew 6:16-18",
        scripturePrimaryText:
          "And whenever you fast, do not look dismal, like the hypocrites, for they disfigure their faces so as to show others that they are fasting. Truly I tell you, they have received their reward. But when you fast, put oil on your head and wash your face, so that your fasting may be seen not by others but by your Father who is in secret; and your Father who sees in secret will reward you.",
        reflection:
          "Ash on the brow is church-sponsored dust, yet Jesus warns against turning even penance into a performance trophy. Oil and washed face are secrecy before the Father who sees—fasting that trains desire, not brand. Reward from hidden God is participation in his life, not social credit.",
        fatherNote:
          "Receive ashes without plotting how holy you appear; smile at your children before wiping the smudge—let joy contradict performative gloom.",
        challengeType: "sacrifice",
        challenge:
          "Skip lunch quietly; donate its cost anonymously in the poor box with Matthew 6:18 prayed in the car.",
        leastOfThese:
          "Bring ashes to a homebound parishioner if the parish offers it; stay for one decade, no photograph.",
        prayer:
          "Lord, Ash Wednesday is dust, not display.\nFather who sees in secret, notice my fast.\nI wash my face before my family in joy.\nReward me with yourself, not with admiration.\nHypocrisy dies when only you watch.\nAmen.",
        journalPrompt:
          "Where did Matthew 6:16–18—hidden fast, Father who sees—expose my hunger for spiritual applause?\n\nHow will I keep today's fast directed solely toward the Father?",
      },
      "02-19": {
        scripturePrimaryRef: "Luke 18:10-14",
        scripturePrimaryText:
          "Two men went up to the temple to pray, one a Pharisee and the other a tax collector. The Pharisee, standing by himself, was praying thus, 'God, I thank you that I am not like other people: thieves, rogues, adulterers, or even like this tax collector. I fast twice a week; I give a tenth of all my income.' But the tax collector, standing far off, would not even look up to heaven, but was beating his breast and saying, 'God, be merciful to me, a sinner!' I tell you, this man went down to his home justified rather than the other; for all who exalt themselves will be humbled, but all who humble themselves will be exalted.\"",
        reflection:
          "The Pharisee's prayer is self-congratulation with God cc'd; the tax collector's is naked dependence. Justification flows toward the man who names sin without comparison shopping. Exaltation in God's kingdom arrives through humility that feels like defeat to the ego.",
        fatherNote:
          "Pray the tax collector's prayer aloud with your family tonight; add no resume bullet points afterward.",
        challengeType: "study",
        challenge:
          "Compliment one man at work in front of others for a virtue you genuinely admire—no backhanded contrast.",
        leastOfThese:
          "Serve dinner at a shelter; let someone else thank God publicly while you wash dishes unseen.",
        prayer:
          "Lord, I thank you I am not like those weak men—heal that lie.\nMercy on me, a sinner, beats my curated resume.\nHumble me until justification sounds like relief.\nExaltation is yours to give, not mine to stage.\nI go down justified like the tax collector.\nAmen.",
        journalPrompt:
          "Where did Luke 18:10–14—Pharisee, tax collector, justified—mirror my prayer tone today?\n\nWhen this week will I pray without comparison or self-exaltation?",
      },
      "02-20": {
        scripturePrimaryRef: "Mark 8:34-37",
        scripturePrimaryText:
          "He called the crowd with his disciples, and said to them, \"If any want to become my followers, let them deny themselves and take up their cross and follow me. For those who want to save their life will lose it, and those who lose their life for my sake, and for the sake of the gospel, will save it. For what will it profit them to gain the whole world and forfeit their life? Indeed, what can they give in return for their life?\"",
        reflection:
          "Discipleship is not self-improvement branding; it is self-denial under a cross that is specific, not decorative. Saving your life on your own terms is spiritual bankruptcy; losing it for Christ's sake is how life becomes gift again. Gaining the world—portfolio, affair, reputation—while forfeiting the soul is the worst merger in history.",
        fatherNote:
          "Name your cross aloud at dinner—aging parent, special needs, job stress—without self-pity; ask who needs help carrying theirs tomorrow.",
        challengeType: "prayer",
        challenge:
          "Walk the Stations of the Cross alone this week or pray them online; pause at the fifth station and surrender one desire to control outcomes.",
        leastOfThese:
          "Cover a single parent's shift so they can attend a school play; refuse repayment.",
        prayer:
          "Lord, I want followers' glory without followers' cross.\nDenial of self begins when I stop negotiating terms.\nWhat profit if my children inherit the world and lose you?\nI lose my life in Christ to find it forever.\nGospel first, ego last—today.\nAmen.",
        journalPrompt:
          "Where did Mark 8:34–37—cross, lose life, gain world—test my definition of success?\n\nWhat 'whole world' temptation will I renounce this Lent for Christ's sake?",
      },
      "02-21": {
        scripturePrimaryRef: "John 12:24-26",
        scripturePrimaryText:
          "Very truly, I tell you, unless a grain of wheat falls into the earth and dies, it remains just a single grain; but if it dies, it bears much fruit. Those who love their life lose it, and those who hate their life in this world will keep it for eternal life. Whoever serves me must follow me, and where I am, there will my servant be also. Whoever serves me, the Father will honor.",
        reflection:
          "The grain's death is not masochism but fertility—Christ speaks his Passion as biology of redemption. Loving your life as ultimate good is idolatry; hating it in Jesus' sense means refusing to let comfort be god. Service that tracks Jesus' location—Calvary, Eucharist, the poor—is how the Father honors hidden men.",
        fatherNote:
          "Do one chore your wife always does without announcing it; let the fruit be her rest, not your praise.",
        challengeType: "conversation",
        challenge:
          "Plant a bulb or seed with a child; read John 12:24 while you bury it; water it together through Lent.",
        leastOfThese:
          "Visit a cemetery and pray for the forgotten dead; leave flowers on a neglected stone.",
        prayer:
          "Lord, I clutch my single grain; teach me burial.\nFruit for others grows from my dying to self.\nWhere you are—in the broken—I will serve.\nHonor from the Father outranks LinkedIn.\nI follow you into the soil of love.\nAmen.",
        journalPrompt:
          "Where did John 12:24–26—grain, hate life, serve—invite me to bury a selfish pattern?\n\nWhat fruit for my family might grow if I die to one convenience this month?",
      },
      "02-22": {
        scripturePrimaryRef: "2 Corinthians 7:10-11",
        scripturePrimaryText:
          "For godly grief produces a repentance that leads to salvation and brings no regret, but worldly grief produces death. For see what earnestness this godly grief has produced in you, what eagerness to clear yourselves, what indignation, what alarm, what longing, what zeal, what punishment! At every point you have proved yourselves guiltless in the matter.",
        reflection:
          "Godly grief is the Holy Spirit's surgery; worldly grief is narcissistic wound-licking that rots resolve. Paul catalogs zeal, alarm, longing—emotions mobilized toward holiness, not paralyzed in shame. Conversion shows up as cleared accounts and energetic repair, not as elegant apologies that change nothing.",
        fatherNote:
          "Apologize to one child with specifics and a plan to change; ask, 'What do you need from Dad to trust this?'",
        challengeType: "service",
        challenge:
          "Repay a borrowed tool you kept too long; oil it and return with a note—no jokes minimizing delay.",
        leastOfThese:
          "Offer free labor to a nonprofit for three hours; accept the dirtiest task.",
        prayer:
          "Lord, worldly grief keeps me theatrical and stuck.\nGodly grief moves me to salvation without regret.\nGive me earnestness, alarm, zeal—not death.\nClear my accounts with you and with them.\nPunishment here is mercy; I accept it.\nAmen.",
        journalPrompt:
          "Where did 2 Corinthians 7:10–11—godly grief, earnestness, zeal—distinguish my sorrow from true repentance?\n\nWhat repair will I complete this week that matches my apology?",
      },
      "02-23": {
        scripturePrimaryRef: "Philippians 3:7-11",
        scripturePrimaryText:
          "Yet whatever gains I had, these I have come to regard as loss because of Christ. More than that, I regard everything as loss because of the surpassing value of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things, and I regard them as rubbish, in order that I may gain Christ and be found in him, not having a righteousness of my own that comes from the law, but one that comes through faith in Christ, the righteousness from God based on faith. I want to know Christ and the power of his resurrection and the sharing of his sufferings by becoming like him in his death, if somehow I may attain the resurrection from the dead.",
        reflection:
          "Paul's ledger inverts the American father's spreadsheet: résumé lines become refuse beside knowing Christ. Righteousness as gift dismantles the idol of self-made respectability. Resurrection power and cruciform suffering are one path—no Easter without Good Friday in your patience and purse.",
        fatherNote:
          "List three 'gains' you guard—title, physique, follower count—and pray Philippians 3:8 over them with your wife.",
        challengeType: "sacrifice",
        challenge:
          "Give away one possession you value but do not need; drop it at donation today without replacement shopping.",
        leastOfThese:
          "Sponsor a seminarian or missionary for one month anonymously through your diocese.",
        prayer:
          "Lord, my gains glitter; knowing you outshines them.\nRubbish is what I clutch if it blocks Christ.\nRighteousness is yours imputed, not mine performed.\nLet me share your sufferings to know resurrection power.\nI lose rubbish; I gain you.\nAmen.",
        journalPrompt:
          "Where did Philippians 3:7–11—loss, gain Christ, righteousness of faith—test my idols of status?\n\nWhat will I count as loss this Lent to know Christ more plainly?",
      },
      "02-24": {
        scripturePrimaryRef: "Hebrews 10:22-25",
        scripturePrimaryText:
          "Let us approach with a sincere heart and in absolute trust, with our hearts sprinkled clean from an evil conscience and our bodies washed in pure water. Let us hold unwaveringly to our confession that gives us hope, for he who made the promise is trustworthy. We must consider how to rouse one another to love and good works. We should not stay away from our assembly, as is the custom of some, but encourage one another, and this all the more as you see the day drawing near.",
        reflection:
          "Access to God is through blood-sprinkled conscience and baptismal body—honesty and water, not swagger. Hope's confession needs community muscle; isolation is a habit that cools love precisely when the day nears. Rousing one another to love is masculine friendship done in Christ, not competition.",
        fatherNote:
          "Call two men to breakfast after Sunday Mass; Hebrews 10:24 is your only agenda—plan one act of joint mercy before you pay the check.",
        challengeType: "study",
        challenge:
          "Text your men's group: 'Who needs encouragement before Lent deepens?' Reply with prayer, not advice only.",
        leastOfThese:
          "Bring your son to visit a homebound man; let the boy read Hebrews 10:23 aloud.",
        prayer:
          "Lord, I approach you with stained conscience and swagger.\nSprinkle me clean; wash my body in your promise.\nHold my hope steady; you are faithful.\nProvoke me to love; I will provoke others.\nI meet your people; the Day approaches.\nAmen.",
        journalPrompt:
          "Where did Hebrews 10:22–25—sincere heart, assembly, rousing love—expose my drift from the Church?\n\nWhom will I encourage toward a concrete good deed this week?",
      },
      "02-25": {
        scripturePrimaryRef: "1 Thessalonians 5:16-22",
        scripturePrimaryText:
          "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you. Do not quench the Spirit. Do not despise the words of prophets, but test everything; hold fast to what is good; abstain from every form of evil.",
        reflection:
          "Rejoice always is not mood command but Christ-residence; unceasing prayer is breathing awareness of the kingdom. Thanksgiving in all circumstances crucifies the idol of perfect conditions. Testing prophecy protects the community from charismatic ego; holding fast to good refuses cynicism's lazy burn.",
        fatherNote:
          "When news triggers rage tonight, pause, pray one Jesus Prayer, then speak thanks for one fact—1 Thessalonians 5:18 before commentary.",
        challengeType: "prayer",
        challenge:
          "Set hourly phone chime 9–5; each chime, one breath prayer—'Come, Spirit'—to obey pray without ceasing.",
        leastOfThese:
          "Thank a prophet in your parish—lector, catechist—by name after Mass for a line that pierced you.",
        prayer:
          "Lord, I quench the Spirit with sarcasm and scroll.\nRejoice in you when the circumstance stings.\nThanks in all things—train my tongue tonight.\nTest voices; cling to your good.\nFrom every evil form, deliver us.\nAmen.",
        journalPrompt:
          "Where did 1 Thessalonians 5:16–22—rejoice, pray, thanks—clash with my reflex to quench the Spirit?\n\nWhat voice have I despised that I will test and honor this week?",
      },
      "02-26": {
        scripturePrimaryRef: "Matthew 25:34-40",
        scripturePrimaryText:
          "Then the king will say to those at his right hand, 'Come, you that are blessed by my Father, inherit the kingdom prepared for you from the foundation of the world; for I was hungry and you gave me food, I was thirsty and you gave me something to drink, I was a stranger and you welcomed me, I was naked and you gave me clothing, I was sick and you took care of me, I was in prison and you visited me.' Then the righteous will answer him, 'Lord, when was it that we saw you hungry and gave you food, or thirsty and gave you something to drink? And when was it that we saw you a stranger and welcomed you, or naked and gave you clothing? And when was it that we saw you sick or in prison and visited you?' And the king will answer them, 'Truly I tell you, just as you did it to one of the least of these who are members of my family, you did it to me.'",
        reflection:
          "The judgment scene is corpus theology: Jesus so identifies with the needy that your treatment of them is christological. Inheritance is prepared before you were born; works are evidence of living faith, not payroll. Surprise at the verdict means love has become reflex, not ledger.",
        fatherNote:
          "With kids, pack blessing bags with water, socks, granola—Matthew 25:35 on card—keep them in your trunk for encounters this month.",
        challengeType: "conversation",
        challenge:
          "Ask each child who felt 'least' at school this week; pray one Our Father for that person by name at bedtime.",
        leastOfThese:
          "Visit county jail ministry or write to an inmate through parish program; commit to one letter weekly in Lent.",
        prayer:
          "Lord, you starve in the hungry I drive past.\nInherit your kingdom through mercy practiced small.\nStranger, naked, sick, jailed—you, not theory.\nLet my children see you in the least.\nI did it to you, or I did not do it.\nAmen.",
        journalPrompt:
          "Where did Matthew 25:34–40—least of these, you did it to me—rearrange my schedule today?\n\nWhich corporal work of mercy will my family undertake together before March?",
      },
      "02-27": {
        scripturePrimaryRef: "Sirach 3:1-5",
        scripturePrimaryText:
          "Children, listen to me, your father; act accordingly, that you may be safe. For the Lord sets a father in honor over his children and confirms a mother's authority over her sons. Those who honor their father atone for sins; they store up riches who respect their mother. Those who honor their father will have joy in their own children, and when they pray they are heard. Those who respect their father will live a long life; those who obey the Lord honor their mother.",
        reflection:
          "Honor to parents is liturgical economics: atonement, riches stored up, answered prayer, long life—all tied to posture toward those who gave you life. Authority is not tyranny but a mirror of divine order; dishonor spreads downstream to how children treat you. Obedience to the Lord and honor to mother are braided strands.",
        fatherNote:
          "Call or visit your parents with no agenda except gratitude—Sirach 3:1 on your tongue before you dial.",
        challengeType: "service",
        challenge:
          "Ask your mother or mother-in-law what practical help she needs this month; calendar it before you hang up.",
        leastOfThese:
          "Mow or shovel for an elderly neighbor who reminds you of your parents; refuse payment twice.",
        prayer:
          "Lord, I parent while dishonoring those you honored.\nLet joy in my children flow from honor upstream.\nAtonement visits the humble who bless father and mother.\nI listen to my father on earth to learn the Father in heaven.\nTreasure my mother; teach my sons the same.\nAmen.",
        journalPrompt:
          "Where did Sirach 3:1–5—honor, atonement, riches stored—warn me about my tone toward parents?\n\nWhat concrete honor will I show my parents or mentors this week?",
      },
      "02-28": {
        scripturePrimaryRef: "Revelation 3:19-20",
        scripturePrimaryText:
          "I reprove and discipline those whom I love. Be earnest, therefore, and repent. Listen! I am standing at the door, knocking; if you hear my voice and open the door, I will come in to you and eat with you, and you with me.",
        reflection:
          "Christ's rebuke is a lover's wound: discipline proves adoption, not abandonment. Earnest repentance is the fitting response to speech that would rather save than soothe. The door is yours—he knocks; the meal is mutual, eucharistic friendship in the room you kept locked for pride.",
        fatherNote:
          "Before March, choose one 'door'—budget app, private chat, bitterness—and open it to Christ in confession; schedule the hour now.",
        challengeType: "sacrifice",
        challenge:
          "Fast from one meal Friday; spend half in silent listening for Christ's knock—notebook open for one sentence you hear.",
        leastOfThese:
          "Invite a lukewarm friend to dinner; Revelation 3:20 prayed while you set the table.",
        prayer:
          "Lord, your reproof is love; I flinch and call it harm.\nDiscipline me until earnestness returns.\nI hear your knock over the television's noise.\nOpen my door; sup with me tonight.\nRepentance is supper with the risen Christ.\nAmen.",
        journalPrompt:
          "Where did Revelation 3:19–20—discipline, knock, open door—expose a room I keep locked?\n\nWhat will I open to Christ before Lent's first week ends in March?",
      },
      "03-01": {
        scripture:
          "Gen 15:5–12, 17–18; Phil 3:17—4:1; Lk 9:28b–36 — Summary: God’s covenant shines on Abraham; Paul calls us to stand firm; the Transfiguration reveals Jesus’ glory before the cross.",
        reflection:
          "The Second Sunday of Lent lifts our eyes: suffering is not the final word. Let one glimpse of Christ’s brilliance reorder your fears about the cost of following him.",
        prayer:
          "Lord Jesus, transfigured in glory, strengthen me when the path descends toward Jerusalem. Let me listen to you. Amen.",
        challenge: "Read the Transfiguration narrative slowly; name one fear you hand to the Father as Jesus talks with Moses and Elijah.",
        journalPrompt: "What cross am I avoiding that might be the very place Christ wants to reveal his glory?",
      },
      "03-02": {
        scripture:
          "Ps 25:4–5, 8–10; Mk 9:2–13 — Summary: The Lord shows sinners his way; the disciples learn that prayer and fasting drive out what isolates a child.",
        reflection:
          "Some evils only leave by stubborn mercy—prayer when it feels dry, fasting joined to compassion. Monday invites persistence, not theatrics.",
        prayer:
          "Jesus, heal the parts of my life that feel mute or convulsed. I believe; help my unbelief. Amen.",
        challenge: "Offer one meal’s hunger (or a dessert skip) for someone battling addiction, mental illness, or family brokenness.",
        journalPrompt: "What situation have I labeled “hopeless” before bringing it to Christ with fasting and prayer?",
      },
      "03-03": {
        scripture:
          "Is 1:16–18; Mt 23:23–26 — Summary: Wash yourselves clean; though sins be scarlet, they can be white as snow. Jesus condemns legalism that neglects justice and mercy.",
        reflection:
          "Lent scrubs the cup inside, not only the rim. Choose one justice issue—fair wages, honesty at work, care for the earth—and match it with prayer.",
        prayer:
          "Lord, make me clean within. Save me from religion that impresses people but forgets the least. Amen.",
        challenge: "Clean or organize one neglected space as a prayer for inner order; donate usable extras you uncover.",
        journalPrompt: "Where am I careful about religious appearance while avoiding mercy and truth in daily choices?",
      },
      "03-04": {
        scripture:
          "Jer 18:1–6; Rom 9:14–18 — Summary: The potter reshapes spoiled clay; God’s patience with Israel images his freedom to show mercy.",
        reflection:
          "If you feel misshapen, God is not finished. Surrender to the Potter is not passivity—it is courage to be remade when cracks appear.",
        prayer:
          "Father, I am clay in your hands. If I resist your shaping, soften me; if I despair, remind me you do not discard. Amen.",
        challenge: "Bring one honest struggle to Jesus in the tabernacle, adoration, or a quiet corner—five minutes of unhurried honesty.",
        journalPrompt: "What part of my life am I refusing to place back on the wheel for God to reshape?",
      },
      "03-05": {
        scripture:
          "Ps 147:12–20; Lk 5:1–11 — Summary: God sends his word to melt ice; Simon obeys a foolish command and nets a catch that unveils his vocation.",
        reflection:
          "Peter’s fatigue meets Christ’s initiative. When obedience feels pointless, cast the net again—God’s abundance often follows trust in the dark.",
        prayer:
          "Lord, I have labored all night with empty nets. Speak your word; I will let down the nets. Amen.",
        challenge: "Retry one good habit you abandoned—Scripture, rosary, examination—without demanding immediate feelings.",
        journalPrompt: "Where has discouragement convinced me that another effort in faith is useless?",
      },
      "03-06": {
        scripture:
          "Hos 6:1–6; Lk 18:9–14 — Summary: Return to the Lord who heals; steadfast love, not superficial sacrifice, is desired.",
        reflection:
          "God wants mercy, not performance. If your Lent has become grim tallying, reset toward relationship: speak to Jesus as friend and Lord.",
        prayer:
          "Jesus, you desire mercy. Receive my heart as it is today and lead me deeper. Amen.",
        challenge: "Sacrifice thirty minutes of entertainment to call or visit someone who feels forgotten.",
        journalPrompt: "Have I turned Lent into a scoreboard? What would mercy look like in my schedule today?",
      },
      "03-07": {
        scripture:
          "Ps 126; Jn 4:5–42 — Summary: Those who sow in tears reap with joy; Jesus offers living water that becomes a spring within the Samaritan woman.",
        reflection:
          "Thirst is holy when it drives you to the well. Bring your patterns, shame, and questions; Christ already knows you—and still speaks gently.",
        prayer:
          "Lord, give me living water. I am tired of cisterns that leak. Meet me in the ordinary tasks of this day. Amen.",
        challenge: "Fast from one habitual escape (news, gossip, excess snacking) and replace it with one glass of water prayed over for clarity.",
        journalPrompt: "What “well” am I returning to that can never satisfy compared to Christ?",
      },
      "03-08": {
        scripture:
          "Ex 20:1–17; 1 Cor 1:22–25; Jn 2:13–25 — Summary: The commandments order freedom; the cross is God’s wisdom; Jesus cleanses the temple as zeal for true worship.",
        reflection:
          "The Third Sunday of Lent clears clutter from the heart’s sanctuary. Commerce can colonize even religion—name one practice that recenters God alone.",
        prayer:
          "Jesus, drive out what traffics in my soul. Make your Father’s house a house of prayer within me. Amen.",
        challenge: "Simplify your Sunday preparation: arrive at Mass five minutes early in silence, phone silenced, heart ready.",
        journalPrompt: "What has taken up space in my interior life that belongs only to God?",
      },
      "03-09": {
        scripture:
          "2 Chr 36:14–17, 19–23; Eph 2:4–10; Jn 3:14–21 — Summary: Exile follows infidelity, yet God moves Cyrus to restore; we are saved by grace through faith as Moses lifted the serpent.",
        reflection:
          "Nicodemus arrives by night with questions. Bring yours without shame; the Spirit blows where he wills, and love is offered before understanding is complete.",
        prayer:
          "Lord, I come with my questions and fears. Birth me anew by water and Spirit; I trust your light. Amen.",
        challenge: "Write one question for God in a journal or note; sit silently five minutes, open to peace rather than forced answers.",
        journalPrompt: "What part of the Gospel still feels like night—and can I bring it to Jesus anyway?",
      },
      "03-10": {
        scripture:
          "Is 49:8–15; Jn 5:1–16 — Summary: The Lord comforts Zion; at the pool of Bethesda mercy heals on the sabbath, provoking hard hearts.",
        reflection:
          "Jesus asks, “Do you want to be healed?” Sometimes we cling to familiar paralysis. Lent invites honest desire—and the risk of walking differently.",
        prayer:
          "Jesus, at the waters of my life, speak your word. Help me want your healing more than my excuses. Amen.",
        challenge: "Identify one pattern (lateness, resentment, avoidance) and take one concrete step to walk away from it today.",
        journalPrompt: "Where have I grown comfortable with a spiritual or emotional “mat” instead of rising at Christ’s word?",
      },
      "03-11": {
        scripture:
          "Ex 17:3–7; Rom 5:1–2, 5–8; Jn 4:5–42 — Summary: Moses strikes the rock; God’s love is poured into our hearts; the woman at the well becomes an evangelist.",
        reflection:
          "Evangelism begins with being encountered. You are not an issue to fix; you are a beloved speaker of what Jesus has done for you.",
        prayer:
          "Lord, thank you for knowing me through and through. Send me to someone who needs your kindness on my lips. Amen.",
        challenge: "Share one sentence of gratitude for God’s mercy with a friend or family member without forcing a conversation.",
        journalPrompt: "Who might be waiting for a simple, honest word about how Christ has met me?",
      },
      "03-12": {
        scripture:
          "Jer 11:18–20; Jn 7:1–2, 10, 25–30 — Summary: The prophet trusts the just judge; Jesus’ hour has not yet come, revealing patient obedience.",
        reflection:
          "Not every battle is yours today. Discernment includes trusting God’s timing—doing the next faithful step without forcing outcomes.",
        prayer:
          "Jesus, teach me your patience. Guard my tongue when I am misunderstood; anchor me in the Father’s will. Amen.",
        challenge: "When tempted to argue online or at home, pause and pray one Hail Mary before responding.",
        journalPrompt: "Where am I rushing God’s “hour” and creating anxiety or conflict?",
      },
      "03-13": {
        scripture:
          "Gen 37:3–4, 12–13a, 17b–28a; Mt 21:33–43 — Summary: Joseph’s brothers sell him; Jesus’ parable warns tenants who reject the landowner’s son.",
        reflection:
          "Rejected stones become foundations in God’s story. If you feel betrayed or sidelined, entrust the narrative to the One who raises dead dreams.",
        prayer:
          "Lord, when I am cast aside, hold me. Turn envy and hurt into intercession. Amen.",
        challenge: "Pray for someone who has wounded you by name; ask Jesus to bless them with conversion and peace.",
        journalPrompt: "What rejection am I carrying that Jesus wants to transform into fruitfulness?",
      },
      "03-14": {
        scripture:
          "Wis 2:1, 12–22; Jn 7:40–53 — Summary: The wicked test the just one; crowds divide over Jesus while Nicodemus pleads for fairness.",
        reflection:
          "Division tempts us to caricature. Lent calls for clarity without cruelty—truth spoken in charity, even when the crowd pressures you.",
        prayer:
          "Spirit of truth, keep me from cowardice and from cruelty. Give me Jesus’ way of steady witness. Amen.",
        challenge: "Refrain from sarcasm for a full day; replace it with patient, truthful speech.",
        journalPrompt: "Where do I join “sides” in a way that forgets Jesus’ compassion for every confused heart?",
      },
      "03-15": {
        scripturePrimaryRef: "Luke 15:20-24",
        scripturePrimaryText:
          "So he set off and went to his father. But while he was still far off, his father saw him and was filled with compassion; he ran and put his arms around him and kissed him. Then the son said to him, \"Father, I have sinned against heaven and before you; I am no longer worthy to be called your son.\" But the father said to his slaves, \"Quickly, bring out a robe—the best one—and put it on him; put a ring on his finger and sandals on his feet. And get the fatted calf and kill it, and let us eat and celebrate; for this son of mine was dead and is alive again; he was lost and is found!\" And they began to celebrate.",
        reflection:
          "Christ puts before you not a sentimental story but the Father’s own heart: the son rehearses his guilt and the Father interrupts with robe, ring, and feast before penance is finished. The idol of control wants every prodigal to earn re-entry; the Gospel names God as the one who runs, shamelessly, toward shame. Laetare joy is this reconciliation purchased by the Son who became sin—receive it, and your Lent stops being a performance review.",
        fatherNote:
          "Your children are watching whether mercy in your house is a lecture or an embrace; apologize first when you have been the colder father, and let one child hear you say that God celebrates the found more than he tallies the lost.",
        challengeType: "prayer",
        challenge:
          "Kneel five minutes before dinner and pray slowly through Luke 15:20-24, then text or call one person you have kept at arm’s length with only these words: “I am sorry; I want us reconciled.”",
        leastOfThese:
          "Bring a hot meal to a food pantry or neighbor with no explanation except “Christ the Father sent you a feast,” and leave before praise can feed your ego.",
        prayer:
          "Father of the prodigal, you run while I still rehearse speeches.\nI worship control dressed up as responsibility.\nKill the fatted calf in my heart toward my family tonight.\nLet me wear your ring—sonship—not the rags of self-hatred.\nI celebrate because you raised what was dead in me.\n\nAmen",
        journalPrompt:
          "Where did I imitate the elder brother’s resentment or the Father’s embrace today—and which am I choosing tomorrow?\n\nWhich person under my roof still needs the robe of mercy only I, as father, can offer first?",
      },
      "03-16": {
        scripture:
          "Is 65:17–21; Jn 4:43–54 — Summary: God creates new heavens and a new earth; the official’s son is healed at Jesus’ word from a distance.",
        reflection:
          "Faith trusts Jesus’ word before evidence arrives. Your household—children, spouse, roommates—can be blessed by prayers offered in confident hope.",
        prayer:
          "Jesus, speak your healing word over my home. I trust you before I see signs. Amen.",
        challenge: "Pray a blessing over each person in your household by name, even if you live alone (include godchildren or mentors).",
        journalPrompt: "What situation in my family do I need to entrust to Jesus’ distant-yet-present word?",
      },
      "03-17": {
        scripture:
          "Ps 16:1–2, 5, 7–11; Mt 25:14–30 — Summary: The Lord is my chosen portion; parable of talents calls for courageous investment of gifts.",
        reflection:
          "Many recall Patrick’s courage amid fear. Whatever your mission field—school, office, home—risk offering your “talents” for the Master’s joy.",
        prayer:
          "Christ my strength, make me brave in small things. Use my voice and hands for your kingdom. Amen.",
        challenge: "Use a gift you’ve buried—music, teaching, listening—for someone else’s good today.",
        journalPrompt: "What gift have I buried out of fear—and what would faithful risk look like?",
      },
      "03-18": {
        scripture:
          "Dn 3:14–20, 91–92, 95; Jn 8:1–11 — Summary: The three youths trust God in fire; Jesus neither condemns the adulterous woman nor leaves her in sin.",
        reflection:
          "Mercy names sin honestly and says, “Go, sin no more.” Receive that double grace yourself; extend it without cheapening truth.",
        prayer:
          "Lord, I have neither condemned nor been condemned alone. Lift me from the dust to walk in newness. Amen.",
        challenge: "Confession this week if possible; if not, make an act of contrition and schedule the sacrament.",
        journalPrompt: "Where do I need Jesus’ words—“Neither do I condemn you” and “Sin no more”—in balance?",
      },
      "03-19": {
        scripture:
          "2 Sam 7:4–5a, 12–14a, 16; Rom 4:13–22; Mt 1:16, 18–21, 24a — Summary: David’s heir is promised; Abraham hopes against hope; Joseph obeys the angel and names Jesus.",
        reflection:
          "Joseph’s glory is obedience in shadows—protecting, providing, listening. Lent learns from him: holiness often looks like faithful duty warmed by prayer.",
        prayer:
          "St. Joseph, guardian of the Redeemer, teach me quiet courage. Pray for my vocation and my family. Amen.",
        challenge: "Bless your work tools—keyboard, tools, books—with a short prayer for integrity and service.",
        journalPrompt: "How might “hidden” obedience to God be the most important discipleship I can offer now?",
      },
      "03-20": {
        scripture:
          "Jer 20:10–13; Jn 10:31–42 — Summary: The prophet sings in the midst of plots; Jesus eludes stoning until his hour, returning across the Jordan where many believe.",
        reflection:
          "When plots thicken, Jesus withdraws to discern the Father—not to flee forever. Wisdom knows when to speak and when to step back for clarity.",
        prayer:
          "Good Shepherd, when stones fly, keep me in your peace. Let me hear your voice above the crowd. Amen.",
        challenge: "Step back from one contentious thread or conversation; spend the reclaimed time in Scripture or intercession.",
        journalPrompt: "Where is God inviting prudence instead of my reflex to win or defend immediately?",
      },
      "03-21": {
        scripture:
          "Ez 37:21–28; Jn 11:45–56 — Summary: God will make one people; Caiaphas speaks truth in irony—Jesus dies to gather the scattered children.",
        reflection:
          "God weaves unity through the cross. Pray for Christians divided by politics, pain, or pride; trust that Jesus’ death is still gathering.",
        prayer:
          "Lord, make us one as you and the Father are one. Heal what I contribute to division. Amen.",
        challenge: "Pray the Our Father slowly, pausing at “as we forgive,” and forgive one church hurt in your heart.",
        journalPrompt: "What wound with another believer needs the balm of the cross today?",
      },
      "03-22": {
        scripture:
          "Jer 31:31–34; Heb 5:7–9; Jn 12:20–33 — Summary: A new covenant is written on hearts; the Son learns obedience through suffering; a grain of wheat dies to bear much fruit.",
        reflection:
          "The Fifth Sunday of Lent deepens the journey toward Jerusalem. Christ’s “hour” draws near; your small deaths to self—offered in love—can bear fruit you cannot yet see.",
        prayer:
          "Lord Jesus, when I am troubled, speak your Father’s name over my fear. Draw me to serve as you served. Amen.",
        challenge: "Identify one comfort you can surrender today (food, opinion, control) and offer it explicitly for someone you find hard to love.",
        journalPrompt: "What part of my life still clings to life “in the husk” instead of falling into the ground with Christ?",
      },
      "03-23": {
        scripture:
          "Dn 13:1–9, 15–17, 19–30, 33–62 — Summary: Susanna’s innocence is vindicated when Daniel exposes false witness; God hears the cry of the just.",
        reflection:
          "Late Lent tests courage in hidden places. Truth spoken calmly can save the innocent; pray for discernment when gossip, fear, or crowds press for a lie.",
        prayer:
          "Lord of truth, give me Daniel’s clarity and Susanna’s trust. Save me from cowardly silence and cruel speech. Amen.",
        challenge: "Refuse one conversation that would demean another person; if you owe an apology for rumor, offer it simply.",
        journalPrompt: "Where am I tempted to save my skin by letting someone else be misjudged?",
      },
      "03-24": {
        scripture:
          "Is 7:10–14; Lk 1:46–55 — Summary: The sign of the virgin is promised; Mary’s Magnificat rejoices in the Mighty One who lifts the lowly.",
        reflection:
          "On the eve of the Annunciation, let hope rehearse God’s pattern: small things—an empty womb, a Nazareth girl—carry his greatest works.",
        prayer:
          "Mary, Mother of the Word, teach me to magnify the Lord before I see the whole plan. Holy Spirit, overshadow my fear. Amen.",
        challenge: "Pray the Magnificat slowly; underline one line and live it out in a hidden act of humility or generosity.",
        journalPrompt: "What “small” yes might God be preparing in me if I stop demanding a blueprint first?",
      },
      "03-25": {
        scripture:
          "Is 7:10–14; Ps 40; Heb 10:4–10; Lk 1:26–38 — Summary: Mary’s “let it be” opens salvation’s door; Christ takes flesh by her consent.",
        reflection:
          "The Annunciation reminds us that God waits for human freedom. Your “yes” today—however small—can bear Christ into your corner of the world.",
        prayer:
          "Hail Mary, full of grace. Teach me to say yes to God with courage and peace. Jesus, save me from the fear that makes me clutch control. Amen.",
        challenge: "Do one hidden act of service today that no one but God will notice.",
        journalPrompt: "Where is God asking for my consent—not my perfect feelings, but my faithful yes?",
      },
      "03-26": {
        scripture:
          "Jer 18:18–20; Mt 20:17–28 — Summary: Jeremiah trusts God amid plots; Jesus predicts the Passion and teaches that greatness drinks the cup of service.",
        reflection:
          "After the Annunciation’s yes, the road still leads through Jerusalem. Vocation is sustained by daily cups—small deaths to self for love’s sake.",
        prayer:
          "Lord, the cup you give—let me receive it with you. Teach me your service. Amen.",
        challenge: "Serve someone in authority over you (boss, parent, pastor) with cheerful good faith in one task today.",
        journalPrompt: "What “cup” of duty or suffering am I resisting that could become communion with Jesus?",
      },
      "03-27": {
        scripture:
          "Wis 2:12, 17–20; Jn 7:1–2, 10, 25–30 — Summary: The just one is tested; Jesus teaches openly though plots swirl, for his hour is not yet come.",
        reflection:
          "The Friday before Palm Sunday holds tension: the world presses, yet Jesus moves at the Father’s pace. Bring your impatience to him before the hosannas begin.",
        prayer:
          "Jesus, align my heartbeat with the Father’s hour. When I feel trapped, remind me you are never cornered—only obedient. Amen.",
        challenge: "Fast from complaining from noon to bedtime; each time you stop yourself, whisper, “Your will, Father.”",
        journalPrompt: "What pressure makes me try to force God’s hand instead of trusting his timing?",
      },
      "03-28": {
        scripturePrimaryRef: "John 10:40-42",
        scripturePrimaryText:
          "He went away again across the Jordan to the place where John had been baptizing earlier, and he remained there. Many came to him, and they were saying, \"John performed no sign, but everything that John said about this man was true.\" And many believed in him there.",
        reflection:
          "Christ withdraws across the Jordan not from cowardice but from the Father’s clock—his hour is not mob violence but obedient gift. The crowd’s logic is honest: John’s word alone, without spectacle, becomes credible when Jesus stands before them. The idol of ego demands immediate vindication online and at home; this text trains you to trust witness over applause until the Father lifts you up.",
        fatherNote:
          "When your name is dragged through a group chat or your kids parrot a cruel joke, answer once in truth or hold silence without brooding revenge; let them see a father whose peace is Christ’s, not a scoreboard’s.",
        challengeType: "sacrifice",
        challenge:
          "Delete one draft reply that only serves your pride, spend ten minutes with John 10:40-42, and pray for the critic by name without telling anyone you did.",
        leastOfThese:
          "Pay the bus fare or toll for a stranger behind you and say only “Pass it on” if they ask—no mention of church unless they press you.",
        prayer:
          "Jesus, you crossed the Jordan again while stones waited in the city.\nI crave instant vindication; you chose the Father’s hour.\nTeach my tongue your silence that is not cowardice.\nLet John’s word about you sound in how I father.\nI believe where many believed—beyond signs.\n\nAmen",
        journalPrompt:
          "Where did I accept the Father’s timing instead of forcing my defense today?\n\nWhere did ego masquerade as “truth” in my marriage or parenting—and how do I repent tonight?",
      },
      "03-29": {
        scripture:
          "Is 50:4–7; Ps 22; Phil 2:6–11; Mt 21:1–11; Mt 26:14—27:66 — Summary: The Servant and Christ humbled even unto death; the King enters Jerusalem to hosannas as the Passion is proclaimed.",
        reflection:
          "Palm Sunday joins praise and the wood of the cross. Carry palms in your heart: bless the Lord’s name—and stay when the crowd’s mood shifts, as love did on Calvary.",
        prayer:
          "Jesus, gentle King on a borrowed donkey, I welcome you. When I falter, hold me at the cross. Amen.",
        challenge: "Attend Mass or read the Passion slowly; kiss or touch a crucifix and entrust one fear to Christ crucified.",
        journalPrompt: "Where do I want a triumphant Messiah instead of one who saves through suffering love?",
      },
      "03-30": {
        scripture:
          "Is 42:1–7; Ps 27; Jn 12:1–11 — Summary: The servant brings justice to the nations; Mary anoints Jesus’ feet with costly nard before his burial.",
        reflection:
          "Holy Monday is fragrance in the shadow of the cross. Judas counts the cost in coins; love counts the cost in Christ. Pour something precious—time, money, attention—at his feet.",
        prayer:
          "Lord, let my life smell of gratitude, not calculation. Receive my love while there is still time. Amen.",
        challenge: "Do one generous act—time, money, encouragement—that the world would call “waste” for love of Jesus.",
        journalPrompt: "What gift have I withheld from God or neighbor because the ledger did not seem to balance?",
      },
      "03-31": {
        scripture:
          "Is 49:1–6; Jn 11:45–56 — Summary: The servant is light to the nations; the raising of Lazarus hardens plots—Jesus will die to gather the scattered children of God.",
        reflection:
          "Holy Tuesday exposes fear dressed as prudence. Signs of life provoke resistance; still Jesus walks toward Passover for the world’s life.",
        prayer:
          "Jesus, when truth divides, keep me faithful to your mission of unity and mercy. Amen.",
        challenge: "Pray for church leaders and catechists by name; ask God to deepen faith where cynicism spreads.",
        journalPrompt: "Where does fear of “what people will think” tempt me to mute the Gospel’s light?",
      },
      "04-01": {
        scripture:
          "Is 50:4–9a; Mt 26:1–25 — Summary: The Servant suffers shame without shame; Jesus announces the Passover betrayal at the table of friends.",
        reflection:
          "Spy Wednesday names the money and the kiss. Judas is a mirror of small bargains—examine where you trade Christ for lesser security.",
        prayer:
          "Jesus, keep me faithful at the table of your friendship. Rescue me from selling you for comfort or control. Amen.",
        challenge: "Review finances or calendar: is there a “thirty coins” pattern—greed, double life, hidden compromise? Choose one amendment.",
        journalPrompt: "What would I be tempted to trade for Jesus if the price looked small enough?",
      },
      "04-02": {
        scripture:
          "Ex 12:1–8, 11–14; Ps 116; 1 Cor 11:23–26; Jn 13:1–15 — Summary: Jesus washes feet and gives himself in the Eucharist as servant and food for the journey.",
        reflection:
          "Love kneels. Tonight the Church stands at the threshold of the cross: will you let Jesus wash the places you hide, and receive him as bread for the road?",
        prayer:
          "Lord Jesus, in your humility you save me. Make me a servant after your heart and deepen my love for the Eucharist. Amen.",
        challenge: "Before sleep, ask forgiveness from God and forgive one person in your heart by name.",
        journalPrompt: "Whose feet is Christ inviting me to wash—in words, patience, or practical help?",
      },
      "04-03": {
        scripture:
          "Isa 52:13–53:12; Ps 31; Heb 4:14–16; Jn 18:1–19:42 — Summary: Christ’s suffering is vicarious love; from the cross he gathers the world.",
        reflection:
          "Good Friday is silence and splintered wood. Do not rush to Easter noise. Stand with Mary. Let your grief and your sins meet the one who speaks, “It is finished.”",
        prayer:
          "Jesus, crucified King, I place in your wounds my fear, my failures, and my hopes. Have mercy on me and on the whole world. Amen.",
        challenge: "Visit a church, pray the Stations, or kneel for ten minutes with the Passion in mind.",
        journalPrompt: "What truth about myself am I resisting that the cross already knows and heals?",
      },
      "04-04": {
        scripture:
          "Gen 1:1–2:2; Ps 104; 1 Pt 3:18–22 — Summary: The Church keeps vigil between death and life; the Scriptures rehearse creation and deliverance until the risen Christ breaks the silence.",
        reflection:
          "Holy Saturday is the long breath between sorrow and joy. If your faith feels quiet, you are not abandoned—you are being carried through the tomb toward morning.",
        prayer:
          "Lord, in the stillness of this day, strengthen my hope. I wait for you. Come, Lord Jesus. Amen.",
        challenge: "Light a candle at home and pray for everyone you know who is grieving or afraid.",
        journalPrompt: "Where in my life is God asking me to wait with hope instead of forcing an answer?",
      },
      "04-05": {
        scripturePrimaryRef: "John 20:1-9",
        scripturePrimaryText:
          "Early on the first day of the week, while it was still dark, Mary Magdalene came to the tomb and saw that the stone had been removed from the tomb. So she ran and went to Simon Peter and the other disciple, the one whom Jesus loved, and said to them, \"They have taken the Lord out of the tomb, and we do not know where they have laid him.\" Then Peter and the other disciple set out and went toward the tomb. The two were running together, but the other disciple outran Peter and reached the tomb first. He bent down to look in and saw the linen wrappings lying there, but he did not go in. Then Simon Peter came, following him, and went into the tomb. He saw the linen wrappings lying there, and the cloth that had been on Jesus' head, not lying with the linen wrappings but rolled up in a place by itself. Then the other disciple, who reached the tomb first, also went in, and he saw and believed; for as yet they did not understand the scripture, that he must rise from the dead.",
        reflection:
          "The empty tomb is not a rumor you manage\u2014it is evidence that interrupts fear. John 20:1\u20139 shows faith beginning where sight ends: the grave-clothes are there, and the body is not. Let that fact reorder what you call \u201cpossible\u201d before you negotiate with discouragement.",
        fatherNote:
          "Your children watch what you do when the story gets confusing. Easter morning is a father\u2019s lesson in running toward the truth instead of managing appearances\u2014speak plainly about Christ\u2019s victory at home, not only when you feel triumphant.",
        challengeType: "prayer",
        challenge:
          "Kneel before your crucifix and read John 20:1\u20139 aloud slowly; then tell your household one sentence about what the empty tomb changes for your family this week.",
        leastOfThese:
          "Bring breakfast or coffee to a neighbor who works nights and often sleeps through church holidays; leave a note that Christ is risen and you prayed for them.",
        prayer:
          "Risen Jesus,\nJohn 20 proclaims the tomb opened and faith kindled.\nQuiet my panic with evidence stronger than my moods.\nMake me a man who runs toward your word,\nnot away from hard news.\nI ask this in your holy name.\n\nAmen.",
        journalPrompt:
          "Where did I encounter today's Scripture lived out\u2014in myself, my family, or a stranger?\n\nWhere did I resist or fall short of it today, and how do I bring that honestly before God?",
      },
      "04-06": {
        scripturePrimaryRef: "John 20:11-18",
        scripturePrimaryText:
          "But Mary stood weeping outside the tomb. As she wept, she bent over to look into the tomb; and she saw two angels in white, sitting where the body of Jesus had been lying, one at the head and the other at the feet. They said to her, \"Woman, why are you weeping?\" She said to them, \"They have taken away my Lord, and I do not know where they have laid him.\" When she had said this, she turned around and saw Jesus standing there, but she did not know that it was Jesus. Jesus said to her, \"Woman, why are you weeping? Whom are you looking for?\" Supposing him to be the gardener, she said to him, \"Sir, if you have carried him away, tell me where you have laid him, and I will take him away.\" Jesus said to her, \"Mary!\" She turned and said to him in Hebrew, \"Rabbouni!\" (which means Teacher). Jesus said to her, \"Do not hold on to me, because I have not yet ascended to the Father. But go to my brothers and say to them, 'I am ascending to my Father and your Father, to my God and your God.'\"",
        reflection:
          "John 20:11\u201318 is mercy for men who feel reduced to their failures: Christ speaks a name, not a verdict. If you are weeping over what was taken\u2014reputation, peace, time\u2014listen for the voice that turns you back toward mission.",
        fatherNote:
          "A father\u2019s house needs names, not noise. Call your wife and children by name tonight with tenderness; let them hear that the risen Lord still speaks persons into clarity, not categories into shame.",
        challengeType: "conversation",
        challenge:
          "Text three people their first name in a blessing: \u201cI thanked God for you today by name.\u201d Keep each message under two lines.",
        leastOfThese:
          "Visit or call an elderly relative who repeats the same stories; listen to one full story without interrupting, and thank them for teaching you continuity.",
        prayer:
          "Lord Jesus,\nYou called Mary by name in her tears.\nCall me out of self-contempt into sending.\nLet my voice at home sound like mercy,\nnot like a supervisor grading performance.\n\nAmen.",
        journalPrompt:
          "Where did I encounter today's Scripture lived out\u2014in myself, my family, or a stranger?\n\nWhere did I resist or fall short of it today, and how do I bring that honestly before God?",
      },
      "04-07": {
        scripturePrimaryRef: "John 20:19-20",
        scripturePrimaryText:
          "When it was evening on that day, the first day of the week, and the doors of the house where the disciples had met were locked for fear of the Jews, Jesus came and stood among them and said, \"Peace be with you.\" After he said this, he showed them his hands and his side. Then the disciples rejoiced when they saw the Lord.",
        reflection:
          "John 20:19\u201320 meets locked doors: Jesus\u2019 peace is not the absence of danger but his presence in the middle of fear. His wounds are shown, not hidden\u2014honesty about the cross is how joy returns.",
        fatherNote:
          "If your family lives behind locked schedules and screens, be the one who speaks peace first\u2014briefly, credibly\u2014before you troubleshoot. Let your children see that Christ\u2019s peace can enter a defended room.",
        challengeType: "service",
        challenge:
          "At dinner, read John 20:19\u201320 and ask: \u201cWhere do we need Christ\u2019s peace\u2014not comfort, but his presence\u2014this week?\u201d Listen to each answer without debating.",
        leastOfThese:
          "Pay for a stranger\u2019s modest grocery item at checkout if you can; say quietly, \u201cChrist is risen\u2014peace be with you,\u201d only if it would not embarrass them.",
        prayer:
          "Lord,\nYou stood in the midst of fear and spoke peace.\nShow my hands and side to my family as humility,\nnot as self-pity.\nMake our home glad because we saw you,\nnot because trouble disappeared.\n\nAmen.",
        journalPrompt:
          "Where did I encounter today's Scripture lived out\u2014in myself, my family, or a stranger?\n\nWhere did I resist or fall short of it today, and how do I bring that honestly before God?",
      },
      "04-08": {
        scripturePrimaryRef: "John 20:24-29",
        scripturePrimaryText:
          "But Thomas (who was called the Twin), one of the twelve, was not with them when Jesus came. So the other disciples told him, \"We have seen the Lord.\" But he said to them, \"Unless I see the mark of the nails in his hands, and put my finger in the mark of the nails and my hand in his side, I will not believe.\" A week later his disciples were again in the house, and Thomas was with them. Although the doors were shut, Jesus came and stood among them and said, \"Peace be with you.\" Then he said to Thomas, \"Put your finger here and see my hands. Reach out your hand and put it in my side. Do not doubt but believe.\" Thomas answered him, \"My Lord and my God!\" Jesus said to him, \"Have you believed because you have seen me? Blessed are those who have not seen and yet have come to believe.\"",
        reflection:
          "The risen Lord does not ridicule Thomas; he places his wounds within reach and turns a demand for evidence into the Church\u2019s highest creedal cry: \u201cMy Lord and my God.\u201d That is not sentimental comfort\u2014it is the revelation that God\u2019s life is mediated through the crucified body, not through your private theories. The question pressed on you today is whether you will bring your doubt to those wounds or keep feeding it in the dark.",
        fatherNote:
          "Your sons and daughters will not learn faith from your certainty alone; they learn from watching you take your skepticism and fear to Christ crucified and risen, not to the internet. If you mock doubt in them while you entertain it in yourself, you contradict this Gospel.",
        challengeType: "sacrifice",
        challenge:
          "Before your crucifix tonight, say aloud one doubt you have handed only to yourself, then pray slowly one decade for your child who questions the faith at the kitchen table.",
        leastOfThese:
          "Text one coworker who has said openly that faith seems foolish, tell them you thought of them in prayer today, and offer\u2014without argument\u2014to buy them coffee.",
        prayer:
          "Lord Jesus, you answered Thomas with hands and side, not with a lecture.\nI hide my unbelief behind competence and noise.\nDraw my finger to your wounds until my mouth speaks what Thomas spoke.\nLet my house hear \u201cMy Lord and my God\u201d from a man who stopped pretending.\nI will not flee your evidence again. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-09": {
        scripturePrimaryRef: "Luke 24:13-35",
        scripturePrimaryText:
          "Now on that same day two of them were going to a village called Emmaus, about seven miles from Jerusalem, and talking with each other about all these things that had happened. While they were talking and discussing, Jesus himself came near and went with them, but their eyes were kept from recognizing him. And he said to them, \"What are you discussing with each other while you walk along?\" They stood still, looking sad. Then one of them, whose name was Cleopas, answered him, \"Are you the only stranger in Jerusalem who does not know the things that have taken place there in these days?\" Then beginning with Moses and all the prophets, he interpreted to them the things about himself in all the scriptures. As they came near the village to which they were going, he walked ahead as if he were going on. But they urged him strongly, saying, \"Stay with us, because it is almost evening and the day is now nearly over.\" So he went in to stay with them. When he was at the table with them, he took bread, blessed and broke it, and gave it to them. Then their eyes were opened, and they recognized him; and he vanished from their sight. They said to each other, \"Were not our hearts burning within us while he was talking to us on the road, while he was opening the scriptures to us?\"",
        reflection:
          "Christ does not leave two discouraged disciples to their private grief; he walks the road, opens the Law and the Prophets, and makes himself known in the breaking of bread. The same sequence still holds: Word, then Eucharist, then recognition. If you rush past the slow work of listening to God speak, you will keep living the Emmaus story without ever arriving home.",
        fatherNote:
          "Your family does not need another monologue from you about what is wrong with the world; they need you to stay at the table, bless what is given, and let Christ be the one who interprets the week. If dinner is only logistics and screens, you are skipping the very moment Luke says the eyes open.",
        challengeType: "study",
        challenge:
          "On the drive home from work or school, turn off the radio and tell your wife or oldest child one line from today\u2019s Emmaus story that names where your heart has been cold, then stay silent for two minutes while they answer.",
        leastOfThese:
          "Bring supper to a widow on your block who eats alone most nights and stay ten minutes on her porch without checking your phone.",
        prayer:
          "Lord Jesus, you met them in argument and left them in flame.\nI talk about you without letting you interpret my disappointments.\nOpen the Scriptures on my tongue until my heart burns on Monday, not only on Sunday.\nMeet us in the breaking of bread at Mass and at our table.\nI will not hurry past your presence again. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-10": {
        scripturePrimaryRef: "Luke 24:36-48",
        scripturePrimaryText:
          "While they were talking about this, Jesus himself stood among them and said to them, \"Peace be with you.\" They were startled and terrified, and thought that they were seeing a ghost. He said to them, \"Why are you frightened, and why do doubts arise in your hearts? Look at my hands and my feet; see that it is I myself. Touch me and see; for a ghost does not have flesh and bones as you see that I have.\" And when he had said this, he showed them his hands and his feet. While in their joy they were disbelieving and still wondering, he said to them, \"Have you anything here to eat?\" They gave him a piece of broiled fish, and he took it and ate in their presence. Then he said to them, \"These are my words that I spoke to you while I was still with you—that everything written about me in the law of Moses, the prophets, and the psalms must be fulfilled.\" Then he opened their minds to understand the scriptures, and he said to them, \"Thus it is written, that the Messiah is to suffer and to rise from the dead on the third day, and that repentance and forgiveness of sins is to be proclaimed in his name to all nations, beginning from Jerusalem. You are witnesses of these things.\"",
        reflection:
          "The resurrection is not an idea you think about; it is a body you can touch, fish you can watch him eat, and a Scripture you finally understand because he opens your mind. That is how the Church knows she is not inventing comfort\u2014she is standing in front of evidence. If your faith floats above the body and the text, you are still in the upper room mistaking him for a ghost.",
        fatherNote:
          "Show your children that Christianity is not anti-body spirituality: point to this passage when shame tells you to hide your tiredness or your wounds as unworthy of God. If you never let them see you ask mercy at the crucifix, they will learn a religion of performance, not incarnation.",
        challengeType: "prayer",
        challenge:
          "At the dinner table tonight, read Luke 24:39 aloud and ask each child to name one fear they treat like a ghost\u2014then pray one Hail Mary for that fear together.",
        leastOfThese:
          "Bring a cooked meal to a family in your parish whose child is in long-term hospital care, and pray Luke 24:40 in the parking lot before you knock.",
        prayer:
          "Lord Jesus, you refused to be a ghost; you ate fish and showed scars.\nI spiritualize you when I want to dodge my own flesh and my family\u2019s needs.\nOpen my mind to Moses and the prophets until my week makes sense in you.\nSend me from this room as a witness, not a spectator.\nI will touch your wounds in the poor and in my own household. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-11": {
        scripturePrimaryRef: "John 21:1-14",
        scripturePrimaryText:
          "After these things Jesus showed himself again to the disciples by the Sea of Tiberias; and he showed himself in this way. Gathered there together were Simon Peter, Thomas called the Twin, Nathanael of Cana in Galilee, the sons of Zebedee, and two others of his disciples. Simon Peter said to them, \"I am going fishing.\" They said to him, \"We will go with you.\" They went out and got into the boat, but that night they caught nothing. Just after daybreak, Jesus stood on the beach; but the disciples did not know that it was Jesus. Jesus said to them, \"Children, you have no fish, have you?\" They answered him, \"No.\" He said to them, \"Cast the net to the right side of the boat, and you will find some.\" So they cast it, and now they were not able to haul it in because there were so many fish. That disciple whom Jesus loved said to Peter, \"It is the Lord!\" When Simon Peter heard that it was the Lord, he put on some clothes, for he was naked, and jumped into the sea. But the other disciples came in the boat, dragging the net full of fish, for they were not far from the land, only about a hundred yards off. When they had gone ashore, they saw a charcoal fire there, with fish on it, and bread. Jesus said to them, \"Bring some of the fish that you have just caught.\" So Simon Peter went aboard and hauled the net ashore, full of large fish, a hundred fifty-three of them; and though there were so many, the net was not torn. Jesus said to them, \"Come and have breakfast.\" Now none of the disciples dared to ask him, \"Who are you?\" because they knew it was the Lord. Jesus came and took the bread and gave it to them, and did the same with the fish. This was now the third time that Jesus appeared to the disciples after he was raised from the dead.",
        reflection:
          "A night of empty nets ends not with technique but with obedience to a word you did not invent: cast the net where he says. The abundance that follows is not reward for hustle; it is what happens when risen life commands the work. If you keep measuring your fatherhood by productivity charts, you will miss the charcoal fire and the breakfast he already prepared.",
        fatherNote:
          "Lead Saturday breakfast without phones, read this aloud, and admit one place you \u201cfished\u201d without listening to Christ or your wife. Your children need to see failure met by his word, not by your sulking or your doubling down on control.",
        challengeType: "conversation",
        challenge:
          "Tomorrow morning at the breakfast table, obey one small instruction your pastor or your wife already gave you and say at the end, \u201cThat was the right side of the boat.\u201d",
        leastOfThese:
          "Drop off bagels and fruit at the fire station three blocks from your house with a note thanking the crew for night shifts that keep your children safe.",
        prayer:
          "Lord, you met them in failure and fed them on the shore.\nI treat my work like proof of worth and my family like an audience.\nSpeak a command small enough for me to obey today.\nLet me recognize you in bread and fish before I demand spectacle.\nI will cast the net where you say. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-12": {
        scripturePrimaryRef: "Acts 2:42-47",
        scripturePrimaryText:
          "They devoted themselves to the apostles' teaching and fellowship, to the breaking of bread and the prayers. Awe came upon everyone, because many wonders and signs were being done by the apostles. All who believed were together and had all things in common; they would sell their possessions and goods and distribute the proceeds to all, as any had need. Day by day, as they spent much time together in the temple, they broke bread at home and ate their food with glad and generous hearts, praising God and having the goodwill of all the people. And day by day the Lord added to their number those who were being saved.",
        reflection:
          "Luke is not describing an ideal that never existed\u2014he is describing what actually happened when resurrection life took root in a community of men and women who had encountered the Risen Christ. They did not scatter back into private spiritual lives; they gathered, they taught each other, they ate together, they gave away what they had. The domestic rhythm of the Church began here: teaching, fellowship, bread, prayer\u2014four pillars, in that order, every day.",
        fatherNote:
          "Your home is meant to be this\u2014a small Church where teaching, shared meals, prayer, and generous living are daily realities, not Sunday aspirations. The early Christians did not outsource formation to the synagogue; they built it into the texture of ordinary life, and so must you.",
        challengeType: "conversation",
        challenge:
          "Tonight after dinner, open your Bible to Acts 2:42-47, read it aloud to your family, and ask each person which of these four things\u2014teaching, fellowship, breaking bread, or prayer\u2014feels most missing in our home right now.",
        leastOfThese:
          "Think of one person in your life who has no table to gather at this week and invite them\u2014by name, today\u2014to share a meal with your family.",
        prayer:
          "Lord Jesus, you built your Church not in temples but in homes and at tables.\nI have let my home become a place where everyone eats alone and leaves.\nGive me the grace to gather my family with intention, to teach them your Word,\nto break bread with them as if you were present\u2014because you are.\nMake this house a little Church. Amen.",
        journalPrompt:
          "Where did I see the four marks of the early Church\u2014teaching, fellowship, breaking of bread, and prayer\u2014alive in my home or community today?\n\nWhere did I retreat into isolation or distraction instead of building the kind of community Acts describes?",
      },
      "04-13": {
        scripturePrimaryRef: "John 21:15-17",
        scripturePrimaryText:
          "When they had finished breakfast, Jesus said to Simon Peter, \"Simon son of John, do you love me more than these?\" He said to him, \"Yes, Lord; you know that I love you.\" Jesus said to him, \"Feed my lambs.\" A second time he said to him, \"Simon son of John, do you love me?\" He said to him, \"Yes, Lord; you know that I love you.\" Jesus said to him, \"Tend my sheep.\" He said to him the third time, \"Simon son of John, do you love me?\" Peter felt hurt because he said to him the third time, \"Do you love me?\" And he said to him, \"Lord, you know everything; you know that I love you.\" Jesus said to him, \"Feed my sheep.\"",
        reflection:
          "Christ does not restore Peter with a theological exam; he asks for love and immediately binds love to feeding lambs and sheep. That is how God measures leadership in the kingdom\u2014not by swagger, but by whether the vulnerable are actually nourished. The third question hurts because it exposes how often we confuse affection for Christ with comfort for ourselves.",
        fatherNote:
          "Ask each child tonight, \u201cWhat do you need from Dad tomorrow?\u201d and commit to one concrete answer without a speech\u2014food, time, defense, forgiveness. If your love never lands as food at a table, you are not yet answering his question.",
        challengeType: "service",
        challenge:
          "Apologize at the bedside of one child for a recent failure of care, then say slowly, \u201cJesus told Peter to feed his sheep\u2014help me feed you better tomorrow.\u201d",
        leastOfThese:
          "Send a meal or grocery gift card today to a single parent you know by name with a text that says you are praying John 21 for them.",
        prayer:
          "Good Shepherd, you asked Peter the same question until love became deed.\nI want credit for loving you while I dodge the hungry in my house.\nTurn my shame into feeding\u2014schedule, money, truthful words.\nLet my children taste your mercy through my hands.\nI will feed them because you command it. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-14": {
        scripturePrimaryRef: "Matthew 28:18-20",
        scripturePrimaryText:
          "And Jesus came and said to them, \"All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to observe everything that I have commanded you. And remember, I am with you always, to the end of the age.\"",
        reflection:
          "The Risen One speaks first in the language of authority\u2014all of it is his\u2014and then sends disciples to baptize and teach obedience, not to gather likes. The guardrail for that impossible mission is his final word: I am with you. If your Christianity is private opinion without commandment and community, you are not carrying this commission.",
        fatherNote:
          "Explain one Gospel-shaped house rule to your children this week\u2014Sunday Mass, honesty about pornography, forgiveness before sleep\u2014with the \u201cwhy\u201d tied to Christ\u2019s commands, not to your mood. If you never connect discipleship to obedience, they will think faith is a feeling you manage.",
        challengeType: "study",
        challenge:
          "Role-play at the kitchen sink with your spouse for three minutes how you will explain one Church teaching to your kids this month using Matthew 28:20\u2019s promise that Christ stays with them.",
        leastOfThese:
          "Sponsor a child through Catholic Relief Services or your diocesan mission and pray Matthew 28:19 over that child\u2019s photo on the fridge.",
        prayer:
          "Lord Jesus, all authority is yours; I keep grabbing it in my house.\nI fear teaching obedience because I fear being laughed at.\nSend me to baptize my week in your name\u2014word, work, mercy.\nStay with us until the end; I will not disciple alone.\nI teach tonight because you commanded it. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-15": {
        scripturePrimaryRef: "Romans 6:4-5",
        scripturePrimaryText:
          "Therefore we have been buried with him by baptism into death, so that, just as Christ was raised from the dead by the glory of the Father, so we too might walk in newness of life. For if we have been united with him in a death like his, we will certainly be united with him in a resurrection like his.",
        reflection:
          "Paul is not offering a metaphor; he is naming baptismal reality\u2014you were buried with Christ and raised to walk a kind of life that did not exist before. The resurrection is not a mood you wait for; it is a walk you either practice or betray. If your week looks identical to your old slavery, you are not lying to the world\u2014you are lying to your baptism.",
        fatherNote:
          "Show your children one habit\u2014phone boundaries, honest apology, consistent prayer\u2014that makes baptism visible; if they never see death-to-self, they will think faith is a label, not a transformation.",
        challengeType: "prayer",
        challenge:
          "Kneel before your crucifix after lunch and name one sin-pattern you will confess this week, then fast from its trigger from now until dinner while whispering Romans 6:4 once each hour.",
        leastOfThese:
          "Pay a pharmacy copay for an elderly neighbor who skips medicine; hand the receipt to them in person and say you remembered Christ\u2019s rising.",
        prayer:
          "Father, you buried me with Christ and raised me by glory.\nI still live as if sin owns my temper and my tongue.\nGive me one concrete walk of newness today\u2014not a promise, a deed.\nLet my children see resurrection in repaired habits.\nI rise with you or I do not rise at all. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-16": {
        scripturePrimaryRef: "Colossians 3:1-4",
        scripturePrimaryText:
          "So if you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God. Set your minds on things that are above, not on things that are on earth, for you have died, and your life is hidden with Christ in God. When Christ who is your life is revealed, then you also will be revealed with him in glory.",
        reflection:
          "Paul is not inviting you to ignore groceries and diapers; he is telling you where your real life is anchored now\u2014hidden with the ascended Christ. The mind that stays glued to the scoreboard of this age is a mind that has not understood Easter. You will be revealed with him in glory; the only question is whether today\u2019s choices look like someone who believes that.",
        fatherNote:
          "Lead a five-minute examen at the dinner table: name one thing from today that mattered for eternity and one thing that was only noise. If you never teach your children to weigh time by glory, they will weigh it by adrenaline and appetite alone.",
        challengeType: "conversation",
        challenge:
          "Delete one app that trains covetousness tonight and write Colossians 3:2 on an index card taped to your work monitor before you log in tomorrow.",
        leastOfThese:
          "Help a young man complete one page of a job or trade-school application at your kitchen table and pray Colossians 3:3 over his name before he leaves.",
        prayer:
          "Christ, my life is hidden with you while my attention scatters.\nI treat news and sports like they hold the weight of glory.\nPull my mind to things above before I speak tonight.\nLet my children hear eternal priorities in my tone.\nI seek you where you reign, not where I panic. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-17": {
        scripturePrimaryRef: "Acts 13:30-33",
        scripturePrimaryText:
          "But God raised him from the dead; and for many days he appeared to those who came up with him from Galilee to Jerusalem, and they are now his witnesses to the people. And we bring you the good news that what God promised to our ancestors he has fulfilled for us, their children, by raising Jesus; as also it is written in the second psalm, \"You are my Son; today I have begotten you.\"",
        reflection:
          "Paul\u2019s sermon names Easter as the Father\u2019s blunt verdict on death: not myth but witnesses who ate and walked with the risen Christ. The resurrection is public truth entrusted to apostles, not a private mood you schedule when convenient. The idol of comfort wants Christianity without the scandal of an empty tomb; this text sends you, father, as a household witness to a fact that rearranges calendars and careers.",
        fatherNote:
          "Tell your children one reason you still believe the resurrection is history, not metaphor, and ask what question about death or hope they carry; listen without rushing to tidy answers.",
        challengeType: "service",
        challenge:
          "Write a one-page letter to your children about what you desire for them in heaven, seal it with today\u2019s date, and place it in your Bible at Acts 13.",
        leastOfThese:
          "Deliver quality children\u2019s books or baby clothes to your parish pregnancy center with a note praying Acts 13:32-33 for the next family who walks through the door.",
        prayer:
          "God of the living, you raised Jesus after many days of witness.\nI shrink the Gospel to inspiration; forgive me.\nMake me a credible witness at my own table.\nLet my children hear Easter as news, not noise.\nYour Son is begotten, not buried\u2014forever.\n\nAmen",
        journalPrompt:
          "Where did the resurrection reorder what I feared or chased today?\n\nWhere did I live as if death still had the last word\u2014and how do I repent tonight?",
      },
      "04-18": {
        scripturePrimaryRef: "John 14:15-17",
        scripturePrimaryText:
          "\"If you love me, you will keep my commandments. And I will ask the Father, and he will give you another Advocate, to be with you forever. This is the Spirit of truth, whom the world cannot receive, because it neither sees him nor knows him. You know him, because he abides with you, and he will be in you.\"",
        reflection:
          "Christ does not separate love from obedience; he welds them together and promises the Spirit to the one who keeps his word. The world cannot receive the Spirit of truth because it wants a spirit without commandments. If you want intimacy with God while hiding habits from your wife, you are asking for a ghost, not the Advocate.",
        fatherNote:
          "Pick one commandment you have softened for comfort\u2014Sunday rest, purity online, truth in finances\u2014and obey it visibly this week. Tell your wife what you are doing and why; your children need to see that love for Jesus is not a private feeling.",
        challengeType: "sacrifice",
        challenge:
          "Memorize John 14:15-16 and recite it aloud at your desk when you reach for the distraction that usually breaks your marriage promises.",
        leastOfThese:
          "Drive an elderly parishioner named by you to Mass this weekend and stay silent in the car except for one Our Father for their intentions.",
        prayer:
          "Jesus, you tied love to commandments and sent the Spirit of truth.\nI want your presence without your discipline.\nCome, Advocate, and live in me\u2014not as a visitor, as Lord.\nExpose my secret refusals tonight.\nI will keep your word or stop pretending. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-19": {
        scripturePrimaryRef: "John 14:27",
        scripturePrimaryText:
          "Peace I leave with you; my peace I give to you. I do not give to you as the world gives. Do not let your hearts be troubled, and do not let them be afraid.",
        reflection:
          "Christ\u2019s peace is not a sedative; it is his own presence left as inheritance, and it is entirely unlike the world\u2019s bargain of peace through control. He commands the heart not to be troubled\u2014not because trouble is unreal, but because he is greater. If you still trade sleep for scrolling, you are not receiving what he leaves; you are self-medicating.",
        fatherNote:
          "Turn off news and sports thirty minutes before bed tonight, read John 14:27 to whoever is in the living room, and pray one Our Father slowly together before anyone opens a screen again.",
        challengeType: "study",
        challenge:
          "Skip one unnecessary purchase today, put the cash in an envelope labeled \u201cpeace not adrenaline,\u201d and give it to your pastor for the poor after Mass this weekend.",
        leastOfThese:
          "Sit beside one anxious stranger in a clinic waiting room without offering advice\u2014only silent company and, if fitting, John 14:27 written on a card.",
        prayer:
          "Lord Jesus, you leave peace as gift, not payment for my performance.\nI trade your peace for noise because I fear silence.\nQuiet my heart before I speak to my wife tonight.\nLet my children hear calm in my voice, not panic.\nI receive what you leave or I receive nothing. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-20": {
        scripturePrimaryRef: "John 15:1-5",
        scripturePrimaryText:
          "\"I am the true vine, and my Father is the vinegrower. He removes every branch in me that bears no fruit. Every branch that bears fruit he prunes to make it bear more fruit. You have already been cleansed by the word that I have spoken to you. Abide in me as I abide in you. Just as the branch cannot bear fruit by itself unless it abides in the vine, neither can you unless you abide in me. I am the vine, you are the branches. Those who abide in me and I in them bear much fruit, because apart from me you can do nothing.\"",
        reflection:
          "This is an ontological claim, not a pep talk: apart from Christ you produce nothing of lasting value; the branch does not negotiate with the vine. Pruning is not punishment for failure; it is the Father\u2019s love clearing what steals sap. If your calendar proves you abiding in everything but him, you already know why the fruit is bitter.",
        fatherNote:
          "Cancel one self-promoting project this month and put that time into family prayer or an hour with your wife without devices. Show your children that \u201capart from me you can do nothing\u201d is liberation, not a line for failures.",
        challengeType: "prayer",
        challenge:
          "Spend twenty-five minutes before the tabernacle or with John 15 open in your living room and whisper aloud one \u201cbranch\u201d you will surrender tonight\u2014work, porn, gossip, or pride.",
        leastOfThese:
          "Mulch or weed one parish garden bed beside a teenager while praying John 15:5 quietly for lasting fruit in their vocation.",
        prayer:
          "True Vine, the Father prunes what steals life from me.\nI pretend I can bear fruit by hustle and image.\nKeep me in you; let sap be prayer, not adrenaline.\nLet my children see rest, not performance.\nI abide or I wither\u2014no third option. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-21": {
        scripturePrimaryRef: "John 15:9-12",
        scripturePrimaryText:
          "\"As the Father has loved me, so I have loved you; abide in my love. If you keep my commandments, you will abide in my love, just as I have kept my Father's commandments and abide in his love. I have said these things to you so that my joy may be in you, and that your joy may be complete. This is my commandment, that you love one another as I have loved you.\"",
        reflection:
          "Joy here is not a mood you chase; it is the fruit of abiding in a love that keeps commandments as Jesus did. That is a hard word for men who want warmth without conversion. If your home is joyless, the first question is not what others failed to give you but whether you are abiding or drifting.",
        fatherNote:
          "Ask your wife what commandment she most needs you to keep for her sake this week\u2014listen without defending\u2014and do one concrete act before Sunday Mass.",
        challengeType: "conversation",
        challenge:
          "Do the one chore your wife hates most without announcing it; when she thanks you, say only, \u201cChrist told me to love you like this.\u201d",
        leastOfThese:
          "Buy coffee for parents of a special-needs child at Saturday sports and tell them you prayed John 15:12 in the car on the way.",
        prayer:
          "Jesus, you loved me as the Father loved you\u2014obediently, costly, joyful.\nI want joy without keeping your word.\nLet my home feel the difference when I abide.\nSend joy that tracks with truth, not with moods.\nI love them as you loved me\u2014starting tonight. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-22": {
        scripturePrimaryRef: "John 16:33",
        scripturePrimaryText:
          "I have said this to you, so that in me you may have peace. In the world you face persecution. But take courage; I have conquered the world!",
        reflection:
          "Jesus promises trouble in the same breath as peace\u2014not because he is careless, but because he has already decided the outcome. Peace that depends on circumstances is not his peace; it is the world\u2019s sedation. If persecution surprises you, you have been listening to a different gospel.",
        fatherNote:
          "Tell your children one story\u2014yours or a saint\u2019s\u2014of faithfulness under pressure, and end with Christ\u2019s victory, not with your resentment toward critics.",
        challengeType: "service",
        challenge:
          "Before you walk into the meeting or email chain that tempts you to sin today, pray John 16:33 aloud once in your truck or stairwell.",
        leastOfThese:
          "Send a voice memo to a brother in unemployment or court stress quoting John 16:33 and promising your prayers by name.",
        prayer:
          "Lord, you conquered the world while I still flinch at a harsh email.\nGive me courage that sounds like courtesy, not swagger.\nLet peace in you judge my tongue at home tonight.\nI will not pretend the fight is over\u2014you already won.\nI stand in your victory today. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-23": {
        scripturePrimaryRef: "John 17:20-23",
        scripturePrimaryText:
          "\"I ask not only on behalf of these, but also on behalf of those who will believe in me through their word, that they may all be one. As you, Father, are in me and I am in you, may they also be in us, so that the world may believe that you have sent me. The glory that you have given me I have given them, so that they may be one, as we are one, I in them and you in me, that they may become completely one, so that the world may know that you have sent me and have loved them even as you have loved me.\"",
        reflection:
          "The credibility of the Gospel is tied to visible unity\u2014not sentimental agreement, but the kind of oneness that can only come from sharing the Father\u2019s life. Division in your marriage or parish is not a personality problem first; it is a missionary emergency. The world does not need your opinions; it needs to see love that can only be explained by the Trinity.",
        fatherNote:
          "Call one person you have avoided\u2014in-law, coworker, brother priest\u2014apologize for your part in the fracture, and schedule coffee this week without demanding they fix their side first.",
        challengeType: "sacrifice",
        challenge:
          "Pray one decade of the rosary for Christian unity on your knees in the living room with your wife, naming your godparents and sponsors aloud.",
        leastOfThese:
          "Bring two friends who avoid each other a simple meal on paper plates at your house with no agenda except blessing and silence.",
        prayer:
          "Holy Father, you and the Son are one; I fracture every room I enter.\nHeal what I caused by pride and silence.\nLet my marriage and parish believably carry your glory.\nI want the world to believe because we love.\nI reconcile today or I lie about your mission. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-24": {
        scripturePrimaryRef: "Acts 1:8",
        scripturePrimaryText:
          "But you will receive power when the Holy Spirit has come upon you; and you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the ends of the earth.",
        reflection:
          "Power here is for witness\u2014not for comfort, not for reputation management. The geography is your life: home first, then the awkward border, then the stranger. If the Spirit gave you fire and you still speak of Jesus only when it costs nothing, you have quenched what you were given.",
        fatherNote:
          "Write three names\u2014one in your house, one in extended family, one you dislike\u2014and pray Acts 1:8 over them at dinner with your wife listening.",
        challengeType: "study",
        challenge:
          "Send one text before sunset to the \u201cSamaria\u201d name on your list with a concrete encouragement that mentions Christ without debate.",
        leastOfThese:
          "Drop a gas gift card at your parish office for a family in crisis with \u201cActs 1:8\u201d on the envelope and your promise to pray at Mass.",
        prayer:
          "Father, you promised power for witnesses, not for my comfort.\nI stay silent while neighbors perish politely.\nFill me with fire for truth spoken in love.\nStart in my Jerusalem tonight.\nI will speak or stop calling myself yours. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-25": {
        scripturePrimaryRef: "Acts 4:32-35",
        scripturePrimaryText:
          "Now the whole group of those who believed were of one heart and soul, and no one claimed private ownership of any possessions, but everything they owned was held in common. With great power the apostles gave their testimony to the resurrection of the Lord Jesus, and great grace was upon them all. There was not a needy person among them, for as many as owned lands or houses sold them and brought the proceeds of what was sold. They laid it at the apostles' feet, and it was distributed to each as any had need.",
        reflection:
          "Resurrection preaching sounded in deeds\u2014shared life, loosened grip on \u201cmine,\u201d concrete care for the needy. That is not socialism; it is what grace does when the Risen Christ is believed. If your bank account and your calendar never feel the pinch of someone else\u2019s need, you are still living pre-Pentecost fear.",
        fatherNote:
          "With your wife tonight, choose one expense to cut or one possession to sell and give the proceeds through your parish to a named need.",
        challengeType: "prayer",
        challenge:
          "Box garage items for St. Vincent de Paul before the kids go to bed and drive the box to the parish drop tonight, not tomorrow.",
        leastOfThese:
          "Pay for one stranger\u2019s laundry cycle at the laundromat near your parish and hand them a card that says only \u201cChrist is risen\u2014you are not alone.\u201d",
        prayer:
          "Lord, one heart and one soul began with the apostles\u2019 testimony.\nI guard my stuff while brothers lack bread.\nLoosen my hands until resurrection sounds in my checkbook.\nLet my children see generosity, not slogans.\nI give tonight because you gave everything. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-26": {
        scripturePrimaryRef: "1 Peter 2:9-10",
        scripturePrimaryText:
          "But you are a chosen race, a royal priesthood, a holy nation, God's own people, in order that you may proclaim the mighty acts of him who called you out of darkness into his marvelous light. Once you were not a people, but now you are God's people; once you had not received mercy, but now you have received mercy.",
        reflection:
          "Peter is not handing out titles for vanity; he is naming the missionary identity of every baptized man\u2014priest, king, prophet\u2014sent to declare God\u2019s deeds. Mercy received becomes speech; if your home hears only grievance about politics and never praise of what God did in Christ, you are burying the light you were given.",
        fatherNote:
          "Stand together after dinner, thank God aloud for one mercy none of you deserved this year, and name one \u201cmighty act\u201d of Christ someone witnessed at school or work.",
        challengeType: "conversation",
        challenge:
          "Record a ninety-second voice memo thanking God for mercy and text it to the extended family member who most needs to hear gratitude instead of argument.",
        leastOfThese:
          "After Sunday Mass, thank your pastor face-to-face for preaching Christ and hand him a coffee gift card if you can.",
        prayer:
          "Lord, you made us a royal priesthood to proclaim your deeds.\nMy table sounds like cable news, not marvelous light.\nConvert my complaints into testimony before bedtime.\nLet mercy I received become mercy I speak.\nI praise you tonight in my own house. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-27": {
        scripturePrimaryRef: "Acts 10:34-43",
        scripturePrimaryText:
          "Then Peter began to speak to them: \"I truly understand that God shows no partiality, but in every nation anyone who fears him and does what is right is acceptable to him. You know the message he sent to the people of Israel, preaching peace by Jesus Christ—he is Lord of all. That message spread throughout Judea, beginning in Galilee after the baptism that John announced: how God anointed Jesus of Nazareth with the Holy Spirit and with power; how he went about doing good and healing all who were oppressed by the devil, for God was with him. We are witnesses to all that he did both in Judea and in Jerusalem. They put him to death by hanging him on a tree; but God raised him on the third day and allowed him to appear, not to all the people but to us who were chosen by God as witnesses, and who ate and drank with him after he rose from the dead. He commanded us to preach to the people and to testify that he is the one ordained by God as judge of the living and the dead. All the prophets testify about him that everyone who believes in him receives forgiveness of sins through his name.\"",
        reflection:
          "God shows no partiality\u2014salvation is not tribal property. Peter\u2019s sermon ties forgiveness to the name of the Crucified-Risen One and sends witnesses to every nation. If your friendships, jokes, and fears are monochrome, the Gospel has not yet corrected your heart.",
        fatherNote:
          "At dinner, name one neighbor or coworker outside your usual circle and pray for them by name; forbid yourself sarcastic asides about \u201cthose people\u201d in front of your children.",
        challengeType: "service",
        challenge:
          "Text one friend a single sentence that God\u2019s peace in Christ is for everyone, and add one concrete way you will show that peace at work tomorrow.",
        leastOfThese:
          "Bring groceries to a pantry serving immigrants and hand the volunteer a note that says you are praying Acts 10 for their staff.",
        prayer:
          "God of all nations, Peter learned on his knees that you show no partiality.\nI still sort people like merchandise.\nKill my tribal pride; let peace in Jesus cross my threshold.\nI will fear you and work justice, not comfort.\nI speak your peace today or I stay silent. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-28": {
        scripturePrimaryRef: "Romans 8:11",
        scripturePrimaryText:
          "If the Spirit of him who raised Jesus from the dead dwells in you, he who raised Christ from the dead will give life to your mortal bodies also through his Spirit that dwells in you.",
        reflection:
          "The same Spirit who raised Christ from the grave dwells in your tired body\u2014not as decoration, but as power directed toward holiness. Your exhaustion is not proof God left; it is the place where resurrection virtue is worked out. If you keep living as if only willpower matters, you insult the Guest inside you.",
        fatherNote:
          "Stop telling your family you are \u201cdone\u201d when you are only weary; ask for help and pray Romans 8:11 aloud over your children\u2019s bedrooms before you sleep.",
        challengeType: "sacrifice",
        challenge:
          "Walk around the block once after supper praying Romans 8:11 one phrase per step for your wife\u2019s hidden fatigue.",
        leastOfThese:
          "Visit someone home from surgery with groceries they can lift and pray this verse at the foot of their bed before you leave.",
        prayer:
          "Holy Spirit, you raised Jesus; you dwell in my mortal flesh.\nI treat tiredness like an excuse to snap at my family.\nQuicken patience where I am dying to self.\nLet my children see your life in my gentleness tonight.\nI rely on you or I rely on nothing. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-29": {
        scripturePrimaryRef: "Revelation 1:17-18",
        scripturePrimaryText:
          "When I saw him, I fell at his feet as though dead. But he placed his right hand on me, saying, \"Do not be afraid; I am the first and the last, and the living one. I was dead, and see, I am alive forever and ever; and I have the keys of Death and of Hades.\"",
        reflection:
          "John does not negotiate with fear; he collapses, and Christ steadies him with words that remake the universe\u2014first, last, living, key-holder of death. That is the voice your anxiety meets when you finally stop playing savior. If you still think your control keeps the household safe, you have not heard him.",
        fatherNote:
          "Pray this text over each child at bedtime with a hand on the shoulder; tell them plainly that Christ owns what they fear most.",
        challengeType: "study",
        challenge:
          "Kneel fifteen minutes before the tabernacle or a crucifix after work and surrender on paper one fear you have been managing without Christ.",
        leastOfThese:
          "Handwrite Revelation 1:18 on a notecard for someone in addiction recovery with the words \u201cYou are not alone in the fight.\u201d",
        prayer:
          "Jesus, First and Last, you hold keys I keep stealing back.\nI fall; you stand. I fear; you live.\nLet my household hear your voice over my bravado.\nI surrender death\u2019s terror to you tonight.\nI trust your hand or I trust nothing. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "04-30": {
        scripturePrimaryRef: "Revelation 21:5",
        scripturePrimaryText:
          "And the one who was seated on the throne said, \"See, I am making all things new.\" Also he said, \"Write this, for these words are trustworthy and true.\"",
        reflection:
          "Renewal is not a mood; it is a decree from the throne\u2014faithful and true, written down because God means it. Cynicism about your marriage or your parish is not realism; it is unbelief about the One who speaks from the seat of judgment and mercy. You are either aligned with that word or you are betting against the throne.",
        fatherNote:
          "Repair one concrete thing this week\u2014a conversation, a bedtime routine, a fence\u2014and tell your children you did it because God makes all things new, not because you finally felt like it.",
        challengeType: "prayer",
        challenge:
          "Clean one neglected space in your home for forty minutes while whispering \u201cSee, I am making all things new\u201d once per wall you wash.",
        leastOfThese:
          "Volunteer one hour at parish grounds clean-up with a teen and pray Revelation 21:5 together in the parking lot before you drive home.",
        prayer:
          "Lord on the throne, you speak renewal that is faithful and true.\nI rehearse cynicism like wisdom.\nMake new what I broke by sin and sloth.\nLet my tongue align with your promise today.\nI trust your word over my mood. Amen.",
        journalPrompt:
          "Where did I encounter this Scripture lived out today\u2014in myself, my family, or a stranger?\n\nWhere did I resist, avoid, or fall short of it\u2014and how do I bring that honestly before God tonight?",
      },
      "05-01": {
        scripturePrimaryRef: "John 17:1-5",
        scripturePrimaryText:
          "After Jesus had spoken these words, he looked up to heaven and said, \"Father, the hour has come; glorify your Son so that the Son may glorify you, since you have given him authority over all people, to give eternal life to all whom you have given him. And this is eternal life, that they may know you, the only true God, and Jesus Christ whom you have sent. I glorified you on earth by finishing the work that you gave me to do. So now, Father, glorify me in your own presence with the glory that I had in your presence before the world existed.\"",
        reflection:
          "Christ\u2019s priestly prayer names the Father\u2019s glory and our eternal life as knowledge of the true God\u2014not opinion, but communion. He has finished the work entrusted to him; your scattered \u201cbusyness\u201d is not what completes the Father\u2019s plan. If your home rarely speaks of the Father\u2019s glory except when you are irritated, you are muffling the very prayer Jesus still lifts for the Church.",
        fatherNote:
          "After dinner, read John 17:1\u20135 aloud once with your wife and name one way your family already glorifies the Father. Ask each child what \u201cknowing God\u201d looked like in their day before phones return.",
        challengeType: "service",
        challenge:
          "Text your pastor or spiritual director a single sentence of gratitude that Christ still intercedes, and promise one hour of silent adoration this week.",
        leastOfThese:
          "Slip a grocery gift card under the door of a family you know is skipping meals; write only \u201cThe Father sees you\u2014John 17\u201d inside the envelope.",
        prayer:
          "Father, your Son glorified you by finishing his work.\nI scatter unfinished pride across my calendar.\nUnite my house to the only true God Jesus reveals.\nLet eternal life sound like knowledge, not noise.\nI entrust my vocation to your glory tonight. Amen.",
        journalPrompt:
          "Where did I encounter Christ\u2019s prayer for glory and knowledge of the Father in myself, my family, or a stranger today?\n\nWhere did I resist entrusting my unfinished work to him\u2014and how do I bring that honestly before God tonight?",
      },
      "05-02": {
        scripturePrimaryRef: "1 Corinthians 15:20-22",
        scripturePrimaryText:
          "But in fact Christ has been raised from the dead, the first fruits of those who have died. For since death came through a human being, the resurrection of the dead has also come through a human being; for as all die in Adam, so all will be made alive in Christ.",
        reflection:
          "Paul\u2019s logic is blunt: the whole human story forks in a tomb\u2014Adam\u2019s solidarity in death, Christ\u2019s solidarity in risen life. \u201cFirst fruits\u201d means the harvest of the world has already begun; your cynicism about conversion is a vote against the field itself. If you father as though entropy wins, you contradict the very headline you claim to believe on Sundays.",
        fatherNote:
          "Tell your children one story of a person whose life changed because Christ is risen, not because of a self-help book. End by asking which fear about death still rattles them, and pray 1 Corinthians 15:22 together.",
        challengeType: "sacrifice",
        challenge:
          "Delete one feed or subscription that trains you to treat people as hopeless; replace that block with reading 1 Corinthians 15:20-22 slowly before bed.",
        leastOfThese:
          "Bring flowers to a cemetery plot of someone poor and pray aloud \u201cChrist the first fruits\u201d even if no one hears but God.",
        prayer:
          "Risen Christ, first fruits of the dead, you swallowed Adam\u2019s defeat.\nI parent as if the grave gets the last word.\nMake my children see life\u2019s true horizon in you.\nLet my speech match your empty tomb.\nI stake my home on your harvest today. Amen.",
        journalPrompt:
          "Where did I taste hope in Christ\u2019s resurrection\u2014in myself, my family, or a stranger today?\n\nWhere did I live or speak as if Adam\u2019s story still rules\u2014and how do I bring that honestly before God tonight?",
      },
      "05-03": {
        scripturePrimaryRef: "Romans 5:1-5",
        scripturePrimaryText:
          "Therefore, since we are justified by faith, we have peace with God through our Lord Jesus Christ, through whom we have obtained access to this grace in which we stand; and we boast in our hope of sharing the glory of God. And not only that, but we also boast in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not disappoint us, because God's love has been poured into our hearts through the Holy Spirit that has been given to us.",
        reflection:
          "Peace with God is not mood; it is objective standing in grace accessed through Christ. Paul chains suffering to hope\u2014not because pain is pleasant, but because the Spirit pours God\u2019s love into hearts that would otherwise curdle. If you only boast about comfort and hide your crosses from your children, they will never learn the mechanics of hope.",
        fatherNote:
          "Share one current suffering with your wife without fixing or bragging; name which virtue God seems to be forging. Ask your kids before bed what hard thing they are carrying and pray Romans 5:5 over them with a hand on each head.",
        challengeType: "study",
        challenge:
          "Write a short letter to a brother in crisis quoting Romans 5:1-3 and mail it today with no expectation of reply.",
        leastOfThese:
          "Pay the copay for a stranger\u2019s prescription at the pharmacy counter if your parish office confirms the need; whisper \u201cgrace in which we stand.\u201d",
        prayer:
          "Lord, you justify; you grant peace and access by Christ.\nI treat suffering like proof you left.\nPour love through the Spirit where I complain.\nLet hope disappoint my cynicism, not you.\nI stand in grace tonight or I stand nowhere. Amen.",
        journalPrompt:
          "Where did I see God\u2019s love poured through the Spirit amid difficulty\u2014in myself, my family, or a stranger today?\n\nWhere did I refuse to boast in hope or hide my cross\u2014and how do I bring that honestly before God tonight?",
      },
      "05-04": {
        scripturePrimaryRef: "Ephesians 2:4-6",
        scripturePrimaryText:
          "But God, who is rich in mercy, out of the great love with which he loved us even when we were dead through our trespasses, made us alive together with Christ—by grace you have been saved— and raised us up with him and seated us with him in the heavenly places in Christ Jesus.",
        reflection:
          "Mercy is not a soft word here; it is God\u2019s movement toward corpses\u2014you were dead, and he made you alive in Christ. Grace saves; your resume does not lift you to the heavenly places. If you still negotiate worth with God through performance, you have not felt the weight of \u201cdead through trespasses.\u201d",
        fatherNote:
          "Apologize to one family member for a harsh word this week without adding excuses, and tell them God\u2019s mercy reached you first. Pray Ephesians 2:5 slowly while washing dishes together in silence afterward.",
        challengeType: "prayer",
        challenge:
          "Kneel ten minutes before the tabernacle or a crucifix and surrender one achievement you use as leverage with God.",
        leastOfThese:
          "Drive an unemployed neighbor to one interview; play Ephesians 2:4 on audio in the car whether they comment or not.",
        prayer:
          "Father rich in mercy, you loved me dead in trespass.\nI still negotiate worth by performance.\nRaise what is lifeless in my marriage tonight.\nSeat my imagination in Christ\u2019s heaven, not my scorecard.\nI receive grace or I receive nothing. Amen.",
        journalPrompt:
          "Where did mercy make me alive together with Christ\u2014in myself, my family, or a stranger today?\n\nWhere did I cling to dead works or pride\u2014and how do I bring that honestly before God tonight?",
      },
      "05-05": {
        scripturePrimaryRef: "Galatians 2:19-20",
        scripturePrimaryText:
          "For through the law I died to the law, so that I might live to God. I have been crucified with Christ; and it is no longer I who live, but it is Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.",
        reflection:
          "Paul\u2019s ego is crucified; the life on display is Christ\u2019s, animated by faith in the Son who loved and gave himself. That is the only \u201cbalance\u201d worth modeling: dying to self-importance so Christ can live visibly. If your children chiefly learn swagger and self-justification from you, Galatians 2:20 is still theory.",
        fatherNote:
          "Cancel one commitment this month that exists only to polish your image, and tell your family why Christ, not credit, now owns your calendar. End the night reading Galatians 2:20 with them and ask what \u201cChrist lives in me\u201d should change about tomorrow morning.",
        challengeType: "conversation",
        challenge:
          "Write Galatians 2:20 on your bathroom mirror and read it before speaking whenever you are about to defend yourself in anger.",
        leastOfThese:
          "Anonymously pay a young father\u2019s utility bill through your parish; attach a note with only Galatians 2:20 underlined.",
        prayer:
          "Jesus, I have been crucified with you; let it be true in traffic and taxes.\nI still live by swagger and fear.\nLive in me before my children\u2019s eyes.\nFaith in you is my only pulse.\nI renounce proving tonight. Amen.",
        journalPrompt:
          "Where did Christ\u2019s life show through my weakness\u2014in myself, my family, or a stranger today?\n\nWhere did \u201cI who live\u201d steal credit from him\u2014and how do I bring that honestly before God tonight?",
      },
      "05-06": {
        scripturePrimaryRef: "2 Corinthians 5:17",
        scripturePrimaryText:
          "So if anyone is in Christ, there is a new creation: everything old has passed away; see, everything has become new!",
        reflection:
          "New creation is not a fresh hobby; it is eschatological reality breaking into baptized life. The old\u2014bitterness, lust, cowardice\u2014really passed away in Christ; what remains is unbelief dressed as realism. If your vocabulary about your wife or your past is still entirely \u201cunchangeable,\u201d you deny the apostolic \u201csee!\u201d",
        fatherNote:
          "Name one old pattern you will stop rehearsing at dinner (sarcasm, catastrophizing, silent treatment) and ask your family to hold you accountable with charity. Close with 2 Corinthians 5:17 and a hug that does not rush away.",
        challengeType: "service",
        challenge:
          "Reconcile one cold relationship with a brief phone call that begins \u201cI need forgiveness\u201d before any explanation.",
        leastOfThese:
          "Buy new shoes for a child in a shelter; write \u201cnew creation\u201d inside the box lid in pencil.",
        prayer:
          "Lord, in Christ I am new creation; shame lies when it says otherwise.\nI rehearse old stories like liturgy.\nMake my tongue match your verdict.\nLet my children hear newness at bedtime.\nI trust your \u201csee\u201d over my mood. Amen.",
        journalPrompt:
          "Where did I see new creation breaking through\u2014in myself, my family, or a stranger today?\n\nWhere did I cling to \u201ceverything old\u201d\u2014and how do I bring that honestly before God tonight?",
      },
      "05-07": {
        scripturePrimaryRef: "1 John 4:9-11",
        scripturePrimaryText:
          "God's love was revealed among us in this way: God sent his only Son into the world so that we might live through him. In this is love, not that we loved God but that he loved us and sent his Son to be the atoning sacrifice for our sins. Beloved, since God loved us so much, we also ought to love one another.",
        reflection:
          "Love is defined by the sending of the Son\u2014not by our prior devotion. Atonement is the shape of divine charity; our response is commanded, not optional sentiment. If your household hears more about who annoys you than about who Christ reconciled, you are narrating the wrong story.",
        fatherNote:
          "Before bed, ask each child who was hardest to love today and pray for that person by name without editorializing. Tell your spouse one way you saw God\u2019s love made concrete in them this week, however small.",
        challengeType: "sacrifice",
        challenge:
          "Fast from criticizing anyone not present for twenty-four hours; each slip becomes one push-up and one Hail Mary.",
        leastOfThese:
          "Cook a meal for a family in grief and leave 1 John 4:10 written on the foil, not your name.",
        prayer:
          "Father, you loved us first; you sent your Son while we were still enemies.\nI tally others\u2019 faults like a clerk.\nTeach my house the grammar of atonement.\nLet love of you spill to love of neighbor.\nI love because you loved\u2014or I do not love. Amen.",
        journalPrompt:
          "Where did God\u2019s love in Christ confront me today\u2014in myself, my family, or a stranger?\n\nWhere did I withhold love until others deserved it\u2014and how do I bring that honestly before God tonight?",
      },
      "05-08": {
        scripturePrimaryRef: "John 10:10",
        scripturePrimaryText:
          "The thief comes only to steal and kill and destroy. I came that they may have life, and have it abundantly.",
        reflection:
          "Christ contrasts two missions: the thief\u2019s narrowing violence and his own gift of abundant life\u2014fullness, not mere survival. Abundance is not luxury; it is the overflow of union with him. If your days feel only like managing decline, ask whether you are listening to the thief\u2019s whisper or the Shepherd\u2019s voice.",
        fatherNote:
          "At dinner, ask which voices steal joy in your home (screens, gossip, anxiety) and one concrete way you will guard Sunday rest this week. Read John 10:10 and let the youngest child pray first.",
        challengeType: "study",
        challenge:
          "Remove one app that trains comparison or rage from your phone tonight and tell a friend you did it for abundant life in Christ.",
        leastOfThese:
          "Sponsor a refugee family\u2019s English class materials; text the coordinator \u201cJohn 10:10 for your volunteers.\u201d",
        prayer:
          "Good Shepherd, the thief still steals hours and names.\nI confuse abundance with adrenaline.\nSpeak life until my schedule sounds like discipleship.\nGuard my children\u2019s ears from destructive voices.\nI want your abundance, not survival. Amen.",
        journalPrompt:
          "Where did Christ\u2019s abundant life appear\u2014in myself, my family, or a stranger today?\n\nWhere did I cooperate with what steals and destroys\u2014and how do I bring that honestly before God tonight?",
      },
      "05-09": {
        scripturePrimaryRef: "Zechariah 2:10",
        scripturePrimaryText:
          "Sing and rejoice, O daughter Zion! For lo, I will come and dwell in your midst, says the Lord.",
        reflection:
          "The Lord does not merely visit Zion; he promises to dwell in her midst—marriage language, presence that sanctifies the ordinary street. Mary’s May is the human soil where that indwelling becomes flesh; your home is meant to be a little Zion, not a bunker against holiness. The idol of distraction sells you a life without room for God to “come and dwell”; this verse is a trumpet call to clear space.",
        fatherNote:
          "Sing one verse of a Marian hymn or the Magnificat with your family tonight, however off-key, and tell your children that God’s plan was always to move in—not to watch from a distance.",
        challengeType: "prayer",
        challenge:
          "Clear every device from the dinner table for one meal, read Zechariah 2:10 twice, and ask each child where they need to feel God dwelling nearer.",
        leastOfThese:
          "Offer to host a single parent and kids for dinner this month with no speech—only food, prayer, and Zechariah’s joy on your lips afterward.",
        prayer:
          "Lord, you command Zion to sing because you are moving in.\nI fill rooms with noise so I need not hear you knock.\nDwell in my marriage and my children’s chaos.\nMake May a month of presence, not performance.\nI rejoice because you choose the lowly place.\n\nAmen",
        journalPrompt:
          "Where did I make room for Christ to dwell in my home today—or block him with busyness?\n\nWhat fear keeps me from singing with Zion in front of my family?",
      },
      "05-10": {
        scripturePrimaryRef: "Psalm 23:1-6",
        scripturePrimaryText:
          "The Lord is my shepherd, I shall not want. He makes me lie down in green pastures; he leads me beside still waters; he restores my soul. He leads me in right paths for his name's sake. Even though I walk through the darkest valley, I fear no evil; for you are with me; your rod and your staff— they comfort me. You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows. Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord my whole life long.",
        reflection:
          "The Shepherd does not promise the absence of valleys; he promises presence, guidance, and a table even amid enemies. Rest is commanded (\u201cmake me lie down\u201d); souls are restored, not merely managed. If your family never sees you cease striving, they will confuse the Lord with your anxiety.",
        fatherNote:
          "Schedule one hour this week where phones stay in a drawer and you walk or sit with your kids in silence or simple talk. Read Psalm 23 once together and ask which phrase each person needs most.",
        challengeType: "conversation",
        challenge:
          "Lie down ten minutes on the living-room floor after work without multitasking while your children climb on you; pray Psalm 23:2 in your head.",
        leastOfThese:
          "Serve a sit-down dinner at a soup kitchen and pray Psalm 23:5 quietly over the steam table before guests arrive.",
        prayer:
          "Lord, my shepherd, you restore what I franticly patch.\nI treat rest like laziness and trust like weakness.\nLead me beside still water before I bark at my family.\nPrepare your table in the valley I fear.\nI shall want nothing else. Amen.",
        journalPrompt:
          "Where did Christ the Shepherd lead or restore me\u2014in myself, my family, or a stranger today?\n\nWhere did I refuse to lie down, drink, or trust\u2014and how do I bring that honestly before God tonight?",
      },
      "05-11": {
        scripturePrimaryRef: "John 16:7-11",
        scripturePrimaryText:
          "Nevertheless I tell you the truth: it is to your advantage that I go away, for if I do not go away, the Advocate will not come to you; but if I go, I will send him to you. And when he comes, he will prove the world wrong about sin and righteousness and judgment: about sin, because they do not believe in me; about righteousness, because I am going to the Father and you will see me no longer; about judgment, because the ruler of this world has been condemned.",
        reflection:
          "Christ\u2019s departure is the condition for the Spirit\u2019s coming\u2014advantage, not abandonment. The Spirit convicts the world on belief, righteousness, and judgment; comfort without truth is not his mission. If you shield your children from every hard word about sin, you are not imitating the Advocate.",
        fatherNote:
          "Explain one news story tonight with calm moral clarity: name evil, name Christ\u2019s judgment on the ruler of this world, and end in hope. Ask your teens where they feel the world is wrong about righteousness and listen without a speech.",
        challengeType: "service",
        challenge:
          "Go to confession this week if able; use John 16:8 as your examen line\u2014where did unbelief masquerade as sophistication?",
        leastOfThese:
          "Pay for a young man\u2019s retreat registration through your parish; write \u201cAdvocate\u201d on the check memo.",
        prayer:
          "Jesus, you said your going was advantage; I still call it loss.\nSend the Spirit to convict my comfortable lies.\nProve the world wrong about sin and righteousness.\nLet my children hear truth in love.\nCondemnation belongs to the defeated prince, not my family. Amen.",
        journalPrompt:
          "Where did the Spirit\u2019s conviction lead toward truth\u2014in myself, my family, or a stranger today?\n\nWhere did I silence or soften the Advocate\u2019s work\u2014and how do I bring that honestly before God tonight?",
      },
      "05-12": {
        scripturePrimaryRef: "Acts 2:17-18",
        scripturePrimaryText:
          "\"In the last days it will be, God declares, that I will pour out my Spirit upon all flesh, and your sons and your daughters shall prophesy, and your young men shall see visions, and your old men shall dream dreams. Even upon my slaves, both men and women, in those days I will pour out my Spirit; and they shall prophesy.\"",
        reflection:
          "Pentecost fulfills Joel\u2019s promise: the Spirit spills across age, sex, and status\u2014prophetic speech is for the whole Body. \u201cAll flesh\u201d means your daughter\u2019s witness matters as much as yours. If only Dad\u2019s voice counts in spiritual matters, you are still living pre-Pentecost hierarchy.",
        fatherNote:
          "Let your youngest read Acts 2:17-18 at dinner while everyone stays silent; ask your daughter or son what God might be asking them to speak up about at school. Affirm their answer before offering correction.",
        challengeType: "sacrifice",
        challenge:
          "Stay quiet through one full family conversation and only ask questions; note afterward what the Spirit surfaced without your control.",
        leastOfThese:
          "Sponsor a women\u2019s or men\u2019s Bible study scholarship at your parish; pray Acts 2:17 for the group leader by name.",
        prayer:
          "Holy Spirit, you pour on all flesh; I still hoard the microphone.\nLet my sons and daughters prophesy in purity.\nAwaken dreams in elders I dismissed.\nFill the lowly places of my parish.\nI step back so your voice spreads. Amen.",
        journalPrompt:
          "Where did I see the Spirit speak through unexpected voices\u2014in myself, my family, or a stranger today?\n\nWhere did I silence prophecy out of pride or fear\u2014and how do I bring that honestly before God tonight?",
      },
      "05-13": {
        scripturePrimaryRef: "Ezekiel 36:26-27",
        scripturePrimaryText:
          "A new heart I will give you, and a new spirit I will put within you; and I will remove from your body the heart of stone and give you a heart of flesh. I will put my spirit within you, and make you follow my statutes and be careful to observe my ordinances.",
        reflection:
          "God promises invasive mercy: heart transplant, Spirit infusion, obedience that follows. Stone hearts do not self-improve; they are replaced. If you keep relying on mood and grit alone, you treat the new covenant like a pep talk.",
        fatherNote:
          "Name one stony habit you will bring to confession this week without minimizing it in front of your children. Afterward, pray Ezekiel 36:26 together and let them see tears if God gives them.",
        challengeType: "study",
        challenge:
          "Fast from sarcasm at home for forty-eight hours; each slip requires immediate \u201cI am sorry\u201d and one decade of the rosary for humility.",
        leastOfThese:
          "Volunteer for a prison Bible study or write one inmate using Ezekiel 36:26 as the opening line.",
        prayer:
          "Lord, cut out stone; plant flesh; put your Spirit within me.\nI treat holiness like willpower.\nMake me walk statutes I once mocked.\nLet my kids see repentance, not performance.\nI need surgery, not tips. Amen.",
        journalPrompt:
          "Where did a soft heart appear\u2014in myself, my family, or a stranger today?\n\nWhere did stone still rule my reactions\u2014and how do I bring that honestly before God tonight?",
      },
      "05-14": {
        scripturePrimaryRef: "Acts 1:8-11",
        scripturePrimaryText:
          "But you will receive power when the Holy Spirit has come upon you; and you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the ends of the earth. When he had said this, as they were watching, he was lifted up, and a cloud took him out of their sight. While he was going and they were gazing up toward heaven, suddenly two men in white robes stood by them. They said, \"Men of Galilee, why do you stand looking up toward heaven? This Jesus, who has been taken up from you into heaven, will come in the same way as you saw him go into heaven.\"",
        reflection:
          "Power for witness precedes the Ascension scene\u2014the Spirit will drive the mission outward, not upward staring. The angels redirect nostalgia toward the same Jesus who will return in glory. If your discipleship is mostly longing for a golden past, you are the Galilee gazer Christ corrects.",
        fatherNote:
          "Draw three circles on paper\u2014home, parish, world\u2014and write one name in each you will pray for nightly this week. Read Acts 1:11 with your wife and commit to one outward step per circle before Pentecost.",
        challengeType: "prayer",
        challenge:
          "Spend thirty minutes before the Blessed Sacrament or a quiet corner praying Acts 1:8 line by line for each family member\u2019s vocation.",
        leastOfThese:
          "Buy bus tickets for a refugee family through Catholic Charities; write \u201cends of the earth\u201d on the receipt you give your pastor.",
        prayer:
          "Lord Jesus, you ascended in glory and send power for witnesses.\nI stare at old grievances instead of Samaria.\nHoly Spirit, fall so I speak truth in love.\nKeep my eyes on your return, not my hurt.\nI move outward because you reign. Amen.",
        journalPrompt:
          "Where did resurrection witness spill past my comfort zone\u2014in myself, my family, or a stranger today?\n\nWhere did I stay \u201clooking upward\u201d in fear or nostalgia\u2014and how do I bring that honestly before God tonight?",
      },
      "05-15": {
        scripturePrimaryRef: "John 16:12-15",
        scripturePrimaryText:
          "I still have many things to say to you, but you cannot bear them now. When the Spirit of truth comes, he will guide you into all the truth; for he will not speak on his own, but will speak whatever he hears, and he will declare to you the things that are to come. He will glorify me, because he will take what is mine and declare it to you. All that the Father has is mine. For this reason I said that he will take what is mine and declare it to you.",
        reflection:
          "Christ honors human limits\u2014some truth waits until the Spirit can carry it. The Spirit never freelances; he speaks what he hears, glorifying the Son and drawing from the Father\u2019s fullness. If you dump every anxiety on your children at once \u201cfor honesty,\u201d you are not imitating Christ\u2019s pedagogy.",
        fatherNote:
          "Ask each child what truth feels too heavy right now and promise to revisit it after Pentecost with prayer first. Tell your spouse one area where you need the Spirit\u2019s guidance before your own hot take.",
        challengeType: "conversation",
        challenge:
          "Read one full chapter of the Catechism or one papal encyclical paragraph slowly tonight instead of scrolling; note one sentence the Spirit highlights.",
        leastOfThese:
          "Buy a Bible or YouCat for a graduate with John 16:13 written on the title page.",
        prayer:
          "Spirit of truth, guide me into all truth, not my echo chamber.\nI speak before I listen to you.\nGlorify Jesus in my parenting words.\nDeclare the Father\u2019s gifts at the right pace.\nI wait on you before I lecture. Amen.",
        journalPrompt:
          "Where did the Spirit lead me into truth gently\u2014in myself, my family, or a stranger today?\n\nWhere did I speak beyond what others could bear\u2014and how do I bring that honestly before God tonight?",
      },
      "05-16": {
        scripturePrimaryRef: "Romans 5:5",
        scripturePrimaryText:
          "And hope does not disappoint us, because God's love has been poured into our hearts through the Holy Spirit that has been given to us.",
        reflection:
          "Hope is secure because love is poured\u2014not dripped\u2014by the Spirit already given in baptism and confirmation. Disappointment hunts idols; it cannot undo God\u2019s charity rooted in Christ. If your wife hears only your stress forecasts, she rarely hears this poured love.",
        fatherNote:
          "Hold your spouse\u2019s hands tonight, say one hope you carry for your marriage that is not tied to circumstances, and pray Romans 5:5 slowly. Ask your children where they saw love today without coaching their answer.",
        challengeType: "service",
        challenge:
          "Write \u201cpoured, not earned\u201d on your debit card sleeve and read it before every purchase tomorrow.",
        leastOfThese:
          "Fill a gas tank for a single mother after Mass; say only \u201cGod\u2019s love is poured\u2014pass it on.\u201d",
        prayer:
          "Holy Spirit, you poured the Father\u2019s love into my heart.\nI act like hope waits on my performance.\nDisappoint my cynicism, not your promise.\nLet my wife hear charity in my voice.\nI hope because you stay. Amen.",
        journalPrompt:
          "Where did poured love change my patience\u2014in myself, my family, or a stranger today?\n\nWhere did I let disappointment in things eclipse hope in God\u2014and how do I bring that honestly before God tonight?",
      },
      "05-17": {
        scripturePrimaryRef: "Joel 2:28-29",
        scripturePrimaryText:
          "Then afterward I will pour out my spirit on all flesh; your sons and your daughters shall prophesy, your old men shall dream dreams, and your young men shall see visions. Even on the male and female slaves, in those days, I will pour out my spirit.",
        reflection:
          "Joel\u2019s promise is democratic chaos from heaven\u2014sons, daughters, elders, youths, slave and free drenched alike. The Spirit does not wait for your permission slip; he claims every station for speech that glorifies God. If your leadership treats family faith as Dad\u2019s solo performance, you are still building a booth for one generation.",
        fatherNote:
          "Record a grandparent or godparent telling how God found them; play it at dinner without commentary. Ask your children one dream or fear they have never voiced about faith and promise to pray Joel 2:28 over it this week.",
        challengeType: "sacrifice",
        challenge:
          "Silence your own spiritual monologue at dinner once; let the youngest pray the blessing and the oldest close.",
        leastOfThese:
          "Sponsor a youth retreat seat for someone who cannot pay; write only \u201cJoel 2:28\u2014you are not too young\u201d on the envelope.",
        prayer:
          "Lord, you pour spirit on flesh I would exclude.\nI confuse leadership with monopoly.\nLet my sons and daughters prophesy in purity.\nAwaken dreams in elders I patronize.\nI step aside so your flood spreads. Amen.",
        journalPrompt:
          "Where did I see the Spirit honor young or humble voices\u2014in myself, my family, or a stranger today?\n\nWhere did I hoard spiritual speech out of pride\u2014and how do I bring that honestly before God tonight?",
      },
      "05-18": {
        scripturePrimaryRef: "1 Corinthians 12:4-7",
        scripturePrimaryText:
          "Now there are varieties of gifts, but the same Spirit; and there are varieties of services, but the same Lord; and there are varieties of activities, but it is the same God who activates all of them in everyone. To each is given the manifestation of the Spirit for the common good.",
        reflection:
          "Diversity of gift serves one triune God; envy is a theological error, not a personality quirk. Every manifestation exists for the common good\u2014if your parish competitiveness follows you home, you are stealing the Spirit\u2019s spotlight. Your wife\u2019s gifts are not a threat to headship; they are the Body\u2019s wealth.",
        fatherNote:
          "Publicly thank your spouse for one spiritual gift you undervalued and ask your kids which gift they saw someone use at school for Jesus. End by praying 1 Corinthians 12:4-7 together with hands joined.",
        challengeType: "study",
        challenge:
          "Serve tonight in a role beneath your skill\u2014stack chairs, scrub a pot\u2014and thank God for hidden gifts in others.",
        leastOfThese:
          "Fund special-needs ministry supplies at your parish; pray 1 Corinthians 12:7 for every volunteer by first name if you know them.",
        prayer:
          "Holy Spirit, same God activates gifts I envy.\nI treat church like a ladder.\nManifest yourself for common good in my marriage.\nLet my children see unity, not rivalry.\nI praise you in another\u2019s success tonight. Amen.",
        journalPrompt:
          "Where did diverse gifts build the Body\u2014in myself, my family, or a stranger today?\n\nWhere did jealousy or comparison choke gratitude\u2014and how do I bring that honestly before God tonight?",
      },
      "05-19": {
        scripturePrimaryRef: "Galatians 5:22-25",
        scripturePrimaryText:
          "By contrast, the fruit of the Spirit is love, joy, peace, patience, kindness, generosity, faithfulness, gentleness, and self-control. There is no law against such things. And those who belong to Christ Jesus have crucified the flesh with its passions and desires. If we live by the Spirit, let us also be guided by the Spirit.",
        reflection:
          "Fruit grows; it is not manufactured by grimacing effort\u2014yet it presupposes crucified flesh with its hungers. The list is a portrait of Christ; your home smells like either that orchard or the rot of self-will. If you demand the Spirit\u2019s fruit while feeding the flesh on screens and rage, you contradict Paul\u2019s grammar.",
        fatherNote:
          "Pick one fruit your family lacks this week and one practical support (sleep, apology, service) tied to it. Read Galatians 5:25 before lights out and let each child name where they saw kindness today.",
        challengeType: "prayer",
        challenge:
          "Forty-eight hours without sarcasm at home; each slip requires kneeling one minute and whispering \u201cguided by the Spirit.\u201d",
        leastOfThese:
          "Deliver fruit baskets to teachers with Galatians 5:22 taped under the handle; include no bragging note.",
        prayer:
          "Spirit, grow fruit I cannot fake; crucify what I feed after midnight.\nLet joy and patience season my voice at homework.\nGuide my steps when passions flare.\nLet my children taste Christ, not my nerves.\nI live by you or I live by noise. Amen.",
        journalPrompt:
          "Where did the Spirit\u2019s fruit ripen in ordinary moments\u2014in myself, my family, or a stranger today?\n\nWhere did I feed the flesh while demanding peace\u2014and how do I bring that honestly before God tonight?",
      },
      "05-20": {
        scripturePrimaryRef: "John 7:37-39",
        scripturePrimaryText:
          "On the last day of the festival, the great day, while Jesus was standing there, he cried out, \"Let anyone who is thirsty come to me, and let the one who believes in me drink. As the scripture has said, 'Out of the believer's heart shall flow rivers of living water.'\" Now he said this about the Spirit, which believers in him were to receive; for as yet there was no Spirit, because Jesus was not yet glorified.",
        reflection:
          "Christ bids the thirsty come and drink\u2014rivers will flow from within, not mere relief for individuals. The Spirit\u2019s gift waits on Jesus\u2019 glorification; you live on the far side of that pouring. If your children only see you hydrate with distraction, they will confuse thirst with boredom.",
        fatherNote:
          "When restlessness hits tonight, gather the family, pray \u201cJesus, we thirst\u201d aloud once, and sit sixty seconds in silence before screens return. Tell your wife one thirst in your marriage you bring to Christ first this week, not to a podcast.",
        challengeType: "conversation",
        challenge:
          "Fast from alcohol or excess caffeine tomorrow; each craving becomes one slow sip of water offered for the Spirit\u2019s rivers.",
        leastOfThese:
          "Stock a cooler with water for a sports team or homeless outreach; pencil John 7:37 inside the lid.",
        prayer:
          "Jesus, I thirst; you promise rivers from within.\nI numb desire with noise.\nSend the Spirit to flood my patience.\nLet my home become a fountain, not a drain.\nI drink from you or I stay parched. Amen.",
        journalPrompt:
          "Where did living water reach someone through me\u2014in myself, my family, or a stranger today?\n\nWhere did I numb thirst instead of bringing it to Christ\u2014and how do I bring that honestly before God tonight?",
      },
      "05-21": {
        scripturePrimaryRef: "Isaiah 11:1-3",
        scripturePrimaryText:
          "A shoot shall come out from the stump of Jesse, and a branch shall grow out of his roots. The spirit of the LORD shall rest on him, the spirit of wisdom and understanding, the spirit of counsel and might, the spirit of knowledge and the fear of the LORD. His delight shall be in the fear of the LORD.",
        reflection:
          "From a dead-looking stump comes the Branch\u2014the Messiah bearing the sevenfold Spirit without measure. Wisdom and fear of the Lord kiss in his delight; cheap courage and cleverness cannot imitate him. If you lead your family without trembling reverence, you are not modeling the shoot from Jesse.",
        fatherNote:
          "Walk one lap around your block praying Isaiah 11:2 by name over each child\u2019s need (wisdom for the studious, might for the timid). Tell your wife which gift of the Spirit you beg for your leadership this month.",
        challengeType: "service",
        challenge:
          "Apologize to one person you bulldozed with \u201cfacts\u201d and ask what counsel they actually needed.",
        leastOfThese:
          "Buy a sturdy Bible for a teen in confirmation prep with Isaiah 11:2 underlined on a sticky note inside.",
        prayer:
          "Lord, from Jesse\u2019s stump you sprang with Spirit without measure.\nI lead by panic and reputation.\nRest wisdom and fear of you on my fatherhood.\nLet my delight be holy fear, not control.\nI branch from you or I wither. Amen.",
        journalPrompt:
          "Where did Christ\u2019s Spirit of wisdom and understanding guide me\u2014in myself, my family, or a stranger today?\n\nWhere did I rely on my own branch instead of his\u2014and how do I bring that honestly before God tonight?",
      },
      "05-22": {
        scripturePrimaryRef: "Acts 4:29-31",
        scripturePrimaryText:
          "And now, Lord, look at their threats, and grant to your servants to speak your word with all boldness, while you stretch out your hand to heal, and signs and wonders are performed through the name of your holy servant Jesus. When they had prayed, the place in which they were gathered together was shaken; and they were all filled with the Holy Spirit and spoke the word of God with boldness.",
        reflection:
          "The Church\u2019s prayer under threat asks first for bold speech, then for God\u2019s hand in healing\u2014Jesus\u2019 name is the engine. The house shakes; they speak\u2014not timid whispers. If you treat faith as private comfort while neighbors never hear Christ from your lips, you are not praying this prayer.",
        fatherNote:
          "Tonight name one threat\u2014job, culture, family fracture\u2014and pray Acts 4:29 verbatim with your wife. Ask your children where they need courage to speak truth kindly tomorrow.",
        challengeType: "sacrifice",
        challenge:
          "Share one sentence about Jesus with someone outside your home before sunset; accept awkward silence without rescuing the moment with a joke.",
        leastOfThese:
          "Pay for a parish healing Mass leaflet run or streaming gear; write \u201cActs 4:30\u201d on the donation memo.",
        prayer:
          "Lord, threats surround your servants still.\nGrant bold speech; stretch out your hand to heal.\nLet my house shake with prayer, not fear.\nLet my children hear courage, not cynicism.\nI speak Jesus\u2019 name or I stay silent. Amen.",
        journalPrompt:
          "Where did bold speech and healing meet\u2014in myself, my family, or a stranger today?\n\nWhere did I mute the Gospel to stay comfortable\u2014and how do I bring that honestly before God tonight?",
      },
      "05-23": {
        scripturePrimaryRef: "John 14:16-17",
        scripturePrimaryText:
          "And I will ask the Father, and he will give you another Advocate, to be with you forever. This is the Spirit of truth, whom the world cannot receive, because it neither sees him nor knows him. You know him, because he abides with you, and he will be in you.",
        reflection:
          "Another Advocate means Jesus\u2019 presence continues under a new mode\u2014forever, not sporadic. The world misses the Spirit because it seeks only what it can dominate; you know him because he dwells. If your schedule has no room for quiet where he speaks, you are living like the world.",
        fatherNote:
          "Before bed, bless each child with the Sign of the Cross saying \u201cthe Spirit abides with you\u201d slowly. Tell your spouse one lie the world told you today and ask the Spirit of truth to answer it before sleep.",
        challengeType: "study",
        challenge:
          "Delete thirty minutes of evening noise; sit in silence asking the Advocate one question and write the first line you hear in prayer.",
        leastOfThese:
          "Buy a parish\u2019s RCIA materials or sponsor a candidate; write \u201cAdvocate forever\u201d on the check memo.",
        prayer:
          "Jesus, you promised another Advocate; I still act orphaned.\nSpirit of truth, abide when I reach for escape.\nSpeak in my marriage what pride muffles.\nLet my children know you dwell, not visit.\nI receive you or I live blind. Amen.",
        journalPrompt:
          "Where did the Spirit of truth guide me\u2014in myself, my family, or a stranger today?\n\nWhere did I prefer the world\u2019s noise to his quiet voice\u2014and how do I bring that honestly before God tonight?",
      },
      "05-24": {
        scripturePrimaryRef: "Acts 2:1-4",
        scripturePrimaryText:
          "When the day of Pentecost had come, they were all together in one place. And suddenly from heaven there came a sound like the rush of a violent wind, and it filled the entire house where they were sitting. Divided tongues, as of fire, appeared among them, and a tongue rested on each of them. All of them were filled with the Holy Spirit and began to speak in other languages, as the Spirit gave them ability.",
        reflection:
          "Pentecost begins with unity\u2014then God\u2019s arrival is public: wind, fire, filling, speech the nations can hear. The Spirit equips the whole Body, not private mystics hoarding warmth. If your domestic church is fractured by phones and sarcasm, ask whether you are gathered for prayer or merely occupying furniture.",
        fatherNote:
          "Wear red to Mass as a family; afterward read Acts 2:1-4 at home and let each person name one gift of the Spirit they will beg for aloud. Commit to one encouraging sentence in each child\u2019s \u201clove language\u201d daily through the octave.",
        challengeType: "prayer",
        challenge:
          "Pray the Veni Creator or Sequence before supper; kneel together even if awkward\u2014Pentecost is not tidy.",
        leastOfThese:
          "Bring water or juice to your parish Pentecost Mass or RCIA gathering; tape inside the box: \u201cThe Spirit still gives speech\u2014welcome home.\u201d",
        prayer:
          "Come, Holy Spirit, wind and fire of the Father\u2019s love.\nGather what I scattered by sin and hurry.\nFill this house until speech unites, not wounds.\nSend us to the world\u2019s ends starting at our table.\nI want Pentecost, not a polite breeze. Amen.",
        journalPrompt:
          "Where did the Spirit\u2019s fire unite speech and love\u2014in myself, my family, or a stranger today?\n\nWhere did I resist gathering, listening, or speaking boldly\u2014and how do I bring that honestly before God tonight?",
      },
      "05-31": {
        scripture:
          "Prov 8:22–31; Ps 8; Rom 5:1–5; Jn 16:12–15 — Summary: Trinity Sunday praises one God in three Persons—communion of love at the heart of reality.",
        reflection:
          "The Trinity is not a puzzle to solve but a life to enter: communion, humility, mutual gift. Let the Father’s voice, the Son’s flesh, and the Spirit’s breath name you beloved.",
        prayer:
          "Glory to the Father, and to the Son, and to the Holy Spirit. Draw me into your divine communion. Amen.",
        challenge: "Make the Sign of the Cross slowly before meals, remembering baptism into Trinity’s life.",
        journalPrompt: "How can I reflect the Trinity’s self-giving love in my closest relationships this week?",
      },
      "06-04": {
        scripture:
          "Gen 14:18–20; Ps 110; 1 Cor 11:23–26; Lk 9:11b–17 — Summary: Corpus Christi celebrates Christ truly present in the Eucharist, food for pilgrims.",
        reflection:
          "The Eucharist is not a symbol of distance but nearness: Christ gives himself. Plan your week so Sunday Mass—or a weekday Mass—is treated as the center, not an add-on.",
        prayer:
          "Lord Jesus, thank you for feeding me with your Body and Blood. Increase my hunger for you and my love for the poor. Amen.",
        challenge: "If possible, attend Mass and offer the Eucharist for someone who has wandered from the Church.",
        journalPrompt: "What practical change would show that the Eucharist is truly my “source and summit”?",
      },
      "06-19": {
        scripture:
          "Ez 34:11–16; Ps 23; Rom 5:5b–11; Lk 15:3–7 — Summary: Christ’s heart reveals God’s mercy for sinners; the Good Shepherd seeks the lost.",
        reflection:
          "The Heart of Jesus is a refuge, not a rumor. Bring him your shame without rehearsing it as your identity—let mercy speak louder than memory.",
        prayer:
          "Jesus, meek and humble of heart,\nmake my heart like yours—not soft in excuse, but strong in mercy.\nI hand you the memories I rehearse like identity.\nSpeak your love until I can hear it aloud.\nJesus, I trust in you.\n\nAmen",
        challenge: "Pray the Chaplet of Divine Mercy or one decade of the rosary for someone trapped in addiction or despair.",
        challengeType: "prayer",
        fatherNote:
          "Your children will learn what to do with guilt from watching you. If you only perform strength, they will hide their failures. Show them a man who runs to mercy.",
        leastOfThese:
          "Send a brief message to someone you know is sober or clean one day at a time: I am proud of you. I pray for you. No reply required.",
        journalPrompt:
          "What would change if I believed Christ’s mercy is personal—not generic—for me today?\n\nWhere did I fall short as a father or husband today, and how do I bring that honestly before God before I sleep?",
      },
      "07-22": {
        scripture:
          "Song 3:1–4; Ps 63; Jn 20:1–18 — Summary: Mary Magdalene seeks the Lord at the tomb and becomes apostle to the apostles of the Resurrection.",
        reflection:
          "Mary Magdalene’s love outruns her confusion. When you do not understand God’s ways, stay near the tomb—and listen for your name spoken by the Gardener.",
        prayer:
          "Lord, you know my name. When I search in grief, meet me with your voice. Send me to announce your life. Amen.",
        challenge: "Reach out to one person who is spiritually weary with a simple message of encouragement.",
        journalPrompt: "Where am I tempted to leave the garden too soon instead of waiting for Christ to speak?",
      },
      "08-15": {
        scripture:
          "Rev 11:19a; 12:1–6a, 10ab; Ps 45; 1 Cor 15:20–26; Lk 1:39–56 — Summary: Mary’s Assumption signals the destiny of the redeemed; she sings God’s greatness.",
        reflection:
          "Mary’s glory is grace, not competition. Her destiny is a promise for the whole Body of Christ: God finishes what he begins in those who say yes.",
        prayer:
          "Mary, Mother of the living,\nyou carried glory in hidden years.\nPray for me as a husband and father:\nteach me to magnify the Lord, not myself,\nand to trust that God will finish what he began in my family.\n\nAmen",
        challenge: "Memorize one line of the Magnificat and pray it when anxiety rises.",
        challengeType: "prayer",
        fatherNote:
          "Mary’s yes was domestic before it was cosmic. Your vocation is the same soil: hidden yeses in kitchen and car that God can raise if you stop grasping credit.",
        leastOfThese:
          "Ask your wife which woman she knows is carrying a heavy load alone; send that woman flowers, a meal, or childcare from your family without fanfare.",
        journalPrompt:
          "How does Mary’s humility challenge the way I seek recognition or control?\n\nWhere did I fall short as a father or husband today, and how do I bring that honestly before God before I sleep?",
      },
      "09-14": {
        scripture:
          "Num 21:4–9; Ps 78; Phil 2:6–11; Jn 3:13–17 — Summary: The exaltation of the Cross reveals God’s healing through the very place of shame.",
        reflection:
          "The cross is not only pain endured but love displayed. Look at Christ lifted up—and let your wounds be named in his light, not hidden in the dark.",
        prayer:
          "We adore you, O Christ, and we bless you—because by your holy cross you have redeemed the world. Amen.",
        challenge: "Make a small sacrifice today and offer it for someone who is suffering physically or mentally.",
        journalPrompt: "What cross am I resisting that Christ might want to transform into a place of healing for others?",
      },
      "10-07": {
        scripture:
          "Acts 1:12–14; Ps 42–43; Eph 1:3–14; Lk 1:46–55 — Summary: Our Lady of the Rosary recalls victory through prayer; Mary’s song names God’s mercy to the humble.",
        reflection:
          "The rosary is not magical repetition but a school of contemplation—walking with Jesus through joy, sorrow, glory, and light. Pick it up again gently, without scrupulosity.",
        prayer:
          "Mary, Mother of fair love, lead me to Jesus. Through the mysteries of the rosary, form my heart after his. Amen.",
        challenge: "Pray one mystery of the rosary slowly, picturing the scene and listening for one word from the Lord.",
        journalPrompt: "Which mystery of Christ’s life do I most need to ponder this month—and why?",
      },
      "11-01": {
        scripture:
          "Rev 7:2–4, 9–14; Ps 24; 1 Jn 3:1–3; Mt 5:1–12 — Summary: The Beatitudes sketch the life of holiness; saints are sinners who kept returning to grace.",
        reflection:
          "Saints are neighbors, parents, and hidden servants—not only ancient heroes. Who makes Jesus believable in your life? Thank God for that witness today.",
        prayer:
          "Lord, thank you for the communion of saints. Make me faithful in hidden things and eager for heaven. Amen.",
        challenge: "Choose one beatitude and practice it in a concrete, unnoticed way before sunset.",
        journalPrompt: "Who is God inviting me to thank or encourage as a “saint” in my everyday path?",
      },
      "11-02": {
        scripture:
          "Wis 3:1–9; Ps 23; Rom 6:3–9; Jn 6:37–40 — Summary: The Church prays for the faithful departed; Christ promises resurrection to those who believe.",
        reflection:
          "Grief and hope belong together. Name the dead before God; trust that love is stronger than death. Light a candle of prayer for souls and for your own fear of loss.",
        prayer:
          "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.",
        challenge: "Visit a cemetery if you can, or pray the Eternal Rest prayer for three deceased loved ones.",
        journalPrompt: "What fear about death or loss do I need to entrust to the risen Christ today?",
      },
      "11-29": {
        scripture:
          "Jer 33:14–16; Ps 25; 1 Thes 3:12–4:2; Lk 21:25–28, 34–36 — Summary: Advent opens with vigilance: stand ready, for redemption draws near.",
        reflection:
          "Advent is training in holy longing. Slow the noise; widen the door. Christ is coming—first in humility, finally in glory—and he meets you in the present moment.",
        prayer:
          "Come, Lord Jesus.\nI fill my hunger with noise; you offer yourself.\nTeach me patience that does not punish my family,\nand purity of heart that begins with honest desire.\nPrepare in me a place you would actually want to dwell.\n\nAmen",
        challenge: "Silence non-essential notifications for one hour; spend ten minutes in Scripture or silent prayer.",
        challengeType: "sacrifice",
        fatherNote:
          "Advent fails if it is only your wife managing calendars while you scroll. Pick one evening this week to kill the noise first so they hear peace in your voice.",
        leastOfThese:
          "Buy gift cards for gas or groceries and give them to your parish secretary for a family they know is choosing between bills and Christmas.",
        journalPrompt:
          "What am I filling my hunger with that cannot satisfy compared to Christ?\n\nWhere did I fall short as a father or husband today, and how do I bring that honestly before God before I sleep?",
      },
      "12-08": {
        scripture:
          "Gen 3:9–15, 20; Ps 98; Eph 1:3–6, 11–12; Lk 1:26–38 — Summary: Mary, conceived without sin, is the new Eve; grace precedes her yes.",
        reflection:
          "Immaculate Conception celebrates God’s initiative. Grace comes first—even for Mary. Where are you striving as if love must be earned before it is given?",
        prayer:
          "O Mary, conceived without sin, pray for us who have recourse to thee. Draw me to your Son. Amen.",
        challenge: "Pray for purity of heart—in thought, speech, and online habits—through Mary’s intercession.",
        journalPrompt: "Where do I need to receive grace as gift rather than prove myself worthy first?",
      },
      "12-25": {
        scripture:
          "Is 52:7–10; Ps 98; Heb 1:1–6; Jn 1:1–18 — Summary: The Word becomes flesh and dwells among us; God’s glory is seen in humility.",
        reflection:
          "Christmas is God’s nearness: a child, a mother, straw, cold air. Whatever this day holds emotionally, Christ is born for the whole mixture—joy, ache, memory, hope.",
        prayer:
          "Lord Jesus, born for us this day,\ncome into whatever this morning actually is—\ngladness, grief, or both tangled together.\nBe born again in me where I am cold toward my family.\nBless every home that feels empty tonight.\n\nAmen",
        challenge: "Before gifts or meals, pray as a household—or alone—for those without shelter or family.",
        challengeType: "prayer",
        fatherNote:
          "Christmas is not a performance review for fathers. It is God entering mess. If you are brittle today, say so to God before you say anything sharp at the table.",
        leastOfThese:
          "Before the meal, put cash in an envelope for the first person who asks for help at your parish door this week—or give it to your pastor to place in a hand you will never see.",
        journalPrompt:
          "How does the poverty of the manger invite me to receive God’s love without performing for it?\n\nWhere did I fall short as a father or husband today, and how do I bring that honestly before God before I sleep?",
      },
      "05-25": {
        scripturePrimaryRef: "Isaiah 53:5",
        scripturePrimaryText:
          "But he was wounded for our transgressions, crushed for our iniquities; upon him was the punishment that made us whole, and by his bruises we are healed.",
        reflection:
          "Christ speaks in Isaiah 53:5\u2014\"But he was wounded for our transgressions, crushed for our iniquities; upon him was the punishment that made us whole, a\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Ordinary Faithfulness: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Isaiah 53:5 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Isaiah 53:5 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Isaiah 53:5 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Isaiah 53:5.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Isaiah 53:5 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "05-26": {
        scripturePrimaryRef: "Matthew 16:24",
        scripturePrimaryText:
          "Then Jesus told his disciples, \"If any want to become my followers, let them deny themselves and take up their cross and follow me.\"",
        reflection:
          "Christ speaks in Matthew 16:24\u2014\"Then Jesus told his disciples, \"If any want to become my followers, let them deny themselves and take up their cross and\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Ordinary Faithfulness: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 16:24 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Matthew 16:24 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 16:24 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 16:24.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 16:24 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "05-27": {
        scripturePrimaryRef: "Luke 9:23",
        scripturePrimaryText:
          "Then he said to them all, \"If any want to become my followers, let them deny themselves and take up their cross daily and follow me.\"",
        reflection:
          "Christ speaks in Luke 9:23\u2014\"Then he said to them all, \"If any want to become my followers, let them deny themselves and take up their cross daily an\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Ordinary Faithfulness: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 9:23 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Luke 9:23 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 9:23 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 9:23.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 9:23 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "05-28": {
        scripturePrimaryRef: "Philippians 2:8",
        scripturePrimaryText:
          "he humbled himself and became obedient to the point of death\u2014 even death on a cross.",
        reflection:
          "Christ speaks in Philippians 2:8\u2014\"he humbled himself and became obedient to the point of death\u2014 even death on a cross.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Ordinary Faithfulness: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Philippians 2:8 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Philippians 2:8 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Philippians 2:8 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Philippians 2:8.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Philippians 2:8 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "05-29": {
        scripturePrimaryRef: "Romans 12:12",
        scripturePrimaryText:
          "Rejoice in hope, be patient in suffering, persevere in prayer.",
        reflection:
          "Christ speaks in Romans 12:12\u2014\"Rejoice in hope, be patient in suffering, persevere in prayer.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Ordinary Faithfulness: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 12:12 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Romans 12:12 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 12:12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 12:12.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 12:12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "05-30": {
        scripturePrimaryRef: "1 Corinthians 16:13",
        scripturePrimaryText:
          "Keep alert, stand firm in your faith, be courageous, be strong.",
        reflection:
          "Christ speaks in 1 Corinthians 16:13\u2014\"Keep alert, stand firm in your faith, be courageous, be strong.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Ordinary Faithfulness: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Corinthians 16:13 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with 1 Corinthians 16:13 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Corinthians 16:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Corinthians 16:13.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Corinthians 16:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-01": {
        scripturePrimaryRef: "2 Timothy 4:7",
        scripturePrimaryText:
          "I have fought the good fight, I have finished the race, I have kept the faith.",
        reflection:
          "Christ speaks in 2 Timothy 4:7\u2014\"I have fought the good fight, I have finished the race, I have kept the faith.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 2 Timothy 4:7 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with 2 Timothy 4:7 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 2 Timothy 4:7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 2 Timothy 4:7.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 2 Timothy 4:7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-02": {
        scripturePrimaryRef: "Joshua 1:9",
        scripturePrimaryText:
          "I hereby command you: Be strong and courageous; do not be frightened or dismayed, for the Lord your God is with you wherever you go.\"",
        reflection:
          "Christ speaks in Joshua 1:9\u2014\"I hereby command you: Be strong and courageous; do not be frightened or dismayed, for the Lord your God is with you wher\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Joshua 1:9 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Joshua 1:9 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Joshua 1:9 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Joshua 1:9.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Joshua 1:9 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-03": {
        scripturePrimaryRef: "Psalm 31:24",
        scripturePrimaryText:
          "Be strong, and let your heart take courage, all you who wait for the Lord.",
        reflection:
          "Christ speaks in Psalm 31:24\u2014\"Be strong, and let your heart take courage, all you who wait for the Lord.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 31:24 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Psalm 31:24 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 31:24 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 31:24.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 31:24 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-05": {
        scripturePrimaryRef: "Deuteronomy 31:6",
        scripturePrimaryText:
          "Be strong and bold; have no fear or dread of them, because it is the Lord your God who goes with you; he will not fail you or forsake you.\"",
        reflection:
          "Christ speaks in Deuteronomy 31:6\u2014\"Be strong and bold; have no fear or dread of them, because it is the Lord your God who goes with you; he will not fail y\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Deuteronomy 31:6 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Deuteronomy 31:6 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Deuteronomy 31:6 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Deuteronomy 31:6.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Deuteronomy 31:6 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-06": {
        scripturePrimaryRef: "Sirach 2:10",
        scripturePrimaryText:
          "Consider the generations of old and see: has anyone trusted in the Lord and been disappointed? Or has anyone persevered in the fear of the Lord and been forsaken? Or has anyone called upon him and been neglected?",
        reflection:
          "Christ speaks in Sirach 2:10\u2014\"Consider the generations of old and see: has anyone trusted in the Lord and been disappointed? Or has anyone persevered \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Sirach 2:10 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Sirach 2:10 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Sirach 2:10 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Sirach 2:10.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Sirach 2:10 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-07": {
        scripturePrimaryRef: "Wisdom 3:1-3",
        scripturePrimaryText:
          "But the souls of the righteous are in the hand of God, and no torment will ever touch them. In the eyes of the foolish they seemed to have died, and their departure was thought to be a disaster, and their going from us to be their destruction; but they are at peace.",
        reflection:
          "Christ speaks in Wisdom 3:1-3\u2014\"But the souls of the righteous are in the hand of God, and no torment will ever touch them. In the eyes of the foolish t\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Wisdom 3:1-3 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Wisdom 3:1-3 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Wisdom 3:1-3 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Wisdom 3:1-3.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Wisdom 3:1-3 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-08": {
        scripturePrimaryRef: "Romans 14:8",
        scripturePrimaryText:
          "If we live, we live to the Lord, and if we die, we die to the Lord; so then, whether we live or whether we die, we are the Lord's.",
        reflection:
          "Christ speaks in Romans 14:8\u2014\"If we live, we live to the Lord, and if we die, we die to the Lord; so then, whether we live or whether we die, we are t\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 14:8 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Romans 14:8 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 14:8 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 14:8.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 14:8 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-09": {
        scripturePrimaryRef: "1 Corinthians 15:54-55",
        scripturePrimaryText:
          "When this perishable body puts on imperishability, and this mortal body puts on immortality, then the saying that is written will be fulfilled: \"Death has been swallowed up in victory.\" \"Where, O death, is your victory? Where, O death, is your sting?\"",
        reflection:
          "Christ speaks in 1 Corinthians 15:54-55\u2014\"When this perishable body puts on imperishability, and this mortal body puts on immortality, then the saying that is wri\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Corinthians 15:54-55 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how 1 Corinthians 15:54-55 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Corinthians 15:54-55 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Corinthians 15:54-55.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Corinthians 15:54-55 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-10": {
        scripturePrimaryRef: "Revelation 21:4",
        scripturePrimaryText:
          "he will wipe every tear from their eyes. Death will be no more; mourning and crying and pain will be no more, for the first things have passed away.\"",
        reflection:
          "Christ speaks in Revelation 21:4\u2014\"he will wipe every tear from their eyes. Death will be no more; mourning and crying and pain will be no more, for the fi\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Revelation 21:4 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Revelation 21:4 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Revelation 21:4 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Revelation 21:4.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Revelation 21:4 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-11": {
        scripturePrimaryRef: "Matthew 25:13",
        scripturePrimaryText:
          "Keep awake therefore, for you know neither the day nor the hour.\"",
        reflection:
          "Christ speaks in Matthew 25:13\u2014\"Keep awake therefore, for you know neither the day nor the hour.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 25:13 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Matthew 25:13 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 25:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 25:13.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 25:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-12": {
        scripturePrimaryRef: "Luke 12:40",
        scripturePrimaryText:
          "You also must be ready, for the Son of Man is coming at an unexpected hour.\"",
        reflection:
          "Christ speaks in Luke 12:40\u2014\"You also must be ready, for the Son of Man is coming at an unexpected hour.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 12:40 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Luke 12:40 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 12:40 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 12:40.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 12:40 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-13": {
        scripturePrimaryRef: "Hebrews 9:27",
        scripturePrimaryText:
          "And just as it is appointed for mortals to die once, and after that the judgment,",
        reflection:
          "Christ speaks in Hebrews 9:27\u2014\"And just as it is appointed for mortals to die once, and after that the judgment,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Hebrews 9:27 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Hebrews 9:27 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Hebrews 9:27 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Hebrews 9:27.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Hebrews 9:27 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-14": {
        scripturePrimaryRef: "1 John 3:2",
        scripturePrimaryText:
          "Beloved, we are God's children now; what we will be has not yet been revealed. What we do know is this: when he is revealed, we will be like him, for we will see him as he is.",
        reflection:
          "Christ speaks in 1 John 3:2\u2014\"Beloved, we are God's children now; what we will be has not yet been revealed. What we do know is this: when he is revea\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 John 3:2 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how 1 John 3:2 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 John 3:2 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 John 3:2.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 John 3:2 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-15": {
        scripturePrimaryRef: "Romans 8:38-39",
        scripturePrimaryText:
          "For I am convinced that neither death, nor life, nor angels, nor rulers, nor things present, nor things to come, nor powers, nor height, nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
        reflection:
          "Christ speaks in Romans 8:38-39\u2014\"For I am convinced that neither death, nor life, nor angels, nor rulers, nor things present, nor things to come, nor pow\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 8:38-39 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Romans 8:38-39 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 8:38-39 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 8:38-39.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 8:38-39 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-16": {
        scripturePrimaryRef: "Isaiah 7:14",
        scripturePrimaryText:
          "Therefore the Lord himself will give you a sign. Look, the young woman is with child and shall bear a son, and shall name him Immanuel.",
        reflection:
          "Christ speaks in Isaiah 7:14\u2014\"Therefore the Lord himself will give you a sign. Look, the young woman is with child and shall bear a son, and shall nam\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Isaiah 7:14 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Isaiah 7:14 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Isaiah 7:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Isaiah 7:14.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Isaiah 7:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-17": {
        scripturePrimaryRef: "Luke 2:10-11",
        scripturePrimaryText:
          "But the angel said to them, \"Do not be afraid; for see\u2014I am bringing you good news of great joy for all the people: to you is born this day in the city of David a Savior, who is the Messiah, the Lord.\"",
        reflection:
          "Christ speaks in Luke 2:10-11\u2014\"But the angel said to them, \"Do not be afraid; for see\u2014I am bringing you good news of great joy for all the people: to y\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 2:10-11 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Luke 2:10-11 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 2:10-11 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 2:10-11.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 2:10-11 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-18": {
        scripturePrimaryRef: "John 1:14",
        scripturePrimaryText:
          "And the Word became flesh and lived among us, and we have seen his glory, the glory as of a father's only son, full of grace and truth.",
        reflection:
          "Christ speaks in John 1:14\u2014\"And the Word became flesh and lived among us, and we have seen his glory, the glory as of a father's only son, full of g\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 1:14 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy John 1:14 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 1:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 1:14.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 1:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-20": {
        scripturePrimaryRef: "Romans 10:9",
        scripturePrimaryText:
          "because if you confess with your lips that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.",
        reflection:
          "Christ speaks in Romans 10:9\u2014\"because if you confess with your lips that Jesus is Lord and believe in your heart that God raised him from the dead, yo\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 10:9 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Romans 10:9 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 10:9 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 10:9.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 10:9 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-21": {
        scripturePrimaryRef: "Matthew 6:9-10",
        scripturePrimaryText:
          "\"Pray then in this way: Our Father in heaven, hallowed be your name. Your kingdom come. Your will be done, on earth as it is in heaven.\"",
        reflection:
          "Christ speaks in Matthew 6:9-10\u2014\"\"Pray then in this way: Our Father in heaven, hallowed be your name. Your kingdom come. Your will be done, on earth as i\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 6:9-10 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Matthew 6:9-10 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 6:9-10 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 6:9-10.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 6:9-10 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-22": {
        scripturePrimaryRef: "Ephesians 6:10-11",
        scripturePrimaryText:
          "Finally, be strong in the Lord and in the strength of his power. Put on the whole armor of God, so that you may be able to stand against the wiles of the devil.",
        reflection:
          "Christ speaks in Ephesians 6:10-11\u2014\"Finally, be strong in the Lord and in the strength of his power. Put on the whole armor of God, so that you may be able \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Ephesians 6:10-11 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Ephesians 6:10-11 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Ephesians 6:10-11 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Ephesians 6:10-11.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Ephesians 6:10-11 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-23": {
        scripturePrimaryRef: "1 Peter 5:8-9",
        scripturePrimaryText:
          "Discipline yourselves, keep alert. Like a roaring lion your adversary the devil prowls around, looking for someone to devour. Resist him, steadfast in your faith, for you know that your brothers and sisters in all the world are undergoing the same kinds of suffering.",
        reflection:
          "Christ speaks in 1 Peter 5:8-9\u2014\"Discipline yourselves, keep alert. Like a roaring lion your adversary the devil prowls around, looking for someone to de\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Peter 5:8-9 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy 1 Peter 5:8-9 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Peter 5:8-9 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Peter 5:8-9.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Peter 5:8-9 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-24": {
        scripturePrimaryRef: "Luke 1:46-47",
        scripturePrimaryText:
          "And Mary said, \"My soul magnifies the Lord, and my spirit rejoices in God my Savior,\"",
        reflection:
          "Christ speaks in Luke 1:46-47\u2014\"And Mary said, \"My soul magnifies the Lord, and my spirit rejoices in God my Savior,\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 1:46-47 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Luke 1:46-47 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 1:46-47 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 1:46-47.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 1:46-47 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-25": {
        scripturePrimaryRef: "Song of Solomon 8:6-7",
        scripturePrimaryText:
          "Set me as a seal upon your heart, as a seal upon your arm; for love is strong as death, passion fierce as the grave. Its flashes are flashes of fire, a raging flame. Many waters cannot quench love, neither can floods drown it.",
        reflection:
          "Christ speaks in Song of Solomon 8:6-7\u2014\"Set me as a seal upon your heart, as a seal upon your arm; for love is strong as death, passion fierce as the grave. Its\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Song of Solomon 8:6-7 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Song of Solomon 8:6-7 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Song of Solomon 8:6-7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Song of Solomon 8:6-7.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Song of Solomon 8:6-7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-26": {
        scripturePrimaryRef: "John 19:25-27",
        scripturePrimaryText:
          "Meanwhile, standing near the cross of Jesus were his mother, and his mother's sister, Mary the wife of Clopas, and Mary Magdalene. When Jesus saw his mother and the disciple whom he loved standing beside her, he said to his mother, \"Woman, here is your son.\"",
        reflection:
          "Christ speaks in John 19:25-27\u2014\"Meanwhile, standing near the cross of Jesus were his mother, and his mother's sister, Mary the wife of Clopas, and Mary \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 19:25-27 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with John 19:25-27 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 19:25-27 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 19:25-27.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 19:25-27 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-27": {
        scripturePrimaryRef: "Revelation 12:1",
        scripturePrimaryText:
          "A great portent appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.",
        reflection:
          "Christ speaks in Revelation 12:1\u2014\"A great portent appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Revelation 12:1 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Revelation 12:1 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Revelation 12:1 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Revelation 12:1.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Revelation 12:1 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-28": {
        scripturePrimaryRef: "Luke 2:51",
        scripturePrimaryText:
          "Then he went down with them and came to Nazareth, and was obedient to them. His mother treasured all these things in her heart.",
        reflection:
          "Christ speaks in Luke 2:51\u2014\"Then he went down with them and came to Nazareth, and was obedient to them. His mother treasured all these things in her\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 2:51 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Luke 2:51 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 2:51 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 2:51.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 2:51 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-29": {
        scripturePrimaryRef: "John 2:5",
        scripturePrimaryText:
          "His mother said to the servants, \"Do whatever he tells you.\"",
        reflection:
          "Christ speaks in John 2:5\u2014\"His mother said to the servants, \"Do whatever he tells you.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 2:5 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how John 2:5 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 2:5 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 2:5.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 2:5 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "06-30": {
        scripturePrimaryRef: "Acts 1:14",
        scripturePrimaryText:
          "All these were constantly devoting themselves to prayer, together with certain women, including Mary the mother of Jesus, as well as his brothers.",
        reflection:
          "Christ speaks in Acts 1:14\u2014\"All these were constantly devoting themselves to prayer, together with certain women, including Mary the mother of Jesus\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Sacred Heart: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Acts 1:14 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Acts 1:14 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Acts 1:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Acts 1:14.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Acts 1:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-01": {
        scripturePrimaryRef: "Colossians 1:15-16",
        scripturePrimaryText:
          "He is the image of the invisible God, the firstborn of all creation; for in him all things in heaven and on earth were created, things visible and invisible, whether thrones or dominions or rulers or powers\u2014all things have been created through him and for him.",
        reflection:
          "Christ speaks in Colossians 1:15-16\u2014\"He is the image of the invisible God, the firstborn of all creation; for in him all things in heaven and on earth were c\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Colossians 1:15-16 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Colossians 1:15-16 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Colossians 1:15-16 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Colossians 1:15-16.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Colossians 1:15-16 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-02": {
        scripturePrimaryRef: "1 Timothy 2:5",
        scripturePrimaryText:
          "For there is one God; there is also one mediator between God and humankind, Christ Jesus, himself human,",
        reflection:
          "Christ speaks in 1 Timothy 2:5\u2014\"For there is one God; there is also one mediator between God and humankind, Christ Jesus, himself human,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Timothy 2:5 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying 1 Timothy 2:5 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Timothy 2:5 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Timothy 2:5.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Timothy 2:5 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-03": {
        scripturePrimaryRef: "Mark 1:15",
        scripturePrimaryText:
          "and saying, \"The time is fulfilled, and the kingdom of God has come near; repent, and believe in the good news.\"",
        reflection:
          "Christ speaks in Mark 1:15\u2014\"and saying, \"The time is fulfilled, and the kingdom of God has come near; repent, and believe in the good news.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Mark 1:15 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Mark 1:15 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Mark 1:15 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Mark 1:15.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Mark 1:15 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-04": {
        scripturePrimaryRef: "Matthew 28:19-20",
        scripturePrimaryText:
          "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything that I have commanded you. And remember, I am with you always, to the end of the age.\"",
        reflection:
          "Christ speaks in Matthew 28:19-20\u2014\"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 28:19-20 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Matthew 28:19-20 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 28:19-20 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 28:19-20.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 28:19-20 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-05": {
        scripturePrimaryRef: "Mark 16:15",
        scripturePrimaryText:
          "And he said to them, \"Go into all the world and proclaim the good news to the whole creation.\"",
        reflection:
          "Christ speaks in Mark 16:15\u2014\"And he said to them, \"Go into all the world and proclaim the good news to the whole creation.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Mark 16:15 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Mark 16:15 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Mark 16:15 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Mark 16:15.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Mark 16:15 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-06": {
        scripturePrimaryRef: "Romans 10:14-15",
        scripturePrimaryText:
          "But how are they to call on one in whom they have not believed? And how are they to believe in one of whom they have never heard? And how are they to hear without someone to proclaim him? And how are they to proclaim him unless they are sent? As it is written, \"How beautiful are the feet of those who bring good news!\"",
        reflection:
          "Christ speaks in Romans 10:14-15\u2014\"But how are they to call on one in whom they have not believed? And how are they to believe in one of whom they have nev\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 10:14-15 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Romans 10:14-15 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 10:14-15 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 10:14-15.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 10:14-15 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-07": {
        scripturePrimaryRef: "Psalm 91:1-2",
        scripturePrimaryText:
          "You who live in the shelter of the Most High, who abide in the shadow of the Almighty, will say to the Lord, \"My refuge and my fortress; my God, in whom I trust.\"",
        reflection:
          "Christ speaks in Psalm 91:1-2\u2014\"You who live in the shelter of the Most High, who abide in the shadow of the Almighty, will say to the Lord, \"My refuge \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 91:1-2 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Psalm 91:1-2 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 91:1-2 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 91:1-2.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 91:1-2 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-08": {
        scripturePrimaryRef: "Ephesians 6:18",
        scripturePrimaryText:
          "Pray in the Spirit at all times in every prayer and supplication. To that end keep alert and always persevere in supplication for all the saints.",
        reflection:
          "Christ speaks in Ephesians 6:18\u2014\"Pray in the Spirit at all times in every prayer and supplication. To that end keep alert and always persevere in supplic\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Ephesians 6:18 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Ephesians 6:18 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Ephesians 6:18 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Ephesians 6:18.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Ephesians 6:18 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-09": {
        scripturePrimaryRef: "James 4:7",
        scripturePrimaryText:
          "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
        reflection:
          "Christ speaks in James 4:7\u2014\"Submit yourselves therefore to God. Resist the devil, and he will flee from you.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard James 4:7 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how James 4:7 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because James 4:7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in James 4:7.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did James 4:7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-10": {
        scripturePrimaryRef: "1 John 4:4",
        scripturePrimaryText:
          "Little children, you are from God, and have conquered them; for the one who is in you is greater than the one who is in the world.",
        reflection:
          "Christ speaks in 1 John 4:4\u2014\"Little children, you are from God, and have conquered them; for the one who is in you is greater than the one who is in \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 John 4:4 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with 1 John 4:4 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 John 4:4 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 John 4:4.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 John 4:4 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-11": {
        scripturePrimaryRef: "Luke 11:2-4",
        scripturePrimaryText:
          "He said to them, \"When you pray, say: Father, hallowed be your name. Your kingdom come. Give us each day our daily bread. And forgive us our sins, for we ourselves forgive everyone indebted to us. And do not bring us to the time of trial.\"",
        reflection:
          "Christ speaks in Luke 11:2-4\u2014\"He said to them, \"When you pray, say: Father, hallowed be your name. Your kingdom come. Give us each day our daily bread\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 11:2-4 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Luke 11:2-4 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 11:2-4 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 11:2-4.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 11:2-4 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-12": {
        scripturePrimaryRef: "Philippians 4:6",
        scripturePrimaryText:
          "Do not worry about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
        reflection:
          "Christ speaks in Philippians 4:6\u2014\"Do not worry about anything, but in everything by prayer and supplication with thanksgiving let your requests be made kn\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Philippians 4:6 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Philippians 4:6 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Philippians 4:6 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Philippians 4:6.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Philippians 4:6 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-13": {
        scripturePrimaryRef: "Hebrews 11:1",
        scripturePrimaryText:
          "Now faith is the assurance of things hoped for, the conviction of things not seen.",
        reflection:
          "Christ speaks in Hebrews 11:1\u2014\"Now faith is the assurance of things hoped for, the conviction of things not seen.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Hebrews 11:1 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Hebrews 11:1 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Hebrews 11:1 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Hebrews 11:1.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Hebrews 11:1 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-14": {
        scripturePrimaryRef: "Romans 5:8",
        scripturePrimaryText:
          "But God proves his love for us in that while we still were sinners Christ died for us.",
        reflection:
          "Christ speaks in Romans 5:8\u2014\"But God proves his love for us in that while we still were sinners Christ died for us.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 5:8 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Romans 5:8 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 5:8 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 5:8.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 5:8 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-15": {
        scripturePrimaryRef: "Galatians 5:6",
        scripturePrimaryText:
          "For in Christ Jesus neither circumcision nor uncircumcision counts for anything; the only thing that counts is faith working through love.",
        reflection:
          "Christ speaks in Galatians 5:6\u2014\"For in Christ Jesus neither circumcision nor uncircumcision counts for anything; the only thing that counts is faith wor\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Galatians 5:6 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Galatians 5:6 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Galatians 5:6 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Galatians 5:6.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Galatians 5:6 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-16": {
        scripturePrimaryRef: "John 6:51",
        scripturePrimaryText:
          "I am the living bread that came down from heaven. Whoever eats of this bread will live forever; and the bread that I will give for the life of the world is my flesh.\"",
        reflection:
          "Christ speaks in John 6:51\u2014\"I am the living bread that came down from heaven. Whoever eats of this bread will live forever; and the bread that I wil\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 6:51 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with John 6:51 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 6:51 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 6:51.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 6:51 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-17": {
        scripturePrimaryRef: "1 Corinthians 11:26",
        scripturePrimaryText:
          "For as often as you eat this bread and drink the cup, you proclaim the Lord's death until he comes.",
        reflection:
          "Christ speaks in 1 Corinthians 11:26\u2014\"For as often as you eat this bread and drink the cup, you proclaim the Lord's death until he comes.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Corinthians 11:26 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying 1 Corinthians 11:26 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Corinthians 11:26 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Corinthians 11:26.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Corinthians 11:26 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-18": {
        scripturePrimaryRef: "Psalm 116:15",
        scripturePrimaryText:
          "Precious in the sight of the Lord is the death of his faithful ones.",
        reflection:
          "Christ speaks in Psalm 116:15\u2014\"Precious in the sight of the Lord is the death of his faithful ones.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 116:15 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Psalm 116:15 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 116:15 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 116:15.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 116:15 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-19": {
        scripturePrimaryRef: "2 Maccabees 12:45",
        scripturePrimaryText:
          "But if he were not expecting that those who had fallen would rise again, it would have been superfluous and foolish to pray for the dead.",
        reflection:
          "Christ speaks in 2 Maccabees 12:45\u2014\"But if he were not expecting that those who had fallen would rise again, it would have been superfluous and foolish to p\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 2 Maccabees 12:45 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how 2 Maccabees 12:45 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 2 Maccabees 12:45 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 2 Maccabees 12:45.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 2 Maccabees 12:45 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-20": {
        scripturePrimaryRef: "1 Corinthians 3:15",
        scripturePrimaryText:
          "If the work is burned up, the builder will suffer loss; the builder will be saved, but only as through fire.",
        reflection:
          "Christ speaks in 1 Corinthians 3:15\u2014\"If the work is burned up, the builder will suffer loss; the builder will be saved, but only as through fire.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Corinthians 3:15 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with 1 Corinthians 3:15 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Corinthians 3:15 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Corinthians 3:15.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Corinthians 3:15 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-21": {
        scripturePrimaryRef: "Matthew 24:42",
        scripturePrimaryText:
          "Keep awake therefore, for you do not know on what day your Lord is coming.",
        reflection:
          "Christ speaks in Matthew 24:42\u2014\"Keep awake therefore, for you do not know on what day your Lord is coming.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 24:42 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Matthew 24:42 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 24:42 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 24:42.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 24:42 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-23": {
        scripturePrimaryRef: "Luke 12:32",
        scripturePrimaryText:
          "Do not be afraid, little flock, for it is your Father's good pleasure to give you the kingdom.",
        reflection:
          "Christ speaks in Luke 12:32\u2014\"Do not be afraid, little flock, for it is your Father's good pleasure to give you the kingdom.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 12:32 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Luke 12:32 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 12:32 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 12:32.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 12:32 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-24": {
        scripturePrimaryRef: "Titus 2:11-12",
        scripturePrimaryText:
          "For the grace of God has appeared, bringing salvation to all, training us to renounce impiety and worldly passions, and in the present age to live lives that are self-controlled, upright, and godly,",
        reflection:
          "Christ speaks in Titus 2:11-12\u2014\"For the grace of God has appeared, bringing salvation to all, training us to renounce impiety and worldly passions, and \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Titus 2:11-12 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Titus 2:11-12 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Titus 2:11-12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Titus 2:11-12.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Titus 2:11-12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-25": {
        scripturePrimaryRef: "Romans 13:11-12",
        scripturePrimaryText:
          "Besides this, you know what time it is, how it is now the moment for you to wake from sleep. For salvation is nearer to us now than when we became believers; the night is far gone, the day is near. Let us then lay aside the works of darkness and put on the armor of light;",
        reflection:
          "Christ speaks in Romans 13:11-12\u2014\"Besides this, you know what time it is, how it is now the moment for you to wake from sleep. For salvation is nearer to \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 13:11-12 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Romans 13:11-12 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 13:11-12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 13:11-12.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 13:11-12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-26": {
        scripturePrimaryRef: "Isaiah 9:6",
        scripturePrimaryText:
          "For a child has been born for us, a son given to us; authority rests upon his shoulders; and he is named Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.",
        reflection:
          "Christ speaks in Isaiah 9:6\u2014\"For a child has been born for us, a son given to us; authority rests upon his shoulders; and he is named Wonderful Couns\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Isaiah 9:6 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Isaiah 9:6 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Isaiah 9:6 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Isaiah 9:6.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Isaiah 9:6 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-27": {
        scripturePrimaryRef: "Micah 5:2",
        scripturePrimaryText:
          "But you, O Bethlehem of Ephrathah, who are one of the little clans of Judah, from you shall come forth for me one who is to rule in Israel, whose origin is from of old, from ancient days.",
        reflection:
          "Christ speaks in Micah 5:2\u2014\"But you, O Bethlehem of Ephrathah, who are one of the little clans of Judah, from you shall come forth for me one who is\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Micah 5:2 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Micah 5:2 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Micah 5:2 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Micah 5:2.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Micah 5:2 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-28": {
        scripturePrimaryRef: "Romans 15:13",
        scripturePrimaryText:
          "May the God of hope fill you with all joy and peace in believing, so that you may abound in hope by the power of the Holy Spirit.",
        reflection:
          "Christ speaks in Romans 15:13\u2014\"May the God of hope fill you with all joy and peace in believing, so that you may abound in hope by the power of the Hol\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 15:13 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Romans 15:13 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 15:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 15:13.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 15:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-29": {
        scripturePrimaryRef: "Baruch 5:5",
        scripturePrimaryText:
          "Arise, O Jerusalem, stand upon the height; look toward the east, and see your children gathered from west and east at the word of the Holy One, rejoicing that God has remembered them.",
        reflection:
          "Christ speaks in Baruch 5:5\u2014\"Arise, O Jerusalem, stand upon the height; look toward the east, and see your children gathered from west and east at th\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Baruch 5:5 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Baruch 5:5 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Baruch 5:5 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Baruch 5:5.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Baruch 5:5 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-30": {
        scripturePrimaryRef: "Zechariah 9:9",
        scripturePrimaryText:
          "Rejoice greatly, O daughter Zion! Shout aloud, O daughter Jerusalem! Lo, your king comes to you; triumphant and victorious is he, humble and riding on a donkey, on a colt, the foal of a donkey.",
        reflection:
          "Christ speaks in Zechariah 9:9\u2014\"Rejoice greatly, O daughter Zion! Shout aloud, O daughter Jerusalem! Lo, your king comes to you; triumphant and victorio\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Zechariah 9:9 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Zechariah 9:9 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Zechariah 9:9 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Zechariah 9:9.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Zechariah 9:9 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "07-31": {
        scripturePrimaryRef: "John 10:27",
        scripturePrimaryText:
          "My sheep hear my voice. I know them, and they follow me.",
        reflection:
          "Christ speaks in John 10:27\u2014\"My sheep hear my voice. I know them, and they follow me.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Courage and Fortitude: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 10:27 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with John 10:27 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 10:27 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 10:27.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 10:27 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-01": {
        scripturePrimaryRef: "John 6:35",
        scripturePrimaryText:
          "Jesus said to them, \"I am the bread of life. Whoever comes to me will never be hungry, and whoever believes in me will never be thirsty.\"",
        reflection:
          "Christ speaks in John 6:35\u2014\"Jesus said to them, \"I am the bread of life. Whoever comes to me will never be hungry, and whoever believes in me will n\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 6:35 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with John 6:35 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 6:35 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 6:35.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 6:35 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-02": {
        scripturePrimaryRef: "Acts 17:28",
        scripturePrimaryText:
          "For 'In him we live and move and have our being'; as even some of your own poets have said, 'For we too are his offspring.'",
        reflection:
          "Christ speaks in Acts 17:28\u2014\"For 'In him we live and move and have our being'; as even some of your own poets have said, 'For we too are his offsprin\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Acts 17:28 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Acts 17:28 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Acts 17:28 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Acts 17:28.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Acts 17:28 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-03": {
        scripturePrimaryRef: "Colossians 3:17",
        scripturePrimaryText:
          "And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.",
        reflection:
          "Christ speaks in Colossians 3:17\u2014\"And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father throu\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Colossians 3:17 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Colossians 3:17 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Colossians 3:17 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Colossians 3:17.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Colossians 3:17 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-04": {
        scripturePrimaryRef: "1 Thessalonians 5:11",
        scripturePrimaryText:
          "Therefore encourage one another and build up each other, as indeed you are doing.",
        reflection:
          "Christ speaks in 1 Thessalonians 5:11\u2014\"Therefore encourage one another and build up each other, as indeed you are doing.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Thessalonians 5:11 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how 1 Thessalonians 5:11 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Thessalonians 5:11 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Thessalonians 5:11.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Thessalonians 5:11 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-05": {
        scripturePrimaryRef: "Hebrews 13:16",
        scripturePrimaryText:
          "Do not neglect to do good and to share what you have, for such sacrifices are pleasing to God.",
        reflection:
          "Christ speaks in Hebrews 13:16\u2014\"Do not neglect to do good and to share what you have, for such sacrifices are pleasing to God.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Hebrews 13:16 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Hebrews 13:16 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Hebrews 13:16 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Hebrews 13:16.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Hebrews 13:16 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-06": {
        scripturePrimaryRef: "Proverbs 27:17",
        scripturePrimaryText:
          "Iron sharpens iron, and one person sharpens the wits of another.",
        reflection:
          "Christ speaks in Proverbs 27:17\u2014\"Iron sharpens iron, and one person sharpens the wits of another.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Proverbs 27:17 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Proverbs 27:17 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Proverbs 27:17 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Proverbs 27:17.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Proverbs 27:17 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-07": {
        scripturePrimaryRef: "Sirach 6:14",
        scripturePrimaryText:
          "Faithful friends are a sturdy shelter: whoever finds one has found a treasure.",
        reflection:
          "Christ speaks in Sirach 6:14\u2014\"Faithful friends are a sturdy shelter: whoever finds one has found a treasure.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Sirach 6:14 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Sirach 6:14 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Sirach 6:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Sirach 6:14.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Sirach 6:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-08": {
        scripturePrimaryRef: "Psalm 133:1",
        scripturePrimaryText:
          "How very good and pleasant it is when kindred live together in unity!",
        reflection:
          "Christ speaks in Psalm 133:1\u2014\"How very good and pleasant it is when kindred live together in unity!\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 133:1 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Psalm 133:1 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 133:1 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 133:1.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 133:1 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-09": {
        scripturePrimaryRef: "James 1:19",
        scripturePrimaryText:
          "You must understand this, my beloved: let everyone be quick to listen, slow to speak, slow to anger;",
        reflection:
          "Christ speaks in James 1:19\u2014\"You must understand this, my beloved: let everyone be quick to listen, slow to speak, slow to anger;\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard James 1:19 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how James 1:19 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because James 1:19 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in James 1:19.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did James 1:19 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-10": {
        scripturePrimaryRef: "Proverbs 15:23",
        scripturePrimaryText:
          "To make an apt answer is a joy to anyone, and a word spoken at the right moment\u2014how good it is!",
        reflection:
          "Christ speaks in Proverbs 15:23\u2014\"To make an apt answer is a joy to anyone, and a word spoken at the right moment\u2014how good it is!\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Proverbs 15:23 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Proverbs 15:23 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Proverbs 15:23 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Proverbs 15:23.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Proverbs 15:23 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-11": {
        scripturePrimaryRef: "Luke 24:45",
        scripturePrimaryText:
          "Then he opened their minds to understand the scriptures,",
        reflection:
          "Christ speaks in Luke 24:45\u2014\"Then he opened their minds to understand the scriptures,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 24:45 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Luke 24:45 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 24:45 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 24:45.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 24:45 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-12": {
        scripturePrimaryRef: "Acts 8:30-31",
        scripturePrimaryText:
          "So Philip ran up to it and heard him reading the prophet Isaiah. He asked, \"Do you understand what you are reading?\" He replied, \"How can I, unless someone guides me?\"",
        reflection:
          "Christ speaks in Acts 8:30-31\u2014\"So Philip ran up to it and heard him reading the prophet Isaiah. He asked, \"Do you understand what you are reading?\" He \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Acts 8:30-31 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Acts 8:30-31 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Acts 8:30-31 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Acts 8:30-31.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Acts 8:30-31 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-13": {
        scripturePrimaryRef: "2 Timothy 3:16-17",
        scripturePrimaryText:
          "All scripture is inspired by God and is useful for teaching, for reproof, for correction, and for training in righteousness, so that everyone who belongs to God may be proficient, equipped for every good work.",
        reflection:
          "Christ speaks in 2 Timothy 3:16-17\u2014\"All scripture is inspired by God and is useful for teaching, for reproof, for correction, and for training in righteousn\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 2 Timothy 3:16-17 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy 2 Timothy 3:16-17 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 2 Timothy 3:16-17 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 2 Timothy 3:16-17.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 2 Timothy 3:16-17 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-14": {
        scripturePrimaryRef: "Psalm 119:105",
        scripturePrimaryText:
          "Your word is a lamp to my feet and a light to my path.",
        reflection:
          "Christ speaks in Psalm 119:105\u2014\"Your word is a lamp to my feet and a light to my path.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 119:105 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Psalm 119:105 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 119:105 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 119:105.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 119:105 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-16": {
        scripturePrimaryRef: "Deuteronomy 6:6-7",
        scripturePrimaryText:
          "Keep these words that I am commanding you today in your heart. Recite them to your children and talk about them when you are at home and when you are away, when you lie down and when you rise.",
        reflection:
          "Christ speaks in Deuteronomy 6:6-7\u2014\"Keep these words that I am commanding you today in your heart. Recite them to your children and talk about them when you\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Deuteronomy 6:6-7 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Deuteronomy 6:6-7 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Deuteronomy 6:6-7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Deuteronomy 6:6-7.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Deuteronomy 6:6-7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-17": {
        scripturePrimaryRef: "Proverbs 4:4",
        scripturePrimaryText:
          "he taught me, and said to me, \"Let your heart hold fast my words; keep my commandments, and live.\"",
        reflection:
          "Christ speaks in Proverbs 4:4\u2014\"he taught me, and said to me, \"Let your heart hold fast my words; keep my commandments, and live.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Proverbs 4:4 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Proverbs 4:4 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Proverbs 4:4 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Proverbs 4:4.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Proverbs 4:4 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-18": {
        scripturePrimaryRef: "Sirach 39:1",
        scripturePrimaryText:
          "Wise persons will seek out the wisdom of all the ancients, and will be concerned with prophecies;",
        reflection:
          "Christ speaks in Sirach 39:1\u2014\"Wise persons will seek out the wisdom of all the ancients, and will be concerned with prophecies;\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Sirach 39:1 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Sirach 39:1 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Sirach 39:1 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Sirach 39:1.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Sirach 39:1 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-19": {
        scripturePrimaryRef: "Wisdom 7:14",
        scripturePrimaryText:
          "For she is a breath of the power of God, and a pure emanation of the glory of the Almighty; therefore nothing defiled gains entrance into her.",
        reflection:
          "Christ speaks in Wisdom 7:14\u2014\"For she is a breath of the power of God, and a pure emanation of the glory of the Almighty; therefore nothing defiled ga\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Wisdom 7:14 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Wisdom 7:14 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Wisdom 7:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Wisdom 7:14.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Wisdom 7:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-20": {
        scripturePrimaryRef: "Romans 1:16",
        scripturePrimaryText:
          "For I am not ashamed of the gospel; it is the power of God for salvation to everyone who has faith, to the Jew first and also to the Greek.",
        reflection:
          "Christ speaks in Romans 1:16\u2014\"For I am not ashamed of the gospel; it is the power of God for salvation to everyone who has faith, to the Jew first and\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 1:16 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Romans 1:16 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 1:16 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 1:16.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 1:16 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-21": {
        scripturePrimaryRef: "1 Corinthians 2:2",
        scripturePrimaryText:
          "For I decided to know nothing among you except Jesus Christ, and him crucified.",
        reflection:
          "Christ speaks in 1 Corinthians 2:2\u2014\"For I decided to know nothing among you except Jesus Christ, and him crucified.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Corinthians 2:2 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with 1 Corinthians 2:2 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Corinthians 2:2 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Corinthians 2:2.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Corinthians 2:2 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-22": {
        scripturePrimaryRef: "Galatians 6:9",
        scripturePrimaryText:
          "So let us not grow weary in doing what is right, for we will reap at harvest time, if we do not give up.",
        reflection:
          "Christ speaks in Galatians 6:9\u2014\"So let us not grow weary in doing what is right, for we will reap at harvest time, if we do not give up.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Galatians 6:9 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Galatians 6:9 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Galatians 6:9 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Galatians 6:9.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Galatians 6:9 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-23": {
        scripturePrimaryRef: "Philippians 1:6",
        scripturePrimaryText:
          "I am confident of this, that the one who began a good work among you will bring it to completion by the day of Jesus Christ.",
        reflection:
          "Christ speaks in Philippians 1:6\u2014\"I am confident of this, that the one who began a good work among you will bring it to completion by the day of Jesus Chr\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Philippians 1:6 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Philippians 1:6 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Philippians 1:6 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Philippians 1:6.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Philippians 1:6 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-24": {
        scripturePrimaryRef: "Colossians 4:2",
        scripturePrimaryText:
          "Devote yourselves to prayer, keeping alert in it with thanksgiving.",
        reflection:
          "Christ speaks in Colossians 4:2\u2014\"Devote yourselves to prayer, keeping alert in it with thanksgiving.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Colossians 4:2 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Colossians 4:2 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Colossians 4:2 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Colossians 4:2.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Colossians 4:2 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-25": {
        scripturePrimaryRef: "1 Thessalonians 5:17",
        scripturePrimaryText:
          "pray without ceasing,",
        reflection:
          "Christ speaks in 1 Thessalonians 5:17\u2014\"pray without ceasing,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Thessalonians 5:17 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with 1 Thessalonians 5:17 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Thessalonians 5:17 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Thessalonians 5:17.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Thessalonians 5:17 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-26": {
        scripturePrimaryRef: "Philemon 1:6",
        scripturePrimaryText:
          "I pray that the sharing of your faith may become effective when you perceive all the good that we may do for Christ.",
        reflection:
          "Christ speaks in Philemon 1:6\u2014\"I pray that the sharing of your faith may become effective when you perceive all the good that we may do for Christ.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Philemon 1:6 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Philemon 1:6 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Philemon 1:6 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Philemon 1:6.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Philemon 1:6 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-27": {
        scripturePrimaryRef: "Hebrews 4:16",
        scripturePrimaryText:
          "Let us therefore approach the throne of grace with boldness, so that we may receive mercy and find grace to help in time of need.",
        reflection:
          "Christ speaks in Hebrews 4:16\u2014\"Let us therefore approach the throne of grace with boldness, so that we may receive mercy and find grace to help in time\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Hebrews 4:16 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Hebrews 4:16 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Hebrews 4:16 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Hebrews 4:16.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Hebrews 4:16 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-28": {
        scripturePrimaryRef: "James 5:16",
        scripturePrimaryText:
          "Therefore confess your sins to one another, and pray for one another, so that you may be healed. The prayer of the righteous is powerful and effective.",
        reflection:
          "Christ speaks in James 5:16\u2014\"Therefore confess your sins to one another, and pray for one another, so that you may be healed. The prayer of the right\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard James 5:16 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy James 5:16 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because James 5:16 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in James 5:16.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did James 5:16 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-29": {
        scripturePrimaryRef: "1 Peter 4:8",
        scripturePrimaryText:
          "Above all, maintain constant love for one another, for love covers a multitude of sins.",
        reflection:
          "Christ speaks in 1 Peter 4:8\u2014\"Above all, maintain constant love for one another, for love covers a multitude of sins.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Peter 4:8 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how 1 Peter 4:8 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Peter 4:8 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Peter 4:8.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Peter 4:8 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-30": {
        scripturePrimaryRef: "1 John 5:14",
        scripturePrimaryText:
          "And this is the boldness we have in him, that if we ask anything according to his will, he hears us.",
        reflection:
          "Christ speaks in 1 John 5:14\u2014\"And this is the boldness we have in him, that if we ask anything according to his will, he hears us.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 John 5:14 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with 1 John 5:14 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 John 5:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 John 5:14.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 John 5:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "08-31": {
        scripturePrimaryRef: "Jude 1:20",
        scripturePrimaryText:
          "But you, beloved, build yourselves up on your most holy faith; pray in the Holy Spirit;",
        reflection:
          "Christ speaks in Jude 1:20\u2014\"But you, beloved, build yourselves up on your most holy faith; pray in the Holy Spirit;\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Mary: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Jude 1:20 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Jude 1:20 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Jude 1:20 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Jude 1:20.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Jude 1:20 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-01": {
        scripturePrimaryRef: "Matthew 5:3",
        scripturePrimaryText:
          "\"Blessed are the poor in spirit, for theirs is the kingdom of heaven.\"",
        reflection:
          "Christ speaks in Matthew 5:3\u2014\"\"Blessed are the poor in spirit, for theirs is the kingdom of heaven.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 5:3 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Matthew 5:3 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 5:3 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 5:3.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 5:3 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-02": {
        scripturePrimaryRef: "Matthew 5:7",
        scripturePrimaryText:
          "\"Blessed are the merciful, for they will receive mercy.\"",
        reflection:
          "Christ speaks in Matthew 5:7\u2014\"\"Blessed are the merciful, for they will receive mercy.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 5:7 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Matthew 5:7 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 5:7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 5:7.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 5:7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-03": {
        scripturePrimaryRef: "Matthew 5:9",
        scripturePrimaryText:
          "\"Blessed are the peacemakers, for they will be called children of God.\"",
        reflection:
          "Christ speaks in Matthew 5:9\u2014\"\"Blessed are the peacemakers, for they will be called children of God.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 5:9 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Matthew 5:9 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 5:9 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 5:9.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 5:9 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-04": {
        scripturePrimaryRef: "Luke 6:36",
        scripturePrimaryText:
          "Be merciful, just as your Father is merciful.",
        reflection:
          "Christ speaks in Luke 6:36\u2014\"Be merciful, just as your Father is merciful.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 6:36 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Luke 6:36 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 6:36 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 6:36.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 6:36 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-05": {
        scripturePrimaryRef: "John 13:34",
        scripturePrimaryText:
          "I give you a new commandment, that you love one another. Just as I have loved you, you also should love one another.",
        reflection:
          "Christ speaks in John 13:34\u2014\"I give you a new commandment, that you love one another. Just as I have loved you, you also should love one another.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 13:34 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with John 13:34 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 13:34 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 13:34.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 13:34 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-06": {
        scripturePrimaryRef: "Romans 12:10",
        scripturePrimaryText:
          "love one another with mutual affection; outdo one another in showing honor.",
        reflection:
          "Christ speaks in Romans 12:10\u2014\"love one another with mutual affection; outdo one another in showing honor.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 12:10 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Romans 12:10 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 12:10 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 12:10.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 12:10 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-07": {
        scripturePrimaryRef: "1 Corinthians 13:4-5",
        scripturePrimaryText:
          "Love is patient; love is kind; love is not envious or boastful or arrogant or rude. It does not insist on its own way; it is not irritable or resentful;",
        reflection:
          "Christ speaks in 1 Corinthians 13:4-5\u2014\"Love is patient; love is kind; love is not envious or boastful or arrogant or rude. It does not insist on its own way; i\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Corinthians 13:4-5 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying 1 Corinthians 13:4-5 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Corinthians 13:4-5 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Corinthians 13:4-5.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Corinthians 13:4-5 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-08": {
        scripturePrimaryRef: "Ephesians 4:32",
        scripturePrimaryText:
          "and be kind to one another, tenderhearted, forgiving one another, as God in Christ has forgiven you.",
        reflection:
          "Christ speaks in Ephesians 4:32\u2014\"and be kind to one another, tenderhearted, forgiving one another, as God in Christ has forgiven you.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Ephesians 4:32 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Ephesians 4:32 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Ephesians 4:32 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Ephesians 4:32.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Ephesians 4:32 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-09": {
        scripturePrimaryRef: "Philippians 2:4",
        scripturePrimaryText:
          "Let each of you look not to your own interests, but to the interests of others.",
        reflection:
          "Christ speaks in Philippians 2:4\u2014\"Let each of you look not to your own interests, but to the interests of others.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Philippians 2:4 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Philippians 2:4 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Philippians 2:4 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Philippians 2:4.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Philippians 2:4 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-10": {
        scripturePrimaryRef: "Colossians 3:13",
        scripturePrimaryText:
          "Bear with one another and, if anyone has a complaint against another, forgive each other; just as the Lord has forgiven you, so you also must forgive.",
        reflection:
          "Christ speaks in Colossians 3:13\u2014\"Bear with one another and, if anyone has a complaint against another, forgive each other; just as the Lord has forgiven \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Colossians 3:13 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Colossians 3:13 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Colossians 3:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Colossians 3:13.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Colossians 3:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-11": {
        scripturePrimaryRef: "1 Thessalonians 5:15",
        scripturePrimaryText:
          "See that none of you repays evil for evil, but always seek to do good to one another and to all.",
        reflection:
          "Christ speaks in 1 Thessalonians 5:15\u2014\"See that none of you repays evil for evil, but always seek to do good to one another and to all.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Thessalonians 5:15 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with 1 Thessalonians 5:15 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Thessalonians 5:15 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Thessalonians 5:15.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Thessalonians 5:15 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-12": {
        scripturePrimaryRef: "Hebrews 10:24",
        scripturePrimaryText:
          "And let us consider how to provoke one another to love and good deeds,",
        reflection:
          "Christ speaks in Hebrews 10:24\u2014\"And let us consider how to provoke one another to love and good deeds,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Hebrews 10:24 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Hebrews 10:24 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Hebrews 10:24 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Hebrews 10:24.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Hebrews 10:24 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-13": {
        scripturePrimaryRef: "1 Peter 3:8",
        scripturePrimaryText:
          "Finally, all of you, have unity of spirit, sympathy, love for one another, a tender heart, and a humble mind.",
        reflection:
          "Christ speaks in 1 Peter 3:8\u2014\"Finally, all of you, have unity of spirit, sympathy, love for one another, a tender heart, and a humble mind.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Peter 3:8 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy 1 Peter 3:8 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Peter 3:8 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Peter 3:8.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Peter 3:8 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-15": {
        scripturePrimaryRef: "1 John 3:18",
        scripturePrimaryText:
          "Little children, let us love, not in word or speech, but in truth and action.",
        reflection:
          "Christ speaks in 1 John 3:18\u2014\"Little children, let us love, not in word or speech, but in truth and action.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 John 3:18 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with 1 John 3:18 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 John 3:18 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 John 3:18.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 John 3:18 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-16": {
        scripturePrimaryRef: "Daniel 3:17",
        scripturePrimaryText:
          "If our God whom we serve is able to deliver us from the furnace of blazing fire and out of your hand, O king, let him deliver us.",
        reflection:
          "Christ speaks in Daniel 3:17\u2014\"If our God whom we serve is able to deliver us from the furnace of blazing fire and out of your hand, O king, let him de\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Daniel 3:17 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Daniel 3:17 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Daniel 3:17 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Daniel 3:17.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Daniel 3:17 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-17": {
        scripturePrimaryRef: "Esther 4:14",
        scripturePrimaryText:
          "Perhaps you have come into royal dignity for such a time as this.",
        reflection:
          "Christ speaks in Esther 4:14\u2014\"Perhaps you have come into royal dignity for such a time as this.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Esther 4:14 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Esther 4:14 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Esther 4:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Esther 4:14.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Esther 4:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-18": {
        scripturePrimaryRef: "Nehemiah 8:10",
        scripturePrimaryText:
          "Then he said to them, \"Go your way, eat the fat and drink sweet wine and send portions of them to those for whom nothing is prepared, for this day is holy to our Lord; and do not be grieved, for the joy of the Lord is your strength.\"",
        reflection:
          "Christ speaks in Nehemiah 8:10\u2014\"Then he said to them, \"Go your way, eat the fat and drink sweet wine and send portions of them to those for whom nothing\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Nehemiah 8:10 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Nehemiah 8:10 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Nehemiah 8:10 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Nehemiah 8:10.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Nehemiah 8:10 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-19": {
        scripturePrimaryRef: "Psalm 46:10",
        scripturePrimaryText:
          "Be still, and know that I am God! I am exalted among the nations, I am exalted in the earth.",
        reflection:
          "Christ speaks in Psalm 46:10\u2014\"Be still, and know that I am God! I am exalted among the nations, I am exalted in the earth.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 46:10 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Psalm 46:10 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 46:10 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 46:10.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 46:10 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-20": {
        scripturePrimaryRef: "Psalm 62:5",
        scripturePrimaryText:
          "For God alone my soul waits in silence, for my hope is from him.",
        reflection:
          "Christ speaks in Psalm 62:5\u2014\"For God alone my soul waits in silence, for my hope is from him.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 62:5 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Psalm 62:5 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 62:5 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 62:5.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 62:5 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-21": {
        scripturePrimaryRef: "Psalm 121:1-2",
        scripturePrimaryText:
          "I lift up my eyes to the hills\u2014 from where will my help come? My help comes from the Lord, who made heaven and earth.",
        reflection:
          "Christ speaks in Psalm 121:1-2\u2014\"I lift up my eyes to the hills\u2014 from where will my help come? My help comes from the Lord, who made heaven and earth.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 121:1-2 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Psalm 121:1-2 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 121:1-2 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 121:1-2.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 121:1-2 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-22": {
        scripturePrimaryRef: "Proverbs 3:11-12",
        scripturePrimaryText:
          "My child, do not despise the Lord's discipline or be weary of his reproof, for the Lord reproves the one he loves, as a father the son in whom he delights.",
        reflection:
          "Christ speaks in Proverbs 3:11-12\u2014\"My child, do not despise the Lord's discipline or be weary of his reproof, for the Lord reproves the one he loves, as a \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Proverbs 3:11-12 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Proverbs 3:11-12 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Proverbs 3:11-12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Proverbs 3:11-12.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Proverbs 3:11-12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-23": {
        scripturePrimaryRef: "Isaiah 40:29",
        scripturePrimaryText:
          "He gives power to the faint, and strengthens the powerless.",
        reflection:
          "Christ speaks in Isaiah 40:29\u2014\"He gives power to the faint, and strengthens the powerless.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Isaiah 40:29 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Isaiah 40:29 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Isaiah 40:29 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Isaiah 40:29.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Isaiah 40:29 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-24": {
        scripturePrimaryRef: "Isaiah 41:10",
        scripturePrimaryText:
          "Do not fear, for I am with you, do not be afraid, for I am your God; I will strengthen you, I will help you, I will uphold you with my victorious right hand.",
        reflection:
          "Christ speaks in Isaiah 41:10\u2014\"Do not fear, for I am with you, do not be afraid, for I am your God; I will strengthen you, I will help you, I will upho\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Isaiah 41:10 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Isaiah 41:10 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Isaiah 41:10 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Isaiah 41:10.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Isaiah 41:10 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-25": {
        scripturePrimaryRef: "Jeremiah 29:12",
        scripturePrimaryText:
          "Then when you call upon me and come and pray to me, I will hear you.",
        reflection:
          "Christ speaks in Jeremiah 29:12\u2014\"Then when you call upon me and come and pray to me, I will hear you.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Jeremiah 29:12 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Jeremiah 29:12 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Jeremiah 29:12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Jeremiah 29:12.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Jeremiah 29:12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-26": {
        scripturePrimaryRef: "Lamentations 3:22-23",
        scripturePrimaryText:
          "The steadfast love of the Lord never ceases, his mercies never come to an end; they are new every morning; great is your faithfulness.",
        reflection:
          "Christ speaks in Lamentations 3:22-23\u2014\"The steadfast love of the Lord never ceases, his mercies never come to an end; they are new every morning; great is your\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Lamentations 3:22-23 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Lamentations 3:22-23 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Lamentations 3:22-23 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Lamentations 3:22-23.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Lamentations 3:22-23 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-27": {
        scripturePrimaryRef: "Ezekiel 36:26",
        scripturePrimaryText:
          "A new heart I will give you, and a new spirit I will put within you; and I will remove from your body the heart of stone and give you a heart of flesh.",
        reflection:
          "Christ speaks in Ezekiel 36:26\u2014\"A new heart I will give you, and a new spirit I will put within you; and I will remove from your body the heart of stone\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Ezekiel 36:26 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Ezekiel 36:26 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Ezekiel 36:26 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Ezekiel 36:26.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Ezekiel 36:26 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-28": {
        scripturePrimaryRef: "Hosea 6:1",
        scripturePrimaryText:
          "Come, let us return to the Lord; for it is he who has torn, and he will heal us; he has struck down, and he will bind us up.",
        reflection:
          "Christ speaks in Hosea 6:1\u2014\"Come, let us return to the Lord; for it is he who has torn, and he will heal us; he has struck down, and he will bind us\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Hosea 6:1 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Hosea 6:1 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Hosea 6:1 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Hosea 6:1.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Hosea 6:1 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-29": {
        scripturePrimaryRef: "Joel 2:13",
        scripturePrimaryText:
          "Return to the Lord, your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love, and relents from punishing.",
        reflection:
          "Christ speaks in Joel 2:13\u2014\"Return to the Lord, your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love, and relen\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Joel 2:13 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Joel 2:13 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Joel 2:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Joel 2:13.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Joel 2:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "09-30": {
        scripturePrimaryRef: "Jonah 2:2",
        scripturePrimaryText:
          "saying, \"I called to the Lord out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice.\"",
        reflection:
          "Christ speaks in Jonah 2:2\u2014\"saying, \"I called to the Lord out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard m\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Back to Basics: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Jonah 2:2 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Jonah 2:2 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Jonah 2:2 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Jonah 2:2.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Jonah 2:2 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-01": {
        scripturePrimaryRef: "Nahum 1:7",
        scripturePrimaryText:
          "The Lord is good, a stronghold on a day of trouble; he protects those who take refuge in him,",
        reflection:
          "Christ speaks in Nahum 1:7\u2014\"The Lord is good, a stronghold on a day of trouble; he protects those who take refuge in him,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Nahum 1:7 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Nahum 1:7 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Nahum 1:7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Nahum 1:7.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Nahum 1:7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-02": {
        scripturePrimaryRef: "Habakkuk 3:18-19",
        scripturePrimaryText:
          "yet I will rejoice in the Lord; I will exult in the God of my salvation. God, the Lord, is my strength; he makes my feet like the feet of a deer, and makes me tread upon the heights.",
        reflection:
          "Christ speaks in Habakkuk 3:18-19\u2014\"yet I will rejoice in the Lord; I will exult in the God of my salvation. God, the Lord, is my strength; he makes my feet\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Habakkuk 3:18-19 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Habakkuk 3:18-19 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Habakkuk 3:18-19 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Habakkuk 3:18-19.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Habakkuk 3:18-19 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-03": {
        scripturePrimaryRef: "Zephaniah 3:17",
        scripturePrimaryText:
          "The Lord, your God, is in your midst, a warrior who gives victory; he will rejoice over you with gladness, he will renew you in his love; he will exult over you with loud singing",
        reflection:
          "Christ speaks in Zephaniah 3:17\u2014\"The Lord, your God, is in your midst, a warrior who gives victory; he will rejoice over you with gladness, he will renew\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Zephaniah 3:17 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Zephaniah 3:17 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Zephaniah 3:17 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Zephaniah 3:17.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Zephaniah 3:17 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-04": {
        scripturePrimaryRef: "Malachi 3:10",
        scripturePrimaryText:
          "Bring the full tithe into the storehouse, so that there may be food in my house, and thus put me to the test, says the Lord of hosts; see if I will not open the windows of heaven for you and pour down for you an overflowing blessing.",
        reflection:
          "Christ speaks in Malachi 3:10\u2014\"Bring the full tithe into the storehouse, so that there may be food in my house, and thus put me to the test, says the L\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Malachi 3:10 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Malachi 3:10 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Malachi 3:10 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Malachi 3:10.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Malachi 3:10 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-05": {
        scripturePrimaryRef: "Matthew 5:16",
        scripturePrimaryText:
          "In the same way, let your light shine before others, so that they may see your good works and give glory to your Father in heaven.",
        reflection:
          "Christ speaks in Matthew 5:16\u2014\"In the same way, let your light shine before others, so that they may see your good works and give glory to your Father \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 5:16 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Matthew 5:16 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 5:16 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 5:16.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 5:16 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-06": {
        scripturePrimaryRef: "Matthew 7:7",
        scripturePrimaryText:
          "\"Ask, and it will be given you; search, and you will find; knock, and the door will be opened for you.\"",
        reflection:
          "Christ speaks in Matthew 7:7\u2014\"\"Ask, and it will be given you; search, and you will find; knock, and the door will be opened for you.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 7:7 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Matthew 7:7 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 7:7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 7:7.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 7:7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-08": {
        scripturePrimaryRef: "Matthew 11:28",
        scripturePrimaryText:
          "\"Come to me, all you that are weary and are carrying heavy burdens, and I will give you rest.\"",
        reflection:
          "Christ speaks in Matthew 11:28\u2014\"\"Come to me, all you that are weary and are carrying heavy burdens, and I will give you rest.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 11:28 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Matthew 11:28 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 11:28 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 11:28.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 11:28 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-09": {
        scripturePrimaryRef: "Matthew 18:20",
        scripturePrimaryText:
          "For where two or three are gathered in my name, I am there among them.\"",
        reflection:
          "Christ speaks in Matthew 18:20\u2014\"For where two or three are gathered in my name, I am there among them.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 18:20 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Matthew 18:20 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 18:20 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 18:20.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 18:20 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-10": {
        scripturePrimaryRef: "Mark 10:45",
        scripturePrimaryText:
          "For the Son of Man came not to be served but to serve, and to give his life a ransom for many.\"",
        reflection:
          "Christ speaks in Mark 10:45\u2014\"For the Son of Man came not to be served but to serve, and to give his life a ransom for many.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Mark 10:45 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Mark 10:45 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Mark 10:45 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Mark 10:45.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Mark 10:45 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-11": {
        scripturePrimaryRef: "Luke 6:38",
        scripturePrimaryText:
          "give, and it will be given to you. A good measure, pressed down, shaken together, running over, will be put into your lap; for the measure you give will be the measure you get back.\"",
        reflection:
          "Christ speaks in Luke 6:38\u2014\"give, and it will be given to you. A good measure, pressed down, shaken together, running over, will be put into your la\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 6:38 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Luke 6:38 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 6:38 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 6:38.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 6:38 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-12": {
        scripturePrimaryRef: "Luke 10:27",
        scripturePrimaryText:
          "He answered, \"You shall love the Lord your God with all your heart, and with all your soul, and with all your strength, and with all your mind; and your neighbor as yourself.\"",
        reflection:
          "Christ speaks in Luke 10:27\u2014\"He answered, \"You shall love the Lord your God with all your heart, and with all your soul, and with all your strength, \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 10:27 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Luke 10:27 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 10:27 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 10:27.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 10:27 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-13": {
        scripturePrimaryRef: "John 3:16",
        scripturePrimaryText:
          "For God so loved the world that he gave his only Son, so that everyone who believes in him may not perish but may have eternal life.",
        reflection:
          "Christ speaks in John 3:16\u2014\"For God so loved the world that he gave his only Son, so that everyone who believes in him may not perish but may have e\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 3:16 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy John 3:16 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 3:16 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 3:16.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 3:16 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-14": {
        scripturePrimaryRef: "John 8:12",
        scripturePrimaryText:
          "Again Jesus spoke to them, saying, \"I am the light of the world. Whoever follows me will never walk in darkness but will have the light of life.\"",
        reflection:
          "Christ speaks in John 8:12\u2014\"Again Jesus spoke to them, saying, \"I am the light of the world. Whoever follows me will never walk in darkness but will\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 8:12 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how John 8:12 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 8:12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 8:12.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 8:12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-15": {
        scripturePrimaryRef: "John 13:14",
        scripturePrimaryText:
          "So if I, your Lord and Teacher, have washed your feet, you also ought to wash one another's feet.",
        reflection:
          "Christ speaks in John 13:14\u2014\"So if I, your Lord and Teacher, have washed your feet, you also ought to wash one another's feet.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 13:14 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with John 13:14 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 13:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 13:14.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 13:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-16": {
        scripturePrimaryRef: "John 15:13",
        scripturePrimaryText:
          "No one has greater love than this, to lay down one's life for one's friends.",
        reflection:
          "Christ speaks in John 15:13\u2014\"No one has greater love than this, to lay down one's life for one's friends.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 15:13 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with John 15:13 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 15:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 15:13.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 15:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-17": {
        scripturePrimaryRef: "Acts 4:12",
        scripturePrimaryText:
          "There is salvation in no one else, for there is no other name under heaven given among mortals by which we must be saved.\"",
        reflection:
          "Christ speaks in Acts 4:12\u2014\"There is salvation in no one else, for there is no other name under heaven given among mortals by which we must be saved\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Acts 4:12 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Acts 4:12 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Acts 4:12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Acts 4:12.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Acts 4:12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-18": {
        scripturePrimaryRef: "Acts 20:35",
        scripturePrimaryText:
          "In all this I have given you an example that by such work we must support the weak, remembering the words of the Lord Jesus, for he himself said, 'It is more blessed to give than to receive.'\"",
        reflection:
          "Christ speaks in Acts 20:35\u2014\"In all this I have given you an example that by such work we must support the weak, remembering the words of the Lord Je\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Acts 20:35 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Acts 20:35 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Acts 20:35 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Acts 20:35.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Acts 20:35 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-19": {
        scripturePrimaryRef: "Romans 5:3-5",
        scripturePrimaryText:
          "And not only that, but we also boast in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not disappoint us, because God's love has been poured into our hearts through the Holy Spirit that has been given to us.",
        reflection:
          "Christ speaks in Romans 5:3-5\u2014\"And not only that, but we also boast in our sufferings, knowing that suffering produces endurance, and endurance produce\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 5:3-5 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Romans 5:3-5 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 5:3-5 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 5:3-5.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 5:3-5 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-20": {
        scripturePrimaryRef: "Romans 8:1",
        scripturePrimaryText:
          "There is therefore now no condemnation for those who are in Christ Jesus.",
        reflection:
          "Christ speaks in Romans 8:1\u2014\"There is therefore now no condemnation for those who are in Christ Jesus.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 8:1 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Romans 8:1 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 8:1 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 8:1.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 8:1 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-21": {
        scripturePrimaryRef: "Romans 12:21",
        scripturePrimaryText:
          "Do not be overcome by evil, but overcome evil with good.",
        reflection:
          "Christ speaks in Romans 12:21\u2014\"Do not be overcome by evil, but overcome evil with good.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Romans 12:21 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Romans 12:21 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Romans 12:21 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Romans 12:21.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Romans 12:21 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-22": {
        scripturePrimaryRef: "1 Corinthians 10:13",
        scripturePrimaryText:
          "No testing has overtaken you that is not common to everyone. God is faithful, and he will not let you be tested beyond your strength, but with the testing he will also provide the way out so that you may be able to endure it.",
        reflection:
          "Christ speaks in 1 Corinthians 10:13\u2014\"No testing has overtaken you that is not common to everyone. God is faithful, and he will not let you be tested beyond y\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Corinthians 10:13 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying 1 Corinthians 10:13 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Corinthians 10:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Corinthians 10:13.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Corinthians 10:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-23": {
        scripturePrimaryRef: "2 Corinthians 1:3-4",
        scripturePrimaryText:
          "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and the God of all consolation, who consoles us in all our affliction, so that we may be able to console those who are in any affliction with the consolation with which we ourselves are consoled by God.",
        reflection:
          "Christ speaks in 2 Corinthians 1:3-4\u2014\"Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and the God of all consolation, who consol\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 2 Corinthians 1:3-4 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy 2 Corinthians 1:3-4 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 2 Corinthians 1:3-4 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 2 Corinthians 1:3-4.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 2 Corinthians 1:3-4 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-24": {
        scripturePrimaryRef: "2 Corinthians 9:7",
        scripturePrimaryText:
          "Each of you must give as you have made up your mind, not reluctantly or under compulsion, for God loves a cheerful giver.",
        reflection:
          "Christ speaks in 2 Corinthians 9:7\u2014\"Each of you must give as you have made up your mind, not reluctantly or under compulsion, for God loves a cheerful giver\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 2 Corinthians 9:7 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how 2 Corinthians 9:7 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 2 Corinthians 9:7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 2 Corinthians 9:7.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 2 Corinthians 9:7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-25": {
        scripturePrimaryRef: "Galatians 6:2",
        scripturePrimaryText:
          "Bear one another's burdens, and in this way you will fulfill the law of Christ.",
        reflection:
          "Christ speaks in Galatians 6:2\u2014\"Bear one another's burdens, and in this way you will fulfill the law of Christ.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Galatians 6:2 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Galatians 6:2 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Galatians 6:2 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Galatians 6:2.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Galatians 6:2 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-26": {
        scripturePrimaryRef: "Ephesians 2:8-9",
        scripturePrimaryText:
          "For by grace you have been saved through faith, and this is not your own doing; it is the gift of God\u2014 not the result of works, so that no one may boast.",
        reflection:
          "Christ speaks in Ephesians 2:8-9\u2014\"For by grace you have been saved through faith, and this is not your own doing; it is the gift of God\u2014 not the result of\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Ephesians 2:8-9 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Ephesians 2:8-9 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Ephesians 2:8-9 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Ephesians 2:8-9.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Ephesians 2:8-9 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-27": {
        scripturePrimaryRef: "Ephesians 5:25",
        scripturePrimaryText:
          "Husbands, love your wives, just as Christ loved the church and gave himself up for her,",
        reflection:
          "Christ speaks in Ephesians 5:25\u2014\"Husbands, love your wives, just as Christ loved the church and gave himself up for her,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Ephesians 5:25 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Ephesians 5:25 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Ephesians 5:25 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Ephesians 5:25.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Ephesians 5:25 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-28": {
        scripturePrimaryRef: "Philippians 2:5",
        scripturePrimaryText:
          "Let the same mind be in you that was in Christ Jesus,",
        reflection:
          "Christ speaks in Philippians 2:5\u2014\"Let the same mind be in you that was in Christ Jesus,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Philippians 2:5 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Philippians 2:5 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Philippians 2:5 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Philippians 2:5.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Philippians 2:5 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-29": {
        scripturePrimaryRef: "Philippians 4:13",
        scripturePrimaryText:
          "I can do all things through him who strengthens me.",
        reflection:
          "Christ speaks in Philippians 4:13\u2014\"I can do all things through him who strengthens me.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Philippians 4:13 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Philippians 4:13 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Philippians 4:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Philippians 4:13.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Philippians 4:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-30": {
        scripturePrimaryRef: "Colossians 3:23",
        scripturePrimaryText:
          "Whatever your task, put yourselves into it, as done for the Lord and not for your masters,",
        reflection:
          "Christ speaks in Colossians 3:23\u2014\"Whatever your task, put yourselves into it, as done for the Lord and not for your masters,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Colossians 3:23 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Colossians 3:23 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Colossians 3:23 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Colossians 3:23.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Colossians 3:23 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "10-31": {
        scripturePrimaryRef: "1 Thessalonians 4:11",
        scripturePrimaryText:
          "and to aspire to live quietly, to mind your own affairs, and to work with your hands, as we directed you,",
        reflection:
          "Christ speaks in 1 Thessalonians 4:11\u2014\"and to aspire to live quietly, to mind your own affairs, and to work with your hands, as we directed you,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear The Rosary and Spiritual Warfare: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Thessalonians 4:11 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with 1 Thessalonians 4:11 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Thessalonians 4:11 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Thessalonians 4:11.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Thessalonians 4:11 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-03": {
        scripturePrimaryRef: "2 Thessalonians 3:13",
        scripturePrimaryText:
          "Brothers and sisters, do not be weary in doing what is right.",
        reflection:
          "Christ speaks in 2 Thessalonians 3:13\u2014\"Brothers and sisters, do not be weary in doing what is right.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 2 Thessalonians 3:13 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy 2 Thessalonians 3:13 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 2 Thessalonians 3:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 2 Thessalonians 3:13.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 2 Thessalonians 3:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-04": {
        scripturePrimaryRef: "1 Timothy 6:11",
        scripturePrimaryText:
          "But as for you, man of God, shun all this; pursue righteousness, godliness, faith, love, endurance, gentleness.",
        reflection:
          "Christ speaks in 1 Timothy 6:11\u2014\"But as for you, man of God, shun all this; pursue righteousness, godliness, faith, love, endurance, gentleness.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Timothy 6:11 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how 1 Timothy 6:11 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Timothy 6:11 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Timothy 6:11.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Timothy 6:11 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-05": {
        scripturePrimaryRef: "2 Timothy 2:1",
        scripturePrimaryText:
          "You then, my child, be strong in the grace that is in Christ Jesus;",
        reflection:
          "Christ speaks in 2 Timothy 2:1\u2014\"You then, my child, be strong in the grace that is in Christ Jesus;\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 2 Timothy 2:1 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with 2 Timothy 2:1 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 2 Timothy 2:1 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 2 Timothy 2:1.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 2 Timothy 2:1 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-06": {
        scripturePrimaryRef: "Titus 2:2",
        scripturePrimaryText:
          "Tell the older men to be temperate, serious, prudent, and sound in faith, in love, and in endurance.",
        reflection:
          "Christ speaks in Titus 2:2\u2014\"Tell the older men to be temperate, serious, prudent, and sound in faith, in love, and in endurance.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Titus 2:2 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Titus 2:2 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Titus 2:2 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Titus 2:2.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Titus 2:2 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-07": {
        scripturePrimaryRef: "Philemon 1:20",
        scripturePrimaryText:
          "Yes, brother, let me have this benefit from you in the Lord! Refresh my heart in Christ.",
        reflection:
          "Christ speaks in Philemon 1:20\u2014\"Yes, brother, let me have this benefit from you in the Lord! Refresh my heart in Christ.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Philemon 1:20 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Philemon 1:20 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Philemon 1:20 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Philemon 1:20.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Philemon 1:20 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-08": {
        scripturePrimaryRef: "Hebrews 12:1",
        scripturePrimaryText:
          "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight and the sin that clings so closely, and let us run with perseverance the race that is set before us,",
        reflection:
          "Christ speaks in Hebrews 12:1\u2014\"Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight and the sin that\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Hebrews 12:1 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Hebrews 12:1 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Hebrews 12:1 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Hebrews 12:1.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Hebrews 12:1 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-09": {
        scripturePrimaryRef: "James 1:12",
        scripturePrimaryText:
          "Blessed is anyone who endures temptation. Such a one has stood the test and will receive the crown of life that the Lord has promised to those who love him.",
        reflection:
          "Christ speaks in James 1:12\u2014\"Blessed is anyone who endures temptation. Such a one has stood the test and will receive the crown of life that the Lord\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard James 1:12 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how James 1:12 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because James 1:12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in James 1:12.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did James 1:12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-10": {
        scripturePrimaryRef: "1 Peter 5:6-7",
        scripturePrimaryText:
          "Humble yourselves therefore under the mighty hand of God, so that he may exalt you in due time. Cast all your anxiety on him, because he cares for you.",
        reflection:
          "Christ speaks in 1 Peter 5:6-7\u2014\"Humble yourselves therefore under the mighty hand of God, so that he may exalt you in due time. Cast all your anxiety on\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Peter 5:6-7 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with 1 Peter 5:6-7 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Peter 5:6-7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Peter 5:6-7.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Peter 5:6-7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-11": {
        scripturePrimaryRef: "2 Peter 1:5-7",
        scripturePrimaryText:
          "For this very reason, you must make every effort to support your faith with goodness, and goodness with knowledge, and knowledge with self-control, and self-control with endurance, and endurance with godliness, and godliness with mutual affection, and mutual affection with love.",
        reflection:
          "Christ speaks in 2 Peter 1:5-7\u2014\"For this very reason, you must make every effort to support your faith with goodness, and goodness with knowledge, and k\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 2 Peter 1:5-7 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with 2 Peter 1:5-7 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 2 Peter 1:5-7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 2 Peter 1:5-7.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 2 Peter 1:5-7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-12": {
        scripturePrimaryRef: "1 John 1:9",
        scripturePrimaryText:
          "If we confess our sins, he who is faithful and just will forgive us our sins and cleanse us from all unrighteousness.",
        reflection:
          "Christ speaks in 1 John 1:9\u2014\"If we confess our sins, he who is faithful and just will forgive us our sins and cleanse us from all unrighteousness.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 John 1:9 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying 1 John 1:9 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 John 1:9 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 John 1:9.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 John 1:9 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-13": {
        scripturePrimaryRef: "3 John 1:11",
        scripturePrimaryText:
          "Beloved, do not imitate what is evil but imitate what is good. Whoever does good is from God; whoever does evil has not seen God.",
        reflection:
          "Christ speaks in 3 John 1:11\u2014\"Beloved, do not imitate what is evil but imitate what is good. Whoever does good is from God; whoever does evil has not \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 3 John 1:11 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy 3 John 1:11 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 3 John 1:11 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 3 John 1:11.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 3 John 1:11 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-14": {
        scripturePrimaryRef: "Revelation 3:20",
        scripturePrimaryText:
          "Listen! I am standing at the door, knocking; if you hear my voice and open the door, I will come in to you and eat with you, and you with me.",
        reflection:
          "Christ speaks in Revelation 3:20\u2014\"Listen! I am standing at the door, knocking; if you hear my voice and open the door, I will come in to you and eat with \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Revelation 3:20 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Revelation 3:20 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Revelation 3:20 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Revelation 3:20.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Revelation 3:20 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-15": {
        scripturePrimaryRef: "Sirach 1:14",
        scripturePrimaryText:
          "To fear the Lord is the beginning of wisdom; she is created with the faithful in the womb.",
        reflection:
          "Christ speaks in Sirach 1:14\u2014\"To fear the Lord is the beginning of wisdom; she is created with the faithful in the womb.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Sirach 1:14 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Sirach 1:14 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Sirach 1:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Sirach 1:14.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Sirach 1:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-16": {
        scripturePrimaryRef: "Wisdom 1:13",
        scripturePrimaryText:
          "God did not make death, and he does not delight in the death of the living.",
        reflection:
          "Christ speaks in Wisdom 1:13\u2014\"God did not make death, and he does not delight in the death of the living.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Wisdom 1:13 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Wisdom 1:13 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Wisdom 1:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Wisdom 1:13.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Wisdom 1:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-17": {
        scripturePrimaryRef: "Baruch 4:28",
        scripturePrimaryText:
          "As your children have endured the punishment that came from God upon the righteous nation, so now you also will receive mercy from God.",
        reflection:
          "Christ speaks in Baruch 4:28\u2014\"As your children have endured the punishment that came from God upon the righteous nation, so now you also will receive \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Baruch 4:28 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Baruch 4:28 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Baruch 4:28 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Baruch 4:28.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Baruch 4:28 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-18": {
        scripturePrimaryRef: "Judith 8:27",
        scripturePrimaryText:
          "Listen closely, my children, to my words; do not disregard what I say.",
        reflection:
          "Christ speaks in Judith 8:27\u2014\"Listen closely, my children, to my words; do not disregard what I say.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Judith 8:27 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Judith 8:27 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Judith 8:27 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Judith 8:27.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Judith 8:27 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-19": {
        scripturePrimaryRef: "Tobit 12:12",
        scripturePrimaryText:
          "So, when you and Sarah prayed, I brought a reminder of your prayer before the Glory of the Lord; and likewise whenever you buried the dead.",
        reflection:
          "Christ speaks in Tobit 12:12\u2014\"So, when you and Sarah prayed, I brought a reminder of your prayer before the Glory of the Lord; and likewise whenever y\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Tobit 12:12 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Tobit 12:12 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Tobit 12:12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Tobit 12:12.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Tobit 12:12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-20": {
        scripturePrimaryRef: "Genesis 22:12",
        scripturePrimaryText:
          "He said, \"Do not lay your hand on the boy or do anything to him; for now I know that you fear God, since you have not withheld your son, your only son, from me.\"",
        reflection:
          "Christ speaks in Genesis 22:12\u2014\"He said, \"Do not lay your hand on the boy or do anything to him; for now I know that you fear God, since you have not wi\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Genesis 22:12 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Genesis 22:12 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Genesis 22:12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Genesis 22:12.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Genesis 22:12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-21": {
        scripturePrimaryRef: "Exodus 20:12",
        scripturePrimaryText:
          "Honor your father and your mother, so that your days may be long in the land that the Lord your God is giving you.",
        reflection:
          "Christ speaks in Exodus 20:12\u2014\"Honor your father and your mother, so that your days may be long in the land that the Lord your God is giving you.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Exodus 20:12 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Exodus 20:12 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Exodus 20:12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Exodus 20:12.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Exodus 20:12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-22": {
        scripturePrimaryRef: "Leviticus 19:18",
        scripturePrimaryText:
          "You shall not take vengeance or bear a grudge against any of your people, but you shall love your neighbor as yourself: I am the Lord.",
        reflection:
          "Christ speaks in Leviticus 19:18\u2014\"You shall not take vengeance or bear a grudge against any of your people, but you shall love your neighbor as yourself: \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Leviticus 19:18 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Leviticus 19:18 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Leviticus 19:18 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Leviticus 19:18.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Leviticus 19:18 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-23": {
        scripturePrimaryRef: "Numbers 6:24-26",
        scripturePrimaryText:
          "The Lord bless you and keep you; the Lord make his face to shine upon you, and be gracious to you; the Lord lift up his countenance upon you, and give you peace.",
        reflection:
          "Christ speaks in Numbers 6:24-26\u2014\"The Lord bless you and keep you; the Lord make his face to shine upon you, and be gracious to you; the Lord lift up his \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Numbers 6:24-26 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Numbers 6:24-26 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Numbers 6:24-26 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Numbers 6:24-26.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Numbers 6:24-26 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-24": {
        scripturePrimaryRef: "Deuteronomy 4:9",
        scripturePrimaryText:
          "But take care and watch yourselves closely, so as not to forget the things that your eyes have seen or to let them slip from your mind all the days of your life; make them known to your children and your children's children,",
        reflection:
          "Christ speaks in Deuteronomy 4:9\u2014\"But take care and watch yourselves closely, so as not to forget the things that your eyes have seen or to let them slip \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Deuteronomy 4:9 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Deuteronomy 4:9 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Deuteronomy 4:9 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Deuteronomy 4:9.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Deuteronomy 4:9 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-25": {
        scripturePrimaryRef: "Joshua 24:15",
        scripturePrimaryText:
          "And if it is evil in your eyes to serve the Lord, choose this day whom you will serve, whether the gods your ancestors served in the region beyond the River or the gods of the Amorites in whose land you are living; but as for me and my household, we will serve the Lord.\"",
        reflection:
          "Christ speaks in Joshua 24:15\u2014\"And if it is evil in your eyes to serve the Lord, choose this day whom you will serve, whether the gods your ancestors s\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Joshua 24:15 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Joshua 24:15 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Joshua 24:15 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Joshua 24:15.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Joshua 24:15 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-26": {
        scripturePrimaryRef: "1 Samuel 12:24",
        scripturePrimaryText:
          "Only fear the Lord, and serve him faithfully with all your heart; for consider what great things he has done for you.",
        reflection:
          "Christ speaks in 1 Samuel 12:24\u2014\"Only fear the Lord, and serve him faithfully with all your heart; for consider what great things he has done for you.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Samuel 12:24 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with 1 Samuel 12:24 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Samuel 12:24 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Samuel 12:24.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Samuel 12:24 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-27": {
        scripturePrimaryRef: "2 Samuel 22:31",
        scripturePrimaryText:
          "This God\u2014his way is perfect; the promise of the Lord proves true; he is a shield for all who take refuge in him.",
        reflection:
          "Christ speaks in 2 Samuel 22:31\u2014\"This God\u2014his way is perfect; the promise of the Lord proves true; he is a shield for all who take refuge in him.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 2 Samuel 22:31 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying 2 Samuel 22:31 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 2 Samuel 22:31 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 2 Samuel 22:31.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 2 Samuel 22:31 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-28": {
        scripturePrimaryRef: "1 Kings 8:61",
        scripturePrimaryText:
          "Let your hearts therefore be wholly true to the Lord our God, walking in his statutes and keeping his commandments, as at this day.\"",
        reflection:
          "Christ speaks in 1 Kings 8:61\u2014\"Let your hearts therefore be wholly true to the Lord our God, walking in his statutes and keeping his commandments, as a\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 1 Kings 8:61 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy 1 Kings 8:61 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 1 Kings 8:61 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 1 Kings 8:61.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 1 Kings 8:61 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "11-30": {
        scripturePrimaryRef: "2 Chronicles 7:14",
        scripturePrimaryText:
          "if my people who are called by my name humble themselves, pray, seek my face, and turn from their wicked ways, then I will hear from heaven, and will forgive their sin and heal their land.",
        reflection:
          "Christ speaks in 2 Chronicles 7:14\u2014\"if my people who are called by my name humble themselves, pray, seek my face, and turn from their wicked ways, then I wi\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Last Things: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard 2 Chronicles 7:14 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with 2 Chronicles 7:14 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because 2 Chronicles 7:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in 2 Chronicles 7:14.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did 2 Chronicles 7:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-01": {
        scripturePrimaryRef: "Ezra 8:23",
        scripturePrimaryText:
          "So we fasted and petitioned our God for this, and he listened to our entreaty.",
        reflection:
          "Christ speaks in Ezra 8:23\u2014\"So we fasted and petitioned our God for this, and he listened to our entreaty.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Ezra 8:23 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Ezra 8:23 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Ezra 8:23 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Ezra 8:23.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Ezra 8:23 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-02": {
        scripturePrimaryRef: "Nehemiah 4:14",
        scripturePrimaryText:
          "Do not be afraid of them. Remember the Lord, who is great and awesome, and fight for your kin, your sons, your daughters, your wives, and your homes.\"",
        reflection:
          "Christ speaks in Nehemiah 4:14\u2014\"Do not be afraid of them. Remember the Lord, who is great and awesome, and fight for your kin, your sons, your daughters\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Nehemiah 4:14 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Nehemiah 4:14 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Nehemiah 4:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Nehemiah 4:14.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Nehemiah 4:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-03": {
        scripturePrimaryRef: "Job 19:25",
        scripturePrimaryText:
          "For I know that my Redeemer lives, and that at the last he will stand upon the earth;",
        reflection:
          "Christ speaks in Job 19:25\u2014\"For I know that my Redeemer lives, and that at the last he will stand upon the earth;\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Job 19:25 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Job 19:25 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Job 19:25 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Job 19:25.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Job 19:25 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-04": {
        scripturePrimaryRef: "Psalm 4:8",
        scripturePrimaryText:
          "I will both lie down and sleep in peace; for you alone, O Lord, make me lie down in safety.",
        reflection:
          "Christ speaks in Psalm 4:8\u2014\"I will both lie down and sleep in peace; for you alone, O Lord, make me lie down in safety.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 4:8 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Psalm 4:8 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 4:8 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 4:8.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 4:8 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-05": {
        scripturePrimaryRef: "Psalm 19:14",
        scripturePrimaryText:
          "Let the words of my mouth and the meditation of my heart be acceptable to you, O Lord, my rock and my redeemer.",
        reflection:
          "Christ speaks in Psalm 19:14\u2014\"Let the words of my mouth and the meditation of my heart be acceptable to you, O Lord, my rock and my redeemer.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 19:14 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Psalm 19:14 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 19:14 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 19:14.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 19:14 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-06": {
        scripturePrimaryRef: "Psalm 37:5",
        scripturePrimaryText:
          "Commit your way to the Lord; trust in him, and he will act.",
        reflection:
          "Christ speaks in Psalm 37:5\u2014\"Commit your way to the Lord; trust in him, and he will act.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 37:5 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Psalm 37:5 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 37:5 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 37:5.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 37:5 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-07": {
        scripturePrimaryRef: "Psalm 51:17",
        scripturePrimaryText:
          "The sacrifice acceptable to God is a broken spirit; a broken and contrite heart, O God, you will not despise.",
        reflection:
          "Christ speaks in Psalm 51:17\u2014\"The sacrifice acceptable to God is a broken spirit; a broken and contrite heart, O God, you will not despise.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 51:17 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Psalm 51:17 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 51:17 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 51:17.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 51:17 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-09": {
        scripturePrimaryRef: "Psalm 90:12",
        scripturePrimaryText:
          "So teach us to count our days that we may gain a wise heart.",
        reflection:
          "Christ speaks in Psalm 90:12\u2014\"So teach us to count our days that we may gain a wise heart.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 90:12 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Psalm 90:12 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 90:12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 90:12.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 90:12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-10": {
        scripturePrimaryRef: "Psalm 103:13",
        scripturePrimaryText:
          "As a father has compassion for his children, so the Lord has compassion for those who fear him.",
        reflection:
          "Christ speaks in Psalm 103:13\u2014\"As a father has compassion for his children, so the Lord has compassion for those who fear him.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 103:13 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Psalm 103:13 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 103:13 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 103:13.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 103:13 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-11": {
        scripturePrimaryRef: "Psalm 127:1",
        scripturePrimaryText:
          "Unless the Lord builds the house, those who build it labor in vain. Unless the Lord guards the city, the guard keeps watch in vain.",
        reflection:
          "Christ speaks in Psalm 127:1\u2014\"Unless the Lord builds the house, those who build it labor in vain. Unless the Lord guards the city, the guard keeps wat\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 127:1 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Psalm 127:1 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 127:1 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 127:1.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 127:1 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-12": {
        scripturePrimaryRef: "Psalm 139:23-24",
        scripturePrimaryText:
          "Search me, O God, and know my heart; test me and know my thoughts. See if there is any wicked way in me, and lead me in the way everlasting.",
        reflection:
          "Christ speaks in Psalm 139:23-24\u2014\"Search me, O God, and know my heart; test me and know my thoughts. See if there is any wicked way in me, and lead me in \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Psalm 139:23-24 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Psalm 139:23-24 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Psalm 139:23-24 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Psalm 139:23-24.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Psalm 139:23-24 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-13": {
        scripturePrimaryRef: "Proverbs 16:3",
        scripturePrimaryText:
          "Commit your work to the Lord, and your plans will be established.",
        reflection:
          "Christ speaks in Proverbs 16:3\u2014\"Commit your work to the Lord, and your plans will be established.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Proverbs 16:3 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Proverbs 16:3 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Proverbs 16:3 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Proverbs 16:3.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Proverbs 16:3 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-14": {
        scripturePrimaryRef: "Proverbs 22:6",
        scripturePrimaryText:
          "Train children in the right way, and when old, they will not stray.",
        reflection:
          "Christ speaks in Proverbs 22:6\u2014\"Train children in the right way, and when old, they will not stray.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Proverbs 22:6 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Proverbs 22:6 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Proverbs 22:6 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Proverbs 22:6.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Proverbs 22:6 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-15": {
        scripturePrimaryRef: "Ecclesiastes 12:1",
        scripturePrimaryText:
          "Remember your creator in the days of your youth, before the days of trouble come and the years draw near when you will say, \"I have no pleasure in them\";\"",
        reflection:
          "Christ speaks in Ecclesiastes 12:1\u2014\"Remember your creator in the days of your youth, before the days of trouble come and the years draw near when you will s\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Ecclesiastes 12:1 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Ecclesiastes 12:1 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Ecclesiastes 12:1 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Ecclesiastes 12:1.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Ecclesiastes 12:1 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-16": {
        scripturePrimaryRef: "Isaiah 1:18",
        scripturePrimaryText:
          "Come now, let us argue it out, says the Lord: though your sins are like scarlet, they shall be like snow; though they are red like crimson, they shall become like wool.",
        reflection:
          "Christ speaks in Isaiah 1:18\u2014\"Come now, let us argue it out, says the Lord: though your sins are like scarlet, they shall be like snow; though they ar\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Isaiah 1:18 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Isaiah 1:18 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Isaiah 1:18 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Isaiah 1:18.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Isaiah 1:18 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-17": {
        scripturePrimaryRef: "Isaiah 26:12",
        scripturePrimaryText:
          "O Lord, you will ordain peace for us, for indeed, all that we have done you have done for us.",
        reflection:
          "Christ speaks in Isaiah 26:12\u2014\"O Lord, you will ordain peace for us, for indeed, all that we have done you have done for us.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Isaiah 26:12 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Isaiah 26:12 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Isaiah 26:12 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Isaiah 26:12.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Isaiah 26:12 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-18": {
        scripturePrimaryRef: "Isaiah 35:4",
        scripturePrimaryText:
          "Say to those who are of a fearful heart, \"Be strong, do not fear! Here is your God. He will come with vengeance, with terrible recompense. He will come and save you.\"",
        reflection:
          "Christ speaks in Isaiah 35:4\u2014\"Say to those who are of a fearful heart, \"Be strong, do not fear! Here is your God. He will come with vengeance, with te\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Isaiah 35:4 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Isaiah 35:4 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Isaiah 35:4 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Isaiah 35:4.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Isaiah 35:4 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-19": {
        scripturePrimaryRef: "Isaiah 55:6",
        scripturePrimaryText:
          "Seek the Lord while he may be found, call upon him while he is near;",
        reflection:
          "Christ speaks in Isaiah 55:6\u2014\"Seek the Lord while he may be found, call upon him while he is near;\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Isaiah 55:6 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Isaiah 55:6 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Isaiah 55:6 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Isaiah 55:6.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Isaiah 55:6 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-20": {
        scripturePrimaryRef: "Jeremiah 17:7",
        scripturePrimaryText:
          "Blessed are those who trust in the Lord, whose trust is the Lord.",
        reflection:
          "Christ speaks in Jeremiah 17:7\u2014\"Blessed are those who trust in the Lord, whose trust is the Lord.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Jeremiah 17:7 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with Jeremiah 17:7 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Jeremiah 17:7 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Jeremiah 17:7.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Jeremiah 17:7 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-21": {
        scripturePrimaryRef: "Daniel 12:3",
        scripturePrimaryText:
          "Those who are wise shall shine like the brightness of the sky, and those who lead many to righteousness, like the stars forever and ever.",
        reflection:
          "Christ speaks in Daniel 12:3\u2014\"Those who are wise shall shine like the brightness of the sky, and those who lead many to righteousness, like the stars \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Daniel 12:3 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Daniel 12:3 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Daniel 12:3 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Daniel 12:3.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Daniel 12:3 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-22": {
        scripturePrimaryRef: "Matthew 5:44",
        scripturePrimaryText:
          "But I say to you, Love your enemies and pray for those who persecute you,",
        reflection:
          "Christ speaks in Matthew 5:44\u2014\"But I say to you, Love your enemies and pray for those who persecute you,\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 5:44 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Matthew 5:44 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 5:44 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 5:44.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 5:44 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-23": {
        scripturePrimaryRef: "Matthew 6:33",
        scripturePrimaryText:
          "But strive first for the kingdom of God and his righteousness, and all these things will be given to you as well.",
        reflection:
          "Christ speaks in Matthew 6:33\u2014\"But strive first for the kingdom of God and his righteousness, and all these things will be given to you as well.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 6:33 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy Matthew 6:33 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 6:33 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 6:33.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 6:33 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-24": {
        scripturePrimaryRef: "Matthew 22:37-38",
        scripturePrimaryText:
          "He said to him, \"You shall love the Lord your God with all your heart, and with all your soul, and with all your mind.\" This is the greatest and first commandment.",
        reflection:
          "Christ speaks in Matthew 22:37-38\u2014\"He said to him, \"You shall love the Lord your God with all your heart, and with all your soul, and with all your mind.\" \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Matthew 22:37-38 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how Matthew 22:37-38 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Matthew 22:37-38 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Matthew 22:37-38.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Matthew 22:37-38 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-26": {
        scripturePrimaryRef: "Mark 12:30",
        scripturePrimaryText:
          "you shall love the Lord your God with all your heart, and with all your soul, and with all your mind, and with all your strength.\"",
        reflection:
          "Christ speaks in Mark 12:30\u2014\"you shall love the Lord your God with all your heart, and with all your soul, and with all your mind, and with all your \u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of career whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Mark 12:30 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Mark 12:30 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Mark 12:30 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Mark 12:30.\nI still negotiate with the idol of career.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Mark 12:30 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-27": {
        scripturePrimaryRef: "Luke 1:37",
        scripturePrimaryText:
          "For nothing will be impossible with God.\"",
        reflection:
          "Christ speaks in Luke 1:37\u2014\"For nothing will be impossible with God.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of distraction whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Luke 1:37 with your vocation, not only your intellect.",
        challengeType: "service",
        challenge:
          "Perform one hidden act of service for a struggling neighbor or coworker while praying Luke 1:37 once under your breath.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Luke 1:37 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Luke 1:37.\nI still negotiate with the idol of distraction.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Luke 1:37 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-28": {
        scripturePrimaryRef: "John 4:24",
        scripturePrimaryText:
          "God is spirit, and those who worship him must worship in spirit and truth.\"",
        reflection:
          "Christ speaks in John 4:24\u2014\"God is spirit, and those who worship him must worship in spirit and truth.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of lust whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 4:24 with your vocation, not only your intellect.",
        challengeType: "study",
        challenge:
          "Copy John 4:24 by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 4:24 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 4:24.\nI still negotiate with the idol of lust.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 4:24 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-29": {
        scripturePrimaryRef: "John 14:6",
        scripturePrimaryText:
          "Jesus said to him, \"I am the way, and the truth, and the life. No one comes to the Father except through me.\"",
        reflection:
          "Christ speaks in John 14:6\u2014\"Jesus said to him, \"I am the way, and the truth, and the life. No one comes to the Father except through me.\"\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of control whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 14:6 with your vocation, not only your intellect.",
        challengeType: "conversation",
        challenge:
          "Tell one family member how John 14:6 challenged you today\u2014one honest paragraph\u2014then ask how they hear Christ in that line.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 14:6 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 14:6.\nI still negotiate with the idol of control.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 14:6 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-30": {
        scripturePrimaryRef: "John 17:3",
        scripturePrimaryText:
          "And this is eternal life, that they may know you, the only true God, and Jesus Christ whom you have sent.",
        reflection:
          "Christ speaks in John 17:3\u2014\"And this is eternal life, that they may know you, the only true God, and Jesus Christ whom you have sent.\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of comfort whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard John 17:3 with your vocation, not only your intellect.",
        challengeType: "prayer",
        challenge:
          "Kneel or sit upright for twelve minutes with John 17:3 open, read it twice, and offer only silence before you ask anything of God.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because John 17:3 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in John 17:3.\nI still negotiate with the idol of comfort.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did John 17:3 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },
      "12-31": {
        scripturePrimaryRef: "Acts 2:38",
        scripturePrimaryText:
          "Peter said to them, \"Repent, and be baptized every one of you in the name of Jesus Christ so that your sins may be forgiven; and you will receive the gift of the Holy Spirit.\"",
        reflection:
          "Christ speaks in Acts 2:38\u2014\"Peter said to them, \"Repent, and be baptized every one of you in the name of Jesus Christ so that your sins may be forgi\u2026\"\u2014not to decorate your morning but to name his work before your family hears your voice. The idol of ego whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. This month we hear Advent and Incarnation: let the verse cut where you have been improvising salvation without the cross.",
        fatherNote:
          "You stand as father between this text and your children's picture of God\u2014will they meet a judge of moods or the Christ who speaks here? Tonight choose one concrete act\u2014tone, touch, or time\u2014that proves you heard Acts 2:38 with your vocation, not only your intellect.",
        challengeType: "sacrifice",
        challenge:
          "Renounce one pleasure you use to numb stress today and spend those minutes with Acts 2:38 written on paper in your pocket.",
        leastOfThese:
          "Buy groceries or gas for someone scraping by and say only that you are acting because Acts 2:38 named Christ's mercy to you.",
        prayer:
          "Lord Jesus, you address me in Acts 2:38.\nI still negotiate with the idol of ego.\nCut through my excuses and stay near my wife and children today.\nLet this word be heard in how I speak, spend, and serve.\nI turn my heart toward you now\u2014no more delay.\n\nAmen",
        journalPrompt:
          "Where did Acts 2:38 actually reorder what I did as a husband and father today?\n\nWhere did I hide from that word\u2014and what will I confess tonight before God?",
      },

    };
  
    function splitLegacyScripture(scripture) {
      var divider = " — Summary: ";
      var idx = scripture.indexOf(divider);
      if (idx === -1) {
        return {
          ref: scripture,
          text: "Sit with this reading slowly. Ask Christ where it exposes fear, pride, or neglect at home—and hand him that place without bargaining.",
        };
      }
      return {
        ref: scripture.slice(0, idx),
        text: scripture.slice(idx + divider.length),
      };
    }

    var DEFAULT_EXAMEN_SECOND =
      "Where did I fall short as a father or husband today, and how do I bring that honestly before God before I sleep?";

    function ensureTwoExamenPrompts(text) {
      if (!text || typeof text !== "string") {
        return (
          "Where did I see Christ today—in my marriage, my children, my work, or among the poor and forgotten?\n\n" +
          DEFAULT_EXAMEN_SECOND
        );
      }
      var parts = text.split(/\n\n+/).map(function (s) {
        return s.trim();
      }).filter(Boolean);
      if (parts.length >= 2) {
        return parts[0] + "\n\n" + parts.slice(1).join("\n\n");
      }
      return parts[0] + "\n\n" + DEFAULT_EXAMEN_SECOND;
    }

    function getVerseForMonthDay(month, day) {
      var arr = VERSES_BY_MONTH[month] || VERSES_BY_MONTH[1];
      var i = day - 1;
      if (i < 0 || i >= arr.length) {
        i = arr.length - 1;
      }
      return { r: arr[i].r, t: arr[i].t };
    }

    function excerptForAnchor(text, maxLen) {
      var m = maxLen || 130;
      if (!text || text.length <= m) {
        return text || "";
      }
      var slice = text.slice(0, m);
      var sp = slice.lastIndexOf(" ");
      if (sp > m * 0.5) {
        slice = slice.slice(0, sp);
      }
      return slice.trim() + "\u2026";
    }

    function seasonalEcho(liturgical) {
      var s = liturgical && liturgical.season;
      if (s === "Lent") {
        return "\nIn this Lent, let my repentance match the word I just read.";
      }
      if (s === "Triduum") {
        return "\nIn these holy days, let my home be still enough to hear this word.";
      }
      if (s === "Easter") {
        return "\nRisen Lord, let Easter joy obey this text in my house.";
      }
      if (s === "Advent") {
        return "\nAdvent: clear space in my schedule so this verse is not crowded out.";
      }
      if (s === "Christmas") {
        return "\nChrist born for us: let this word sound in how I touch my family.";
      }
      return "";
    }

    function buildAnchoredFromVerse(verse, month, day, liturgical, themeLabel) {
      var ref = verse.r;
      var t = verse.t;
      var lead = excerptForAnchor(t, 128);
      var k = keyFor(month, day);
      var challengeType = CHALLENGE_TYPE_MAP[k];
      var seam = (month * 31 + day) % 4;

      var reflectionParts = [
        "Today the Church places " +
          ref +
          " before you: \u201c" +
          lead +
          "\u201d Let that line confront any part of you that tries to love God without letting him reorder the day.",
        "Hear " +
          ref +
          " as this morning\u2019s sentence from the Lord: \u201c" +
          lead +
          "\u201d Do not rush past it; ask where your life contradicts what you just read.",
        "The Word in " +
          ref +
          " \u2014 \u201c" +
          lead +
          "\u201d \u2014 is not a decoration. Sit with it until it names one place\u2014conscience, calendar, or temper\u2014you have kept off-limits to Christ.",
        "Scripture today, " +
          ref +
          ", says: \u201c" +
          lead +
          "\u201d Treat it as permission to be specific: which relationship, habit, or fear does that word expose?",
      ];
      var reflection =
        reflectionParts[seam] + " The month\u2019s horizon is " + themeLabel + ", read through this passage, not around it.";

      var fatherParts = [
        "As a father, " +
          ref +
          " reads your household: the same union with Christ you seek in quiet must show up when your children test you. If the text is true, your voice at the table cannot contradict it for long.",
        "Your sons and daughters learn what those opening words mean by watching you. Let " +
          ref +
          " shape your patience before your speeches\u2014prayer before performance.",
        "Headship is going first in obeying the Word. " +
          ref +
          " asks whether your wife and children see you practicing\u2014not only arguing for\u2014what that verse demands.",
        "Domestic church starts when you stop outsourcing holiness. " +
          ref +
          " is spoken to you before it is spoken to the world. Practice one humility today that makes it believable at home.",
      ];
      var fatherNote = fatherParts[(month + day * 2) % fatherParts.length];

      var challenges = {
        prayer: [
          "Before dinner, read " +
            ref +
            " once slowly; then pray five minutes in silence with only that text\u2014no requests until you have listened.",
          "Wake five minutes early to read " +
            ref +
            " twice; let it be the first truth your household hears from your mouth this morning.",
          "At lunch, recall " + ref + " in one sentence; offer the next sixty seconds as quiet thanksgiving for that word.",
        ],
        conversation: [
          "Teach " +
            ref +
            " at supper in under ninety seconds; ask each child what scares them about believing it, and listen without fixing.",
          "Apologize for one way you have contradicted " +
            ref +
            " at home this week\u2014specific, no excuses\u2014and amend with one visible change before sunset.",
          "Bless each child tonight using a phrase from " +
            ref +
            "; trace the Sign of the Cross slowly as you speak.",
        ],
        service: [
          "Let " +
            ref +
            " send you to one person under pressure; serve with food, cash, or an errand before you advertise the deed.",
          "Because of " +
            ref +
            ", call someone lonely from your parish bulletin; keep the conversation about them, not your opinions.",
          "Perform one hidden generosity today while praying " +
            ref +
            " once; mention it only to your wife or confessor if honesty requires.",
        ],
        sacrifice: [
          "Fast from one comfort you use to avoid God\u2019s voice; spend the freed minutes with " +
            ref +
            " on the kitchen counter.",
          "Silence one screen tonight until you can say the first clause of " + ref + " from memory.",
          "Skip one purchase you would call stress relief; give the amount or item to someone poor, in union with " + ref + ".",
        ],
        study: [
          "Tell one trusted friend how " +
            ref +
            " convicted you as a father\u2014one honest sentence, then silence.",
          "Send a two-line note rooted in " +
            ref +
            " to someone cool toward God; expect nothing back.",
          "Invite someone to Mass or adoration without debate\u2014say only that " + ref + " is pursuing you and you want company.",
        ],
      };
      var pool = challenges[challengeType] || challenges.prayer;
      var challenge = pool[(month + day) % pool.length];

      var leastParts = [
        "Carry " +
          ref +
          " outward: serve someone who cannot repay\u2014meal, ride, or hour of labor\u2014and speak of the Lord only if they ask.",
        "Let the mercy implied in " +
          ref +
          " reach a worker you usually ignore: learn their name, use it with thanks, pray for them tonight.",
        "Bring extra food or supplies to a strapped neighbor; cite " + ref + " only if they ask why you came.",
      ];
      var leastOfThese = leastParts[(month + day * 3) % leastParts.length];

      var prayer =
        "Lord,\nI set before you " +
        ref +
        ":\n\u201c" +
        lead +
        "\u201d\nForm my fatherhood so I do not contradict this word before my family.\nGive me courage to live it toward my wife, my children, and the poor you set in my path." +
        seasonalEcho(liturgical) +
        "\n\nAmen";

      var journalPrompt =
        "Where did " +
        ref +
        " \u2014 today\u2019s Scripture \u2014 actually change what I did toward my wife, children, work, or the poor?\n\nWhere did I ignore that exact word, and how do I bring that to God before sleep?";

      return {
        scripturePrimaryRef: ref,
        scripturePrimaryText: t,
        scriptureSecondaryRef: null,
        scriptureSecondaryText: null,
        connectionNote: null,
        reflection: reflection,
        fatherNote: fatherNote,
        challengeType: challengeType,
        challenge: challenge,
        leastOfThese: leastOfThese,
        prayer: prayer,
        journalPrompt: journalPrompt,
      };
    }

    function buildGeneratedEntry(month, day, liturgical) {
      var v = getVerseForMonthDay(month, day);
      return buildAnchoredFromVerse(v, month, day, liturgical, monthlyThemes[month]);
    }

    function normalizeEntry(entry, month, day, liturgical) {
      var base = entry || {};
      var normalized = Object.assign({}, DEFAULT_TEMPLATE, base);

      var hasExplicitRef =
        base.scripturePrimaryRef != null && String(base.scripturePrimaryRef).trim() !== "";
      var hasLegacyScripture = base.scripture != null && String(base.scripture).trim() !== "";

      if (
        hasLegacyScripture &&
        !hasExplicitRef &&
        (base.scripturePrimaryText == null || String(base.scripturePrimaryText).trim() === "")
      ) {
        var parsedLegacy0 = splitLegacyScripture(base.scripture);
        normalized.scripturePrimaryRef = parsedLegacy0.ref;
        normalized.scripturePrimaryText = parsedLegacy0.text;
      } else if (hasExplicitRef) {
        normalized.scripturePrimaryRef = String(base.scripturePrimaryRef).trim();
        if (base.scripturePrimaryText != null && String(base.scripturePrimaryText).trim() !== "") {
          normalized.scripturePrimaryText = String(base.scripturePrimaryText).trim();
        } else if (hasLegacyScripture) {
          var pl = splitLegacyScripture(base.scripture);
          normalized.scripturePrimaryText = pl.text && String(pl.text).trim() ? String(pl.text).trim() : "";
        } else {
          normalized.scripturePrimaryText = "";
        }
      } else if (
        !normalized.scripturePrimaryRef ||
        !String(normalized.scripturePrimaryRef).trim() ||
        !normalized.scripturePrimaryText ||
        !String(normalized.scripturePrimaryText).trim()
      ) {
        if (hasLegacyScripture) {
          var parsed = splitLegacyScripture(base.scripture);
          normalized.scripturePrimaryRef = parsed.ref;
          normalized.scripturePrimaryText = parsed.text;
        } else {
          var gv = getVerseForMonthDay(month, day);
          normalized.scripturePrimaryRef = gv.r;
          normalized.scripturePrimaryText = gv.t;
        }
      }

      if (base.scriptureSecondaryRef || base.scriptureSecondaryText) {
        normalized.scriptureSecondaryRef = base.scriptureSecondaryRef || null;
        normalized.scriptureSecondaryText = base.scriptureSecondaryText || null;
        normalized.connectionNote = base.connectionNote != null ? base.connectionNote : null;
      } else {
        normalized.scriptureSecondaryRef = null;
        normalized.scriptureSecondaryText = null;
        normalized.connectionNote = null;
      }

      var verseForGen = { r: normalized.scripturePrimaryRef, t: normalized.scripturePrimaryText };
      var gen = buildAnchoredFromVerse(verseForGen, month, day, liturgical, monthlyThemes[month]);

      function fieldEmpty(v) {
        return v == null || (typeof v === "string" && !String(v).trim());
      }

      if (fieldEmpty(base.reflection)) {
        normalized.reflection = gen.reflection;
      }
      if (fieldEmpty(base.fatherNote)) {
        normalized.fatherNote = gen.fatherNote;
      }
      if (fieldEmpty(base.challenge)) {
        normalized.challenge = gen.challenge;
      }
      if (fieldEmpty(base.challengeType)) {
        normalized.challengeType = gen.challengeType;
      }
      if (fieldEmpty(base.leastOfThese)) {
        normalized.leastOfThese = pickRotatingLeastOfThese(month, day);
      }
      if (fieldEmpty(base.prayer)) {
        normalized.prayer = gen.prayer;
      }
      if (fieldEmpty(base.journalPrompt)) {
        normalized.journalPrompt = ensureTwoExamenPrompts(gen.journalPrompt);
      } else {
        normalized.journalPrompt = String(base.journalPrompt).trim();
      }

      normalized.scripture =
        normalized.scripturePrimaryRef + " — " + normalized.scripturePrimaryText;
      return normalized;
    }

    function ordinal2026(month, day) {
      var o = 0;
      for (var mm = 1; mm < month; mm++) {
        o += daysInMonth(mm);
      }
      return o + day;
    }

    function mdToOrd(md) {
      var p = String(md).split("-");
      var m = parseInt(p[0], 10);
      var d = parseInt(p[1], 10);
      if (!m || !d) return 0;
      return ordinal2026(m, d);
    }

    function authoritativeSeasonRow(md) {
      if (md >= "01-01" && md <= "01-11") {
        return { season: "Christmas", start: "01-01", end: "01-11", totalWeeks: 2 };
      }
      if (md >= "01-12" && md <= "02-17") {
        return { season: "Ordinary Time", start: "01-12", end: "02-17", totalWeeks: 5 };
      }
      if (md >= "02-18" && md <= "03-28") {
        return { season: "Lent", start: "02-18", end: "03-28", totalWeeks: 6 };
      }
      if (md >= "03-29" && md <= "04-04") {
        return { season: "Holy Week", start: "03-29", end: "04-04", totalWeeks: 1 };
      }
      if (md >= "04-05" && md <= "05-23") {
        return { season: "Easter", start: "04-05", end: "05-23", totalWeeks: 7 };
      }
      if (md === "05-24") {
        return { season: "Pentecost", start: "05-24", end: "05-24", totalWeeks: 1 };
      }
      if (md >= "05-25" && md <= "11-28") {
        return { season: "Ordinary Time", start: "05-25", end: "11-28", totalWeeks: 27 };
      }
      if (md >= "11-29" && md <= "12-31") {
        return { season: "Advent", start: "11-29", end: "12-31", totalWeeks: 4 };
      }
      return { season: "Ordinary Time", start: "01-12", end: "02-17", totalWeeks: 5 };
    }

    function getSeasonProgress(dateKey) {
      var parts = String(dateKey).split("-");
      var month = parseInt(parts[0], 10);
      var day = parseInt(parts[1], 10);
      if (!month || !day || month > 12 || day > 31) {
        return { season: "—", week: 1, totalWeeks: 1, percentComplete: 0 };
      }
      var md = pad2(month) + "-" + pad2(day);
      var row = authoritativeSeasonRow(md);
      var startOrd = mdToOrd(row.start);
      var endOrd = mdToOrd(row.end);
      var curOrd = mdToOrd(md);
      var dayOffset = curOrd - startOrd;
      var totalDays = endOrd - startOrd + 1;
      var fullBlocks = Math.floor(dayOffset / 7);
      var week = fullBlocks + 1;
      if (week < 1) week = 1;
      if (week > row.totalWeeks) week = row.totalWeeks;
      var pct = 0;
      if (totalDays <= 1) {
        pct = 100;
      } else {
        pct = (dayOffset / (totalDays - 1)) * 100;
      }
      return {
        season: row.season,
        week: week,
        totalWeeks: row.totalWeeks,
        percentComplete: Math.round(Math.min(100, Math.max(0, pct)) * 10) / 10,
      };
    }

    var LEAST_OF_THESE_POOLS = {
      lent: [
        "Find the coworker or neighbor who seems most burdened today. Make real contact — not a glance, not a wave. Stop and ask how they are.",
        "Think of one person in your life who is isolated or forgotten. Send a message or make a call today that costs you something — your time, your pride, your comfort.",
        "Perform one act of mercy today that no one will see and that benefits someone who cannot repay you.",
        "Identify the least powerful person you will encounter today — the one easily overlooked. Treat them with the same attention you would give someone important.",
        "Buy a meal or coffee for someone who cannot afford it. Do it without making it feel like charity — do it like a brother.",
        "Visit or call someone who is sick, elderly, or homebound. Don't text. Be present.",
        "Find someone carrying a burden heavier than yours today. Ask what it is. Listen without offering solutions.",
        "Think of a person you have been avoiding because their need feels too heavy. Reach out today.",
        "Give something away today — your time, a meal, money, or a possession — to someone who cannot give it back.",
        "Notice the person serving you today — the cashier, the janitor, the delivery driver. Look them in the eyes, learn their name if you can, and treat them like a human being made in the image of God.",
        "Write a note of encouragement to someone who has no reason to expect kindness from you today.",
        "Pray specifically by name for one person who is suffering — someone the world has largely forgotten.",
        "Take on one uncomfortable, unglamorous task today that serves someone who did not ask for your help.",
        "Make space at your table — literally or figuratively — for someone who normally eats alone.",
      ],
      easter: [
        "The resurrection is not private. Carry joy toward someone who has forgotten what hope feels like today.",
        "Find the person in your home or office who seems most defeated. Speak one true, life-giving word to them.",
        "Give something generously today — not out of guilt but out of the abundance Christ has already given you.",
        "The risen Christ appeared to those who were grieving first. Find someone grieving and simply be present with them.",
        "Notice the person most easily overlooked in your day. Greet them by name. Let them know they are seen.",
        "Acts 2:45 says they sold possessions and gave to anyone in need. Give something away today that you actually value.",
        "Call or visit someone who is lonely. The early Church gathered daily — bring that spirit to one person today.",
        "Cook, bake, or prepare food for a family or neighbor who is stretched thin—show up with bread, not advice.",
        "Offer to pray with someone out loud who is afraid — at work, at home, or in line — and mean every word.",
        "Defend the dignity of one person others dismiss today; let your voice mirror the Advocate Christ sent.",
        "Leave an anonymous gift where a parent will find it — diapers, gas card, or cash — for the sake of the risen Lord.",
        "Forgive one debt of honor today: apologize first to whoever is waiting, and serve them without keeping score.",
        "Invite a lukewarm Catholic to Mass this week; let Easter courage replace your fear of awkward silence.",
        "Tell one person explicitly that Christ is alive and that his mercy is for them — no jargon, only witness.",
      ],
      ordinary: [
        "Choose one routine encounter today and treat it as a meeting with Christ — patient eyes, unhurried greeting.",
        "Ask your pastor or parish office which family needs help this week; meet that need before you buy anything extra.",
        "Repair, clean, or lift something for a neighbor without waiting to be asked.",
        "Sit with a child who is overlooked at a gathering; ask one question and listen through the whole answer.",
        "Pay for the next person’s order behind you and leave the clerk a note of gratitude for their labor.",
        "Write a short letter to an elder in your family; mail it today.",
        "Silence your phone for an hour and spend that hour in visible availability to your wife and children.",
        "Teach one child how to serve: clear plates together for someone outside your household.",
        "Drive someone to an appointment who would otherwise take three buses to get there.",
        "Bring cold water or hot coffee to outdoor workers you pass — delivery crews, roofers, or road crews.",
        "Tutor or read with a struggling student; ask the school or parish who is waiting for a man to show up.",
        "Cover a shift for a coworker who needs to be at a bedside tonight.",
        "Donate quality clothes you still like to a shelter; bless as you fold each piece.",
        "End the day by naming aloud one person you served and one person you still owe Christ tomorrow.",
      ],
      advent: [
        "Light one physical candle tonight and pray for the family you know is closest to losing hope.",
        "Fast from one purchase and give the amount to your parish’s St. Vincent de Paul or equivalent.",
        "Show up early somewhere you are usually late — let watchful Advent reorder your respect for others’ time.",
        "Confess one way you have rushed past the poor; make amends with a concrete act before you sleep.",
        "Sing or read a verse of O Come, O Come, Emmanuel with your household; then ask who feels far from God.",
        "Clear clutter from one space and donate usable goods before Christmas noise drowns the waiting.",
        "Walk your block once slowly; pray by address for each home you pass.",
        "Ask your wife which relationship in your circle feels cold; reach out with a reconciling word today.",
        "Replace thirty minutes of scrolling with thirty minutes helping a child with homework or chores.",
        "Buy groceries for a family named by your parish; deliver without fanfare.",
        "Visit the cemetery or pray the Eternal Rest for the dead you have neglected this year.",
        "Offer to watch a young mother’s children so she can run one errand alone.",
        "Memorize Isaiah’s call to prepare the way; live one straight path — truth in a conversation you would rather dodge.",
        "Before bed, kneel and ask Mary where she is waiting in your home; obey the first thought that sounds like her Son.",
      ],
    };

    function leastPoolKeyForMd(md) {
      var row = authoritativeSeasonRow(md);
      if (row.season === "Lent" || row.season === "Holy Week") return "lent";
      if (row.season === "Easter" || row.season === "Pentecost") return "easter";
      if (row.season === "Christmas") return "easter";
      if (row.season === "Advent") return "advent";
      return "ordinary";
    }

    function pickRotatingLeastOfThese(month, day) {
      var md = keyFor(month, day);
      var key = leastPoolKeyForMd(md);
      var pool = LEAST_OF_THESE_POOLS[key] || LEAST_OF_THESE_POOLS.ordinary;
      var ord = ordinal2026(month, day);
      var idx = ord % pool.length;
      return pool[idx];
    }

    var ScriptureIntegrityValidator = {
      tokenizeRef: function (ref) {
        if (!ref || typeof ref !== "string") return [];
        return ref
          .replace(/[0-9:.,;\-–—]/g, " ")
          .split(/\s+/)
          .map(function (w) {
            return w.toLowerCase();
          })
          .filter(function (w) {
            return w.length >= 4;
          });
      },
      keyNounsFromScripture: function (ref, text) {
        var out = {};
        var i;
        var rt = this.tokenizeRef(ref);
        for (i = 0; i < rt.length; i++) {
          out[rt[i]] = true;
        }
        var t = (text && String(text)) || "";
        t = t.slice(0, 220).toLowerCase().replace(/[^a-z\s]/g, " ");
        var words = t.split(/\s+/);
        for (i = 0; i < words.length; i++) {
          if (words[i].length >= 5) {
            out[words[i]] = true;
          }
        }
        return out;
      },
      textMentionsScripture: function (nouns, body) {
        if (!body || typeof body !== "string") return false;
        var b = body.toLowerCase();
        for (var k in nouns) {
          if (nouns.hasOwnProperty(k) && b.indexOf(k) !== -1) {
            return true;
          }
        }
        return false;
      },
      validate: function (dailyMap) {
        if (!dailyMap || typeof dailyMap !== "object") return;
        var keys = Object.keys(dailyMap).sort(function (a, b) {
          var pa = a.split("-").map(Number);
          var pb = b.split("-").map(Number);
          if (pa[0] !== pb[0]) return pa[0] - pb[0];
          return pa[1] - pb[1];
        });
        var i;
        var j;
        for (i = 0; i < keys.length; i++) {
          var windowRefs = {};
          var duplicatesInWindow = [];
          for (j = i; j < keys.length; j++) {
            var kj = keys[j];
            var pj = kj.split("-").map(Number);
            var pi = keys[i].split("-").map(Number);
            var ordI = ordinal2026(pi[0], pi[1]);
            var ordJ = ordinal2026(pj[0], pj[1]);
            if (ordJ - ordI > 29) break;
            var r = dailyMap[kj] && dailyMap[kj].scripturePrimaryRef;
            if (r) {
              if (windowRefs[r]) {
                duplicatesInWindow.push({ ref: r, a: windowRefs[r], b: kj });
              } else {
                windowRefs[r] = kj;
              }
            }
          }
          for (var d = 0; d < duplicatesInWindow.length; d++) {
            if (typeof console !== "undefined" && console.warn) {
              console.warn(
                "[Peacemakers] Duplicate scripturePrimaryRef in 30-day window:",
                duplicatesInWindow[d].ref,
                duplicatesInWindow[d].a,
                duplicatesInWindow[d].b
              );
            }
          }
        }
        for (i = 0; i < keys.length; i++) {
          var entry = dailyMap[keys[i]];
          if (!entry) continue;
          if (!entry.scripturePrimaryRef || !String(entry.scripturePrimaryRef).trim()) {
            if (typeof console !== "undefined" && console.warn) {
              console.warn("[Peacemakers] Missing scripturePrimaryRef:", keys[i]);
            }
          }
          if (!entry.scripturePrimaryText || !String(entry.scripturePrimaryText).trim()) {
            if (typeof console !== "undefined" && console.warn) {
              console.warn("[Peacemakers] Missing scripturePrimaryText:", keys[i]);
            }
          }
          var nouns = this.keyNounsFromScripture(entry.scripturePrimaryRef, entry.scripturePrimaryText);
          var refl = entry.reflection || "";
          var ch = entry.challenge || "";
          var pr = entry.prayer || "";
          if (!this.textMentionsScripture(nouns, refl)) {
            if (typeof console !== "undefined" && console.warn) {
              console.warn("[Peacemakers] Reflection may not echo Scripture keywords:", keys[i]);
            }
          }
          if (!this.textMentionsScripture(nouns, ch)) {
            if (typeof console !== "undefined" && console.warn) {
              console.warn("[Peacemakers] Challenge may not echo Scripture keywords:", keys[i]);
            }
          }
          if (!this.textMentionsScripture(nouns, pr)) {
            if (typeof console !== "undefined" && console.warn) {
              console.warn("[Peacemakers] Prayer may not echo Scripture keywords:", keys[i]);
            }
          }
        }
      },
    };

    function enrichSeasonWeekFields(dailyMap) {
      for (var month = 1; month <= 12; month++) {
        for (var day = 1; day <= daysInMonth(month); day++) {
          var key = keyFor(month, day);
          var e = dailyMap[key];
          if (!e) continue;
          var prog = getSeasonProgress(key);
          e.seasonWeek = prog.week;
          e.seasonTotal = prog.totalWeeks;
        }
      }
    }

    function challengeLabelsForTypes(types) {
      var labels = { prayer: "Prayer", sacrifice: "Sacrifice", service: "Service", study: "Study", conversation: "Conversation" };
      var parts = [];
      var seen = {};
      for (var i = 0; i < types.length; i++) {
        var t = types[i];
        if (!t || seen[t]) continue;
        seen[t] = true;
        parts.push(labels[t] || t);
      }
      return parts.length ? parts.join(", ") : "the disciplines you received";
    }

    function attachSundayWeeklyReviews(dailyMap) {
      for (var month = 1; month <= 12; month++) {
        for (var day = 1; day <= daysInMonth(month); day++) {
          var dt = new Date(2026, month - 1, day);
          if (dt.getDay() !== 0) continue;
          var key = keyFor(month, day);
          var entry = dailyMap[key];
          if (!entry) continue;
          var types = [];
          var d;
          for (d = 1; d <= 6; d++) {
            var prev = new Date(2026, month - 1, day - d);
            var pm = prev.getMonth() + 1;
            var pd = prev.getDate();
            if (prev.getFullYear() !== 2026) continue;
            var pk = keyFor(pm, pd);
            var pe = dailyMap[pk];
            if (pe && pe.challengeType) types.push(pe.challengeType);
          }
          types.reverse();
          entry.weeklyReview = {
            prompt:
              "Where did Christ reset your fatherhood this week—not as self-improvement, but as discipleship—and where did you resist him?",
            challengeReview:
              "This week the app asked you toward: " +
              challengeLabelsForTypes(types) +
              ". Which invitation did you actually obey, and which did you negotiate away?",
            closingPrayer:
              "Lord Jesus, send me into the new week as your disciple, not as my own project. Teach me to love my family and the least of these with your heart. Amen.",
          };
        }
      }
    }

    function tonePick(arr, month, day) {
      if (!arr || !arr.length) return null;
      return arr[ordinal2026(month, day) % arr.length];
    }

    function toneHasWord(text, words) {
      var s = (text && String(text).toLowerCase()) || "";
      var i;
      for (i = 0; i < words.length; i++) {
        if (s.indexOf(words[i]) !== -1) return true;
      }
      return false;
    }

    var TONE_LENT_REFLECTIONS = [
      "This Lent, let the word you read become examination: where does pride still hide mercy from your home? Return your heart to Christ in silence and ask for the discipline of honest repentance.",
      "The desert of Lent is not a vacation from your vocation—it is where the cross reorders desire. Fast from the need to be impressive; choose sorrow for sin and conversion before God.",
      "Mercy names what discipline protects: not your reputation, but your children’s peace. Let today’s Scripture fuel prayer that sounds like repentance, not self-defense.",
      "Sacrifice without prayer becomes mood; prayer without sacrifice becomes sentiment. Hold them together this Lent: one concrete fast and one honest plea for mercy.",
      "Christ calls you to carry your cross through ordinary rooms. Let this reading expose one place you resist conversion—and surrender it in silent prayer before dinner.",
      "Lenten examination is mercy with teeth: not shame for drama, but sorrow that yields return. Ask the Lord where you have treated your family as audience instead of neighbor.",
      "The cross is the measure of love in your house. Read today’s word as a call to discipline your tongue, your eyes, and your schedule toward mercy.",
      "Repentance is how a father teaches hope: not perfection, but honest return. Let this Scripture cut through excuses and send you to prayer without bargaining.",
      "In Lent we practice silence so we can hear mercy. Turn off one noise that feeds your ego and spend those minutes in prayer over one sin you keep negotiating.",
      "Fasting reveals what rules you. If the word you read does not disturb comfort, ask Christ for a deeper fast—from the need to control outcomes at home.",
      "Your heart is the first mission field. Let today’s text be a spur to confession—spoken or silent—so mercy can reset your leadership.",
      "Sorrow for sin is the beginning of courage. Carry this Scripture into one apology your family did not expect, and pray for the humility to mean it.",
      "Lent strips the illusion that you can save yourself. Receive this reading as an invitation to mercy: stop performing holiness and start obeying Christ.",
      "The discipline of these forty days is love in slow motion. Let prayer, sacrifice, and examination weave together until your children see a man returning to the Lord.",
    ];

    var TONE_HW_REFLECTIONS = [
      "Holy Week asks for surrender, not strategy: Christ goes to the cross in obedience, and your home is invited into the same silence. Let this word strip away every defense you use against mercy.",
      "The passion is not a story you finish—it is a love that absorbs betrayal and still obeys the Father. Ponder today’s reading where you fear being misunderstood or abandoned.",
      "Gethsemane is the school of obedience: not excitement, but faithful suffering. Let Scripture name one place you resist God’s will because it costs your pride.",
      "The cross is the throne of truth: there Jesus speaks from suffering, not spin. Carry this text into your marriage and children as honesty without theatrics.",
      "Peter’s betrayal warns every leader: courage fails when self-preservation wins. Let Holy Week’s silence expose where you deny Christ with tone, avoidance, or work.",
      "The tomb is not an accident in the plot—it is God’s patience with death. Read slowly and ask where fear of loss still governs you more than trust in the Father.",
      "Christ’s silence before accusers is the shape of true strength. Let this passage confront every argument you use to justify harshness at home.",
      "Suffering love is the grammar of redemption. This week, hear the passion as a call to carry one hidden burden in your family without needing credit.",
      "The cross unmasks every shortcut to glory. Let today’s word sit with you through the ordinary hours where you want applause instead of holiness.",
      "Holy Week is betrayal, bread, blood, and a love that does not flinch. Pray this Scripture over the relationships where trust has cracked—and choose obedience over control.",
    ];

    var TONE_EASTER_REFLECTIONS = [
      "The resurrection is not a mood but an encounter: Christ appeared to the fearful first. Let this word send you toward your family with the joy of a witness, not a lecturer.",
      "Risen life reorders fear. Read today’s text as permission to speak hope where cynicism has rented space in your home.",
      "The Spirit Christ breathed on the disciples still seeks rooms locked by anxiety. Let Easter joy become courage: unlock one conversation you have postponed.",
      "New creation begins in ordinary kitchens. This Scripture is a dispatch from the empty tomb—carry it as witness that mercy is alive and still sending you.",
      "Christ appeared on the road and in the upper room; he still appears in the word. Let resurrection urgency loosen your grip on old resentments before sunset.",
      "Joy is a discipline after the tomb: not denial of grief, but refusal to let death narrate your marriage. Let this reading anchor hope in the risen Lord.",
      "The sent Church begins with men who ran and women who told the truth. Receive today’s passage as a call to witness—one honest word about the living Christ.",
      "Resurrection is God’s verdict on despair. Pray this text over the child or coworker who believes nothing new is possible—and let your tone prove otherwise.",
      "The Spirit makes Easter ordinary: breath, peace, mission. Let Scripture shape a household rhythm of gratitude for life that death could not keep.",
      "Christ’s new life is contagious witness, not private comfort. Read slowly and name one person who needs to hear that mercy still searches for them.",
      "The empty tomb turns every excuse to dust. Let this word free you to apologize, reconcile, or serve with the energy of someone who knows the Lord is alive.",
      "Appeared, recognized, sent—the pattern of Easter discipleship. Carry today’s reading into work and home as a man sent to enact resurrection kindness.",
      "Life in Christ is not nostalgia for Sunday but power for Monday. Let this Scripture stir joy robust enough to forgive, provide, and stay present.",
      "The risen Lord still meets us in broken places. Let Easter hope enlarge your prayer until your family hears confidence rooted in the Spirit’s new creation.",
    ];

    var TONE_ADVENT_REFLECTIONS = [
      "Advent is watchfulness in the dark: Christ’s coming is promise, not panic. Let this word train your heart to wait for Emmanuel without filling silence with noise.",
      "Preparation is mercy rehearsed—clearing space so hope can arrive. Read today’s Scripture as a call to simplify one habit that crowds the promise of his coming.",
      "The Lord is coming; the house must be honest. Let Advent darkness expose where you have hidden fear from your wife or children—and bring it into the light of his promise.",
      "Waiting is active hope: candles, confession, small obediences. This text invites you to watch for Christ in the faces you rush past at home and work.",
      "Emmanuel means God with us before we finish fixing ourselves. Let this reading soften preparation into trust rather than performance.",
      "Promise sustains fathers when outcomes lag. Ponder Scripture as a pledge: the coming Christ will complete the mercy you have only begun to practice.",
      "Advent hope is not optimism—it is God’s word breaking through winter. Carry this verse as courage to name sin and still speak expectation at dinner.",
      "Watchfulness is love that stays awake. Let today’s passage interrupt autopilot so you notice who in your home feels unseen as Christmas noise rises.",
      "Darkness is real; the dawn is surer. Read slowly and ask where despair still narrates your leadership, then hand that story to the coming King.",
      "Preparation includes the poor you would rather forget. Let this Scripture bind your waiting to one concrete act of generosity before the feast.",
      "The promise of his coming resets time: not your productivity, but his faithfulness. Let Advent discipline your speech toward patience and hope.",
      "Christ’s coming searches every room. Use this text tonight to pray for the humility to prepare your marriage and children to meet mercy, not chaos.",
    ];

    var TONE_LENT_CHALLENGES = [
      { challengeType: "sacrifice", challenge: "Fast from one form of digital escape today; spend that time in silent prayer, asking mercy for one sin you keep excusing at home." },
      { challengeType: "prayer", challenge: "Kneel for ten minutes with today’s Scripture: one sentence of repentance, one sentence of surrender, and silence before you ask anything." },
      { challengeType: "service", challenge: "Seek out one coworker or neighbor who looks burdened; offer mercy with a real conversation—no advice, only presence and a listening ear." },
      { challengeType: "sacrifice", challenge: "Give up one comfort you use to avoid your family tonight; replace it with prayer together or a sincere apology you owe." },
      { challengeType: "prayer", challenge: "Pray the Jesus prayer slowly twenty times, asking for a heart of repentance that matches the discipline of this Lenten day." },
      { challengeType: "service", challenge: "Identify one forgotten person in your parish or block; call or visit with mercy, carrying today’s word as your only agenda." },
      { challengeType: "sacrifice", challenge: "Skip one meal or treat and donate the cost quietly; pray for conversion in your household while you fast." },
      { challengeType: "prayer", challenge: "Before bed, examine your day aloud before God: where mercy was refused, where the cross was avoided—then pray for return." },
      { challengeType: "service", challenge: "Serve someone who cannot repay you—an elderly neighbor or isolated parent—with a concrete act of mercy tied to today’s reading." },
      { challengeType: "sacrifice", challenge: "Renounce complaining for twenty-four hours; when irritation rises, offer a short prayer of sacrifice for the person triggering it." },
      { challengeType: "prayer", challenge: "Spend fifteen minutes in silence with Scripture open, asking Christ where sorrow for sin is still shallow." },
      { challengeType: "service", challenge: "Mercy toward the burdened: take one task off your wife’s shoulders without announcement, as a Lenten discipline of love." },
      { challengeType: "sacrifice", challenge: "Turn off the car radio; pray for mercy over one relationship where pride still speaks louder than the cross." },
      { challengeType: "prayer", challenge: "Walk once around your block in silence, praying for conversion in your heart and protection over every home you pass." },
    ];

    var TONE_HW_CHALLENGES = [
      { challengeType: "prayer", challenge: "Sit in silence fifteen minutes with today’s passion text; do not speak until you have surrendered one fear of suffering or betrayal to the Father." },
      { challengeType: "sacrifice", challenge: "Fast from all entertainment tonight; keep vigil with Scripture, praying for obedience where you would rather control outcomes at home." },
      { challengeType: "prayer", challenge: "Pray the Sorrowful Mysteries slowly, placing your family’s struggles at the foot of the cross without fixing them in your own strength." },
      { challengeType: "sacrifice", challenge: "Strip one luxury from your evening—wine, dessert, or screens—and spend that hour in prayer over Christ’s silence before Pilate." },
      { challengeType: "prayer", challenge: "Kneel and read today’s word three times, asking where you still resist the cross-shaped love Christ shows in his passion." },
      { challengeType: "sacrifice", challenge: "Choose one hidden sacrifice today—sleep, preference, or pride—that mirrors Christ’s obedience in the garden." },
      { challengeType: "prayer", challenge: "Pray in front of a crucifix for the people who have betrayed your trust; ask grace to forgive as Christ forgave from the cross." },
      { challengeType: "sacrifice", challenge: "Abstain from defending yourself in argument today; offer the silence of the cross and pray for the other person instead." },
      { challengeType: "prayer", challenge: "Spend twenty minutes with Scripture and no phone, interceding for souls who feel the weight of Holy Week’s sorrow alone." },
      { challengeType: "sacrifice", challenge: "Walk to church or around your neighborhood carrying today’s text mentally, fasting from hurry so you can ponder suffering love." },
      { challengeType: "prayer", challenge: "Before sleep, name aloud one way Christ’s passion exposes your self-reliance; end only with a prayer of surrender." },
      { challengeType: "sacrifice", challenge: "Give up an hour you would spend on projects; use it for prayer at the foot of the cross for your children’s vocations." },
    ];

    var TONE_EASTER_CHALLENGES = [
      { challengeType: "service", challenge: "Today, tell one person explicitly that Christ is risen and his mercy is urgent—not someday, but now—for them." },
      { challengeType: "prayer", challenge: "Pray with joy for five minutes, then immediately send a message of hope to someone who has forgotten the resurrection." },
      { challengeType: "conversation", challenge: "Witness at dinner: share how the risen Lord met you this week and ask each child where they need new life from him today." },
      { challengeType: "service", challenge: "Perform one generous act before noon—food, money, or time—because Easter sends you to enact the life you proclaim." },
      { challengeType: "study", challenge: "Read today’s passage aloud at home, underline every sign of new life, and commit to one bold obedience before sunset." },
      { challengeType: "prayer", challenge: "Offer a decade of thanksgiving for the empty tomb, then go witness through service to the first neighbor you see in need." },
      { challengeType: "sacrifice", challenge: "Sacrifice an evening plan to visit or call someone lonely; let resurrection joy be the reason you show up tonight." },
      { challengeType: "service", challenge: "Give something valuable away today—time or money—as a sign that Christ’s life in you cannot be hoarded." },
      { challengeType: "conversation", challenge: "Speak one urgent word of mercy to a coworker who is drowning; let the risen Christ’s compassion sound in your voice." },
      { challengeType: "prayer", challenge: "Begin and end the day with alleluia prayed slowly; carry that joy into one risky act of reconciliation." },
      { challengeType: "study", challenge: "Memorize one verse from today’s reading about the Spirit’s sending; recite it before every meeting as resurrection urgency." },
      { challengeType: "service", challenge: "Buy groceries for a stretched family today—Easter witness means generosity that costs you something." },
      { challengeType: "conversation", challenge: "Tell your wife and children one way the resurrection rewrote your fear this season; ask how they need that same hope now." },
      { challengeType: "prayer", challenge: "Pray the Spirit’s fire over your workplace, then act with visible kindness before the day ends." },
    ];

    var TONE_ADVENT_CHALLENGES = [
      { challengeType: "prayer", challenge: "Wake ten minutes early to pray Maranatha—Come, Lord Jesus—over your household before anyone stirs." },
      { challengeType: "sacrifice", challenge: "Fast from one purchase this week and set the money aside for Advent almsgiving in expectation of his coming." },
      { challengeType: "prayer", challenge: "Light one candle tonight with your family; read today’s Scripture as preparation, not performance, for Emmanuel." },
      { challengeType: "sacrifice", challenge: "Silence one hour of evening noise; use the quiet to watch for Christ in your spouse’s fatigue and your children’s questions." },
      { challengeType: "prayer", challenge: "Pray slowly through today’s word, asking where you still treat Advent like a deadline instead of hopeful waiting." },
      { challengeType: "service", challenge: "Serve one family named by your parish as you prepare the manger of your heart—expectation shown in mercy." },
      { challengeType: "prayer", challenge: "Spend fifteen minutes in the church or chapel if possible, watching in prayer for the coming Christ to reorder your priorities." },
      { challengeType: "sacrifice", challenge: "Give up scrolling after 9 p.m. this Advent night; prepare for the Lord’s coming with Scripture and sleep." },
      { challengeType: "prayer", challenge: "Walk your block once in silence, praying Come, Lord Jesus over each home as a discipline of watchful hope." },
      { challengeType: "conversation", challenge: "Ask your wife what she is waiting for God to heal this Advent; listen as preparation for Christ’s coming into that wound." },
      { challengeType: "prayer", challenge: "Pray the O Antiphons slowly, letting expectation crack open one hardened place in your fatherhood." },
      { challengeType: "sacrifice", challenge: "Clear one cluttered space as a sign you are making room for the Guest who is coming; pray while you work." },
      { challengeType: "service", challenge: "Prepare a simple meal for someone who eats alone; let expectation of the feast train you in mercy now." },
      { challengeType: "prayer", challenge: "Before bed, examine where impatience replaced waiting; confess it and pray for hope that outlasts December noise." },
    ];

    var TONE_LENT_LEAST_WORDS = [
      "burden",
      "forgotten",
      "isolated",
      "coworker",
      "neighbor",
      "someone who",
      "person who",
      "call ",
      "visit ",
      "heavy",
      "name if",
      "elderly",
      "homebound",
      "sick",
    ];

    var TONE_EASTER_LEAST_WORDS = [
      "generous",
      "generosity",
      "give",
      "away",
      "abundance",
      "sell",
      "possession",
      "meal",
      "food",
      "groceries",
      "donate",
      "gift",
      "value",
    ];

    var TONE_HW_SELFIMPROVE = [
      "underline",
      "copy ",
      "by hand",
      "paragraph",
      "podcast",
      "memorize",
      "index card",
      "highlighter",
      "study guide",
      "three times slowly",
    ];

    function lentReflectionOk(t) {
      return toneHasWord(t, [
        "repent",
        "mercy",
        "fast",
        "sacrifice",
        "examination",
        "desert",
        "cross",
        "discipline",
        "sorrow",
        "conversion",
        "silence",
        "prayer",
        "return",
        "heart",
      ]);
    }

    function lentChallengeOk(entry) {
      var ty = (entry.challengeType && String(entry.challengeType).toLowerCase()) || "";
      return ty === "sacrifice" || ty === "prayer" || ty === "service";
    }

    function lentLeastOk(t) {
      return toneHasWord(t, TONE_LENT_LEAST_WORDS);
    }

    function hwReflectionOk(t) {
      return toneHasWord(t, [
        "passion",
        "surrender",
        "obedience",
        "cross",
        "suffering",
        "tomb",
        "betrayal",
        "silence",
        "gethsemane",
        "pilate",
        "calvary",
        "golgotha",
        "denied",
        "strip",
      ]);
    }

    function hwChallengeOk(entry) {
      var ty = (entry.challengeType && String(entry.challengeType).toLowerCase()) || "";
      if (ty !== "prayer" && ty !== "sacrifice") return false;
      var ch = (entry.challenge && String(entry.challenge).toLowerCase()) || "";
      if (toneHasWord(ch, TONE_HW_SELFIMPROVE)) return false;
      return toneHasWord(ch, [
        "cross",
        "passion",
        "suffer",
        "tomb",
        "betray",
        "silence",
        "obedien",
        "surrender",
        "blood",
        "garden",
        "pilate",
        "crucif",
        "golgotha",
        "calvary",
        "weep",
        "vigil",
        "fast",
        "pray",
      ]);
    }

    function easterReflectionOk(t) {
      return toneHasWord(t, [
        "risen",
        "resurrection",
        "encounter",
        "witness",
        "joy",
        "life",
        "appeared",
        "new ",
        "sent",
        "spirit",
        "empty",
        "alleluia",
        "easter",
        "tomb",
        "alive",
      ]);
    }

    function easterChallengeOk(t) {
      return toneHasWord(t, [
        "today",
        "now",
        "go ",
        "send",
        "witness",
        "tell ",
        "proclaim",
        "risen",
        "resurrection",
        "life",
        "joy",
        "spirit",
        "urgent",
        "before ",
        "sunset",
        "neighbor",
        "generous",
        "give",
        "bold",
        "reconcil",
        "mercy",
      ]);
    }

    function easterLeastOk(t) {
      return toneHasWord(t, TONE_EASTER_LEAST_WORDS);
    }

    function adventReflectionOk(t) {
      return toneHasWord(t, [
        "wait",
        "preparation",
        "preparing",
        "coming",
        "hope",
        "emmanuel",
        "promise",
        "watch",
        "darkness",
        "advent",
        "maranatha",
        "longing",
      ]);
    }

    function adventChallengeOk(t) {
      return toneHasWord(t, [
        "wait",
        "prepar",
        "watch",
        "hope",
        "coming",
        "expect",
        "advent",
        "emmanuel",
        "maranatha",
        "candle",
        "vigil",
        "room",
        "guest",
        "manger",
      ]);
    }

    function seasonToneGuard(entry, dateKey, month, day, isGenerated) {
      if (!isGenerated || !entry) return;
      var md = dateKey;
      var row = authoritativeSeasonRow(md);
      var season = row.season;
      if (season === "Ordinary Time" || season === "Christmas" || season === "Pentecost") return;

      var changed = false;
      var refl = entry.reflection || "";
      var chal = entry.challenge || "";
      var ctype = entry.challengeType || "";
      var least = entry.leastOfThese || "";

      if (season === "Lent") {
        if (!lentReflectionOk(refl)) {
          entry.reflection = tonePick(TONE_LENT_REFLECTIONS, month, day);
          changed = true;
        }
        if (!lentChallengeOk(entry)) {
          var lc = tonePick(TONE_LENT_CHALLENGES, month, day);
          if (lc) {
            entry.challenge = lc.challenge;
            entry.challengeType = lc.challengeType;
            changed = true;
          }
        }
        if (!lentLeastOk(least)) {
          entry.leastOfThese = pickRotatingLeastOfThese(month, day);
          changed = true;
        }
      } else if (season === "Holy Week") {
        if (!hwReflectionOk(refl)) {
          entry.reflection = tonePick(TONE_HW_REFLECTIONS, month, day);
          changed = true;
        }
        if (!hwChallengeOk(entry)) {
          var hc = tonePick(TONE_HW_CHALLENGES, month, day);
          if (hc) {
            entry.challenge = hc.challenge;
            entry.challengeType = hc.challengeType;
            changed = true;
          }
        }
      } else if (season === "Easter") {
        if (!easterReflectionOk(refl)) {
          entry.reflection = tonePick(TONE_EASTER_REFLECTIONS, month, day);
          changed = true;
        }
        if (!easterChallengeOk(chal)) {
          var ec = tonePick(TONE_EASTER_CHALLENGES, month, day);
          if (ec) {
            entry.challenge = ec.challenge;
            entry.challengeType = ec.challengeType;
            changed = true;
          }
        }
        if (!easterLeastOk(least)) {
          entry.leastOfThese = pickRotatingLeastOfThese(month, day);
          changed = true;
        }
      } else if (season === "Advent") {
        if (!adventReflectionOk(refl)) {
          entry.reflection = tonePick(TONE_ADVENT_REFLECTIONS, month, day);
          changed = true;
        }
        if (!adventChallengeOk(chal)) {
          var ac = tonePick(TONE_ADVENT_CHALLENGES, month, day);
          if (ac) {
            entry.challenge = ac.challenge;
            entry.challengeType = ac.challengeType;
            changed = true;
          }
        }
      }

      if (changed && typeof console !== "undefined" && console.warn) {
        console.warn("[SeasonToneGuard] " + dateKey + ": content replaced for season alignment");
      }
    }

    function buildDaily() {
      var daily = {};
      for (var month = 1; month <= 12; month++) {
        for (var day = 1; day <= daysInMonth(month); day++) {
          var key = keyFor(month, day);
          var liturgical = liturgicalForMonthDay(month, day);
          var authored = Object.prototype.hasOwnProperty.call(sampleEntries, key);
          var baseEntry = sampleEntries[key] || buildGeneratedEntry(month, day, liturgical);
          daily[key] = normalizeEntry(baseEntry, month, day, liturgical);
          if (!authored) {
            seasonToneGuard(daily[key], key, month, day, true);
          }
        }
      }
      enrichSeasonWeekFields(daily);
      attachSundayWeeklyReviews(daily);
      return daily;
    }

    var _pmkDailyBuilt = buildDaily();
    ScriptureIntegrityValidator.validate(_pmkDailyBuilt);

    window.PMK_APP_DATA = {
      year: 2026,
      version: 1,
      daily: _pmkDailyBuilt,
      liturgical: buildLiturgical(),
      monthlyThemes: monthlyThemes,
      habitLabels: habitLabels,
      getSeasonProgress: getSeasonProgress,
    };
    window.CCD_APP_DATA = window.PMK_APP_DATA;

  })();