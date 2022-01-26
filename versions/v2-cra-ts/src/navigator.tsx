import {
	Container,
	Box,
	Heading,
	Flex,
	useColorModeValue,
	Link,
	Stack,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { Link as NavLink } from "react-router-dom";

import Logo from "./logo";
import ThemeToggler from "./theme-toggle";

/*
const LinkItem = ({ href, path, _target, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
	return (
		<NextLink href={href} passHref>
			<Link
				p={2}
				bg={active ? 'grassTeal' : undefined}
				color={active ? '#202023' : inactiveColor}
				_target={_target}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	);
};
*/

const NavBar = (props: any) => {
	const { path } = props;

	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			/* bg contains the colors which need to be changed if NavBar is to match the rest of the document*/
			/* '#ffffff40', '#20202380' */
			bg={useColorModeValue("#FED7D7", "#2D3748")}
			css={{ backdropFilter: "blur(10px)" }}
			zIndex={1}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={"tighter"}>
						<Logo />
					</Heading>
				</Flex>
				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<NavLink to="/portfolio">Portfolio</NavLink>
					<Link href="./assets/CV.pdf" p={1} target="_blank">
						CV
					</Link>
					<Link
						href="https://github.com/sebaxj"
						target="_blank"
						display="inline-flex"
						alignItems="center"
						style={{ gap: 4 }}
					>
						<IoLogoGithub />
						Source
					</Link>
				</Stack>

				<Box flex={1} align="right">
					<ThemeToggler />
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu isLazy id="navigation-menu">
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<MenuItem>
									<NavLink to="/portfolio">Portfolio</NavLink>
								</MenuItem>
								<MenuItem>
									<Link
										href="./assets/CV.pdf"
										p={1}
										target="_blank"
									>
										CV
									</Link>
								</MenuItem>
								<MenuItem>
									<Link
										href="https://github.com/sebaxj"
										target="_blank"
										display="inline-flex"
										alignItems="center"
										style={{ gap: 4 }}
									>
										<IoLogoGithub />
										View my GitHub
									</Link>
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default NavBar;
