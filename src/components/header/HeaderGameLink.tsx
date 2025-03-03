import { Link } from "react-router-dom";
import Wrapper from "../other/Wrapper";
import SaleInfo from "../other/SaleInfo";
import getPriceAfterSale from "../../functions/priceAfterSale";

type HeaderGameLinkProps = {
	game: {
		price: number;
		sale: number;
		title: string;
	};
};

export default function HeaderGameLink({ game }: HeaderGameLinkProps) {
	const priceAfterSale = getPriceAfterSale(game.price, game.sale);

	if (!game) {
		return;
	}

	return (
		<Link
			to={`../game/${game.title}`}
			className="absolute top-0 left-0 w-full h-full z-[1] flex items-center">
			<Wrapper maxW="max-w-[1000px]">
				<div className="flex flex-col items-center md:items-start gap-2">
					<h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">
						{game.title}
					</h1>
					<div className="flex items-center gap-4">
						{game.sale > 0 ? (
							<SaleInfo game={game.sale} className="relative" />
						) : null}
						<span className=" text-lg md:text-2xl xl:text-3xl">
							{priceAfterSale.toFixed(2)}zł
						</span>
					</div>
				</div>
			</Wrapper>
		</Link>
	);
}
