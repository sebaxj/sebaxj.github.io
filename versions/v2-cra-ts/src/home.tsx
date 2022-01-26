import {
	Box,
	Container,
	Text,
	Link,
	useColorModeValue,
	Heading,
	Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as NavLink } from "react-router-dom";

const Home = () => {
	return (
		<Box as="main" pb={8}>
			<Container maxW="container.md" pt={14}>
				<Box mb={1}></Box>
				<Box
					borderRadius="lg"
					mb={6}
					p={3}
					bg={useColorModeValue("#FED7D7", "#2D3748")}
					textAlign="center"
					fontFamily="M PLUS Rounded 1c"
				>
					I am a Student Studying Computer Science and Music
				</Box>
				<Box display={{ md: "flex" }} flexGrow={1}>
					<Heading as="h2" variant="page-title">
						<Text
							color={useColorModeValue(
								"gray.700",
								"whiteAlpha.900"
							)}
							fontFamily='1"'
							fontWeight="bold"
							ml={3}
						>
							Sebastian James
						</Text>
					</Heading>
				</Box>
				<br />
				<p>Stanford University Class of 2022</p>
				<p>Music + Human Computer Interaction</p>
				<Box borderRadius="lg" mb={6} p={3} textAlign="center"></Box>
				<p>Currently, I am working on...</p>
				<br />
				<ul>
					<li>
						Capstone Project: Using C/C++, Linux, ChucK, and
						Circuitry on a Raspberry Pi System.
					</li>
					<li>
						MERN Full Stack Web Application Development: Migrating
						this website towards Full Stack JavaScript architecture.
						Building this website using Next.js and Express.
					</li>
					<li>
						Cross-Platform Full Stack Application Development: Using
						Node.js to develop a Mobile and Web Application.
					</li>
				</ul>
				<Box borderRadius="lg" mb={6} p={3} textAlign="center"></Box>
				<Box align="center">
					<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
						<NavLink to="/portfolio">My Portfolio</NavLink>
					</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default Home;
