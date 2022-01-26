import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "./navigator";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<Box as="main" pb={8}>
			<NavBar />
			<Container maxw="container.md" pt={14}>
				<Outlet />
			</Container>
		</Box>
	);
}

export default App;
