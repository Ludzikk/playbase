import Main from "../main/Main";
import ParalaxImg from "../other/ParalaxImg";
import { useEffect, useContext } from "react";
import { GamesDataContext } from "../../App";
import EmptyParalaxImg from "../other/EmptyParalxImg";

export default function HomePage() {
	const gamesDataContext = useContext(GamesDataContext);
	const game = gamesDataContext.length > 0 ? gamesDataContext[8] : "";

	useEffect(() => {
		document.title = "Buy Your Video Games Cheaper";
	}, []);

	return (
		<>
			{typeof game === "object" ? (
				<ParalaxImg game={game} bottom={"bottom-[-300px]"} h={80} />
			) : (
				<EmptyParalaxImg bottom={"bottom-[-300px]"} h={80} />
			)}
			<Main />
		</>
	);
}
