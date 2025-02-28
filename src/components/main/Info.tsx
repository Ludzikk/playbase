import Wrapper from "../other/Wrapper";
import Trustpilot from "/trustpilot.webp";
import { IoIosCloudDownload, IoIosChatbubbles } from "react-icons/io";
import { AiFillSafetyCertificate } from "react-icons/ai";

export default function Info() {
	return (
		<section className="bg-neutral-950 [box-shadow:0px_0px_40px_rgba(0,0,0,0.5)]">
			<Wrapper>
				<div className="py-6 flex items-center justify-around">
					<div className="hidden lg:flex items-center gap-4">
						<IoIosCloudDownload className="text-5xl text-sky-400" />
						<h3 className="font-bold flex flex-col">
							<span className="text-xl">Super fast</span>
							<span className="text-sm font-normal">
								Instant digital download
							</span>
						</h3>
						<div className="bg-gray-200/10 w-[2px] h-[100px] ml-4"></div>
					</div>
					<div className="hidden md:flex items-center gap-4">
						<AiFillSafetyCertificate className="text-5xl text-sky-400" />
						<h3 className="font-bold flex flex-col">
							<span className="text-xl">Reliable & safe</span>
							<span className="text-sm font-normal">Over 10,000 games</span>
						</h3>
						<div className="bg-gray-200/10 w-[2px] h-[100px] ml-4"></div>
					</div>
					<div className="hidden sm:flex items-center gap-4">
						<IoIosChatbubbles className="text-5xl text-sky-400" />
						<h3 className="font-bold flex flex-col">
							<span className="text-xl">Customer support</span>
							<span className="text-sm font-normal">Human support 24/7</span>
						</h3>
						<div className="bg-gray-200/10 w-[2px] h-[100px] ml-4"></div>
					</div>
					<div className="flex flex-col items-center">
						<img
							src={Trustpilot}
							alt="Trustpilot stars"
							className="h-[110px] p-4"
						/>
						<span className="text-sm">
							TrustScore <span className="font-bold">5.0</span> |{" "}
							<span className="font-bold">5,323</span> reviews
						</span>
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
