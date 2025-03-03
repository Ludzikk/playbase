import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
	children: ReactNode;
	className?: string;
	isLink: boolean;
	to: string;
	onClick?: () => void
};

export default function Button({
	children,
	className,
	isLink,
	to,
	...rest
}: ButtonProps) {
	return isLink ? (
		<Link
			to={to}
			className={`py-2 px-4 bg-sky-600 font-bold rounded hover:bg-sky-700 duration-300 [box-shadow:0px_5px_5px_rgba(0,0,0,0.1)] ${className}`}>
			{children}
		</Link>
	) : (
		<button
			className={`py-2 px-4 bg-sky-600 font-bold rounded hover:bg-sky-700 duration-300 [box-shadow:0px_5px_5px_rgba(0,0,0,0.1)] ${className}`}
			{...rest}>
			{children}
		</button>
	);
}
