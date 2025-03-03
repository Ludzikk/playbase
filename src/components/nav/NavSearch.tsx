import { FaSearch } from "react-icons/fa";

type NavSearchProps = {
    className?: string;
    onClick: (() => void) | undefined;
};


export default function NavSearch({className, onClick}: NavSearchProps) {
	return (
		<button aria-label="Open up search bar" onClick={onClick} className={`bg-sky-600 p-2 px-6 rounded-full group cursor-pointer ${className}`}>
			<FaSearch className="group-hover:text-white/90 group-hover:scale-[1.1] duration-300" />
		</button>
	);
}
