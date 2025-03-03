import Wrapper from "../other/Wrapper";
import CartEmpty from "../main/cart/CartEmpty";
import CartSummary from "../main/cart/CartSummary";
import CartList from "../main/cart/CartList";
import { useContext } from "react";
import { CartContext } from "../../App";

export default function CartPage() {
	const cartContext = useContext(CartContext);
	const cart = cartContext?.cart;

	return (
		<main className="flex-1 flex items-center justify-center pt-40 lg:pt-0">
			<section className="w-full">
				<Wrapper maxW="max-w-[1000px]">
					<div className="flex flex-col lg:flex-row gap-6">
						<div className="lg:w-[70%] flex flex-col">
							<h2 className="font-bold text-xl pb-2 md:text-2xl">Cart</h2>
							<div className="bg-neutral-800 flex-1 rounded-lg p-4 flex flex-col items-center [box-shadow:0px_5px_5px_rgba(0,0,0,0.1)] lg:max-h-[270px] lg:items-start">
								{cart && cart.length === 0 ? <CartEmpty /> : <CartList />}
							</div>
						</div>
						<div className=" lg:flex-1">
							<h2 className="font-bold text-xl pb-2 md:text-2xl">Summary</h2>
							<div className="bg-neutral-950 rounded-lg p-4 flex flex-col gap-2 [box-shadow:0px_5px_5px_rgba(0,0,0,0.1)]">
								<CartSummary />
							</div>
						</div>
					</div>
				</Wrapper>
			</section>
		</main>
	);
}
