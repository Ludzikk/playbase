type Game = {
	title: string;
	desc: string;
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
		desc: "The Witcher: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher you play as the professional monster hunter, Geralt of Rivia, tasked with finding a child of prophecy in a vast open world rich with merchant cities, viking pirate islands, dangerous mountain passes, and forgotten caverns to explore. PLAY AS A HIGHLY TRAINED MONSTER SLAYER FOR HIRE Trained from early childhood and mutated to gain superhuman skills, strength and reflexes, witchers are a distrusted counterbalance to the monster-infested world in which they live. Gruesomely destroy foes as a professional monster hunter armed with a range of upgradeable weapons, mutating potions and combat magic. Hunt down a wide range of exotic monsters from savage beasts prowling the mountain passes to cunning supernatural predators lurking in the shadows of densely populated towns. Invest your rewards to upgrade your weaponry and buy custom armour, or spend them away in horse races, card games, fist fighting, and other pleasures the night brings. EXPLORE A MORALLY INDIFFERENT FANTASY OPEN WORLDBuilt for endless adventure, the massive open world of The  Witcher sets new standards in terms of size, depth and complexity. Traverse a fantastical open world: explore forgotten ruins, caves and shipwrecks, trade with merchants and dwarven smiths in cities, and hunt across the open plains, mountains and seas. Deal with treasonous generals, devious witches and corrupt royalty to provide dark and dangerous services. Make choices that go beyond good & evil, and face their far-reaching consequences. CHASE DOWN THE CHILD OF PROPHECYTake on the most important contract to track down the child of prophecy, a key to save or destroy this world. In times of war, chase down the child of prophecy, a living weapon of power, foretold by ancient elven legends. Struggle against ferocious rulers, spirits of the wilds and even a threat from beyond the veil – all hell-bent on controlling this world. Define your destiny in a world that may not be worth saving. FULLY REALIZED NEXT GENERATION Built exclusively for next generation hardware, the REDengine 3 renders the world of The Witcher visually nuanced and organic, a real true to life fantasy. Dynamic weather systems and day/night cycles affect how the citizens of the towns and the monsters of the wilds behave. Rich with storyline choices in both main and subplots, this grand open world is influenced by the player unlike ever before.",
		price: 123,
		sale: 35,
		releaseDate: "18 May 2015",
		inStock: true,
		developer: "CD PROJEKT RED",
		publisher: "CD PROJEKT RED",
		thumbnail: "/games/witcher3/thumb.jpg",
		bg: "/games/witcher3/bg.jpg",
		platforms: [
			"PlayStation 5",
			"Nintendo Switch",
			"PlayStation 4",
			" Xbox Series X/S",
			"Xbox One",
			"Microsoft Windows",
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
		desc: "Dive with a team of up to 8 to the bottom of the ocean. Your mission: Remove all corpses from Pharma Corps' abandoned labs. Erase any evidence of their failed experiments. Murky Divers thumbnail Dive into the ocean with a submarine that suits your playstyle. Go solo or team up with a friend in the small sub, play with up to 4 players in the regular sub, or gather 5 to 8 players for a full chaotic crew experience in the large sub. Murky Divers thumbnail Use your caddie to extract dead bodies from the wrecks that used to be labs. But be careful! There are things lurking and oxygen might run out quicker than you expect. Murky Divers thumbnail Do not die: the wrecks are filled with dangers and creatures ready to kill you. Destroy proof to gain credits: bring the bodies back to the sub and destroy them using a shredder. Murky Divers thumbnail There are numerous abandoned labs spread across the ocean floor. Coordinate with your team to pilot the submarine towards them. Murky Divers thumbnail Piloting: the sub is blind, you must rely on sonar and stations to see and pilot it. Dangers: you have to identify and avoid what lurks in the open ocean. Murky Divers thumbnail Survived? Good. Spend your hard-earned credits on items, upgrades, and modules to boost your chances on the next expedition. Equip items like Agent NUTS, the shopping cart, or the scooter. Upgrade with see-through vision, body part detectors, or a grappling hook. Enhance your ship with modules for greater depth, bigger fishing nets, and more. Prepare wisely for the dangers below. Murky Divers thumbnail Unlock diving suits by completing missions or participating in activities, adding style and to your underwater adventures. Murky Divers thumbnail Up to 8 Player Online Co-op Special dive sites Customize your look Proximity Voice Chat Immersive 3D Audio Procedurally generated wrecks Thalassophobia freely included",
		price: 36,
		sale: 0,
		releaseDate: "12 December 2024",
		inStock: true,
		developer: "Embers",
		publisher: "Oro Interactive",
		thumbnail: "/games/murkydivers/thumb.jpg",
		bg: "/games/murkydivers/bg.jpg",
		platforms: ["Microsoft Windows"],
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
		desc: "The Isle: A World Designed to Kill You The Isle thumbnailThe Isle thumbnailThe Isle is intended to be a gritty, open-world survival horror game. Explore vast landscapes of dense forest and open plains, traverse treacherous mountains and wade through dark swamps where horrors lurk. Hidden within are ruins that hold insight as to what came before. Through it all, keep in mind there is only one goal: survive. There is little in the way of hand holding or ulterior precepts to alter play styles or purpose. It's kill or be killed. In the end, the only one you can trust is yourself. Over the course of development the islands and their inhabitants will radically change, ever-evolving as players themselves learn how to flourish and thrive. Your mistakes will be punished. Expect no survivors. Massive Prehistoric Multiplayer The Isle thumbnailThe Isle thumbnailBecome the beast within. When joining The Isle, you can play as one of dozens of unique creatures, from tiny darting herbivores like Dryosaurus to blood-thirsty giants such as T. Rex or Allosaurus (with many more still to come!) As a dinosaur, you'll be the epitome of majestic, cunning and ferocious. Use your natural abilities and senses to stay off the menu and grow into a stronger, more capable creature. Engage with a living prehistoric ecosystem as you become either predator or prey on servers featuring up to 100+ players, all of them as hungry and dangerous as you. Form packs/herds, create nests, defend your offspring, hunt, and claim territory. A single mistake can spell your demise. Survival or Sandbox? The Isle thumbnailThe Isle thumbnailThe Isle's core game mode is Survival, a tense and difficult experience where you need to grow fast or die young. Dinosaurs in Survival mode progress through several life stages, starting out small and vulnerable. Use your scent ability, night vision and wits to survive long enough to grow, becoming more powerful and unlock new abilities such as nesting. Because of the time needed to develop a full character life cycle, not every creature is or will be playable in Survival, though more will be added in future updates. The Isle thumbnailHowever, sometimes you don't want to struggle to survive, or you don't have the time to go through a dinosaur's whole life story. And that's okay. For players who want a less intense experience, Sandbox mode lets you play an expanded roster of dinosaurs (and soon humans!). You can jump right in as an adult super predator or a peaceful giant, with no major penalties or consequences from dying. We won't judge. A Global Community Story The Isle thumbnailThe Isle thumbnailThe Isle features a narrative told strictly through the environment, achievable only through immense cooperation among players. Are you stranded? Can you just leave? What is AE? How did the dinosaurs get here? What is the distant call that pierces the night? It will take the entire community to answer these mysteries and unravel the purpose to their being on The Isle, and each discovery will directly affect the future of the game's storyline. Future Development Goals The Isle thumbnailThe Isle thumbnailWe realize that there is a long road ahead, and a lot of work to be done to turn this into the game we want it to be. Throughout development, we will be adding a lot more to The Isle and incorporating user feedback in how we evolve the experience. Some of our planned features include: Playable aquatic and aerial creatures Even more playable dinosaurs with complete life cycles Two new playable factions: modern humans & the indigenous Evolve into advanced strain versions of certain dinosaurs Realistic dinosaur AI that uses complex behaviours Additional world biome types such as thick jungles Dynamic aerial drop-in spawn system Global in-game world quest Localization of all in-game menus & text Better accessibility & customization options Steam Achievements, Trading Cards, Emotes Mod support using Steam Workshop All that and more are on our radar going forward. We started with a plan of just a mere handful of playable carnivores, but based on player demand we expanded our scope, increased that number greatly and introduced herbivorous dinosaurs as well. Listening to our community has been instrumental in guiding our process and helped to correct our mistakes, and we hope that together we can transform The Isle into the ultimate dinosaur game. The Isle thumbnail--AE Core TX Received-- --End Promotional Protocol-- --SiGnaL InTeRrUpt-- -tHEeNdISnevErTheENDisNeVeRtHeEnDIsNev-",
		price: 82,
		sale: 72,
		releaseDate: "2 December 2015",
		inStock: false,
		developer: "Afterthought LLC",
		publisher: "Afterthought LLC",
		thumbnail: "/games/theisle/thumb.jpg",
		bg: "/games/theisle/bg.jpg",
		platforms: ["Microsoft Windows"],
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
		desc: "ELDEN RING NIGHTREIGN is a standalone adventure within the ELDEN RING universe, crafted to offer players a new gaming experience by reimagining the game’s core design. Elden Ring Nightreign thumbnail RISE TOGETHER Join forces with other players to take on the creeping night and the dangers within featuring 3-player co-op. Elden Ring Nightreign thumbnail BECOME A HERO Take command of uniquely skilled heroes, each possessing their own abilities and distinct flair. While individually formidable, their skills create powerful synergies when they unite as a team. Elden Ring Nightreign thumbnail TAKE ON THE NIGHT Overcome a relentless environmental threat that sweeps through a land that changes between each game session and defeat the magnificent boss of that night! *There is also a Deluxe Edition product available. Please be careful not to purchase the same content twice.",
		price: 168,
		sale: 10,
		releaseDate: "30 May 2025",
		inStock: true,
		developer: "FromSoftware, Inc",
		publisher: "BANDAI NAMCO Entertainment, FromSoftware, Inc",
		thumbnail: "/games/eldenringnightreign/thumb.jpg",
		bg: "/games/eldenringnightreign/bg.jpg",
		platforms: ["Microsoft Windows"],
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
];

export default gamesList;
