import Button from "../other/Button";
import FirstImg from "/1bg.jpg";
import SecondImg from "/2.jpg";

export default function PageNotFound() {
	return (
		<main className="flex flex-col justify-center items-center gap-4 h-[100vh] relative">
			<h1 className="text-3xl font-bold relative z-[1]">Page not found!</h1>
			<Button className="relative z-[1]" isLink={true} to="..">
				Go back to home
			</Button>
			<div className="absolute top-0 left-0 w-full h-1/2">
				<img
					src={SecondImg}
					alt="Elden Ring Nightreign"
					className="w-full h-full object-cover"
				/>
				<div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-black/70"></div>
			</div>
			<div className="absolute bottom-0 left-0 w-full h-1/2">
				<img
					src={FirstImg}
					alt="The Witcher 3"
					className="w-full h-full object-cover"
				/>
				<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70"></div>
			</div>
		</main>
	);
}
