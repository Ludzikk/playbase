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
import CartPage from "./components/pages/CartPage";

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

type GameCart = {
	title: string;
	price: number;
	amount: number;
	img: string;
	sale: number;
};

type CartContextType = {
    cart: GameCart[];
    addItemToCart: (gameTitle: string) => void;
    deleteItemFromCart: (gameTitle: string) => void;
    changeAmountOfItemInCart: (gameTitle: string, amount: number) => void;
};


const GamesDataContext = createContext<Game[] | []>([]);
const CartContext = createContext<CartContextType | undefined>(undefined);

export default function App() {
	const [gamesData, setGamesData] = useState<Game[]>([]);
	const [cart, setCart] = useState<GameCart[]>(() => {
		const savedCart = localStorage.getItem("cart");
		return savedCart ? JSON.parse(savedCart) : [];
	});

	function addItemToCart(gameTitle: string) {
		setCart((prevCart) => {
			const existingGame = prevCart.find((game) => game.title === gameTitle);
			const gameData = gamesData.find((game) => game.title === gameTitle);

			if (existingGame) {
				return prevCart.map((game) =>
					game.title === gameTitle ? { ...game, amount: game.amount + 1 } : game
				);
			} else if(gameData) {
				return [
					...prevCart,
					{
						title: gameTitle,
						price: gameData.price,
						amount: 1,
						img: gameData.thumbnail,
						sale: gameData.sale,
					},
				];
			}

			return prevCart
		});
	}

	function deleteItemFromCart(gameTitle: string) {
		setCart((prevCart) => {
			return prevCart.filter(game => game.title !== gameTitle)
		});
	}

	function changeAmountOfItemInCart(gameTitle: string, amount: number) {
		setCart((prevCart) => {
			return prevCart.map((game) =>
				game.title === gameTitle ? {...game, amount: amount} : game
			);
		});
	}

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

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<ParallaxProvider>
			<GamesDataContext.Provider value={gamesData}>
				<CartContext.Provider
					value={{
						cart,
						addItemToCart,
						deleteItemFromCart,
						changeAmountOfItemInCart,
					}}>
					<BrowserRouter basename={import.meta.env.BASE_URL}>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route index element={<HomePage />} />
								<Route path="game/:title" element={<GamePage />} />
								<Route path="search/:title" element={<SearchBoxPage />} />
								<Route path="search" element={<SearchBoxPage />} />
								<Route path="cart" element={<CartPage />} />
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
				</CartContext.Provider>
			</GamesDataContext.Provider>
		</ParallaxProvider>
	);
}

export { GamesDataContext, CartContext };
