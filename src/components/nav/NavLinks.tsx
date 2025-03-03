import { NavLink } from "react-router-dom";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
	CgScreen: CgScreen,
	FaPlaystation: FaPlaystation,
	FaXbox: FaXbox,
	BsNintendoSwitch: BsNintendoSwitch,
};

type NavLinkItem = {
	icon: keyof typeof iconMap;
	to: string;
	state: string[];
	link: string;
	name: string;
};

type NavLinkProps = {
	className?: string;
};

export default function NavLinks({ className }: NavLinkProps) {
	const linksArray: NavLinkItem[] = [
		{
			icon: "CgScreen",
			to: "pc",
			state: ["PC"],
			link: "pc",
			name: "PC",
		},
		{
			icon: "FaPlaystation",
			to: "playstation",
			state: ["PlayStation"],
			link: "ps",
			name: "PlayStation",
		},
		{
			icon: "FaXbox",
			to: "xbox",
			state: ["Xbox"],
			link: "xbox",
			name: "Xbox",
		},
		{
			icon: "BsNintendoSwitch",
			to: "nintendo",
			state: ["Nintendo Switch"],
			link: "nintendo",
			name: "Nintendo",
		},
	];

	const linkClassName =
		"flex items-center gap-2 md:px-4 rounded-full duration-300";

	const linksEl = linksArray.map((link) => {
		const IconComponent = iconMap[link.icon];

		return (
			<NavLink
				key={link.name}
				to={link.to}
				state={{ platforms: link.state, links: link.link }}
				className={({ isActive }) =>
					isActive
						? `${linkClassName} ${className} px-2 active-${link.link}`
						: `${linkClassName} ${className} px-2 hover:bg-white/30`
				}>
				<IconComponent />
				<span>{link.name}</span>
			</NavLink>
		);
	});

	return (
		<div className="flex justify-center py-2 items-center gap-1 text-sm md:gap-4 md:text-base">
			{linksEl}
		</div>
	);
}
