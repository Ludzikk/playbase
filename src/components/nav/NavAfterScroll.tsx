import { FaBasketShopping } from "react-icons/fa6";
import NavSearch from "./NavSearch";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavSearchBox from "./NavSearchBox";
import { useContext } from "react";
import { SearchBoxContext } from "./Nav";
import { Link } from "react-router-dom";

export default function NavAfterScroll() {
	const searchBoxContext = useContext(SearchBoxContext);
	const searchBoxValue = searchBoxContext?.searchBoxValue ?? "";
	const showSearchBox = searchBoxContext?.showSearchBox;
	const changeShowSearchBox = searchBoxContext?.changeShowSearchBox;
	const animateSearchBox = searchBoxContext?.animateSearchBox;
	const changeSearchValue = searchBoxContext?.changeSearchValue;

	return (
		<>
			<NavLogo />
			{changeShowSearchBox ? (
				<NavSearch onClick={changeShowSearchBox} className="md:hidden" />
			) : null}
			<div className="hidden justify-center items-center gap-8 pl-6 rounded-full md:flex relative">
				<NavLinks className="py-4 relative z-1" />
				{changeShowSearchBox ? (
					<NavSearch
						onClick={changeShowSearchBox}
						className="hidden relative z-1 md:p-4 md:block"
					/>
				) : null}
				{animateSearchBox ? null : showSearchBox ? (
					<NavSearchBox
						changeSearchValue={changeSearchValue || (() => {})}
						searchBoxValue={searchBoxValue}
						onClick={changeShowSearchBox}
						buttonClassName="right-[-50px]"
						containerClassName="w-0 h-full hidden md:block show-full-width-search right-0 show-full-width-search"
						inputClassName="w-full h-full"
					/>
				) : (
					<NavSearchBox
						changeSearchValue={changeSearchValue || (() => {})}
						searchBoxValue={searchBoxValue}
						onClick={changeShowSearchBox}
						buttonClassName="right-[-50px]"
						containerClassName="w-0 h-full hidden md:block hide-full-width-search right-0 show-full-width-search"
						inputClassName="w-full h-full"
					/>
				)}
			</div>
			{animateSearchBox ? null : showSearchBox ? (
				<>
					<NavSearchBox
						changeSearchValue={changeSearchValue || (() => {})}
						searchBoxValue={searchBoxValue}
						onClick={changeShowSearchBox}
						buttonClassName="right-[15%]"
						containerClassName="w-full h-full hidden items-center justify-center px-4 sm:flex md:hidden show-full-width-search"
						inputClassName="w-[60%] h-[55%]"
					/>
					<NavSearchBox
						changeSearchValue={changeSearchValue || (() => {})}
						searchBoxValue={searchBoxValue}
						onClick={changeShowSearchBox}
						buttonClassName="right-[8px]"
						containerClassName="w-full h-full bg-black flex items-center px-4 sm:hidden show-full-width-search"
						inputClassName="w-[90%] h-[50%]"
					/>
				</>
			) : (
				<>
					<NavSearchBox
						changeSearchValue={changeSearchValue || (() => {})}
						searchBoxValue={searchBoxValue}
						onClick={changeShowSearchBox}
						buttonClassName="right-[15%]"
						containerClassName="w-full h-full hidden items-center justify-center px-4 sm:flex md:hidden hide-full-width-search"
						inputClassName="w-[60%] h-[55%]"
					/>
					<NavSearchBox
						changeSearchValue={changeSearchValue || (() => {})}
						searchBoxValue={searchBoxValue}
						onClick={changeShowSearchBox}
						buttonClassName="right-[8px]"
						containerClassName="w-full h-full bg-black flex items-center px-4 sm:hidden hide-full-width-search"
						inputClassName="w-[90%] h-[50%]"
					/>
				</>
			)}

			<Link to="cart" aria-label="Go to cart">
				<FaBasketShopping className="absolute right-0 top-1/2 translate-y-[-50%] mr-4 text-2xl md:text-3xl hover:text-sky-400 duration-300 cursor-pointer" />
			</Link>
		</>
	);
}
