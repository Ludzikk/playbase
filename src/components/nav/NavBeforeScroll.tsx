import NavLogo from "./NavLogo";
import { FaBasketShopping } from "react-icons/fa6";
import NavSearch from "./NavSearch";
import NavLinks from "./NavLinks";
import NavTopLinks from "./NavTopLinks";
import NavSearchBox from "./NavSearchBox";
import { useContext } from "react";
import { SearchBoxContext } from "./Nav";
import { Link } from "react-router-dom";

export default function NavBeforeScroll() {
	const searchBoxContext = useContext(SearchBoxContext);
	const searchBoxValue = searchBoxContext?.searchBoxValue ?? "";
	const showSearchBox = searchBoxContext?.showSearchBox;
	const changeShowSearchBox = searchBoxContext?.changeShowSearchBox;
	const animateSearchBox = searchBoxContext?.animateSearchBox;
	const changeSearchValue = searchBoxContext?.changeSearchValue;

	return (
		<>
			<div className="relative flex justify-center items-center p-4 bg-black md:bg-transparent">
				<NavLogo className="md:mt-4" />
				{changeShowSearchBox ? (
					<NavSearch onClick={changeShowSearchBox} className="md:hidden" />
				) : null}
				<NavTopLinks className="hidden md:block" />
				<div className="hidden">
					<NavLinks />
				</div>
				{animateSearchBox ? null : showSearchBox ? (
					<NavSearchBox
						changeSearchValue={changeSearchValue || (() => {})}
						searchBoxValue={searchBoxValue}
						onClick={changeShowSearchBox}
						buttonClassName="right-[8px]"
						containerClassName="w-0 h-full bg-black flex items-center px-4 sm:hidden right-1/2 translate-x-[50%] show-full-width-search"
						inputClassName="w-[90%] h-[50%]"
					/>
				) : (
					<NavSearchBox
						changeSearchValue={changeSearchValue || (() => {})}
						searchBoxValue={searchBoxValue}
						onClick={changeShowSearchBox}
						buttonClassName="right-[8px]"
						containerClassName="w-0 h-full bg-black flex items-center px-4 sm:hidden right-1/2 translate-x-[50%] hide-full-width-search"
						inputClassName="w-[90%] h-[50%]"
					/>
				)}
				{animateSearchBox ? null : showSearchBox ? (
					<NavSearchBox
						changeSearchValue={changeSearchValue || (() => {})}
						searchBoxValue={searchBoxValue}
						onClick={changeShowSearchBox}
						buttonClassName="right-[15%]"
						containerClassName="w-full h-full hidden items-center justify-center px-4 sm:flex md:hidden show-full-width-search"
						inputClassName="w-[60%] h-[55%]"
					/>
				) : (
					<NavSearchBox
						changeSearchValue={changeSearchValue || (() => {})}
						searchBoxValue={searchBoxValue}
						onClick={changeShowSearchBox}
						buttonClassName="right-[15%]"
						containerClassName="w-full h-full hidden items-center justify-center px-4 sm:flex md:hidden hide-full-width-search"
						inputClassName="w-[60%] h-[55%]"
					/>
				)}
				<Link to="cart" aria-label="Go to cart">
					<FaBasketShopping className="absolute right-0 top-1/2 translate-y-[-50%] mr-4 text-2xl md:text-3xl hover:text-sky-400 duration-300 cursor-pointer" />
				</Link>
			</div>
			<div className="flex justify-center bg-white/20 md:bg-white/0">
				<div className="relative flex justify-center items-center gap-8 pl-6 rounded-full">
					<div className="absolute w-full h-full top-0 left-0 bg-white/20 rounded-full hidden md:block"></div>
					<NavLinks className="py-4 relative z-5" />
					<NavSearch
						onClick={changeShowSearchBox}
						className="hidden relative z-1 md:p-6 md:block"
					/>
					{animateSearchBox ? null : showSearchBox ? (
						<NavSearchBox
							changeSearchValue={changeSearchValue || (() => {})}
							searchBoxValue={searchBoxValue}
							onClick={changeShowSearchBox}
							buttonClassName="right-[-50px]"
							containerClassName="w-0 h-full hidden md:block show-full-width-search right-0"
							inputClassName="w-full h-full"
						/>
					) : (
						<NavSearchBox
							changeSearchValue={changeSearchValue || (() => {})}
							searchBoxValue={searchBoxValue}
							onClick={changeShowSearchBox}
							buttonClassName="right-[-50px]"
							containerClassName="w-0 h-full hidden md:block hide-full-width-search right-0"
							inputClassName="w-full h-full"
						/>
					)}
				</div>
			</div>
		</>
	);
}
