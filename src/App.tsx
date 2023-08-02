import { NavBarItem } from "@/types"
import NavBar from "./components/Navbar"
import Introduction from "./components/Introduction"
import MyStories from "./components/MyStories"
import About from "./components/About"
import Modal from "./components/Modal"

const NAVBAR_ITEMS = [
	{
		label: "MY STORIES",
		scrollTo: "#stories",
	},
	{
		label: "ABOUT",
		scrollTo: "#about",
	},
] as NavBarItem[]

function App() {
	return (
		<div className="bg-black">
			<NavBar items={NAVBAR_ITEMS} />
			<Introduction />
			<MyStories />
			<About />
			<Modal />
		</div>
	)
}

export default App
