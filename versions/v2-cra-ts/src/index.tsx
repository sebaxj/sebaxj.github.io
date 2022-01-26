import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Portfolio from "./portfolio";
import Home from "./home";

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<ChakraProvider>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />
						<Route path="portfolio" element={<Portfolio />} />
					</Route>
				</Routes>
			</ChakraProvider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
