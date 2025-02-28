import Main from "../main/Main";
import ParalaxImg from "../other/ParalaxImg";
import gamesList from "../../games";

export default function HomePage() {
	const game = gamesList[0];

	return (
		<>
			<ParalaxImg game={game} bottom={"bottom-[-300px]"} h={80} />
			<Main />
		</>
	);
}
