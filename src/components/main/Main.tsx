import GameItem from "./GameItem";
import GamesList from "./GamesList";
import EmptyGamesList from "./EmptyGameList";
import Info from "./Info";
import ParalaxImg from "../other/ParalaxImg";
import Newsletter from "./Newsletter";
import { useContext } from "react";
import { GamesDataContext } from "../../App";
import EmptyParalaxImg from "../other/EmptyParalxImg";

export default function Main() {
	const gamesDataContext = useContext(GamesDataContext);
	const gamesList = gamesDataContext;

	const bestGamesEl = gamesList.map((game) => {
		return (
			<GameItem
				key={game.title}
				price={game.price}
				sale={game.sale}
				title={game.title}
				img={game.thumbnail}
			/>
		);
	});

	const forYouGamesEl = gamesList
		.map((game) => {
			return (
				<GameItem
					key={game.title}
					price={game.price}
					sale={game.sale}
					title={game.title}
					img={game.thumbnail}
				/>
			);
		})
		.reverse();

	const indieGamesEl = gamesList
		.filter((game) => game.genre.includes("Indies"))
		.map((game) => {
			return (
				<GameItem
					key={game.title}
					price={game.price}
					sale={game.sale}
					title={game.title}
					img={game.thumbnail}
				/>
			);
		})
		.reverse();

	const eldenRingNightreign = gamesList.find(
		(game) => game.title === "Elden Ring Nightreign"
	);

	return (
		<main>
			{bestGamesEl.length > 0 ? (
				<GamesList title="Best Games">{bestGamesEl}</GamesList>
			) : (
				<EmptyGamesList title="Best Games" />
			)}
			<Info />
			{forYouGamesEl.length > 0 ? (
				<GamesList title="For you">{forYouGamesEl}</GamesList>
			) : (
				<EmptyGamesList title="Best Games" />
			)}
			{eldenRingNightreign ? (
				<ParalaxImg
					game={eldenRingNightreign}
					bottom={"bottom-[-350px]"}
					h={60}
				/>
			) : (
				<EmptyParalaxImg bottom={"bottom-[-350px]"} h={60} />
			)}
			{indieGamesEl.length > 0 ? (
				<GamesList title="Best indie games">{indieGamesEl}</GamesList>
			) : (
				<EmptyGamesList title="Best Games" />
			)}
			<Newsletter />
		</main>
	);
}
