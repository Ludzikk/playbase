import { useContext } from "react";
import { CartContext, GamesDataContext } from "../../../App";
import { FaRegTrashCan } from "react-icons/fa6";
import getPriceAfterSale from "../../../functions/priceAfterSale";

type CartItemsProps = {
	title: string;
	price: number;
	amount: number;
	img: string;
	sale: number;
};

export default function CartItem({
	title,
	price,
	amount,
	img,
	sale,
}: CartItemsProps) {
	const gamesList = useContext(GamesDataContext);
	const cartContext = useContext(CartContext);
	const changeAmountOfItemInCart = cartContext?.changeAmountOfItemInCart;
	const deleteItemFromCart = cartContext?.deleteItemFromCart;

	function changeAmount(event: React.ChangeEvent<HTMLSelectElement>) {
		if (changeAmountOfItemInCart) {
			const amount = Number(event.target.value);
			changeAmountOfItemInCart(title, amount);
		}
	}

	if (gamesList.length === 0) {
		return;
	}

	return (
		<li className="flex flex-col gap-4 lg:flex-row">
			<img
				src={img}
				alt={title}
				className="max-h-[200px] lg:max-h-[150px] w-auto object-contain rounded-lg"
			/>
			<div className="flex flex-1 justify-between items-start">
				<h3 className="font-bold">{title}</h3>
				<div className="flex items-center gap-2 lg:text-lg">
					<span>{(getPriceAfterSale(price, sale) * amount).toFixed(2)}zł</span>
					<select
						name="amount"
						id="amount"
						onChange={changeAmount}
						defaultValue={amount}
						className="bg-neutral-800">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
					<button
						className="hover:text-sky-300 duration-300"
						onClick={() => deleteItemFromCart && deleteItemFromCart(title)}>
						<FaRegTrashCan />
					</button>
				</div>
			</div>
		</li>
	);
}
