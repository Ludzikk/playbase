import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import HomePage from "./components/pages/HomePage";
import { ParallaxProvider } from "react-scroll-parallax";
import PageNotFound from "./components/pages/PageNotFound";
import SearchLayout from "./components/pages/SearchLayout";
import SearchPage from "./components/pages/SearchPage";
import GamePage from "./components/pages/GamePage";
import SearchBoxPage from "./components/pages/SearchBoxPage";
import { db } from "./functions/firebase";
import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

type Game = {
	title: string;
	desc: string;
	descShort: string;
	price: number;
	sale: number;
	releaseDate: string;
	inStock: boolean;
	developer: string;
	publisher: string;
	thumbnail: string;
	bg: string;
	platforms: string[];
	genre: string[];
	tags: string[];
	images: string[];
};

const GamesDataContext = createContext<Game[] | []>([]);

export default function App() {
	const [gamesData, setGamesData] = useState<Game[]>([]);

	useEffect(() => {
		const gamesRef = collection(db, "games");

		async function getData() {
			try {
				const snapshot = await getDocs(gamesRef);
				const gamesList: Game[] = snapshot.docs.map((doc) => ({
					...(doc.data() as Game),
				  }));
				  
				setGamesData(gamesList);
			} catch (error) {
				console.error("Error while downloading data:", error);
			}
		}

		getData();
	}, []);

	return (
		<ParallaxProvider>
			<GamesDataContext.Provider value={gamesData}>
				<BrowserRouter basename={import.meta.env.BASE_URL}>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<HomePage />} />
							<Route path="game/:title" element={<GamePage />} />
							<Route path="search/:title" element={<SearchBoxPage />} />
							<Route path="search" element={<SearchBoxPage />} />
							<Route element={<SearchLayout />}>
								<Route path="pc" element={<SearchPage />} />
								<Route path="playstation" element={<SearchPage />} />
								<Route
									path="playstation/playstation4"
									element={<SearchPage />}
								/>
								<Route
									path="playstation/playstation5"
									element={<SearchPage />}
								/>
								<Route path="xbox" element={<SearchPage />} />
								<Route path="xbox/xboxone" element={<SearchPage />} />
								<Route path="xbox/xboxseriesxs" element={<SearchPage />} />
								<Route path="nintendo" element={<SearchPage />} />
							</Route>
						</Route>
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</GamesDataContext.Provider>
		</ParallaxProvider>
	);
}

export { GamesDataContext };
