import { Link } from "react-router-dom";
import getPriceAfterSale from "../../functions/priceAfterSale";
import SaleInfo from "../other/SaleInfo";
import Button from "../other/Button";

type GameItemProps = {
	price: number;
	sale: number;
	title: string;
	img: string;
};

export default function GameItem({ price, sale, title, img }: GameItemProps) {
	return (
		<li className="w-[150px] md:w-[200px] bg-neutral-800 group rounded [box-shadow:0px_5px_5px_rgba(0,0,0,0.1)]">
			<Link to={`../game/${title}`}>
				<div className="w-[150px] h-[200px] md:w-[200px] md:h-[250px] rounded-t overflow-hidden relative game-item-hover">
					<img src={img} alt={title} className="w-full h-full object-cover duration-300" />
					{sale > 0 && (
						<SaleInfo
							game={sale}
							className="absolute bottom-0 left-0 m-2 xl:text-sm"
						/>
					)}
				</div>
			</Link>
			<div className="p-4 font-bold overflow-hidden max-h-[100px]">
				<div className="translate-y-[0] group-hover:translate-y-[-70px] duration-300 bg-neutral-800">
					<div className="h-[70px]">
						<h3 className="text-sm">{title}</h3>
						<p className="text-lg">
							{getPriceAfterSale(price, sale).toFixed(2)}zł
						</p>
					</div>
					<Button isLink={false} to="" className="mt-4 w-full">
						Add to cart
					</Button>
				</div>
			</div>
		</li>
	);
}
