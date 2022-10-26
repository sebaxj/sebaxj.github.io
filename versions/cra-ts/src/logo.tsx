import { Text, Image, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 20px;
	display: inline-flex;
	align-items: center;
	height: 45px;
	line-height: 20px;
	padding: 10px;
	img {
		transition: 200ms ease;
	}
	&:hover img {
		transform: rotate(20deg);
	}
`;

const Logo = () => {
	const roseImg = "../assets/rose.png";

	return (
		<Link to="/">
			<a>
				<LogoBox>
					<Image src={roseImg} boxSize="35px" alt="rose" />
					<Text
						color={useColorModeValue("gray.700", "whiteAlpha.900")}
						fontFamily="M PLUS Rounded 1c"
						ml={1}
					>
						Sebastian James
					</Text>
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo;
