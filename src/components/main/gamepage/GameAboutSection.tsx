import { useContext } from "react";
import { NavRefContext } from "../../pages/Layout"; // Zmieniono na nazwany import
import { RefObject } from "react";

type CurrentGameProps = {
	currentGame: {
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
	descRef: RefObject<HTMLDivElement | null>;
};

export default function GameAboutSection({
	currentGame,
	descRef,
}: CurrentGameProps) {
	const navRef = useContext(NavRefContext);

	function scrollToDesc() {
		const navHeight = navRef?.current?.offsetHeight;

		if (descRef.current && navHeight) {
			const elementPosition =
				descRef.current.getBoundingClientRect().top + window.scrollY;

			window.scrollTo({
				behavior: "smooth",
				top: elementPosition - navHeight,
			});
		}
	}

	const tagsEl = currentGame.tags.map((tag) => {
		return (
			<span
				key={tag}
				className="text-[12px] border uppercase rounded-md p-1 px-2">
				{tag}
			</span>
		);
	});

	const genresEl = currentGame.genre.map((genre, index) => {
		if (index < currentGame.genre.length - 1) {
			return `${genre}, `;
		} else {
			return genre;
		}
	});

	return (
		<section>
			<h2 className="font-bold text-2xl pb-6">About</h2>
			<div className="flex flex-col lg:flex-row lg:items-start items-center gap-8">
				<div className="lg:w-1/2 text-white/60">
					<p>{currentGame.descShort}...</p>
					<button onClick={scrollToDesc} className="underline pb-4">
						Read more
					</button>
					<div className="flex items-start gap-1">
						<span>Tags:</span>
						<div className="flex flex-wrap gap-2">{tagsEl}</div>
					</div>
				</div>
				<div className="flex flex-col text-left gap-2 w-full lg:w-1/2">
					<div className="flex gap-2">
						<span className="text-white/60 block w-[100px]">Developer:</span>
						<span className="block flex-1">{currentGame.developer}</span>
					</div>
					<div className="flex gap-2">
						<span className="text-white/60 block w-[100px]">Publisher:</span>
						<span className="block flex-1">{currentGame.publisher}</span>
					</div>
					<div className="flex gap-2">
						<span className="text-white/60 block w-[100px]">Release date:</span>
						<span className="block flex-1">{currentGame.releaseDate}</span>
					</div>
					<div className="flex gap-2">
						<span className="text-white/60 block w-[100px]">Genre:</span>
						<span className="block flex-1">{genresEl}</span>
					</div>
				</div>
			</div>
		</section>
	);
}
