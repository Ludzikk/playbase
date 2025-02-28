import { useEffect, useRef, useState } from "react";
import NavBeforeScroll from "./NavBeforeScroll";
import NavAfterScroll from "./NavAfterScroll"

export default function Nav() {
	const [scrollY, setScrollY] = useState(window.scrollY);
	const [didScroll, setDidScroll] = useState(false)
	const toHideNavRef = useRef<HTMLDivElement>(null);
	const toShowNavRef = useRef<HTMLDivElement>(null);

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

			setDidScroll(true)
		} else if (scrollY !== 0 && didScroll === true) {
			toHideNavRef.current.classList.remove("hide-top-nav");
			toHideNavRef.current.classList.add("show-top-nav");

			toShowNavRef.current.classList.add("hide-bottom-nav", "hidden");
			toShowNavRef.current.classList.remove("show-bottom-nav", "flex");
		}
	}, [scrollY, didScroll]);

	return (
		<>
			<nav className="text-lg fixed top-0 left-0 w-full z-50">
				<div ref={toHideNavRef}>
					<NavBeforeScroll />
				</div>
				<div ref={toShowNavRef} className="hidden bg-black py-4 justify-center [box-shadow:0px_0px_30px_rgba(0,0,0,0.5)]">
					<NavAfterScroll />
				</div>
			</nav>
		</>
	);
}
