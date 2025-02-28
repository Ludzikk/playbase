import { Link } from "react-router-dom";

type NavLinkItem = {
	to: string;
	name: string;
};

type NavLinkProps = {
	className?: string;
};

export default function NavLinks({ className }: NavLinkProps) {
	const linksArray: NavLinkItem[] = [
		{
			to: "",
			name: "Trending",
		},
		{
			to: "",
			name: "Pre-orders",
		},
		{
			to: "",
			name: "Upcoming",
		},
		{
			to: "",
			name: "Support 24/7",
		},
	];

	const linksEl = linksArray.map((link) => {
		return (
			<Link
				key={link.name}
				to={link.to}
				className={`flex items-center gap-2 text-white/80 text-sm hover:text-white/60 duration-300 ${className}`}>
				{link.name}
			</Link>
		);
	});

	return <div className="flex justify-center gap-10">{linksEl}</div>;
}
