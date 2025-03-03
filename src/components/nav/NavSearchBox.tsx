import { FaXmark } from "react-icons/fa6";
import { ChangeEvent } from "react";

type NavSearchBoxProps = {
	containerClassName?: string;
	inputClassName?: string;
	buttonClassName?: string;
	onClick?: () => void;
	searchBoxValue: string;
	changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function NavSearchBox({
	containerClassName = "",
	inputClassName = "",
	buttonClassName = "",
	onClick,
	searchBoxValue,
	changeSearchValue,
}: NavSearchBoxProps) {

	return (
		<div className={`absolute top-0 z-[6] ${containerClassName}`}>
			<input
				type="text"
				value={searchBoxValue}
				onChange={changeSearchValue}
				className={`rounded-full bg-sky-600 px-6 text-xl focus:outline-none ${inputClassName}`}
				placeholder="Minecraft, elden ring..."
			/>
			<button
				onClick={onClick}
				className={`absolute top-1/2 translate-y-[-50%] text-4xl hover:text-sky-400 duration-300 ${buttonClassName}`}>
				<FaXmark />
			</button>
		</div>
	);
}
