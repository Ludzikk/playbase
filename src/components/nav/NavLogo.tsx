import Logo from "/playbase.png"
import { Link } from "react-router-dom";

type NavLogoProps = {
    className?: string
}

export default function NavLogo({className}: NavLogoProps) {
	return (
		<Link to="." className={`absolute left-0 top-1/2 translate-y-[-50%] ml-4 ${className}`}>
			<img src={Logo} alt="PlayBase Logo" className="h-[25px] lg:h-[40px] hover:rotate-[-2deg] duration-300" />
		</Link>
	);
}
