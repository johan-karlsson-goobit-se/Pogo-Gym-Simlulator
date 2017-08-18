function Dataset() {

	var Pokemon = [["","","","","","","",8,9,10],["Pokemon","#","Base Sta","Base Atk","Base Def","Type I","Type II","Fast Moves","Special Moves","Fast MovesSpecial Moves"],["Bulbasaur",1,90,126,126,"Grass","Poison","Vine Whip, Tackle","Sludge Bomb, Seed Bomb, Power Whip","Vine Whip, TackleSludge Bomb, Seed Bomb, Power Whip"],["Ivysaur",2,120,156,158,"Grass","Poison","Razor Leaf, Vine Whip","Sludge Bomb, Solar Beam, Power Whip","Razor Leaf, Vine WhipSludge Bomb, Solar Beam, Power Whip"],["Venusaur",3,160,198,200,"Grass","Poison","Razor Leaf, Vine Whip","Sludge Bomb, Petal Blizzard, Solar Beam","Razor Leaf, Vine WhipSludge Bomb, Petal Blizzard, Solar Beam"],["Charmander",4,78,128,108,"Fire","None","Ember, Scratch","Flame Charge, Flame Burst, Flamethrower","Ember, ScratchFlame Charge, Flame Burst, Flamethrower"],["Charmeleon",5,116,160,140,"Fire","None","Ember, Scratch","Fire Punch, Flame Burst, Flamethrower","Ember, ScratchFire Punch, Flame Burst, Flamethrower"],["Charizard",6,156,212,182,"Fire","Flying","Ember, Wing Attack","Fire Blast, Dragon Claw, Flamethrower","Ember, Wing AttackFire Blast, Dragon Claw, Flamethrower"],["Squirtle",7,88,112,142,"Water","None","Bubble, Tackle","Aqua Jet, Aqua Tail, Water Pulse","Bubble, TackleAqua Jet, Aqua Tail, Water Pulse"],["Wartortle",8,118,144,176,"Water","None","Water Gun, Bite","Aqua Jet, Ice Beam, Hydro Pump","Water Gun, BiteAqua Jet, Ice Beam, Hydro Pump"],["Blastoise",9,158,186,222,"Water","None","Water Gun, Bite","Flash Cannon, Ice Beam, Hydro Pump","Water Gun, BiteFlash Cannon, Ice Beam, Hydro Pump"],["Caterpie",10,90,62,66,"Bug","None","Bug Bite, Tackle","Struggle","Bug Bite, TackleStruggle"],["Metapod",11,100,56,86,"Bug","None","Bug Bite, Tackle","Struggle","Bug Bite, TackleStruggle"],["Butterfree",12,120,144,144,"Bug","Flying","Bug Bite, Confusion","Bug Buzz, Psychic, Signal Beam","Bug Bite, ConfusionBug Buzz, Psychic, Signal Beam"],["Weedle",13,80,68,64,"Bug","Poison","Bug Bite, Poison Sting","Struggle","Bug Bite, Poison StingStruggle"],["Kakuna",14,90,62,82,"Bug","Poison","Bug Bite, Poison Sting","Struggle","Bug Bite, Poison StingStruggle"],["Beedrill",15,130,144,130,"Bug","Poison","Bug Bite, Poison Jab","Sludge Bomb, Aerial Ace, X Scissor","Bug Bite, Poison JabSludge Bomb, Aerial Ace, X Scissor"],["Pidgey",16,80,94,90,"Normal","Flying","Quick Attack, Tackle","Twister, Aerial Ace, Air Cutter","Quick Attack, TackleTwister, Aerial Ace, Air Cutter"],["Pidgeotto",17,126,126,122,"Normal","Flying","Wing Attack, Steel Wing","Twister, Aerial Ace, Air Cutter","Wing Attack, Steel WingTwister, Aerial Ace, Air Cutter"],["Pidgeot",18,166,170,166,"Normal","Flying","Wing Attack, Steel Wing","Hurricane, Aerial Ace, Air Cutter","Wing Attack, Steel WingHurricane, Aerial Ace, Air Cutter"],["Rattata",19,60,92,86,"Normal","None","Tackle, Quick Attack","Dig, Hyper Fang, Body Slam","Tackle, Quick AttackDig, Hyper Fang, Body Slam"],["Raticate",20,110,146,150,"Normal","None","Bite, Quick Attack","Dig, Hyper Fang, Hyper Beam","Bite, Quick AttackDig, Hyper Fang, Hyper Beam"],["Spearow",21,80,102,78,"Normal","Flying","Peck, Quick Attack","Aerial Ace, Drill Peck, Twister","Peck, Quick AttackAerial Ace, Drill Peck, Twister"],["Fearow",22,130,168,146,"Normal","Flying","Peck, Steel Wing","Aerial Ace, Drill Run, Twister","Peck, Steel WingAerial Ace, Drill Run, Twister"],["Ekans",23,70,112,112,"Poison","None","Poison Sting, Acid","Wrap, Sludge Bomb, Gunk Shot","Poison Sting, AcidWrap, Sludge Bomb, Gunk Shot"],["Arbok",24,120,166,166,"Poison","None","Bite, Acid","Dark Pulse, Sludge Wave, Gunk Shot","Bite, AcidDark Pulse, Sludge Wave, Gunk Shot"],["Pikachu",25,70,124,108,"Electric","None","Thunder Shock, Quick Attack","Discharge, Thunderbolt, Thunder","Thunder Shock, Quick AttackDischarge, Thunderbolt, Thunder"],["Raichu",26,120,200,154,"Electric","None","Thunder Shock, Spark","Brick Break, Thunder Punch, Thunder","Thunder Shock, SparkBrick Break, Thunder Punch, Thunder"],["Sandshrew",27,100,90,114,"Ground","None","Scratch, Mud Shot","Dig, Rock Slide, Rock Tomb","Scratch, Mud ShotDig, Rock Slide, Rock Tomb"],["Sandslash",28,150,150,172,"Ground","None","Metal Claw, Mud Shot","Earthquake, Rock Tomb, Bulldoze","Metal Claw, Mud ShotEarthquake, Rock Tomb, Bulldoze"],["Nidoran â™€",29,110,100,104,"Poison","None","Bite, Poison Sting","Poison Fang, Body Slam, Sludge Bomb","Bite, Poison StingPoison Fang, Body Slam, Sludge Bomb"],["Nidorina",30,140,132,136,"Poison","None","Bite, Poison Sting","Poison Fang, Dig, Sludge Bomb","Bite, Poison StingPoison Fang, Dig, Sludge Bomb"],["Nidoqueen",31,180,184,190,"Poison","Ground","Poison Jab, Bite","Earthquake, Sludge Wave, Stone Edge","Poison Jab, BiteEarthquake, Sludge Wave, Stone Edge"],["Nidoran â™‚",32,92,110,94,"Poison","None","Peck, Poison Sting","Horn Attack, Body Slam, Sludge Bomb","Peck, Poison StingHorn Attack, Body Slam, Sludge Bomb"],["Nidorino",33,122,142,128,"Poison","None","Poison Jab, Poison Sting","Horn Attack, Dig, Sludge Bomb","Poison Jab, Poison StingHorn Attack, Dig, Sludge Bomb"],["Nidoking",34,162,204,170,"Poison","Ground","Poison Jab, Fury Cutter","Earthquake, Sludge Wave, Megahorn","Poison Jab, Fury CutterEarthquake, Sludge Wave, Megahorn"],["Clefairy",35,140,116,124,"Fairy","None","Pound, Zen Headbutt","Disarming Voice, Body Slam, Moonblast","Pound, Zen HeadbuttDisarming Voice, Body Slam, Moonblast"],["Clefable",36,190,178,178,"Fairy","None","Pound, Zen Headbutt","Dazzling Gleam, Psychic, Moonblast","Pound, Zen HeadbuttDazzling Gleam, Psychic, Moonblast"],["Vulpix",37,76,106,118,"Fire","None","Quick Attack, Ember","Body Slam, Flamethrower, Flame Charge","Quick Attack, EmberBody Slam, Flamethrower, Flame Charge"],["Ninetales",38,146,176,194,"Fire","None","Feint Attack, Ember","Heat Wave, Flamethrower, Fire Blast","Feint Attack, EmberHeat Wave, Flamethrower, Fire Blast"],["Jigglypuff",39,230,98,54,"Normal","Fairy","Pound, Feint Attack","Disarming Voice, Body Slam, Dazzling Gleam","Pound, Feint AttackDisarming Voice, Body Slam, Dazzling Gleam"],["Wigglytuff",40,280,168,108,"Normal","Fairy","Pound, Feint Attack","Dazzling Gleam, Hyper Beam, Play Rough","Pound, Feint AttackDazzling Gleam, Hyper Beam, Play Rough"],["Zubat",41,80,88,90,"Poison","Flying","Quick Attack, Bite","Poison Fang, Air Cutter, Sludge Bomb","Quick Attack, BitePoison Fang, Air Cutter, Sludge Bomb"],["Golbat",42,150,164,164,"Poison","Flying","Wing Attack, Bite","Poison Fang, Air Cutter, Ominous Wind","Wing Attack, BitePoison Fang, Air Cutter, Ominous Wind"],["Oddish",43,90,134,130,"Grass","Poison","Razor Leaf, Acid","Seed Bomb, Sludge Bomb, Moonblast","Razor Leaf, AcidSeed Bomb, Sludge Bomb, Moonblast"],["Gloom",44,120,162,158,"Grass","Poison","Razor Leaf, Acid","Petal Blizzard, Sludge Bomb, Moonblast","Razor Leaf, AcidPetal Blizzard, Sludge Bomb, Moonblast"],["Vileplume",45,150,202,190,"Grass","Poison","Razor Leaf, Acid","Petal Blizzard, Solar Beam, Moonblast","Razor Leaf, AcidPetal Blizzard, Solar Beam, Moonblast"],["Paras",46,70,122,120,"Bug","Grass","Scratch, Bug Bite","Cross Poison, X Scissor, Seed Bomb","Scratch, Bug BiteCross Poison, X Scissor, Seed Bomb"],["Parasect",47,120,162,170,"Bug","Grass","Bug Bite, Fury Cutter","Cross Poison, X Scissor, Solar Beam","Bug Bite, Fury CutterCross Poison, X Scissor, Solar Beam"],["Venonat",48,120,108,118,"Bug","Poison","Bug Bite, Confusion","Poison Fang, Psybeam, Signal Beam","Bug Bite, ConfusionPsybeam, Dazzling Gleam, Shadow Ball"],["Venomoth",49,140,172,154,"Bug","Poison","Bug Bite, Confusion","Poison Fang, Psychic, Bug Buzz","Bug Bite, ConfusionPoison Fang, Psychic, Bug Buzz"],["Diglett",50,20,108,86,"Ground","None","Mud Slap, Scratch","Dig, Mud Bomb, Rock Tomb","Mud Slap, ScratchDig, Mud Bomb, Rock Tomb"],["Dugtrio",51,70,148,140,"Ground","None","Sucker Punch, Mud Slap","Earthquake, Mud Bomb, Stone Edge","Sucker Punch, Mud SlapEarthquake, Mud Bomb, Stone Edge"],["Meowth",52,80,104,94,"Normal","None","Scratch, Bite","Night Slash, Dark Pulse, Body Slam","Scratch, BiteNight Slash, Dark Pulse, Body Slam"],["Persian",53,130,156,146,"Normal","None","Scratch, Feint Attack","Night Slash, Power Gem, Play Rough","Scratch, Feint AttackNight Slash, Power Gem, Play Rough"],["Psyduck",54,100,132,112,"Water","None","Water Gun, Zen Headbutt","Psybeam, Aqua Tail, Cross Chop","Water Gun, Zen HeadbuttPsybeam, Aqua Tail, Cross Chop"],["Golduck",55,160,194,176,"Water","None","Water Gun, Confusion","Psychic, Hydro Pump, Ice Beam","Water Gun, ConfusionPsychic, Hydro Pump, Ice Beam"],["Mankey",56,80,122,96,"Fighting","None","Karate Chop, Scratch","Cross Chop, Low Sweep, Brick Break","Karate Chop, ScratchCross Chop, Low Sweep, Brick Break"],["Primeape",57,130,178,150,"Fighting","None","Low Kick, Karate Chop","Cross Chop, Low Sweep, Night Slash","Low Kick, Karate ChopCross Chop, Low Sweep, Night Slash"],["Growlithe",58,110,156,110,"Fire","None","Ember, Bite","Flame Wheel, Body Slam, Flamethrower","Ember, BiteFlame Wheel, Body Slam, Flamethrower"],["Arcanine",59,180,230,180,"Fire","None","Fire Fang, Bite","Fire Blast, Flamethrower, Bulldoze","Fire Fang, BiteFire Blast, Flamethrower, Bulldoze"],["Poliwag",60,80,108,98,"Water","None","Bubble, Mud Shot","Bubble Beam, Mud Bomb, Body Slam","Bubble, Mud ShotBubble Beam, Mud Bomb, Body Slam"],["Poliwhirl",61,130,132,132,"Water","None","Bubble, Mud Shot","Scald, Mud Bomb, Bubble Beam","Bubble, Mud ShotScald, Mud Bomb, Bubble Beam"],["Poliwrath",62,180,180,202,"Water","Fighting","Bubble, Mud Shot","Hydro Pump, Submission, Ice Punch","Bubble, Mud ShotHydro Pump, Submission, Ice Punch"],["Abra",63,50,110,76,"Psychic","None","Zen Headbutt","Psyshock, Signal Beam, Shadow Ball","Zen HeadbuttPsyshock, Signal Beam, Shadow Ball"],["Kadabra",64,80,150,112,"Psychic","None","Psycho Cut, Confusion","Psybeam, Dazzling Gleam, Shadow Ball","Psycho Cut, ConfusionPsybeam, Dazzling Gleam, Shadow Ball"],["Alakazam",65,110,186,152,"Psychic","None","Psycho Cut, Confusion","Psychic, Dazzling Gleam, Shadow Ball","Psycho Cut, ConfusionPsychic, Dazzling Gleam, Shadow Ball"],["Machop",66,140,118,96,"Fighting","None","Low Kick, Karate Chop","Low Sweep, Brick Break, Cross Chop","Low Kick, Karate ChopLow Sweep, Brick Break, Cross Chop"],["Machoke",67,160,154,144,"Fighting","None","Low Kick, Karate Chop","Submission, Brick Break, Cross Chop","Low Kick, Karate ChopSubmission, Brick Break, Cross Chop"],["Machamp",68,180,198,180,"Fighting","None","Bullet Punch, Karate Chop","Stone Edge, Submission, Cross Chop","Bullet Punch, Karate ChopStone Edge, Submission, Cross Chop"],["Bellsprout",69,100,158,78,"Grass","Poison","Vine Whip, Acid","Power Whip, Sludge Bomb, Wrap","Vine Whip, AcidPower Whip, Sludge Bomb, Wrap"],["Weepinbell",70,130,190,110,"Grass","Poison","Razor Leaf, Acid","Power Whip, Sludge Bomb, Seed Bomb","Razor Leaf, AcidPower Whip, Sludge Bomb, Seed Bomb"],["Victreebel",71,160,222,152,"Grass","Poison","Razor Leaf, Acid","Leaf Blade, Sludge Bomb, Solar Beam","Razor Leaf, AcidLeaf Blade, Sludge Bomb, Solar Beam"],["Tentacool",72,80,106,136,"Water","Poison","Bubble, Poison Sting","Bubble Beam, Water Pulse, Wrap","Bubble, Poison StingBubble Beam, Water Pulse, Wrap"],["Tentacruel",73,160,170,196,"Water","Poison","Acid, Poison Jab","Hydro Pump, Sludge Wave, Blizzard","Acid, Poison JabHydro Pump, Sludge Wave, Blizzard"],["Geodude",74,80,106,118,"Rock","Ground","Rock Throw, Tackle","Rock Slide, Rock Tomb, Dig","Rock Throw, TackleRock Slide, Rock Tomb, Dig"],["Graveler",75,110,142,156,"Rock","Ground","Rock Throw, Mud Slap","Dig, Stone Edge, Rock Slide","Rock Throw, Mud SlapDig, Stone Edge, Rock Slide"],["Golem",76,160,176,198,"Rock","Ground","Rock Throw, Mud Slap","Stone Edge, Ancient Power, Earthquake","Rock Throw, Mud SlapStone Edge, Ancient Power, Earthquake"],["Ponyta",77,100,168,138,"Fire","None","Tackle, Ember","Flame Charge, Flame Wheel, Fire Blast","Tackle, EmberFlame Charge, Flame Wheel, Fire Blast"],["Rapidash",78,130,200,170,"Fire","None","Low Kick, Ember","Fire Blast, Drill Run, Heat Wave","Low Kick, EmberFire Blast, Drill Run, Heat Wave"],["Slowpoke",79,180,110,110,"Water","Psychic","Water Gun, Confusion","Water Pulse, Psyshock, Psychic","Water Gun, ConfusionWater Pulse, Psyshock, Psychic"],["Slowbro",80,190,184,198,"Water","Psychic","Water Gun, Confusion","Water Pulse, Psychic, Ice Beam","Water Gun, ConfusionWater Pulse, Psychic, Ice Beam"],["Magnemite",81,50,128,138,"Electric","Steel","Spark, Thunder Shock","Discharge, Magnet Bomb, Thunderbolt","Spark, Thunder ShockDischarge, Magnet Bomb, Thunderbolt"],["Magneton",82,100,186,180,"Electric","Steel","Spark, Thunder Shock","Discharge, Magnet Bomb, Flash Cannon","Spark, Thunder ShockDischarge, Magnet Bomb, Flash Cannon"],["Farfetch'd",83,104,138,132,"Normal","Flying","Cut, Fury Cutter","Aerial Ace, Air Cutter, Leaf Blade","Cut, Fury CutterAerial Ace, Air Cutter, Leaf Blade"],["Doduo",84,70,126,96,"Normal","Flying","Peck, Quick Attack","Drill Peck, Aerial Ace, Swift","Peck, Quick AttackDrill Peck, Aerial Ace, Swift"],["Dodrio",85,120,182,150,"Normal","Flying","Feint Attack, Steel Wing","Drill Peck, Aerial Ace, Air Cutter","Feint Attack, Steel WingDrill Peck, Aerial Ace, Air Cutter"],["Seel",86,130,104,138,"Water","None","Ice Shard, Lick","Aqua Jet, Icy Wind, Aqua Tail","Ice Shard, LickAqua Jet, Icy Wind, Aqua Tail"],["Dewgong",87,180,156,192,"Water","Ice","Frost Breath, Ice Shard","Icy Wind, Aqua Jet, Blizzard","Frost Breath, Ice ShardIcy Wind, Aqua Jet, Blizzard"],["Grimer",88,160,124,110,"Poison","None","Poison Jab, Mud Slap","Sludge, Mud Bomb, Sludge Bomb","Poison Jab, Mud SlapSludge, Mud Bomb, Sludge Bomb"],["Muk",89,210,180,188,"Poison","None","Lick, Poison Jab","Dark Pulse, Gunk Shot, Sludge Wave","Lick, Poison JabDark Pulse, Gunk Shot, Sludge Wave"],["Shellder",90,60,120,112,"Water","None","Ice Shard, Tackle","Bubble Beam, Water Pulse, Icy Wind","Ice Shard, TackleBubble Beam, Water Pulse, Icy Wind"],["Cloyster",91,100,196,196,"Water","Ice","Frost Breath, Ice Shard","Icy Wind, Hydro Pump, Blizzard","Frost Breath, Ice ShardIcy Wind, Hydro Pump, Blizzard"],["Gastly",92,60,136,82,"Ghost","Poison","Lick, Sucker Punch","Ominous Wind, Dark Pulse, Sludge Bomb","Lick, Sucker PunchOminous Wind, Dark Pulse, Sludge Bomb"],["Haunter",93,90,172,118,"Ghost","Poison","Shadow Claw, Lick","Shadow Ball, Dark Pulse, Sludge Bomb","Shadow Claw, LickShadow Ball, Dark Pulse, Sludge Bomb"],["Gengar",94,120,204,156,"Ghost","Poison","Sucker Punch, Shadow Claw","Shadow Ball, Dark Pulse, Sludge Bomb","Sucker Punch, Shadow ClawShadow Ball, Dark Pulse, Sludge Bomb"],["Onix",95,70,90,186,"Rock","Ground","Rock Throw, Tackle","Rock Slide, Stone Edge, Iron Head","Rock Throw, TackleRock Slide, Stone Edge, Iron Head"],["Drowzee",96,120,104,140,"Psychic","None","Pound, Confusion","Psybeam, Psyshock, Psychic","Pound, ConfusionPsybeam, Psyshock, Psychic"],["Hypno",97,170,162,196,"Psychic","None","Zen Headbutt, Confusion","Psyshock, Psychic, Shadow Ball","Zen Headbutt, ConfusionPsyshock, Psychic, Shadow Ball"],["Krabby",98,60,116,110,"Water","None","Bubble, Mud Shot","Vice Grip, Bubble Beam, Water Pulse","Bubble, Mud ShotVice Grip, Bubble Beam, Water Pulse"],["Kingler",99,110,178,168,"Water","None","Metal Claw, Mud Shot","Vice Grip, X Scissor, Water Pulse","Metal Claw, Mud ShotVice Grip, X Scissor, Water Pulse"],["Voltorb",100,80,102,124,"Electric","None","Spark, Tackle","Discharge, Thunderbolt, Signal Beam","Spark, TackleDischarge, Thunderbolt, Signal Beam"],["Electrode",101,120,150,174,"Electric","None","Spark, Tackle","Discharge, Thunderbolt, Hyper Beam","Spark, TackleDischarge, Thunderbolt, Hyper Beam"],["Exeggcute",102,120,110,132,"Grass","Psychic","Confusion","Seed Bomb, Psychic, Ancient Power","ConfusionSeed Bomb, Psychic, Ancient Power"],["Exeggutor",103,190,232,164,"Grass","Psychic","Confusion, Zen Headbutt","Seed Bomb, Psychic, Solar Beam","Confusion, Zen HeadbuttSeed Bomb, Psychic, Solar Beam"],["Cubone",104,100,102,150,"Ground","None","Mud Slap, Rock Smash","Bone Club, Dig, Bulldoze","Mud Slap, Rock SmashBone Club, Dig, Bulldoze"],["Marowak",105,120,140,202,"Ground","None","Mud Slap, Rock Smash","Bone Club, Dig, Earthquake","Mud Slap, Rock SmashBone Club, Dig, Earthquake"],["Hitmonlee",106,100,148,172,"Fighting","None","Low Kick, Rock Smash","Brick Break, Low Sweep, Stone Edge","Low Kick, Rock SmashBrick Break, Low Sweep, Stone Edge"],["Hitmonchan",107,100,138,204,"Fighting","None","Bullet Punch, Rock Smash","Fire Punch, Ice Punch, Thunder Punch, Brick Break","Bullet Punch, Rock SmashFire Punch, Ice Punch, Thunder Punch, Brick Break"],["Lickitung",108,180,126,160,"Normal","None","Lick, Zen Headbutt","Hyper Beam, Stomp, Power Whip","Lick, Zen HeadbuttHyper Beam, Stomp, Power Whip"],["Koffing",109,80,136,142,"Poison","None","Tackle","Sludge, Sludge Bomb, Dark Pulse"," TackleSludge, Sludge Bomb, Dark Pulse"],["Weezing",110,130,190,198,"Poison","None","Tackle","Sludge Bomb, Shadow Ball, Dark Pulse","TackleSludge Bomb, Shadow Ball, Dark Pulse"],["Rhyhorn",111,160,110,116,"Ground","Rock","Mud Slap, Rock Smash","Bulldoze, Horn Attack, Stomp","Mud Slap, Rock SmashBulldoze, Horn Attack, Stomp"],["Rhydon",112,210,166,160,"Ground","Rock","Mud Slap, Rock Smash","Megahorn, Earthquake, Stone Edge","Mud Slap, Rock SmashMegahorn, Earthquake, Stone Edge"],["Chansey",113,500,40,60,"Normal","None","Pound, Zen Headbutt","Psychic, Hyper Beam, Dazzling Gleam","Pound, Zen HeadbuttPsychic, Hyper Beam, Dazzling Gleam"],["Tangela",114,130,164,152,"Grass","None","Vine Whip","Power Whip, Sludge Bomb, Solar Beam","Vine WhipPower Whip, Sludge Bomb, Solar Beam"],["Kangaskhan",115,210,142,178,"Normal","None","Mud Slap, Low Kick","Brick Break, Earthquake, Stomp","Mud Slap, Low KickBrick Break, Earthquake, Stomp"],["Horsea",116,60,122,100,"Water","None","Water Gun, Bubble","Bubble Beam, Dragon Pulse, Flash Cannon","Water Gun, BubbleBubble Beam, Dragon Pulse, Flash Cannon"],["Seadra",117,110,176,150,"Water","None","Water Gun, Dragon Breath","Blizzard, Dragon Pulse, Hydro Pump","Water Gun, Dragon BreathBlizzard, Dragon Pulse, Hydro Pump"],["Goldeen",118,90,112,126,"Water","None","Peck, Mud Shot","Water Pulse, Horn Attack, Aqua Tail","Peck, Mud ShotWater Pulse, Horn Attack, Aqua Tail"],["Seaking",119,160,172,160,"Water","None","Peck, Poison Jab","Icy Wind, Drill Run, Megahorn","Peck, Poison JabIcy Wind, Drill Run, Megahorn"],["Staryu",120,60,130,128,"Water","None","Tackle, Water Gun","Swift, Bubble Beam, Power Gem","Tackle, Water GunSwift, Bubble Beam, Power Gem"],["Starmie",121,120,194,192,"Water","Psychic","Tackle, Water Gun","Hydro Pump, Power Gem, Psychic","Tackle, Water GunHydro Pump, Power Gem, Psychic"],["Mr. Mime",122,80,154,196,"Psychic","Fairy","Confusion, Zen Headbutt","Psybeam, Psychic, Shadow Ball","Confusion, Zen HeadbuttPsybeam, Psychic, Shadow Ball"],["Scyther",123,140,176,180,"Bug","Flying","Fury Cutter, Steel Wing","Night Slash, X Scissor, Bug Buzz","Fury Cutter, Steel WingNight Slash, X Scissor, Bug Buzz"],["Jynx",124,130,172,134,"Ice","Psychic","Frost Breath, Pound","Draining Kiss, Ice Punch, Psyshock","Frost Breath, PoundDraining Kiss, Ice Punch, Psyshock"],["Electabuzz",125,130,198,160,"Electric","None","Thunder Shock, Low Kick","Thunder Punch, Thunderbolt, Thunder","Thunder Shock, Low KickThunder Punch, Thunderbolt, Thunder"],["Magmar",126,130,214,158,"Fire","None","Ember, Karate Chop","Fire Blast, Fire Punch, Flamethrower","Ember, Karate ChopFire Blast, Fire Punch, Flamethrower"],["Pinsir",127,130,184,186,"Bug","None","Rock Smash, Fury Cutter","Vice Grip, X Scissor, Submission","Rock Smash, Fury CutterVice Grip, X Scissor, Submission"],["Tauros",128,150,148,184,"Normal","None","Tackle, Zen Headbutt","Horn Attack, Iron Head, Earthquake","Tackle, Zen HeadbuttHorn Attack, Iron Head, Earthquake"],["Magikarp",129,40,42,84,"Water","None","Splash","Struggle","SplashStruggle"],["Gyarados",130,190,192,196,"Water","Flying","Bite","Hydro Pump, Twister, Dragon Pulse","BiteHydro Pump, Twister, Dragon Pulse"],["Lapras",131,260,186,190,"Water","Ice","Frost Breath, Ice Shard","Dragon Pulse, Ice Beam, Blizzard","Frost Breath, Ice ShardDragon Pulse, Ice Beam, Blizzard"],["Ditto",132,96,110,110,"Normal","None","Pound","Struggle","PoundStruggle"],["Eevee",133,110,114,128,"Normal","None","Quick Attack, Tackle","Dig, Swift, Body Slam","Quick Attack, TackleDig, Swift, Body Slam"],["Vaporeon",134,260,186,168,"Water","None","Water Gun","Water Pulse, Hydro Pump, Aqua Tail","Water GunWater Pulse, Hydro Pump, Aqua Tail"],["Jolteon",135,130,192,174,"Electric","None","Thunder Shock","Discharge, Thunderbolt, Thunder","Thunder ShockDischarge, Thunderbolt, Thunder"],["Flareon",136,130,238,178,"Fire","None","Ember","Fire Blast, Flamethrower, Heat Wave","EmberFire Blast, Flamethrower, Heat Wave"],["Porygon",137,130,156,158,"Normal","None","Zen Headbutt, Tackle","Psybeam, Signal Beam, Discharge","Zen Headbutt, TacklePsybeam, Signal Beam, Discharge"],["Omanyte",138,70,132,160,"Rock","Water","Water Gun, Mud Shot","Ancient Power, Brine, Rock Tomb","Water Gun, Mud ShotAncient Power, Brine, Rock Tomb"],["Omastar",139,140,180,202,"Rock","Water","Mud Shot, Water Gun","Ancient Power, Hydro Pump, Rock Slide","Mud Shot, Water GunAncient Power, Hydro Pump, Rock Slide"],["Kabuto",140,60,148,142,"Rock","Water","Scratch, Mud Shot","Ancient Power, Aqua Jet, Rock Tomb","Scratch, Mud ShotAncient Power, Aqua Jet, Rock Tomb"],["Kabutops",141,120,190,190,"Rock","Water","Mud Shot, Fury Cutter","Ancient Power, Water Pulse, Stone Edge","Mud Shot, Fury CutterAncient Power, Water Pulse, Stone Edge"],["Aerodactyl",142,160,182,162,"Rock","Flying","Steel Wing, Bite","Ancient Power, Iron Head, Hyper Beam","Steel Wing, BiteAncient Power, Iron Head, Hyper Beam"],["Snorlax",143,320,180,180,"Normal","None","Zen Headbutt, Lick","Body Slam, Hyper Beam, Earthquake","Zen Headbutt, LickBody Slam, Hyper Beam, Earthquake"],["Articuno",144,180,198,242,"Ice","Flying","Frost Breath","Ice Beam, Icy Wind, Blizzard","Frost BreathIce Beam, Icy Wind, Blizzard"],["Zapdos",145,180,232,194,"Electric","Flying","Thunder Shock","Discharge, Thunderbolt, Thunder","Thunder ShockDischarge, Thunderbolt, Thunder"],["Moltres",146,180,242,194,"Fire","Flying","Ember","Fire Blast, Heat Wave, Flamethrower","EmberFire Blast, Heat Wave, Flamethrower"],["Dratini",147,82,128,110,"Dragon","None","Dragon Breath","Wrap, Twister, Aqua Tail","Dragon BreathWrap, Twister, Aqua Tail"],["Dragonair",148,122,170,152,"Dragon","None","Dragon Breath","Wrap, Aqua Tail, Dragon Pulse","Dragon BreathWrap, Aqua Tail, Dragon Pulse"],["Dragonite",149,182,250,212,"Dragon","Flying","Dragon Breath, Steel Wing","Dragon Pulse, Hyper Beam, Dragon Claw","Dragon Breath, Steel WingDragon Pulse, Hyper Beam, Dragon Claw"],["Mewtwo",150,212,284,202,"Psychic","None","Psycho Cut, Confusion","Psychic, Shadow Ball, Hyper Beam","Psycho Cut, ConfusionPsychic, Shadow Ball, Hyper Beam"],["Mew",151,200,220,220,"Psychic","None","Pound","Blizzard, Earthquake, Psychic, Dragon Pulse, Thunder, Fire Blast, Solar Beam, Hyper Beam","PoundBlizzard, Earthquake, Psychic, Dragon Pulse, Thunder, Fire Blast, Solar Beam, Hyper Beam"],["Chikorita",152,90,112,144,"Grass","none","","",""],["Bayleef",153,120,140,176,"Grass","none","","",""],["Meganium",154,160,182,218,"Grass","none","","",""],["Cyndaquil",155,78,128,108,"Fire","none","","",""],["Quilava",156,116,160,140,"Fire","none","","",""],["Typhlosion",157,156,212,182,"Fire","none","","",""],["Totodile",158,100,120,124,"Water","none","","",""],["Croconaw",159,130,152,158,"Water","none","","",""],["Feraligatr",160,170,200,200,"Water","none","","",""],["Sentret",161,70,90,88,"Normal","none","","",""],["Furret",162,170,136,138,"Normal","none","","",""],["Hoothoot",163,120,80,96,"Normal","Flying","","",""],["Noctowl",164,200,140,156,"Normal","Flying","","",""],["Ledyba",165,80,72,112,"Bug","Flying","","",""],["Ledian",166,110,106,166,"Bug","Flying","","",""],["Spinarak",167,80,108,90,"Bug","Poison","","",""],["Ariados",168,140,160,142,"Bug","Poison","","",""],["Crobat",169,170,182,182,"Poison","Flying","","",""],["Chinchou",170,150,108,108,"Water","Electric","","",""],["Lanturn",171,250,150,150,"Water","Electric","","",""],["Pichu",172,40,90,62,"Electric","none","","",""],["Cleffa",173,100,74,86,"Fairy","none","","",""],["Igglybuff",174,180,78,42,"Normal","Fairy","","",""],["Togepi",175,70,66,138,"Fairy","none","","",""],["Togetic",176,110,126,202,"Fairy","Flying","","",""],["Natu",177,80,136,106,"Psychic","Flying","","",""],["Xatu",178,130,188,160,"Psychic","Flying","","",""],["Mareep",179,110,114,96,"Electric","none","","",""],["Flaaffy",180,140,146,128,"Electric","none","","",""],["Ampharos",181,180,200,190,"Electric","none","","",""],["Bellossom",182,150,184,210,"Grass","none","","",""],["Marill",183,140,52,112,"Water","Fairy","","",""],["Azumarill",184,200,124,174,"Water","Fairy","","",""],["Sudowoodo",185,140,120,184,"Rock","none","","",""],["Politoed",186,180,182,190,"Water","none","","",""],["Hoppip",187,70,84,108,"Grass","Flying","","",""],["Skiploom",188,110,108,132,"Grass","Flying","","",""],["Jumpluff",189,150,130,184,"Grass","Flying","","",""],["Aipom",190,110,124,128,"Normal","none","","",""],["Sunkern",191,60,70,70,"Grass","none","","",""],["Sunflora",192,150,188,148,"Grass","none","","",""],["Yanma",193,130,160,110,"Bug","Flying","","",""],["Wooper",194,110,74,74,"Water","Ground","","",""],["Quagsire",195,190,160,160,"Water","Ground","","",""],["Espeon",196,130,204,172,"Psychic","none","","",""],["Umbreon",197,190,142,256,"Dark","none","","",""],["Murkrow",198,120,190,104,"Dark","Flying","","",""],["Slowking",199,190,184,198,"Water","Psychic","","",""],["Misdreavus",200,120,162,162,"Ghost","none","","",""],["Unown",201,96,158,110,"Psychic","none","","",""],["Wobbuffet",202,380,78,128,"Psychic","none","","",""],["Girafarig",203,140,188,148,"Normal","Psychic","","",""],["Pineco",204,100,104,120,"Bug","none","","",""],["Forretress",205,150,160,196,"Bug","Steel","","",""],["Dunsparce",206,200,148,148,"Normal","none","","",""],["Gligar",207,130,120,184,"Ground","Flying","","",""],["Steelix",208,150,148,238,"Steel","Ground","","",""],["Snubbull",209,120,124,100,"Fairy","none","","",""],["Granbull",210,180,184,148,"Fairy","none","","",""],["Qwilfish",211,130,164,146,"Water","Poison","","",""],["Scizor",212,140,186,196,"Bug","Steel","","",""],["Shuckle",213,40,24,464,"Bug","Rock","","",""],["Heracross",214,160,160,188,"Bug","Fighting","","",""],["Sneasel",215,110,136,150,"Dark","Ice","","",""],["Teddiursa",216,120,140,112,"Normal","none","","",""],["Ursaring",217,180,212,164,"Normal","none","","",""],["Slugma",218,80,114,88,"Fire","none","","",""],["Magcargo",219,100,138,206,"Fire","Rock","","",""],["Swinub",220,100,92,84,"Ice","Ground","","",""],["Piloswine",221,200,170,152,"Ice","Ground","","",""],["Corsola",222,110,132,182,"Water","Rock","","",""],["Remoraid",223,70,146,86,"Water","none","","",""],["Octillery",224,150,224,164,"Water","none","","",""],["Delibird",225,90,136,108,"Ice","Flying","","",""],["Mantine",226,130,130,214,"Water","Flying","","",""],["Skarmory",227,130,130,214,"Steel","Flying","","",""],["Houndour",228,90,154,94,"Dark","Fire","","",""],["Houndoom",229,150,218,146,"Dark","Fire","","",""],["Kingdra",230,150,208,208,"Water","Dragon","","",""],["Phanpy",231,180,110,110,"Ground","none","","",""],["Donphan",232,180,184,184,"Ground","none","","",""],["Porygon2",233,170,198,200,"Normal","none","","",""],["Stantler",234,146,198,146,"Normal","none","","",""],["Smeargle",235,110,58,96,"Normal","none","","",""],["Tyrogue",236,70,82,82,"Fighting","none","","",""],["Hitmontop",237,100,132,222,"Fighting","none","","",""],["Smoochum",238,90,118,78,"Ice","Psychic","","",""],["Elekid",239,90,148,110,"Electric","none","","",""],["Magby",240,90,164,108,"Fire","none","","",""],["Miltank",241,190,134,192,"Normal","none","","",""],["Blissey",242,510,70,88,"Normal","none","","",""],["Raikou",243,180,220,194,"Electric","none","","",""],["Entei",244,230,224,180,"Fire","none","","",""],["Suicune",245,200,182,248,"Water","none","","",""],["Larvitar",246,100,120,112,"Rock","Ground","","",""],["Pupitar",247,140,162,154,"Rock","Ground","","",""],["Tyranitar",248,200,242,226,"Rock","Dark","","",""],["Lugia",249,212,200,304,"Psychic","Flying","","",""],["Ho-Oh",250,212,258,254,"Fire","Flying","","",""],["Celebi",251,200,220,220,"Psychic","Grass","","",""],["Treecko",252,80,124,104,"Grass","none","","",""],["Grovyle",253,100,168,128,"Grass","none","","",""],["Sceptile",254,140,210,170,"Grass","none","","",""],["Torchic",255,90,144,102,"Fire","none","","",""],["Combusken",256,120,184,134,"Fire","Fighting","","",""],["Blaziken",257,160,248,158,"Fire","Fighting","","",""],["Mudkip",258,100,130,112,"Water","none","","",""],["Marshtomp",259,140,156,154,"Water","Ground","","",""],["Swampert",260,200,208,196,"Water","Ground","","",""],["Poochyena",261,70,94,76,"Dark","none","","",""],["Mightyena",262,140,164,146,"Dark","none","","",""],["Zigzagoon",263,76,76,98,"Normal","none","","",""],["Linoone",264,156,138,142,"Normal","none","","",""],["Wurmple",265,90,68,74,"Bug","none","","",""],["Silcoon",266,100,66,82,"Bug","none","","",""],["Beautifly",267,120,184,116,"Bug","Flying","","",""],["Cascoon",268,100,66,82,"Bug","none","","",""],["Dustox",269,120,116,174,"Bug","Poison","","",""],["Lotad",270,80,80,88,"Water","Grass","","",""],["Lombre",271,120,124,132,"Water","Grass","","",""],["Ludicolo",272,160,176,184,"Water","Grass","","",""],["Seedot",273,80,80,88,"Grass","none","","",""],["Nuzleaf",274,140,146,96,"Grass","Dark","","",""],["Shiftry",275,180,208,138,"Grass","Dark","","",""],["Taillow",276,80,100,78,"Normal","Flying","","",""],["Swellow",277,120,152,132,"Normal","Flying","","",""],["Wingull",278,80,100,78,"Water","Flying","","",""],["Pelipper",279,120,146,184,"Water","Flying","","",""],["Ralts",280,56,80,72,"Psychic","Fairy","","",""],["Kirlia",281,76,110,102,"Psychic","Fairy","","",""],["Gardevoir",282,136,198,190,"Psychic","Fairy","","",""],["Surskit",283,80,94,98,"Bug","Water","","",""],["Masquerain",284,140,154,158,"Bug","Flying","","",""],["Shroomish",285,120,92,132,"Grass","none","","",""],["Breloom",286,120,194,156,"Grass","Fighting","","",""],["Slakoth",287,120,102,102,"Normal","none","","",""],["Vigoroth",288,160,152,152,"Normal","none","","",""],["Slaking",289,300,266,182,"Normal","none","","",""],["Nincada",290,62,86,116,"Bug","Ground","","",""],["Ninjask",291,122,160,120,"Bug","Flying","","",""],["Shedinja",292,2,116,86,"Bug","Ghost","","",""],["Whismur",293,128,112,56,"Normal","none","","",""],["Loudred",294,168,156,100,"Normal","none","","",""],["Exploud",295,208,198,152,"Normal","none","","",""],["Makuhita",296,144,80,70,"Fighting","none","","",""],["Hariyama",297,288,152,134,"Fighting","none","","",""],["Azurill",298,100,48,88,"Normal","Fairy","","",""],["Nosepass",299,60,100,232,"Rock","none","","",""],["Skitty",300,100,94,94,"Normal","none","","",""],["Delcatty",301,140,136,136,"Normal","none","","",""],["Sableye",302,100,154,154,"Dark","Ghost","","",""],["Mawile",303,100,150,150,"Steel","Fairy","","",""],["Aron",304,100,116,138,"Steel","Rock","","",""],["Lairon",305,120,146,180,"Steel","Rock","","",""],["Aggron",306,140,176,222,"Steel","Rock","","",""],["Meditite",307,60,96,126,"Fighting","Psychic","","",""],["Medicham",308,120,138,168,"Fighting","Psychic","","",""],["Electrike",309,80,124,96,"Electric","none","","",""],["Manectric",310,140,198,140,"Electric","none","","",""],["Plusle",311,120,150,130,"Electric","none","","",""],["Minun",312,120,130,150,"Electric","none","","",""],["Volbeat",313,130,136,146,"Bug","none","","",""],["Illumise",314,130,136,146,"Bug","none","","",""],["Roselia",315,100,172,136,"Grass","Poison","","",""],["Gulpin",316,140,98,118,"Poison","none","","",""],["Swalot",317,200,160,180,"Poison","none","","",""],["Carvanha",318,90,170,56,"Water","Dark","","",""],["Sharpedo",319,140,234,100,"Water","Dark","","",""],["Wailmer",320,260,156,86,"Water","none","","",""],["Wailord",321,340,196,106,"Water","none","","",""],["Numel",322,120,136,96,"Fire","Ground","","",""],["Camerupt",323,140,218,158,"Fire","Ground","","",""],["Torkoal",324,140,178,206,"Fire","none","","",""],["Spoink",325,120,100,122,"Psychic","none","","",""],["Grumpig",326,160,146,188,"Psychic","none","","",""],["Spinda",327,120,136,136,"Normal","none","","",""],["Trapinch",328,90,140,96,"Ground","none","","",""],["Vibrava",329,100,136,116,"Ground","Dragon","","",""],["Flygon",330,160,198,180,"Ground","Dragon","","",""],["Cacnea",331,100,182,92,"Grass","none","","",""],["Cacturne",332,140,244,134,"Grass","Dark","","",""],["Swablu",333,90,94,148,"Normal","Flying","","",""],["Altaria",334,150,158,212,"Dragon","Flying","","",""],["Zangoose",335,146,186,138,"Normal","none","","",""],["Seviper",336,146,216,136,"Poison","none","","",""],["Lunatone",337,140,162,166,"Rock","Psychic","","",""],["Solrock",338,140,162,166,"Rock","Psychic","","",""],["Barboach",339,100,110,100,"Water","Ground","","",""],["Whiscash",340,220,170,160,"Water","Ground","","",""],["Corphish",341,86,138,108,"Water","none","","",""],["Crawdaunt",342,126,222,152,"Water","Dark","","",""],["Baltoy",343,80,94,138,"Ground","Psychic","","",""],["Claydol",344,120,158,242,"Ground","Psychic","","",""],["Lileep",345,132,110,174,"Rock","Grass","","",""],["Cradily",346,172,176,216,"Rock","Grass","","",""],["Anorith",347,90,140,118,"Rock","Bug","","",""],["Armaldo",348,150,200,192,"Rock","Bug","","",""],["Feebas",349,40,42,84,"Water","none","","",""],["Milotic",350,190,172,216,"Water","none","","",""],["Castform",351,140,156,156,"Normal","none","","",""],["Kecleon",352,120,160,196,"Normal","none","","",""],["Shuppet",353,88,150,82,"Ghost","none","","",""],["Banette",354,128,212,144,"Ghost","none","","",""],["Duskull",355,40,80,190,"Ghost","none","","",""],["Dusclops",356,80,140,270,"Ghost","none","","",""],["Tropius",357,198,154,184,"Grass","Flying","","",""],["Chimecho",358,130,154,166,"Psychic","none","","",""],["Absol",359,130,214,138,"Dark","none","","",""],["Wynaut",360,190,56,106,"Psychic","none","","",""],["Snorunt",361,100,114,114,"Ice","none","","",""],["Glalie",362,160,178,178,"Ice","none","","",""],["Spheal",363,140,104,110,"Ice","Water","","",""],["Sealeo",364,180,148,154,"Ice","Water","","",""],["Walrein",365,220,190,196,"Ice","Water","","",""],["Clamperl",366,70,148,148,"Water","none","","",""],["Huntail",367,110,212,192,"Water","none","","",""],["Gorebyss",368,110,210,192,"Water","none","","",""],["Relicanth",369,200,142,198,"Water","Rock","","",""],["Luvdisc",370,86,88,140,"Water","none","","",""],["Bagon",371,90,124,98,"Dragon","none","","",""],["Shelgon",372,130,166,156,"Dragon","none","","",""],["Salamence",373,190,264,180,"Dragon","Flying","","",""],["Beldum",374,80,98,150,"Steel","Psychic","","",""],["Metang",375,120,142,194,"Steel","Psychic","","",""],["Metagross",376,160,244,234,"Steel","Psychic","","",""],["Regirock",377,160,156,296,"Rock","none","","",""],["Regice",378,160,156,296,"Ice","none","","",""],["Registeel",379,160,164,314,"Steel","none","","",""],["Latias",380,160,208,238,"Dragon","Psychic","","",""],["Latios",381,160,238,208,"Dragon","Psychic","","",""],["Kyogre",382,200,264,244,"Water","none","","",""],["Groudon",383,200,264,244,"Ground","none","","",""],["Rayquaza",384,210,320,200,"Dragon","Flying","","",""],["Jirachi",385,200,220,220,"Steel","Psychic","","",""],["Turtwig",387,110,122,130,"Grass","none","","",""],["Grotle",388,150,152,160,"Grass","none","","",""],["Torterra",389,190,196,204,"Grass","Ground","","",""],["Chimchar",390,88,132,104,"Fire","none","","",""],["Monferno",391,128,174,122,"Fire","Fighting","","",""],["Infernape",392,152,228,162,"Fire","Fighting","","",""],["Piplup",393,106,124,122,"Water","none","","",""],["Prinplup",394,128,160,158,"Water","none","","",""],["Empoleon",395,168,210,204,"Water","Steel","","",""],["Starly",396,80,96,76,"Normal","Flying","","",""],["Staravia",397,110,128,108,"Normal","Flying","","",""],["Staraptor",398,170,174,150,"Normal","Flying","","",""],["Bidoof",399,118,90,92,"Normal","none","","",""],["Bibarel",400,158,154,136,"Normal","Water","","",""],["Kricketot",401,74,60,92,"Bug","none","","",""],["Kricketune",402,154,152,118,"Bug","none","","",""],["Shinx",403,90,116,82,"Electric","none","","",""],["Luxio",404,120,158,114,"Electric","none","","",""],["Luxray",405,160,230,174,"Electric","none","","",""],["Budew",406,80,92,114,"Grass","Poison","","",""],["Roserade",407,120,206,184,"Grass","Poison","","",""],["Cranidos",408,134,138,84,"Rock","none","","",""],["Rampardos",409,194,222,124,"Rock","none","","",""],["Shieldon",410,60,94,214,"Rock","Steel","","",""],["Bastiodon",411,120,110,316,"Rock","Steel","","",""],["Burmy",412,80,70,102,"Bug","none","","",""],["Mothim",414,140,204,116,"Bug","Flying","","",""],["Combee",415,60,76,100,"Bug","Flying","","",""],["Vespiquen",416,140,172,216,"Bug","Flying","","",""],["Pachirisu",417,120,110,178,"Electric","none","","",""],["Buizel",418,110,144,84,"Water","none","","",""],["Floatzel",419,170,210,126,"Water","none","","",""],["Cherubi",420,90,104,110,"Grass","none","","",""],["Cherrim",421,140,162,166,"Grass","none","","",""],["Shellos",422,152,116,120,"Water","none","","",""],["Gastrodon",423,222,188,162,"Water","Ground","","",""],["Ambipom",424,150,176,154,"Normal","none","","",""],["Drifloon",425,180,126,94,"Ghost","Flying","","",""],["Drifblim",426,300,188,116,"Ghost","Flying","","",""],["Buneary",427,110,126,118,"Normal","none","","",""],["Lopunny",428,130,148,200,"Normal","none","","",""],["Mismagius",429,120,180,180,"Ghost","none","","",""],["Honchkrow",430,200,246,120,"Dark","Flying","","",""],["Glameow",431,98,114,98,"Normal","none","","",""],["Purugly",432,142,166,144,"Normal","none","","",""],["Chingling",433,90,102,114,"Psychic","none","","",""],["Stunky",434,126,118,104,"Poison","Dark","","",""],["Skuntank",435,206,180,146,"Poison","Dark","","",""],["Bronzor",436,114,58,182,"Steel","Psychic","","",""],["Bronzong",437,134,180,244,"Steel","Psychic","","",""],["Bonsly",438,100,62,138,"Rock","none","","",""],["Mime Jr.",439,40,100,142,"Psychic","Fairy","","",""],["Happiny",440,200,28,48,"Normal","none","","",""],["Chatot",441,152,174,106,"Normal","Flying","","",""],["Spiritomb",442,100,196,228,"Ghost","Dark","","",""],["Gible",443,116,118,102,"Dragon","Ground","","",""],["Gabite",444,136,152,138,"Dragon","Ground","","",""],["Garchomp",445,216,224,200,"Dragon","Ground","","",""],["Munchlax",446,270,122,122,"Normal","none","","",""],["Riolu",447,80,114,96,"Fighting","none","","",""],["Lucario",448,140,244,158,"Fighting","Steel","","",""],["Hippopotas",449,136,116,126,"Ground","none","","",""],["Hippowdon",450,216,188,198,"Ground","none","","",""],["Skorupi",451,80,94,156,"Poison","Bug","","",""],["Drapion",452,140,166,202,"Poison","Dark","","",""],["Croagunk",453,96,136,94,"Poison","Fighting","","",""],["Toxicroak",454,166,210,148,"Poison","Fighting","","",""],["Carnivine",455,148,204,158,"Grass","none","","",""],["Finneon",456,98,114,134,"Water","none","","",""],["Lumineon",457,138,158,180,"Water","none","","",""],["Mantyke",458,90,84,170,"Water","Flying","","",""],["Snover",459,120,136,122,"Grass","Ice","","",""],["Abomasnow",460,180,200,176,"Grass","Ice","","",""],["Weavile",461,140,170,172,"Dark","Ice","","",""],["Magnezone",462,140,206,218,"Electric","Steel","","",""],["Lickilicky",463,220,180,204,"Normal","none","","",""],["Rhyperior",464,230,188,182,"Ground","Rock","","",""],["Tangrowth",465,200,224,172,"Grass","none","","",""],["Electivire",466,150,236,170,"Electric","none","","",""],["Magmortar",467,150,236,178,"Fire","none","","",""],["Togekiss",468,170,172,226,"Fairy","Flying","","",""],["Yanmega",469,172,208,158,"Bug","Flying","","",""],["Leafeon",470,130,182,204,"Grass","none","","",""],["Glaceon",471,130,192,220,"Ice","none","","",""],["Gliscor",472,150,150,214,"Ground","Flying","","",""],["Mamoswine",473,220,208,156,"Ice","Ground","","",""],["Porygon-Z",474,170,226,164,"Normal","none","","",""],["Gallade",475,136,198,190,"Psychic","Fighting","","",""],["Probopass",476,120,142,308,"Rock","Steel","","",""],["Dusknoir",477,90,174,284,"Ghost","none","","",""],["Froslass",478,140,180,160,"Ice","Ghost","","",""],["Uxie",480,150,170,280,"Psychic","none","","",""],["Mesprit",481,160,228,228,"Psychic","none","","",""],["Azelf",482,150,272,162,"Psychic","none","","",""],["Dialga",483,200,288,238,"Steel","Dragon","","",""],["Palkia",484,180,288,240,"Water","Dragon","","",""],["Heatran",485,182,234,230,"Fire","Steel","","",""],["Regigigas",486,220,246,240,"Normal","none","","",""],["Cresselia",488,240,164,268,"Psychic","none","","",""],["Phione",489,160,178,178,"Water","none","","",""],["Manaphy",490,200,220,220,"Water","none","","",""],["Darkrai",491,140,242,202,"Dark","none","","",""],["Arceus",493,240,262,262,"Normal","none","","",""],["Victini",494,200,220,220,"Psychic","Fire","","",""],["Snivy",495,90,106,126,"Grass","none","","",""],["Servine",496,120,138,168,"Grass","none","","",""],["Serperior",497,150,172,212,"Grass","none","","",""],["Tepig",498,130,120,104,"Fire","none","","",""],["Pignite",499,180,176,124,"Fire","Fighting","","",""],["Emboar",500,220,238,146,"Fire","Fighting","","",""],["Oshawott",501,110,132,104,"Water","none","","",""],["Dewott",502,150,174,136,"Water","none","","",""],["Samurott",503,190,224,172,"Water","none","","",""],["Patrat",504,90,100,90,"Normal","none","","",""],["Watchog",505,120,160,156,"Normal","none","","",""],["Lillipup",506,90,92,104,"Normal","none","","",""],["Herdier",507,130,122,146,"Normal","none","","",""],["Stoutland",508,170,158,198,"Normal","none","","",""],["Purrloin",509,82,116,90,"Dark","none","","",""],["Liepard",510,128,196,120,"Dark","none","","",""],["Pansage",511,100,122,112,"Grass","none","","",""],["Simisage",512,150,216,146,"Grass","none","","",""],["Pansear",513,100,122,112,"Fire","none","","",""],["Simisear",514,150,216,146,"Fire","none","","",""],["Panpour",515,100,122,112,"Water","none","","",""],["Simipour",516,150,216,146,"Water","none","","",""],["Munna",517,152,92,110,"Psychic","none","","",""],["Musharna",518,232,164,190,"Psychic","none","","",""],["Pidove",519,100,102,90,"Normal","Flying","","",""],["Tranquill",520,124,140,118,"Normal","Flying","","",""],["Unfezant",521,160,192,152,"Normal","Flying","","",""],["Blitzle",522,90,126,82,"Electric","none","","",""],["Zebstrika",523,150,200,148,"Electric","none","","",""],["Roggenrola",524,110,94,100,"Rock","none","","",""],["Boldore",525,140,154,138,"Rock","none","","",""],["Gigalith",526,170,190,214,"Rock","none","","",""],["Woobat",527,110,116,102,"Psychic","Flying","","",""],["Swoobat",528,134,154,132,"Psychic","Flying","","",""],["Drilbur",529,120,118,102,"Ground","none","","",""],["Excadrill",530,220,184,144,"Ground","Steel","","",""],["Audino",531,206,134,186,"Normal","none","","",""],["Timburr",532,150,102,100,"Fighting","none","","",""],["Gurdurr",533,170,142,144,"Fighting","none","","",""],["Conkeldurr",534,210,188,170,"Fighting","none","","",""],["Tympole",535,100,116,96,"Water","none","","",""],["Palpitoad",536,150,146,126,"Water","Ground","","",""],["Seismitoad",537,210,196,168,"Water","Ground","","",""],["Throh",538,240,122,184,"Fighting","none","","",""],["Sawk",539,150,140,168,"Fighting","none","","",""],["Sewaddle",540,90,106,142,"Bug","Grass","","",""],["Swadloon",541,110,126,182,"Bug","Grass","","",""],["Leavanny",542,150,190,180,"Bug","Grass","","",""],["Venipede",543,60,88,112,"Bug","Poison","","",""],["Whirlipede",544,80,108,190,"Bug","Poison","","",""],["Scolipede",545,120,170,178,"Bug","Poison","","",""],["Cottonee",546,80,80,126,"Grass","Fairy","","",""],["Whimsicott",547,120,166,182,"Grass","Fairy","","",""],["Petilil",548,90,110,110,"Grass","none","","",""],["Lilligant",549,140,182,168,"Grass","none","","",""],["Basculin",550,140,192,140,"Water","none","","",""],["Sandile",551,100,116,86,"Ground","Dark","","",""],["Krokorok",552,120,138,108,"Ground","Dark","","",""],["Krookodile",553,190,194,168,"Ground","Dark","","",""],["Darumaka",554,140,88,104,"Fire","none","","",""],["Darmanitan",555,210,150,130,"Fire","none","","",""],["Maractus",556,150,206,150,"Grass","none","","",""],["Dwebble",557,100,110,124,"Bug","Rock","","",""],["Crustle",558,140,170,208,"Bug","Rock","","",""],["Scraggy",559,100,116,154,"Dark","Fighting","","",""],["Scrafty",560,130,142,246,"Dark","Fighting","","",""],["Sigilyph",561,144,174,180,"Psychic","Flying","","",""],["Yamask",562,76,92,160,"Ghost","none","","",""],["Cofagrigus",563,116,148,258,"Ghost","none","","",""],["Tirtouga",564,108,138,146,"Water","Rock","","",""],["Carracosta",565,148,200,198,"Water","Rock","","",""],["Archen",566,110,198,106,"Rock","Flying","","",""],["Archeops",567,150,272,150,"Rock","Flying","","",""],["Trubbish",568,100,106,140,"Poison","none","","",""],["Garbodor",569,160,168,182,"Poison","none","","",""],["Zorua",570,80,160,96,"Dark","none","","",""],["Zoroark",571,120,244,140,"Dark","none","","",""],["Minccino",572,110,106,98,"Normal","none","","",""],["Cinccino",573,150,178,142,"Normal","none","","",""],["Gothita",574,90,94,128,"Psychic","none","","",""],["Gothorita",575,120,132,170,"Psychic","none","","",""],["Gothitelle",576,140,160,220,"Psychic","none","","",""],["Solosis",577,90,122,98,"Psychic","none","","",""],["Duosion",578,130,152,120,"Psychic","none","","",""],["Reuniclus",579,220,192,170,"Psychic","none","","",""],["Ducklett",580,124,102,114,"Water","Flying","","",""],["Swanna",581,150,194,146,"Water","Flying","","",""],["Vanillite",582,72,128,122,"Ice","none","","",""],["Vanillish",583,102,160,156,"Ice","none","","",""],["Vanilluxe",584,142,222,198,"Ice","none","","",""],["Deerling",585,120,116,118,"Normal","Grass","","",""],["Sawsbuck",586,160,174,160,"Normal","Grass","","",""],["Emolga",587,110,170,140,"Electric","Flying","","",""],["Karrablast",588,100,126,106,"Bug","none","","",""],["Escavalier",589,140,188,218,"Bug","Steel","","",""],["Foongus",590,138,118,108,"Grass","Poison","","",""],["Amoonguss",591,228,180,160,"Grass","Poison","","",""],["Frillish",592,110,114,144,"Water","Ghost","","",""],["Jellicent",593,200,158,186,"Water","Ghost","","",""],["Alomomola",594,330,126,136,"Water","none","","",""],["Joltik",595,100,120,116,"Bug","Electric","","",""],["Galvantula",596,140,194,140,"Bug","Electric","","",""],["Ferroseed",597,88,76,184,"Grass","Steel","","",""],["Ferrothorn",598,148,152,256,"Grass","Steel","","",""],["Klink",599,80,110,140,"Steel","none","","",""],["Klang",600,120,164,194,"Steel","none","","",""],["Klinklang",601,120,186,216,"Steel","none","","",""],["Tynamo",602,70,114,96,"Electric","none","","",""],["Eelektrik",603,130,172,152,"Electric","none","","",""],["Eelektross",604,170,234,174,"Electric","none","","",""],["Elgyem",605,110,148,120,"Psychic","none","","",""],["Beheeyem",606,150,206,182,"Psychic","none","","",""],["Litwick",607,100,98,118,"Ghost","Fire","","",""],["Lampent",608,120,138,134,"Ghost","Fire","","",""],["Chandelure",609,120,196,198,"Ghost","Fire","","",""],["Axew",610,92,118,114,"Dragon","none","","",""],["Fraxure",611,132,154,134,"Dragon","none","","",""],["Haxorus",612,152,208,178,"Dragon","none","","",""],["Cubchoo",613,110,142,92,"Ice","none","","",""],["Beartic",614,190,190,174,"Ice","none","","",""],["Cryogonal",615,140,158,148,"Ice","none","","",""],["Shelmet",616,100,90,158,"Bug","none","","",""],["Accelgor",617,160,192,122,"Bug","none","","",""],["Stunfisk",618,218,158,194,"Ground","Electric","","",""],["Mienfoo",619,90,152,116,"Fighting","none","","",""],["Mienshao",620,130,238,140,"Fighting","none","","",""],["Druddigon",621,154,184,194,"Dragon","none","","",""],["Golett",622,118,114,112,"Ground","Ghost","","",""],["Golurk",623,178,180,174,"Ground","Ghost","","",""],["Pawniard",624,90,132,122,"Dark","Steel","","",""],["Bisharp",625,130,190,184,"Dark","Steel","","",""],["Bouffalant",626,190,148,204,"Normal","none","","",""],["Rufflet",627,140,126,116,"Normal","Flying","","",""],["Braviary",628,200,186,168,"Normal","Flying","","",""],["Vullaby",629,140,114,156,"Dark","Flying","","",""],["Mandibuzz",630,220,138,218,"Dark","Flying","","",""],["Heatmor",631,170,218,148,"Fire","none","","",""],["Durant",632,116,166,168,"Bug","Steel","","",""],["Deino",633,104,120,112,"Dark","Dragon","","",""],["Zweilous",634,144,164,156,"Dark","Dragon","","",""],["Hydreigon",635,184,248,200,"Dark","Dragon","","",""],["Larvesta",636,110,146,126,"Bug","Fire","","",""],["Volcarona",637,170,200,186,"Bug","Fire","","",""],["Cobalion",638,182,200,214,"Steel","Fighting","","",""],["Terrakion",639,182,214,200,"Rock","Fighting","","",""],["Virizion",640,182,200,214,"Grass","Fighting","","",""],["Reshiram",643,200,288,238,"Dragon","Fire","","",""],["Zekrom",644,200,288,238,"Dragon","Electric","","",""],["Keldeo",647,182,214,200,"Water","Fighting","","",""],["Genesect",649,142,260,200,"Bug","Steel","","",""],["Chespin",650,112,120,120,"Grass","none","","",""],["Quilladin",651,122,148,164,"Grass","none","","",""],["Chesnaught",652,176,194,208,"Grass","Fighting","","",""],["Fennekin",653,80,122,114,"Fire","none","","",""],["Braixen",654,118,162,144,"Fire","none","","",""],["Delphox",655,150,198,190,"Fire","Psychic","","",""],["Froakie",656,82,134,100,"Water","none","","",""],["Frogadier",657,108,164,128,"Water","none","","",""],["Greninja",658,144,220,160,"Water","Dark","","",""],["Bunnelby",659,76,82,90,"Normal","none","","",""],["Diggersby",660,170,124,172,"Normal","Ground","","",""],["Fletchling",661,90,106,96,"Normal","Flying","","",""],["Fletchinder",662,124,146,126,"Fire","Flying","","",""],["Talonflame",663,156,178,162,"Fire","Flying","","",""],["Scatterbug",664,76,74,76,"Bug","none","","",""],["Spewpa",665,90,60,96,"Bug","none","","",""],["Vivillon",666,160,156,118,"Bug","Flying","","",""],["Litleo",667,124,138,128,"Fire","Normal","","",""],["Pyroar",668,172,192,158,"Fire","Normal","","",""],["Flabébé",669,88,110,124,"Fairy","none","","",""],["Floette",670,108,130,150,"Fairy","none","","",""],["Florges",671,156,188,222,"Fairy","none","","",""],["Skiddo",672,132,142,120,"Grass","none","","",""],["Gogoat",673,246,214,158,"Grass","none","","",""],["Pancham",674,134,136,122,"Fighting","none","","",""],["Pangoro",675,190,200,164,"Fighting","Dark","","",""],["Furfrou",676,150,164,168,"Normal","none","","",""],["Espurr",677,124,126,130,"Psychic","none","","",""],["Honedge",679,90,116,132,"Steel","Ghost","","",""],["Doublade",680,118,152,184,"Steel","Ghost","","",""],["Spritzee",682,156,124,134,"Fairy","none","","",""],["Aromatisse",683,202,180,170,"Fairy","none","","",""],["Swirlix",684,124,120,136,"Fairy","none","","",""],["Slurpuff",685,164,182,178,"Fairy","none","","",""],["Inkay",686,106,114,96,"Dark","Psychic","","",""],["Malamar",687,172,176,180,"Dark","Psychic","","",""],["Binacle",688,84,104,136,"Rock","Water","","",""],["Barbaracle",689,144,168,216,"Rock","Water","","",""],["Skrelp",690,100,130,130,"Poison","Water","","",""],["Dragalge",691,130,184,224,"Poison","Dragon","","",""],["Clauncher",692,100,124,138,"Water","none","","",""],["Clawitzer",693,142,202,192,"Water","none","","",""],["Helioptile",694,88,114,92,"Electric","Normal","","",""],["Heliolisk",695,124,176,160,"Electric","Normal","","",""],["Tyrunt",696,116,140,132,"Rock","Dragon","","",""],["Tyrantrum",697,164,200,184,"Rock","Dragon","","",""],["Amaura",698,154,140,126,"Rock","Ice","","",""],["Aurorus",699,246,190,178,"Rock","Ice","","",""],["Sylveon",700,190,184,200,"Fairy","none","","",""],["Hawlucha",701,156,186,160,"Fighting","Flying","","",""],["Dedenne",702,134,158,144,"Electric","Fairy","","",""],["Carbink",703,100,114,314,"Rock","Fairy","","",""],["Goomy",704,90,118,116,"Dragon","none","","",""],["Sliggoo",705,136,174,170,"Dragon","none","","",""],["Goodra",706,180,228,222,"Dragon","none","","",""],["Klefki",707,114,178,196,"Steel","Fairy","","",""],["Phantump",708,86,130,120,"Ghost","Grass","","",""],["Trevenant",709,170,184,172,"Ghost","Grass","","",""],["Bergmite",712,110,104,120,"Ice","none","","",""],["Avalugg",713,190,154,194,"Ice","none","","",""],["Noibat",714,80,88,90,"Flying","Dragon","","",""],["Noivern",715,170,186,182,"Flying","Dragon","","",""],["Xerneas",716,252,282,212,"Fairy","none","","",""],["Yveltal",717,252,282,212,"Dark","Flying","","",""],["Zygarde",718,216,200,234,"Dragon","Ground","","",""],["Diancie",719,100,214,314,"Rock","Fairy","","",""],["Hoopa",720,160,274,194,"Psychic","Ghost","","",""],["Volcanion",721,160,256,224,"Fire","Water","","",""],["Giratina (Altered)",487,300,218,258,"Ghost","Dragon","","",""],["Meloetta (Aria)",648,200,218,218,"Normal","Psychic","","",""],["Deoxys (Attack)",386,100,324,124,"Psychic","none","","",""],["Pumpkaboo (Average)",710,98,122,138,"Ghost","Grass","","",""],["Gourgeist (Average)",711,130,162,210,"Ghost","Grass","","",""],["Kyurem (Black)",646,250,306,210,"","","","",""],["Aegislash (Blade)",681,120,316,116,"Steel","Ghost","","",""],["Deoxys (Defense)",386,100,158,338,"Psychic","none","","",""],["Rotom (Fan)",479,100,184,232,"Electric","Flying","","",""],["Meowstic (Female)",678,148,146,178,"Psychic","none","","",""],["Rotom (Frost)",479,100,184,232,"Electric","Ice","","",""],["Rotom (Heat)",479,100,184,232,"Electric","Fire","","",""],["Tornadus (Incarnate)",641,158,260,170,"Flying","none","","",""],["Thundurus (Incarnate)",642,158,260,170,"Electric","Flying","","",""],["Landorus (Incarnate)",645,178,260,190,"Ground","Flying","","",""],["Pumpkaboo (Large)",710,108,122,138,"Ghost","Grass","","",""],["Gourgeist (Large)",711,150,166,208,"Ghost","Grass","","",""],["Meowstic (Male)",678,148,146,178,"Psychic","none","","",""],["Venusaur (Mega)",3,160,238,260,"Grass","Poison","","",""],["Blastoise (Mega)",9,158,254,252,"Water","none","","",""],["Beedrill (Mega)",15,130,118,138,"Bug","Poison","","",""],["Pidgeot (Mega)",18,166,230,182,"Normal","Flying","","",""],["Alakazam (Mega)",65,110,212,182,"Psychic","none","","",""],["Slowbro (Mega)",80,190,208,250,"Water","Psychic","","",""],["Gengar (Mega)",94,120,234,198,"Ghost","Poison","","",""],["Kangaskhan (Mega)",115,210,194,220,"Normal","none","","",""],["Pinsir (Mega)",127,130,222,228,"Bug","Flying","","",""],["Gyarados (Mega)",130,190,226,256,"Water","Dark","","",""],["Aerodactyl (Mega)",142,160,218,204,"Rock","Flying","","",""],["Ampharos (Mega)",181,180,264,228,"Electric","Dragon","","",""],["Steelix (Mega)",208,150,176,306,"Steel","Ground","","",""],["Scizor (Mega)",212,140,214,254,"Bug","Steel","","",""],["Heracross (Mega)",214,160,190,238,"Bug","Fighting","","",""],["Houndoom (Mega)",229,150,246,202,"Dark","Fire","","",""],["Tyranitar (Mega)",248,200,266,286,"Rock","Dark","","",""],["Sceptile (Mega)",254,140,276,184,"Grass","Dragon","","",""],["Blaziken (Mega)",257,160,308,180,"Fire","Fighting","","",""],["Swampert (Mega)",260,200,256,236,"Water","Ground","","",""],["Gardevoir (Mega)",282,136,256,208,"Psychic","Fairy","","",""],["Sableye (Mega)",302,100,178,248,"Dark","Ghost","","",""],["Mawile (Mega)",303,100,166,232,"Steel","Fairy","","",""],["Aggron (Mega)",306,140,198,286,"Steel","none","","",""],["Medicham (Mega)",308,120,198,190,"Fighting","Psychic","","",""],["Manectric (Mega)",310,140,224,184,"Electric","none","","",""],["Sharpedo (Mega)",319,140,268,156,"Water","Dark","","",""],["Camerupt (Mega)",323,140,272,214,"Fire","Ground","","",""],["Altaria (Mega)",334,150,238,232,"Dragon","Fairy","","",""],["Banette (Mega)",354,128,266,176,"Ghost","none","","",""],["Absol (Mega)",359,130,284,142,"Dark","none","","",""],["Glalie (Mega)",362,160,260,180,"Ice","none","","",""],["Salamence (Mega)",373,190,286,238,"Dragon","Flying","","",""],["Metagross (Mega)",376,160,268,278,"Steel","Psychic","","",""],["Latias (Mega)",380,160,258,290,"Dragon","Psychic","","",""],["Latios (Mega)",381,160,310,240,"Dragon","Psychic","","",""],["Rayquaza (Mega)",384,210,382,222,"Dragon","Flying","","",""],["Lopunny (Mega)",428,130,194,214,"Normal","Fighting","","",""],["Garchomp (Mega)",445,216,304,228,"Dragon","Ground","","",""],["Lucario (Mega)",448,140,306,178,"Fighting","Steel","","",""],["Abomasnow (Mega)",460,180,274,220,"Grass","Ice","","",""],["Gallade (Mega)",475,136,228,230,"Psychic","Fighting","","",""],["Audino (Mega)",531,206,152,266,"Normal","Fairy","","",""],["Diancie (Mega)",719,100,340,240,"Rock","Fairy","","",""],["Charizard (Mega X)",6,156,280,214,"Fire","Dragon","","",""],["Mewtwo (Mega X)",150,212,364,222,"Psychic","Fighting","","",""],["Charizard (Mega Y)",6,156,278,210,"Fire","Flying","","",""],["Mewtwo (Mega Y)",150,212,364,206,"Psychic","none","","",""],["Rotom (Mow)",479,100,184,232,"Electric","Grass","","",""],["Deoxys (Normal)",386,100,384,64,"Psychic","none","","",""],["Rotom (Normal)",479,100,156,174,"Electric","Ghost","","",""],["Shaymin (Normal)",492,200,220,220,"Grass","none","","",""],["Kyurem (Normal)",646,250,280,200,"Dragon","Ice","","",""],["Giratina (Origin)",487,300,258,218,"Ghost","Dragon","","",""],["Meloetta (Pirouette)",648,200,222,190,"Normal","Fighting","","",""],["Wormadam (Plant)",413,120,148,200,"Bug","Grass","","",""],["Kyogre (Primal)",382,200,348,258,"Water","none","","",""],["Groudon (Primal)",383,200,348,258,"Ground","Fire","","",""],["Wormadam (Sandy)",413,120,148,200,"Bug","Ground","","",""],["Aegislash (Shield)",681,120,116,316,"Steel","Ghost","","",""],["Shaymin (Sky)",492,200,244,172,"Grass","Flying","","",""],["Pumpkaboo (Small)",710,88,122,140,"Ghost","Grass","","",""],["Gourgeist (Small)",711,110,160,212,"Ghost","Grass","","",""],["Deoxys (Speed)",386,100,216,206,"Psychic","none","","",""],["Pumpkaboo (Super)",710,118,120,136,"Ghost","Grass","","",""],["Gourgeist (Super)",711,170,168,206,"Ghost","Grass","","",""],["Tornadus (Therian)",641,158,232,192,"","","","",""],["Thundurus (Therian)",642,158,266,170,"","","","",""],["Landorus (Therian)",645,178,266,188,"","","","",""],["Wormadam (Trash)",413,120,150,202,"Bug","Steel","","",""],["Rotom (Wash)",479,100,184,232,"Electric","Water","","",""],["Kyurem (White)",646,250,306,210,"","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]];
	var Effective = [["DEFENSE ->","Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy","None"],
				["ATTACK ?",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
				["Normal",1,1,1,1,1,1,1,1,1,1,1,1,0.714,0.51,1,1,0.714,1,1],
				["Fire",1,0.714,0.714,1,1.4,1.4,1,1,1,1,1,1.4,0.714,1,0.714,1,1.4,1,1],
				["Water",1,1.4,0.714,1,0.714,1,1,1,1.4,1,1,1,1.4,1,0.714,1,1,1,1],
				["Electric",1,1,1.4,0.714,0.714,1,1,1,0.51,1.4,1,1,1,1,0.714,1,1,1,1],
				["Grass",1,0.714,1.4,1,0.714,1,1,0.714,1.4,0.714,1,0.714,1.4,1,0.714,1,0.714,1,1],
				["Ice",1,0.714,0.714,1,1.4,0.714,1,1,1.4,1.4,1,1,1,1,1.4,1,0.714,1,1],
				["Fighting",1.4,1,1,1,1,1.4,1,0.714,1,0.714,0.714,0.714,1.4,0.51,1,1.4,1.4,0.714,1],
				["Poison",1,1,1,1,1.4,1,1,0.714,0.714,1,1,1,0.714,0.714,1,1,0.51,1.4,1],
				["Ground",1,1.4,1,1.4,0.714,1,1,1.4,1,0.51,1,0.714,1.4,1,1,1,1.4,1,1],
				["Flying",1,1,1,0.714,1.4,1,1.4,1,1,1,1,1.4,0.714,1,1,1,0.714,1,1],
				["Psychic",1,1,1,1,1,1,1.4,1.4,1,1,0.714,1,1,1,1,0.51,0.714,1,1],
				["Bug",1,0.714,1,1,1.4,1,0.714,0.714,1,0.714,1.4,1,1,0.714,1,1.4,0.714,0.714,1],
				["Rock",1,1.4,1,1,1,1.4,0.714,1,0.714,1.4,1,1.4,1,1,1,1,0.714,1,1],
				["Ghost",0.51,1,1,1,1,1,1,1,1,1,1.4,1,1,1.4,1,0.714,1,1,1],
				["Dragon",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1.4,1,0.714,0.41,1],
				["Dark",1,1,1,1,1,1,0.714,1,1,1,1.4,1,1,1.4,1,0.714,1,0.714,1],
				["Steel",1,0.714,0.714,0.714,1,1.4,1,1,1,1,1,1,1.4,1,1,1,0.714,1.4,1],
				["Fairy",1,0.714,1,1,1,1,1.4,0.714,1,1,1,1,1,1,1.4,1.4,0.714,1,1],
				["None",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				["","","","","","","","","","","","","","","","","","","",""],
				["","","","","","","","","","","","","","","","","","","",""],
				["","","","","","","","","","","","","","","","","","","",""],
				["","","","","","","","","","","","","","","","","","","",""],
				["","","",0.714,"","","","","","","","","","","","","","","",""]];
	var CPM = [["Levels","CpM","Star Dust","","","","CpM","Levels","","CpM","Levels"],[1,0.094,200,"","","",0.094,1,"",0.7903,40],[1.5,0.13513751219406106,200,"","","",0.13513751219406106,1.5,"",0.7874735905949481,39.5],[2,0.166398,200,"","","",0.166398,2,"",0.784637,39],[2.5,0.1926507075356849,200,"","","",0.1926507075356849,2.5,"",0.7817902021188293,38.5],[3,0.215732,400,"","","",0.215732,3,"",0.778933,38],[3.5,0.23657241409767116,400,"","","",0.23657241409767116,3.5,"",0.7760653179526836,37.5],[4,0.25572,400,"","","",0.25572,4,"",0.773187,37],[4.5,0.27353041960630264,400,"","","",0.27353041960630264,4.5,"",0.7702974401417935,36.5],[5,0.29025,600,"","","",0.29025,5,"",0.767397,36],[5.5,0.3060576467301544,600,"","","",0.3060576467301544,5.5,"",0.7644860632166554,35.5],[6,0.321088,600,"","","",0.321088,6,"",0.761564,35],[6.5,0.3354453928085762,600,"","","",0.3354453928085762,6.5,"",0.7586306929896786,34.5],[7,0.349213,800,"","","",0.349213,7,"",0.755686,34],[7.5,0.36245811831506825,800,"","","",0.36245811831506825,7.5,"",0.752729329745095,33.5],[8,0.375236,800,"","","",0.375236,8,"",0.749761,33],[8.5,0.38759246844140305,800,"","","",0.38759246844140305,8.5,"",0.7467809697769487,32.5],[9,0.399567,1000,"","","",0.399567,9,"",0.743789,32],[9.5,0.4111934079536052,1000,"","","",0.4111934079536052,9.5,"",0.7407851152264062,31.5],[10,0.4225,1000,"","","",0.4225,10,"",0.737769,31],[10.5,0.43292663908796375,1000,"","","",0.43292663908796375,10.5,"",0.7347407663118333,30.5],[11,0.443108,1300,"","","",0.443108,11,"",0.7317,30],[11.5,0.45305997862755437,1300,"","","",0.45305997862755437,11.5,"",0.7255755684975204,29.5],[12,0.462798,1300,"","","",0.462798,12,"",0.719399,29],[12.5,0.47233591226424865,1300,"","","",0.47233591226424865,12.5,"",0.7131689528635553,28.5],[13,0.481685,1600,"","","",0.481685,13,"",0.706884,28],[13.5,0.49085560982278686,1600,"","","",0.49085560982278686,13.5,"",0.7005429616347594,27.5],[14,0.499858,1600,"","","",0.499858,14,"",0.694144,27],[14.5,0.5087015684072539,1600,"","","",0.5087015684072539,14.5,"",0.6876851205170139,26.5],[15,0.517394,1900,"","","",0.517394,15,"",0.681165,26],[15.5,0.5259423678275026,1900,"","","",0.5259423678275026,15.5,"",0.6745819392709088,25.5],[16,0.534354,1900,"","","",0.534354,16,"",0.667934,25],[16.5,0.5426357554405165,1900,"","","",0.5426357554405165,16.5,"",0.6612194440773804,24.5],[17,0.550793,2200,"","","",0.550793,17,"",0.654436,24],[17.5,0.5588309936259799,2200,"","","",0.5588309936259799,17.5,"",0.6475811703968083,23.5],[18,0.566755,2200,"","","",0.566755,18,"",0.640653,23],[18.5,0.5745694317773963,2200,"","","",0.5745694317773963,18.5,"",0.6336491426246863,22.5],[19,0.582279,2500,"","","",0.582279,19,"",0.626567,22],[19.5,0.5898879528524887,2500,"","","",0.5898879528524887,19.5,"",0.6194039062429296,21.5],[20,0.5974,2500,"","","",0.5974,20,"",0.612157,21],[20.5,0.6048235084092713,2500,"","","",0.6048235084092713,20.5,"",0.6048235084092713,20.5],[21,0.612157,3000,"","","",0.612157,21,"",0.5974,20],[21.5,0.6194039062429296,3000,"","","",0.6194039062429296,21.5,"",0.5898879528524887,19.5],[22,0.626567,3000,"","","",0.626567,22,"",0.582279,19],[22.5,0.6336491426246863,3000,"","","",0.6336491426246863,22.5,"",0.5745694317773963,18.5],[23,0.640653,3500,"","","",0.640653,23,"",0.566755,18],[23.5,0.6475811703968083,3500,"","","",0.6475811703968083,23.5,"",0.5588309936259799,17.5],[24,0.654436,3500,"","","",0.654436,24,"",0.550793,17],[24.5,0.6612194440773804,3500,"","","",0.6612194440773804,24.5,"",0.5426357554405165,16.5],[25,0.667934,4000,"","","",0.667934,25,"",0.534354,16],[25.5,0.6745819392709088,4000,"","","",0.6745819392709088,25.5,"",0.5259423678275026,15.5],[26,0.681165,4000,"","","",0.681165,26,"",0.517394,15],[26.5,0.6876851205170139,4000,"","","",0.6876851205170139,26.5,"",0.5087015684072539,14.5],[27,0.694144,4500,"","","",0.694144,27,"",0.499858,14],[27.5,0.7005429616347594,4500,"","","",0.7005429616347594,27.5,"",0.49085560982278686,13.5],[28,0.706884,4500,"","","",0.706884,28,"",0.481685,13],[28.5,0.7131689528635553,4500,"","","",0.7131689528635553,28.5,"",0.47233591226424865,12.5],[29,0.719399,5000,"","","",0.719399,29,"",0.462798,12],[29.5,0.7255755684975204,5000,"","","",0.7255755684975204,29.5,"",0.45305997862755437,11.5],[30,0.7317,5000,"","","",0.7317,30,"",0.443108,11],[30.5,0.7347407663118333,5000,"","","",0.7347407663118333,30.5,"",0.43292663908796375,10.5],[31,0.737769,6000,"","","",0.737769,31,"",0.4225,10],[31.5,0.7407851152264062,6000,"","","",0.7407851152264062,31.5,"",0.4111934079536052,9.5],[32,0.743789,6000,"","","",0.743789,32,"",0.399567,9],[32.5,0.7467809697769487,6000,"","","",0.7467809697769487,32.5,"",0.38759246844140305,8.5],[33,0.749761,7000,"","","",0.749761,33,"",0.375236,8],[33.5,0.752729329745095,7000,"","","",0.752729329745095,33.5,"",0.36245811831506825,7.5],[34,0.755686,7000,"","","",0.755686,34,"",0.349213,7],[34.5,0.7586306929896786,7000,"","","",0.7586306929896786,34.5,"",0.3354453928085762,6.5],[35,0.761564,8000,"","","",0.761564,35,"",0.321088,6],[35.5,0.7644860632166554,8000,"","","",0.7644860632166554,35.5,"",0.3060576467301544,5.5],[36,0.767397,8000,"","","",0.767397,36,"",0.29025,5],[36.5,0.7702974401417935,8000,"","","",0.7702974401417935,36.5,"",0.27353041960630264,4.5],[37,0.773187,9000,"","","",0.773187,37,"",0.25572,4],[37.5,0.7760653179526836,9000,"","","",0.7760653179526836,37.5,"",0.23657241409767116,3.5],[38,0.778933,9000,"","","",0.778933,38,"",0.215732,3],[38.5,0.7817902021188293,9000,"","","",0.7817902021188293,38.5,"",0.1926507075356849,2.5],[39,0.784637,10000,"","","",0.784637,39,"",0.166398,2],[39.5,0.7874735905949481,10000,"","","",0.7874735905949481,39.5,"",0.13513751219406106,1.5],[40,0.7903,10000,"","","",0.7903,40,"",0.094,1]];
	var Moves = [["Name","ID","Type","Power","fx","Duration","Start","Stop","Energy","Crit","Animation","Accuracy","Stam Loss","Trainer Min","Trainer Max","#VALUE!","","","ID","Name"],
				["Acid",225,"Poison",10,"acid_fast\"",1050,850,1050,10,"",4,1,0.01,1,100,9.523809523809526,"","",225,"Acid"],
				["Aerial Ace",45,"Flying",30,"",2900,2000,2600,-25,0.05,"Aerial Ace",1,0.06,0,"",-8.620689655172413,"","",45,"Aerial Ace"],
				["Air Cutter",121,"Flying",30,"",3300,2200,3100,-25,0.25,"Air Cutter",1,0.06,0,"",-7.575757575757576,"","",121,"Air Cutter"],
				["Ancient Power",62,"Rock",35,"",3600,2900,3250,-25,0.05,"Ancient Power",1,0.06,0,"",-6.944444444444444,"","",62,"Ancient Power"],
				["Aqua Jet",57,"Water",25,"",2350,1700,2100,-20,0.05,"Aqua Jet",1,0.04,0,"",-8.51063829787234,"","",57,"Aqua Jet"],
				["Aqua Tail",58,"Water",45,"",2350,2050,2250,-50,0.05,"Aqua Tail",1,0.09,0,"",-21.27659574468085,"","",58,"Aqua Tail"],
				["Bite",202,"Dark",6,"bite_fast\"",500,300,500,7,"",4,1,0.01,1,100,14,"","",202,"Bite"],
				["Blizzard",40,"Ice",100,"",3900,3600,3600,-100,0.05,"Blizzard",1,0.11,0,"",-25.64102564102564,"","",40,"Blizzard"],
				["Body Slam",131,"Normal",40,"",1560,1100,1300,-50,0.05,"Body Slam",1,0.085,0,"",-32.05128205128205,"","",131,"Body Slam"],
				["Bone Club",94,"Ground",25,"",1600,1250,1500,-25,0.05,"Bone Club",1,0.065,0,"",-15.625,"","",94,"Bone Club"],
				["Brick Break",123,"Fighting",30,"",1600,1100,1500,-33,0.25,"Brick Break",1,0.075,0,"",-20.625,"","",123,"Brick Break"],
				["Brine",104,"Water",25,"",2400,1650,2000,-25,0.05,"Brine",1,0.065,0,"",-10.416666666666666,"","",104,"Brine"],
				["Bubble",237,"Water",25,"bubble_fast\"",2300,2100,2300,25,"",4,1,0.01,1,100,10.869565217391305,"","",237,"Bubble"],
				["Bubble Beam",53,"Water",30,"",2900,2600,2800,-25,0.05,"Bubble Beam",1,0.065,0,"",-8.620689655172413,"","",53,"Bubble Beam"],
				["Bug Bite",201,"Bug",5,"bug_bite_fast\"",450,250,450,7,"",4,1,0.01,1,100,15.555555555555555,"","",201,"Bug Bite"],
				["Bug Buzz",49,"Bug",75,"",4250,2600,4100,-50,0.05,"Bug Buzz",1,0.09,0,"",-11.76470588235294,"","",49,"Bug Buzz"],
				["Bulldoze",95,"Ground",35,"",3400,1900,3000,-25,0.05,"Bulldoze",1,0.06,0,"",-7.352941176470588,"","",95,"Bulldoze"],
				["Bullet Punch",229,"Steel",10,"bullet_punch_fast\"",1200,1000,1200,10,"",4,1,0.01,1,100,8.333333333333334,"","",229,"Bullet Punch"],
				["Confusion",235,"Psychic",15,"confusion_fast\"",1510,1310,1510,14,"",4,1,0.01,1,100,9.271523178807948,"","",235,"Confusion"],
				["Cross Chop",28,"Fighting",60,"",2000,1500,1800,-100,0.25,"Cross Chop",1,0.1,0,"",-50,"","",28,"Cross Chop"],
				["Cross Poison",89,"Poison",25,"",1500,1200,1500,-25,0.25,"Cross Poison",1,0.07,0,"",-16.666666666666668,"","",89,"Cross Poison"],
				["Cut",223,"Normal",12,"cut_fast\"",1130,930,1130,10,"",4,1,0.01,1,100,8.849557522123893,"","",223,"Cut"],
				["Dark Pulse",16,"Dark",45,"",3500,2300,3400,-33,0.05,"Dark Pulse",1,0.08,0,"",-9.428571428571429,"","",16,"Dark Pulse"],
				["Dazzling Gleam",86,"Fairy",55,"",4200,3300,4100,-33,0.05,"Dazzling Gleam",1,0.08,0,"",-7.857142857142858,"","",86,"Dazzling Gleam"],
				["Dig",26,"Ground",70,"",5800,4600,5000,-33,0.05,"Dig",1,0.08,0,"",-5.689655172413794,"","",26,"Dig"],
				["Disarming Voice",84,"Fairy",25,"",3900,1800,3600,-20,0.05,"Disarming Voice",1,0.04,0,"",-5.128205128205129,"","",84,"Disarming Voice"],
				["Discharge",35,"Electric",35,"",2500,1600,2300,-33,0.05,"Discharge",1,0.08,0,"",-13.2,"","",35,"Discharge"],
				["Dragon Breath",204,"Dragon",6,"dragon_breath_fast\"",500,300,500,7,"",4,1,0.01,1,100,14,"","",204,"Dragon Breath"],
				["Dragon Claw",83,"Dragon",35,"",1500,1200,1400,-50,0.25,"Dragon Claw",1,0.08,0,"",-33.333333333333336,"","",83,"Dragon Claw"],
				["Dragon Pulse",82,"Dragon",65,"",3600,2100,3300,-50,0.05,"Dragon Pulse",1,0.085,0,"",-13.888888888888888,"","",82,"Dragon Pulse"],
				["Draining Kiss",85,"Fairy",25,"",2800,1000,1100,-20,0.05,"Draining Kiss",1,0.05,1,"",-7.142857142857142,"","",85,"Draining Kiss"],
				["Drill Peck",38,"Flying",40,"",2700,1600,2500,-33,0.05,"Drill Peck",1,0.08,0,"",-12.222222222222223,"","",38,"Drill Peck"],
				["Drill Run",46,"Ground",50,"",3400,2100,2800,-33,0.25,"Drill Run",1,0.08,0,"",-9.705882352941178,"","",46,"Drill Run"],
				["Earthquake",31,"Ground",100,"",4200,2000,3950,-100,0.05,"Earthquake",1,0.1,0,"",-23.809523809523807,"","",31,"Earthquake"],
				["Ember",209,"Fire",10,"ember_fast\"",1050,850,1050,10,"",4,1,0.01,1,100,9.523809523809526,"","",209,"Ember"],
				["Feint Attack",238,"Dark",12,"feint_attack_fast\"",1040,840,1040,10,"",4,1,0.01,1,100,9.615384615384617,"","",238,"Feint Attack"],
				["Fire Blast",103,"Fire",100,"",4100,3600,4000,-100,0.05,"Fire Blast",1,0.11,0,"",-24.390243902439025,"","",103,"Fire Blast"],
				["Fire Fang",240,"Fire",10,"fire_fang_fast\"",840,640,840,8,"",4,1,0.01,1,100,9.523809523809526,"","",240,"Fire Fang"],
				["Fire Punch",115,"Fire",40,"",2800,1690,2200,-33,0.05,"Fire Punch",1,0.075,0,"",-11.785714285714286,"","",115,"Fire Punch"],
				["Flame Burst",102,"Fire",30,"",2100,1200,1600,-25,0.05,"Flame Burst",1,0.07,0,"",-11.904761904761903,"","",102,"Flame Burst"],
				["Flame Charge",101,"Fire",25,"",3100,2700,2900,-20,0.05,"Flame Charge",1,0.05,0,"",-6.451612903225806,"","",101,"Flame Charge"],
				["Flame Wheel",21,"Fire",40,"",4600,2700,3200,-25,0.05,"Flame Wheel",1,0.06,0,"",-5.434782608695652,"","",21,"Flame Wheel"],
				["Flamethrower",24,"Fire",55,"",2900,1700,2600,-50,0.05,"Flamethrower",1,0.09,0,"",-17.241379310344826,"","",24,"Flamethrower"],
				["Flash Cannon",36,"Steel",60,"",3900,2400,3500,-33,0.05,"Flash Cannon",1,0.08,0,"",-8.461538461538462,"","",36,"Flash Cannon"],
				["Frost Breath",218,"Ice",9,"frost_breath_fast\"",810,610,810,7,"",4,1,0.01,1,100,8.641975308641975,"","",218,"Frost Breath"],
				["Fury Cutter",200,"Bug",3,"fury_cutter_fast\"",400,200,400,6,"",4,1,0.01,1,100,15,"","",200,"Fury Cutter"],
				["Giga Drain",114,"Grass",35,"",3600,350,1500,-33,0.05,"Giga Drain",1,0.075,0.5,"",-9.166666666666666,"","",114,"Giga Drain"],
				["Gunk Shot",92,"Poison",65,"",3000,2000,2400,-100,0.05,"Gunk Shot",1,0.12,0,"",-33.333333333333336,"","",92,"Gunk Shot"],
				["Heart Stamp",34,"Psychic",20,"",2550,1950,2250,-25,0.05,"Heart Stamp",1,0.06,0,"",-9.803921568627452,"","",34,"Heart Stamp"],
				["Heat Wave",42,"Fire",80,"",3800,3000,3400,-100,0.05,"Heat Wave",1,0.095,0,"",-26.31578947368421,"","",42,"Heat Wave"],
				["Horn Attack",126,"Normal",25,"",2200,1600,1900,-25,0.05,"Horn Attack",1,0.065,0,"",-11.363636363636363,"","",126,"Horn Attack"],
				["Hurricane",122,"Flying",80,"",3200,1030,2800,-100,0.05,"Hurricane",1,0.11,0,"",-31.25,"","",122,"Hurricane"],
				["Hydro Pump",107,"Water",90,"",3800,1500,3600,-100,0.05,"Hydro Pump",1,0.11,0,"",-26.31578947368421,"","",107,"Hydro Pump"],
				["HYDRO PUMP BLASTOISE",135,"Water",90,"",3800,1500,3600,-100,0.05,"Hydro Pump*",1,0.11,0,"",-26.31578947368421,"","",135,"HYDRO PUMP BLASTOISE"],
				["Hyper Beam",14,"Normal",120,"",5000,4000,4800,-100,0.05,"Hyper Beam",1,0.15,0,"",-20,"","",14,"Hyper Beam"],
				["Hyper Fang",129,"Normal",35,"",2100,1700,2000,-33,0.05,"Hyper Fang",1,0.08,0,"",-15.714285714285715,"","",129,"Hyper Fang"],
				["Ice Beam",39,"Ice",65,"",3650,2150,3500,-50,0.05,"Ice Beam",1,0.09,0,"",-13.698630136986301,"","",39,"Ice Beam"],
				["Ice Punch",33,"Ice",45,"",3500,2100,3200,-33,0.05,"Ice Punch",1,0.075,0,"",-9.428571428571429,"","",33,"Ice Punch"],
				["Ice Shard",217,"Ice",15,"ice_shard_fast\"",1400,1200,1400,12,"",4,1,0.01,1,100,8.571428571428571,"","",217,"Ice Shard"],
				["Icy Wind",111,"Ice",25,"",3800,2000,2700,-20,0.05,"Icy Wind",1,0.055,0,"",-5.263157894736842,"","",111,"Icy Wind"],
				["Iron Head",74,"Steel",30,"",2000,1550,1800,-33,0.05,"Iron Head",1,0.08,0,"",-16.5,"","",74,"Iron Head"],
				["Karate Chop",208,"Fighting",6,"karate_chop_fast\"",800,600,800,8,"",4,1,0.01,1,100,10,"","",208,"Karate Chop"],
				["Leaf Blade",117,"Grass",55,"",2800,1200,2200,-50,0.25,"Leaf Blade",1,0.09,0,"",-17.857142857142858,"","",117,"Leaf Blade"],
				["Lick",212,"Ghost",5,"lick_fast\"",500,300,500,6,"",4,1,0.01,1,100,12,"","",212,"Lick"],
				["Low Kick",207,"Fighting",5,"low_kick_fast\"",600,400,600,7,"",4,1,0.01,1,100,11.666666666666668,"","",207,"Low Kick"],
				["Low Sweep",56,"Fighting",30,"",2250,2000,2150,-25,0.05,"Low Sweep",1,0.065,0,"",-11.11111111111111,"","",56,"Low Sweep"],
				["Magnet Bomb",72,"Steel",30,"",2800,1750,2300,-25,0.05,"Magnet Bomb",1,0.06,0,"",-8.928571428571429,"","",72,"Magnet Bomb"],
				["Mega Drain",48,"Grass",15,"",3200,1400,2600,-20,0.05,"Mega Drain",1,0.04,0.5,"",-6.25,"","",48,"Mega Drain"],
				["Megahorn",22,"Bug",80,"",3200,2400,2700,-100,0.05,"Megahorn",1,0.12,0,"",-31.25,"","",22,"Megahorn"],
				["Metal Claw",228,"Steel",8,"metal_claw_fast\"",630,430,630,7,"",4,1,0.01,1,100,11.11111111111111,"","",228,"Metal Claw"],
				["Moonblast",87,"Fairy",85,"",4100,3500,4100,-100,0.05,"Moonblast",1,0.095,0,"",-24.390243902439025,"","",87,"Moonblast"],
				["Mud Bomb",96,"Ground",30,"",2600,2050,2500,-25,0.05,"Mud Bomb",1,0.065,0,"",-9.615384615384617,"","",96,"Mud Bomb"],
				["Mud Shot",216,"Ground",6,"mud_shot_fast\"",550,350,550,7,"",4,1,0.01,1,100,12.727272727272728,"","",216,"Mud Shot"],
				["Mud Slap",233,"Ground",15,"mud_slap_fast\"",1350,1150,1350,12,"",4,1,0.01,1,100,8.88888888888889,"","",233,"Mud Slap"],
				["Night Slash",51,"Dark",30,"",2700,2400,2600,-25,0.25,"Night Slash",1,0.07,0,"",-9.25925925925926,"","",51,"Night Slash"],
				["Ominous Wind",69,"Ghost",30,"",3100,1850,2100,-25,0.05,"Ominous Wind",1,0.06,0,"",-8.064516129032258,"","",69,"Ominous Wind"],
				["Parabolic Charge",75,"Electric",15,"",2100,1300,1700,-20,0.05,"Parabolic Charge",1,0.05,0.5,"",-9.523809523809526,"","",75,"Parabolic Charge"],
				["Peck",211,"Flying",10,"peck_fast\"",1150,950,1150,10,"",4,1,0.01,1,100,8.695652173913043,"","",211,"Peck"],
				["Petal Blizzard",47,"Grass",65,"",3200,2100,3100,-50,0.05,"Petal Blizzard",1,0.09,0,"",-15.625,"","",47,"Petal Blizzard"],
				["Play Rough",88,"Fairy",55,"",2900,1400,2700,-50,0.05,"Play Rough",1,0.1,0,"",-17.241379310344826,"","",88,"Play Rough"],
				["Poison Fang",50,"Poison",25,"",2400,1650,1850,-20,0.05,"Poison Fang",1,0.05,0,"",-8.333333333333334,"","",50,"Poison Fang"],
				["Poison Jab",224,"Poison",12,"poison_jab_fast\"",1050,850,1050,10,"",4,1,0.01,1,100,9.523809523809526,"","",224,"Poison Jab"],
				["Poison Sting",236,"Poison",6,"poison_sting_fast\"",575,375,575,8,"",4,1,0.01,1,100,13.913043478260871,"","",236,"Poison Sting"],
				["Pound",222,"Normal",7,"pound_fast\"",540,340,540,7,"",4,1,0.01,1,100,12.962962962962962,"","",222,"Pound"],
				["Power Gem",65,"Rock",40,"",2900,2000,2800,-33,0.05,"Power Gem",1,0.08,0,"",-11.379310344827587,"","",65,"Power Gem"],
				["Power Whip",118,"Grass",70,"",2800,1500,2800,-100,0,"Power Whip",1,0.12,0,"",-35.714285714285715,"","",118,"Power Whip"],
				["Psybeam",30,"Psychic",40,"",3800,2300,3600,-25,0.05,"Psybeam",1,0.065,0,"",-6.578947368421052,"","",30,"Psybeam"],
				["Psychic",108,"Psychic",55,"",2800,1600,2800,-50,0.05,"Psychic",1,0.09,0,"",-17.857142857142858,"","",108,"Psychic"],
				["Psycho Cut",226,"Psychic",7,"psycho_cut_fast\"",570,370,570,7,"",4,1,0.01,1,100,12.280701754385966,"","",226,"Psycho Cut"],
				["Psyshock",60,"Psychic",40,"",2700,2200,2700,-33,0.05,"Psyshock",1,0.08,0,"",-12.222222222222223,"","",60,"Psyshock"],
				["Psystrike",109,"Psychic",70,"",5100,4400,5300,-100,0.05,"Psystrike",1,0.1,0,"",-19.607843137254903,"","",109,"Psystrike"],
				["Quick Attack",219,"Normal",10,"quick_attack_fast\"",1330,1130,1330,12,"",4,1,0.01,1,100,9.022556390977444,"","",219,"Quick Attack"],
				["Razor Leaf",215,"Grass",15,"razor_leaf_fast\"",1450,1250,1450,12,"",4,1,0.01,1,100,8.275862068965518,"","",215,"Razor Leaf"],
				["Rest",132,"Normal",35,"",3100,1395,2691,-33,0,"Rest",1,0,1,"",-10.64516129032258,"","",132,"Rest"],
				["Rock Slide",64,"Rock",50,"",3200,1500,2900,-33,0.05,"Rock Slide",1,0.075,0,"",-10.3125,"","",64,"Rock Slide"],
				["Rock Smash",241,"Fighting",15,"rock_smash_fast\"",1410,1210,1410,12,"",4,1,0.01,1,100,8.51063829787234,"","",241,"Rock Smash"],
				["Rock Throw",227,"Rock",12,"rock_throw_fast\"",1360,1160,1360,15,"",4,1,0.01,1,100,11.029411764705882,"","",227,"Rock Throw"],
				["Rock Tomb",63,"Rock",30,"",3400,2300,3200,-25,0.25,"Rock Tomb",1,0.06,0,"",-7.352941176470588,"","",63,"Rock Tomb"],
				["Scald",106,"Water",55,"",4000,1800,3900,-33,0.05,"Scald",1,0.08,0,"",-8.25,"","",106,"Scald"],
				["SCALD BLASTOISE",134,"Water",55,"",4000,1800,3900,-33,0.05,"Scald*",1,0.08,0,"",-8.25,"","",134,"SCALD BLASTOISE"],
				["Scratch",220,"Normal",6,"scratch_fast\"",500,300,500,7,"",4,1,0.01,1,100,14,"","",220,"Scratch"],
				["Seed Bomb",59,"Grass",40,"",2400,1300,1800,-33,0.05,"Seed Bomb",1,0.08,0,"",-13.75,"","",59,"Seed Bomb"],
				["Shadow Ball",70,"Ghost",45,"",3080,2300,2600,-33,0.05,"Shadow Ball",1,0.08,0,"",-10.714285714285714,"","",70,"Shadow Ball"],
				["Shadow Claw",213,"Ghost",11,"shadow_claw_fast\"",950,750,950,8,"",4,1,0.01,1,100,8.421052631578947,"","",213,"Shadow Claw"],
				["Shadow Punch",67,"Ghost",20,"",2100,1400,1700,-25,0.05,"Shadow Punch",1,0.06,0,"",-11.904761904761903,"","",67,"Shadow Punch"],
				["Shadow Sneak",66,"Ghost",15,"",3100,2300,2900,-20,0.05,"Shadow Sneak",1,0.04,0,"",-6.451612903225806,"","",66,"Shadow Sneak"],
				["Signal Beam",99,"Bug",45,"",3100,2000,3000,-33,0.05,"Signal Beam",1,0.075,0,"",-10.64516129032258,"","",99,"Signal Beam"],
				["Sludge",18,"Poison",30,"",2600,1850,2350,-25,0.05,"Sludge",1,0.065,0,"",-9.615384615384617,"","",18,"Sludge"],
				["Sludge Bomb",90,"Poison",55,"",2600,1950,2450,-50,0.05,"Sludge Bomb",1,0.09,0,"",-19.230769230769234,"","",90,"Sludge Bomb"],
				["Sludge Wave",91,"Poison",70,"",3400,2400,3300,-100,0.05,"Sludge Wave",1,0.095,0,"",-29.41176470588235,"","",91,"Sludge Wave"],
				["Solar Beam",116,"Grass",120,"",4900,3100,4800,-100,0.05,"Solar Beam",1,0.12,0,"",-20.408163265306122,"","",116,"Solar Beam"],
				["Spark",206,"Electric",7,"spark_fast\"",700,500,700,8,"",4,1,0.01,1,100,11.428571428571429,"","",206,"Spark"],
				["Splash",231,"Water",0,"splash_fast\"",1230,1030,1230,10,"",4,1,0.01,1,100,8.130081300813009,"","",231,"Splash"],
				["Steel Wing",239,"Steel",15,"steel_wing_fast\"",1330,1130,1330,12,"",4,1,0.01,1,100,9.022556390977444,"","",239,"Steel Wing"],
				["Stomp",127,"Normal",30,"",2100,1200,1900,-25,0.05,"Stomp",1,0.065,0,"",-11.904761904761903,"","",127,"Stomp"],
				["Stone Edge",32,"Rock",80,"",3100,1400,1800,-100,0.5,"Stone Edge",1,0.1,0,"",-32.25806451612903,"","",32,"Stone Edge"],
				["Struggle",133,"Normal",15,"",1695,800,1500,-20,0,"Struggle",1,0.1,0,"",-11.799410029498524,"","",133,"Struggle"],
				["Submission",54,"Fighting",30,"",2100,1850,2000,-33,0.05,"Submission",1,0.08,0,"",-15.714285714285715,"","",54,"Submission"],
				["Sucker Punch",203,"Dark",7,"sucker_punch_fast\"",700,500,700,9,"",4,1,0.01,1,100,12.857142857142858,"","",203,"Sucker Punch"],
				["Swift",125,"Normal",30,"",3000,2300,2800,-25,0.05,"Swift",1,0.06,0,"",-8.333333333333334,"","",125,"Swift"],
				["Tackle",221,"Normal",12,"tackle_fast\"",1100,900,1100,10,"",4,1,0.01,1,100,9.09090909090909,"","",221,"Tackle"],
				["Thunder",78,"Electric",100,"",4300,2550,4100,-100,0.05,"Thunder",1,0.11,0,"",-23.25581395348837,"","",78,"Thunder"],
				["Thunder Punch",77,"Electric",40,"",2400,1950,2200,-33,0.05,"Thunder Punch",1,0.075,0,"",-13.75,"","",77,"Thunder Punch"],
				["Thunder Shock",205,"Electric",5,"thunder_shock_fast\"",600,400,600,8,"",4,1,0.01,1,100,13.333333333333334,"","",205,"Thunder Shock"],
				["Thunderbolt",79,"Electric",55,"",2700,1900,2700,-50,0.05,"Thunderbolt",1,0.09,0,"",-18.51851851851852,"","",79,"Thunderbolt"],
				["Twister",80,"Dragon",25,"",2700,850,2600,-20,0.05,"Twister",1,0.04,0,"",-7.407407407407407,"","",80,"Twister"],
				["Vice Grip",20,"Normal",25,"",2100,1850,2100,-20,0.05,"Vice Grip",1,0.055,0,"",-9.523809523809526,"","",20,"Vice Grip"],
				["Vine Whip",214,"Grass",7,"vine_whip_fast\"",650,450,650,7,"",4,1,0.01,1,100,10.769230769230768,"","",214,"Vine Whip"],
				["Water Gun",230,"Water",6,"water_gun_fast\"",500,300,500,7,"",4,1,0.01,1,100,14,"","",230,"Water Gun"],
				["Water Pulse",105,"Water",35,"",3300,1900,2900,-25,0.05,"Water Pulse",1,0.06,0,"",-7.575757575757576,"","",105,"Water Pulse"],
				["Wing Attack",210,"Flying",9,"wing_attack_fast\"",750,550,750,7,"",4,1,0.01,1,100,9.333333333333334,"","",210,"Wing Attack"],
				["Wrap",13,"Normal",25,"",4000,2800,3400,-20,0.05,"Wrap",1,0.06,0,"",-5,"","",13,"Wrap"],
				["WRAP GREEN",136,"Normal",25,"",3700,2200,3200,-20,0.05,"Wrap*",1,0.06,0,"",-5.405405405405405,"","",136,"WRAP GREEN"],
				["WRAP PINK",137,"Normal",25,"",3700,2200,3200,-20,0.05,"Wrap*",1,0.06,0,"",-5.405405405405405,"","",137,"WRAP PINK"],
				["X Scissor",100,"Bug",35,"",2100,1350,1600,-33,0.05,"X-Scissor",1,0.08,0,"",-15.714285714285715,"","",100,"X Scissor"],
				["Zen Headbutt",234,"Psychic",12,"zen_headbutt_fast\"",1050,850,1050,9,"",4,1,0.01,1,100,8.571428571428571,"","",234,"Zen Headbutt"]];
						
	var newStats = [];
	newStats[1] = [90,118,118];
	newStats[2] = [120,151,151];
	newStats[3] = [160,198,198];
	newStats[4] = [78,116,96];
	newStats[5] = [116,158,129];
	newStats[6] = [156,223,176];
	newStats[7] = [88,94,122];
	newStats[8] = [118,126,155];
	newStats[9] = [158,171,210];
	newStats[10] = [90,55,62];
	newStats[11] = [100,45,64];
	newStats[12] = [120,167,151];
	newStats[13] = [80,63,55];
	newStats[14] = [90,46,86];
	newStats[15] = [130,169,150];
	newStats[16] = [80,85,76];
	newStats[17] = [126,117,108];
	newStats[18] = [166,166,157];
	newStats[19] = [60,103,70];
	newStats[20] = [110,161,144];
	newStats[21] = [80,112,61];
	newStats[22] = [130,182,135];
	newStats[23] = [70,110,102];
	newStats[24] = [120,167,158];
	newStats[25] = [70,112,101];
	newStats[26] = [120,193,165];
	newStats[27] = [100,126,145];
	newStats[28] = [150,182,202];
	newStats[29] = [110,86,94];
	newStats[30] = [140,117,126];
	newStats[31] = [180,180,174];
	newStats[32] = [92,105,76];
	newStats[33] = [122,137,112];
	newStats[34] = [162,204,157];
	newStats[35] = [140,107,116];
	newStats[36] = [190,178,171];
	newStats[37] = [76,96,122];
	newStats[38] = [146,169,204];
	newStats[39] = [230,80,44];
	newStats[40] = [280,156,93];
	newStats[41] = [80,83,76];
	newStats[42] = [150,161,153];
	newStats[43] = [90,131,116];
	newStats[44] = [120,153,139];
	newStats[45] = [150,202,170];
	newStats[46] = [70,121,99];
	newStats[47] = [120,165,146];
	newStats[48] = [120,100,102];
	newStats[49] = [140,179,150];
	newStats[50] = [20,109,88];
	newStats[51] = [70,167,147];
	newStats[52] = [80,92,81];
	newStats[53] = [130,150,139];
	newStats[54] = [100,122,96];
	newStats[55] = [160,191,163];
	newStats[56] = [80,148,87];
	newStats[57] = [130,207,144];
	newStats[58] = [110,136,96];
	newStats[59] = [180,227,166];
	newStats[60] = [80,101,82];
	newStats[61] = [130,130,130];
	newStats[62] = [180,182,187];
	newStats[63] = [50,195,103];
	newStats[64] = [80,232,138];
	newStats[65] = [110,271,194];
	newStats[66] = [140,137,88];
	newStats[67] = [160,177,130];
	newStats[68] = [180,234,162];
	newStats[69] = [100,139,64];
	newStats[70] = [130,172,95];
	newStats[71] = [160,207,138];
	newStats[72] = [80,97,182];
	newStats[73] = [160,166,237];
	newStats[74] = [80,132,163];
	newStats[75] = [110,164,196];
	newStats[76] = [160,211,229];
	newStats[77] = [100,170,132];
	newStats[78] = [130,207,167];
	newStats[79] = [180,109,109];
	newStats[80] = [190,177,194];
	newStats[81] = [50,165,128];
	newStats[82] = [100,223,182];
	newStats[83] = [104,124,118];
	newStats[84] = [70,158,88];
	newStats[85] = [120,218,145];
	newStats[86] = [130,85,128];
	newStats[87] = [180,139,184];
	newStats[88] = [160,135,90];
	newStats[89] = [210,190,184];
	newStats[90] = [60,116,168];
	newStats[91] = [100,186,323];
	newStats[92] = [60,186,70];
	newStats[93] = [90,223,112];
	newStats[94] = [120,261,156];
	newStats[95] = [70,85,288];
	newStats[96] = [120,89,158];
	newStats[97] = [170,144,215];
	newStats[98] = [60,181,156];
	newStats[99] = [110,240,214];
	newStats[100] = [80,109,114];
	newStats[101] = [120,173,179];
	newStats[102] = [120,107,140];
	newStats[103] = [190,233,158];
	newStats[104] = [100,90,165];
	newStats[105] = [120,144,200];
	newStats[106] = [100,224,211];
	newStats[107] = [100,193,212];
	newStats[108] = [180,108,137];
	newStats[109] = [80,119,164];
	newStats[110] = [130,174,221];
	newStats[111] = [160,140,157];
	newStats[112] = [210,222,206];
	newStats[113] = [500,60,176];
	newStats[114] = [130,183,205];
	newStats[115] = [210,181,165];
	newStats[116] = [60,129,125];
	newStats[117] = [110,187,182];
	newStats[118] = [90,123,115];
	newStats[119] = [160,175,154];
	newStats[120] = [60,137,112];
	newStats[121] = [120,210,184];
	newStats[122] = [80,192,233];
	newStats[123] = [140,218,170];
	newStats[124] = [130,223,182];
	newStats[125] = [130,198,173];
	newStats[126] = [130,206,169];
	newStats[127] = [130,238,197];
	newStats[128] = [150,198,197];
	newStats[129] = [40,29,102];
	newStats[130] = [190,237,197];
	newStats[131] = [260,186,190];
	newStats[132] = [96,91,91];
	newStats[133] = [110,104,121];
	newStats[134] = [260,205,177];
	newStats[135] = [130,232,201];
	newStats[136] = [130,246,204];
	newStats[137] = [130,153,139];
	newStats[138] = [70,155,174];
	newStats[139] = [140,207,227];
	newStats[140] = [60,148,162];
	newStats[141] = [120,220,203];
	newStats[142] = [160,221,164];
	newStats[143] = [320,190,190];
	newStats[144] = [180,192,249];
	newStats[145] = [180,253,188];
	newStats[146] = [180,251,184];
	newStats[147] = [82,119,94];
	newStats[148] = [122,163,138];
	newStats[149] = [182,263,201];
	newStats[150] = [212,330,200];
	newStats[151] = [200,210,210];

	
	
	var PokemonSorted = {};
	for(var i in Pokemon) {
		if(i == 0) {
			continue;
		}
		if(i == 1) {
			continue;
		}
		if(Pokemon[i][0] == "") {
			continue;
		}
		if(Pokemon[i][7] == "") {
			continue;
		}
		var newPokemon = {};
		newPokemon['name'] = Pokemon[i][0];
		newPokemon['number'] = Pokemon[i][1];
			
		newPokemon['baseSta'] = newStats[ newPokemon['number'] ][0];
		newPokemon['baseAtk'] = newStats[ newPokemon['number'] ][1];
		newPokemon['baseDef'] = newStats[ newPokemon['number'] ][2];
			
		newPokemon['type'] = [];
		newPokemon['type'].push(Pokemon[i][5]);
		newPokemon['type'].push(Pokemon[i][6]);
		newPokemon['fastMoves'] = Pokemon[i][7].split(", ");
		newPokemon['specialMoves'] = Pokemon[i][8].split(", ");
		PokemonSorted[ newPokemon['name'] ] = newPokemon;
	}

	var EffectiveSorted = {};
	var EffectiveMoves = Effective[0];
	for(var i in Effective) {
		if(i <= 1) {
			continue;
		}
		if(Effective[i][0] == "") {
			continue;
		}
		var row = {};
		for(var j in Effective[i]) {
			if(j == 0) {
				continue;
			}
			row[ EffectiveMoves[j] ] = Effective[i][j];
		}
		EffectiveSorted[ Effective[i][0] ] = row;
	}

	var CPMSorted = {};
	for(var i in CPM) {
		if(i <= 0) {
			continue;
		}
		CPMSorted[CPM[i][0]] = CPM[i][1];
	}

	var MovesSorted = {};
	for(var i in Moves) {
		var row = {};
		if(i <= 0) {
			continue;
		}
		
		row[ 'name' ] = Moves[i][0];
		row[ 'type' ] = Moves[i][2];
		row[ 'power' ] = Moves[i][3];
		row[ 'duration' ] = Moves[i][5];
		row[ 'energy' ] = Moves[i][8];
		
		MovesSorted[ row['name'] ] = row;
	}
	
	this.moves = MovesSorted;
	this.effective = EffectiveSorted;
	this.pokemon = PokemonSorted;
	this.cpm = CPMSorted;

	var pokemons = {};		
	var j = 0;
	function CamelCase(myStr) { return myStr.toLowerCase().replace(/\b\w/g, function(l){ return l.toUpperCase() }); };
	function fixType(myStr) {return CamelCase(myStr.replace('POKEMON_TYPE_', '').replace('_', ' ')); };
	function fixMove(myStr) { return CamelCase(myStr.replace('_FAST', '').replace('_', ' '));	};
	
	for(var i in GAME_MASTER['itemTemplates']) {
		var item = GAME_MASTER['itemTemplates'][i];
		if(typeof item['pokemonSettings'] != 'undefined') {
			j++;
			var mon = {};
			mon['name'] = CamelCase(item['pokemonSettings']['pokemonId']);
			mon['number'] = j;
			mon['baseSta']	= item['pokemonSettings']['stats']['baseStamina'];
			mon['baseAtk']	= item['pokemonSettings']['stats']['baseAttack'];
			mon['baseDef']	= item['pokemonSettings']['stats']['baseDefense'];
			mon['type'] = [];
			mon['type'].push(fixType(item['pokemonSettings']['type']));
			if( typeof item['pokemonSettings']['type2'] != 'undefined') {
				mon['type'].push(fixType(item['pokemonSettings']['type2']));
			} else {
				mon['type'].push('None');
			}
			mon['fastMoves'] = [];
			for(var move in item['pokemonSettings']['quickMoves']) {
				mon['fastMoves'].push(fixMove(item['pokemonSettings']['quickMoves'][move]));
			}
			mon['specialMoves'] = [];
			for(var move in item['pokemonSettings']['cinematicMoves']) {
				mon['specialMoves'].push(fixMove(item['pokemonSettings']['cinematicMoves'][move]));
			}
			
			mon['newMoves'] = [];
			for(var qm in mon['fastMoves']) {
				for(var cm in mon['specialMoves']) {
					mon['newMoves'].push(mon['fastMoves'][qm] + '-' + mon['specialMoves'][cm]);
				}
			}
			
			if(mon['number'] != 132) {
				pokemons[ mon['name'] ] = mon;
			}
		}
	}

	for(var i in GAME_MASTER_old['itemTemplates']) {
		var item = GAME_MASTER_old['itemTemplates'][i];
		if(typeof item['pokemonSettings'] != 'undefined') {

			if(typeof pokemons[ CamelCase(item['pokemonSettings']['pokemonId']) ] == 'undefined') {
				continue;
			}
			
			var mon = pokemons[ CamelCase(item['pokemonSettings']['pokemonId']) ];
			
			if( mon['number'] <= 149 && mon['number'] != 144 && mon['number'] != 145 && mon['number'] != 146 && mon['number'] != 132) {
				// all is fine, this is a gen 1 mon
			} else {
				mon['legacyMoves'] = [];
				pokemons[ mon['name'] ] = mon;
				continue;
			}
			
			for(var move in item['pokemonSettings']['quickMoves']) {
				var qm = fixMove(item['pokemonSettings']['quickMoves'][move]);
				if(mon['fastMoves'].indexOf(qm) == -1) {
					mon['fastMoves'].push(qm);
				}
			}

			for(var move in item['pokemonSettings']['cinematicMoves']) {
				var cm = fixMove(item['pokemonSettings']['cinematicMoves'][move]);
				if(mon['specialMoves'].indexOf(cm) == -1) {
					mon['specialMoves'].push(cm);
				}
			}
			
			mon['legacyMoves'] = [];
			for(var qm in item['pokemonSettings']['quickMoves']) {
				qm = fixMove(item['pokemonSettings']['quickMoves'][qm]);
				for(var cm in item['pokemonSettings']['cinematicMoves']) {
					cm = fixMove(item['pokemonSettings']['cinematicMoves'][cm]);
					var move = qm + '-' + cm;
					if(mon['newMoves'].indexOf(move) == -1) {
						mon['legacyMoves'].push(move);
					}
				}
			}
			pokemons[ mon['name'] ] = mon;
		}
	}
	
	// fix for update to mewtwo
	pokemons['Mewtwo']['baseAtk'] = 300;
	pokemons['Mewtwo']['baseDef'] = 182;
	pokemons['Mewtwo']['baseSta'] = 193;
	
	this.pokemon = pokemons;
	console.log(this.pokemon);
	var moves = {};
	
	
	for(var i in GAME_MASTER['itemTemplates']) {
		var item = GAME_MASTER['itemTemplates'][i];
		if(typeof item['moveSettings'] != 'undefined') {
			var move_GM = item['moveSettings'];
			var move = {};
			move['duration'] = move_GM['durationMs'];
			move['energy'] = move_GM['energyDelta'];
			move['name'] = fixMove(move_GM['movementId']);
			if(typeof move_GM['power'] != 'undefined' ) {
				move['power'] = move_GM['power'];
			} else {
				move['power'] = 0;
			}
			move['type'] = fixType(move_GM['pokemonType']);
			moves[move['name']] = move;
			
			// this... is wonky
			if(move['name'] == 'Struggle') {
				move['energy'] = -33;
			}
		}
	}
	this.moves = moves;
//	console.log(this.moves);
}