import Button from "../../other/Button";
import { FaXmark, FaCheck } from "react-icons/fa6";
import getPriceAfterSale from "../../../functions/priceAfterSale";

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

export default function GameTopSection({ currentGame }: CurrentGameProps) {
	return (
		<section className="flex flex-col lg:flex-row items-center gap-8 text-center">
			<div className="[box-shadow:0px_5px_5px_rgba(0,0,0,0.1)] lg:w-1/2">
				<img
					src={currentGame.thumbnail}
					alt={currentGame.title}
					className="rounded-xl w-full"
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-4 lg:w-1/2">
				<h1 className="font-bold text-4xl">{currentGame.title}</h1>
				{currentGame.inStock ? (
					<span className="flex items-center gap-1 ">
						<FaCheck className="text-green-400 text-xl" />
						In stock
					</span>
				) : (
					<span className="flex items-center gap-1">
						<FaXmark className="text-red-400 text-2xl" />
						Out of stock
					</span>
				)}
				<div className="flex gap-2 items-end">
					{currentGame.sale > 0 ? (
						<>
							<span className="line-through text-xl">
								{currentGame.price}zł
							</span>
							<span className="text-sky-400 text-xl">-{currentGame.sale}%</span>
						</>
					) : null}
					<span className="font-bold text-3xl">
						{getPriceAfterSale(currentGame.price, currentGame.sale).toFixed(2)}
						zł
					</span>
				</div>
				{currentGame.inStock ? (
					<Button className="relative z-[1]" isLink={false} to="">
						Add to cart
					</Button>
				) : (
					<Button className="relative z-[1]" isLink={false} to="">
						Get notified by e-mail on stock availability
					</Button>
				)}
			</div>
		</section>
	);
}
