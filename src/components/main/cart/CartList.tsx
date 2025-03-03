import CartItem from "./CartItem";
import { CartContext } from "../../../App";
import { useContext } from "react";

export default function CartList() {
	const cartContext = useContext(CartContext);
	const cart = cartContext?.cart;

	const cartEl = cart?.map((game) => {
		return (
			<CartItem
				key={game.title}
				title={game.title}
				img={game.img}
				amount={game.amount}
				sale={game.sale}
				price={game.price}
			/>
		);
	});

	return (
		<ul className="flex flex-col gap-8 overflow-auto lg:w-full scroll-cart lg:pr-4">
            {cartEl}
        </ul>
	);
}
