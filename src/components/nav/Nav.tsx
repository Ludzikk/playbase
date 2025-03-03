import { createContext, ChangeEvent, useEffect, useRef, useState } from "react";
import NavBeforeScroll from "./NavBeforeScroll";
import NavAfterScroll from "./NavAfterScroll";
import { RefObject } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBoxContextType {
	searchBoxValue: string;
	showSearchBox: boolean;
	changeShowSearchBox: () => void;
	animateSearchBox: boolean;
	changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBoxContext = createContext<SearchBoxContextType | undefined>(
	undefined
);

type NavProps = {
	navRef: RefObject<HTMLElement | null>;
};

export default function Nav({ navRef }: NavProps) {
	const [scrollY, setScrollY] = useState(window.scrollY);
	const [didScroll, setDidScroll] = useState(false);
	const [showSearchBox, setShowSearchBox] = useState(false);
	const [searchBoxValue, setSearchBoxValue] = useState("");
	const [animateSearchBox, setAnimateSearchBox] = useState(true);

	const navigate = useNavigate();

	const toHideNavRef = useRef<HTMLDivElement>(null);
	const toShowNavRef = useRef<HTMLDivElement>(null);

	function changeSearchValue(event: ChangeEvent<HTMLInputElement>) {
		const newValue = event.target.value;
		setSearchBoxValue(newValue);
		navigate(`search/${newValue}`);
	}

	function changeShowSearchBox() {
		setShowSearchBox((prevVal) => !prevVal);

		if (!showSearchBox) {
			setAnimateSearchBox(false);
		} else {
			setTimeout(() => {
				setAnimateSearchBox(true);
			}, 500);
		}
	}

	const setRefs = (node: HTMLDivElement) => {
		navRef.current = node;
		toShowNavRef.current = node;
	};

	useEffect(() => {
		function handleScroll() {
			setScrollY(window.scrollY);
		}

		window.addEventListener("scroll", handleScroll);

		return function () {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (!toHideNavRef?.current || !toShowNavRef?.current) return;

		if (scrollY > 100) {
			toHideNavRef.current.classList.add("hide-top-nav");
			toHideNavRef.current.classList.remove("show-top-nav");

			toShowNavRef.current.classList.remove("hidden", "hide-bottom-nav");
			toShowNavRef.current.classList.add("show-bottom-nav", "flex");

			setDidScroll(true);
		} else if (scrollY !== 0 && didScroll === true) {
			toHideNavRef.current.classList.remove("hide-top-nav");
			toHideNavRef.current.classList.add("show-top-nav");

			toShowNavRef.current.classList.add("hide-bottom-nav", "hidden");
			toShowNavRef.current.classList.remove("show-bottom-nav", "flex");
		}
	}, [scrollY, didScroll]);

	return (
		<>
			<SearchBoxContext.Provider
				value={{
					searchBoxValue,
					showSearchBox,
					changeShowSearchBox,
					animateSearchBox,
					changeSearchValue,
				}}>
				<nav className="text-lg fixed top-0 left-0 w-full z-50">
					<div ref={toHideNavRef}>
						<NavBeforeScroll />
					</div>
					<div
						ref={setRefs}
						className="hidden bg-black py-4 justify-center [box-shadow:0px_0px_30px_rgba(0,0,0,0.5)]">
						<NavAfterScroll />
					</div>
				</nav>
			</SearchBoxContext.Provider>
		</>
	);
}

export { SearchBoxContext };
