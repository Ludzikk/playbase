import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import NavSearch from "./NavSearch";
import NavLinks from "./NavLinks";
import NavTopLinks from "./NavTopLinks";
import Logo from "/playbase.png"

export default function NavBeforeScroll() {
	return (
		<>
			<div className="relative flex justify-center items-center p-4 bg-black md:bg-transparent">
				<Link to="." className="absolute left-0 ml-4 md:mt-4">
					<img src={Logo} alt="PlayBase Logo" className="h-[40px]"/>
				</Link>
				<NavSearch className="md:hidden" />
				<NavTopLinks className="hidden md:block" />
				<div className="hidden">
					<NavLinks />
				</div>
				<FaBasketShopping className="absolute right-0 mr-4 text-2xl md:text-3xl hover:text-sky-400 duration-300 cursor-pointer md:mt-4" />
			</div>
			<div className="flex justify-center bg-white/20 md:bg-white/0">
				<div className="relative flex justify-center items-center gap-8 pl-6 rounded-full">
					<div className="absolute w-full h-full top-0 left-0 bg-white/20 rounded-full hidden md:block"></div>
					<NavLinks className="py-4 relative z-5" />
					<NavSearch className="hidden relative z-1 md:p-6 md:block" />
				</div>
			</div>
		</>
	);
}
