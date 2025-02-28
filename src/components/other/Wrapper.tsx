import { ReactNode } from "react";

type WrapperProps = {
	children: ReactNode;
	maxW?: string;
};

export default function Wrapper({ children, maxW = "max-w-[1400px]" }: WrapperProps) {
	return (
		<div className={`${maxW} w-full mx-auto px-4 `}>
			{children}
		</div>
	);
}
