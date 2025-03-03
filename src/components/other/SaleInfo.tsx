type SaleInfoProps = {
    game: number
	className?: string
}

export default function SaleInfo({game, className}: SaleInfoProps) {
	return (
		<div className={`font-bold text-sm xl:text-lg bg-gradient-to-t from-sky-800 to-sky-400 p-2 px-3 rounded-md skew-x-[-5deg] ${className}`}>
			<span className="relative skew-5 opacity-0">-{game}%</span>
			<span className="absolute top-1/2 left-1/2 skew-x-[5deg] translate-x-[-50%] translate-y-[-50%]">-{game}%</span>
		</div>
	);
}
