import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import HomePage from "./components/pages/HomePage";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
	return (
		<ParallaxProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ParallaxProvider>
	);
}
