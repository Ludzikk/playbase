import Wrapper from "../other/Wrapper";
import { useParams } from "react-router-dom";
import ParalaxImg from "../other/ParalaxImg";
import Button from "../other/Button";
import GameItem from "../main/GameItem";
import { useEffect, useContext } from "react";
import { GamesDataContext } from "../../App";
import EmptyParalaxImg from "../other/EmptyParalxImg";

export default function SearchBoxPage() {
	const { title } = useParams();

	const gamesDataContext = useContext(GamesDataContext);
	const gamesList = gamesDataContext;

	const filteredGames = gamesList
		.filter((game) => {
			return !title || game.title.toLowerCase().includes(title.toLowerCase());
		})
		.map((game) => (
			<GameItem
				key={game.title}
				price={game.price}
				sale={game.sale}
				title={game.title}
				img={game.thumbnail}
			/>
		));

	useEffect(() => {
		document.title = `Buy Your Video Games Cheaper`;
	}, []);

	if (gamesList.length === 0) {
			return (
				<main className="flex-1 justify-center items-center gap-4 relative">
					<EmptyParalaxImg h={40} bottom={"bottom-[-350px]"} />
					<div className="flex flex-col justify-center items-center gap-4 relative">
						<h1 className="text-3xl font-bold relative z-[1] ">Loading ...</h1>
					</div>
				</main>
			);
		}

	if (filteredGames.length === 0) {
		return (
			<main className="flex-1">
				<EmptyParalaxImg h={40} bottom={"bottom-[-350px]"} />
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
			{gamesList.length > 0 ? (
				<ParalaxImg
					buyLink={false}
					game={gamesList[1]}
					h={40}
					bottom={"bottom-[-350px]"}
				/>
			) : null}
			<section>
				<Wrapper>
					{filteredGames.length > 0 ? (
						<ul className="flex justify-center gap-6 py-8 flex-wrap">
							{filteredGames}
						</ul>
					) : null}
				</Wrapper>
			</section>
		</main>
	);
}
