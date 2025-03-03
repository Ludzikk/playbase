export default function EmptyGameItem() {
	return (
		<li className="w-[150px] md:w-[200px] bg-neutral-800 group rounded [box-shadow:0px_5px_5px_rgba(0,0,0,0.1)]">
			<div className="w-[150px] h-[200px] md:w-[200px] md:h-[250px] rounded-t overflow-hidden relative game-item-hover"></div>
			<div className="p-4 font-bold overflow-hidden max-h-[100px]">
				<div className="translate-y-[0] group-hover:translate-y-[-70px] duration-300">
					<div className="h-[70px]"></div>
				</div>
			</div>
		</li>
	);
}
