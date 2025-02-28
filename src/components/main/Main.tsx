import gamesList from "../../games";
import GameItem from "./GameItem";
import GamesList from "./GamesList";
import Info from "./Info";
import ParalaxImg from "../other/ParalaxImg";

export default function Main() {
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

	const forYouGamesEl = gamesList.map((game) => {
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
			<GamesList title="Best Games">
				{bestGamesEl}
				{bestGamesEl}
				{bestGamesEl}
			</GamesList>
			<Info />
			<GamesList title="For you">
				{forYouGamesEl}
				{forYouGamesEl}
			</GamesList>
			<div className=" relative overflow-hidden overflow-x-clip">
				{eldenRingNightreign ? (
					<ParalaxImg
						game={eldenRingNightreign}
						bottom={"bottom-[-350px]"}
						h={40}
					/>
				) : null}
			</div>
			<GamesList title="Best indie games">
				{indieGamesEl}
				{indieGamesEl}
				{indieGamesEl}
				{indieGamesEl}
			</GamesList>
		</main>
	);
}
