import { useContext } from "react";
import Button from "../../other/Button";
import { CartContext } from "../../../App";

export default function CartSummary() {
	const cartContext = useContext(CartContext);
	const cart = cartContext?.cart;

	const totalPriceWithoutSales = getTotalValueOfCart() ?? 0;
	const totalPriceWithSales = getTotalValueOfCartWithSales() ?? 0;
    const totalAmountOfSale = getTotalAmountOfSale() ?? 0

	function getTotalValueOfCart() {
		return cart?.reduce((totalValue, game) => {
			return totalValue + game.price * game.amount;
		}, 0);
	}

	function getTotalValueOfCartWithSales() {
		return cart?.reduce((totalValue, game) => {
			const finalPrice = game.price * (1 - game.sale / 100);
			return totalValue + finalPrice * game.amount;
		}, 0);
	}

    function getTotalAmountOfSale() {
        return cart?.reduce((totalSale, game) => {
            const discount = (game.price * game.sale) / 100;
            const totalDiscountForGame = discount * game.amount; 
            return totalSale + totalDiscountForGame;
        }, 0)
    }
    

	return (
		<>
			<div className="flex justify-between text-white/60">
				<span>Official price</span>
				<span>{totalPriceWithoutSales.toFixed(2)}zł</span>
			</div>
			<div className="flex justify-between text-white/60">
				<span>Discount</span>
				<span>{totalAmountOfSale.toFixed(2)}zł</span>
			</div>
			<div className="flex justify-between text-xl">
				<span>Subtotal</span>
				<span>{totalPriceWithSales.toFixed(2)}zł</span>
			</div>
			{cart && cart.length === 0 ? (
				<button
					className={`py-2 px-4 bg-sky-600 font-bold rounded  mt-4 duration-300 [box-shadow:0px_5px_5px_rgba(0,0,0,0.1)] opacity-60 cursor-not-allowed!`}>
					Go to payment
				</button>
			) : (
				<Button className="mt-4" isLink={false} to="">
					Go to payment
				</Button>
			)}
			<div className="flex justify-center items-center gap-4">
				<hr className="flex-1 text-white/30" />
				<span>or</span>
				<hr className="flex-1 text-white/30" />
			</div>
			<Button
				isLink={true}
				to=".."
				className="flex justify-center bg-transparent hover:bg-white/10 border border-white/30">
				Continue shopping
			</Button>
		</>
	);
}
