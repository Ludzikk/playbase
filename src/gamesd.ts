type Game = {
	title: string;
	desc: string;
	descShort: string;
	price: number;
	sale: number;
	releaseDate: string;
	inStock: boolean;
	developer: string;
	publisher: string;
	thumbnail: string;
	bg: string;
	platforms: string[];
	genre: string[];
	tags: string[];
	images: string[];
};

const gamesList: Game[] = [
	{
		title: "The Witcher 3: Wild Hunt",
		desc: `The Witcher: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher you play as the professional monster hunter, Geralt of Rivia, tasked with finding a child of prophecy in a vast open world rich with merchant cities, viking pirate islands, dangerous mountain passes, and forgotten caverns to explore.  

### PLAY AS A HIGHLY TRAINED MONSTER SLAYER FOR HIRE  

Trained from early childhood and mutated to gain superhuman skills, strength and reflexes, witchers are a distrusted counterbalance to the monster-infested world in which they live.  

-Gruesomely destroy foes as a professional monster hunter armed with a range of upgradeable weapons, mutating potions and combat magic.  
-Hunt down a wide range of exotic monsters from savage beasts prowling the mountain passes to cunning supernatural predators lurking in the shadows of densely populated towns.  
-Invest your rewards to upgrade your weaponry and buy custom armour, or spend them away in horse races, card games, fist fighting, and other pleasures the night brings.  

### EXPLORE A MORALLY INDIFFERENT FANTASY OPEN WORLD  

Built for endless adventure, the massive open world of The Witcher sets new standards in terms of size, depth and complexity.  

-Traverse a fantastical open world: explore forgotten ruins, caves and shipwrecks, trade with merchants and dwarven smiths in cities, and hunt across the open plains, mountains and seas.  
-Deal with treasonous generals, devious witches and corrupt royalty to provide dark and dangerous services.  
-Make choices that go beyond good & evil, and face their far-reaching consequences.  

### CHASE DOWN THE CHILD OF PROPHECY  

Take on the most important contract to track down the child of prophecy, a key to save or destroy this world.  

-In times of war, chase down the child of prophecy, a living weapon of power, foretold by ancient elven legends.  
-Struggle against ferocious rulers, spirits of the wilds and even a threat from beyond the veil – all hell-bent on controlling this world.  
-Define your destiny in a world that may not be worth saving.  

### FULLY REALIZED NEXT GENERATION  

-Built exclusively for next-generation hardware, the REDengine 3 renders the world of The Witcher visually nuanced and organic, a real true-to-life fantasy.  
-Dynamic weather systems and day/night cycles affect how the citizens of the towns and the monsters of the wilds behave.  
-Rich with storyline choices in both main and subplots, this grand open world is influenced by the player unlike ever before.  
`,
		descShort:
			"The Witcher: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher you play as the professional monster hunter, Geralt of Rivia, tasked with finding a child of prophecy in a vast open world rich with merchant cities, viking pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
		price: 123,
		sale: 35,
		releaseDate: "18 May 2015",
		inStock: true,
		developer: "CD PROJEKT RED",
		publisher: "CD PROJEKT RED",
		thumbnail: "/games/witcher3/thumb.jpg",
		bg: "/games/witcher3/bg.jpg",
		platforms: [
			"PlayStation",
			"PlayStation 5",
			"Nintendo Switch",
			"PlayStation 4",
			"Xbox Series X/S",
			"Xbox One",
			"PC",
			"Xbox",
		],
		genre: ["Action", "Adventure", "RPG"],
		tags: [
			"open world",
			"story rich",
			"action",
			"nudity",
			"mature",
			"sandbox",
			"magic",
		],
		images: [
			"/games/witcher3/1.jpg",
			"/games/witcher3/2.jpg",
			"/games/witcher3/3.jpg",
			"/games/witcher3/4.jpg",
			"/games/witcher3/5.jpg",
		],
	},
	{
		title: "Murky Divers",
		desc: `![Murky divers thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmurkydivers%2Fdesc%2F1.gif?alt=media&token=f5e0965f-f490-4dc8-a3ca-25f1a3568cfb)
		Dive with a team of up to 8 to the bottom of the ocean. Your mission: Remove all corpses from Pharma Corps' abandoned labs. Erase any evidence of their failed experiments.

![Murky divers thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmurkydivers%2Fdesc%2F2.png?alt=media&token=6e28d854-1b56-47bb-9bc1-c94efc2d8d86)

Dive into the ocean with a submarine that suits your playstyle. Go solo or team up with a friend in the small sub, play with up to 4 players in the regular sub, or gather 5 to 8 players for a full chaotic crew experience in the large sub. 

![Murky divers thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmurkydivers%2Fdesc%2F3.png?alt=media&token=42ba5707-0ea2-43ae-a1af-95230efdf08d)

Use your caddie to extract dead bodies from the wrecks that used to be labs. But be careful! There are things lurking and oxygen might run out quicker than you expect.

![Murky divers thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmurkydivers%2Fdesc%2F4.gif?alt=media&token=b5195edf-ed68-4587-a80e-c88cc36edc90)

-Do not die: the wrecks are filled with dangers and creatures ready to kill you. 

-Destroy proof to gain credits: bring the bodies back to the sub and destroy them using a shredder. 

![Murky divers thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmurkydivers%2Fdesc%2F5.png?alt=media&token=e4099c27-9bec-45d0-8ea3-fac03097f484)

There are numerous abandoned labs spread across the ocean floor. Coordinate with your team to pilot the submarine towards them.

![Murky divers thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmurkydivers%2Fdesc%2F6.gif?alt=media&token=2a0ef312-f6b5-47b0-9e5d-1b474c995ef1)

-Piloting: the sub is blind, you must rely on sonar and stations to see and pilot it.

-Dangers: you have to identify and avoid what lurks in the open ocean. 

![Murky divers thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmurkydivers%2Fdesc%2F7.png?alt=media&token=d24be7c3-9b67-4a34-91de-2e7b042c6c19)

Survived? Good. Spend your hard-earned credits on items, upgrades, and modules to boost your chances on the next expedition. Equip items like Agent NUTS, the shopping cart, or the scooter. Upgrade with see-through vision, body part detectors, or a grappling hook. Enhance your ship with modules for greater depth, bigger fishing nets, and more. Prepare wisely for the dangers below. 

![Murky divers thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmurkydivers%2Fdesc%2F8.png?alt=media&token=cb999e96-289d-4cc3-97af-ad13d46e7671)

Unlock diving suits by completing missions or participating in activities, adding style and to your underwater adventures. 

![Murky divers thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmurkydivers%2Fdesc%2F9.png?alt=media&token=29e35fc0-3b1e-4a2e-9c34-fa26dd624eee)

-Up to 8 Player Online Co-op 

-Special dive sites 

-Customize your look 

-Proximity Voice Chat 

-Immersive 3D Audio 

-Procedurally generated wrecks 

-Thalassophobia freely included`,
		descShort:
			"Dive with a team of up to 8 to the bottom of the ocean. Your mission: Remove all corpses from Pharma Corps' abandoned labs. Erase any evidence of their failed experiments. Dive into the ocean with a submarine that suits your playstyle.",
		price: 36,
		sale: 0,
		releaseDate: "12 December 2024",
		inStock: true,
		developer: "Embers",
		publisher: "Oro Interactive",
		thumbnail: "/games/murkydivers/thumb.jpg",
		bg: "/games/murkydivers/bg.jpg",
		platforms: ["PC"],
		genre: ["Action", "Adventure", "Indies"],
		tags: ["online co-op", "horror", "action", "underwater"],
		images: [
			"/games/murkydivers/1.jpg",
			"/games/murkydivers/2.jpg",
			"/games/murkydivers/3.jpg",
			"/games/murkydivers/4.jpg",
			"/games/murkydivers/5.jpg",
		],
	},
	{
		title: "The Isle",
		desc: `### The Isle: A World Designed to Kill You  

![The Isle thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Ftheisle%2Fdesc%2F1.jpg?alt=media&token=779896f9-b7b2-4634-a8aa-f06b016c548f)

The Isle is intended to be a gritty, open-world survival horror game. Explore vast landscapes of dense forest and open plains, traverse treacherous mountains and wade through dark swamps where horrors lurk. Hidden within are ruins that hold insight as to what came before.  

Through it all, keep in mind there is only one goal: survive. There is little in the way of hand-holding or ulterior precepts to alter play styles or purpose. It's kill or be killed. In the end, the only one you can trust is yourself. Over the course of development, the islands and their inhabitants will radically change, ever-evolving as players themselves learn how to flourish and thrive. Your mistakes will be punished. Expect no survivors.  



### Massive Prehistoric Multiplayer  

![The Isle thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Ftheisle%2Fdesc%2F2.jpg?alt=media&token=082ebbf2-276d-4510-a024-0a5466ae6249)

Become the beast within. When joining The Isle, you can play as one of dozens of unique creatures, from tiny darting herbivores like Dryosaurus to blood-thirsty giants such as T. Rex or Allosaurus (with many more still to come!). As a dinosaur, you'll be the epitome of majestic, cunning and ferocious. Use your natural abilities and senses to stay off the menu and grow into a stronger, more capable creature.  

Engage with a living prehistoric ecosystem as you become either predator or prey on servers featuring up to **100+ players**, all of them as hungry and dangerous as you. Form packs/herds, create nests & defend your offspring, hunt & claim territory. A single mistake can spell your demise  



### Survival or Sandbox?  

![The Isle thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Ftheisle%2Fdesc%2F3.jpg?alt=media&token=cbf59957-62f7-43a4-badd-791a18d94305)

The Isle's core game mode is **Survival**, a tense and difficult experience where you need to grow fast or die young. Dinosaurs in Survival mode progress through several life stages, starting out small and vulnerable. Use your scent ability, night vision and wits to survive long enough to grow, becoming more powerful and unlocking new abilities such as nesting. Because of the time needed to develop a full character life cycle, not every creature is or will be playable in Survival, though more will be added in future updates.  

![The Isle thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Ftheisle%2Fdesc%2F4.jpg?alt=media&token=2adf2bac-981f-485e-871d-06c83a4add2e)

However, sometimes you don't want to struggle to survive, or you don't have the time to go through a dinosaur's whole life story. And that's okay. For players who want a less intense experience, **Sandbox mode** lets you play an expanded roster of dinosaurs (and soon humans!). You can jump right in as an adult super predator or a peaceful giant, with no major penalties or consequences from dying. We won't judge.  



### A Global Community Story  

![The Isle thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Ftheisle%2Fdesc%2F5.jpg?alt=media&token=725c7e5f-de52-4111-9067-476a079a4dd0)

The Isle features a **narrative told strictly through the environment**, achievable only through immense cooperation among players. Are you stranded? Can you just leave? What is AE? How did the dinosaurs get here? What is the distant call that pierces the night? 

It will take the entire community to answer these mysteries and unravel the purpose of their being on The Isle. Each discovery will directly affect the future of the game's storyline.  



### Future Development Goals  

![The Isle thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Ftheisle%2Fdesc%2F6.jpg?alt=media&token=033944b2-ba99-402a-ac17-39557f62bfb0)

We realize that there is a long road ahead, and a lot of work to be done to turn this into the game we want it to be. Throughout development, we will be adding a lot more to **The Isle** and incorporating user feedback in how we evolve the experience. Some of our planned features include:  

-Playable aquatic and aerial creatures  
-Even more playable dinosaurs with complete life cycles  
-Two new playable factions: modern humans & the indigenous  
-Evolve into advanced strain versions of certain dinosaurs  
-Realistic dinosaur AI that uses complex behaviors  
-Additional world biome types such as thick jungles  
-Dynamic aerial drop-in spawn system  
-Global in-game world quest  
-Localization of all in-game menus & text  
-Better accessibility & customization options  
-Steam Achievements, Trading Cards, Emotes  
-Mod support using Steam Workshop  

All that and more are on our radar going forward. We started with a plan of just a mere handful of playable carnivores, but based on player demand we expanded our scope, increased that number greatly, and introduced herbivorous dinosaurs as well. Listening to our community has been instrumental in guiding our process and helped to correct our mistakes, and we hope that together we can transform **The Isle** into the ultimate dinosaur game.  



--AE Core TX Received-- 

--End Promotional Protocol--  

--SiGnaL InTeRrUpt--  

-tHEeNdISnevErTheENDisNeVeRtHeEnDIsNev-  

`,
		descShort:
			"The Isle is intended to be a gritty, open-world survival horror game. Explore vast landscapes of dense forest and open plains, traverse treacherous mountains and wade through dark swamps where horrors lurk. Hidden within are ruins that hold insight as to what came before. Through it all, keep in mind there is only one goal: survive.",
		price: 82,
		sale: 72,
		releaseDate: "2 December 2015",
		inStock: false,
		developer: "Afterthought LLC",
		publisher: "Afterthought LLC",
		thumbnail: "/games/theisle/thumb.jpg",
		bg: "/games/theisle/bg.jpg",
		platforms: ["PC"],
		genre: ["Action", "Adventure", "Indies", "Simulation", "Early Access"],
		tags: [
			"open world",
			"dinosaurs",
			"survival",
			"simulation",
			"realistic",
			"rpg",
			"co-op",
		],
		images: [
			"/games/theisle/1.jpg",
			"/games/theisle/2.jpg",
			"/games/theisle/3.jpg",
			"/games/theisle/4.jpg",
			"/games/theisle/5.jpg",
		],
	},
	{
		title: "Elden Ring Nightreign",
		desc: `ELDEN RING NIGHTREIGN is a standalone adventure within the ELDEN RING universe, crafted to offer players a new gaming experience by reimagining the game’s core design.

![Elden ring thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Feldenringnightreign%2Fdesc%2F1.gif?alt=media&token=bc4e895e-83b6-49a6-a02a-edf150414642)
		 
### RISE TOGETHER  
Join forces with other players to take on the creeping night and the dangers within featuring 3-player co-op.

![Elden ring thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Feldenringnightreign%2Fdesc%2F2.gif?alt=media&token=b31147a1-9996-4920-b814-c243760a76e1)

### BECOME A HERO  
Take command of uniquely skilled heroes, each possessing their own abilities and distinct flair. While individually formidable, their skills create powerful synergies when they unite as a team.

![Elden ring thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Feldenringnightreign%2Fdesc%2F3.gif?alt=media&token=4311ea46-be90-406a-b819-52f9ae9f51f8)

### TAKE ON THE NIGHT  
Overcome a relentless environmental threat that sweeps through a land that changes between each game session and defeat the magnificent boss of that night!

*There is also a Deluxe Edition product available. Please be careful not to purchase the same content twice.`,
		descShort:
			"ELDEN RING NIGHTREIGN is a standalone adventure within the ELDEN RING universe, crafted to offer players a new gaming experience by reimagining the game’s core design.",
		price: 168,
		sale: 10,
		releaseDate: "30 May 2025",
		inStock: true,
		developer: "FromSoftware, Inc",
		publisher: "BANDAI NAMCO Entertainment, FromSoftware, Inc",
		thumbnail: "/games/eldenringnightreign/thumb.jpg",
		bg: "/games/eldenringnightreign/bg.avif",
		platforms: [
			"PC",
			"PlayStation",
			"PlayStation 4",
			"PlayStation 5",
			"Xbox Series X/S",
			"Xbox One",
			"Xbox",
		],
		genre: ["Action", "RPG"],
		tags: [
			"open world",
			"story rich",
			"pve",
			"survival",
			"souls-like",
			"rpg",
			"online co-op",
		],
		images: [
			"/games/eldenringnightreign/1.jpg",
			"/games/eldenringnightreign/2.jpg",
			"/games/eldenringnightreign/3.jpg",
			"/games/eldenringnightreign/4.jpg",
			"/games/eldenringnightreign/5.jpg",
		],
	},
	{
		title: "A Game About Digging A Hole",
		desc: `Hey Steam community ,  
I'm Ben, and I created this game in my spare time!

Dig deep, sell what you find, update your equipment to continue your journey further and further. With every spadeful you dig, you get closer to the truth. There's no rush, no rules - just you and the adventure underground.

### Costs as much as a coffee, but is fun for longer and is caffeine-free!

![A game about digging a hole thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fagameaboutdiggingahole%2Fdesc%2F1.gif?alt=media&token=9c98f37b-1518-4993-8c78-f3c69dad2875)
`,
		descShort:
			"Hey Steam community , I'm Ben, and I created this game in my spare time! Dig deep, sell what you find, update your equipment to continue your journey further and further. With every spadeful you dig, you get closer to the truth. There's no rush, no rules - just you and the adventure underground.",
		price: 21,
		sale: 5,
		releaseDate: "7 February 2025",
		inStock: true,
		developer: "Cyberwave",
		publisher: "Drillhounds, rokaplay Bou·tique",
		thumbnail: "/games/agameaboutdiggingahole/thumb.jpg",
		bg: "/games/agameaboutdiggingahole/bg.jpg",
		platforms: ["PC"],
		genre: ["Adventure", "Indies"],
		tags: ["mining", "exploration", "simulation", "crafting", "adventure"],
		images: [
			"/games/agameaboutdiggingahole/1.jpg",
			"/games/agameaboutdiggingahole/2.jpg",
			"/games/agameaboutdiggingahole/3.jpg",
			"/games/agameaboutdiggingahole/4.jpg",
			"/games/agameaboutdiggingahole/5.jpg",
		],
	},
	{
		title: "Devour",
		desc: `![A game about digging a hole thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fdevour%2Fdesc%2F1.gif?alt=media&token=e779af86-2123-4b68-a49e-bbd7e11f89d4)
		
DEVOUR is a co-op horror survival game for 1-4 players. Stop possessed cultists before they drag you to hell. Run. Scream. Hide. Just don't get caught.

### HAVE YOU GOT NERVES OF STEEL?

-1-4 player online co-op  
Take control of up to 4 cult members in this unique online co-op experience where you must work together to stop possessed cultists dead set on taking you to hell with them.  

-Single player mode  
For hardcore players only. In this mode, you'll be doing all the screaming yourself.  

-Challenging gameplay  
No two DEVOUR playthroughs are ever the same. To stop the evil, you’ll need a focused team and perfect execution, with a single session lasting up to an hour.

![A game about digging a hole thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fdevour%2Fdesc%2F2.gif?alt=media&token=7fcad0be-a63d-41aa-84f6-08e793ec4634)

### CAN YOU BANISH EVIL TOGETHER?

Each themed DEVOUR map not only brings a terrifying new manifestation of the goat demon Azazel, but also completely new environments to explore, items to collect, fiends to overcome, and forbidden rituals to perform.

-Exorcise the demonically possessed  
Your goal is to break Azazel's hold on the cultists. On each map, work together in a race against time to find key ritual items – some of which might be alive and unwilling - to complete the banishment.  

-Escalating difficulty  
Each possessed cultist’s rage and speed increases as the game progresses, as does the number of fiends they spawn to stop you. Your only means of defence is your UV flashlight.  

-Replayability  
Locked doors, ritual objects and item spawns are randomized, ensuring that no two games are the same. What's more, DEVOUR's unpredictable AI ups the game, making you second guess each and every move. 

-Player progression  
Players earn experience with each playthrough, increasing their Cult Rank and earning Ritual Tokens. These are used to unlock valuable Perks, which can mean the difference between living to banish another demon or an agonizing death.  

-Nightmare mode  
Beat the game without breaking a sweat? Try Nightmare mode for the ultimate challenge.  

-Multiplayer features  
Make use of our in-game positional voice chat. Bring friends, or find other players using the server browser.  

-Full VR support  
Ready to turn it up a notch? Play DEVOUR in VR without any additional purchase necessary.  

![A game about digging a hole thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fdevour%2Fdesc%2F3.gif?alt=media&token=bf96500d-8481-4a6d-98bb-7382712578ce)

### Warning

This game contains flashing lights that may make it unsuitable for people with photosensitive conditions. There are also loud jump scares. Player discretion is advised.
`,
		descShort:
			"DEVOUR is a co-op horror survival game for 1-4 players. Stop possessed cultists before they drag you to hell. Run. Scream. Hide. Just don't get caught HAVE YOU GOT NERVES OF STEEL? 1-4 player online co-op Take control of up to 4 cult members in this unique online co-op experience where you must work together to stop possessed cultists dead set on taking you to hell with them. Single player mode For hardcore players only. In this mode, you'll be doing all the screaming yourself. Challenging gameplay No two DEVOUR playthroughs are ever the same. To stop the evil, you’ll need a focused team and perfect execution, with a single session lasting up to an hour.",
		price: 40,
		sale: 90,
		releaseDate: "28 January 2021",
		inStock: true,
		developer: "Straight Back Games",
		publisher: "Straight Back Games",
		thumbnail: "/games/devour/thumb.jpg",
		bg: "/games/devour/bg.jpg",
		platforms: ["PC"],
		genre: ["Indies"],
		tags: [
			"online co-op",
			"horror",
			"survival",
			"vr",
			"violent",
			"gore",
			"difficult",
		],
		images: [
			"/games/devour/1.jpg",
			"/games/devour/2.jpg",
			"/games/devour/3.jpg",
			"/games/devour/4.jpg",
			"/games/devour/5.jpg",
		],
	},
	{
		title: "Planet Zoo",
		desc: `Build a world for wildlife in Planet Zoo. From the developers of Planet Coaster and Zoo Tycoon comes the ultimate zoo sim, featuring authentic living animals who think, feel and explore the world you create around them. Experience a globe-trotting campaign or let your imagination run wild in the freedom of Sandbox mode. Create unique habitats and vast landscapes, make big decisions and meaningful choices, and nurture your animals as you construct and manage the world’s wildest zoos.

![A game about digging a hole thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fplanetzoo%2Fdesc%2F1.gif?alt=media&token=547faa90-83f5-40ab-bade-9940fc73adeb)

Meet a world of incredible animals. From playful lion cubs to mighty elephants, every animal in Planet Zoo is a thinking, feeling individual with a distinctive look and personality of their own. Craft detailed habitats to bring your animals’ natural environments home, research and manage each species to allow them to thrive, and help your animals raise families to pass their genes onto future generations.

![A game about digging a hole thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fplanetzoo%2Fdesc%2F2.gif?alt=media&token=12b3810f-03a2-45ad-83f8-21524bba91e1)

Manage an amazing living world that responds to every decision you make. Focus on the big picture or go hands-on and control the smallest details. Thrill visitors with iconic exhibits, develop your zoo with new research, and release new generations of your animals back into the wild. Your choices come alive in a world where animal welfare and conservation comes first.

![A game about digging a hole thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fplanetzoo%2Fdesc%2F3.gif?alt=media&token=1341a9e1-81ef-47ea-8338-12387bf26b6a)

Planet Zoo’s powerful piece-by-piece construction tools let you effortlessly make your zoo unique. Every creative decision you make impacts the lives of your animals and the experience of your visitors. Let your imagination run wild as you dig lakes and rivers, raise hills and mountains, carve paths and caves, and build stunning zoos with a choice of unique themes and hundreds of building components.

![A game about digging a hole thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fplanetzoo%2Fdesc%2F4.gif?alt=media&token=2eb227ff-e910-447f-90c4-174d220c529b)

Join a connected community and share the world’s most creative habitats, scenery and even whole zoos on the Steam Workshop. See your own designs appear in zoos around the world, or discover fresh new content from the Planet Zoo community every day.`,
		descShort:
			"Build a world for wildlife in Planet Zoo. From the developers of Planet Coaster and Zoo Tycoon comes the ultimate zoo sim, featuring authentic living animals who think, feel and explore the world you create around them. Experience a globe-trotting campaign or let your imagination run wild in the freedom of Sandbox mode. Create unique habitats and vast landscapes, make big decisions and meaningful choices, and nurture your animals as you construct and manage the world’s wildest zoos.",
		price: 185,
		sale: 25,
		releaseDate: "5 November 2019",
		inStock: true,
		developer: "Frontier Developments",
		publisher: "Frontier Developments",
		thumbnail: "/games/planetzoo/thumb.jpg",
		bg: "/games/planetzoo/bg.jpg",
		platforms: [
			"PC",
			"PlayStation 5",
			"Xbox Series X/S",
			"PlayStation",
			"Xbox",
		],
		genre: ["Simulation", "Strategy"],
		tags: [
			"nature",
			"simulation",
			"building",
			"realistic",
			"family friendly",
			"cut",
		],
		images: [
			"/games/planetzoo/1.jpg",
			"/games/planetzoo/2.jpg",
			"/games/planetzoo/3.jpg",
			"/games/planetzoo/4.jpg",
			"/games/planetzoo/5.jpg",
		],
	},
	{
		title: "Until Dawn",
		desc: `### Game Overview

When eight friends return to the isolated lodge where two of their group vanished a year prior, fear tightens its icy grip, and their mountain retreat descends into a nightmare with no escape. Face your fears and determine who survives Until Dawn in this seminal horror classic, rebuilt and enhanced for PC.

### Cult horror rebuilt

Immerse yourself in a gripping slasher horror rebuilt from the ground up with stunning visuals in Unreal Engine 5. Enhanced by movie-like cinematography, refined gameplay mechanics and more, venture into a thrilling exploration of an isolated mountain where nothing is as it seems.

### Their fate in your hands

Create your own gripping tale as you control a group of unique characters portrayed by an all-star cast, including Hayden Panettiere, Brett Dalton, and more, and decide their fate through your choices. Through dynamic animations and nuanced facial-capture performances, learn what makes each character tick, and who among the group has what it takes to survive.

### Terror never looked so good

Explore a rich and detailed environment that will leave you breathless with every step. With new visual enhancements for PC, the original game has been rebuilt from the ground up – utilizing cutting-edge visual technology to bring the nightmare to life.

### Rebuilt for a new generation

Discover new collectibles, all-new environments to investigate, and re-cut narrative sequences that deepen the mystery further. Get closer to the action with an all-new, immersive third-person camera, and enjoy a brand-new musical score and reauthored audio that’ll keep you on the edge of your seat throughout the journey.`,
		descShort:
			"Game Overview When eight friends return to the isolated lodge where two of their group vanished a year prior, fear tightens its icy grip, and their mountain retreat descends into a nightmare with no escape. Face your fears and determine who survives Until Dawn in this seminal horror classic, rebuilt and enhanced for PC.",
		price: 290,
		sale: 10,
		releaseDate: "4 October 2024",
		inStock: true,
		developer: "Supermassive Games, Ballistic Moon",
		publisher:
			"PlayStation PC LLC, Sony Interactive Entertainment, PlayStation Publishing LLC",
		thumbnail: "/games/untildawn/thumb.jpg",
		bg: "/games/untildawn/bg.jpg",
		platforms: ["PC", "PlayStation 5", "PlayStation 4", "PlayStation"],
		genre: ["Adventure"],
		tags: [
			"horror",
			"adventure",
			"choose your own adventure",
			"gore",
			"story rich",
			"multiple endings",
		],
		images: [
			"/games/untildawn/1.jpg",
			"/games/untildawn/2.jpg",
			"/games/untildawn/3.jpg",
			"/games/untildawn/4.jpg",
			"/games/untildawn/5.jpg",
		],
	},
	{
		title: "Stray Path",
		desc: `Stray Path is a roguelike card game brimming with endless possibilities. Each run, select from a variety of adventurers and take on the challenges of a randomly generated stray world. Optimize every choice: whether to keep or discard skill cards and item cards is entirely up to you. Drag cards like you would in FreeCell, and even store two cards in your inventory. Come along on a thrilling journey of card-flipping that will keep you engaged until you reach the end of this stray world!
	
![Stray Path Thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fstraypath%2Fdesc%2F1.gif?alt=media&token=1a9d7262-fd14-4186-befd-eef8cf103e27)

![Stray Path Thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fstraypath%2Fdesc%2F2.png?alt=media&token=df746efa-5610-4200-8f03-575cb5a2cd79)

In this enthralling adventure, you'll face various kinds of enemies. Will you bravely engage in combat or wisely avoid fights? Collect equipment and items from chests, or discard them? Your decisions shape your fate - to win or to perish, it's all in your hands.

![Stray Path Thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fstraypath%2Fdesc%2F3.gif?alt=media&token=3783b324-17de-4fb3-97b5-78897f5541e8)

![Stray Path Thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fstraypath%2Fdesc%2F4.png?alt=media&token=3d9b65de-47e9-4606-a1ee-179cf9ebc6a5)

Exploring this unknown world means never knowing what the next card will reveal. It could be an elite enemy, a life-saving item, or a prize chest filled with fancy equipment. Every flip brings a new challenge or opportunity!

![Stray Path Thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fstraypath%2Fdesc%2F5.gif?alt=media&token=b1c2249c-05f6-4634-a73a-4d9e527b1d64)

![Stray Path Thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fstraypath%2Fdesc%2F6.png?alt=media&token=3473ebd0-f071-4302-8d6e-0df5c7cf8a61)

Build your loadout from over 100 pieces of equipment and items across different characters. Experience a wide range of playstyles in this endless adventure: become an impenetrable wall with ultra-high defense, or a one-hit wonder glass cannon with devastating attacks. Conquer increasingly powerful enemies on your path to victory!

![Stray Path Thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fstraypath%2Fdesc%2F7.gif?alt=media&token=787d9841-4926-42b5-912b-986e244d2912)

No two adventures are alike. Face randomly generated enemies, events, and prizes. Different paths lead to different challenges and surprises. Make your choices wisely and discover what lies at the end of the Stray Path!

![Stray Path Thumbnail](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fstraypath%2Fdesc%2F8.gif?alt=media&token=4d1c242d-3803-40cf-9b35-e5071c4f6cd5)`,
		descShort:
			"Stray Path is a roguelike card game brimming with endless possibilities. Each run, select from a variety of adventurers and take on the challenges of a randomly generated stray world. Optimize every choice: whether to keep or discard skill cards and item cards is entirely up to you. Drag cards like you would in FreeCell, and even store two cards in your inventory. Come along on a thrilling journey of card-flipping that will keep you engaged until you reach the end of this stray world!",
		price: 61,
		sale: 45,
		releaseDate: "6 February 2025",
		inStock: true,
		developer: "chx games",
		publisher: "Yogscast Games",
		thumbnail: "/games/straypath/thumb.jpg",
		bg: "/games/straypath/bg.jpg",
		platforms: ["PC"],
		genre: ["Adventure", "Indies", "Strategy"],
		tags: [
			"indie",
			"rougelike",
			"2d",
			"exploration",
			"strategy",
			"card battler",
		],
		images: [
			"/games/straypath/1.jpg",
			"/games/straypath/2.jpg",
			"/games/straypath/3.jpg",
			"/games/straypath/4.jpg",
			"/games/straypath/5.jpg",
		],
	},
	{
		title: "Satisfactory",
		desc: `Satisfactory is a first-person open-world factory building game with a dash of exploration and combat. Play alone or with friends, explore an alien planet, create multi-story factories, and enter conveyor belt heaven!

### Construct

Conquer nature by building massive factories across the land. Expand wherever and however you want. The planet is filled with valuable natural resources just waiting to be utilized. As an employee of FICSIT it’s your duty to make sure they come to good use.

### Automate

Construct your factories with gracious perfection or build intricate webs of conveyor belts to supply all your needs. Automate trucks and trains to reach your faraway outposts and be sure to handle liquids properly by transporting them in pipes. It’s all about minimizing manual labour!

### Explore & Exploit

Venture on expeditions to search for new materials and be sure to put everything to good use. Nature is yours to harvest! You have vehicles, jetpacks, jump pads and more at your disposal to make the exploration easier. Equip the proper safety gear as well, just in case you run into the local wildlife.

### FEATURES

• Open World: Explore the huge (30km2) alien planet that is Massage-2(AB)b with its unique fauna and creatures.  
• Co-Op: Build a factory yourself or share the joy with your friends. Up to you!  
• Factory Building: Experience building a huge factory from a first-person perspective. Automate and optimize it to perfection for your personal satisfaction.  
• Customization: Customize your factory to your own liking. Build at high altitudes or over wide plains, there is almost no limits in the making of your tailor-made factory.  
• Vehicles: Travel the world with class. Use jump pads, factory carts, jetpacks, hypertubes, trucks or trains. The choice is yours!`,
		descShort:
			"Satisfactory is a first-person open-world factory building game with a dash of exploration and combat. Play alone or with friends, explore an alien planet, create multi-story factories, and enter conveyor belt heaven! Construct",
		price: 163,
		sale: 5,
		releaseDate: "10 September 2024",
		inStock: false,
		developer: "Coffee Stain Studios",
		publisher: "Coffee Stain Publishing",
		thumbnail: "/games/satisfactory/thumb.jpg",
		bg: "/games/satisfactory/bg.jpg",
		platforms: ["PC"],
		genre: ["Adventure", "Indies", "Simulation", "Strategy"],
		tags: [
			"automation",
			"adventure",
			"base building",
			"co-op",
			"building",
			"sandbox",
			"exploration",
		],
		images: [
			"/games/satisfactory/1.jpg",
			"/games/satisfactory/2.jpg",
			"/games/satisfactory/3.jpg",
			"/games/satisfactory/4.jpg",
			"/games/satisfactory/5.jpg",
		],
	},
	{
		title: "Metal Slug Tactics",
		desc: `Metal Slug Tactics brings the explosive charm and nostalgic fun of the cult METAL SLUG series to the tactical scene! Get ready for an intense ride through the best of both worlds: classic arcade action and roguelite tactical thrills. Jump into the combat zone and revive your METAL SLUG nostalgia in a whole new way!
		
![Metal Slug Tactics](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmetalslugtactics%2Fdesc%2F1.png?alt=media&token=937c6482-cc5f-4000-82dd-3a30abedad2e)
		
### TACTICAL RPG WITH ROGUELIKE ELEMENTS
		
Metal Slug Tactics offers a fresh perspective on the iconic battles of the METAL SLUG series. Lead your squad to victory through strategic guile and superior firepower in a perfect blend of classic action and tactical depth. Unleash powerful special attacks and shape the outcome of each encounter! Accumulate experience after each battle to unlock new weapons or bonus perks to upgrade your team's firepower and tactical skills. Assemble your team and rewrite the rules in this modern tribute to a cult classic!
		
![Metal Slug Tactics](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmetalslugtactics%2Fdesc%2F2.gif?alt=media&token=6cde18cb-39ab-417f-9f1e-145ed50271e4)

### GET YOUR GEAR, SOLDIERS! MISSION START!

Choose between iconic brothers-in-arms from across the METAL SLUG series and create the perfect team to stop Morden's devious plans. Determine the best weapon loadouts and mods to maximize combo efficiency on the battlefield. Launch simultaneous attacks with the "SYNC" mechanic to deal massive damage to the enemy! And if your team is in trouble, you can always call in some reinforcements and watch the big guns at work: heavy artillery, airstrikes, the glorious METAL SLUG itself - you name it, you get it!

![Metal Slug Tactics](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmetalslugtactics%2Fdesc%2F3.gif?alt=media&token=65d6e194-6cce-4bb9-94ea-39d5f55081ae)

### FIGHT YOUR WAY TO VICTORY

Embark on an exalting campaign through beautiful, hand-crafted maps to end the war and defeat the infamous Rebel Army once and for all! You're going to face many challenges, so brace yourself for countless deaths, but don’t give up and push through. Whether you're a skilled veteran or a new recruit, play and replay your favorite missions, learn precious strategic insight from each adventure and hone your skills with each hard-fought victory. Gain experience, level up your operatives, adapt to your enemies, and remember: every defeat is a lesson, yet triumph awaits those who refuse to surrender!

![Metal Slug Tactics](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmetalslugtactics%2Fdesc%2F4.gif?alt=media&token=6f65bafb-2dc5-4bb9-9944-0b436c5f7328)

![Metal Slug Tactics](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmetalslugtactics%2Fdesc%2F5.png?alt=media&token=8fa1f5c8-08ed-457e-b16e-abcbe415aaf9)

Donald Morden is back! After years of hiding in a country opposed to the World Government, the devious General patiently staged a coup. Now, he is finally ready to take revenge upon the World with the army he has secretly gathered throughout the years. The Peregrine Falcons Squad will have to do everything in their power to make it through the enemy lines and take down General Morden before the war escalates into catastrophe!

![Metal Slug Tactics](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmetalslugtactics%2Fdesc%2F6.png?alt=media&token=ae0b52b3-023a-4267-a5b2-a8bcdd252444)

● Discover the first tactical RPG in the METAL SLUG franchise

● Experience a huge replayability with its die-and-retry roguelite progression

● Enjoy amazing pixel art graphics, a heartfelt tribute to the series

● Battle Morden’s Army in 110 hand-crafted maps and 20 different mission types

● Bring the perfect setup for every mission with 36 different weapons and 176 weapon mods

● Choose between 9 iconic characters from the series and create the perfect team

● Experiment with 36 loadouts and combos to outsmart your enemies

● Challenge iconic bosses from the METAL SLUG universe

● Headbang all the way with an amazing soundtrack by Tee Lopes

![Metal Slug Tactics](https://firebasestorage.googleapis.com/v0/b/playbase-d270a.firebasestorage.app/o/games%2Fmetalslugtactics%2Fdesc%2F7.gif?alt=media&token=117272a6-1e20-43af-b27c-c55d95251b88)`,
		descShort:
			"Metal Slug Tactics brings the explosive charm and nostalgic fun of the cult METAL SLUG series to the tactical scene! Get ready for an intense ride through the best of both worlds: classic arcade action and roguelite tactical thrills. Jump into the combat zone and revive your METAL SLUG nostalgia in a whole new way!",
		price: 104,
		sale: 35,
		releaseDate: "5 November 2024",
		inStock: false,
		developer: "Leikir Studio",
		publisher: "Dotemu, Gamera Games",
		thumbnail: "/games/metalslugtactics/thumb.jpg",
		bg: "/games/metalslugtactics/bg.jpg",
		platforms: ["PC", "PlayStation 5", "PlayStation 4", "PlayStation", "Nintendo Switch", "Xbox", "Xbox One", "Xbox Series X/S"],
		genre: ["Action", "Indies", "RPG", "Strategy"],
		tags: [
			"horror",
			"adventure",
			"choose your own adventure",
			"gore",
			"story rich",
			"multiple endings",
		],
		images: [
			"/games/metalslugtactics/1.jpg",
			"/games/metalslugtactics/2.jpg",
			"/games/metalslugtactics/3.jpg",
			"/games/metalslugtactics/4.jpg",
			"/games/metalslugtactics/5.jpg",
		],
	},
];

export default gamesList;
