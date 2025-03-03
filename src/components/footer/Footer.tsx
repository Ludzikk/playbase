import Wrapper from "../other/Wrapper";
import Logo from "/playbase.png";
import TrustPilot from "/trustpilot.webp";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
	const year = new Date().getFullYear();
	const footerLinks = [
		{
			to: "termsofuse",
			name: "Terms of Use",
		},
		{
			to: "privacypolicy",
			name: "Privacy policy",
		},
		{
			to: "affilationprogram",
			name: "Affilation Program",
		},
		{
			to: "contactus",
			name: "Contact us",
		},
	];

	const footerLinksEl = footerLinks.map((link) => {
		return (
			<Link key={link.to} to={link.to} className="hover:text-white/80 duration-300">
				{link.name}
			</Link>
		);
	});

	return (
		<footer className="bg-neutral-950 py-6 [box-shadow:0px_0px_30px_rgba(0,0,0,0.5)]">
			<Wrapper>
				<div className="flex flex-col gap-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="flex flex-col items-center gap-6">
							<img src={Logo} alt="PlayBase Logo" />
							<img
								src={TrustPilot}
								alt="Trustpilot start"
								className="h-[70px]"
							/>
						</div>
						<div className="flex flex-col items-center gap-6">
							<nav className="flex flex-col gap-4 text-center">{footerLinksEl}</nav>
						</div>
						<div className="flex flex-col items-center gap-6">
							<nav className="flex gap-4">
								<a
									href="https://github.com/Ludzikk"
									target="_blank"
									rel="noopener noreferrer"
                                    className="text-3xl hover:text-white/80 duration-300">
									<FaGithub />
								</a>
								<a
									href="https://www.instagram.com/klcekk/"
									target="_blank"
									rel="noopener noreferrer"
                                    className="text-3xl hover:text-white/80 duration-300">
									<FaInstagram />
								</a>
							</nav>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<div className="w-full h-[2px] bg-gray-200/10"></div>
						<span className="font-bold text-white/80 text-center">
							Copyright &#169; {year} PlayBase - All right reserved
						</span>
					</div>
				</div>
			</Wrapper>
		</footer>
	);
}
