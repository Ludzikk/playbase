import { useLocation } from "react-router-dom";
import Wrapper from "../other/Wrapper";
import GameItem from "../main/GameItem";
import { useEffect, useContext } from "react";
import { GamesDataContext } from "../../App";
import Button from "../other/Button";

export default function SearchPage() {
	const gamesDataContext = useContext(GamesDataContext);
	const gamesList = gamesDataContext;
	const platforms = useLocation()?.state?.platforms;

	const filteredGames = gamesList.filter((game) =>
		game.platforms.some((platform) => platforms?.includes(platform))
	);

	const gamesEl = filteredGames.map((game) => {
		return (
			<GameItem
				key={game.title}
				price={game.price}
				title={game.title}
				sale={game.sale}
				img={game.thumbnail}
			/>
		);
	});

	useEffect(() => {
		document.title = `Buy ${platforms[0]} Video Games Cheaper`;
	}, [platforms]);

	if (gamesList.length === 0) {
		return (
			<main className="flex-1 justify-center items-center gap-4 relative">
				<div className="flex flex-col justify-center items-center gap-4 relative">
					<div className="loader"></div>
				</div>
			</main>
		);
	}

	if (filteredGames.length === 0) {
		return (
			<main className="flex-1">
				<div className="flex flex-col flex-1 justify-center items-center gap-4 relative">
					<h1 className="text-3xl font-bold relative z-[1]">Game not found!</h1>
					<Button className="relative z-[1]" isLink={true} to="..">
						Go back to home
					</Button>
				</div>
			</main>
		);
	}

	return (
		<main className="flex-1">
			<section>
				<Wrapper>
					<ul className="flex justify-center gap-6 py-8 flex-wrap">
						{gamesEl}
					</ul>
				</Wrapper>
			</section>
		</main>
	);
}
