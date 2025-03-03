import { ReactNode } from "react";
import Wrapper from "../other/Wrapper";

type GamesListProps = {
	children: ReactNode;
	title: string;
};

export default function GamesList({ children, title }: GamesListProps) {

	return (
		<section className="py-8">
			<Wrapper>
				<h2 className="font-bold text-2xl pb-6 text-center md:text-left md:text-3xl">
					{title}
				</h2>
				<nav className="relative">
					<ul className="relative flex overflow-x-scroll md:overflow-x-hidden hover:overflow-x-auto pb-10 md:hover:pb-8 gap-6 scroll-games-list">
						{children}
					</ul>
				</nav>
			</Wrapper>
		</section>
	);
}
