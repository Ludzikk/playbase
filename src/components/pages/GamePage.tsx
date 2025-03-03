import { useParams } from "react-router-dom";
import ParalaxImg from "../other/ParalaxImg";
import Wrapper from "../other/Wrapper";
import Button from "../other/Button";
import GameTopSection from "../main/gamepage/GameTopSection";
import GameAboutSection from "../main/gamepage/GameAboutSection";
import GameVisualsSection from "../main/gamepage/GameVisualsSection";
import GameDescSection from "../main/gamepage/GameDescSection";
import EmptyParalaxImg from "../other/EmptyParalxImg";
import { useEffect, useRef, useContext } from "react";
import { GamesDataContext } from "../../App";

export default function GamePage() {
	const { title } = useParams();
	const gamesDataContext = useContext(GamesDataContext);
	const gamesList = gamesDataContext;

	const currentGame = gamesList.find((game) => game.title === title);

	const descRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.title = `Buy ${title} Cheaper`;
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

	if (!currentGame) {
		return (
			<main className="flex-1">
				<EmptyParalaxImg h={40} bottom={"bottom-[-350px]"} />
				<div className="flex flex-col justify-center items-center gap-4 relative">
					<h1 className="text-3xl font-bold relative z-[1] ">
						Game data not found!
					</h1>
					<Button className="relative z-[1]" isLink={true} to="..">
						Go back to home
					</Button>
				</div>
			</main>
		);
	}

	return (
		<main className="flex-1">
			<ParalaxImg
				buyLink={false}
				game={currentGame}
				h={40}
				bottom={"bottom-[-350px]"}
			/>
			<section className="py-10">
				<Wrapper>
					<div className="flex flex-col gap-6">
						<GameTopSection currentGame={currentGame} />
						<GameAboutSection currentGame={currentGame} descRef={descRef} />
						<GameVisualsSection currentGame={currentGame} />
						<GameDescSection currentGame={currentGame} descRef={descRef} />
					</div>
				</Wrapper>
			</section>
		</main>
	);
}
