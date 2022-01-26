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

const Portfolio = () => {
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
				>
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
							Portfolio
						</Text>
					</Heading>
				</Box>
				<Box borderRadius="lg" mb={6} p={3}></Box>
				<Heading as="h3" size="md" letterSpacing={"tighter"}>
					<Text
						color={useColorModeValue("gray.700", "whiteAlpha.900")}
						fontFamily='1"'
						fontWeight="bold"
						ml={3}
					>
						Course Work
					</Text>
				</Heading>
				<br />
				CS 107E | Stanford University | Fall 2020 <br />
				Computer Systems from the Ground Up | Professor: Philip Levis
				and Christos Kozyrakis
				<br />
				<Box>
					<Link
						href="https://github.com/sebaxj/pi-musical-keyboard#bare-metal-musical-keyboard-on-the-raspberry-pi"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Bare Metal Raspberry Pi Programming in C and
							Assembly
						</Button>
					</Link>
				</Box>
				<br />
				Music 256A | Stanford University | Fall 2021 <br />
				Music, Computing, Design: The Art of Design | Professor: Ge Wang
				<br />
				<Box>
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/256a/final/index.html"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Musical Operation
						</Button>
					</Link>
				</Box>
				<br />
				<Box>
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/256a/hw2/index.html"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Galactic Sistine Chapel: An Audio Visualizer
						</Button>
					</Link>
				</Box>
				<br />
				<Box>
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/256a/hw3/index.html"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							ECG Sequencer: A Music Sequencer
						</Button>
					</Link>
				</Box>
				<br />
				<Box>
					Complete Course Archive <br />
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/256a/index.html"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Portfolio
						</Button>
					</Link>
				</Box>
				<br />
				Music 451A | Stanford University | Fall 2018 <br />
				Basics in Auditory and Music Neuroscience | Professor: Takako
				Fujioka
				<br />
				<Box>
					<Link
						href="../assets/music451a-final-report.pdf"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							<Text textAlign="center">
								Gender Priming Pitch Height and Instrument
								Timbre Perception:
								<br />
								Differentiating the N400 ERP Component
							</Text>
						</Button>
					</Link>
				</Box>
				<br />
				Music 451C | Stanford University | Fall 2019 <br />
				Auditory EEG Research III: Coordinated Actions and Hyperscanning
				| Professor: Takako Fujioka
				<br />
				<Box>
					<Link
						href="../assets/music451c-final-report.pdf"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							<Text textAlign="center">
								Alpha Power as a Constituent of Agency and
								Creativity:
								<br />
								Looking at a Pilot Piano Turn-Taking
								Improvisation Duet
							</Text>
						</Button>
					</Link>
				</Box>
				<br />
				ENGR 40M | Stanford University | Fall 2019 <br />
				An Intro to Making: What is EE | Professor: Mark Horowitz
				<br />
				<Box>
					<Link
						href="https://github.com/sebaxj/Jumper"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Jumper: Flappy Bird built with C++, Capacitive
							Sensing, and an LED array
						</Button>
					</Link>
				</Box>
				<br />
				Music 220A | Stanford University | Spring 2021 <br />
				Fundamentals of Computer Generated Sound | Professor: Ge Wang
				<br />
				<Box>
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/220a/final/index.html"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							An Audiovisual Exhibit with Processing and ChucK
						</Button>
					</Link>
				</Box>
				<br />
				<Box>
					Other Selected Works: <br />
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/220a/hw1/wav/part5.wav"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							A Gregorian Take on 220A
						</Button>
					</Link>
					<br />
					<br />
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/220a/hw2/wav/3-statement.wav"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Distex
						</Button>
					</Link>
					<br />
					<br />
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/220a/hw3/wav/4-statement.wav"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							She-vicii
						</Button>
					</Link>
					<br />
					<br />
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/220a/index.html"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Complete Course Archive
						</Button>
					</Link>
				</Box>
				{/*				<br />
				React.js
				<br />
				<Box>
					<Link href="/react" passhref style={{ textDecoration: 'none' }} target="_blank">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							My First React App: A Simple Tic-Tac-Toe Game
						</Button>
					</Link>
				</Box>*/}
				<br />
				PWR 1JJ | Stanford University | Fall 2018 <br />
				Writing & Rhetoric 1: The Rhetoric of Language and Thought |
				Jennifer Johnson
				<br />
				<Box>
					<Link
						href="../assets/RBA1.pdf"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Rhetorically Based Argument for the Efficacy of
							Music Therapy
						</Button>
					</Link>
				</Box>
				<Box borderRadius="lg" mb={6} p={3}></Box>
				<Heading as="h3" size="md" letterSpacing={"tighter"}>
					<Text
						color={useColorModeValue("gray.700", "whiteAlpha.900")}
						fontFamily='1"'
						fontWeight="bold"
						ml={3}
					>
						Writing Samples
					</Text>
				</Heading>
				<br />
				<Box>
					<Link
						href="../assets/RA_of_Zombie_FINAL.pdf"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Rhetorical Analysis of Zombie by The Cranberries
						</Button>
					</Link>
					<br />
					<br />
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/256a/rr7.html"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							<i>Artful Design: Social Design</i>
						</Button>
					</Link>
					<br />
					<br />
					<Link
						href="https://ccrma.stanford.edu/~sebaxj/256a/rr8.html"
						passHref
						style={{ textDecoration: "none" }}
						target="_blank"
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							<i>Artful Design: Manifesto and Coda</i>
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	);
};

export default Portfolio;
