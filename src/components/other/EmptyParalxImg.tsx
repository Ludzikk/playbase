type ParalaxImgProps = {
	bottom: string;
	h?: number;
};

export default function EmptyParalaxImg({ bottom, h = 40 }: ParalaxImgProps) {
	const styles = {
		height: `${h}vh`,
	};

	return (
		<>
			<div
				className={`relative overflow-x-hidden overflow-y-clip`}
				style={styles}>
				<div className="h-[100vh] w-[calc(100vw+200px)]"></div>
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80"></div>
				<div
					className={`absolute left-[-10px] w-[105%] h-[400px] bg-neutral-900 z-[2] rotate-[2deg] ${bottom}`}></div>
			</div>
		</>
	);
}
