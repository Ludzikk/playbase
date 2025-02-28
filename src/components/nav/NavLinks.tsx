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
	name: string;
};

type NavLinkProps = {
	className?: string;
};

export default function NavLinks({ className }: NavLinkProps) {
	const linksArray: NavLinkItem[] = [
		{
			icon: "CgScreen",
			to: "",
			name: "PC",
		},
		{
			icon: "FaPlaystation",
			to: "",
			name: "PlayStation",
		},
		{
			icon: "FaXbox",
			to: "",
			name: "Xbox",
		},
		{
			icon: "BsNintendoSwitch",
			to: "",
			name: "Nintendo",
		},
	];

	const linksEl = linksArray.map((link) => {
		const IconComponent = iconMap[link.icon];

		return (
			<NavLink
				key={link.name}
				to={link.to}
				className={`flex items-center gap-2 md:px-4
			hover:bg-white/30 rounded-full duration-300 ${className}`}>
				<IconComponent />
				<span>{link.name}</span>
			</NavLink>
		);
	});

	return (
		<div className="flex justify-center items-center gap-4 text-sm md:gap-4 md:text-base">
			{linksEl}
		</div>
	);
}
