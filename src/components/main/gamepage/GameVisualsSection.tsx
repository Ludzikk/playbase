import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

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
};

export default function GameVisualsSection({ currentGame }: CurrentGameProps) {
	const imgEl = currentGame.images.map((img, index) => {
		return (
			<PhotoView src={img} key={index}>
				<div className="overflow-hidden rounded-xl [box-shadow:0px_5px_5px_rgba(0,0,0,0.1)]">
					<img
						src={img}
						alt={currentGame.title}
						className="cursor-pointer h-full hover:scale-[1.05] duration-300"
					/>
				</div>
			</PhotoView>
		);
	});

	const imgElWithoutFirst = imgEl.map((img, index) => {
		if (index > 0) {
			return img;
		}
	});

	return (
		<section>
			<h2 className="font-bold text-2xl pb-6">
				Visuals
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
				<PhotoProvider>{imgEl}</PhotoProvider>
			</div>
			<div className="gap-4 hidden lg:flex">
				<PhotoProvider>
					<div className="w-1/2">{imgEl[0]}</div>
					<div className="w-1/2 grid grid-cols-2 gap-6">
						{imgElWithoutFirst}
					</div>
				</PhotoProvider>
			</div>
		</section>
	);
}
