import { Outlet, useLocation } from "react-router-dom";
import ParalaxImg from "../other/ParalaxImg";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { GamesDataContext } from "../../App";
import EmptyParalaxImg from "../other/EmptyParalxImg";

type LinkItem = {
	to: string;
	state: string[];
	link: string;
	name: string;
};

const nameMappings: Record<string, string> = {
	xboxseriesxs: "Xbox Series X/S",
	xboxone: "Xbox One",
	playstation4: "PlayStation 4",
	playstation5: "PlayStation 5",
	nintendo: "Nintendo Switch",
	playstation: "PlayStation",
	pc: "PC",
};

export default function SearchLayout() {
	const [linksToUse, setLinksToUse] = useState<LinkItem[]>([]);
	const gamesDataContext = useContext(GamesDataContext);
	const gamesList = gamesDataContext;
	const title = useLocation()?.state?.platforms;
	const links = useLocation()?.state?.links;
	const bg = 4;
	const allPaths = useLocation()
		.pathname.split("/")
		.filter((path) => path);
	const titleForBack = title[0].split(" ");

	const linksPlaystation: LinkItem[] = [
		{
			to: "playstation/playstation4",
			state: ["PlayStation 4"],
			link: "ps",
			name: "PlayStation 4",
		},
		{
			to: "playstation/playstation5",
			state: ["PlayStation 5"],
			link: "ps",
			name: "PlayStation 5",
		},
	];

	const linksXbox = [
		{
			to: "xbox/xboxone",
			state: ["Xbox One"],
			link: "xbox",
			name: "Xbox One",
		},
		{
			to: "xbox/xboxseriesxs",
			state: ["Xbox Series X/S"],
			link: "xbox",
			name: "Xbox Series X/S",
		},
	];

	const linksEl = linksToUse.map((link) => {
		return (
			<NavLink
				className={({ isActive }) =>
					isActive
						? `active-${link.link} p-4 duration-300 rounded-lg`
						: `p-4 hover:bg-white/30 duration-300 rounded-lg`
				}
				key={link.name}
				to={link.to}
				state={{ platforms: link.state, links: link.link }}>
				{link.name}
			</NavLink>
		);
	});

	const pathLinksEl = allPaths.map((path, index) => {
		const formattedPath =
			nameMappings[path] || path.charAt(0).toUpperCase() + path.slice(1);

		const fullPath = `/${allPaths.slice(0, index + 1).join("/")}`; // Tworzy pełną ścieżkę

		if (index < allPaths.length - 1) {
			return (
				<Link
					to={fullPath}
					state={{ platforms: titleForBack[0] }}
					relative="path"
					key={path}>
					<span className="hover:text-white/80 duration-300">
						{formattedPath}
					</span>{" "}
					&gt;
				</Link>
			);
		} else {
			return <span key={path}>{formattedPath}</span>;
		}
	});

	useEffect(() => {
		if (links === "ps") {
			setLinksToUse(linksPlaystation);
		} else if (links === "xbox") {
			setLinksToUse(linksXbox);
		} else {
			setLinksToUse([]);
		}
	}, [links]);

	return (
		<>
			{gamesList.length > 0 ? (
				<ParalaxImg
					game={gamesList[bg]}
					bottom={"bottom-[-350px]"}
					h={40}
					buyLink={false}
				/>
			) : (
				<EmptyParalaxImg bottom={"bottom-[-350px]"} h={40} />
			)}
			<div className="flex flex-col items-center gap-8">
				<div className="flex gap-2 capitalize">
					<nav className="flex gap-2">
						<Link to="..">
							<span className="hover:text-white/80 duration-300">Home</span>{" "}
							&gt;
						</Link>
						{pathLinksEl}
					</nav>
				</div>
				<h1 className="font-bold text-5xl">{title}</h1>
				{linksToUse.length > 0 ? (
					<nav className="p-2 flex gap-2 rounded-lg bg-neutral-800">{linksEl}</nav>
				) : null}
			</div>
			<Outlet />
		</>
	);
}
