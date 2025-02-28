type SaleInfoProps = {
    game: number
	className?: string
}

export default function SaleInfo({game, className}: SaleInfoProps) {
	return (
		<div className={`font-bold text-sm xl:text-lg bg-sky-600 p-2 rounded-md header-hero-sale ${className}`}>
			<span className="relative z-[1]">-{game}%</span>
		</div>
	);
}
