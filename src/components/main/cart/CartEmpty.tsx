import { FaBasketShopping } from "react-icons/fa6";
import Button from "../../other/Button";

export default function CartEmpty() {
	return (
		<div className="flex flex-col items-center justify-center flex-1 w-full">
			<FaBasketShopping className="text-sky-300 text-4xl pb-2" />
			<h3 className="font-bold text-lg pb-2 md:text-xl">Empty cart</h3>
			<span className="text-white/60 text-center pb-4">
				You didn't add any item in your cart yet. Browse the website to find
				amazing deals!
			</span>
			<Button isLink={true} to="../search">
				Discover games!
			</Button>
		</div>
	);
}
