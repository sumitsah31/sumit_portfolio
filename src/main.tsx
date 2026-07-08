import "@fontsource/newsreader/400.css"
import "@fontsource/newsreader/500.css"
import "@fontsource/newsreader/400-italic.css"
import "@fontsource/newsreader/500-italic.css"
import "@fontsource/space-grotesk/400.css"
import "@fontsource/space-grotesk/500.css"
import "@fontsource/space-grotesk/600.css"
import "@fontsource/space-grotesk/700.css"
import "@fontsource/jetbrains-mono/400.css"
import "@fontsource/jetbrains-mono/500.css"
import "@fontsource/jetbrains-mono/600.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</React.StrictMode>,
)
