type SaleInfoProps = {
	game: number;
	className?: string;
};

export default function SaleInfo({ game, className }: SaleInfoProps) {
	return (
		<div
			className={`font-bold text-sm xl:text-lg bg-gradient-to-t from-sky-800 to-sky-400 p-2 rounded-md skew-x-[-5deg] ${className}`}>
			<span translate="no" className="relative opacity-0 px-1">-{game}%</span>
			<span translate="no" className="absolute top-1/2 left-1/2 skew-x-[5deg] translate-x-[-50%] translate-y-[-50%]">
				-{game}%
			</span>
		</div>
	);
}
