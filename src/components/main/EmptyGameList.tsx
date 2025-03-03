import Wrapper from "../other/Wrapper";
import EmptyGameItem from "./EmptyGameItem";

type GamesListProps = {
	title: string;
};

export default function EmptyGamesList({ title }: GamesListProps) {
	return (
		<section className="py-8">
			<Wrapper>
				<h2 className="font-bold text-2xl pb-6 text-center md:text-left md:text-3xl">
					{title}
				</h2>
				<nav className="relative">
					<ul className="relative flex overflow-x-scroll md:overflow-x-hidden hover:overflow-x-auto pb-10 md:hover:pb-8 gap-6 scroll-games-list">
						<EmptyGameItem />
						<EmptyGameItem />
						<EmptyGameItem />
						<EmptyGameItem />
						<EmptyGameItem />
						<EmptyGameItem />
						<EmptyGameItem />
					</ul>
				</nav>
			</Wrapper>
		</section>
	);
}
