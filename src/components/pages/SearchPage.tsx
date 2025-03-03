import { useLocation } from "react-router-dom";
import Wrapper from "../other/Wrapper";
import GameItem from "../main/GameItem";
import { useEffect, useContext } from "react";
import { GamesDataContext } from "../../App";

export default function SearchPage() {
	const gamesDataContext = useContext(GamesDataContext) 
	const gamesList = gamesDataContext
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
		document.title = `Buy ${platforms[0]} Video Games Cheaper`
	}, [platforms])
	
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
