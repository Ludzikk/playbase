import Button from "../other/Button";
import Wrapper from "../other/Wrapper";
import { IoIosSend } from "react-icons/io";

export default function Newsletter() {
	return (
		<section className="bg-neutral-800">
			<Wrapper>
				<div className="flex flex-col items-center py-6 text-center">
					<IoIosSend className="text-6xl text-sky-300 mb-2"/>
					<h2 className="font-bold text-xl pb-1 text-center">
						Don't miss any offers and promotions!
					</h2>
					<p className="text-white/80 pb-6">
						And be the first to receive our private offers, newsletters and deal
						of the week
					</p>
					<Button isLink={false} to="">
						Sign Up!
					</Button>
				</div>
			</Wrapper>
		</section>
	);
}
