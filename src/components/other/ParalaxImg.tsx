import HeaderGameLink from "../header/HeaderGameLink";
import { Parallax } from "react-scroll-parallax";

type ParalaxImgProps = {
	game: {
		price: number;
		sale: number;
		title: string;
		bg: string;
	};
	bottom: string;
	h: number;
};

export default function ParalaxImg({ game, bottom, h }: ParalaxImgProps) {
	return (
		<>
			<div className={`relative h-[${h}vh] overflow-x-hidden overflow-y-clip`}>
				<Parallax
					speed={-50}
					translateX={["-200px", "100px"]}
					className="h-[100vh] w-[115vw]">
					<img
						src={game.bg}
						alt=""
						className="w-full h-full object-cover bg-fixed"
					/>
				</Parallax>
				<HeaderGameLink game={game} />
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80"></div>
				<div
					className={`absolute left-[-10px] w-[105%] h-[400px] bg-neutral-900 z-[2] rotate-[2deg] ${bottom}`}></div>
			</div>
		</>
	);
}
