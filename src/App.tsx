import "./App.css"
import { ThemeProvider } from "./Theme/theme-provider"
import Home from "./components/myComponents/home"
import Navbar from "./components/myComponents/navbar"

function App() {
	return (
		<ThemeProvider
			defaultTheme="dark"
			storageKey="vite-ui-theme"
		>
			<div className="font-mono">
				<Navbar />
				<Home />
			</div>
		</ThemeProvider>
	)
}

export default App
