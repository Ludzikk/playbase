import ReactMarkdown from "react-markdown";
import { RefObject, useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

type CurrentGameProps = {
	currentGame: {
		title: string;
		desc: string;
		price: number;
		sale: number;
		releaseDate: string;
		inStock: boolean;
		developer: string;
		publisher: string;
		thumbnail: string;
		bg: string;
		platforms: string[];
		genre: string[];
		tags: string[];
		images: string[];
	};
	descRef: RefObject<HTMLDivElement | null>;
};

export default function GameDescSection({
	currentGame,
	descRef,
}: CurrentGameProps) {
	const [descHeight, setDescHeight] = useState<string | number>(300);
	const descContentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (descHeight === "auto" && descContentRef.current) {
			setDescHeight(descContentRef.current.scrollHeight);
		}
	}, [descHeight]);

	const descMaxHeight = {
		maxHeight:
			typeof descHeight === "number" ? `${descHeight + 200}px` : "auto",
	};

	function changeHeightOfDesc() {
		if (descHeight === 300) {
			setDescHeight("auto");
		} else {
			setDescHeight(300);
		}
	}

	return (
		<section ref={descRef}>
			<h2 className="font-bold text-2xl pb-6">Description</h2>
			<div
				className="desc relative overflow-hidden transition-[max-height] duration-500 pb-20"
				style={descMaxHeight}>
				<div ref={descContentRef}>
					<ReactMarkdown>{currentGame.desc}</ReactMarkdown>
				</div>
				{descHeight === 300 ? (
					<div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-neutral-900"></div>
				) : null}
				<button
					onClick={changeHeightOfDesc}
					className="absolute bottom-0 left-1/2 translate-x-[-50%] text-xl p-4 bg-neutral-900 border border-neutral-600 rounded-full hover:bg-neutral-800 duration-300">
					{descHeight === 300 ? <FaPlus /> : <FaMinus />}
				</button>
			</div>
		</section>
	);
}
