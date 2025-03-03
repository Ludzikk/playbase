import { RefObject } from "react";
import Nav from "../nav/Nav";

type HeaderProps = {
	navRef: RefObject<HTMLDivElement | null>
}

export default function Header({ navRef }: HeaderProps) {
	return (
		<header>
			<Nav navRef={navRef}/>
		</header>
	);
}