import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import NavSearch from "./NavSearch";
import NavLinks from "./NavLinks";
import Logo from "/playbase.png"

export default function NavAfterScroll() {
	return (
		<>
			<Link to="." className="absolute left-0 top-1/2 translate-y-[-50%] ml-4 ">
				<img src={Logo} alt="PlayBase Logo" className="h-[40px]" />
			</Link>
			<NavSearch className="md:hidden" />
			<div className="hidden justify-center items-center gap-8 pl-6 rounded-full md:flex">
				<NavLinks className="py-4 relative z-1" />
				<NavSearch className="hidden relative z-1 md:p-4 md:block" />
			</div>
			<FaBasketShopping className="absolute right-0 top-1/2 translate-y-[-50%] mr-4 text-2xl md:text-3xl hover:text-sky-400 duration-300 cursor-pointer" />
		</>
	);
}
