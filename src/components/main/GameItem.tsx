import { Link } from "react-router-dom";
import getPriceAfterSale from "../../functions/priceAfterSale";
import SaleInfo from "../other/SaleInfo";

type GameItemProps = {
	price: number;
	sale: number;
	title: string;
	img: string;
};

export default function GameItem({ price, sale, title, img }: GameItemProps) {
	return (
		<li className="w-[150px] md:w-[200px] bg-neutral-800 group rounded [box-shadow:0px_5px_5px_rgba(0,0,0,0.1)]">
			<Link to={`games/${title}`}>
				<div className="w-[150px] h-[200px] md:w-[200px] md:h-[250px] rounded-t overflow-hidden relative">
					<img src={img} alt={title} className="w-full h-full object-cover" />
					{sale > 0 && (
						<SaleInfo
							game={sale}
							className="absolute bottom-0 left-0 m-2 xl:text-sm"
						/>
					)}
				</div>
				<div className="p-4 font-bold overflow-hidden max-h-[100px]">
					<div className="translate-y-[0] group-hover:translate-y-[-70px] duration-300 bg-neutral-800">
						<div className="h-[70px]">
							<h3 className="text-sm">{title}</h3>
							<p className="text-lg">
								{getPriceAfterSale(price, sale).toFixed(2)}zł
							</p>
						</div>
						<button className="w-full mt-4 bg-sky-600 py-2 rounded hover:bg-sky-700 duration-300">
							Add to cart
						</button>
					</div>
				</div>
			</Link>
		</li>
	);
}
